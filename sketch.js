var sound1
function preload(){
    sound1 = loadSound("Evgeny Bardyuzha - Let It Drop.mp3") //先把音樂檔仔入到sound1程式碼
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background("#ffe6a7");
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}

var w = 100 //大圓的寬
var s_w=40; //小圓的寬
var fc
function draw() {
 background("#ffe6a7");
 rectMode(CENTER)  //設定方框中心點為方框的座標點
 noFill()
 if(sound1.isPlaying()){
  //音樂有播放時
  fc = map(analyzer.getLevel(),0,1,0,100)
 }
 else{
  //音樂沒有播放
  fc = map(mouseX,0,width,0,100)
 }
 for(var y=50;y<=width;y=y+w){
 for(var x=50;x<=width;x=x+w){
  stroke("#9e2a2b")  //畫圓，設定框線顏色與線條粗細
  strokeWeight(3)
  ellipse(x,y,w+mouseX/600+fc)
  stroke("#013a63")  //畫方框，設定框線顏色與線條粗細
  strokeWeight(3) 
  rect(x,y,w+mouseX/200+fc)
  noFill()
  stroke("#9e2a2b")  //畫小圓，設定框線顏色與線條粗細
  strokeWeight(3)
  ellipse(x+25,y+25,s_w+mouseX/150+fc)
  noFill()
  stroke("#9e2a2b")  //畫小圓，設定框線顏色與線條粗細
  strokeWeight(3)
  ellipse(x+75,y+25,s_w+mouseX/150+fc)
 }
 }
 fill("#6f1d1b")
 textSize(30)
 text("412730565陳冠偉",width-800,height-100)
}

function mousePressed(){   //按下滑鼠撥放音樂
 if(sound1.isPlaying()){
    sound1.stop();
 }else{
    sound1.play();
 }
}