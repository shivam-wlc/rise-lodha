// const screens = document.querySelectorAll(".screen");
// const nextButton = document.getElementById("nextButton");
// let currentIndex = 0;
// let isTransitioning = false;
// let lastTouchTime = 0;

// // Function to show the current screen
// function updateScreens() {
//   screens.forEach((screen, index) => {
//     if (index < currentIndex) {
//       screen.style.transform = "translateY(0)"; // Keep previous screens fixed in place
//     } else if (index === currentIndex) {
//       screen.style.transform = "translateY(0)"; // Show current screen
//     } else {
//       screen.style.transform = "translateY(100%)"; // Slide next screens from below
//     }
//   });
// }

// // Unified function to handle transitions
// function handleTransition(direction) {
//   if (!isTransitioning) {
//     isTransitioning = true;

//     if (direction === "next" && currentIndex < screens.length - 1) {
//       currentIndex++;
//     } else if (direction === "prev" && currentIndex > 0) {
//       currentIndex--;
//     }

//     updateScreens();

//     setTimeout(() => {
//       isTransitioning = false;
//     }, 800); // Adjust duration as needed
//   }
// }

// // window.addEventListener(
// //   "wheel",
// //   (event) => {
// //     event.preventDefault();
// //     if (Math.abs(event.deltaY) > 30) {
// //       handleTransition(event.deltaY > 0 ? "next" : "prev");
// //     }
// //   },
// //   { passive: false }
// // );
// if (!/Mobi|Android/i.test(navigator.userAgent)) {
//   window.addEventListener(
//     "wheel",
//     (event) => {
//       event.preventDefault();
//       if (Math.abs(event.deltaY) > 30) {
//         handleTransition(event.deltaY > 0 ? "next" : "prev");
//       }
//     },
//     { passive: false }
//   );
// }

// // Handle touch events (mobile)
// let touchStartY = 0;

// window.addEventListener("touchstart", (event) => {
//   touchStartY = event.touches[0].clientY;
// });

// // window.addEventListener("touchend", (event) => {
// //   const touchEndY = event.changedTouches[0].clientY;
// //   if (touchStartY > touchEndY + 50) {
// //     handleTransition("next"); // Swiping up
// //   } else if (touchStartY < touchEndY - 50) {
// //     handleTransition("prev"); // Swiping down
// //   }
// // });
// window.addEventListener("touchend", (event) => {
//   const touchEndY = event.changedTouches[0].clientY;
//   const currentTime = Date.now();

//   // Throttle the touch events to prevent rapid firing
//   if (currentTime - lastTouchTime > 300) {
//     if (touchStartY > touchEndY + 50) {
//       handleTransition("next");
//     } else if (touchStartY < touchEndY - 50) {
//       handleTransition("prev");
//     }
//     lastTouchTime = currentTime;
//   }
// });

// // Handle button click
// nextButton.addEventListener("click", () => {
//   handleTransition("next");
// });

// // Initial call to set the first screen
// updateScreens();

// // Smooth transition to the 7th screen on "Our Story" link click
// document.addEventListener("DOMContentLoaded", () => {
//   const ourStoryLink = document.getElementById("our-story-link");

//   if (ourStoryLink) {
//     ourStoryLink.addEventListener("click", (event) => {

//       event.preventDefault(); // Prevent default anchor behavior
//       event.stopImmediatePropagation();

//       // Directly set the currentIndex to 6 (7th screen)
//       currentIndex = 7;
//       updateScreens();
//     });
//   }
// });

// // Smooth transition to the )th screen on "Home" link click
// document.addEventListener("DOMContentLoaded", () => {
//   const ourStoryLink = document.getElementById("home");

//   if (ourStoryLink) {
//     ourStoryLink.addEventListener("click", (event) => {

//       event.preventDefault(); // Prevent default anchor behavior
//       event.stopImmediatePropagation();

//       // Directly set the currentIndex to 6 (7th screen)
//       currentIndex = 0;
//       updateScreens();
//     });
//   }
// });

// // Smooth transition to the 7th screen on "Why Us" link click
// document.addEventListener("DOMContentLoaded", () => {
//   const ourStoryLink = document.getElementById("why-us-link");

//   if (ourStoryLink) {
//     ourStoryLink.addEventListener("click", (event) => {
//       event.preventDefault(); // Prevent default anchor behavior
//       event.stopImmediatePropagation();

//       // Directly set the currentIndex to 6 (7th screen)
//       currentIndex = 14;
//       updateScreens();
//     });
//   }
// });

// // Smooth transition to the 7th screen on "programmes" link click
// document.addEventListener("DOMContentLoaded", () => {
//   const ourStoryLink = document.getElementById("programmes-link");

//   if (ourStoryLink) {
//     ourStoryLink.addEventListener("click", (event) => {
//       event.preventDefault(); // Prevent default anchor behavior
//       event.stopImmediatePropagation();

//       // Directly set the currentIndex to 27 (28th screen)
//       currentIndex = 28;
//       updateScreens();
//     });
//   }
// });

// // Smooth transition to the 7th screen on "admission" link click
// document.addEventListener("DOMContentLoaded", () => {
//   const ourStoryLink = document.getElementById("admission-link");

//   if (ourStoryLink) {
//     ourStoryLink.addEventListener("click", (event) => {
//       event.preventDefault(); // Prevent default anchor behavior
//       event.stopImmediatePropagation();

//       // Directly set the currentIndex to 34 (34th screen)
//       currentIndex = 35;
//       updateScreens();
//     });
//   }
// });

// // Smooth transition to the 7th screen on "Our Story" link click
// document.addEventListener("DOMContentLoaded", () => {
//   const ourStoryLink = document.getElementById("contact-us-link");

//   if (ourStoryLink) {
//     ourStoryLink.addEventListener("click", (event) => {
//       event.preventDefault();
//       event.stopImmediatePropagation();

//       // Directly set the currentIndex to 41 (42th screen)
//       currentIndex = 42;
//       updateScreens();
//     });
//   }
// });

// // Smooth transition to the 7th screen on "Our Story" link click
// document.addEventListener("DOMContentLoaded", () => {
//   const ourStoryLink = document.getElementById("book-button");

//   if (ourStoryLink) {
//     ourStoryLink.addEventListener("click", (event) => {
//       event.preventDefault();
//       event.stopImmediatePropagation();

//       // Directly set the currentIndex to 41 (42th screen)
//       currentIndex = 44;
//       updateScreens();
//     });
//   }
// });

const screens = document.querySelectorAll(".screen");
const nextButton = document.getElementById("nextButton");
let currentIndex = 27;
let isTransitioning = false;
let lastTouchTime = 0;

// Function to show the current screen
function updateScreens() {
	screens.forEach((screen, index) => {
		if (index < currentIndex) {
			screen.style.transform = "translateY(0)"; // Keep previous screens fixed in place
		} else if (index === currentIndex) {
			screen.style.transform = "translateY(0)"; // Show current screen
		} else {
			screen.style.transform = "translateY(100%)"; // Slide next screens from below
		}
	});
}

// Unified function to handle transitions
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
		}, 800); // Adjust duration as needed
	}
}

// Wheel Event (Desktop only)
if (!/Mobi|Android/i.test(navigator.userAgent)) {
	let lastWheelTime = 0;
	window.addEventListener(
		"wheel",
		(event) => {
			const now = Date.now();
			if (now - lastWheelTime < 500) return; // Debounce interval for wheel events
			lastWheelTime = now;

			event.preventDefault();
			if (Math.abs(event.deltaY) > 30) {
				handleTransition(event.deltaY > 0 ? "next" : "prev");
			}
		},
		{ passive: false }
	);
}

// Handle touch events (Mobile)
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

		// Throttle the touch events to prevent rapid firing
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

// Handle button click
nextButton.addEventListener("click", () => {
	handleTransition("next");
});

// Initial call to set the first screen
updateScreens();

// Function to handle smooth transitions for link clicks
function smoothTransition(linkId, targetIndex) {
	const link = document.getElementById(linkId);
	if (link) {
		link.addEventListener("click", (event) => {
			event.preventDefault();
			event.stopImmediatePropagation();

			// Update the screen index and display the target screen
			currentIndex = targetIndex;
			updateScreens();
		});
	}
}

// Smooth transitions for each specific link
document.addEventListener("DOMContentLoaded", () => {
	smoothTransition("our-story-link", 7);
	smoothTransition("home", 0);
	smoothTransition("why-us-link", 14);
	smoothTransition("programmes-link", 28);
	smoothTransition("admission-link", 35);
	smoothTransition("contact-us-link", 42);
	smoothTransition("book-button", 44);
});
