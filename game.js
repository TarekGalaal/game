const fatMan = document.getElementById('fatMan');
const burger = document.getElementById('burger');
const message = document.getElementById('message');
let isThin = false;

// Function to update the position of the burger (cursor)
function updateBurgerPosition(e) {
    burger.style.left = `${e.clientX - burger.offsetWidth / 2}px`;
    burger.style.top = `${e.clientY - burger.offsetHeight / 2}px`;
}

// Function to move fatMan towards burger
function moveFatMan() {
    if (isThin) return;

    const burgerRect = burger.getBoundingClientRect();
    const fatManRect = fatMan.getBoundingClientRect();
    const fatManX = fatManRect.left + fatManRect.width / 2;
    const fatManY = fatManRect.top + fatManRect.height / 2;
    const burgerX = burgerRect.left + burgerRect.width / 2;
    const burgerY = burgerRect.top + burgerRect.height / 2;

    const dx = burgerX - fatManX;
    const dy = burgerY - fatManY;
    const distance = Math.hypot(dx, dy);
    const speed = 2; // Adjust speed as needed

    if (distance > 0) {
        fatMan.style.left = `${fatManX + (dx / distance) * speed}px`;
        fatMan.style.top = `${fatManY + (dy / distance) * speed}px`;
    }

    // Check if fatMan is close to burger
    if (distance < 30) {
        burger.style.left = `${Math.random() * window.innerWidth}px`;
        burger.style.top = `${Math.random() * window.innerHeight}px`;
    }
}

// Function to handle the end of the game
function endGame() {
    isThin = true;
    fatMan.style.background = 'url("../Photos/ThinMan.png") no-repeat center center';
    fatMan.style.backgroundSize = 'cover';
    burger.style.display = 'none';
    message.style.display = 'block';
    message.textContent = 'Horrraaaaay!';
}

// Start the game timer
setTimeout(endGame, 10000); // 60 seconds

// Add event listeners
document.addEventListener('mousemove', updateBurgerPosition);
setInterval(moveFatMan, 20); // Update fatMan's position every 20ms

