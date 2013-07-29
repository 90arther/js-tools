/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-7-29
 * Time: 下午2:29
 * To change this template use File | Settings | File Templates.
 */


/*矩形描边与矩形填充
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
 */
/*线性渐变
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var gradient = context.createLinearGradient(0,0,0,canvas.height);
gradient.addColorStop(0,"blue");
gradient.addColorStop(1,"yellow");
context.fillStyle = gradient;
context.fillRect(0,0,canvas.width,canvas.height);
context.fill();*/
/*反射渐变
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
context.fill();*/
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
