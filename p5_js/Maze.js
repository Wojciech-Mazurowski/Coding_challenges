var cWidth = 800;
var cHeight = 600;
var size = 40;

class Cell {
    constructor(x, y) {
        this.x = x * size;
        this.y = y * size;
        this.y2 = this.y + size;
        this.x2 = this.x + size;
        this.walls = [true, true, true, true]
        this.visited = false;
    }

    show() {

        if (this.walls[0] === true) {
            line(this.x, this.y, this.x2, this.y);
        }
        if (this.walls[1] === true) {
            line(this.x2, this.y, this.x2, this.y2);
        }
        if (this.walls[2] === true) {

            line(this.x, this.y2, this.x2, this.y2);
        }
        if (this.walls[3] === true) {
            line(this.x, this.y, this.x, this.y2);
        }

    }

}

var cell;
var rows;
var cols;
var grid = [];

function setup() {
    createCanvas(cWidth, cHeight);
    stroke(255, 0, 255);
    // strokeWeight(3);
    translate(5, 5);


    rows = floor(cWidth / size);
    cols = floor(cHeight / size);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}

function draw() {
    background(21);
    for (let cells of grid) {
        cells.show();
    }

}