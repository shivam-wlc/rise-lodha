import { updateVideoSource } from "./responsiveVideo.js";

const activeIndexes = {
  "carousel-images": 0,
  "carousel-text": 0,
};
let currentIndex = 0;
let isAllowedPage = {
  Home: { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true },
  OurStory: {
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
  },
  WhyUs: {
    14: true,
    15: true,
    16: true,
    17: true,
    18: true,
    19: true,
    20: true,
  },
  Programmes: {
    21: true,
    22: true,
    23: true,
    24: true,
    25: true,
    26: true,
    27: true,
  },
  Admission: { 28: true, 29: true, 30: true, 31: true, 32: true },
  ContactUs: { 34: true, 35: true },
  bookNow: { 36: true },
  letterCircle: { 32: true },
};

let changeMenu = isAllowedPage.Home;
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
    if (!changeMenu[currentIndex]) {
      return;
    }

    screens.forEach((screen, index) => {
      //

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
    const shouldAllowNext = changeMenu[currentIndex + 1];
    const shouldAllowPrev = changeMenu[currentIndex - 1];

    if (direction === "next" && !shouldAllowNext) {
      console.log("shouldAllowNext", shouldAllowNext);
      console.log("shouldAllowPrev", shouldAllowPrev);
      return;
    }

    if (direction === "prev" && !shouldAllowPrev) {
      console.log("shouldAllowNext", shouldAllowNext);
      console.log("shouldAllowPrev", shouldAllowPrev);
      return;
    }

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
  function smoothTransition(linkId, targetIndex, menu) {
    const link = document.getElementById(linkId);

    if (link) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        if (menu) {
          changeMenu = menu;
          document.querySelectorAll(".navlink-active").forEach((item) => {
            item.classList.remove("navlink-active");
          });
          event.target.classList.add("navlink-active");
        }
        currentIndex = targetIndex;
        updateScreens();
      });
    }
  }

  // Assign menu link transitions (adjust target indexes as needed)
  smoothTransition("home-link", 0, isAllowedPage.Home);
  smoothTransition("our-story-link", 7, isAllowedPage.OurStory);
  smoothTransition("why-us-link", 14, isAllowedPage.WhyUs);
  smoothTransition("programmes-link", 21, isAllowedPage.Programmes);
  smoothTransition("admission-link", 28, isAllowedPage.Admission);
  smoothTransition("contact-us-link", 34, isAllowedPage.ContactUs);
  smoothTransition("book-button", 36, isAllowedPage.bookNow);
  smoothTransition("letter-circle", 32, isAllowedPage.Admission);

  // Our Story
  smoothTransition("our-story-purpose", 8);
  smoothTransition("our-story-mission", 10);
  smoothTransition("our-story-philosophy", 9);
  smoothTransition("our-story-team", 11);
  // Why us
  smoothTransition("why-us-mind-model", 15);
  smoothTransition("why-us-curriculum", 16);
  smoothTransition("why-us-infrastructure", 17);
  smoothTransition("why-us-enrichment", 18);
  smoothTransition("why-us-growth-mindset", 19);
  smoothTransition("why-us-partnerships", 20);
  //PROGRAMMS
  smoothTransition("programme-toddler", 22);
  smoothTransition("programme-playgroup", 23);
  smoothTransition("programme-nursery", 24);
  smoothTransition("programme-jrkg", 25);
  smoothTransition("programme-srkg", 26);
  //Admission
  smoothTransition("admission-process", 29);
  smoothTransition("eligibility-criterion", 30);
  smoothTransition("fee-structure", 31);
  smoothTransition("apply-for-admission", 32);
  //RED CIRCLE
  // smoothTransition("letter-circle", 32);

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
  // addFormListener("booking-form");
  // addFormListener("admission-booking-form");

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

let currentCarouselIndex = 0;
let itemsPerPage = 4; // Default value for larger screens
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

// Function to update itemsPerPage based on screen size
function updateItemsPerPage() {
  if (window.innerWidth <= 768) {
    // Small screen (mobile/tablet)
    itemsPerPage = 2;
  } else {
    // Large screen (desktop)
    itemsPerPage = 4;
  }
  // Reset the carousel index when changing the screen size
  currentCarouselIndex = 0;
  moveCarousel(0); // Move the carousel to the correct position
}

leftButton.addEventListener("click", () => moveCarousel(-1));
rightButton.addEventListener("click", () => moveCarousel(1));

// Function to move the carousel based on direction
function moveCarousel(direction) {
  const container = document.querySelector(".why-us-carousal-container");
  const totalItems = document.querySelectorAll(".why-us-carousal-item").length;
  console.log("currentCarouselIndex", currentCarouselIndex);

  // Calculate the new index after moving left or right
  currentCarouselIndex += direction;

  // Prevent going past the start or end of the carousel
  if (currentCarouselIndex < 0) {
    currentCarouselIndex = 0;
  }

  // Hardcoded max index for mobile devices (8) and desktop devices (4)
  if (window.innerWidth <= 768) {
    // For mobile (max index 8)
    if (currentCarouselIndex > 9) {
      currentCarouselIndex = 9;
    }
  } else {
    // For desktop (max index 4)
    if (currentCarouselIndex > 4) {
      currentCarouselIndex = 4;
    }
  }

  if (currentCarouselIndex > totalItems - itemsPerPage) {
    currentCarouselIndex = totalItems - itemsPerPage;
  }

  // Disable the right button if the last index is reached
  if (currentCarouselIndex == totalItems - itemsPerPage) {
    rightButton.disabled = true;
  } else {
    rightButton.disabled = false;
  }

  // Calculate how far to translate the carousel
  const translateValue =
    ((currentCarouselIndex * 100) / totalItems) * itemsPerPage;

  // Update the transform property to slide the carousel
  container.style.transform = `translateX(-${translateValue}%)`;
}

// Adjust the itemsPerPage on page load and window resize
window.addEventListener("resize", updateItemsPerPage);
updateItemsPerPage(); // Initialize on page load

// popup
// Select elements
// Select elements
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const closePopup = document.getElementById("close-popup");
const popupContainer = document.querySelector(".popup"); // Select the outer popup container

// Show popup on page load
window.addEventListener("load", () => {
  popup.classList.add("active"); // Add 'active' class to show popup
});

popupImage.addEventListener("click", () => {
  const screens = document.querySelectorAll(".screen");
  function updateScreens() {
    if (!changeMenu[currentIndex]) {
      return;
    }

    screens.forEach((screen, index) => {
      if (index < currentIndex) {
        screen.style.transform = "translateY(100%)";
      } else if (index === currentIndex) {
        screen.style.transform = "translateY(0)";
      } else {
        screen.style.transform = `translateY(${100 * (index - currentIndex)}%)`;
      }
    });
  }

  changeMenu = isAllowedPage.bookNow;
  currentIndex = 36;

  popup.classList.remove("active");
  popupContainer.style.display = "none";

  updateScreens();
});

// Close popup when clicking the close button
closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
  popupContainer.style.display = "none";
});
