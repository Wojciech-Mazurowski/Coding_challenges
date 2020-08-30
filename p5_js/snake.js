class Snake {
    constructor(size) {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.size = size;
        this.length = 0;
        this.body = [];
    }

    update() {  //movement of snake

        if (this.length === this.body.length) {
            for (let i = 0; i < this.body.length - 1; i++) {
                this.body[i] = this.body[i + 1];        //updating body length and its positions
            }
        }
        this.body[this.length - 1] = createVector(this.x, this.y);
        this.x = this.x + this.xspeed * this.size;
        this.y = this.y + this.yspeed * this.size;


    }

    show() { //drawing snake
        for (let i = 0; i < this.body.length; i++) {
            fill(0, 255, 0);
            square(this.body[i].x, this.body[i].y, this.size);
        }
        fill(0, 255, 0);
        square(this.x, this.y, this.size);
    }

    move(dir_x, dir_y) {
        this.xspeed = dir_x;
        this.yspeed = dir_y;

    }

    eat(Food_pos) {
        return dist(this.x, this.y, Food_pos.x, Food_pos.y) < 1;
    }

    death() {
        for (let i = 0; i < this.body.length; i++) {
            if (dist(this.body[i].x, this.body[i].y, this.x, this.y) < 1) { //death by intersecting with your body
                return true;
            }
        }
        return this.x >= width || this.y >= height || this.x < 0 || this.y < 0; // death by going out of screen
    }
}

let food;
let s;
let cwidth = 900;
let cheight = 600;
let grid = [];

function setup() {
    //creating canvas
    createCanvas(cwidth, cheight);
    //set framerate so it looks more retro xD
    frameRate(10);
    s = new Snake(30);
    FoodRandomizer();
    textSize(20);

}

function FoodRandomizer() {
    let rows = floor(height / s.size);
    let cols = floor(width / s.size);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(s.size);


}

function draw() {


    if (!s.death()) {
        background(30);
        fill(255);
        text("score: " + s.length.toString(),width-100,30);
        s.update();
        s.show();

        if (s.eat(food)) {
            s.length++;
            FoodRandomizer();
        }
        fill(255, 0, 0);
        square(food.x, food.y, s.size);
    }else{
        s.x =10*s.size;
        s.y =10*s.size;
        s.length =0;
        s.body = [];
        FoodRandomizer();
    }

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.move(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.move(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        s.move(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        s.move(1, 0);
    }
}