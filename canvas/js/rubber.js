/**
 * Created with JetBrains WebStorm.
 * User: 90Arther
 * Date: 13-8-7
 * Time: 下午5:24
 * To change this template use File | Settings | File Templates.
 */

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    eraseAllButton = document.getElementById('eraseAllButton'),
    strokeStyleSelect = document.getElementById('strokeStyleSelect'),
    guidewireCheckbox = document.getElementById('guidewireCheckbox'),
    drawingSurfaceImageData,
    mousedown = {},
    rubberbandRect = {},
    dragging = false,
    guidewires = guidewireCheckbox.checked;
function drawGrid(color,stepx,stepy){

}
function windowToCanvas(x,y){
    var bbox = canvas.getBoundingClientRect();
    return {x: x - bbox.left * (canvas.width / bbox.width),
            y: y - bbox.top * (canvas.height / bbox.height)};
}
function saveDrawingSurface(){
    drawingSurfaceImageData = context.getImageData(0,0,canvas.width,canvas.height);
}
function restoreDrawingSurface(){
    context.putImageData(drawingSurfaceImageData,0,0);
}
function updateRubberbandRectangle(loc){
    rubberbandRect.width = Math.abs(loc.x - mousedown.x);
    rubberbandRect.height = Math.abs(loc.y - mousedown.y);
    if(loc.x > mousedown.x) rubberbandRect.left = mousedown.x;
    else rubberbandRect.left = loc.x;
    if(loc.y>mousedown.y) rubberbandRect.top = mousedown.y;
    else rubberbandRect.top = loc.y;
}
function drawRubberbandShape(loc){
    context.beginPath();
    context.moveTo(mousedown.x,mousedown.y);
    context.lineTo(loc.x,loc.y);
    context.stroke();
}
function updateRubberband(loc){
    updateRubberbandRectangle(loc);
    drawRubberbandShape(loc);
}
function drawHorizontalLine(y){
    context.beginPath();
    context.moveTo(0,y+0.5);
    context.lineTo(context.canvas.width,y+0.5);
    context.stroke();
}
function drawVerticalLine(x){
    context.begin();
    context.moveTo(x+0.5,0);
    context.lineTo(x+0.5,context.canvas.height);
    context.stroke();
}
function drawGuidewires(x,y){
    context.save();
    context.strokeStyle = 'rgba(0,0,230,0.4)';
    context.lineWidth = 0.5;
    drawVerticalLine(x);
    drawHorizontalLine(y);
    context.restore();
}
canvas.onmousedown = function(e){
    var loc = windowToCanvas(e.clientX, e.clientY);
    e.preventDefault();
    saveDrawingSurface();
    mousedown.x = loc.x;
    mousedown.y = loc.y;
    dragging = true;
};
canvas.onmousemove = function(e){
    var loc;
    if(dragging){
        e.preventDefault();
        loc = windowToCanvas(e.clientX, e.clientY);
        restoreDrawingSurface();
        updateRubberband(loc);
        if(guidewires){
            drawGuidewire(loc.x,loc.y);
        }
    }
};
canvas.onmouseup = function (e){
    loc = windowToCanvas(e.clientX,elientY);
    restoreDrawingSurface();
    updateRubberband(loc);
    draggin = false;
};
eraseAllButton.onclick = function (e){
    context.clearRect(0,0,canvas.width,canvs.height);
    drawGrid('lightgray',10,10);
    saveDrawingSurface();
};
strokeStyleSelect.onchange = function(e){
    context.strokeStyle = strokeStyleSelect.value;
};
guidewireCheckbox.onchange = function(e){
    guidewires = guidewireCheckbox.checked;
};
context.strokeStyle = strokeStyleSelect.value;
drawGrid('lightgray',10,10);

