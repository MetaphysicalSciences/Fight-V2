// platform.js

// Function to create a platform at a specific position
function createPlatform(x, y, width, height, color) {
    const platform = document.createElement("div");
    platform.style.position = "absolute";
    platform.style.left = `${x}px`;
    platform.style.bottom = `${y}px`;
    platform.style.width = `${width}px`;
    platform.style.height = `${height}px`;
    platform.style.backgroundColor = color;
    platform.style.borderRadius = "5px";  // Optional, for rounded corners on platforms

    document.body.appendChild(platform);
}

// Create a simple background for the level (optional)
function createBackground() {
    const background = document.createElement("div");
    background.style.position = "absolute";
    background.style.left = "0";
    background.style.top = "0";
    background.style.width = "100vw";
    background.style.height = "100vh";
    background.style.backgroundColor = "#87CEEB";  // Sky blue
    background.style.zIndex = "-1";  // Send the background behind the player
    document.body.appendChild(background);
}

// Create platforms to form the level
function createLevel() {
    // Create some ground platforms
    createPlatform(0, 50, 600, 20, "green");  // Ground level
    createPlatform(700, 150, 250, 20, "green"); // Raised platform
    createPlatform(1100, 250, 200, 20, "green"); // Another raised platform
    createPlatform(1400, 100, 300, 20, "green"); // High platform

    // Create some floating platforms
    createPlatform(400, 300, 150, 20, "blue");
    createPlatform(900, 350, 150, 20, "blue");
    createPlatform(1300, 400, 150, 20, "blue");

    // Create a small platform for jumpable sections
    createPlatform(1200, 500, 100, 20, "red");
}

// Call the background and level creation functions
createBackground();
createLevel();
