function setup() {
    createCanvas(800, 600);
}

let playerY = 150;
let pipeX = 600;
let hit = false;
let topHit = false;
let pipeY = Math.random() * (451 - 250) + 250;
let num = 0;
let score = "Score: " + num;

function draw() {
    background("#05fff3");

    fill("yellow");
    noStroke();
    let player = rect(100, playerY, 20, 20);

    fill("lime");
    noStroke();
    let pipe = rect(pipeX, pipeY, 75, 500);
    let topPipe = rect(pipeX, pipeY - 650, 75, 500);

    fill("red");
    textSize(32);
    text(score, 10, 30);

    hit = collideRectRect(100, playerY, 20, 20, pipeX, pipeY, 75, 250);
    if (hit) {
        pipeSpeed = 0;
        location.reload();
    }
    topHit = collideRectRect(100, playerY, 20, 20, pipeX, pipeY - 350, 75, 155);
    if (topHit) {
        pipeSpeed = 0;
        location.reload();
    }
}

function keyPressed() {
    if (keyCode == "32") {
        playerY -= 100;
    }
}

document.getElementById("button").onclick = function () {
    playerY -= 100;
};

let lastTime = 0;
let pipeSpeed = 7;
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    let gravity = 5;
    playerY += gravity;
    if (playerY >= 600) {
        pipeSpeed = 0;
        location.reload();
    }

    pipeX -= pipeSpeed;
    if (pipeX < -100) {
        pipeX = 900;
        pipeY = Math.random() * (451 - 250) + 250;
    }

    score = "Score: " + num;
    if (pipeX == 95) {
        num++;
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
