class SlingShot{

    constructor(body1,point1){
        var option={
            bodyA:body1,
            pointB:point1,
            stiffness:0.04,
            length:10
        }
        this.pointB = point1;
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(option);
        World.add(world,this.sling);
    }

    fly() {
        this.sling.bodyA = null
    }
    attach(body){
    this.sling.bodyA = body

    }

    display(){
        
        if (this.sling.bodyA){
            var point1 = this.sling.bodyA.position;
            var point2 = this.pointB;
            stroke(48,22,8);
            strokeWeight(4);
            if (point1.x < 180){
                line(point1.x-25, point1.y, point2.x-10, point2.y+18);
                line(point1.x-25, point1.y, point2.x+20, point2.y+15);
                image(this.sling3, point1.x-30, point1.y-10, 15, 30);
            }
            else {
                line(point1.x-25, point1.y, point2.x-10, point2.y+18);
                line(point1.x-25, point1.y, point2.x+20, point2.y+15);
                image(this.sling3, point1.x+25, point1.y-10, 15, 30)
            }
        }   
        image(this.sling1, 170, 70, 30, 150);
        image(this.sling2, 150,70,30,90)
    }
}