/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-7-29
 * Time: 下午2:29
 * To change this template use File | Settings | File Templates.
 */

/*
//矩形描边与矩形填充
var canvas = document.getElementById('canvas');
 context = canvas.getContext('2d');
 context.font = '38px Arial';
 context.fillStyle = 'cornflowerblue';
 context.strokeStyle = 'rgba(0,0,255,0.5)';
 context.fillText('Hello Canvas',canvas.width/2 - 150,canvas.height/2 + 15);
 context.strokeText('Helllo Canvas',canvas.width/2 - 150,canvas.height/2 + 15);

 context.lineJoin = 'round';
 context.lineWidth = 30;

 context.font = '24px Helvertica';
 context.fillText('click anywhere to erase',175,40);

 context.strokeRect(75,100,200,200);
 context.fillRect(325,100,200,200);
 context.canvas.onmousedown = function(e){
 context.clearRect(0,0,canvas.width,canvas.height);
 };

//线性渐变
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var gradient = context.createLinearGradient(0,0,0,canvas.height);
gradient.addColorStop(0,"blue");
gradient.addColorStop(1,"yellow");
context.fillStyle = gradient;
context.fillRect(0,0,canvas.width,canvas.height);
context.fill();
//反射渐变
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var gradient = context.createRadialGradient(canvas.width/2,canvas.height,1,canvas.width/2,0,100);
//径向var gradient = context.createRadialGradient(canvas.width/2,canvas.height/2,1,canvas.width/2,canvas.height/2,canvas.width/2);
    gradient.addColorStop(0,'blue');
    gradient.addColorStop(0.25,'white');
    gradient.addColorStop(0.5,'blue');
    gradient.addColorStop(0.75,'red');
    gradient.addColorStop(1,'yellow');

context.fillStyle = gradient;
context.rect(0,0,canvas.width,canvas.height);
context.fill();
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    repeatRadio = document.getElementById('repeatRadio'),
    norepeatRadio = document.getElementById('norepeatRadio'),
    repeatXRadio = document.getElementById('repeatXRadio'),
    repeatYRadio = document.getElementById('repeatYRadio'),
    video = document.getElementById('video'),
    image = document.getElementById('image');
//Function
function fillCanvasWithPattern(repeatString){
    var pattern = context.createPattern(image,repeatString);
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = pattern;
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fill();
};
//Event handlers
repeatRadio.onclick = function(e){
    fillCanvasWithPattern('repeat');
};
repeatXRadio.onclick = function(e){
    fillCanvasWithPattern('repeat-x');
};
repeatYRadio.onclick = function(e){
    fillCanvasWithPattern('repeat-y');
};
norepeatRadio.onclick = function(e){
    fillCanvasWithPatter('no-repeat');
};

window.onload= function(e){
    fillCanvasWithPattern('repeat');
};

//阴影效果
var SHADOW_COLOR = 'rgba(0,0,0,0.7)';
function setIconShadow(){
    iconContext.shadowColor = SHADOW_COLOR;
    iconContext.shadowOffsetX = 1;
    iconContext.shadowOffsetY = 1;
    iconContext.shadowBlur =2;
}
function setSelectedIconShadow(){
    iconContext.shadowColor = SHADOW_COLOR;
    iconContext.shadowOffsetX = 4;
    iconContext.shadowOffsetY = 4;
    iconContext.shadowBlur = 5;
}
var drawingContext = document.getElementById('canvas').getContext('2d'),
    ERASER_LINE_WIDTH = 1,
    ERASER_SHADOW_STYLE = 'blue',
    ERASER_STROKE_STYLE = 'rgba(0,0,255,0.6)',
    ERASER_SHADOW_OFFSET = -5,
    ERASER_SHADOW_BLUR = 20,
    ERASER_RADIUS = 60;
function setEraserAttributes(){
    drawingContext.lineWidth = ERASER_LINE_WIDTH;
    drawingContext.shadowOffsetX = ERASER_SHADOW_STYLE;
    drawingContext.shadowOffsetY = ERASER_SHADOW_OFFSET;
    drawingContext.shadowOffsetY = ERASER_SHADOW_OFFSET;
    drawingContext.shadowBlur = ERASER_SHADOW_BLUR;
    drawingContext.strokeStyle = ERASER_STROKE_STYLE;
}
function drawEraser(loc){
    drawingContext.save();
    setEraserAttributes();
    drawingContext.beginPath();
    drawingContext.arc(loc.x,loc.y,ERASER_RADIUS,0,Math.PI*2,false);
    drawingContext.clip();
    drawingContext.restore();
}

var context = document.getElementById('canvas').getContext('2d');
function drawGrid(color,stepx,stepy){
//////////画一个剪纸效果的环
}
function drawTwoArcs(){
    context.beginPath();
    context.arc(300,190,150,0,Math.PI*2,false);
    context.arc(300,190,100,0,Math.PI*2,true);

    context.fill()
    context.shadowColor = undefined;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.stroke();
}
function draw(){
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
    drawGrid('lightgray',10,10);
    context.save();
    context.shadowColor = 'rgba(0,0,0,0.8)';
    context.shadowOffsetX  = 12;
    context.shadowOffsetY = 12;
    context.shadowBlur = 15;
    drawTwoArcs();
    context.restore();
}
context.fillStyle = 'rgba(100,140,230,0.5)';
context.strokeStyle = context.fillStyle;
draw();

//绘制三角形、矩形、圆形的剪纸
var context = document.getElementById('canvas').getContext('2d');
function drawGrid(color,stepx,stepy){

}
function draw(){
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
    drawGrid('lightgray',10,10);
    context.save();
    context.shadowColor = 'rgba(200,200,0,0.5)';
    context.shadowOffsetX = 12;
    context.shadowOffsetY = 12;
    context.shadowBlur = 15;
    drawCutouts();
    strokeCutoutShapes();
    context.restore();
}
function drawCutouts(){
    context.beginPath();
    addOuterRectanglePath();
    addCirclePath();
    addRectanglePath();
    addTrianglePath();
    context.fill();
}
function strokeCutoutShapes(){
    context.save();
    context.strokeStyle = 'rgba(0,0,0,0.7)';
    context.beginPath();
    addOuterRectanglePath();
    context.stroke();
    context.beginPath();
    addCirclePath();
    addRectanglePath();
    addTrianglePath();
    context.stroke();
    context.restore();
}
function rect(x,y,w,h,direction){
    if(direction){
        context.moveTo(x,y);
        context.lineTo(x,y+h);
        context.lineTo(x+w,y+h);
        context.lineTo(x+w,y);
    }else{
        context.moveTo(x,y);
        context.lineTo(x+w,y);
        context.lineTo(x+w,y+h);
        context.lineTo(x+w,y+h);
    }
    context.closePath();
}
function addOuterRectanglePath(){
    context.rect(110,25,370,335);
}
function addCirclePath(){
    context.arc(300,300,40,0,Math.PI*2,true);
}
function addRectanglePath(){
    rect(310,55,70,35,true);
}
function addTrianglePath(){
    context.moveTo(400,200);
    context.lineTo(250,115);
    context.lineTo(200,200);
    context.closePath();
}
context.fillStyle = 'goldenrod';
draw();

//绘制两条线段
var context = document.getElementById('canvas').getContext('2d');
context.lineWidth = 1;
context.beginPath();
context.moveTo(50,10);
context.lineTo(450,10);
context.stroke();
context.beginPath();
context.moveTo(50.5,50.5);
context.lineTo(450.5,50.5);
context.stroke();
*/











