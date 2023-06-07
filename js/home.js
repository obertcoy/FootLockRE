const images = [
    "/Assets/shoes/yeezy700.webp",
    "/Assets/shoes/blazer77mid.webp",
    "/Assets/shoes/travisscott_fragment.webp"
];

let currentIndex = 0;
const slideImage = document.getElementById("slide-img");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");


function showImage() {
    slideImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage();
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage();
}

prevArrow.addEventListener("click", prevImage);
nextArrow.addEventListener("click", nextImage);

showImage();