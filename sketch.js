function setup() {
var canvas=createCanvas(1000,500);
//blue or red??

blue=[];
red=[];
blue[0]=new players(125,height/2,0,500);
blue[1]=new players(250,height/3,0,500);
blue[2]=new players(250,2*height/3,0,500);
blue[3]=new players(625,height/4,0,500);
blue[4]=new players(625,2*height/4,0,500);
blue[5]=new players(625,3*height/4,0,500);
width=1000;
height=500;

}



function draw() {
  background(78, 178, 7);
  back();
  
     

  for(var i=0;i<6;i++)
  {
  	blue[i].move();
  	blue[i].show();
  }
  
  //haha
  //haha
  

}

//drawing the boundary lines
function back()
{
 stroke(51);
  strokeWeight(5);
for(var i=0;i<7;i++)
 { line(125 +125*i,0,125 + 125*i,500);
 }
 stroke(51)
 noFill();
 ellipse(width/2,height/2,100,100);
 rect(0,height/2,75,200);
 rect(width,height/2,75,200);
 rect(width/2,height/2,1000,500);
}


//creating players
function players(ix,iy,cy1,cy2)
{

//ix is the initial x variable. cy is the y constraint . no need for x direction


this.x=ix;
this.y=iy;

//speed variables. no need to create for x direction.

this.dy=0;
//this creates the moving effect
this.move=function()
{
	this.y=this.y+this.dy;
	this.y=constrain(this.y,cy1,cy2);

}

//this shows the object

this.show=function()
{   stroke(255,0,0);
	strokeWeight(5);
	fill(0, 195, 255);
	rectMode(CENTER);
	rect(this.x,this.y,20,50);
}






	
}

function BALL()
{
	this.x=width/2;
	this.y=height/2;


   if(flag)//ball speed variables
   this.dx=1;
   this.dy=1;

}
