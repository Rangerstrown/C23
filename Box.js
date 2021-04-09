class Box {

    //properties// inbuilt funtion  used to initialise properties 
    constructor(x,y, width,height){

        var options ={
            restitution:1,
            density:0.8,
            friction:0.8
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);

    }
    //functions

    display(){

        var pos=this.body.position;
        var angle= this.body.angle;
 push()// current setting 
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
pop()// revert to old settings
    }


}