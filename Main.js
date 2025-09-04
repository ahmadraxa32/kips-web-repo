const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let slideInterval = null;

document.addEventListener("DOMContentLoaded", slide_initializer);
function slide_initializer() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    slideInterval = setInterval(nextSlide, 3000);
  }
}
function show_Slide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
  clearInterval(slideInterval);
  slideIndex--;
  show_Slide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  show_Slide(slideIndex);
}
function goToSlide(index) {
  clearInterval(slideInterval);
  slideIndex = index;
  show_Slide(slideIndex);
  slide_initializer();
}

const BlockSlides = document.querySelector(".BlockSlides");
const testimonials = document.querySelectorAll(".BlockSlides .imageBlock");

let blockIndex = 0;
let blockInterval = null;

document.addEventListener("DOMContentLoaded", Block_initializer);

function Block_initializer() {
  if (testimonials.length > 0) {
    blockInterval = setInterval(NextBlock, 3000);
  }
}

function Show_Block(index) {
  if (index >= testimonials.length) {
    blockIndex = 0;
  } else if (index < 0) {
    blockIndex = testimonials.length - 1;
  } else {
    blockIndex = index;
  }

  BlockSlides.style.transform = `translateX(-${blockIndex * 100}%)`;
}

function prevBlock() {
  clearInterval(blockInterval);
  Show_Block(blockIndex-1)
}

function NextBlock() {
  Show_Block(blockIndex+1)
}