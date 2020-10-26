var fixedRect, movingRect;
var obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  obj1 = createSprite(200,200,80,30);
  obj1.velocityX = 3; 
  obj2 = createSprite(500,200,80,30);
  obj2.velocityX = -3;

  obj1.shapeColor = "red";
  obj2.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
//  obj2.x = World.mouseX;
 // obj2.y = World.mouseY;

  //call the function and pass the objects you want the collision to be detected
  if(isTouching(fixedRect , obj2)){

    obj1.shapeColor = "yellow";
    obj2.shapeColor = "yellow";
    fixedRect.shapeColor = "blue";


  }
  else{

    obj1.shapeColor = "pink";
    obj2.shapeColor = "blue";
    
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }

   bounceOff(obj1,obj2);

  drawSprites();
}

//yes or no  - true(1) or false (0)( boolean values)

// parameters or arguments - these are passed to the function
function isTouching( object1 , object2 ){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

      return true;
  }
  else {

    return false;
  }

}


function bounceOff(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 ) {

      object1.velocityX =   object1.velocityX *(-1);
      object2.velocityX =   object2.velocityX *(-1);
     
  }

  if( object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
 
    object1.velocityY =   object1.velocityY*(-1);
    object2.velocityY =   object2.velocityY *(-1);

}