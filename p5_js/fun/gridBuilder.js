const squareSize = 50;
const canvasWidth = 800;
const canvasHeight = 800;

let grid = [];
let unVisitedNodes = [];

function randomValue(max) {
    return Math.floor(Math.random() * max);
}

let start = randomValue((canvasHeight / squareSize) * (canvasWidth / squareSize))
let end = randomValue((canvasHeight / squareSize) * (canvasWidth / squareSize))

const offsets = {
    up: -16,
    down: 16,
    left: -1,
    right: 1
}


function setup() {

    createCanvas(canvasWidth, canvasHeight);
    frameRate(10);
    for (let i = 0; i < canvasWidth / squareSize; i++) {
        for (let j = 0; j < canvasHeight / squareSize; j++) {
            grid.push(new squares(j, i))
        }
    }

    for (let i = 1; i < grid.length; i++) {
        unVisitedNodes.push(i);
    }
    grid[start].type = "Start";
    grid[start].distance = 0;
    grid[end].type = "End";

}


function mousePressed() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].isClicked();
    }
}

start = 0;

function dijkstra() {
    current = start;

    for (let i = 0; i < grid.length; i++) {
        if(grid[i].isWall===false) {
            checkDistanceToNeighbours(i);
            console.log(grid[i].isWall)
        }

    }

}

function checkDistanceToNeighbours(idx) {

    grid[idx].visited = true;
    let neighbours = {
        up: idx + offsets.up,
        left: idx + offsets.left,
        right: idx + offsets.right,
        down: idx + offsets.down
    }

    if (idx % (canvasWidth / squareSize) !== 0) {
        if (grid[neighbours.left].distance > grid[idx].distance + 1&& grid[neighbours.left].isWall === false)
            grid[neighbours.left].distance = grid[idx].distance + 1;
    }
    if ((idx - 15) % (canvasWidth / squareSize) !== 0 || idx === 0) {
        if (grid[neighbours.right].distance > grid[idx].distance + 1 && grid[neighbours.right].isWall === false)
            grid[neighbours.right].distance = grid[idx].distance + 1;
    }
    if (idx > canvasWidth / squareSize - 1) {
        if (grid[neighbours.up].distance > grid[idx].distance + 1 && grid[neighbours.up].isWall === false)
            grid[neighbours.up].distance = grid[idx].distance + 1;
    }
    if (idx < (canvasHeight / squareSize) * (canvasWidth / squareSize) - canvasWidth / squareSize - 1) {
        if (grid[neighbours.down].distance > grid[idx].distance + 1 && grid[neighbours.down].isWall === false)
            grid[neighbours.down].distance = grid[idx].distance + 1;
    }

}

class squares {
    constructor(x, y) {
        this.x = x * squareSize;
        this.y = y * squareSize;
        this.center = [this.x + squareSize / 2, this.y + squareSize / 2]
        this.size = squareSize;
        this.isWall = false;
        this.type = "none";
        this.visited = false;
        this.distance = 1000;
    }

    draw() {
        if (this.type === "Start") {
            push()
            fill(250, 100, 50);
            square(this.x, this.y, squareSize);
            pop();
        } else if (this.type === "End") {
            push()
            fill(100, 100, 100);
            square(this.x, this.y, squareSize);
            pop();

        } else if (this.isWall) {
            push()
            fill(255, 70, 50);
            square(this.x, this.y, squareSize);
            pop();
        } else if (this.visited === true) {
            push()
            fill(55, 120, 255);
            square(this.x, this.y, squareSize);
            pop();
        } else {
            square(this.x, this.y, squareSize);
        }
        textSize(16);
        text(this.distance, this.x, this.center[1])

    }

    isClicked() {
        let d = dist(mouseX, mouseY, this.center[0], this.center[1])
        if (d < squareSize / 2) {
            this.isWall = !this.isWall;
        }
    }


}


function draw() {

    background(150);
    for (let i = 0; i < grid.length; i++) {
        grid[i].draw();
    }

    if (mouseIsPressed) {
        if (mouseButton === RIGHT) {
            dijkstra();
        }
    }
}