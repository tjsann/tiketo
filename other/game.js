const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const playerWidth = 40;
const playerHeight = 40;
let playerX = canvas.width / 2 - playerWidth / 2;
const playerY = canvas.height - playerHeight - 10;

const playerSpeed = 7;
let rightPressed = false;
let leftPressed = false;

const bulletWidth = 5;
const bulletHeight = 10;
const bulletSpeed = 7;
let bullets = [];

const fishWidth = 40;
const fishHeight = 40;
const fishSpeed = 2;
let fishes = [];
let fishSpawnInterval = 2000;

let score = 0;
let gameOver = false;

// スマホのタッチ対応
let touchStartX = null;
let touchEndX = null;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
canvas.addEventListener("touchstart", touchStartHandler);
canvas.addEventListener("touchmove", touchMoveHandler);
canvas.addEventListener("touchend", touchEndHandler);

function keyDownHandler(e) {
    if (e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "ArrowLeft") {
        leftPressed = true;
    } else if (e.key === " ") {
        shootBullet();
    }
}

function keyUpHandler(e) {
    if (e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

function touchStartHandler(e) {
    touchStartX = e.touches[0].clientX;
}

function touchMoveHandler(e) {
    touchEndX = e.touches[0].clientX;
    const touchDeltaX = touchEndX - touchStartX;

    // フリックによる移動
    if (touchDeltaX > 30 && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed;
    } else if (touchDeltaX < -30 && playerX > 0) {
        playerX -= playerSpeed;
    }

    touchStartX = touchEndX;  // フリックを連続的に反映
}

function touchEndHandler(e) {
    // タップ時の弾発射
    if (!touchEndX) {
        shootBullet();
    }
}

function drawPlayer() {
    ctx.beginPath();
    ctx.rect(playerX, playerY, playerWidth, playerHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function shootBullet() {
    bullets.push({ x: playerX + playerWidth / 2 - bulletWidth / 2, y: playerY });
}

function drawBullets() {
    bullets.forEach((bullet, index) => {
        bullet.y -= bulletSpeed;
        ctx.beginPath();
        ctx.rect(bullet.x, bullet.y, bulletWidth, bulletHeight);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();

        // Remove bullets that go off-screen
        if (bullet.y < 0) {
            bullets.splice(index, 1);
        }
    });
}

function spawnFish() {
    const fishX = Math.random() * (canvas.width - fishWidth);
    fishes.push({ x: fishX, y: 0 });
}

function drawFishes() {
    fishes.forEach((fish, index) => {
        fish.y += fishSpeed;
        ctx.beginPath();
        ctx.rect(fish.x, fish.y, fishWidth, fishHeight);
        ctx.fillStyle = "#00DD95";
        ctx.fill();
        ctx.closePath();

        // Remove fish that go off-screen (game over if fish reach bottom)
        if (fish.y > canvas.height - fishHeight) {
            gameOver = true;
        }

        // Check for collision with bullets
        bullets.forEach((bullet, bulletIndex) => {
            if (bullet.x < fish.x + fishWidth && bullet.x + bulletWidth > fish.x &&
                bullet.y < fish.y + fishHeight && bullet.y + bulletHeight > fish.y) {
                fishes.splice(index, 1);
                bullets.splice(bulletIndex, 1);
                score++;
            }
        });
    });
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawGameOver() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
}

function movePlayer() {
    if (rightPressed && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed;
    } else if (leftPressed && playerX > 0) {
        playerX -= playerSpeed;
    }
}

function update() {
    if (gameOver) {
        drawGameOver();
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawBullets();
    drawFishes();
    drawScore();
    movePlayer();

    requestAnimationFrame(update);
}

// Start spawning fish
setInterval(spawnFish, fishSpawnInterval);

// Start game loop
update();
