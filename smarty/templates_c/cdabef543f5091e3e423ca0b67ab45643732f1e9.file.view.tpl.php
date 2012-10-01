<?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:23:35
         compiled from "smarty\templates\default\view.tpl" */ ?>
<?php /*%%SmartyHeaderCode:20271505d9fb711c950-01758656%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'cdabef543f5091e3e423ca0b67ab45643732f1e9' => 
    array (
      0 => 'smarty\\templates\\default\\view.tpl',
      1 => 1347849004,
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
    'fb453c0a672af8f9e817f861bcc2a405a43cff2e' => 
    array (
      0 => 'smarty\\templates\\default\\func_view.tpl',
      1 => 1347862501,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '20271505d9fb711c950-01758656',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_505d9fb7d56684_84405711',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_505d9fb7d56684_84405711')) {function content_505d9fb7d56684_84405711($_smarty_tpl) {?>
<?php /*  Call merged included template "header.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '20271505d9fb711c950-01758656');
content_505d9fb7331ec7_00258033($_smarty_tpl);
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
                       
                      <?php /*  Call merged included template "func_view.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("func_view.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '20271505d9fb711c950-01758656');
content_505d9fb770c207_84000919($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "func_view.tpl" */?>

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
 
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:23:35
         compiled from "smarty\templates\default\header.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505d9fb7331ec7_00258033')) {function content_505d9fb7331ec7_00258033($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="vi" lang="vi">
<head>
    
<title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>

<link rel="shortcut icon" href="/themes/favicon.png" type="image/x-icon" />

<?php /*  Call merged included template "javascript.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("javascript.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '20271505d9fb711c950-01758656');
content_505d9fb73d16a5_07670788($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "javascript.tpl" */?>
 
 
 <?php /*  Call merged included template "headermeta.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headermeta.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '20271505d9fb711c950-01758656');
content_505d9fb754e8f6_91070728($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headermeta.tpl" */?>
 
 
 <?php /*  Call merged included template "headercss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headercss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '20271505d9fb711c950-01758656');
content_505d9fb75c5b28_04659376($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headercss.tpl" */?>
 
 
</head><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:23:35
         compiled from "smarty\templates\default\javascript.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505d9fb73d16a5_07670788')) {function content_505d9fb73d16a5_07670788($_smarty_tpl) {?>
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
      
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:23:35
         compiled from "smarty\templates\default\headermeta.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505d9fb754e8f6_91070728')) {function content_505d9fb754e8f6_91070728($_smarty_tpl) {?>


<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ | chinh chu, nha dat video</title>  
	<meta name="google-site-verification" content="4iPFEiUkfa92y9q-jw7vkMGMTTBGfW7LCVEq6vOa7bw" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta content="Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ" name="keywords" />
<meta content="NhadatVideo.vn 100% tin đăng có Ảnh thật, Video thực tế, LH chủ nhà. Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ " name="description" />
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:23:35
         compiled from "smarty\templates\default\headercss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505d9fb75c5b28_04659376')) {function content_505d9fb75c5b28_04659376($_smarty_tpl) {?>

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



<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-22 11:23:35
         compiled from "smarty\templates\default\func_view.tpl" */ ?>
<?php if ($_valid && !is_callable('content_505d9fb770c207_84000919')) {function content_505d9fb770c207_84000919($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_date_format')) include 'C:\\wamp\\www\\Nhadat\\includes\\smarty\\plugins\\modifier.date_format.php';
?>


  <table border="0" cellpadding="0" style="border-collapse: collapse" width="100%" id="table2">
     <tbody><tr>
       <td valign="top">
        <div style="width:741px">

         <div id="otherCate" onclick="overlayclose('otherCate');"></div>

         <div id="RequestBar_bd"></div>
         <div id="RequestBar">
          <div style="float:left;width:100%">
           <div class="colspan" style="display:block"><a class="btnMoreCol" onmouseover="this.className='btnMoreOverCol'" onmouseout="this.className='btnMoreCol'" title="Xem thêm" onclick="viewMoreDis(2)"></a></div>

           <div class="rowBarCon" style="display: block; padding-top: 3px; ">
            <div class="item-condition" style="width:70px;background:url(style/images/arrow_blue.gif) no-repeat scroll left 7px transparent;font-weight:bold">
             <a href="?action=viewlist&quan=all" style="cursor:pointer"><strong>Tất cả</strong></a>				
            </div>

               

               
<?php  $_smarty_tpl->tpl_vars['foo'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['foo']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachquan']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['foo']->key => $_smarty_tpl->tpl_vars['foo']->value){
$_smarty_tpl->tpl_vars['foo']->_loop = true;
?>
  
    
    <div class="item-condition">
              <a href="danhsachnha.php?quan=<?php echo $_smarty_tpl->tpl_vars['foo']->value['districtid'];?>
" <?php if (isset($_smarty_tpl->tpl_vars['tindang']->value)){?> <?php if ($_smarty_tpl->tpl_vars['foo']->value['districtid']==$_smarty_tpl->tpl_vars['tindang']->value['DistrictID']){?>class="selectCondition"<?php }?><?php }?> ><?php echo $_smarty_tpl->tpl_vars['foo']->value['districtname'];?>
</a>
                 </div>
<?php } ?>


                  
</div>
                </div>

                <div style="float:left;width:100%;padding-top:5px;padding-top:15px">
                <div id="BarConditions" style="display:block">
               <div id="content-bar" style="display: none; ">
                <div class="item-condition" style="width:70px;background:url(style/images/arrow_blue.gif) no-repeat scroll left 7px transparent;font-weight:bold">
                 <a href="/Ha-Noi/Cho-thue-Nha-o-Nha-tro-Thue-va-cho-thue-nha-c272-t634-n242.html" style="cursor:pointer"><strong>Tất cả</strong></a>				
                </div>



               </div>
              </div>
            </div>
           </div>
           <div id="RequestBar_bd"></div>
           <div id="RequestBar">
            <div class="Navication1" style="margin-top:3px;">


             <a href="/Ha-Noi/Cho-thue-Nha-o-Nha-tro-Thue-va-cho-thue-nha-c272-t634-d70.html" rel="nofollow">
              <div onclick="document.location='/Ha-Noi/'" id="nc_detail" class="nc_item" onmouseover="this.className='nc_item_over'" onmouseout="this.className='nc_item'">
               <div align="center" class="center">Tất cả</div>
               <div class="c"></div>
              </div>
             </a>


             <a href="/Ha-Noi/Cho-thue-Nha-o-Nha-tro-Thue-va-cho-thue-nha-c272-t634-n242-d70.html"><div style="margin-left:5px" onclick="document.location='/Ha-Noi/Cho-thue-Nha-o-Nha-tro-Thue-va-cho-thue-nha-c272-t634-n242-d70.html'" id="nc_detail" class="nc_item_over">
               <div align="center" class="center">Cho thuê</div>
               <div class="c"></div>
              </div>
             </a>
             <a href="/Ha-Noi/Can-thue-Nha-o-Nha-tro-Thue-va-cho-thue-nha-c272-t634-n243-d70.html"><div style="margin-left:5px" onclick="document.location='/Ha-Noi/Can-thue-Nha-o-Nha-tro-Thue-va-cho-thue-nha-c272-t634-n243-d70.html'" id="nc_detail" class="nc_item no_bg" onmouseover="this.className='nc_item_over'" onmouseout="this.className='nc_item no_bg'">
               <div align="center" class="center">Cần thuê</div>
               <div class="c"></div>
              </div>
             </a>
             <a href="/Ha-Noi/Moi-gioi-Tr-gian-Nha-o-Nha-tro-Thue-va-cho-thue-nha-c272-t634-n633-d70.html"><div style="margin-left:5px" onclick="document.location='/Ha-Noi/Moi-gioi-Tr-gian-Nha-o-Nha-tro-Thue-va-cho-thue-nha-c272-t634-n633-d70.html'" id="nc_detail" class="nc_item no_bg" onmouseover="this.className='nc_item_over'" onmouseout="this.className='nc_item no_bg'">
               <div align="center" class="center">Môi giới, Tr. gian</div>
               <div class="c"></div>
              </div>
             </a>
             <div class="c"></div>
            </div>
            <div class="Navication2">
             <div style="height:1px;overflow:hidden"></div>
             <div style="text-align:left;zoom:1;display:inline-block;*display:inline;vertical-align: top;padding-left:5px;padding-right:5px;height:20px;line-height:25px;">
              <a href="/Ha-Noi/Cho-thue-Thue-va-cho-thue-nha-c272-n242-d70.html" class="Item All " rel="nofollow">Tất cả</a>
             </div>
                
             
             

               
<?php  $_smarty_tpl->tpl_vars['foo'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['foo']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['phanloainha']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['foo']->key => $_smarty_tpl->tpl_vars['foo']->value){
$_smarty_tpl->tpl_vars['foo']->_loop = true;
?>
  
    
    <div style="text-align:left;zoom:1;display:inline-block;*display:inline;vertical-align: top;padding-left:5px;padding-right:5px;height:20px;line-height:25px;">
               <a href="/Ha-Noi/Cho-thue-Thue-va-cho-thue-nha-c272-n242-d70.html" <?php if (isset($_smarty_tpl->tpl_vars['tindang']->value)&&$_smarty_tpl->tpl_vars['tindang']->value['loainhaid']==$_smarty_tpl->tpl_vars['foo']->value['LoainhaID']){?> class="Item selected" <?php }else{ ?> class="Item" <?php }?> rel="nofollow"><?php echo $_smarty_tpl->tpl_vars['foo']->value['TenLoaiNha'];?>
</a>
              </div>
<?php } ?>






    <div class="c"></div>
            </div>
           </div>

           <script>var ad_id 		=  '18262969';var ad_catid 	= '272';var ad_userid 	= '1002684';var current_user_email 	= '';var current_user_mobile 	= '';var maxWidthSize = 350;var strUrl 	= '/Ha-Noi/Cho-thue-nha-tang-1-va-nha-cap-4-chinh-ch-c272-raovat-18262969.html';var ad_title = 'Cho thuê nhà tầng 1 và nhà cấp 4 chính chủ';</script><script> var pay_card_info = {"10000":20,"20000":40,"30000":60,"50000":100,"100000":210,"200000":430,"300000":650,"500000":1300}; var ad_mobile=""</script><link rel="stylesheet" href="style/ui.datepicker.css" type="text/css"><script type="text/javascript" src="javascript/jquery/ui.datepicker.js"></script><script language="javascript" src="javascript/payment/payment_item.js"></script><div style="clear:both"></div>
           <div id="item_vip_detail">
            <ul style="list-style:none;margin-left:-20px;padding:0px">
             <li style="height:20px"><a href="/Ha-Noi/Cho-thue-nha-tap-the-Hao-Nam-Dong-Da-c272-raovat-18672784.html" onmouseout="hidetip();" onmouseover="showtip('Cho thuê nhà, Phòng 106 A 4 , tập thể Hào Nam, Đống Đa, Hà Nội.Diện tích 50m2, khép kín, tầng 1, tiện đi lại, gần chợ, siêu thị, trường học.Cho thuê lâu dài, ưu tiên hộ gia đình.Liên hệ: Chú Hồng: 0912.675.461');">Cho thuê nhà tập thể Hào Nam, Đống Đa, Hà Nội. </a></li>
             <li style="height:20px"><a href="/Ha-Noi/Cho-thue-nha-dien-tich-100m2-gia-3-trieu-c272-raovat-18815526.html" onmouseout="hidetip();" onmouseover="showtip('Cho thuê nhà riêng cấp 4 &nbsp;giá 3 triệu số 2C ngõ 281 phố vĩnh hưng quận hoàng mai hà nội,nhà có diện tích gần 100 m2 gồm 1 phòng ngủ,1 phòng khách,1 bếp,1 nhà vệ sinh tắm có bình nóng lạnh,có sân rộng để xe thoải mái,có cap tivi,có...');">Cho thuê nhà diện tích 100m2 giá 3 triệu </a></li>
             <li style="height:20px"><a href="/Ha-Noi/Cho-thue-nha-Ho-Gia-Dinh-c272-raovat-18649786.html" onmouseout="hidetip();" onmouseover="showtip('Cho thuê nhà (Hộ Gia Đình) riêng biệt, diện tích 30m2, gác xép 15m2, sử dụng nước máy,ĐC: Đường Kim Giang, Vành đai 3, Đối diện khu đô thị mới Linh Đàm, gần ubnn xã Thanh Liệt, Chợ Quang rẽ vào 50m, đường rộng 3m,khu dân trí cao,giá:2,2tr &nbsp;LH 0903420430.&nbsp;');">Cho thuê nhà  Hộ Gia Đình </a></li>
             <li style="height:20px"><a href="/Ha-Noi/Cho-thue-nha-c272-raovat-18776533.html" onmouseout="hidetip();" onmouseover="showtip('tôi có một phòng cho thuê(chỉ cho con gái thuê)diện tích 18m tầng 3.có nhà tẳm riêng.có chỗ đun nấu riêng,và có cả sân phơi thoáng mát.Địa chỉ:tổ dân phố số 7 khu giãn dân mỗ lao.hà đông- hà nội.(đối diện bến xa hà đông cũ)các bến xa pus 100m.gần...');">Cho thuê nhà </a></li>
             <li style="height:20px"><a href="/Ha-Noi/Cho-thue-lam-van-phong-hoac-nguoi-nuoc-c272-raovat-18567606.html" onmouseout="hidetip();" onmouseover="showtip('Cho thuê làm văn phòng hoặc người nước ngoài thuê CH 93 Lò Đúc Diện tích 110m2, 2 phòng ngủ, sàn gỗ, đã có đầy đủ đồ. Khách thuê chỉ việc đến ở ngay Gía thuê: thỏa thuận Qúy vị nào có nhu cầu thuê liên hệ chính chủ 0989...');" style="margin-bottom:0">Cho thuê làm văn phòng hoặc người nước ngoài thuê CH 93 Lò Đúc </a></li>
            </ul>
            <div align="right" style="color:#222;font-size:11px">
             <a href="http://blog.rongbay.com/2010/04/19/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-d%E1%BB%8Bch-v%E1%BB%A5-mua-v%E1%BB%8B-tri-vip-tren-trang-chi-ti%E1%BA%BFt/" title="Tìm hiểu thêm" style="display:inline;background:none;margin:0;padding:0;color:#222; font-size:11px" target="_blank">Soạn <span style="color:#F10000;font-size:12px"><strong>RBV 18262969</strong></span> gửi <span style="color:#F10000;font-size:12px"><strong>8701</strong></span> để hiển thị tại đây (Phí : 15.000 VNĐ/sms) &nbsp;<img src="style/images/usercp/question_blue.png"></a>
            </div>
           </div>
           <div id="NewsDetail" style="width:737px">
            <table border="0" cellpadding="0" style="border-collapse: collapse" width="100%">
             <tbody>
              <tr>
               <td valign="top"><div id="NewsLayout">
                 <div id="NewsInfo" style="*margin-top: -20px">
                  <table cellpadding="0" style="border-collapse: collapse" width="100%">
                   <tbody>
                    <tr>
                     <td valign="top" align="left">
                      
                      <?php if (isset($_smarty_tpl->tpl_vars['tindang']->value)){?>
                      <div id="item_content">
                       <h1 style="padding: 5px 5px 0px 0px"><?php echo $_smarty_tpl->tpl_vars['tindang']->value['Title'];?>
</h1>
                       <div class="admobile"><div align="center" title="Số điện thoại liên hệ của tin rao" class="center"><?php echo $_smarty_tpl->tpl_vars['tindang']->value['PhoneNumber'];?>
</div>
                        <div class="right"></div></div>
                       <div class="buy_item">
                        <div id="buy_item_up_el" class="buy_item_up" onclick="shop.cart.frmChoicePackage(18262969, 'Thuê và cho thuê nhà', 'Cho thuê nhà tầng 1 và nhà cấp 4 chính chủ')">       &nbsp;</div>
                        <div id="buy_item_vip_el" class="buy_item_vip" onclick="objPayment.form_buy_item_vip(18262969);"></div>
                        <div style="clear:both;overflow:hidden"></div></div><div style="clear:both;overflow:hidden"></div>
                       <div id="NewsInfo" style="margin-top:-20px">
                        <div class="NewsAuthor"><div style="float:left;width:410px;padding-left:5px">
                          <div class="detail_time">Đăng lúc: <b><?php echo smarty_modifier_date_format($_smarty_tpl->tpl_vars['tindang']->value['DateTime'],"%H %I");?>
</b>, ngày <b><?php echo smarty_modifier_date_format($_smarty_tpl->tpl_vars['tindang']->value['DateTime'],"%d/%m/%y");?>
</b> - <a href="/Ha-Noi/Thue-va-cho-thue-nha-c272.html" rel="nofollow"><b>Hà Nội</b></a></div>
                          <div class="detail_eye">Đã xem: <b><?php echo $_smarty_tpl->tpl_vars['tindang']->value['ViewCount'];?>
</b> . Mã Tin: <b><?php echo $_smarty_tpl->tpl_vars['tindang']->value['NewsID'];?>
</b> </div></div>
                         <div style="float:right;padding:0 20px 0 5px">
                          <div class="detail_personal"><a href="?action=memberinfo&memberid=<?php echo $_smarty_tpl->tpl_vars['tindang']->value['UserID'];?>
" rel="nofollow" class="a_name"><?php echo $_smarty_tpl->tpl_vars['userinfo']->value['Name'];?>
</a><span style="margin-left:5px">|</span><span class="detail_pm" onclick="formSendPMDetail(<?php echo $_smarty_tpl->tpl_vars['tindang']->value['UserID'];?>
,'<?php echo $_smarty_tpl->tpl_vars['userinfo']->value['Name'];?>
');return false" title="Gửi tin nhắn cá nhân tới thành viên Trịnh Viết Trung">Gửi tin nhắn</span></div>
                          <div class="detail_email">
                                      
                           <!--                                                                                                       <script type="text/javascript" language="javascript">
                                      {document.write(String.fromCharCode(60,97,32,104,114,101,102,61,34,109,97,105,108,116,111,58,110,111,110,97,49,49,48,49,49,52,64,121,97,104,111,111,46,99,111,109,46,118,110,34,32,99,108,97,115,115,61,34,97,95,101,109,97,105,108,34,32,114,101,108,61,34,110,111,102,111,108,108,111,119,34,62,110,111,110,97,49,49,48,49,49,52,64,121,97,104,111,111,46,99,111,109,46,118,110,60,47,97,62))}
                              </script>
                           -->

                           <a href="mailto:<?php echo $_smarty_tpl->tpl_vars['userinfo']->value['Email'];?>
" class="a_email" rel="nofollow"><?php echo $_smarty_tpl->tpl_vars['userinfo']->value['Email'];?>
</a>
                          </div>
                         </div>
                         <div style="clear:both;overflow:hidden"></div></div></div><div align="left" style="border:1px solid #E2C822;height:28px;line-height:30px;background:#FFF9D7;padding-left:12px;"><img style="margin:7px 5px 0 0;float:left" src="style/images/alo.png"><a style="color:#FF6600; font-weight:bold" href="http://blog.rongbay.com/2012/08/23/tin-dang-cua-moi-gioi-trung-gian-trong-muc-mua-ban-nha-dat-va-thue-cho-thue-nha/" target="_blank" title="Xem chi tiết">Tin đăng của Môi giới, Tr.gian yêu cầu vào đúng mục, sai sẽ bị xóa.</a></div><span class="TitleLabel" style="float:left;text-align:left;padding:10px 0px 10px 5px" id="lbl_content_edit">Nội dung </span><span onmouseout="this.className='report_cheat'" onmouseover="this.className='report_cheat_hover'" onclick="reportCheat()" class="report_cheat" title="Gửi than phiền của tin rao này tới BQT Rồng bay">Than phiền</span><div class="NewsContent" id="NewsContent_edit" style="display:none"></div>
                       <div class="NewsContent" id="NewsContent" style="width:735px;overflow:hidden;">
                       <?php echo $_smarty_tpl->tpl_vars['tindang']->value['Content'];?>

                       </div></div>
                       
                       <?php }else{ ?>
                        Tin nay khong ton tai trong he thong
                      <?php }?>
                      
                      </td></tr></tbody></table>
                  <div id="detail_back"><a href="/Ha-Noi/Thue-va-cho-thue-nha-c272.html" title="Quay lại chuyên mục 'Thuê và cho thuê nhà'!" rel="nofollow"><span style="font-weight:normal">Quay lại chuyên mục </span>"<b class="c_name">Thuê và cho thuê nhà</b>"</a><script>
                  
                  function history_back(){
                    if(window.history.length >1){
                     window.history.back();
                    }
                    else{
                     window.location = "";
                    }
                   }
                    
                    
                   </script></div><div id="box-path" class="breadcrumb"><div style="float:left;color:#716A5C;">Tin đăng thuộc: &nbsp;</div><div itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" style="float:left"><a href="/Ha-Noi" itemprop="url"><span itemprop="title">Hà Nội</span></a>&nbsp;›&nbsp;</div><div itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" style="float:left"><a href="/Ha-Noi/Thue-va-cho-thue-nha-c272-d70.html" itemprop="url"><span itemprop="title">Q.Đống Đa</span></a>&nbsp;›&nbsp;</div><div itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" style="float:left"><a href="/Ha-Noi/Thue-va-cho-thue-nha-c272.html" itemprop="url"><span itemprop="title">Thuê và cho thuê nhà</span></a>&nbsp;›&nbsp;</div><div itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" style="float:left">
                    <a href="/Ha-Noi/Nha-o-Nha-tro-Thue-va-cho-thue-nha-c272-t634.html" itemprop="url">
                     <span itemprop="title">Nhà ở/ Nhà trọ</span></a></div></div><div style="clear:left"></div><div style="padding:10px"><div class="ad_tags" id="ad_tags_list"><span class="ad_tags_title">Tham khảo thêm:</span><span class="ad_tags_list" id="ad_tags_contents"><a href="/raovat/lang-ha/"><b>Láng Hạ</b></a></span></div><a name="location_up"></a><div class="se_referer_box"></div></div></div><table border="0" cellpadding="0" cellspacing="0" width="100%" style="_width:99%"><tbody><tr><td valign="top"></td></tr></tbody></table></div></td></tr></tbody></table><script language="javascript">
                     
                     function close_boxalert(){
                       jQuery("#box_alert").hide();
                       //jQuery("#box_alert").css('display', 'none');
                       jQuery.cookie('close_scs',1,{expires: 0.5});
                      }
                       
            </script><div align="center"></div><div id="search_area"></div><!-- End Content -->
 
            <script type="text/javascript">
            
             $(document).ready(function(){
              $('.elink').each(function(){
               var link = $(this).attr('href');
               if(link != undefined){
                link = link.slice(link.indexOf("url=")+4,link.length);
                $(this).attr('href',link);
               }
              });
             });
            </script>
            
            <div id="OtherNews" style="width:740px">
             <div title="Đóng/Mở khung này" class="HeaderSameCategory" id="OtherNewsHead" onclick="ShowHideDiv('OtherNewsList');OnOfSameCategory('OtherNewsHead')"><h3>Các tin cùng chuyên mục <a href="/" style="color:#fff;font-weight:normal"><b>rao vặt</b></a></h3></div>
             <div id="OtherNewsList" class="OtherNewsList">
              <a href="/Ha-Noi/Chinh-chu-cho-thue-nha-khep-kin-2-phong-35-c272-raovat-18342898.html" class="Odd" onmouseout="hidetip();" onmouseover="showtip('Chính chủ cho thuê nhà cấp 4 khép kín đường Trường Chinh,Hà Nội,2 phòng,tổng S=35m2,nóng lạnh,điều hoà.Ngay sau đại học y HN.LH:A.Hải,số 52 tổ 42 phường Trung Tự.Đi vào ngõ 120 đường Trường Chinh 100 mét,qua cầu sắt rẽ phải,nhà cuối cùng),cũng có thể đi qua cổng đại học y.Rất...');">Chính chủ cho thuê nhà khép kín,2 phòng 35m2 đường Trường Chinh,Hà Nội.</a>


             </div>
            </div>
            <div align="center" style=" border:0px solid; border-color: transparent;">
             <script type="text/javascript" src="http://admicro1.vcmedia.vn/ads_codes/ads_box_20.ads"></script><script type="text/javascript" src="http://admicro1.vcmedia.vn/core/admicro_core.js?id=1"></script><script language="javascript" src="http://admicro1.vcmedia.vn/cpc/ssvzone_default.js"></script><script language="javascript" src="http://admicro1.vcmedia.vn/cpc/ssvzone_tvc.js"></script><script type="text/javascript" src="http://admicro1.vcmedia.vn/ads_codes/ads_code_20.ads"></script><div id="ads_zone20"><div style="clear:both"></div><div id="ads_zone20_slot1" style="padding-top:5px"><div id="ads_zone20_banner87562" class="banner0"><a href="http://logging.admicro.vn/_adc.html?adm_domain=file%3A///C%3A/Users/Administrator/Desktop/Tonghop/Php%2520Tool/1%2520Template/Data/index.html&amp;adm_campaign=1012980&amp;adm_aditem=87562&amp;adm_zoneid=20&amp;adm_channelid=-1&amp;adm_rehttp=http%3A%2F%2Frongbay.com%2Flien_he_quang_cao.html&amp;adm_random=0.37939614010974765" target="_blank"><img border="0" id="ads_zone20_banner87562" src="http://admicro2.vcmedia.vn/images/730x90_ok.jpg" width="730" height="90"></a></div></div></div>
            </div>		


            <div class="cities">
             <ul>
              <li><span><a href="/Ha-Noi">Rao vặt tại Hà Nội</a></span></li>
              <li><span><a href="/TP-HCM">Rao vặt tại TP.Hồ Chí Minh</a></span></li>
             </ul>
            </div>	


           </div>                             
          </div></td>
          <td id="ContentRight" valign="top">

           <div class="marginBottom12 adv_adm hide" align="center">						
            <script type="text/javascript" src="http://admicro1.vcmedia.vn/ads_codes/ads_box_25.ads"></script><script type="text/javascript" src="http://admicro1.vcmedia.vn/ads_codes/ads_code_25.ads"></script><div id="ads_zone25"><div id="ads_zone25_slot1" style="width:253px;padding-bottom:10px"><div id="ads_zone25_banner87561" class="banner0"><a href="http://logging.admicro.vn/_adc.html?adm_domain=file%3A///C%3A/Users/Administrator/Desktop/Tonghop/Php%2520Tool/1%2520Template/Data/index.html&amp;adm_campaign=1012980&amp;adm_aditem=87561&amp;adm_zoneid=25&amp;adm_channelid=-1&amp;adm_rehttp=http%3A%2F%2Frongbay.com%2Flien_he_quang_cao.html&amp;adm_random=0.027273186249658465" target="_blank"><img border="0" id="ads_zone25_banner87561" src="http://admicro2.vcmedia.vn/images/253x300_thay.jpg" width="253" height="300"></a></div></div><div align="center" style="width:100%;"><div style="float: left;padding-bottom: 10px;z-index:9999" id="ads_zone25_slot2"><div id="ads_zone25_banner88085" class="banner0"><a href="http://logging.admicro.vn/_adc.html?adm_domain=file%3A///C%3A/Users/Administrator/Desktop/Tonghop/Php%2520Tool/1%2520Template/Data/index.html&amp;adm_campaign=1012980&amp;adm_aditem=88085&amp;adm_zoneid=25&amp;adm_channelid=-1&amp;adm_rehttp=http%3A%2F%2Frongbay.com%2Flien_he_quang_cao.html&amp;adm_random=0.6669686904642731" target="_blank"><img border="0" id="ads_zone25_banner88085" src="http://admicro2.vcmedia.vn/images/253x125ok.jpg" width="253" height="125"></a></div></div><div style="clear: both;"></div></div><div style="width: 100%;"><div align="center"><div style="clear: both;"></div></div><div align="center"><div style="clear: both;"></div></div><div align="center" style="padding-bottom: 10px;" id="ads_zone25_slot14"><div id="ads_zone25_banner128553" class="banner0"><iframe id="boxenbac253" scrolling="no" frameborder="0" width="253" height="532" src="http://enbac10.vcmedia.vn/widgetEb/enbac_rongbay_252x532.html?id=mt"></iframe></div></div></div></div>						 
            <script type="text/javascript" src="http://admicro1.vcmedia.vn/ads_codes/ads_box_361.ads"></script><script type="text/javascript" src="http://admicro1.vcmedia.vn/ads_codes/ads_code_361.ads"></script><div id="ads_zone361"><div id="advZoneStickyTop"><span></span></div><div id="advZoneSticky" style="width: 253px; margin: auto; display: block; top: 1087px; left: 922px; bottom: auto; "></div><script type="text/javascript" src="http://admicro1.vcmedia.vn/cpc/core_static_zone.js"></script><script type="text/javascript" src="http://admicro1.vcmedia.vn/cpc/sticky/static_z361_253x532.js"></script> </div>
           </div>	                                                               
           <div style="height:5px"><span></span></div>
           <div style="height:6px"><span></span></div>
           <div style="height:15px"><span></span></div>	
          </td>
          </tr>
          </tbody></table>



         
            
           
          












          
          
          
         

           
          
          
          
          
          <?php }} ?>