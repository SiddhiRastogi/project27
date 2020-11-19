class Bob{

constructor(x,y){

    var options = {
        restitution:0.1,
        friction:0.8,
        density:0.8
    }
    this.body = Bodies.circle(x,y,25,options);
    World.add(world,this.body)
}

display(){

    fill("yellow");
    ellipse(this.body.position.x,this.body.position.y,50,50);


}


}