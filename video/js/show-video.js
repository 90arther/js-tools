/**
 * Created with JetBrains WebStorm.
 * User: 90Arther
 * Date: 13-9-28
 * Time: 下午3:26
 * To change this template use File | Settings | File Templates.
 */
/** @author:xylonhuang http://www.m.com/d/?p=313 @update:2013.9.10 @version:v1.2.6 **/
//配置弹出层，传入id
function TGDialogS(e){showDialog.show({id:e,bgcolor:"#000000",opacity:100});}
//弹出层
function DivHide(){
    var flv_s = document.getElementById("swfLay");
    if (flv_s){flv_s.innerHTML= "";}
    showDialog.hide('layer');
}

function DivShow(videoID){
    if (!videoID) return;
    var htmls=
        "<object width=\"580\" height=\"435\" data="+videoID+".swf align=\"middle\" id=\"flashplayer\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codeBase=\"http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab#version=10,0,0,0\">" +
        "<param name=\"movie\" value="+videoID+".swf>" +
        "<param name=\"quality\" value=\"High\">" +
        "<param name=\"allowscriptaccess\" value=\"always\">" +
        "<param name=\"allowNetworking\" value=\"all\">" +
        "<param name=\"allowFullScreen\" value=\"true\">" +
        "<embed width=\"580\" wmode=\"Opaque\" height=\"435\" align=\"middle\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" allowscriptaccess=\"always\" id=\"flashplayer\" name=\"_playerswf\" quality=\"high\" src="+videoID+".swf wmode=\"transparent\">" +
        "</object>";
    var flv_s = document.getElementById("swfLay");
    if (flv_s){flv_s.innerHTML=htmls}
    showDialog.show({
        id:"videoLay",
        bgcolor:"#000",
        opacity:60
    });
    document.getElementById("local_btn").href=videoID+".mp4";
}