function setup() {
var canvas=createCanvas(1000,500);
//blue or red??
var flag=1;
//for now
blue=[];
red=[];
blue[0]=new players(125,height/2,500/3,1000/3); // must be improved
blue[1]=new players(250,height/3,0,1000/3);
blue[2]=new players(250,2*height/3,500/3,500);
blue[3]=new players(625,height/4,0,500/2);
blue[4]=new players(625,2*height/4,500/4,3*500/4);
blue[5]=new players(625,3*height/4,500/2,500);
red[0]=new enemy(875,height/2,600/3,900/3);
red[1]=new enemy(750,height/3,0,1000/3);
red[2]=new enemy(750,2*height/3,500/3,500);
red[3]=new enemy(375,height/4,0,500/2);
red[4]=new enemy(375,2*height/4,500/4,3*500/4);
red[5]=new enemy(375,3*height/4,500/2,500);
width=1000;
height=500;
ball=new BALL();

}



function draw() {
  background(78, 178, 7);
  back();
  detect(); //enemy AI
    move();   // function to move the players
    collide();

  for(var i=0;i<6;i++)
  {
  	
  	blue[i].show();
    red[i].move();
  	red[i].show();
  
  }
  
   ball.move();
   if(ball.goal())
   {
   	print("goal!!!!!");
   	ball.x=500;
   	ball.y=250;
   }
   ball.show();
  

}

function detect()
{
	if(ball.y>250)
	{
		for(var i=0;i<3;i++)red[i].dy=4;

			if(ball.x>375)
			{
				for(var i=3;i<6;i++)red[i].dy=-4;

			}
		else 

		{
			for(var i=3;i<6;i++)red[i].dy=4;
		}
	}                                            //differnt setting for attacker and defenders
else
{
	for(var i=0;i<3;i++)red[i].dy=-4;

			if(ball.x>375)
			{
				for(var i=3;i<6;i++)red[i].dy=4;

			}
		else 

		{
			for(var i=3;i<6;i++)red[i].dy=-4;
		}
}
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
 rect(0,height/2,75,100);
 rect(width,height/2,75,100);
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
this.move=function(dir)
{
	this.y=this.y+dir;
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

//creating enemies
function enemy(ix,iy,cy1,cy2)
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
{   stroke(0,0,255);
	strokeWeight(5);
	fill(255, 0, 0);
	rectMode(CENTER);
	rect(this.x,this.y,20,50);
}






	
}




//ball constructor function
function BALL()
{
	this.x=width/2;
	this.y=height/2;


   //ball speed variables
   this.dx=3;
   this.dy=3;

   this.move=function()
   {
   	//creating basic bouncing ball
   	if(this.x+this.dx>1000 || this.x+this.dx<0)this.dx*=-1;  //checking boundary conditions
   	if(this.y+this.dy>500 || this.y+this.dy<0)this.dy*=-1;

   	this.x=this.x+this.dx;
   	this.y=this.y+this.dy;

   }





   
    
   this.goal=function()
   {
   	if(this.x==0 || this.x==1000)
   	{
   		if(this.y>100 && this.y<300)return 1;
   		else return 0;

   	}
   }
   this.show=function()
   {
   	fill(255);
   	stroke(0);
   	strokeWeight(5);
   	ellipse(this.x,this.y,20,20);
   }

}






//function to introduce controls


function move()
{
	if(keyIsDown(87))
	{
		
           blue[0].move(-5);
		
	}
	 else if(keyIsDown(83))
	{
		
			blue[0].move(5);
		
	}
	 else if(keyIsDown(69))
	{
		
			blue[1].move(-5);
			blue[2].move(-5);
		
	} else if(keyIsDown(68))
	{
		
			blue[1].move(5);
			blue[2].move(5);
		
	} else if(keyIsDown(82))
	{
		
			
			blue[3].move(-5);
			blue[4].move(-5);
			blue[5].move(-5);
		
	} else if(keyIsDown(70))
	{
		
			blue[3].move(5);
			blue[4].move(5);
			blue[5].move(5);
		
	}
}

function collide()
{

   for(var i=0;i<6;i++)
   {


   	if(  ball.x >=blue[i].x-10 && ball.x<=blue[i].x+10)
   	{
   		if(ball.y >=(blue[i].y-25) && ball.y <=(blue[i].y+25))
   		{
   			ball.dx*=-1;
   			ball.x=ball.x+4*ball.dx;
   		}
   	}
   }

    for(var i=0;i<6;i++)
   {


   	if(  ball.x >=red[i].x-10 && ball.x<=red[i].x+10)
   	{
   		if(ball.y >=(red[i].y-25) && ball.y <=(red[i].y+25))
   		{
   			ball.dx*=-1;
   			ball.x=ball.x+4*ball.dx;
   		}
   	}
   }



}