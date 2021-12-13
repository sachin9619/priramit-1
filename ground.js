class ground{
    constructor(){
        var opt={isStatic:true}
        this.god=Bodies.rectangle(150,400,50,15,opt)
            World.add(world,this.god) 
    }
    display(){
        fill("red")
        stroke("yellow")
        rect(this.god.position.x,this.god.position.y,150,15)

    }
}

