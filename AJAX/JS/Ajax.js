//适用于IE7之前的版本
function createXHR(){
    if(typeof arguments.callee.activeXString != "string"){
        var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
        for(var i = 0, len = versions.length; i < len;i++){
            try{
                var xhr = new ActiveXObject([versions[i]]);
                arguments.callee.activeXString = versions[i];
                return xhr;
            }catch(ex){
                //跳过
            }
        }
    }
    return new ActiveXObject(arguments.callee.activeXString);
}
//在IE7、Firefox、Opera、Chrome和safari都支持原生的XHR对象。
var xhr = new XMLHttpRequest();
//以上两种结合在一起就支持主流浏览器（IE6/7/8/9/10、Firefox、Opera、Chrome和safari等)
function createXHR(){
    if(typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject != "underfined"){
        var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
        for(var i = 0,len = versions.length;i<len;i++){
            try{
                var xhr = new ActiveXObject(version[i]);
                arguments.callee.activeXString = version[i];
                return xhr;
            }catch(ex){
                //跳过
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    }else{
        throw new Error("No XHR object available.");
    }
}
//使用下列创建XHR对象：
var xhr = createXHR();
//第一个方法open()方法，有三个参数:1、要发送请求的类型("get"、"post"等)、请求的URL和表示是否异步发送请求的布尔值。
xhr.open("get","example.php",false);
//第二个方法send()方法，一个参数：作为请求主体发送的数据。
xhr.send(null);
//三个属性
//responseText:作为响应主体被返回的文本
//responseXML:如果响应的内容类型是"text/xml"或"application/xml"，这个属性中将保存包含着响应数据的XML DOM文档。
//status:响应的HTTP状态
//statusText:HTTP状态的说明。


