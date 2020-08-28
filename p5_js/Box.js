class Box {

    constructor(x,y,z,r_){
        this.pos = createVector(x,y,z);
        this.r = r_;

    }
    generate(){
        let boxes = [];
        let b;
        for(let i=-1;i<2;i++) {
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    let newR = this.r/3;
                    if(!(abs(i)+abs(j)+abs(k)<=1)) {
                        b = new Box(this.pos.x + i * newR, this.pos.y + j * newR, this.pos.z + k * newR, newR);
                        boxes.push(b);
                    }
                }
            }
        }
        return boxes;
    }
    show(){
        push()
        fill(100);
        translate(this.pos.x, this.pos.y, this.pos.z);
        box(this.r);
        pop()
    }

}

