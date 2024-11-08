// let activeIndex = 0;

// function moveLeft() {
//   const circularItems = document.querySelectorAll(".circular-item");
//   if (activeIndex > 0) {
//     activeIndex--;
//     updateCircularItems(circularItems);
//   } else {
//     // Wrap around to the end
//     activeIndex = circularItems.length - 1;
//     updateCircularItems(circularItems);
//   }
// }

// function moveRight() {
//   const circularItems = document.querySelectorAll(".circular-item");
//   if (activeIndex < circularItems.length - 1) {
//     activeIndex++;
//     updateCircularItems(circularItems);
//   } else {
//     // Wrap around to the start
//     activeIndex = 0;
//     updateCircularItems(circularItems);
//   }
// }

// function updateCircularItems(circularItems) {
//   circularItems.forEach((item, index) => {
//     item.classList.remove("active");
//     if (index === activeIndex) {
//       item.classList.add("active");
//     }
//   });
// }
// Track activeIndex for each carousel
const activeIndexes = {
  "carousel-images": 0,
  "carousel-text": 0,
};

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
