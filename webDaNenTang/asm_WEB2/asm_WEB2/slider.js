const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const slider = $('.slider');
const sliderItems = $$('.slider__item');
const sliderDots = $$('.slider__dot');
const sliderImages = $('.slider_main-img');

const prevBtn = $('.slider_left');
const nextBtn = $('.slider_rignt');

const sliderLength = sliderItems.length;

let slideraActive = 0;


nextBtn.addEventListener('click', () => {
    if(slideraActive < sliderLength - 1) {
        slideraActive++;
        sliderImages.style.transform = `translateX(-${slideraActive * 100}%)`;
        sliderDots[slideraActive].classList.add('active');
    } else {
        slideraActive = 0;
        sliderImages.style.transform = `translateX(-${slideraActive * 100}%)`;
        sliderDots[slideraActive].classList.add('active');
    }
})

prevBtn.addEventListener('click', () => {
    if(slideraActive > 0) {
        slideraActive--;
        sliderImages.style.transform = `translateX(-${slideraActive * 100}%)`;
        sliderDots[slideraActive].classList.add('active');
    } else {
        slideraActive = sliderLength - 1;
        sliderImages.style.transform = `translateX(-${slideraActive * 100}%)`;
        sliderDots[slideraActive].classList.add('active');
    }
})

setInterval(() => {
    nextBtn.click();
}, 3000);
