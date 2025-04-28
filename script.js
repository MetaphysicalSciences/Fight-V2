let currentIndex = 0;
const totalImages = 60;  // tile000 to tile059
const imageElement = document.getElementById("animated-image");

// Preload all the images to avoid delays
const images = [];
for (let i = 0; i < totalImages; i++) {
    const img = new Image();
    img.src = `idle/tile${String(i).padStart(3, '0')}.png`;
    images.push(img);
}

function animateImages() {
    currentIndex = (currentIndex + 1) % totalImages;
    imageElement.src = images[currentIndex].src;
}

// Start the animation loop
setInterval(animateImages, 100);  // Change image every 100ms
