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
        this.state = "grass";
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

    setstate()
    {
        if(this.state === "grass") {
            push();
            noStroke();
            fill(0, 150, 0, 255);
            square(this.x, this.y, size);
            pop();
        }
        if(this.state === "tree") {
            push();
            noStroke();
            fill(0, 200, 0, 255);
            square(this.x, this.y, size);
            pop();
        }
        if(this.state === "water") {
            push();
            noStroke();
            fill(0, 0, 150, 255);
            square(this.x, this.y, size);
            pop();
        }

    }
}