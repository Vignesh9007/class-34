class Chain {
    constructor(bodyA,pointB){
        var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.4    ,
        length:400
        }
        this.pointB=pointB
        this.chain=Constraint.create(options)

        World.add(world,this.chain)

    }
    display(){
        var posA=this.chain.bodyA.position
        var posB=this.pointB
        push()
        strokeWeight(7);
        stroke("cyan")
        line(posA.x,posA.y,posB.x,posB.y)
        pop()
    }

}