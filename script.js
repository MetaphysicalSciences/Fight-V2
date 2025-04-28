let currentIndex = 0;
const totalIdleImages = 60;  // tile000 to tile059 in idle
const totalWalkImages = 76;  // tile000 to tile075 in walk
const totalTest1Images = 16; // tile000 to tile015 in test1
let walking = false;  // Flag to track if walking animation is active
let walkingRight = true;  // Direction flag for walking (left or right)
let test1Animation = false;  // Flag to track if test1 animation is active
const imageElement = document.getElementById("animated-image");

// Preload idle images
const idleImages = [];
for (let i = 0; i < totalIdleImages; i++) {
    const img = new Image();
    img.src = `idle/tile${String(i).padStart(3, '0')}.png`;
    idleImages.push(img);
}

// Preload walking images
const walkImages = [];
for (let i = 0; i < totalWalkImages; i++) {
    const img = new Image();
    img.src = `walk/tile${String(i).padStart(3, '0')}.png`;
    walkImages.push(img);
}

// Preload test1 images
const test1Images = [];
for (let i = 0; i < totalTest1Images; i++) {
    const img = new Image();
    img.src = `test1/tile${String(i).padStart(3, '0')}.png`;
    test1Images.push(img);
}

// Function to animate idle
function animateIdle() {
    currentIndex = (currentIndex + 1) % totalIdleImages;
    imageElement.src = idleImages[currentIndex].src;
}

// Function to animate walking
function animateWalking() {
    currentIndex = (currentIndex + 1) % totalWalkImages;
    imageElement.src = walkImages[currentIndex].src;
    // Flip the image if moving right
    if (walkingRight) {
        imageElement.style.transform = 'scaleX(1)';  // Facing right
    } else {
        imageElement.style.transform = 'scaleX(-1)';  // Flipped to face left
    }
}

// Function to animate test1
function animateTest1() {
    currentIndex = (currentIndex + 1) % totalTest1Images;
    imageElement.src = test1Images[currentIndex].src;
}

// Set an interval for the idle animation
let animationInterval = setInterval(animateIdle, 100);  // Change image every 100ms

// Listen for keypresses for movement (A and D keys)
document.addEventListener('keydown', (e) => {
    if (e.key === 'a' || e.key === 'A') {
        walking = true;
        walkingRight = false;  // Moving left
        clearInterval(animationInterval); // Stop idle animation
        animationInterval = setInterval(animateWalking, 100);  // Start walking animation
    } else if (e.key === 'd' || e.key === 'D') {
        walking = true;
        walkingRight = true;  // Moving right
        clearInterval(animationInterval); // Stop idle animation
        animationInterval = setInterval(animateWalking, 100);  // Start walking animation
    }
    // Trigger test1 animation with the P key
    if (e.key === 'p' || e.key === 'P') {
        test1Animation = true;
        walking = false;  // Stop walking animation
        clearInterval(animationInterval);  // Stop walking animation
        animationInterval = setInterval(animateTest1, 100);  // Start test1 animation
    }
});

// Stop walking or test1 animation when key is released
document.addEventListener('keyup', (e) => {
    if ((e.key === 'a' || e.key === 'A') || (e.key === 'd' || e.key === 'D')) {
        walking = false;
        clearInterval(animationInterval);  // Stop walking animation
        animationInterval = setInterval(animateIdle, 100);  // Resume idle animation
    }
    if (e.key === 'p' || e.key === 'P') {
        test1Animation = false;
        clearInterval(animationInterval);  // Stop test1 animation
        animationInterval = setInterval(animateIdle, 100);  // Resume idle animation
    }
});
