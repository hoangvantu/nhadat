<?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:30:24
         compiled from "smarty\templates\default\register.tpl" */ ?>
<?php /*%%SmartyHeaderCode:11238505da1505483c6-21046088%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'bb931599764ea3ffd6edbc6666fb9b4fdedafd9f' => 
    array (
      0 => 'smarty\\templates\\default\\register.tpl',
      1 => 1347849518,
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
    '8d3fd45f61297712f6ff4be3db206dd5e63dd713' => 
    array (
      0 => 'smarty\\templates\\default\\registerform.tpl',
      1 => 1347849822,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '11238505da1505483c6-21046088',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_505da1509dff23_76662193',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_505da1509dff23_76662193')) {function content_505da1509dff23_76662193($_smarty_tpl) {?>
<?php /*  Call merged included template "header.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '11238505da1505483c6-21046088');
content_505da1505f1761_26458096($_smarty_tpl);
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
                       
                      <?php /*  Call merged included template "registerform.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("registerform.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '11238505da1505483c6-21046088');
content_505da150916d75_21198556($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "registerform.tpl" */?>

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
 
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:30:24
         compiled from "smarty\templates\default\header.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505da1505f1761_26458096')) {function content_505da1505f1761_26458096($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="vi" lang="vi">
<head>
    
<title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>

<link rel="shortcut icon" href="/themes/favicon.png" type="image/x-icon" />

<?php /*  Call merged included template "javascript.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("javascript.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '11238505da1505483c6-21046088');
content_505da1506576e1_13438609($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "javascript.tpl" */?>
 
 
 <?php /*  Call merged included template "headermeta.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headermeta.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '11238505da1505483c6-21046088');
content_505da1507b3cd5_83961308($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headermeta.tpl" */?>
 
 
 <?php /*  Call merged included template "headercss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headercss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '11238505da1505483c6-21046088');
content_505da15080ed51_01464284($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headercss.tpl" */?>
 
 
</head><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:30:24
         compiled from "smarty\templates\default\javascript.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505da1506576e1_13438609')) {function content_505da1506576e1_13438609($_smarty_tpl) {?>
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
      
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:30:24
         compiled from "smarty\templates\default\headermeta.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505da1507b3cd5_83961308')) {function content_505da1507b3cd5_83961308($_smarty_tpl) {?>


<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ | chinh chu, nha dat video</title>  
	<meta name="google-site-verification" content="4iPFEiUkfa92y9q-jw7vkMGMTTBGfW7LCVEq6vOa7bw" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta content="Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ" name="keywords" />
<meta content="NhadatVideo.vn 100% tin đăng có Ảnh thật, Video thực tế, LH chủ nhà. Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ " name="description" />
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:30:24
         compiled from "smarty\templates\default\headercss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505da15080ed51_01464284')) {function content_505da15080ed51_01464284($_smarty_tpl) {?>

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



<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:30:24
         compiled from "smarty\templates\default\registerform.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505da150916d75_21198556')) {function content_505da150916d75_21198556($_smarty_tpl) {?>


<?php if (isset($_smarty_tpl->tpl_vars['error']->value)){?>
 <div style="color:red"><?php echo $_smarty_tpl->tpl_vars['error']->value;?>
</div>
 <?php }?>

<form name="Register" id="Register"  method="post"  ><input type="hidden" name="form_block_id" value="49475"><div class="divLayout">
	<h1 class="Header" style="font-size:11px"><span>Đăng ký thành viên</span></h1>


<div class="register">
    
	  <script type="text/javascript">
		
		jQuery().ready(function(){
			jQuery('#email').focus();
			
		});
		
		</script>
		 
		<p style="margin-bottom:5px; font-weight:bold; margin-left:25px">L&#7907;i &#237;ch khi &#273;&#259;ng k&#253; v&#224; sử dụng dịch vụ rao vặt của chúng tôi?</p>
		<ul>
			<li>+ Đăng tin rao vặt miễn phí.</li>
			<li>+ Bảng điều khiển giúp cho đăng tải được dễ dàng. </li>
			<li>+ Bảng thống kê tài khoản trên các tin rao.</li>
			<li>+ Lên lịch Up tin theo ý muốn.</li>
			<li>+ Và rất nhiều các tiện ích khác.</li>
        </ul>
		<br />
	  	      
                  
  		
                  <table cellspacing="0" cellpadding="0" class="RegisterPage" width="80%">
            <tr>
                 <td class="label">&#272;&#7883;a ch&#7881; E-mail:</td>
                 <td valign="top" class="star">
                 <input type="text" tooltipText="Vui l&#242;ng nh&#7853;p ch&#237;nh x&#225;c e-mail c&#7911;a b&#7841;n" name="email" id="email" class="txt" size="30" maxlength="100" value=""   onblur="if (this.value!='') makeRequest();"/> <span class="risk">*</span><span id='loading'></span></td>
            </tr>
            <tr>
                 <td class="label">T&#234;n &#273;&#7847;y &#273;&#7911;:</td>
                 <td valign="top" class="star">
                 <input tooltipText="Vui l&#242;ng cung c&#7845;p t&#234;n c&#7911;a b&#7841;n &#273;&#7875; tin rao &#273;&#432;&#7907;c &#273;&#225;nh gi&#225; cao h&#417;n" type="text" name="full_name" id="full_name" class="txt" size="30" maxlength="100" value="" /> <span class="risk">*</span></td>
            </tr>
            <tr>
                 <td class="label">M&#7853;t kh&#7849;u (t&#7889;i thi&#7875;u 6 k&#253; t&#7921;):</td>
                 <td valign="top" class="star">
                 <input  tooltipText="M&#7853;t kh&#7849;u t&#7889;i thi&#7875;u ph&#7843;i ch&#7913;a 6 k&#253; t&#7921;, kh&#244;ng s&#7917; d&#7909;ng kho&#7843;ng tr&#7855;ng" type="password" name="register_password" id="register_password" class="txt" size="16" maxlength="16" value="" /> <span class="risk">*</span></td>
            </tr>
            <tr>
                 <td class="label">G&#245; l&#7841;i m&#7853;t kh&#7849;u:</td>
                 <td valign="top" class="star">
                 <input type="password" class="txt" name="confirm_password" id="confirm_password" size="16" maxlength="16" value="" /> <span class="risk">*</span></td>
            </tr>
            <tr>
                 <td class="label">Số điện thoại di động:</td>
                 <td valign="top" class="star">
                  <input tooltipText="Nhập chính xác số điện thoại di động của bạn để có thể quản lý tin dễ dàng hơn" type="text" name="mobile_phone" id="mobile_phone" class="txt" size="16" maxlength="12" value="" /></td>
            </tr>
                        <tr>
                 <td class="label">Mã bảo mật:</td>
                 <td valign="top" class="star">
                 	<div class="floatLeft">
                    	<img id="captcha_img" alt="captcha" src="captcha.php" style="margin-right:10px" /><img id="reload_button" onclick="fn_reload_captcha()" src="style/images/indicator_arrows_static.gif" title="Tạo mã khác" alt="Tạo mã khác" class="creatNewCaptchaButton">
                    </div>
              		
                    <input name="captcha_register" type="text" id="captcha_register" maxlength="100"  style="width:50px;">
                 </td>
            </tr>
                           
            <tr>
              <td valign="top" class="label">L&#7921;a ch&#7885;n th&#234;m:</td>
              <td>
              <input type="checkbox" name="user_newsletter" id="user_newsletter" value="1" checked="checked" /> <label for="user_newsletter">Nh&#7853;n b&#7843;n tin qua e-mail</label><br />
              
             <input type="checkbox" name="user_hide_email" id="user_hide_email" value="1" /> <label for="user_hide_email">Gi&#7845;u e-mail c&#7911;a t&#244;i</label>
             
             <br /><br />
             
             <input onclick="change_confirm()" name="confirm_register" value="1" type="checkbox" id="confirm_register" />
             
             <label class="register-confirm"  for="confirm_register">Tôi chấp nhận những <a href="http://blog.rongbay.com/2008/10/21/quy-dinh-dang-tin-tren-rongbaycom-va-cac-doi-tac/" target="_blank">&#273;i&#7873;u kho&#7843;n của RongBay.com</a></label> 
             
             <span class="risk">*</span>
             </td>
            </tr>    
            <tr>
                <td>&nbsp;</td>
                 <td><br />
                 	<input type="submit" name="submit" id="submit"  value="Hoàn tất đăng ký" class="buttonDisabled" disabled="disabled" style="height:28px"/>
                 </td>
            </tr>
            </table>
          </div>
        
        
        </div>


<script type="text/javascript">
	var tooltipObj = new DHTMLgoodies_formTooltip();
	tooltipObj.setTooltipPosition('right');
	tooltipObj.setPageBgColor('#EEEEEE');
	tooltipObj.setTooltipCornerSize(10);
	tooltipObj.initFormFieldTooltip();
</script>
</form>	<?php }} ?>