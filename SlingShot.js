class SlingShot{

    constructor(body1,point1){
        var option={
            bodyA:body1,
            pointB:point1,
            stiffness:0.04,
            length:10
        }
        this.pointB = point1;
        this.sling = Constraint.create(option);
        World.add(world,this.sling);
    }

    fly() {
        this.sling.bodyA = null
    }

    display(){
        if (this.sling.bodyA){
            var point1 = this.sling.bodyA.position;
            var point2 = this.pointB;
            stroke("black");
            strokeWeight(4);
            line(point1.x, point1.y, point2.x,point2.y);
        }   
    }
}