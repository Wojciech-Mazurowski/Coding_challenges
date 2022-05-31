var cWidth = 1200;
var cHeight = 600;
var size = 20;
var rows;
var cols;
var grid = [];
var animals = [];

function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols; //changing two dimensional index to one dimensional
}

function setup() {
    createCanvas(cWidth, cHeight);
    stroke(50);
    translate(5, 5);
    frameRate(144);


    rows = floor(cWidth / size);
    cols = floor(cHeight / size);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cell = new Cell(i, j);
            grid.push(cell);
        }
    }


    generate_trees(30);
    generate_water(3);


}
var test = new Animal(5,5);

function draw() {
    background(255);
    for (let cells of grid) {
        strokeWeight(2);
        cells.setstate();
        //cells.show();
    }
    test.show();
}