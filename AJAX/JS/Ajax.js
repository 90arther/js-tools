/**
 * Created with JetBrains WebStorm.
 * User: 90Arther
 * Date: 13-7-13
 * Time: 上午11:05
 * To change this template use File | Settings | File Templates.
 */
//以上两种结合在一起就支持主流浏览器（IE6/7/8/9/10、Firefox、Opera、Chrome和safari等)
/*
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
*/
function createXHR(){
    if(typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    }else {
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");
        return xhr;
    }
}



