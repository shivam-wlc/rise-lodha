const screens = document.querySelectorAll(".screen");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;
let isTransitioning = false;

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

// Handle scroll events (desktop)
// window.addEventListener("wheel", (event) => {
// 	event.preventDefault();
// 	if (Math.abs(event.deltaY) > 30) {
// 		handleTransition(event.deltaY > 0 ? "next" : "prev");
// 	}
// });

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    if (Math.abs(event.deltaY) > 30) {
      handleTransition(event.deltaY > 0 ? "next" : "prev");
    }
  },
  { passive: false }
);

// Handle touch events (mobile)
let touchStartY = 0;

window.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0].clientY;
});

window.addEventListener("touchend", (event) => {
  const touchEndY = event.changedTouches[0].clientY;
  if (touchStartY > touchEndY + 50) {
    handleTransition("next"); // Swiping up
  } else if (touchStartY < touchEndY - 50) {
    handleTransition("prev"); // Swiping down
  }
});

// Handle button click
nextButton.addEventListener("click", () => {
  handleTransition("next");
});

// Initial call to set the first screen
updateScreens();

// Smooth transition to the 7th screen on "Our Story" link click
document.addEventListener("DOMContentLoaded", () => {
  const ourStoryLink = document.getElementById("our-story-link");

  if (ourStoryLink) {
    ourStoryLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      // Directly set the currentIndex to 6 (7th screen)
      currentIndex = 7;
      updateScreens();
    });
  }
});

// Smooth transition to the )th screen on "Home" link click
document.addEventListener("DOMContentLoaded", () => {
  const ourStoryLink = document.getElementById("home");

  if (ourStoryLink) {
    ourStoryLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      // Directly set the currentIndex to 6 (7th screen)
      currentIndex = 0;
      updateScreens();
    });
  }
});

// Smooth transition to the 7th screen on "Why Us" link click
document.addEventListener("DOMContentLoaded", () => {
  const ourStoryLink = document.getElementById("why-us-link");

  if (ourStoryLink) {
    ourStoryLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      // Directly set the currentIndex to 6 (7th screen)
      currentIndex = 14;
      updateScreens();
    });
  }
});

// Smooth transition to the 7th screen on "programmes" link click
document.addEventListener("DOMContentLoaded", () => {
  const ourStoryLink = document.getElementById("programmes-link");

  if (ourStoryLink) {
    ourStoryLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      // Directly set the currentIndex to 27 (28th screen)
      currentIndex = 28;
      updateScreens();
    });
  }
});

// Smooth transition to the 7th screen on "admission" link click
document.addEventListener("DOMContentLoaded", () => {
  const ourStoryLink = document.getElementById("admission-link");

  if (ourStoryLink) {
    ourStoryLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      // Directly set the currentIndex to 34 (34th screen)
      currentIndex = 35;
      updateScreens();
    });
  }
});

// Smooth transition to the 7th screen on "Our Story" link click
document.addEventListener("DOMContentLoaded", () => {
  const ourStoryLink = document.getElementById("contact-us-link");

  if (ourStoryLink) {
    ourStoryLink.addEventListener("click", (event) => {
      event.preventDefault();

      // Directly set the currentIndex to 41 (42th screen)
      currentIndex = 42;
      updateScreens();
    });
  }
});

// Smooth transition to the 7th screen on "Our Story" link click
document.addEventListener("DOMContentLoaded", () => {
  const ourStoryLink = document.getElementById("book-button");

  if (ourStoryLink) {
    ourStoryLink.addEventListener("click", (event) => {
      event.preventDefault();

      // Directly set the currentIndex to 41 (42th screen)
      currentIndex = 44;
      updateScreens();
    });
  }
});
