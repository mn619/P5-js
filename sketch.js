let x = 200, y = 200, dx, dy, r, signx = 1, signy = 1;
let dxSlider, dySlider, rSlider;
var col = 100, c, d;

function setup() {
  var canvas = createCanvas(400, 400);  

  canvas.position(130, 130);

  dxSlider = createSlider(0, 50, 10);
  dySlider = createSlider(0, 50, 20);
  rSlider = createSlider(0, 200, 100);
  dxSlider.position(550, 130);
  dySlider.position(550, 160);
  rSlider.position(550, 190);

  dxSlider.size(100);
  dySlider.size(100);
  rSlider.size(100);

}

function draw() {

  col += random(-2, 2), c = mouseY/2, d = mouseX/2;
  background (col,c,d);

  dx = dxSlider.value()/10;
  dy = dySlider.value()/10;
  r = rSlider.value();

  if(signx === 1){
    if(x + r >= width){
      signx *= -1;
    }
  }
  else{
    if(x - r <= 0){
      signx *= -1;
    }
  }

  if(signy === 1){
    if(y + r >= height){
      signy *= -1;
    }
  }
  else{
    if(y - r <= 0){
      signy *= -1;
    }
  }

  x += signx*dx;
  y += signy*dy;
  background (12, 38, 81);

  
  fill(col, c, d);
  circle(x, y, r);
  text('hi', dxSlider.x*2 + dxSlider.width, 25);
}