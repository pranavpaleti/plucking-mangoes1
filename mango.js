class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,restitution:0.3,friction:0.5,density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        this.image=loadImage("mango.png");
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        imageMode(CENTER)
       image(this.image,0+10,0,this.r*3,this.r*3)
        pop()
    }
}