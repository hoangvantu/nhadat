var strDomain=document.domain;
var checkStickyLoad=false;
var checkStickyCount=false;
var random1=0;
var return_link='';
var admTimeSticky=0;
var t_showFooterPopup,t_showFooterPopup1,_admStickyHeight=0,_admStickyFooter=0;
function getElementsByPrefix(inPrefix,inRoot){
	var elem_array = [];
	if(typeof inRoot.firstChild!= 'undefined'){
		var elem = inRoot.firstChild;
		while (elem!= null){
			if(typeof elem.firstChild!= 'undefined'){
				elem_array = elem_array.concat(this.getElementsByPrefix(inPrefix,elem));
			}
			if(typeof elem.id!= 'undefined'){
				var reg = new RegExp ( '^'+inPrefix+'.*' );
				if(elem.id.match(reg)){
					elem_array.push(elem);
				}
			}
			elem = elem.nextSibling;
		}
	}
	return elem_array;
}
var windowPrototype={
	wdHeight:function(){
		var myHeight;
		if( typeof( window.innerWidth ) == 'number' ) {
			//Non-IE
			myHeight = window.innerHeight;
		} else if( document.documentElement && (  document.documentElement.clientHeight ) ) {
			//IE 6+ in 'standards compliant mode'
			myHeight = document.documentElement.clientHeight;
		} else if( document.body && (  document.body.clientHeight ) ) {
			//IE 4 compatible
			myHeight = document.body.clientHeight;
		}
		return myHeight;
	},
	wdWidth:function(){	
		var myWidth;
		if( typeof( window.innerWidth ) == 'number' ) {
			//Non-IE
			myWidth = window.innerWidth;
			
		} else if( document.documentElement && ( document.documentElement.clientWidth  ) ) {
			//IE 6+ in 'standards compliant mode'
			myWidth = document.documentElement.clientWidth;
			
		} else if( document.body && ( document.body.clientWidth  ) ) {
			//IE 4 compatible
			myWidth = document.body.clientWidth;
			
		}
		return myWidth;
	}
}	
var Browser = {
	  Version: function() {
		var version = 999; // we assume a sane browser
		if (navigator.appVersion.indexOf("MSIE") != -1)
		  // bah, IE again, lets downgrade version number
		  version = parseFloat(navigator.appVersion.split("MSIE")[1]);
		return version;
	  }
}
var browserVersion=Browser.Version();
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
function getElementTop(Elem) {
	if(document.getElementById) {	
		var elem = document.getElementById(Elem);
	} else if (document.all) {
		var elem = document.all[Elem];
	}
	if(elem!=null){
		yPos = elem.offsetTop;
		tempEl = elem.offsetParent;
		while (tempEl != null) {
			yPos += tempEl.offsetTop;
			tempEl = tempEl.offsetParent;
		}
		return yPos;
	}
	else{
		return 150;
	}
}
function getElementLeft(Elem) {
	
	var elem;
	if(document.getElementById) {
		var elem = document.getElementById(Elem);
	} else if (document.all){
		var elem = document.all[Elem];
	}
	if(elem==null || typeof(elem)=='undefined'){return 0;}
	var xPos =elem.offsetLeft;
	var tempEl = elem.offsetParent;
	while (tempEl != null) {
		xPos += tempEl.offsetLeft;
		tempEl = tempEl.offsetParent;
	}
	return xPos;
}
function getElementWidth(Elem) {
	var elem=document.getElementById(Elem);
	var width=elem.clientWidth;
	return width;
}
var stickyCheck=0;
function stickyLoaded(ida,boxHeight,footerHeight){
	advScroll(ida,boxHeight,footerHeight);
}
var admBox2Status=0;


function advScroll(ida,boxHeight,footerHeight){
		if(ida=='Sticky' && _admStickyHeight!=0){
			boxHeight=_admStickyHeight;
		}
		var id = 'advZone'+ida;
		var doc=document;
		var bodyHeight=Math.max(Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),Math.max(doc.body.clientHeight, doc.documentElement.clientHeight));							
		var scrolltop=getScrollTop();
		var advZoneTop=getElementTop(id+'Top');	
		var advZone=doc.getElementById(id);
		var advZoneLeft=getElementLeft(id+'Top');
		var Zoneleft=0;
		
		var navbrowser=navigator.userAgent;
		if((admBox2Status==0)&&(navbrowser.indexOf('MSIE')==-1)){
			var advZoneHTML=advZone.innerHTML;
			if(advZoneHTML.indexOf('display:none')!=-1){
				advZone.innerHTML=advZoneHTML.replace('display:none','');
			}
			admBox2Status=1;
		}
		if(typeof(footerHeight)=='string'){
			var intFooterHeight=bodyHeight-getElementTop(footerHeight);
		}
		else{
			var intFooterHeight=footerHeight;
		}
		if(admTimeSticky<50){
			admTimeSticky++;
		}
		_admFSticky=intFooterHeight;
		
		if((window.document.readyState=='complete')||(typeof(window.document.readyState)=='undefined')|| (admTimeSticky>=50)){
					
			
			if(((bodyHeight-advZoneTop)>(boxHeight+intFooterHeight))&&(advZoneTop>=110)){
				
				advZone.style.display='block';
				var advZoneTopWidth=getElementWidth(id+'Top');
				var advZoneWidth=getElementWidth(id);
				var _constHeight=(strDomain.indexOf('kenh14.vn')!=-1)?1.08:1.2;
				if((bodyHeight-advZoneTop-intFooterHeight)>(_constHeight*boxHeight)){							
					if(advZoneTopWidth>advZoneWidth){
						Zoneleft=Math.round((advZoneTopWidth-advZoneWidth)/2);
					}
					if((bodyHeight-scrolltop)>(boxHeight+intFooterHeight)){
						if(browserVersion<7){
							advZone.style.position='absolute';
							advZone.style.left=(advZoneLeft+Zoneleft)+'px';
							advZone.style.top=(scrolltop)+'px';
							var heightCheck=getElementTop(id)-scrolltop;
							if(heightCheck!=0){
								advZone.style.top=(scrolltop-heightCheck)+'px';
							}
						}else{
							if((strDomain.indexOf('tratu.vn')!=-1 || strDomain.indexOf('socvui.com')!=-1 || strDomain.indexOf('kenh14.vn')!=-1) &&(browserVersion<=9 && browserVersion>=8)){
								advZone.style.position='absolute';
								advZone.style.left=(advZoneLeft+Zoneleft)+'px';
								advZone.style.top=(scrolltop)+'px';
								var heightCheck=getElementTop(id)-scrolltop;
								if(heightCheck!=0){
									advZone.style.top=(scrolltop-heightCheck)+'px';
								}
							}
							else{
								var _urlDomain=document.domain,h=0;
								if(_urlDomain.indexOf('muare.vn')!=-1 || _urlDomain.indexOf('muare.todo.vn')!=-1){
									h=35;
								}
								advZone.style.left=(advZoneLeft+Zoneleft)+'px';
								advZone.style.top=h+'px';
	
								advZone.style.bottom='auto';
								advZone.style.position='fixed';
							}
							
							
						}
					}
					else{
						advZone.style.position='absolute';
						advZone.style.left=(advZoneLeft+Zoneleft)+'px';
						if(document.domain.indexOf('afamily.vn')!=-1 || document.domain.indexOf('giacaphe.com')!=-1 || document.domain.indexOf('quantri.com.vn')!=-1){
							advZone.style.top=(bodyHeight-(boxHeight+intFooterHeight)-300)+'px';
						}
						else{
							
							advZone.style.top=(bodyHeight-(boxHeight+intFooterHeight))+'px';
						}
						
						var heightCheck=bodyHeight-getElementTop(id);
						if((boxHeight+intFooterHeight)>heightCheck){
							advZone.style.top=(bodyHeight- 2*(boxHeight+intFooterHeight)+heightCheck)+'px';
						}
					}
					if((scrolltop<advZoneTop)){
						advZone.style.top=advZoneTop+'px';
						advZone.style.position='';
					}
					
					var widthCheck=getElementLeft(id)-(Zoneleft+advZoneLeft);
					if(widthCheck!=0){
						if(browserVersion==7){
							if(widthCheck>0){
								advZone.style.position='';
								advZone.style.top='0px';
								advZone.style.left='0px';
							}
							else{
								//advZone.style.left=(Zoneleft+advZoneLeft-widthCheck)+'px';
							}
								
						}else{
							advZone.style.left=Zoneleft+advZoneLeft-widthCheck+'px';
						}
					}
				}
				else{
					advZone.style.top=advZoneTop+'px';
					advZone.style.position='';
				}
			}
			else if((bodyHeight-advZoneTop-intFooterHeight)>(0.85*boxHeight)){
				
				advZone.style.display='block';
			}
			else if((bodyHeight-advZoneTop-intFooterHeight)>272 &&  ida.indexOf('No')==-1){				
				ida=ida+'No';
				var divIda=document.getElementById('advZone'+ida);
				boxHeight=320;	
				if(divIda){
					if(ida=='Sticky'){
						clearTimeout(t_showFooterPopup);
					}
					else{
						clearTimeout(t_showFooterPopup1);
					}
					
					advScroll(ida,boxHeight,footerHeight);				
					advZone.style.display='none';
				}
			}
			else{
				 advZone.style.display='none';
				
			}
		}
		if(typeof(footerHeight)=='string'){
			if(ida=='Sticky'){
				t_showFooterPopup= setTimeout("advScroll('"+ida+"',"+boxHeight+",'"+footerHeight+"')",50);
			}
			else{
				t_showFooterPopup1= setTimeout("advScroll('"+ida+"',"+boxHeight+",'"+footerHeight+"')",50);
			}
			//t_showFooterPopup= setTimeout("advScroll('"+ida+"',"+boxHeight+",'"+footerHeight+"')",50);
		}
		else{
			if(ida=='Sticky'){
				t_showFooterPopup= setTimeout("advScroll('"+ida+"',"+boxHeight+","+footerHeight+")",50);
			}
			else{
				t_showFooterPopup1= setTimeout("advScroll('"+ida+"',"+boxHeight+","+footerHeight+")",50);
			}
		}
}