// const container = document.querySelector(".container");
// const screens = document.querySelectorAll(".screen");
// const nextButton = document.getElementById("nextButton");
// let scrollPosition = 0; // Track the scroll position

// // Function to update the container position based on scroll
// function updateScroll() {
//   const translateY = -(scrollPosition / window.innerHeight) * 100; // Calculate translation
//   container.style.transform = `translateY(${translateY}vh)`; // Apply translation
// }

// // Handle scroll events
// window.addEventListener("wheel", (event) => {
//   // Determine scroll direction and update scroll position
//   if (event.deltaY > 0) {
//     // Scrolling down
//     scrollPosition += 10; // Increase the scroll amount incrementally
//     if (scrollPosition >= (screens.length - 1) * window.innerHeight) {
//       scrollPosition = (screens.length - 1) * window.innerHeight; // Limit to max scroll position
//     }
//   } else {
//     // Scrolling up
//     scrollPosition -= 10; // Decrease the scroll amount incrementally
//     if (scrollPosition < 0) {
//       scrollPosition = 0; // Limit to minimum scroll position
//     }
//   }

//   updateScroll(); // Update container position
// });

// // Handle button click
// nextButton.addEventListener("click", () => {
//   scrollPosition += window.innerHeight; // Move to the next full screen
//   if (scrollPosition >= (screens.length - 1) * window.innerHeight) {
//     scrollPosition = (screens.length - 1) * window.innerHeight; // Limit to max scroll position
//   }
//   updateScroll(); // Update container position
// });

const container = document.querySelector(".container");
const screens = document.querySelectorAll(".screen");
const nextButton = document.getElementById("nextButton");
let scrollPosition = 0; // Track the scroll position

let touchStartY = 0; // To track the starting point of a touch
let touchEndY = 0; // To track the ending point of a touch

// Function to update the container position based on scroll
function updateScroll() {
  const translateY = -(scrollPosition / window.innerHeight) * 100; // Calculate translation
  container.style.transform = `translateY(${translateY}vh)`; // Apply translation
}

// Handle scroll events (desktop)
window.addEventListener("wheel", (event) => {
  // Determine scroll direction and update scroll position
  if (event.deltaY > 0) {
    // Scrolling down
    scrollPosition += 10; // Increase the scroll amount incrementally
    if (scrollPosition >= (screens.length - 1) * window.innerHeight) {
      scrollPosition = (screens.length - 1) * window.innerHeight; // Limit to max scroll position
    }
  } else {
    // Scrolling up
    scrollPosition -= 10; // Decrease the scroll amount incrementally
    if (scrollPosition < 0) {
      scrollPosition = 0; // Limit to minimum scroll position
    }
  }

  updateScroll(); // Update container position
});

// Handle touch events (mobile)
window.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0].clientY;
});

window.addEventListener("touchmove", (event) => {
  touchEndY = event.touches[0].clientY;
});

window.addEventListener("touchend", () => {
  if (touchStartY > touchEndY + 50) {
    // Swiping up (scrolling down)
    scrollPosition += window.innerHeight / 2; // Scroll half screen
    if (scrollPosition >= (screens.length - 1) * window.innerHeight) {
      scrollPosition = (screens.length - 1) * window.innerHeight; // Limit to max scroll position
    }
  } else if (touchStartY < touchEndY - 50) {
    // Swiping down (scrolling up)
    scrollPosition -= window.innerHeight / 2; // Scroll half screen
    if (scrollPosition < 0) {
      scrollPosition = 0; // Limit to minimum scroll position
    }
  }

  updateScroll(); // Update container position
});

// Handle button click
nextButton.addEventListener("click", () => {
  scrollPosition += window.innerHeight; // Move to the next full screen
  if (scrollPosition >= (screens.length - 1) * window.innerHeight) {
    scrollPosition = (screens.length - 1) * window.innerHeight; // Limit to max scroll position
  }
  updateScroll(); // Update container position
});
