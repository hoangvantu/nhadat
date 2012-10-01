/*
#####################
#Rongbay.com - The online classified listing platform
# Code by Rongbay team
# RongBay library
# hoangnova
#####################
*/

// Lay tu file common.js sang
function openWin(image,title)
{
	aWindow=window.open("img_large.php?img="+image+"&title="+title,"","toolbar=no,width=400,height=400,status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}

function openWin2(url,w,h)
{
	aWindow=window.open(url,"","toolbar=no,width="+w+",height="+h+",status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}
function openWin3(url,w,h,title)
{
	aWindow=window.open(url,"","toolbar=no,width="+w+",height="+h+",status=no,scrollbars=yes,resize=no,menubars=no");
	aWindow.focus();
}


function openLargeImage(url)
{
	aWindow=window.open(url,"","toolbar=no,width=400,height=400,status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}

function openBookmark(aURL)
{
	aWindow=window.open(aURL,"","toolbar=no,width=400,height=100,status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}
function openVideo(aURL)
{
	aWindow=window.open(aURL,"","toolbar=no,width=400,height=400,status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}
function openMatchUs(aURL)
{
	aWindow=window.open(aURL,"","toolbar=no,width=400,height=200,status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}
function submitFormTA() 
{
	updateRTE('ta');
	return true;
}
function setImage(string) 
{
	var g = 'File:\/\/' + string;
	var t = "file:///E:/My%20Document/DSC00025.jpg";
	document.getElementById('previewImage').src = t;
	document.getElementById('previewImage').setAttrib('width') = '100';
	//alert(g );

}

function checkSelectedOption(value,form,warning)
{
	if( value != -1 )
	{
		form.catid.value = value;
		form.submit();
	}
	else
	{
		alert(warning);
	}
}
function previewImage(string)
{		
	document.getElementById('previewImage').src = 'File:\/\/' + string;	
}
function previewImageServer(string)
{		
	if (string=="")
		document.getElementById('previewImage').src = "../catimages/blank.gif";	
	else
		document.getElementById('previewImage').src = "../catimages/" + string;	
}
isNS4 = (document.layers) ? true : false;
isIE4 = (document.all && !document.getElementById) ? true : false;
isIE5 = (document.all && document.getElementById) ? true : false;
isNS6 = (!document.all && document.getElementById) ? true : false;

function switchDiv(strDivName,bolVisible){

 //identify the element based on browser type
 if (isNS4) {
   objElement = document.layers[strDivName];
 } else if (isIE4) {
   objElement = document.all[strDivName];
 } else if (isIE5 || isNS6) {
   objElement = document.getElementById(strDivName);
 }
 
 if(isNS4){
     if(!bolVisible) {
       objElement.visibility ="hidden"
     } else {
       objElement.visibility ="visible"
     }     
 }else{
     if(!bolVisible) {
       objElement.style.visibility = "hidden";
     } else {
       objElement.style.visibility = "visible";
     }
 }
}


function removeall(checkboxId)
{
  
	var the_box = eval("window.document.itemForm." + checkboxId);
	for (var i=0;i<the_box.length;i++) 
	{
		the_box[i].checked=false;
  	}
  	the_box[0].checked=true;
}

function resetfirst(checkboxId)
{
  	var the_box = eval("window.document.itemForm." + checkboxId);
  	the_box[0].checked=false;
}

function collapse_all (n_index, n_depth) {
	var o_tree = TREES[n_index ? n_index : 0];
	if (!n_depth) n_depth = 1;
	if (!o_tree)
		alert("Tree is not initialized yet");
	var a_nodes = o_tree.a_nodes;
	for (var i = a_nodes.length - 1; i >= 0; i--)
		if (a_nodes[i].n_depth >= n_depth && a_nodes[i].open)
			a_nodes[i].open(1, 1);
	o_tree.ndom_refresh();
}
function expand_all (n_index, n_depth) {
	var o_tree = TREES[n_index ? n_index : 0];
	if (!o_tree)
		alert("Tree is not initialized yet");
	var a_nodes = o_tree.a_nodes;
	for (var i = 0; i< a_nodes.length; i++)
		if (n_depth == null || a_nodes[i].n_depth <= n_depth)
			a_nodes[i].open(0, 1);
	o_tree.ndom_refresh();
}

function auto_resize_page(){
	var intMax;
	var intRec = 18;
	var intRow = Math.ceil(intRec/3);
	var intCol = 3;
	var intCount = 0;
	var pos = 1;
	
	for(i=1;i<=intRow;i++) {
		intMax = 0;
		for(j=1;j<=intCol;j++) {
			intCount++;
			if(intCount<=intRec) {
				if(document.getElementById('Cate'+intCount))
				intH = parseInt(document.getElementById('Cate'+intCount).offsetHeight);
				if (intH>intMax)
					intMax = intH;
			} else {
				intCount = intRec;
				break;
			}
		}
		
		for(j=pos;j<=intCount;j++) {
			if(document.getElementById('Cate'+j))
			document.getElementById('Cate'+j).style.height=intMax;
		}
		pos=intCount+1;
	}
}
function ietruebody(){
	return (document.compatMode && document.compatMode!="BackCompat" && !window.opera)? document.documentElement : document.body
}

function align_center(id,w,h) {
	id = document.getElementById(id);
	pgyoffset=isNS6? parseInt(pageYOffset) : parseInt(ietruebody().scrollTop)
	horzpos=isNS6? pageXOffset+window.innerWidth/2-w/2 : ietruebody().scrollLeft+ietruebody().clientWidth/2-w/2
	vertpos=isNS6? pgyoffset+window.innerHeight/2-h/2 : pgyoffset+ietruebody().clientHeight/2-h/2
	if (window.opera && window.innerHeight) //compensate for Opera toolbar
		vertpos=pgyoffset+window.innerHeight/2-h/2
	vertpos=Math.max(pgyoffset, vertpos)	
	
	id.style.left=horzpos+"px"
	id.style.top=vertpos+"px"
}
function closeDiv(id){
	document.getElementById(id).style.display="none";
}

var xmlHttp

function showRSS(str,divName)
{ 
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=str
	xmlHttp.onreadystatechange=function()
	{
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{ 
			document.getElementById(divName).innerHTML=xmlHttp.responseText 
		} 
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}
	
function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
	// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
	// Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

// end lấy từ file common.js //////////////////

function fetch_object(idname)
{
	if (document.getElementById)
	{
		return document.getElementById(idname);
	}
	else if (document.all)
	{
		return document.all[idname];
	}
	else if (document.layers)
	{
		return document.layers[idname];
	}
	else
	{
		return null;
	}
}

/**
* Function to emulate document.getElementsByTagName
*
* @param	object	Parent object (eg: document)
* @param	string	Tag type (eg: 'td')
*
* @return	array
*/
function fetch_tags(parentobj, tag)
{
	if (parentobj == null)
	{
		return new Array();
	}
	else if (typeof parentobj.getElementsByTagName != 'undefined')
	{
		return parentobj.getElementsByTagName(tag);
	}
	else if (parentobj.all && parentobj.all.tags)
	{
		return parentobj.all.tags(tag);
	}
	else
	{
		return new Array();
	}
}

/**
* Function to count the number of tags in an object
*
* @param	object	Parent object (eg: document)
* @param	string	Tag type (eg: 'td')
*
* @return	integer
*/
function fetch_tag_count(parentobj, tag)
{
	return fetch_tags(parentobj, tag).length;
}

function getCookie(Name) { 
	var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
	if (document.cookie.match(re)) //if cookie found
	return document.cookie.match(re)[0].split("=")[1] //return its value
	return null
}

function setCookie(name, value, days) {
	var expireDate = new Date()
	//set "expstring" to either future or past date, to set or delete cookie, respectively
	var expstring=(typeof days!="undefined")? expireDate.setDate(expireDate.getDate()+parseInt(days)) : expireDate.setDate(expireDate.getDate()-5)
	document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function swapImg(o,obj) {
	o.src=obj;
}
function getURLParam(strParamName){
  var strReturn = "";
  var strHref = window.location.href;
  if ( strHref.indexOf("?") > -1 ){
    var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
    var aQueryString = strQueryString.split("&");
    for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
      if (
		aQueryString[iParam].indexOf(strParamName + "=") > -1 ){
        var aParam = aQueryString[iParam].split("=");
        strReturn = aParam[1];
        break;
      }
    }
  }
  return strReturn;
}
//call return ActConfirm - Coded by Tuannv 21/10
function ActConfirm(confirmation_message)
{
	if (confirm(confirmation_message))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function log_out(confirmation_message)
{
	var ht = document.getElementsByTagName("html")[0];
	ht.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)";
	if (confirm(confirmation_message))
	{
		return true;
	}
	else
	{
		ht.style.filter = "";
		return false;
	}
}

function getAllQuery() {
  var strURL = document.location.href;
  var query = strURL.substr(strURL.indexOf("#")+1);
  return query;
}

function getQuery(variable) {
  var strURL = document.location.href;
  var query = strURL.substr(strURL.indexOf("#")+1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return "";
}

function gotoTop()
{
	window.scrollTo(0,0);
}

var xmlHttp;
function createXMLHttpRequest() {
	if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	}
}

function startRequest(strUrl, strDivName) {
	createXMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4) {
			if(xmlHttp.status == 200) {
				document.getElementById(strDivName).innerHTML = xmlHttp.responseText;
			}
		}
		else
			document.getElementById(strDivName).innerHTML = "<br><p align=\"center\"><img border=\"0\" src=\"images/loading.gif\"></p><br>";
	};
	xmlHttp.open("GET",strUrl, true);
	xmlHttp.send(null);
}

function startPostRequest(strUrl, strDivName) {
	createXMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4) {
			if(xmlHttp.status == 200) {
				document.getElementById(strDivName).innerHTML = xmlHttp.responseText;
			}
		}
		else
			document.getElementById(strDivName).innerHTML = "<br><p align=\"center\"><img border=\"0\" src=\"images/loading.gif\"></p><br>";
	};
	var strQuery = strUrl.substr(strUrl.indexOf('?')+1,strUrl.length);
	xmlHttp.open("POST",strUrl, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	xmlHttp.send(strQuery);
}

function ShowHideDiv(obj){
	if(fetch_object(obj).style.display==''){
		fetch_object(obj).style.display='none';
	}
	else{
		fetch_object(obj).style.display='';
	}
}

function out(e){
	if (e.srcElement.tagName == "DIV") {
		hideDiv();
	}
}

function getValueId(id,type,svalue){
	if(document.getElementById(id)){
		
		if(typeof(type)=='undefined'){
			var type='value';
		}
		
		if(typeof(svalue)=='undefined'){
			var svalue='';
		}
		
		if(type=='value'){
			return document.getElementById(id).value;
		}
		else if(type=='checked'){
			return document.getElementById(id).checked;
		}
		else if(type=='assign'){
			return document.getElementById(id).value = svalue;
		}
		else{
			return '';
		}
	}
}

function popupNewMes(newMes){		
	var strMess = '';
	if(newMes>0){
		strMess += 'Bạn có <a href="member_message.html">'+ newMes + ' tin nhắn</a> mới';	
		jQuery.jGrowl(strMess,{header: 'Thông báo!'});
	}	
	else{
		return false;
	}
}

function close_messbox(){
	document.getElementById('newupdates').style.display = 'none';
	document.getElementById('newupdates').innerHTML = '';
}

function area_set_auto_resize(eid, rows){
	
		if(rows<2)
		{
			rows =2;			
		}
		jQuery(eid).rows = rows;
		
	
	
	jQuery(eid).keypress(function(e){
			this.rows = rows-1;
			while(this.scrollHeight > this.clientHeight){
				this.rows +=1;
			}
			
			this.rows +=1;
	});
}
function setCaretTo(obj, pos) { 
	if(obj.createTextRange) { 
	  
	    var range = obj.createTextRange(); 
	    range.move("character", pos); 
	    range.select(); 
	} else if(obj.selectionStart) { 
	   
	    obj.focus(); 
	    obj.setSelectionRange(pos, pos); 
	}
}

function fn_reload_captcha(){
	jQuery('#reload_button').attr({src : "style/images/indicator_arrows.gif"});
	jQuery("#captcha_img").attr({ src : 'captcha.php' + '?' + (new Date()).getTime() });		
	setTimeout(function(){jQuery('#reload_button').attr({src : "style/images/indicator_arrows_static.gif"}); }, 500);
}

function log_success(message_all,livetime){
	jQuery.blockUI({message: '<div style="width:360px; border:1px solid #d1d4d3; background-color:#fff; padding:1px;" align="left"><div style=" height:26px; background-color:#17437a" align="left"><span style=" line-height:26px;color: #fff; padding-left:10px;">Thông báo !</span></div><div style=" background:url(style/images/bg_log_faile.gif) repeat-x bottom; min-height:119px;_height:119px;"><div style="background:url(style/images/icon_log_success.gif) no-repeat 10px 20px; min-height:119px;_height:119px;"><div style="margin-left:76px; padding-top:40px">'+message_all+'</div></div></div></div>', css: { border:'none', padding:0}});
	jQuery('div.blockUI').click(function () {
		jQuery.unblockUI();
	});
	if(livetime)
	livetime_all = livetime ;
	else livetime_all=2000;

	setTimeout(jQuery.unblockUI, livetime_all);
}

function log_faile(message_all,livetime){
	jQuery.blockUI({message: '<div id="bound_log_faile" style="width:360px;border:1px solid #d1d4d3; background-color:#fff; padding:1px;" align="left"><div style=" height:26px; background-color:#c12000" align="left"><span style=" line-height:26px;color: #fff; padding-left:10px;">Thông báo !</span></div><div style=" background:url(style/images/bg_log_faile.gif) repeat-x bottom; min-height:119px;_height:119px;"><div style="background:url(style/images/icon_log_faile.gif) no-repeat 10px 20px; min-height:119px;_height:119px;"><div style="margin-left:76px; padding-top:40px">'+message_all+'</div></div></div></div>', css: { border:'none', padding:0}});
	jQuery('div.blockUI').click(function () {
		jQuery.unblockUI();
	});
	if(livetime)
	livetime_all = livetime ;
	else livetime_all=2000;
	setTimeout(jQuery.unblockUI, livetime_all);
}

function on_submit_login_this()
{
	if (!getValueId('user_email_this') || !getValueId('password_this'))
	{
		log_faile('Đăng nhập không thành công');
		jQuery('#overlay').click(function () {
			jQuery.unblockUI();
		});
		setTimeout(jQuery.unblockUI, 2000);
	}
	else
	{
		if(getValueId('set_cookie_this','checked')){
			var jset_cookie = 1;
		}
		else{
			var jset_cookie = 0;
		}

		jQuery.post(WEB_DIR+"ajax.php?act=user&code=login_user", {
			user: getValueId('user_email_this'),
			pass: getValueId('password_this'),
			set_cookie: jset_cookie},
			function(msg){
				if (msg == 'success'){
					location.reload();
				}
				else if (msg == 'unsuccess'){
					log_faile('Đăng nhập không thành công.');
				}
				else if (msg == 'nodata'){
					log_faile('Đăng nhập không thành công.');
				}
				else if(msg == 'un_active'){
					log_faile('Tài khoản của bạn chưa được kích hoạt!<br />Vui lòng kiểm tra lại email của mình!<br />hoặc <a href="'+BASE_URL+'reg_success.html&cmd=active">vào đây</a> để kích hoạt lại.',1000000);
				}
				else{
					//jQuery.blockUI({message: 'Bạn chưa nhập mật khẩu hoặc tên đăng nhập'});
					//log_faile('<div align="center" style="margin:-10px 0 0 -50px">Tài khoản của bạn bị khoá đến <div align="center" style="font-size:12px; padding-top:10px">'+msg+'</div></div>',10000);
					log_faile(msg,1000000);
					jQuery('#overlay').click(function () {							
						window.location.reload();							   
					});
					
					jQuery('#bound_log_faile').click(function () {							
						window.location.reload();							   
					});
				}
			}
		);
	}
}

function closeBlockUI(){		
	jQuery(window).keydown(function (e) {
      if (e.which == 27){
		  jQuery.unblockUI();
	  }
	});
}

function close_thongbao(){
    var key_2_cookie = jQuery("#key_2_cookie").val();	
    jQuery("#header_top_notice").hide();
    jQuery.cookie('close_notice_'+key_2_cookie,1,{expires: 100000});	
}

function isNumeric(string)
{
	var numericExpression = /^[0-9]+$/;
	
	if(string.match(numericExpression))
	{	
		return true;
	
	}
	else
	{	
		return false;	
	}
}

function registerEmail()
{
	//Đăng ký email cho user đăng nhập bằng mobile
	$.ajax({
		type: "POST",
		url: "ajax.php?act=user&code=register_email",
		data: jQuery("#frmInputEmail").serialize(),
		dataType: "json",
		success: function(json){
			if (json.error=='') {
				alert("Cập nhật thông tin thành công.");
				//set cookie 1 ngày
				shop.cookie.set('hidePopupUser', 1, 86400, '/');
				location.reload();
			}
			else {
				jQuery('#cError').html(json.error).show();
			}
		}
	});
	return false;
}

function showInputEmail(){
	//Màn hình đăng ký email cho user đăng nhập bằng mobile
	
    shop.show_overlay_popup('register-email', 'Cập nhật thông tin thành viên',
    chooseInputEmail('register-email', 'Cập nhật thông tin thành viên'),
    {
        background: {
            'background-color' : 'transparent'
        },
        border: {
            'background-color' : 'transparent',
            'padding' : '0px'
        },
        title: {
            'display' : 'none'
        },
        content: {
            'padding' : '0px',
            'width' : '420px',
            'font-size': '12px'
        }
    });
    if(isIE6()==true){
        jQuery('a.classic-popup-close').click(function(){
            cancel_register();
        });

    }//end if

	jQuery('.box-gradien').slideUp().addClass('hidden');
	jQuery("#pay_info_sms").css("display", "block");
}

function cancel_register() {
	shop.cookie.set('hidePopupUser', 1, 86400, '/');//Tắt popup đi trong vòng 1 ngày
	shop.hide_overlay_popup('register-email');
}

function chooseInputEmail(id, title) {
    frmPay = join
    	('<div class="blockCheckOut" style="margin-right: 0pt;">')
    		('<div id="cError" class="newCustomerInfo" style="color:#FF0000; width:317px; display:none" mTop5></div>')
    		('<div style="color:#999; width:335px">Xin chào! Thông tin thành viên của bạn chưa đầy đủ</div>')
    		('<div class="checkOutBox mTop5">')
    			('<div class="floatLeft">')
    				('<div class="newCustomerInfo mTop5" style="width:330px">')
                    	('<div class="input">Điện thoại đăng nhập: <font color="red">'+MOBILE_LOGIN+'</font></div>')
                    ('</div>')
    			('</div>')
    			('<div class="floatLeft">')
    				('<div class="newCustomerInfo mTop5" style="width:330px">')
    					('<div class="clear"></div>')
	                    ('<div class="input">Tên đầy đủ: </div>')
	                    ('<div class="clear"></div>')
	                    ('<div class="input"><input type="text" style="width:280px" id="full_name" name="full_name" maxlength="150" value="'+eb_user_info.full_name+'" /></div>')
	                    ('<div class="input mTop5">Điện thoại hiển thị:</div>')
	                    ('<div class="clear"></div>')
	                    ('<div class="input"><input type="text" style="width:280px" id="user_mobile" name="user_mobile" maxlength="15"  value="'+eb_user_info.mobile+'" onkeypress="return numberOnly(this,event);"/></div>')
	                    ('<div class="clear"></div>')
                    ('</div>')
    			('</div>')
    			('<div class="floatLeft">')
    				('<div class="mTop10 clearfix">')
	                    ('<a href="javascript:void(0);" title="Tắt không hiển thị màn hình nữa" onclick="cancel_register();" class="blueButton mLeft10" id="fr"><span><span>HỦY BỎ</span></span></a>')
	                    ('<a href="javascript:void(0);" onclick="document.frmInputEmail.reset()" class="blueButton mLeft10" id="fr"><span><span>NHẬP LẠI</span></span></a>')
	                    ('<a href="javascript:void(0);" onclick="registerEmail();" class="blueButton" id="fr"><span><span> CẬP NHẬT</span></span></a>')
    			('</div>')
    			('<div class="clear"></div>')
    		('</div>')
    	('</div>')
        ('<div style="clear:both;height:0;overflow:hidden"></div>')();

	return shop.popupSite(id, title, shop.join
		('<div class="content cartMoreAddress" style="padding:10px 15px">')
		('<form name="frmInputEmail" id="frmInputEmail">')
			(frmPay+'')
		('</form>')
	('</div>')());
}
function checkLoginMobile(type) {
	if (type == 1) {
		if (document.getElementById('chkMobile').checked) {
			shop.cookie.set('checkLoginMobile', 1, 86400);
			jQuery('input[name=chkMobileThis]').attr('checked', false);
			jQuery("#tdUsername").html("Số di động : ");
			jQuery("#tdPassword").html("Mã OTP : ");
		}
		else {
			shop.cookie.set('checkLoginMobile', 0, 86400);
			jQuery('input[name=chkMobileThis]').attr('checked', true);
			jQuery("#tdUsername").html("Email : ");
			jQuery("#tdPassword").html("Mật khẩu : ");
		}
	}
	else {
		if (document.getElementById('chkMobileThis').checked) {
			shop.cookie.set('checkLoginMobile', 1, 86400);
		}
		else {
			shop.cookie.set('checkLoginMobile', 0, 86400);
		}
		location.reload();
	}
}