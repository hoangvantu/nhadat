<?php /* Smarty version Smarty-3.1.11, created on 2012-09-21 01:28:17
         compiled from "smarty\templates\default\danhsachnha.tpl" */ ?>
<?php /*%%SmartyHeaderCode:19662505bc2b1323ee7-02153001%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f37b91fc2803db4bdf470204fe63a29ada22bca7' => 
    array (
      0 => 'smarty\\templates\\default\\danhsachnha.tpl',
      1 => 1347853741,
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
    '9eb7ce2900de12366396c363475fbe1a502931da' => 
    array (
      0 => 'smarty\\templates\\default\\func_dsn.tpl',
      1 => 1347853750,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '19662505bc2b1323ee7-02153001',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_505bc2b1cf82f8_53903714',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_505bc2b1cf82f8_53903714')) {function content_505bc2b1cf82f8_53903714($_smarty_tpl) {?>
<?php /*  Call merged included template "header.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '19662505bc2b1323ee7-02153001');
content_505bc2b1494ff4_80457273($_smarty_tpl);
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
                       
                   <?php /*  Call merged included template "func_dsn.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("func_dsn.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '19662505bc2b1323ee7-02153001');
content_505bc2b1ac5c46_69132908($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "func_dsn.tpl" */?>

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
 
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-21 01:28:17
         compiled from "smarty\templates\default\header.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505bc2b1494ff4_80457273')) {function content_505bc2b1494ff4_80457273($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="vi" lang="vi">
<head>
    
<title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>

<link rel="shortcut icon" href="/themes/favicon.png" type="image/x-icon" />

<?php /*  Call merged included template "javascript.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("javascript.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '19662505bc2b1323ee7-02153001');
content_505bc2b154c2b4_73159516($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "javascript.tpl" */?>
 
 
 <?php /*  Call merged included template "headermeta.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headermeta.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '19662505bc2b1323ee7-02153001');
content_505bc2b176b437_98197189($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headermeta.tpl" */?>
 
 
 <?php /*  Call merged included template "headercss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headercss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '19662505bc2b1323ee7-02153001');
content_505bc2b194c579_08999071($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headercss.tpl" */?>
 
 
</head><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-21 01:28:17
         compiled from "smarty\templates\default\javascript.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505bc2b154c2b4_73159516')) {function content_505bc2b154c2b4_73159516($_smarty_tpl) {?>
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
      
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-21 01:28:17
         compiled from "smarty\templates\default\headermeta.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505bc2b176b437_98197189')) {function content_505bc2b176b437_98197189($_smarty_tpl) {?>


<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ | chinh chu, nha dat video</title>  
	<meta name="google-site-verification" content="4iPFEiUkfa92y9q-jw7vkMGMTTBGfW7LCVEq6vOa7bw" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta content="Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ" name="keywords" />
<meta content="NhadatVideo.vn 100% tin đăng có Ảnh thật, Video thực tế, LH chủ nhà. Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ " name="description" />
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-21 01:28:17
         compiled from "smarty\templates\default\headercss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505bc2b194c579_08999071')) {function content_505bc2b194c579_08999071($_smarty_tpl) {?>

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



<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-21 01:28:17
         compiled from "smarty\templates\default\func_dsn.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505bc2b1ac5c46_69132908')) {function content_505bc2b1ac5c46_69132908($_smarty_tpl) {?>
   <?php if (isset($_smarty_tpl->tpl_vars['danhsachnha']->value)){?>
<div id="huongdan">Các bạn click vào tiêu đề tin để xem chi tiết nhé</div>
    <table style="border:1"">
        <tr>
    	<td>Tiêu đề</td>
    	<td>Nội dung</td> 
    	<td>Số điện thoại</td>
    	<td>Thời gian đăng</td>
        </tr>
 
   <?php  $_smarty_tpl->tpl_vars['foo'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['foo']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachnha']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['foo']->key => $_smarty_tpl->tpl_vars['foo']->value){
$_smarty_tpl->tpl_vars['foo']->_loop = true;
?>
	    <tr>
		<td><a href="view.php?newsid=<?php echo $_smarty_tpl->tpl_vars['foo']->value['NewsID'];?>
"><?php echo $_smarty_tpl->tpl_vars['foo']->value['Title'];?>
</a></td>
		<td><?php echo $_smarty_tpl->tpl_vars['foo']->value['Content'];?>
</td> 
		<td><?php echo $_smarty_tpl->tpl_vars['foo']->value['PhoneNumber'];?>
</td>
		<td><?php echo $_smarty_tpl->tpl_vars['foo']->value['DateTime'];?>
</td>
	    </tr>
       <?php } ?>
       <?php }else{ ?>
       <div id="huongdan">Khong co tin nao dang trong muc nay nhe</div>
 
   <?php }?>
  </table>       
       <?php }} ?>