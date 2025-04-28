let currentIndex = 0;
const totalImages = 60;  // tile000 to tile059
const imageElement = document.getElementById("animated-image");

function animateImages() {
    currentIndex = (currentIndex + 1) % totalImages;
    const imagePath = `images/tile${String(currentIndex).padStart(3, '0')}.png`;
    imageElement.src = imagePath;
}

setInterval(animateImages, 100);  // Change image every 100ms
