
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

var CircleXs = [];
var CircleYs = [];
var CircleDs = [];

var CircleXSpeed = [];
var CircleYSpeed = [];



var BoxX = 150;
var BoxY = 350;
var BoxD = 25;
var BoxXSpeed;
var BoxYSpeed;

var BoxXs = [];
var BoxYs = [];
var BoxDs = [];

var BoxXSpeed = [];
var BoxYSpeed = [];

var mouseShapeX;
var mouseShapeY;


function setup() {
    createCanvas(1200, 1000);
    createCharacter(100, 300);

    for (var i = 0; i < 5; i++) {
        CircleXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        CircleYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        CircleXs[i] = (50);
        CircleYs[i] = (250)
        CircleDs[i] = (350)
    }

    for (var i = 0; i < 10; i++) {
        BoxXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        BoxYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        BoxXs[i] = (300);
        BoxYs[i] = (90);
        BoxDs[i] = (10);
    }
}

function draw() {
    background(11, 70, 189);
    borders(30);

    exitText();

    drawCharacter();
    characterMovement();
    characterExit();

   // drawCircle();
  //  circleSpeed();
   // circleExit();

    fill(13, 145, 14);
    for (var i = 0; i < CircleXs.length; i++) {
        circle(CircleXs[i], CircleYs[i], CircleDs[i]);
        CircleXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        CircleYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);



        CircleXs[i] += CircleXSpeed[i];
        CircleYs[i] += CircleYSpeed[i];
    
        if (CircleXs[i] > width) {
            CircleXs[i] = 0;
        }
        if (CircleXs[i] < 0) {
            CircleXs[i] = width;
        }
        if (CircleYs[i] > height) {
            CircleYs[i] = 0;
        }
        if (CircleYs[i] < 0) {
            CircleYs[i] = height;
        }
        if (CircleDs[i] > 100) {
            CircleDs[i] = 25;
        }
        else if (CircleDs[i] > 50) {
            CircleDs[i] += 3;
        }
        else if (CircleDs[i] <= 100) {
            CircleDs[i] += 6;
        }
    }
    //drawBox();
    //boxSpeed();
    //boxExit();

    for (var i = 0; i < BoxXs.length; i++) {
        fill(62, 26, 145);
        rect(BoxXs[i], BoxYs[i], BoxDs[i], BoxDs[i]);
        BoxXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        BoxYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        BoxXs[i] += BoxXSpeed[i];
        BoxYs[i] += BoxYSpeed[i];
    
    function boxExit() {
        if (BoxXs[i] > width) {
            BoxXs[i] = 0;
        }
        if (BoxXs[i] < 0) {
            BoxXs[i] = width;
        }
        if (BoxYs[i] > height) {
            BoxYs[i] = 0;
        }
        if (BoxYs[i] < 0) {
            BoxYs[i] = height;
        }
    }



    

    //drawClick();
    fill(80, 65, 50);
    ellipse(mouseShapeX, mouseShapeY, 80, 40);
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

        for (var i = 0; i < CircleXs.length; i++) {
            circle(CircleXs[i], CircleYs[i], CircleDs[i]);
        }
        function circleSpeed() {

            CircleXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            CircleYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

            CircleXs[i] += CircleXSpeed[i];
            CircleYs[i] += CircleYSpeed[i];
        }
        function circleExit() {
            if (CircleXs[i] > width) {
                CircleXs[i] = 0;
            }
            if (CircleXs[i] < 0) {
                CircleXs[i] = width;
            }
            if (CircleYs[i] > height) {
                CircleYs[i] = 0;
            }
            if (CircleYs[i] < 0) {
                CircleYs[i] = height;
            }
            if (CircleDs[i] > 100) {
                CircleDs[i] = 25;
            }
            else if (CircleDs[i] > 50) {
                CircleDs[i] += 3;
            }
            else if (CircleDs[i] <= 100) {
                CircleDs[i] += 6;
            }
        }

        function drawBox() {
            fill(62, 26, 145);
            rect(BoxX, BoxY, BoxD, BoxD);
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
            ellipse(mouseShapeX, mouseShapeY, 80, 40);
        }
        function mouseClicked() {
            mouseShapeX = mouseX;
            mouseShapeY = mouseY;
}