// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelectorAll('.slider-image');
    let currentIndex = 0;

    sliderImages[currentIndex].classList.add('active');

    sliderImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            sliderImages[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % sliderImages.length;
            sliderImages[currentIndex].classList.add('active');
        });
    });

    const overlayButton = document.querySelector('.overlay-button');
    const overlay = document.getElementById('overlay');

    overlayButton.addEventListener('click', () => {
        overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
    });
});
