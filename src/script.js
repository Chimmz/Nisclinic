'use strict';

const header = document.querySelector('.header');
const headerSlider = document.querySelector('.imgslider');
const headerSlides = [...headerSlider.children];
const [btnHeaderSlidePrevious, btnHeaderSlideNext] = header.querySelectorAll(
   '.imgslider__control'
);

headerSlider.transform = 'scale(.5)';
headerSlides.forEach((slide, i) => {
   slide.style.transform = ` translateX(${i * 100}%)`;
});

let currentSlide = 0;
const numSlides = headerSlides.length;

const goToSlide = slideIndex => {
   headerSlides.forEach((slide, i) => {
      slide.style.transform = ` translateX(${(i - slideIndex) * 100}%)`;
   });
};
const slideRight = function (ev) {
   if (currentSlide === numSlides - 1) {
      currentSlide = 0;
   } else ++currentSlide;

   goToSlide(currentSlide);
};

const slideLeft = function (ev) {
   if (currentSlide === 0) currentSlide = numSlides - 1;
   else --currentSlide;
   goToSlide(currentSlide);
};

goToSlide(0);
btnHeaderSlidePrevious.addEventListener('click', slideLeft);
btnHeaderSlideNext.addEventListener('click', slideRight);

// setInterval(() => {
//    goToSlide(currentSlide);
//    if (currentSlide === numSlides - 1) {
//       currentSlide = 0;
//    } else ++currentSlide;
// }, 5000)