const screens = document.querySelectorAll(".screen");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0; // Track the current screen index
let isTransitioning = false; // Prevent rapid transitions

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
});

// // Handle touch events (mobile)
// let touchStartY = 0; // To track the starting point of a touch
// let touchEndY = 0; // To track the ending point of a touch

// window.addEventListener("touchstart", (event) => {
//   touchStartY = event.touches[0].clientY;
// });

// window.addEventListener("touchmove", (event) => {
//   touchEndY = event.touches[0].clientY;
// });

// window.addEventListener("touchend", () => {
//   if (!isTransitioning) {
//     isTransitioning = true; // Start transition

//     if (touchStartY > touchEndY + 50 && currentIndex < screens.length - 1) {
//       // Swiping up (scrolling down)
//       currentIndex++;
//     } else if (touchStartY < touchEndY - 50 && currentIndex > 0) {
//       // Swiping down (scrolling up)
//       currentIndex--;
//     }

//     updateScreens();

//     // Reset transition state after a delay
//     setTimeout(() => {
//       isTransitioning = false;
//     }, 800); // Adjust duration as needed
//   }
// });

// Handle button click
nextButton.addEventListener("click", () => {
  if (!isTransitioning) {
    isTransitioning = true; // Start transition

    if (currentIndex < screens.length - 1) {
      currentIndex++; // Move to next screen
    }

    updateScreens();

    // Reset transition state after a delay
    setTimeout(() => {
      isTransitioning = false;
    }, 800); // Adjust duration as needed
  }
});

// Initial call to set the first screen
updateScreens();

// for video player

// window.addEventListener("load", function () {
//   const videoElement = document.getElementById("responsive-video");
//   const videoSource = document.getElementById("video-source");

//   function setVideoSource() {
//     if (window.innerWidth <= 768) {
//       // Mobile screen (portrait video)
//       console.log("movile screens");
//       videoSource.src =
//         "../assessts/videos/-2024_100089LOD_Rise Preschool- Video for Website vertical.mp4"; // Replace with your vertical video URL
//     } else {
//       console.log("Desktop screens");

//       // Larger screens like laptops (landscape video)
//       videoSource.src =
//         "../assessts/videos/-2024_100089LOD_Rise Preschool- Video for Website vertical.mp4"; // Replace with your horizontal video URL
//     }
//     videoElement.load(); // Reload the video with the new source
//   }

//   console.log("video source", videoSource.src);

//   // Initial check
//   setVideoSource();

//   // Re-check if the screen is resized
//   window.addEventListener("resize", setVideoSource);
// });

// / for video player
// const videoSource = document.getElementById("video-source");
// function updateVideoSource() {
//   if (window.innerWidth <= 768) {
//     videoSource.src = "./src/assessts/videos/vertical.mp4";
//   } else {
//     videoSource.src = "./src/assessts/videos/horizontal.mp4";
//   }
//   document.getElementById("responsive-video").load(); //some time it the source is updating the source and some time not. So dont remove it shivame sir
// }
// updateVideoSource();
// window.addEventListener("resize", updateVideoSource);

// for moving left or right on orange screen
