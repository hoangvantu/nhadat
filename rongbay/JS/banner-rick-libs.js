var imgHost1="http://admicro2.vcmedia.vn/adt/cpc/tvcads/",arrDataTVC=null,_admTVC_top=156,_arrTvcTracking={cid:1025028,id:149054};
function _checkCookie(a,b){if(void 0!=window.ADS_CHECKER&&"undefined"!=window.ADS_CHECKER){var d=ADS_CHECKER.getCookie("_azs"),e=ADS_CHECKER.subCookie(d,"z"+a+":",0),f=parseInt((new Date).getTime()/1E3),f=86400*parseInt(f/86400)+86400;if(""==e)ADS_CHECKER.setCookie("_azs",d+"z"+a+":"+(b+"_"+f)+";","","/");else{var g=e,c=RegExp(b+"_([0-9]+)","g"),g=c.test(g)?g.replace(c,b+"_"+f):g+(","+b+"_"+f),d=d.replace(e,g);ADS_CHECKER.setCookie("_azs",d,"","/")}}}function get_data(){return arrDataTVC}
function TVCPZones(){this.rand=Math.random();this.fl=Math.floor;this.domain="http://"+document.domain+"/";this.channel=document.location.href;this.rand_limit=1;this.zoneid=-1;this.ClientLo=0;this.version=38;this.clLocat=function(a){if("undefine"!=typeof this.getCookie(a))return this.ClientLo=this.getCookie(a)};this.campWillRun=function(a){for(var b=[],d=this.cookCpRunned(),e=d.length,f=a.length,g=[],c=0,h=a.length;c<h;c++)1025028!=a[c]&&g.push(a[c]);a=g;d=d.substr(0,e-1);this.explode(",",d);clientLo=
this.clLocat("__R");clientLoC=this.clLocat("__RC");this._r=clientLo;this._rc=clientLoC;var e=this.CAMPLOCA,g=[],c=this.getCookie("_azs"),c=this.subCookie(c,"z"+this.zoneid+":",0),i={},c=""==c?c:c.replace("z"+this.zoneid+":","");if(1200>parseInt(screen.width.toString()))return b;if(""!=c)for(var j=c.split(","),c=0,h=j.length;c<h;c++){var k=j[c].slit("_");i[k[0]]=k[1]}if("0"==clientLo||"0"==clientLoC||""==clientLo)for(c=clientLo=0;c<f;c++){if(h=","+e[a[c]]+",",j=/,[1|2|3],[1|2|3],[1|2|3],/g,j.test(h)||
",,"==h||",0,"==h)"undefined"!=typeof i[a[c].bid]?(h=new Date,h=new h.getTime,h=parseInt(h/1E3),h>i[a[c].bid]&&g.push(a[c])):g.push(a[c])}else for(c=0;c<f;c++)if(h=","+e[a[c]]+",",j=/,[1|2|3],[1|2|3],[1|2|3],/g,",0,"==h||j.test(h)||-1!=h.indexOf(","+clientLo+",")||-1!=h.indexOf(","+clientLoC+","))"undefined"!=typeof i[a[c].bid]?(h=new Date,h=new h.getTime,h=parseInt(h/1E3),h>i[a[c].bid]&&g.push(a[c])):g.push(a[c]);if(""==d||null==d)b=g;else{c=0;for(h=g.length;c<h;c++)"undefined"!=typeof g[c]&&-1==
d.indexOf(this.zoneid+"_"+g[c])&&b.push(g[c]);0==b.length&&""!=d&&(this.removeZoneCook(d),b=g)}return b};this.removeZoneCook=function(a){for(var b=this.getCookie("cpcZone"),a=a.split(","),d=a.length-1,e=0;e<d;e++)b=b.replace(a[e]+",","");this.setCookie("cpcZone",b,1,1)};this.cookCpRunned=function(){var a=this.getCookie("cpcZone"),b="";if(""!=a&&1<a.length||"undefined"!=typeof a){for(var a=a.toString().split(","),d=0;d<a.length;d++)-1!=a[d].indexOf(this.zoneid+"_")&&(b+=a[d]+",");return b}return""};
this.explode=function(a,b,d){var e={"0":""};if(2>arguments.length||"undefined"==typeof arguments[0]||"undefined"==typeof arguments[1])return null;if(""===a||!1===a||null===a)return!1;if("function"==typeof a||"object"==typeof a||"function"==typeof b||"object"==typeof b)return e;!0===a&&(a="1");if(!d)return b.toString().split(a.toString());var f=b.toString().split(a.toString()),e=f.splice(0,d-1),f=f.join(a.toString());("undefined"!=typeof f||""!=f||0<f)&&e.push(f);return e};this.subCookie=function(a,
b,d){b=a.indexOf(b,d);d=a.length-1;if(-1!=b){var e=a.indexOf(";",b);-1==e&&(e=d);return a.substring(b,e)}return""};this.setCookie=function(a,b,d,e){var f=new Date;f.setDate(f.getDate()+d);if(1==e)document.cookie=a+"="+escape(b)+(null==d?"":";expires="+f.toUTCString())+";path=/";else if(e=this.getCookie("cpcZone"),0>e.search(b)||""==e||null==e)document.cookie=a+"="+escape(e+b)+(null==d?"":";expires="+f.toUTCString())+";path=/"};this.isArray=function(a){return a.constructor==Array};this.getCookie=function(a){return 0<
document.cookie.length&&(c_start=document.cookie.indexOf(a+"="),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""};this.Shuffle=function(a){for(var b,d,e=a.length;e;b=parseInt(Math.random()*e),d=a[--e],a[e]=a[b],a[b]=d);return a};this.toArray=function(a){var b=[];for(x in a)b.push(a[x]);return b};this.image=function(a){return imgHost1+this.path+a};this.logging=function(a,
b,d){return"http://logging.admicro.vn/_adc.html?adm_domain="+escape(this.channel)+"&adm_campaign="+a.campaignid+"&adm_aditem="+a.id+"&adm_zoneid="+this.zoneid+"&adm_channelid="+d+"&adm_rehttp="+escape(b)};this.resetData=function(a){var b={},d={},e=0,f,g;f=document.domain.replace("www.","");url=function(){var a=top.location.toString(),b=document.domain;return""==b?a:a.substring(a.indexOf(b)+b.length,a.length)};g=url();b.zid=this.zoneid;b.hn=f;b.url=g;for(var c in a)switch(c){case "campaignid":b.cid=
a[c];break;case "linkclick":b.click=a[c];break;case "linkclick":b.click=a[c];break;case "file_name":d[e]={image:imgHost1+a.path+a[c],click:a.linkclick,key:-1};e++;break;case "items":for(var h in a[c])if("undefined"==typeof a[c][h].length){f={};f.key=h.replace(/k/g,"");f.click=a.linkclick;for(var i in a[c][h])""!=a[c][h][i]&&(f[i]="image"==i||"title_image"==i||"addon"==i?imgHost1+a.path+a[c][h][i]:a[c][h][i]);d[e]=f;e++;f={}}else d[e]=a[c][h],e++;b.items=d;break;default:b[c]=a[c]}return b};this.InitScript=
function(){};this.viewLogging=function(){var a,b,d=new Image;a=document.domain.replace("www.","");url=function(){var a=top.location.toString(),b=document.domain;return""==b?a:a.substring(a.indexOf(b)+b.length,a.length)};b=url();d.src="http://logging.admicro.vn/v?"+_arrTvcTracking.cid+";"+_arrTvcTracking.id+";"+_arrTvcTracking.zid+";-1;-1;9;0;0;"+a+";"+encodeURIComponent(b)};this.OnLoaded=function(a){var b=eval(a);this.zoneid=a.ZONEID;_arrTvcTracking.zid=a.ZONEID;this.CAMPLOCA=b.CAMPLOCA;var d=document.getElementById("tvcpzone"),
e=this.campWillRun(b.CAMPLIST);this.cookCpRunned();var f=e.length,g=this.Shuffle(e),g=a;if(1200<parseInt(screen.width.toString()))this.viewLogging();else return d.style.display="none",!1;if(0==f)return d.style.display="none",!1;g=this.Shuffle(e);g=this.Shuffle(g);this.setCookie("cpcZone",this.zoneid+"_"+g[0]+",",1,"");e=[];f=[];f=this.toArray(b.NORMAL[g[0]]);if("0"==this._r||"0"==this._rc||""==this._r){b=0;for(g=f.length;b<g;b++)a=","+f[b].l+",",(-1!=a.indexOf(",1,2,3,")||",,"==a||",0,"==a)&&e.push(b)}else{b=
0;for(g=f.length;b<g;b++)a=","+f[b].l+",",(-1!=a.indexOf(",1,2,3,")||-1!=a.indexOf(","+this._r+",")||-1!=a.indexOf(","+this._rc+","))&&e.push(b)}if(0==e.length)return d.style.display="none",!1;e=this.Shuffle(e);g=f[e[0]];output="";arrDataTVC=this.resetData(g);output="1"==g.format?output+'<div id="rick_Addon" style="position:fixed; bottom:30px; right:0px; clip: rect(0px, 90px, 120px, 0px);  z-index: 1000; "></div><div id="rich_banner" style="position: fixed; bottom: 0px; right: 0px; clip: rect(250px, 1000px, 500px, 750px); z-index: 1000;">':
"2"==g.format?output+'<div id="rich_banner" style="position: fixed; top: 0px; right: 0px; clip: rect(0px, 1000px, 120px, 870px); z-index: 1000;">':output+'<div id="rich_banner" style="position: fixed; bottom: 0px; right: 0px; clip: rect(470px, 1000px, 500px, 0px); z-index: 1000;">';output+='<object id="abc" name="rick_banner" width="1000" height="500"classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="http://admicro2.vcmedia.vn/adt/tvc/template2.swf?v='+this.version+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="swfversion" value="11.0.0.0" /><param name="allowFullScreen" value="false" /><param name="allowScriptAccess" value="always" /><param name="flashvars" value="div_id=rich_banner" /><embed id="abc" height="500" align="middle" width="1000" quality="high" wmode="transparent" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="div_id=rich_banner" src="http://admicro2.vcmedia.vn/adt/tvc/template2.swf?v='+
this.version+'" /></object></div>';d&&(d.innerHTML=output)}}function getScrollTop(){var a=document.body.scrollTop;0==a&&(a=window.pageYOffset?window.pageYOffset:document.body.parentElement?document.body.parentElement.scrollTop:0);return a}function checkPosition(){var a=getScrollTop(),b=document.getElementById("rich_banner");a>_admTVC_top?(b.style.position="fixed",b.style.top="0px"):(b.style.position="fixed",b.style.top=_admTVC_top-a+"px");b.style.right="0px";setTimeout("checkPosition()",10)};