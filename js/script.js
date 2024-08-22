function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}
// Existing JavaScript for burger menu...

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-images img');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    const offset = -currentSlide * 100;
    document.querySelector('.slider-images').style.transform = `translateX(${offset}%)`;
}

function changeSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
