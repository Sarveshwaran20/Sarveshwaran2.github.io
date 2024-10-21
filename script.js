const box = document.querySelector('.moving-box');
const room = document.querySelector('.haunted-room');
let dx = 2; // Horizontal speed
let dy = 2; // Vertical speed
const messages = ["Turn back now!", "You're not alone...", "Leave while you can!", "Something's watching...", "You're in danger!", "Get out!", "You're not welcome here!", "You're not safe here!","You're DOOMED","BOBA ghost is waiting for you"];

// Initialize position
let posX = room.clientWidth / 2 - box.clientWidth / 2;
let posY = room.clientHeight / 2 - box.clientHeight / 2;
box.style.left = posX + 'px';
box.style.top = posY + 'px';

function moveBox() {
    // Update position
    posX += dx;
    posY += dy;

    // Get boundaries of the room
    const roomWidth = room.clientWidth;
    const roomHeight = room.clientHeight;

    // Check for collision with the sides
    if (posX <= 0 || posX + box.clientWidth >= roomWidth) {
        dx = -dx; // Reverse horizontal direction
        changeText(); // Change text
    }

    if (posY <= 0 || posY + box.clientHeight >= roomHeight) {
        dy = -dy; // Reverse vertical direction
        changeText(); // Change text
    }

    // Apply the new position
    box.style.left = posX + 'px';
    box.style.top = posY + 'px';

    // Request animation frame
    requestAnimationFrame(moveBox);
}

function changeText() {
    // Pick a random message
    const randomIndex = Math.floor(Math.random() * messages.length);
    box.textContent = messages[randomIndex];
}

// Start moving the box when the page loads
window.onload = moveBox;
