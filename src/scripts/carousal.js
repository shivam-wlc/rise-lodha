let activeIndex = 0;

function moveLeft() {
  const circularItems = document.querySelectorAll(".circular-item");
  if (activeIndex > 0) {
    activeIndex--;
    updateCircularItems(circularItems);
  } else {
    // Wrap around to the end
    activeIndex = circularItems.length - 1;
    updateCircularItems(circularItems);
  }
}

function moveRight() {
  const circularItems = document.querySelectorAll(".circular-item");
  if (activeIndex < circularItems.length - 1) {
    activeIndex++;
    updateCircularItems(circularItems);
  } else {
    // Wrap around to the start
    activeIndex = 0;
    updateCircularItems(circularItems);
  }
}

function updateCircularItems(circularItems) {
  circularItems.forEach((item, index) => {
    item.classList.remove("active");
    if (index === activeIndex) {
      item.classList.add("active");
    }
  });
}
