/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-7-26
 * Time: 下午5:26
 * To change this template use File | Settings | File Templates.
 */
var wrap = document.getElementById('wrap');
var label = document.getElementById('wrap').getElementsByTagName('label');
var input = document.getElementById('wrap').getElementsByTagName('input');
var value = 123;
input.onclick=function(){
   value = this.id;
   alert(value);
};
label.onclick=function(){
    alert(this.id);
}