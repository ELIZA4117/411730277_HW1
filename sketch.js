function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#8d86c9");
  noFill()
  rectMode(CENTER)


  for(var j=0;j<(height/50);j++)
   for(var i=0;i<(width/50);i=i+1)
  {
  strokeWeight(20) //藍色不動的小圓
  stroke("#da2c38")
  ellipse(50+(i*50),50+(j*50),15)
  

  strokeWeight(10)//大小隨滑鼠XY軸移動的紅色方框
  stroke(mouseX%256,mouseY%256)
  rect(80+(i*50),80+(j*50),25+mouseX/5,25+mouseY/5)
  

  strokeWeight(2)//大小隨滑鼠Y軸移動的黃色大圓
  stroke("#fee440")
  ellipse(50+(i*50),50+(j*50),25+mouseY/5)
  
  
  }
}

