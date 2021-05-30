var ball;
//var edge;


function setup() {
  createCanvas(600, 600);

}

function draw() {
  background("black");

  var edge = createSprite(600, 600, 6000, 10);
  edge.shapeColor = "brown";

  for (var i = 50; i < 600; i = i + 50) {
    var line1 = createSprite(i, 100, 30, 30);
    line1.shapeColor = "white";
  }

  for (var i = 50; i < 600; i = i + 50) {
    var line2 = createSprite(i, 200, 30, 30);
    line2.shapeColor = "white";
  }

  for (var i = 50; i < 600; i = i + 50) {
    var line3 = createSprite(i, 300, 30, 30);
    line3.shapeColor = "white";
  }

  for (var i = 50; i < 600; i = i + 50) {
    var vl1 = createSprite(i, 550, 10, 100);
    vl1.shapeColor = "white";
  }

  b1();
  
 
  drawSprites();
}

function b1() {
  if (World.frameCount % 30 === 0) {
    for (var i = 80; i < 550; i = i + 50) {
      var ball = createSprite(i,20, 15, 15 );
      ball.velocityY = 5;
      ball.shapeColor = "yellow";
      /*ball.bounceOff(line1);
      ball.bounceOff(line2);
      ball.bounceOff(line3);
      ball.collide(edge);*/
    }
  }
}
