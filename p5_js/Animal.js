class Animal {
    constructor(x, y) {
        this.i = x;
        this.j = y;
        this.x = x * size;
        this.y = y * size;
        this.y2 = this.y + size;
        this.x2 = this.x + size;

        this.type = "neutral";
    }
    
    update()
    {

    }

    show() {
    circle((this.x+this.x2)/2,(this.y+this.y2)/2,size/2);
    }
}