<script>var query_string = "?",BASE_URL = "http://rongbay.com/",WEB_DIR = "/";var IS_ROOT = 0, IS_ADMIN = 0, IS_MOD=0, IS_LOGIN = 0,EB_USER_NAME = "",EB_USER_EMAIL = "", MOBILE_LOGIN=0, IS_BLOCK=0, OPENID_ON=1, RB_CARD_RATE = 0.87, SMS_RATE = 7000, CUR_AREA = 0;</script>
<script type="text/javascript" src="rongbay/js/jquery.js?v=1.2.6.packed"></script>

<script type="text/javascript" src="rongbay/js/library.js?v=5.578"></script>
<script type="text/javascript" src="rongbay/js/jquery.blockUI.js?v=5.578"></script>
<script type="text/javascript" src="rongbay/js/header.js?v=5.578"></script>
<script type="text/javascript" src="rongbay/js/mudim.packed.js?v=0.8-r142"></script>
<script type="text/javascript" src="rongbay/js/tooltip.js"></script>

<!--
{$css_file}
{$JSstring}
{$js_file}
-->



<script type="text/javascript" src="rongbay/js/jquery.jcache.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/jquery.cookie.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/tooltip.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/jquery.pack.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/mudim.packed.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/jquery.blockUI.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/ui.datepicker.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/library.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/boxdropdown.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/cities.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/common.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/payment_rb.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/cartGold.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/payment_gold.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/core.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/cartShop.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/jquery.autocomplete.js?ver=5.578"></script>

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
	if (document.frmSearch.searchword.value.length<3 || document.frmSearch.searchword.value == "Nhập từ khóa tìm kiếm") {
		alert("Từ khóa không được để trống và phải dài hơn 2 ký tự!");
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
<script defer type="text/javascript" src="javascript/jquery.ifixpng.js"></script>
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
