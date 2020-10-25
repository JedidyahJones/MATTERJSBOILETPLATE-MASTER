roofclass
constructor(body1,body2, offsetX, offseyY)
{
	this.offsetX=offsetX
	this.offsetY=offsetY
	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{
			x:this.offsetX,y:this.offsetY}
		}
	
  //console.log(options);
  this.rope=Constraint.create(options)
  World.add(world,this.rope)

}

function preload()
{

	rope1=new(bobObject1,body,roofObject.body,bobDiameter*2,0)
	
}

function setup() {
	createCanvas(1600, 400);

	if(Uparrow=moveToleftside)


	


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

}

display()
{
	var pointA=this.rope.bodyA.position;
	var pointB=this.rope.bodyB.position;

	strokeWeight(2);

	var Anchor1X=pointA.x
	var Anchor1Y=pointA.y

	var Anchor2X=pointB.x+this.offsetX
   var Anchor2Y=pointB.x+this.offsetY

Line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
