var $$ = {
        addHandler : function(element,type,handler){
            if(element.addEventListener){
                element.addEventListener(type,handler,false);
            }else if(element.attachEvent){
                //element.attachEvent("on"+type,handler);
            //}else{
                element["on"+type] = handler;
            }
        },
        ///////////////////////
        removeHandler : function(element,type,handler){
            if(element.removeEventListener){
                element.removeEventListener(type,handler,false);
            }else if(element.detachEvent){
                element.detachEvent("on"+type,handler);
            }else{
                element["on"+type] = null;
            }
        },
        ////////////////////////
        getClassNode : function(node,classname){
        	if(node.getElementsByClassName){
        		return node.getElementsByClassName(classname);
        	}else{
        		var results = new Array();
        		var elems = node.getElementsByTagName("*");
        		for(var i=0;i<elems.length;i++){
        			if(elems[i].className.indexOf(classname)!=-1){
        				results[results.length]=elems[i];
        			}
        		}
        		return results;
        	}
        },
        /////////////////////////
        tab : function(tabNav,tabCon,type) {
            var linklist = document.getElementById(tabNav);
            var tabCon = document.getElementById(tabCon);
            var link= new Array();
            for(var i=0,len=linklist.childNodes.length,j=0;i<len;i++){
                if(linklist.childNodes[i].nodeType == 1){
                    link[j] = linklist.childNodes[i];
                    j++;
                }
            }
            var tabs=new Array();
            for(var i=0,len=tabCon.childNodes.length,j=0;i<len;i++){
                if(tabCon.childNodes[i].nodeType == 1){
                    tabs[j] = tabCon.childNodes[i];
                    j++;
                }
            }
            var listNum=link.length;
            var tabNum=tabs.length;
            for(var i=0;i<listNum;i++){
                link[i]["on"+type]=(function(i){
                    return function(){
                        for(var j=0;j<tabNum;j++){
                            if(i==j){
                                tabs[j].className="current";
                                link[j].className="up";
                            }
                            else{
                                tabs[j].className="";
                                link[j].className="";
                            }
                        }
                    }
                })(i);
            }
        }
        //////////////////////
    };

