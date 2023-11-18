
var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var CircleX = 150;
var CircleY = 50;
var CircleD = 25;
var CircleXSpeed;
var CircleYSpeed;

var BoxX = 150;
var BoxY = 350;
var BoxXSpeed;
var BoxYSpeed;

var obstacleShapeX;
var obstacleShapeY;


function setup() {
    createCanvas(1200, 1000);
    createCharacter(100, 300);
}

function draw() {
    background(11, 70, 189);
    borders(30);

    exitText();

    drawCharacter();
    characterMovement();
    characterExit();

    drawCircle();
    circleSpeed();
    circleExit();

    drawBox();
    boxSpeed();
    boxExit();

    drawClick();
 
}
function borders(thickness) {
    fill(1,1,1)
    rect(0, height - thickness, width - 80, thickness);
    rect(width - thickness, 0, thickness, height - 80);
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
}
function exitText() {
    textSize(30);
    fill(0, 0, 0)
    text("EXIT", 1100, 950)
}

function createCharacter(x,y) {
    characterX = x;
    characterY = y;
}
function drawCharacter() {
    fill(163, 5, 5);
    circle(characterX, characterY, 30);
}
function characterMovement() {
    if (keyIsDown(w)) {
        characterY -= 5;
    }
    if (keyIsDown(s)) {
        characterY += 5;
    }
    if (keyIsDown(a)) {
        characterX -= 5;  
    }
    if (keyIsDown(d)) {
        characterX += 5;
    }
}
function characterExit() {
    if (characterX > 1120 && characterY > 920) {
        fill(1, 1, 1);
        textSize(200);
        text("Winner!", 250, 500);
    }
}

function drawCircle() {
    fill(13, 145, 14);
    circle(CircleX, CircleY, CircleD);
}
function circleSpeed() {
    CircleXSpeed = 6
    CircleYSpeed = 9

    CircleX += CircleXSpeed;
    CircleY += CircleYSpeed;
}
function circleExit() {
    if (CircleX > width) {
        CircleX = 0;
    }
    if (CircleX < 0) {
        CircleX = width;
    }
    if (CircleY > height) {
        CircleY = 0;
    }
    if (CircleY < 0) {
        CircleY = height;
    }
    if (CircleD > 100) {
        CircleD = 25;
    }
    else if (CircleD > 50) {
        CircleD += 3;
    }
    else if (CircleD <= 100) {
        CircleD += 6;
    }
}

function drawBox() {
    fill(62, 26, 145);
    rect(BoxX, BoxY, 25, 25);
}
function boxSpeed() {
    BoxXSpeed = 9
    BoxYSpeed = 6

    BoxX += BoxXSpeed;
    BoxY += BoxYSpeed;
}
function boxExit() {
    if (BoxX > width) {
        BoxX = 0;
    }
    if (BoxX < 0) {
        BoxX = width;
    }
    if (BoxY > height) {
        BoxY = 0;
    }
    if (BoxY < 0) {
        BoxY = height;
    }
}

function drawClick() {
    fill(80, 65, 50);
    ellipse(obstacleShapeX, obstacleShapeY, 80, 40);
}
function mouseClicked() {
    obstacleShapeX = mouseX;
    obstacleShapeY = mouseY;
}


