import { updateVideoSource } from "./responsiveVideo";

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  updateVideoSource();
  window.addEventListener("resize", updateVideoSource);
});

document.addEventListener("DOMContentLoaded", () => {
  const screens = document.querySelectorAll(".screen");
  const nextButton = document.getElementById("nextButton");
  // let currentIndex = 3;
  let currentIndex = 7;
  let isTransitioning = false;
  let lastTouchTime = 0;

  // Function to update visible screens
  function updateScreens() {
    screens.forEach((screen, index) => {
      if (index < currentIndex) {
        // Keep the current screen in place
        screen.style.transform = "translateY(0)";
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

  // Handle button click
  nextButton.addEventListener("click", () => {
    handleTransition("next");
  });

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
        const scrollThreshold = 20;
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
  smoothTransition("book-button", 1);
  smoothTransition("our-story-link", 7);
  smoothTransition("why-us-link", 14);
  smoothTransition("programmes-link", 28);
  smoothTransition("admission-link", 35);
  smoothTransition("contact-us-link", 42);
  smoothTransition("book-tour-link", 44);

  // Initial call to set the first screen
  updateScreens();
});
