class block{
    constructor(x,y,c){
        var opt={restitution:1,friction:0.1}
        this.box=Bodies.rectangle(x,y,20,20)
        World.add(world,this.box)
        this.c=c
    }
    display(){
        var a=this.box.rectangle
        var p=this.box.position
        push ()
        translate (p.x,p.y)
        rotate(a)
        fill (this.c)
        rect(0,0,20,20)
        pop ()
    }
}i