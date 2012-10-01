<?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:25:25
         compiled from "smarty\templates\default\dangtin.tpl" */ ?>
<?php /*%%SmartyHeaderCode:7211505da0255666d0-89506744%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4bf0cde2466e910d1cfa9acdeb1e0ab25e575ec5' => 
    array (
      0 => 'smarty\\templates\\default\\dangtin.tpl',
      1 => 1347863581,
      2 => 'file',
    ),
    'b308882a4446c97f313fdcf787acc2dbfe461e24' => 
    array (
      0 => 'smarty\\templates\\default\\layout.tpl',
      1 => 1347863076,
      2 => 'file',
    ),
    '543cebccf85e4b9194e85f5ae9aef44a1e47cbb8' => 
    array (
      0 => 'smarty\\templates\\default\\javascript.tpl',
      1 => 1347816641,
      2 => 'file',
    ),
    '001e51da46d819fbe80ef001e2f997fd100a25a6' => 
    array (
      0 => 'smarty\\templates\\default\\headermeta.tpl',
      1 => 1347815438,
      2 => 'file',
    ),
    '2ae8029cd7abd6088e7dcf192a9a0f5fea06ae49' => 
    array (
      0 => 'smarty\\templates\\default\\headercss.tpl',
      1 => 1347815309,
      2 => 'file',
    ),
    'fa99b0b20e6c2e6281ddbc8cdcca528984c72572' => 
    array (
      0 => 'smarty\\templates\\default\\header.tpl',
      1 => 1347863090,
      2 => 'file',
    ),
    '0a858af141db4a8c59851a91c2460673c2b55c6e' => 
    array (
      0 => 'smarty\\templates\\default\\func_dangtin.tpl',
      1 => 1347863558,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '7211505da0255666d0-89506744',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_505da0259c8112_95450333',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_505da0259c8112_95450333')) {function content_505da0259c8112_95450333($_smarty_tpl) {?>
<?php /*  Call merged included template "header.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '7211505da0255666d0-89506744');
content_505da025609670_58142615($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "header.tpl" */?>







<body class="sidebars">
		<!--<div style="background-color: #F66; padding: 5px; text-align: center;"><strong>Development version of Framework 6.x-2.3</strong></div>-->
		<!-- Layout -->
     <?php echo $_smarty_tpl->getSubTemplate ("menuleft.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

     <?php echo $_smarty_tpl->getSubTemplate ("menuright.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


		<div id="wrapper">

			<div id="ground">

				<div id="inner-ground">
					<div id="bottom-ground">

                <?php echo $_smarty_tpl->getSubTemplate ("nav_header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


						

						<div id="nav">

							<!-- if block in $nav, removes default $primary and $secondary links -->

							<div id="secondary-links"></div>

						</div>
						<!-- /#nav -->
						<!--
						<div class="breadcrumbs clearfix">
						</div>
						-->
						<!--
						<div class="messages error" style='width: 977px;text-align: center;font-weight: bold;'> Bạn chậm chân hơn người khác ?, hãy bấm vào <a rel='nofollow' href='http://sms.nhadatvideo.vn/user'>Xem trước tin chưa đăng</a> để tăng cơ hội tìm được nhà đất như ý </div>
						-->
						<div id="container">

							<div id="center">
                       
                      <?php /*  Call merged included template "func_dangtin.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("func_dangtin.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '7211505da0255666d0-89506744');
content_505da025933a60_83225143($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "func_dangtin.tpl" */?>

								<<?php ?>?php

								if (isset($_GET['action'])) {
									$act = $_GET['action'];

									switch($act) {
										case 'register' :
											include 'registerform.php';
											break;
										case 'viewlist' :
											include 'danhsachnha.php';
											break;
										case 'edit' :
											include 'suatin.php';
											break;
										case 'dangtin' :
											include 'dangtinraovat.php';
											break;
										case 'quanly' :
											include 'quanlytindang.php';
											break;
										case 'view' :
											include 'view.php';
											break;
									};

								}

								// include 'houselist.php';
								// include 'registerform.php';
								//  include 'dangtinraovat.php';
								//  include 'suatin.php';
								// include 'quanlytindang.php';
								?<?php ?>>
							</div>
							<!-- /#center -->
							
                      <?php echo $_smarty_tpl->getSubTemplate ("nav_right.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

			<?php echo $_smarty_tpl->getSubTemplate ("footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

						</div>
						<!-- /#container -->
						<span class="clear"></span>
						
						
					</div>
					<!-- /#wrapper -->
				</div>
				<!-- /#bottom-ground -->
			</div>
			<!-- /#inner-ground -->
		</div>
		<!-- /#ground -->
		<!-- /layout -->
		

		<div>
			<!--- Ads by Ambient Digital
			<script type="text/javascript" language="javascript" src="http://delivery.adnetwork.vn/247/adclick/ads_em9uZV9NVEk1TXpBd01UZzNNMTh4TWpnd09URTNNREkwWHpJME1GOHlNREE9Lmh0bWxVNzI4STdWRTEwMTAxMDc4Mk0zOFc=/"></script>
			Ads by Ambient Digital --->

		</div>
	</body>
</html>
 
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:25:25
         compiled from "smarty\templates\default\header.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505da025609670_58142615')) {function content_505da025609670_58142615($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="vi" lang="vi">
<head>
    
<title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>

<link rel="shortcut icon" href="/themes/favicon.png" type="image/x-icon" />

<?php /*  Call merged included template "javascript.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("javascript.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '7211505da0255666d0-89506744');
content_505da02566bfd5_85048691($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "javascript.tpl" */?>
 
 
 <?php /*  Call merged included template "headermeta.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headermeta.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '7211505da0255666d0-89506744');
content_505da0257cc109_56955899($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headermeta.tpl" */?>
 
 
 <?php /*  Call merged included template "headercss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headercss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '7211505da0255666d0-89506744');
content_505da025824797_72582616($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headercss.tpl" */?>
 
 
</head><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:25:25
         compiled from "smarty\templates\default\javascript.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505da02566bfd5_85048691')) {function content_505da02566bfd5_85048691($_smarty_tpl) {?>
<script type="text/javascript" src="rongbay/js/register.js?ver=5.578"></script>
<script type="text/javascript" src="rongbay/js/common.js?ver=5.578"></script>

<script type="text/javascript" src="js/js_c75c80d3db6e4498c6e2505f957b2f1e.jsmin.js"></script>
		<script type="text/javascript" src="jscripts/jquery.js"></script>




<!-- TinyMCE -->
<script type="text/javascript" src="jscripts/tiny_mce/tiny_mce.js"></script>
<script type="text/javascript">
 tinyMCE.init({
 // General options
 mode : "textareas",
 theme : "advanced",
 skin : "o2k7",
 plugins : "autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,inlinepopups,autosave",

 // Theme options
 theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
 theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
 theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
 theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak,restoredraft",
 theme_advanced_toolbar_location : "top",
 theme_advanced_toolbar_align : "left",
 theme_advanced_statusbar_location : "bottom",
 theme_advanced_resizing : true,

 // Example word content CSS (should be your site CSS) this one removes paragraph margins
 content_css : "css/word.css",

 // Drop lists for link/image/media/template dialogs
 template_external_list_url : "lists/template_list.js",
 external_link_list_url : "lists/link_list.js",
 external_image_list_url : "lists/image_list.js",
 media_external_list_url : "lists/media_list.js",

 // Replace values for the template plugin
 template_replace_values : {
 username : "Some User",
 staffid : "991234"
}
});
</script>
<!-- /TinyMCE -->






<script language="javascript" type="text/javascript">
    var http_request = false;

    function makeRequest() 
    
    {
	// khởi tạo đối tượng http_request………….
	http_request = false;
	if (window.XMLHttpRequest)
	{ // Mozilla, Safari,…
	    http_request = new XMLHttpRequest();
	    if (http_request.overrideMimeType)
	    {
		// set type accordingly to anticipated content type
		//http_request.overrideMimeType('text/xml');
		http_request.overrideMimeType('text/html');
	    }
	}
	else if (window.ActiveXObject)
	{ // IE
	    try
	    {
		http_request = new ActiveXObject("'Msxml2.XMLHTTP");
	    }
	    catch (e)
	    {
		try
		{
		    http_request = new ActiveXObject("'Microsoft.XMLHTTP");
		}
		catch (e)
		{}
	    }
	}
	// kiểm tra đối tượng http_request đã khởi tạo được hay chưa?
	if (!http_request)
	{
	    alert('Cannot create XMLHTTP instance');
	    return false;
	}
	// khai báo thông số cho đối tượng —- http_request ——
	http_request.onreadystatechange = alertContents; //http_request.onreadystatechange = …. tên hàm mà sever sẽ đổ dữ liệu sau khi đã kết nối thành công
	http_request.open('GET', 'kiem_tra.php?username=' + document.getElementById('email').value, true); // khai báo phương thức gửi….tên file cần xử lý
	http_request.send(null); //những giá trị cần gửi đi, nếu sử dụng phương thức GET thì giá trị gửi là NULL
    }
    
    function alertContents()
    {
	// thông báo của sever trả về — http_request.readyState—-
	// http_request.readyState == 1 sever đã kết nối thành công đến file xử lý
	// http_request.readyState == 4 sever đã xử lý thành công và trả kết quả về
	// http_request.status == 200 quá trình xử lý thành công, không có lỗi
	//document.getElementById('loading').innerHTML….. —innerHTML—can thiệp nội dung vào giữa thẻ html
	if (http_request.readyState == 1)
	{
	    document.getElementById('loading').innerHTML = '<img src="images/loading.gif" style="border:none; margin:-5px 2px" />';
	}
	if (http_request.readyState == 4)
	{
	    
	    if (http_request.status == 200)
	    {
		result = http_request.responseText;
		if (result == 'YES')
		{
		    document.getElementById('loading').innerHTML = "'<span style='color:#F00;font-size:14px'><img src='images/danger.png' width='15px' height='15px' style='border:none; margin:-4px 2px' />&nbsp;Nickname này đã tồn tại.Vui lòng thử lại!</span>";
		}
		else
		{
		    document.getElementById('loading').innerHTML = "'<span style='color:#68AADF;font-size:14px'><img src='images/ok.png' width='15px' height='15px' style='border:none; margin:-4px 2px'/>&nbsp;Bạn có thể sử dụng nickname này</span>";
		}
	    }
	    else
	    {
		alert('There was a problem with the request.');
	    }
	}
    }
</script>








<script type="text/javascript">
			<!--//--><![CDATA[//><!--
			jQuery.extend(Drupal.settings, {
				"basePath" : "/",
				"dhtmlMenu" : {
					"slide" : "slide",
					"siblings" : "siblings",
					"relativity" : "relativity",
					"children" : "children",
					"doubleclick" : "doubleclick",
					"clone" : 0
				},
				"googleanalytics" : {
					"trackOutgoing" : 1,
					"trackMailto" : 1,
					"trackDownload" : 1,
					"trackDownloadExtensions" : "7z|aac|avi|csv|doc|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xml|zip"
				},
				"cron" : {
					"basePath" : "/poormanscron",
					"runNext" : 1346554101
				},
				"tabs" : {
					"slide" : false,
					"fade" : false,
					"speed" : "fast",
					"auto_height" : false,
					"next_text" : "next",
					"previous_text" : "previous"
				}
			});
			//--><!]]>
		</script>
		<script type="text/javascript">
			<!--//--><![CDATA[//><!--
			$().ready(function() {
				$("#edit-new-keywords").autocomplete([], {
					"minChars" : 0
				});
			})
			//--><!]]>
		</script>
		<!--[if lte IE 7]><link type="text/css" rel="stylesheet" media="all" href="/sites/all/themes/framework/fix-ie.css" /><![endif]--><!--If Less Than or Equal (lte) to IE 7-->



      
      
      <script type="text/javascript" src="/sites/default/files/js/js_3ca35e963142807172f539e3d0e61298.jsmin.js"></script>
		<script type="text/javascript">
			<!--//--><![CDATA[//><!--
			var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
			document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
			//--><!]]>
		</script>
		<script type="text/javascript">
			<!--//--><![CDATA[//><!--
			try {
				var pageTracker = _gat._getTracker("UA-7905545-6");
				pageTracker._trackPageview();
			} catch(err) {
			}
			//--><!]]>
		</script>
      
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:25:25
         compiled from "smarty\templates\default\headermeta.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505da0257cc109_56955899')) {function content_505da0257cc109_56955899($_smarty_tpl) {?>


<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ | chinh chu, nha dat video</title>  
	<meta name="google-site-verification" content="4iPFEiUkfa92y9q-jw7vkMGMTTBGfW7LCVEq6vOa7bw" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta content="Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ" name="keywords" />
<meta content="NhadatVideo.vn 100% tin đăng có Ảnh thật, Video thực tế, LH chủ nhà. Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ " name="description" />
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:25:25
         compiled from "smarty\templates\default\headercss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505da025824797_72582616')) {function content_505da025824797_72582616($_smarty_tpl) {?>

<link type="text/css" rel="stylesheet" media="all" href="css/views.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/node.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/defaults.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/system.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/system-menus.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/user.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/dhtml_menu.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/filefield.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/nice_menus.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/nice_menus_default.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/content-module.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/date.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/themes/datepicker.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/themes/timeentry.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/drupal-tabs.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/layout_types.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/module_layout.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/geo.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/fieldgroup.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/faceted_search_ui.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/jquery.autocomplete.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/autocomplete_element.css?S" />
		<link type="text/css" rel="stylesheet" media="all" href="css/style.css?S" />








<style type="text/css">
			#menu {
				position: fixed;
				left: 0%;
				top: 20%;
				width: 8em;
				margin: -2.5em 0 0 0;
				z-index: 5;
				background: hsla(80, 90%, 40%, 0.7);
				color: white;
				font-weight: bold;
				font-size: large;
				text-align: left;
				border: solid hsla(80, 90%, 40%, 0.5);
				border-right: none;
				padding: 0.5em 0.5em 0.5em 0.5em;
				box-shadow: 0 1px 3px black;
				border-radius: 0em 3em 3em 0em;
			}
			#menu li {
				margin: 0
			}
			#menu a {
				color: inherit
			}

			/* Make menu absolute, not fixed, on IE 5 & 6 */
			#menu {
				position: absolute
			}
			* > #menu {
				position: fixed
			}

			p.stb {
				text-indent: 0;
				margin-top: 0.83em
			}
			p.mtb {
				text-indent: 0;
				margin-top: 0.17em
			}
			p.ltb {
				text-indent: 0;
				margin-top: 0.08em
			}
		</style>



<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:25:25
         compiled from "smarty\templates\default\func_dangtin.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505da025933a60_83225143')) {function content_505da025933a60_83225143($_smarty_tpl) {?>
<!--TinyMCE original-->
<form method="post" action="">
    <table>
	<tr height="30">
	    <td valign="top"><strong>Ti&ecirc;u &#273;&#7873;</strong>:</td>
	    <td width="91%" valign="top"><input tooltipText="Vui l." id="ad_title" autocomplete="off" type="text" name="ad_title" maxlength="100" class="txt" value="" onkeypress="return tieude_press(event);" style="width:500px; height:20px"> <span class="risk">*</span></td>
	</tr>
	<tr height="30">
	    <td valign="top">Điện thoại</td>
	    <td valign="top">
		<input tooltipText="Vui lòng nhập số điện thoại để khách hàng có thể liên hệ. Số điện thoại chỉ được phép là kiểu số, tối đa 12 ký tự và tối thiểu 9 ký tự." type="text" name="ad_mobile" maxlength="15" onkeypress="return shop.numberOnly(this, event)" value="" id="ad_mobile" style="width:195px; height:20px"/>
		<span class="risk">*</span> <a href=" http://blog.rongbay.com/2011/11/21/nhap-so-dien-thoai-khi-dang-tin-moi/" title="Tìm hiểu thêm" target="_blank"><img src="style/images/help_icon.gif"></a>
	    </td>
	</tr>
	
	<tr>
	    <td> Chọn tỉnh thành</td>
	    <td>
		<select style="width:200px" class="txt" name="ad_cat_id" id="ad_cat_id" >
		    <option value="0"></option>
		    <option value="0"></option>
		    <option value="0"></option>
		    <option value="0"></option>
		    <option value="0"></option>

		</select>
	    </td>
	</tr>
	<tr>
	    <td> Chọn quận huyện</td>
	    <td>
		<select style="width:200px" class="txt" name="ad_cat_id" id="ad_cat_id" >
		    <option value="0"></option>
		    <option value="0"></option>
		    <option value="0"></option>
		    <option value="0"></option>
		    <option value="0"></option>

		</select>
	    </td>
	</tr>
	<tr>
	    <td colspan="3"><strong>N&#7897;i dung &#273;&#259;ng </strong> <span class="risk">*</span></td>
	</tr>	
	<tr>

	    <td colspan="3">
		<!-- Gets replaced with TinyMCE, remember HTML in a textarea should be encoded -->
		<textarea id="elm1" name="elm1" rows="15" cols="80" style="width: 100%">
		
		</textarea>
	    </td>
	</tr>
    </table>    


    <br />
    <input type="submit" name="save" value="Submit" />
    <input type="reset" name="reset" value="Reset" />


</form>
<!--End Tiny MCE-->
<?php }} ?>