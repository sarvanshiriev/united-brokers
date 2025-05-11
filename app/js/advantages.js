const slider = document.querySelector(".advantages__slider");
const dots = document.querySelectorAll(".advantages__dot");
const slides = document.querySelectorAll(".advantages__slide");
const advantages = document.querySelector(".advantages__container");
let slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;

let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

let mouseXStart = 0;
let mouseXEnd = 0;

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSliderPosition();
    updateActiveDot();
  });
});

advantages.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  },
  { passive: true }
);

advantages.addEventListener(
  "touchmove",
  (e) => {
    touchEndX = e.touches[0].clientX;
    touchEndY = e.touches[0].clientY;

    const deltaX = Math.abs(touchEndX - touchStartX);
    const deltaY = Math.abs(touchEndY - touchStartY);

    if (deltaX > deltaY) {
      // Горизонтальное движение - блокируем вертикальную прокрутку
      e.preventDefault();
    }
  },
  { passive: false }
);

advantages.addEventListener("touchend", () => {
  const touchDiff = touchStartX - touchEndX;

  if (touchDiff > 20) {
    // Свайп влево
    currentIndex = Math.min(currentIndex + 1, slides.length - 1);
  } else if (touchDiff < -20) {
    // Свайп вправо
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  touchStartX = 0;
  touchStartY = 0;
  updateSliderPosition();
  updateActiveDot();
});

slider.addEventListener("mousedown", (e) => {
  mouseXStart = e.clientX;
});

slider.addEventListener("mousemove", (e) => {
  mouseXEnd = e.clientX;
});

slider.addEventListener("mouseup", () => {
  const mouseDiff = mouseXStart - mouseXEnd;

  if (mouseDiff > 10) {
    // Свайп влево
    currentIndex = Math.min(currentIndex + 1, slides.length - 1);
  } else if (mouseDiff < -10) {
    // Свайп вправо
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  mouseXStart = 0;
  updateSliderPosition();
  updateActiveDot();
});

function updateSliderPosition() {
  const newPosition = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${newPosition}px)`;
}

function updateActiveDot() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

window.addEventListener("resize", () => {
  slideWidth = slides[0].getBoundingClientRect().width;

  slider.style.setProperty("--transition-duration", "0s");

  updateSliderPosition();

  requestAnimationFrame(() => {
    slider.style.setProperty("--transition-duration", "0.3s");
  });
});

updateSliderPosition();
updateActiveDot();
