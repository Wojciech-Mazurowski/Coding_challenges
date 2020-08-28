class Box {

    constructor(x,y,z,r_){
        this.pos = [x,y,z];
        this.r = r_;

    }
    generate(){
        let boxes = [];
        let b;
        for(let i=-1;i<2;i++) {
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    let newR = this.r/3;
                    b = new Box(this.pos[0]+i*newR, this.pos[1]+j*newR, this.pos[2]+k*newR, newR);
                    boxes.push(b);



                }
            }
        }
        return boxes;
    }
    show(){
        // pushMatrix();
        translate(this.pos[0], this.pos[1], this.pos[2]);
        box(this.r);
        // popMatrix();
    }

}

