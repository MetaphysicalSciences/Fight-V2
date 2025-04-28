let currentIndex = 0;
const idleImages = 60;  // tile000 to tile059 (idle)
const walkImages = 76;  // tile000 to tile075 (walk)
const imageElement = document.getElementById("animated-image");

let isWalking = false;
let direction = "right";  // Default walking direction (can be left or right)

// Preload all the idle images
const idleFrames = [];
for (let i = 0; i < idleImages; i++) {
    const img = new Image();
    img.src = `idle/tile${String(i).padStart(3, '0')}.png`;
    idleFrames.push(img);
}

// Preload all the walk images
const walkFrames = [];
for (let i = 0; i < walkImages; i++) {
    const img = new Image();
    img.src = `walk/tile${String(i).padStart(3, '0')}.png`;
    walkFrames.push(img);
}

// Player position
let playerX = 0;
let playerY = 0;

function animateIdle() {
    currentIndex = (currentIndex + 1) % idleImages;
    imageElement.src = idleFrames[currentIndex].src;
}

function animateWalk() {
    currentIndex = (currentIndex + 1) % walkImages;
    let imagePath = walkFrames[currentIndex].src;
    
    // Flip the image when moving right
    if (direction === "right") {
        imageElement.src = imagePath;
    } else {
        // Flip image horizontally when moving left
        imageElement.src = imagePath.replace("walk", "walk-flipped");
    }
}

function handleMovement() {
    if (isWalking) {
        animateWalk();
    } else {
        animateIdle();
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "w") { // Move up
        playerY -= 5;
        isWalking = true;
    } else if (event.key === "a") { // Move left
        playerX -= 5;
        direction = "left"; // Change to left direction
        isWalking = true;
    } else if (event.key === "s") { // Move down
        playerY += 5;
        isWalking = true;
    } else if (event.key === "d") { // Move right
        playerX += 5;
        direction = "right"; // Change to right direction
        isWalking = true;
    }
});

document.addEventListener("keyup", () => {
    isWalking = false;
});

setInterval(handleMovement, 100);  // Update animation and movement every 100ms
