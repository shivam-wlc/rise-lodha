import { updateVideoSource } from "./responsiveVideo.js";

const activeIndexes = {
	"carousel-images": 0,
	"carousel-text": 0,
};
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", (event) => {
	event.preventDefault();
	updateVideoSource();
	window.addEventListener("resize", updateVideoSource);
});

document.addEventListener("DOMContentLoaded", () => {
	const screens = document.querySelectorAll(".screen");
	const nextButton = document.getElementById("nextButton");
	let isTransitioning = false;
	let lastTouchTime = 0;

	// Function to update visible screens
	function updateScreens() {
		screens.forEach((screen, index) => {
			if (index < currentIndex) {
				// Keep the current screen in place
				screen.style.transform = "translateY(100)";
			} else if (index === currentIndex) {
				// Center the current screen
				screen.style.transform = "translateY(0)";
			} else {
				// Move below the current screen
				screen.style.transform = `translateY(${100 * (index - currentIndex)}%)`;
			}
		});
	}

	// Unified transition handler
	function handleTransition(direction) {
		if (!isTransitioning) {
			isTransitioning = true;

			if (direction === "next" && currentIndex < screens.length - 1) {
				currentIndex++;
			} else if (direction === "prev" && currentIndex > 0) {
				currentIndex--;
			}

			updateScreens();

			setTimeout(() => {
				isTransitioning = false;
			}, 800); // Adjust duration if necessary
		}
	}

	// Wheel event for scrolling (desktop)
	if (!/Mobi|Android/i.test(navigator.userAgent)) {
		let lastWheelTime = 0;
		window.addEventListener(
			"wheel",
			(event) => {
				const now = Date.now();
				if (now - lastWheelTime < 500) return;
				lastWheelTime = now;

				event.preventDefault();
				const scrollThreshold = 2;
				// Increase threshold for Mac touchpad sensitivity
				if (Math.abs(event.deltaY) > scrollThreshold) {
					handleTransition(event.deltaY > 0 ? "next" : "prev");
				}
			},
			{ passive: false }
		);
	}

	// Touch event for scrolling (mobile)
	let touchStartY = 0;
	window.addEventListener(
		"touchstart",
		(event) => {
			touchStartY = event.touches[0].clientY;
		},
		{ passive: true }
	);

	window.addEventListener(
		"touchend",
		(event) => {
			const touchEndY = event.changedTouches[0].clientY;
			const currentTime = Date.now();

			if (currentTime - lastTouchTime > 300) {
				if (touchStartY > touchEndY + 50) {
					handleTransition("next");
				} else if (touchStartY < touchEndY - 50) {
					handleTransition("prev");
				}
				lastTouchTime = currentTime;
			}
		},
		{ passive: true }
	);

	// Smooth transitions for menu links
	function smoothTransition(linkId, targetIndex) {
		const link = document.getElementById(linkId);
		if (link) {
			link.addEventListener("click", (event) => {
				event.preventDefault();
				currentIndex = targetIndex;
				updateScreens();
			});
		}
	}

	// Assign menu link transitions (adjust target indexes as needed)
	smoothTransition("home-link", 0);
	smoothTransition("our-story-link", 7);
	smoothTransition("why-us-link", 14);
	smoothTransition("programmes-link", 28);
	smoothTransition("admission-link", 35);
	smoothTransition("contact-us-link", 41);
	smoothTransition("book-button", 43);

	// Initial call to set the first screen
	updateScreens();

	document
		.getElementById("carousel1-right-icon")
		.addEventListener("click", () => {
			moveRight("carousel-images");
		});
	document
		.getElementById("carousel1-left-icon")
		.addEventListener("click", () => {
			moveLeft("carousel-images");
		});

	document
		.getElementById("carousel2-right-icon")
		.addEventListener("click", () => {
			moveRight("carousel-text");
		});
	document
		.getElementById("carousel2-left-icon")
		.addEventListener("click", () => {
			moveLeft("carousel-text");
		});

	// Add event listeners to the images
	document.querySelectorAll(".circular-item a").forEach((item) => {
		item.addEventListener("click", function (event) {
			event.preventDefault(); // Prevent default link behavior
			const imageSrc = this.href; // Get the image source
			openModal(imageSrc); // Open the modal with the clicked image
		});
	});

	if (typeof emailjs !== "undefined") {
		emailjs.init("G2SDjizAB86ZjO6Tz");
	} else {
		return;
	}
	// Function to add submit event to forms
	function addFormListener(formId) {
		const bookingForm = document.getElementById(formId);
		if (!bookingForm) return; // Skip if form does not exist
		bookingForm.addEventListener("submit", function (event) {
			event.preventDefault(); // Prevent default submission
			// Get input values
			const fromName = bookingForm["name"].value;
			const email = bookingForm["email"].value;
			const mobile = bookingForm["mobile"].value;
			const childName = bookingForm["childname"].value;
			const childAgeYear = bookingForm["childage-year"].value;
			const childAgeMonth = bookingForm["childage-month"].value;
			const city = bookingForm["city"].value;
			// Create message
			const message = `You have received a booking from ${fromName}. Details:
                        Name: ${fromName}
                        Email: ${email}
                        Mobile: ${mobile}
                        Child's Name: ${childName}
                        Child's Age: ${childAgeYear} years ${childAgeMonth} months
                        City: ${city}`;
			const formData = {
				to_name: "Recipient Name",
				from_name: fromName,
				message,
			};

			console.log(emailjs, formData);
			// Send email
			emailjs
				.send("service_gb9bmin", "template_ktx4jsb", formData)
				.then((response) => {
					alert("Your booking request has been sent!");
				})
				.catch((error) => {
					alert("Oops! Something went wrong. Please try again.");
				});
			bookingForm.reset(); // Reset form after submission
		});
	}
	// Attach listeners to both forms
	addFormListener("booking-form");
	addFormListener("admission-booking-form");

	nextButton.addEventListener("click", () => {
		handleTransition("next");
	});
});

function moveLeft(carouselClass) {
	const circularItems = document.querySelectorAll(
		`.${carouselClass} .circular-item`
	);
	if (activeIndexes[carouselClass] > 0) {
		activeIndexes[carouselClass]--;
	} else {
		// Wrap around to the end
		activeIndexes[carouselClass] = circularItems.length - 1;
	}
	updateCircularItems(circularItems, activeIndexes[carouselClass]);
}

function moveRight(carouselClass) {
	const circularItems = document.querySelectorAll(
		`.${carouselClass} .circular-item`
	);
	if (activeIndexes[carouselClass] < circularItems.length - 1) {
		activeIndexes[carouselClass]++;
	} else {
		// Wrap around to the start
		activeIndexes[carouselClass] = 0;
	}
	updateCircularItems(circularItems, activeIndexes[carouselClass]);
}

function updateCircularItems(circularItems, activeIndex) {
	circularItems.forEach((item, index) => {
		item.classList.remove("active");
		if (index === activeIndex) {
			item.classList.add("active");
		}
	});
}

// Open the modal and display the clicked image
function openModal(imageSrc) {
	const modal = document.getElementById("image-modal");
	const modalImg = document.getElementById("modal-image");
	modal.style.display = "block";
	modalImg.src = imageSrc;
}

