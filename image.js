const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentImageIndex = 0;

function showImage(index) {
    if (index < 0) {
        currentImageIndex = images.length - 1;
    } else if (index >= images.length) {
        currentImageIndex = 0;
    }

    images.forEach((image, i) => {
        if (i === currentImageIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

prevButton.addEventListener('click', () => {
    currentImageIndex--;
    showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex++;
    showImage(currentImageIndex);
});

showImage(currentImageIndex);
