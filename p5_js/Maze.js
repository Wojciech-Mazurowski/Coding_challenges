var cWidth = 1700;
var cHeight = 900;
var size = 25;
var current;
var stroke_size=2;
function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols; //changing two dimensional index to one dimensional
}

class Cell {
    constructor(x, y) {
        this.i = x;
        this.j = y;
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

    highlight() {
        push();
        noStroke();
        fill(233, 0, 0, 150);
        square(this.x, this.y, size);
        pop();

    }

    Neighbourhood() {
        var neighbors = [];

        var top = grid[index(this.j, this.i - 1)];
        var right = grid[index(this.j + 1, this.i)];
        var bottom = grid[index(this.j, this.i + 1)];
        var left = grid[index(this.j - 1, this.i)];

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return 0;
        }
    }

}

var cell;
var rows;
var cols;
var grid = [];
var stack = [];

function setup() {
    createCanvas(cWidth, cHeight);
    stroke(255);
    // strokeWeight(3);
    translate(5, 5);
    frameRate(360);


    rows = floor(cWidth / size);
    cols = floor(cHeight / size);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    current = grid[0];
    grid[0].visited = true;
    stack.push(current);
}


function RemoveWall(current, next) {
    let x = current.i - next.i;
    let y = current.j - next.j;
    if (x === 1) {
        current.walls[3] = false;
        next.walls[1] = false;
    } else if (x === -1) {
        current.walls[1] = false;
        next.walls[3] = false;
    } else if (y === -1) {
        current.walls[2] = false;
        next.walls[0] = false;
    } else if (y === 1) {
        current.walls[0] = false;
        next.walls[2] = false;
    }
}

var i = 0;
var j=0;
function draw() {
    background(21);
    for (let cells of grid) {
        strokeWeight(stroke_size);
        cells.show();
        if (cells.visited) {
            fill(50,200);
            push();
            noStroke();
            square(cells.x, cells.y, size);
            pop();
        }
    }
    var next = current.Neighbourhood();
    if (next) {
        RemoveWall(current, next);
        next.visited = true;
        current = next;
        stack.push(current);
    } else if (stack.length > 0) {
        current = stack.pop();
    }
    current.highlight();


}