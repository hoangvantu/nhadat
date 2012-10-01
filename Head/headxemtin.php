
<link rel="shortcut icon" href="/favicon.ico?v=3.3" />
<link rel="alternate" title="Rao v?t m?i nh?t t?i H� N?i t? RongBay.com" type="application/rss+xml" href="/rss/Ha-Noi/moinhat.rss" /><link href="style/tooltip.css?v=7.578" rel="stylesheet" type="text/css" />
<link href="style/default.css?v=7.578" rel="stylesheet" type="text/css" />

<link rel="stylesheet" href="style/style.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/Banner.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/Cate.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/Footer.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/Detail.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/payment.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/Rongbay.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/Usercp.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/style_cart.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/toolbar.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/ui.datepicker.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="style/jquery.autocomplete.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="javascript/jquery/markitup/sets/bbcode/style.css?ver=7.578" type="text/css">
<link rel="stylesheet" href="javascript/jquery/markitup/skins/simple/style.css?ver=7.578" type="text/css">
<!--[if IE 8]>		<link rel="stylesheet" href="http:////style/ie8.css?v=7.578" type="text/css"/>	<![endif]-->
<!--[if IE 7]>		<link rel="stylesheet" href="http:////style/ie7.css?v=7.578" type="text/css"/>	<![endif]-->
<!--[if lte IE 6]>	<link rel="stylesheet" href="http:////style/ie6.css?v=7.578" type="text/css"/>	<![endif]-->


<script>var query_string = "?page%3Ddetail%26province%3DHa-Noi%26ad_id%3D18262969%26rbname%3DCho-thue-nha-tang-1-va-nha-cap-4-chinh-ch",BASE_URL = "/",WEB_DIR = "/";var IS_ROOT = 0, IS_ADMIN = 0, IS_MOD=0, IS_LOGIN = 0,EB_USER_NAME = "",EB_USER_EMAIL = "", MOBILE_LOGIN=0, IS_BLOCK=0, OPENID_ON=1, RB_CARD_RATE = 0.87, SMS_RATE = 7000, CUR_AREA = 0;</script>
<script type="text/javascript" src="javascript/jquery/jquery.js"></script>

<script type="text/javascript" src="javascript/library.js"></script>
<script type="text/javascript" src="javascript/jquery/packed/jquery.blockUI.js"></script>
<script type="text/javascript" src="javascript/rongbay/header.js"></script>
<script type="text/javascript" src="javascript/mudim.packed.js"></script>
<script type="text/javascript" src="javascript/tooltip.js"></script>

<!--
{$css_file}
{$JSstring}
{$js_file}
-->
<script>MM_preloadImages('style/images/add_uncheck.gif','style/images/add_check.gif');</script>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
				                  {lang: 'vi'}
				              </script>
				           
<script type="text/javascript" src="javascript/tooltip.js?ver=5.578"></script>
<script type="text/javascript" src="javascript/jquery.pack.js"></script>
<script type="text/javascript" src="javascript/jquery/packed/jquery.cookie.js"></script>
<script type="text/javascript" src="javascript/mudim.packed.js"></script>
<script type="text/javascript" src="javascript/jquery/jquery.blockUI.js"></script>
<script type="text/javascript" src="javascript/jquery/ui.datepicker.js"></script>
<script type="text/javascript" src="javascript/library.js"></script>
<script type="text/javascript" src="javascript/boxdropdown.js"></script>
<script type="text/javascript" src="javascript/cities.js"></script>
<script type="text/javascript" src="javascript/common.js"></script>
<script type="text/javascript" src="javascript/payment/payment_rb.js"></script>
<script type="text/javascript" src="javascript/payment/cartGold.js"></script>
<script type="text/javascript" src="javascript/payment/payment_gold.js"></script>
<script type="text/javascript" src="javascript/payment/core.js"></script>
<script type="text/javascript" src="javascript/payment/cartShop.js"></script>
<script type="text/javascript" src="javascript/jquery/packed/jquery.autocomplete.js"></script>
<script type="text/javascript" src="javascript/jquery/packed/jquery.jcache.js"></script>
<script type="text/javascript" src="javascript/jquery/markitup/jquery.markitup.pack.js"></script>
<script type="text/javascript" src="javascript/jquery/markitup/sets/bbcode/set.js"></script>
<script type="text/javascript" src="javascript/detail.js"></script>
<script type="text/javascript" src="javascript/message.js"></script>

<script language="javascript">
jQuery.noConflict();

function changeKeyboard(id) {
	if (document.getElementById(id).className == "searchLeftOff"){
		//setMethod(1);
		Mudim.SetMethod(2);
		document.getElementById(id).className = "searchLeftOn";
	} 
	else{
		//setMethod(-1);
		Mudim.SetMethod(0);
		document.getElementById(id).className = "searchLeftOff";
	}      
	return true;
}

function doSubmit(){	
	if (document.frmSearch.searchword.value.length<3 || document.frmSearch.searchword.value == "Nh?p t? kh�a t�m ki?m") {
		alert("T? kh�a kh�ng du?c d? tr?ng v� ph?i d�i hon 2 k� t?!");
		document.frmSearch.searchword.focus();
		return false;
	}
	document.frmSearch.submit();
	return;
}

function OnOf(obj) {
	obj = document.getElementById(obj);
	if(obj.className=="Header")
		obj.className="HeaderPlus";
	else
		obj.className="Header";
}

function OnOfSameCategory(obj) {
	obj = document.getElementById(obj);
	if(obj.className=="HeaderSameCategory")
		obj.className="HeaderPlusSameCategory";
	else
		obj.className="HeaderSameCategory";
}
</script>
<!--[if lt IE 7]>
<script defer type="text/javascript" src="javascript/jquery/jquery.ifixpng.js"></script>
<script language="javascript">
// apply to all png images 
jQuery(function(){
  // Document is ready
  jQuery('img[@src$=.png]').ifixpng();
});
</script> 
<![endif]-->

<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-16561602-1']);
  _gaq.push(['_trackPageview']);
 
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
 
</script>