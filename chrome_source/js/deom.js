/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-7-22
 * Time: 下午4:13
 * To change this template use File | Settings | File Templates.
 */

/*

var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');
//HTML事件处理程序,省略不写

///////////DOM0级事件处理程序
p1.onclick = function(){
    alert("click");
    alert(this.id);//this reference this elem
};
p1.onclick = null;//删除事件处理程序

////////////DOM2级事件处理程序，但IE不支持
p2.addEventListener("click",function(){
    alert(this.id);
},false);
p1.removeEventListener("click",function(){
    alert(this.id);
},false);

/////////////IE事件处理程序，IE中类似的两个方法：attachEvent()和detachEvent()。
/////////////在使用attachEvent()方法的情况下，事件处理程序会在全局作用域中运行，因此this等于window。
p3.attachEvent("onclick",function(){
    alert("clicked");
});
p3.attachEvent("onclick",function(){
    alert("hello,world");
}); //写了两个事件处理程序，但是它们不是以添加它们的顺序执行，而是以相反的顺序被触发
var handler = function(){
    alert("clicked");
};
p3.attachEvent("onclick",handler);
p3.detachEvent("onclick",handler)

/////////////兼容各个浏览器，只需关注冒泡阶段
var EventUtil = {
    addHandler: function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on" + type,handler);
        }else{
            element["on" + type]= null;
        }
    },
    removeHandler: function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+ type] = null;
        }
    }
};
var btn = document.getElementById("myBtn");
var handler = function(){
    alert("Clicked");
};
EventUtil.addHandler(btn,"click",handler);
EventUtil.removeHandler(btn,"click",handler);
//DOM中的事件对象

var btn = document.getElementById("point");
btn.onclick = function(event){
    alert(event.type);
};
btn.addEventListener("click",function(event){
    alert(event.type);
},false);
btn.onclick = function(event){
    alert(event.currentTarget == this);
};*/