// // Initial call to set the first screen
// updateScreens();
const screens = document.querySelectorAll(".screen");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0; // Track the current screen index
let isTransitioning = false; // Prevent rapid transitions
let isSwiping = false; // Track if the user is swiping

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

// Handle scroll events (desktop)
window.addEventListener("wheel", (event) => {
  event.preventDefault(); // Prevent default scrolling

  // Check if we are already transitioning
  if (!isTransitioning) {
    // Check if the wheel scroll is significant enough to trigger a transition
    if (Math.abs(event.deltaY) > 30) {
      isTransitioning = true; // Start transition

      if (event.deltaY > 0 && currentIndex < screens.length - 1) {
        // Scrolling down
        currentIndex++;
      } else if (event.deltaY < 0 && currentIndex > 0) {
        // Scrolling up
        currentIndex--;
      }

      updateScreens();

      // Reset transition state after a delay
      setTimeout(() => {
        isTransitioning = false;
      }, 800); // Adjust duration as needed
    }
  }
});

// Handle touch events (mobile)
let touchStartY = 0; // To track the starting point of a touch
let touchEndY = 0; // To track the ending point of a touch

window.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0].clientY;
  isSwiping = true; // User has started swiping
});

window.addEventListener("touchmove", (event) => {
  touchEndY = event.touches[0].clientY;
});

window.addEventListener("touchend", () => {
  if (isSwiping) {
    if (!isTransitioning) {
      isTransitioning = true; // Start transition

      if (touchStartY > touchEndY + 50 && currentIndex < screens.length - 1) {
        // Swiping up (scrolling down)
        currentIndex++;
      } else if (touchStartY < touchEndY - 50 && currentIndex > 0) {
        // Swiping down (scrolling up)
        currentIndex--;
      }

      updateScreens();

      // Reset transition state after a delay
      setTimeout(() => {
        isTransitioning = false;
      }, 800); // Adjust duration as needed
    }
    isSwiping = false; // Reset swiping state
  }
});

// Handle button click
nextButton.addEventListener("click", (event) => {
  // Ignore button clicks if the user is currently swiping
  if (!isTransitioning && !isSwiping) {
    isTransitioning = true; // Start transition

    if (currentIndex < screens.length - 1) {
      currentIndex++; // Move to next screen
    }

    updateScreens();

    // Reset transition state after a delay
    setTimeout(() => {
      isTransitioning = false;
    }, 800); // Adjust duration as needed
  } else {
    // Prevent the button click from changing the page if swiping
    event.preventDefault();
  }
});

// Initial call to set the first screen
updateScreens();
