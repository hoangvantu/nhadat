var footerAdvHeight=22,doc=document, footerAdv = doc.getElementById('admFooter'), marqueeAdv=doc.getElementById('marqueeAdv'), isShowFooterAdv=0, isHideFooterAdv=0, height=230, footerTopHeight=22, isOnmouse=0, timeOnmouse=3, heightDefault=0, widthDefault=0,footerLoad=doc.getElementById('footerLoad'),timeout=0;
var Browser = {
	  Version: function() {
		var version = 999; // we assume a sane browser
		if (navigator.appVersion.indexOf("MSIE") != -1)
		  // bah, IE again, lets downgrade version number
		  version = parseFloat(navigator.appVersion.split("MSIE")[1]);
			return version;
	  }
}
var showpopup=0;
var isPopupshow=0;
function getScrollTop(){
	  var ScrollTop = document.body.scrollTop;
	   if (ScrollTop == 0)		  
		 {
			 if (window.pageYOffset)
				 ScrollTop = window.pageYOffset;
			 else
				 ScrollTop = (document.body.parentElement) ?     document.body.parentElement.scrollTop : 0;
		 }
	return ScrollTop;
}
function getElementLeft(Elem) {
	var elem;
	if(document.getElementById) {
		var elem = document.getElementById(Elem);
	} else if (document.all){
		var elem = document.all[Elem];
	}
	xPos = elem.offsetLeft;
	tempEl = elem.offsetParent;
	while (tempEl != null) {
		xPos += tempEl.offsetLeft;
		tempEl = tempEl.offsetParent;
	}
	return xPos;
}
function deletePopup(){
	var cookie=ADS_CHECKER.getCookie('_popup');
	adm_setCookie('_popup', cookie+'pp:0;', 2*60000, '/');
	footerAdv.innerHTML='';
}
function hideFooterPopup(){
	
		if(footerAdvHeight<=22){
			footerAdv.style.height='22px';
			clearTimeout(t);
			isShowFooterAdv=0;	
			isOnmouse=0;	
		}
		else{
			footerAdv.style.height=footerAdvHeight+'px';
			footerAdvHeight-=6;					
			var t=setTimeout('hideFooterPopup()',30);
		}
	
}
function fOnmouseOver(){
		if(isShowFooterAdv==1) return false;
		if(isOnmouse==3){
			showFooterPopup();
			footerLoad.style.display='none';
			footerLoad.innerHTML='';
		}
		else{
			footerLoad.style.display='block';
			footerLoad.innerHTML=(3-isOnmouse);
			++isOnmouse;
			timeout=setTimeout("fOnmouseOver();",500)
		}
}
function fOnmouseOut(){
	isOnmouse=0;
	clearTimeout(timeout);
	footerLoad.style.display='none';
	footerLoad.innerHTML='';
	
}
function showFooterPopup(){
	if(isShowFooterAdv==0){
		if (footerAdvHeight<=height){
			if(footerAdvHeight==22){
				isHideFooterAdv=1;
				if(typeof(scrolltext)!='undefined'){
					clearTimeout(scrolltext);
				}
			}			
			footerAdvHeight+=5;
			footerAdv.style.height=footerAdvHeight+'px';
			if(footerAdvHeight>=height){
				footerAdv.style.height='230px';
			}
			
			var t=setTimeout('showFooterPopup()',10);						
		}else{
			isShowFooterAdv=1;
			clearTimeout(t);
			var t= setTimeout('hideFooterPopup()',10000);
		}
	}
}
function getElementTop(Elem) {
	if(document.getElementById) {	
		var elem = document.getElementById(Elem);
	} else if (document.all) {
		var elem = document.all[Elem];
	}
	yPos = elem.offsetTop;
	tempEl = elem.offsetParent;
	while (tempEl != null) {
		yPos += tempEl.offsetTop;
		tempEl = tempEl.offsetParent;
	}
	return yPos;
}

function scrollText(msg){
	msg=msg.substr(2,msg.length-1)+msg.substr(0,2);
	var marqueeAdv=document.getElementById('marqueeAdv');
	marqueeAdv.innerHTML=msg;
	var scrolltext=setTimeout('scrollText("'+msg+'")',400);
}

var scrollTopHeight1=getScrollTop();
function footterScroll(){
	var scrollTopHeight2=getScrollTop();
	
	if((scrollTopHeight2-scrollTopHeight1)>=0){
		
		if(isPopupshow==0){
			
			isPopupshow=1;
		}
		var t_showFooterPopup= setTimeout('showFooterPopup()',10);
	}
	
	if(isPopupshow!=1){
		var t_showFooterPopup= setTimeout('footterScroll()',500);
	}
}

var BrowserV = {
	  Version: function() {
		var version = 999; // we assume a sane browser
		if (navigator.appVersion.indexOf("MSIE") != -1)
		  // bah, IE again, lets downgrade version number
		  version = parseFloat(navigator.appVersion.split("MSIE")[1]);
		return version;
	  }
}
var browserVersion=BrowserV.Version();

function adm_setCookie(name, value, expires, path, domain, secure) {
	    var expires=(new Date( + (new Date) + 15*60000)).toGMTString();
	    var r = [name + "=" + escape(value)],
	    s,
	    i;
	    for (i in s = {
	        expires: expires,
	        path: path,
	        domain: domain
	    }) {
	        s[i] && r.push(i + "=" + s[i])
	    }
	    return secure && r.push("secure"),
	    document.cookie = r.join(";"),
	    true
	}

var marqueeAdv=doc.getElementById('marqueeAdv');
if(marqueeAdv!=null){
	//var msg=marqueeAdv.innerHTML;
	var cookieAZS=ADS_CHECKER.getCookie('_popup');
	if((cookieAZS.indexOf('pp')==-1)  ){
		footerAdv.style.display='block';
		if(browserVersion>6){
			//footerAdv.style.height='230px';
			footerAdv.style.position='fixed';
			var dm=top.location.toString();
			if(dm.indexOf('webketoan.com')!=-1 || dm.indexOf('giaoduc.net.vn')!=-1 || dm.indexOf('webketoan.vn')!=-1 || dm.indexOf('violet.vn')!=-1 || dm.indexOf('phim.soha.vn')!=-1 || dm.indexOf('yeudulich.vn')!=-1 || dm.indexOf('rongbay.com')!=-1 || dm.indexOf('muare.vn')!=-1 || dm.indexOf('hoaphuongdo.vn')!=-1){
				footerAdv.style.bottom='0px';
			}
			else{
				footerAdv.style.bottom='22px';
			}
		}
		//marqueeAdv.style.width=210+'px';
		//scrollText(msg);
		if(cookieAZS.indexOf('pa')==-1){
			cookieAZS+='pa:0;';
			adm_setCookie('_popup', cookieAZS, '', '/');
			footerAdv.style.height='230px';
			isShowFooterAdv=1;
			footerAdvHeight=230;
			var t= setTimeout('hideFooterPopup()',10000);
		}
		else{
			footerAdv.style.height='22px';
			isShowFooterAdv=0;
			footerAdvHeight=22;
		}
	}
	else{
		footerAdv.innerHTML='';
	}
}