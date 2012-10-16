<?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 09:00:43
         compiled from "smarty\templates\inver\index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:737050705df4789c79-34534434%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2a3d5adda7c9b806e174aec851d8238d2c9db907' => 
    array (
      0 => 'smarty\\templates\\inver\\index.tpl',
      1 => 1350302730,
      2 => 'file',
    ),
    'a11298e285aa8c6789781d58dea0f22d621d3c2d' => 
    array (
      0 => 'smarty\\templates\\inver\\layout.tpl',
      1 => 1350302713,
      2 => 'file',
    ),
    'd075bb17e5efa5cae638d81646ad2bb0868d5b43' => 
    array (
      0 => 'smarty\\templates\\inver\\headermeta.tpl',
      1 => 1349448010,
      2 => 'file',
    ),
    'eb177b432096d43dc790caf554536da710c7ae1b' => 
    array (
      0 => 'smarty\\templates\\inver\\headercss.tpl',
      1 => 1350377610,
      2 => 'file',
    ),
    '0d50c0511ab6100cdcaa1be01ff27cd3e84e4ac2' => 
    array (
      0 => 'smarty\\templates\\inver\\header.tpl',
      1 => 1350378041,
      2 => 'file',
    ),
    '306b215f9265fdef9d0c21696047b33f707d108a' => 
    array (
      0 => 'smarty\\templates\\inver\\wrap_header.tpl',
      1 => 1350345965,
      2 => 'file',
    ),
    '22abb85be080c1f7d1ce551c0ea27efbf1a26548' => 
    array (
      0 => 'smarty\\templates\\inver\\lbi_tindang1.tpl',
      1 => 1350374455,
      2 => 'file',
    ),
    '59744d32513144c3b4e96d2965223f4cc0435d15' => 
    array (
      0 => 'smarty\\templates\\inver\\lbi_tindang2.tpl',
      1 => 1350374129,
      2 => 'file',
    ),
    '9bafd89f5e07c9130906239f706487767f675110' => 
    array (
      0 => 'smarty\\templates\\inver\\wrap_footer.tpl',
      1 => 1349448012,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '737050705df4789c79-34534434',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_50705df53fe443_04667707',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_50705df53fe443_04667707')) {function content_50705df53fe443_04667707($_smarty_tpl) {?>
<?php /*  Call merged included template "header.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '737050705df4789c79-34534434');
content_507d223b3e0bc6_47698708($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "header.tpl" */?>




<body class="sidebars">
<!--<div style="background-color: #F66; padding: 5px; text-align: center;"><strong>Development version of Framework 6.x-2.3</strong></div>-->
<!-- Layout -->

<div id="ground">	
<div id="inner-ground">	
<div id="bottom-ground">    
    <div id="wrapper">
     
     <?php /*  Call merged included template "wrap_header.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("wrap_header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '737050705df4789c79-34534434');
content_507d223c9d2604_02845516($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "wrap_header.tpl" */?>
     
  
      <div id="container">


        <div id="center">
		<div class="shell">
		
             <?php $_smarty_tpl->_capture_stack[0][] = array('some_content', 'dangtindang', null); ob_start(); ?>

<?php list($_capture_buffer, $_capture_assign, $_capture_append) = array_pop($_smarty_tpl->_capture_stack[0]);
if (!empty($_capture_buffer)) {
 if (isset($_capture_assign)) $_smarty_tpl->assign($_capture_assign, ob_get_contents());
 if (isset( $_capture_append)) $_smarty_tpl->append( $_capture_append, ob_get_contents());
 Smarty::$_smarty_vars['capture'][$_capture_buffer]=ob_get_clean();
} else $_smarty_tpl->capture_error();?>


<div class="top-content">
 <div id="block-block-7" class="block block-block">


  <div class="content clearfix">

   <div class='new-daily clearfix'>
    <div class='title'> Tin mới hàng ngày</div>
    <div class='date'> - &nbsp;&nbsp;&nbsp;&nbsp;Thứ 5, Ngày 20/09/2012 </div>
    <div class='opportunity' style='color: #A70B0C;'>Cơ hội hấp dẫn </div>
   </div>
  </div>

 </div>
</div>	
<!-- end topcontent -->	
<div class="clearfix content-and-right">	
 <div class="main-content" style="float: left;">
  <div class="faceted-search-page faceted-search-stage-results faceted-search-env-property_browse"><div class="faceted-search-numbering">Kết quả</div><div class="box">

    <h2>Tin mới hôm nay</h2>

    <div class="content">
     <?php if (isset($_smarty_tpl->tpl_vars['danhsachbinhthuong']->value)){?>
      <?php  $_smarty_tpl->tpl_vars['foo'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['foo']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachbinhthuong']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['foo']->key => $_smarty_tpl->tpl_vars['foo']->value){
$_smarty_tpl->tpl_vars['foo']->_loop = true;
?>
       <?php /*  Call merged included template "lbi_tindang1.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("lbi_tindang1.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '737050705df4789c79-34534434');
content_507d223d828a48_66492756($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "lbi_tindang1.tpl" */?>
      <?php } ?>
     <?php }?>
     <div class="item-list">
      
      <ul class="pager">
       <?php if ($_smarty_tpl->tpl_vars['page']->value==1){?>
        <li class="pager-current first">1</li>
        <?php }else{ ?>
         <li class="pager-item"><a href="?page=1" title="Xem trang 1" class="active">1</a></li>
       <?php }?>
       <?php $_smarty_tpl->tpl_vars['var'] = new Smarty_Variable;$_smarty_tpl->tpl_vars['var']->step = 1;$_smarty_tpl->tpl_vars['var']->total = (int)ceil(($_smarty_tpl->tpl_vars['var']->step > 0 ? $_smarty_tpl->tpl_vars['pages']->value+1 - (2) : 2-($_smarty_tpl->tpl_vars['pages']->value)+1)/abs($_smarty_tpl->tpl_vars['var']->step));
if ($_smarty_tpl->tpl_vars['var']->total > 0){
for ($_smarty_tpl->tpl_vars['var']->value = 2, $_smarty_tpl->tpl_vars['var']->iteration = 1;$_smarty_tpl->tpl_vars['var']->iteration <= $_smarty_tpl->tpl_vars['var']->total;$_smarty_tpl->tpl_vars['var']->value += $_smarty_tpl->tpl_vars['var']->step, $_smarty_tpl->tpl_vars['var']->iteration++){
$_smarty_tpl->tpl_vars['var']->first = $_smarty_tpl->tpl_vars['var']->iteration == 1;$_smarty_tpl->tpl_vars['var']->last = $_smarty_tpl->tpl_vars['var']->iteration == $_smarty_tpl->tpl_vars['var']->total;?>
       <?php if ($_smarty_tpl->tpl_vars['var']->value==$_smarty_tpl->tpl_vars['page']->value){?>
         <li class="pager-current"><?php echo $_smarty_tpl->tpl_vars['var']->value;?>
</li>
       
        <?php }else{ ?>
          <li class="pager-item"><a href="?page=<?php echo $_smarty_tpl->tpl_vars['var']->value;?>
" title="Xem trang <?php echo $_smarty_tpl->tpl_vars['var']->value;?>
" class="active"><?php echo $_smarty_tpl->tpl_vars['var']->value;?>
</a></li>
         
         <?php }?>
       
       
       <?php }} ?>
       
       <li class="pager-ellipsis">…</li>
       <li class="pager-next"><a href="?page=<?php echo $_smarty_tpl->tpl_vars['page']->value+1;?>
" title="Trang sau" class="active">trang tiếp ›</a></li>
       <li class="pager-last last"><a href="/ha-noi.htm?page=15" title="Trang cuối" class="active">trang cuối »</a></li>
      </ul></div></div>
   </div>
  </div>
  <div id="block-block-5" class="block block-block">


   <div class="content clearfix">
    <div id="vinno-block-vinno_wishlist2" >
     <div class="box-outer">
      <div class="box-inner">
       <div class="box-inner-inner vinno-title7">
        <div class="header-outer">
         <div class="header-inner">
          <h3>Nhà đất cần bán (cho thuê) gấp</h3>		
         </div>	
        </div>	
        <div class="clearfix content"><div class="shell"><div class="inner-shell"><div class='wishlist'>
 <?php if (isset($_smarty_tpl->tpl_vars['danhsachvip1']->value)&&($_smarty_tpl->tpl_vars['danhsachvip1']->value!=false)){?>
            <?php  $_smarty_tpl->tpl_vars['foo'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['foo']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachvip1']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['foo']->key => $_smarty_tpl->tpl_vars['foo']->value){
$_smarty_tpl->tpl_vars['foo']->_loop = true;
?>
 <?php /*  Call merged included template "lbi_tindang1.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("lbi_tindang1.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '737050705df4789c79-34534434');
content_507d223d828a48_66492756($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "lbi_tindang1.tpl" */?>

            <?php } ?>
 <?php }?>

            <div class="item-list">
             <ul class="pager"><li class="pager-current first">1</li>
              
              <li class="pager-ellipsis">…</li>
              <li class="pager-next"><a href="/ha-noi.htm?page=1" title="Trang sau" class="active">trang tiếp ›</a></li>
              <li class="pager-last last"><a href="/ha-noi.htm?page=627" title="Trang cuối" class="active">trang cuối »</a></li>
             </ul></div></div></div></div></div>
       </div>
      </div>
     </div>
    </div>
   </div>

  </div>
 </div>
 <div id="sidebar-right" class="sidebar sidebar-right" style="float: right; margin-right:5px;">
  <div id="block-block-4" class="block block-block">


   <div class="content clearfix">

    <div class="clearfix">
     <div style="float: left;width: 49%;">
      <?php if (isset($_smarty_tpl->tpl_vars['danhsachvip2']->value)){?>
       <?php  $_smarty_tpl->tpl_vars['foo'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['foo']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachvip2']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['foo']->key => $_smarty_tpl->tpl_vars['foo']->value){
$_smarty_tpl->tpl_vars['foo']->_loop = true;
?>
        <?php /*  Call merged included template "lbi_tindang2.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("lbi_tindang2.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '737050705df4789c79-34534434');
content_507d223df02ae4_96494970($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "lbi_tindang2.tpl" */?>
       <?php } ?>
      <?php }?>

     </div>
     <div style="float: right;width: 49%;">
      <?php if (isset($_smarty_tpl->tpl_vars['danhsachvip3']->value)){?>
       <?php  $_smarty_tpl->tpl_vars['foo'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['foo']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachvip3']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['foo']->key => $_smarty_tpl->tpl_vars['foo']->value){
$_smarty_tpl->tpl_vars['foo']->_loop = true;
?>
        <?php /*  Call merged included template "lbi_tindang2.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("lbi_tindang2.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '737050705df4789c79-34534434');
content_507d223df02ae4_96494970($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "lbi_tindang2.tpl" */?>
       <?php } ?>
      <?php }?>
     </div>
    </div>

   </div>

  </div>
 </div> <!-- /#sidebar-right -->
</div>


		 </div> 
        </div> 
		<!-- /#center -->
  
     
		
       <div id="sidebar-left" class="sidebar">
	   <?php echo $_smarty_tpl->getSubTemplate ("wrap_sidebar_left.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

	   </div> 
		<!-- /#sidebar-left -->
      

      </div> <!-- /#container -->
      <span class="clear"></span>
    </div> <!-- /#wrapper -->
</div> <!-- /#bottom-ground -->
</div> <!-- /#inner-ground -->
</div> <!-- /#ground -->	
<!-- /layout -->

  <script type="text/javascript" src="<?php echo dirname($_smarty_tpl->source->filepath);?>
/sites/default/files/js/js_a12b9da5eb47faf5cb1d9634d824497b.jsmin.js"></script>
<script type="text/javascript">

<!--//--><![CDATA[//><!--
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
//--><!]]>
</script>

<script type="text/javascript">
<!--//--><![CDATA[//><!--
try{var pageTracker = _gat._getTracker("UA-7905545-6");pageTracker._trackPageview();} catch(err) {}
//--><!]]>
</script>
    
<div>  
<!--- Ads by Ambient Digital 
<script type="text/javascript" language="javascript" src="http://delivery.adnetwork.vn/247/adclick/ads_em9uZV9NVEk1TXpBd01UZzNNMTh4TWpnd09URTNNREkwWHpJME1GOHlNREE9Lmh0bWxVNzI4STdWRTEwMTAxMDc4Mk0zOFc=/"></script>
 Ads by Ambient Digital --->

</div>
  </body>

</html>

<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 09:00:43
         compiled from "smarty\templates\inver\header.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d223b3e0bc6_47698708')) {function content_507d223b3e0bc6_47698708($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="vi" lang="vi">
<head>
    
<title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>

<link rel="shortcut icon" href="/themes/favicon.png" type="image/x-icon" />

  <script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/jquery-1.6.4.min.js"></script>
  
<script type="text/javascript" src="<?php echo dirname($_smarty_tpl->source->filepath);?>
/sites/default/files/js/js_589871593f149c3b07e4e337276416ea.jsmin.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, { "basePath": "/", "dhtmlMenu": { "slide": "slide", "siblings": "siblings", "relativity": "relativity", "children": "children", "doubleclick": "doubleclick", "clone": 0 }, "googleanalytics": { "trackOutgoing": 1, "trackMailto": 1, "trackDownload": 1, "trackDownloadExtensions": "7z|aac|avi|csv|doc|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xml|zip" }, "cron": { "basePath": "/poormanscron", "runNext": 1348145025 }, "tabs": { "slide": false, "fade": false, "speed": "fast", "auto_height": false, "next_text": "next", "previous_text": "previous" } });
//--><!]]>
</script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
$().ready(function() {
    $("#edit-new-keywords").autocomplete([  ], { "minChars": 0 });
  })
//--><!]]>
</script>
    <!--[if lte IE 7]><link type="text/css" rel="stylesheet" media="all" href="sites/all/themes/framework/fix-ie.css" /><![endif]--><!--If Less Than or Equal (lte) to IE 7-->
  <script type="text/javascript">
  
   $(document).ready(function(){
function changeprovince(provinceid)
 {
  $.post("session.php",{data:provinceid});
   
 }
  $.getJSON('ajax_request.php' ,{action:'getquan',provinceid:$('#current_province').val()},function(data){
               $.each(data, function(index) {
               // alert(data[index].districtid);
               $("#current_district").append("<option value=\""+data[index].districtid+"\">"+data[index].districtname+"</option>");
          });

});
  
$('#current_province').change(function(){

var provinceid = $('#current_province').val();
changeprovince(provinceid);
$.getJSON('ajax_request.php' ,{action:'getquan',provinceid:$(this).val()},function(data){
  $("#current_district").html("");
               $.each(data, function(index) {
               // alert(data[index].districtid);
               $("#current_district").append("<option value=\""+data[index].districtid+"\">"+data[index].districtname+"</option>");
          });

});



});

});
  
  
    </script>
 
<script type="text/javascript">
       
 <?php if (isset($_smarty_tpl->tpl_vars['quanid']->value)){?>
      var  quanid=<?php echo $_smarty_tpl->tpl_vars['quanid']->value;?>
;
         <?php }?>
           <?php if (isset($_smarty_tpl->tpl_vars['loainhaid']->value)){?>
        var  quanid=<?php echo $_smarty_tpl->tpl_vars['loainhaid']->value;?>
;
         <?php }?>
              <?php if (isset($_smarty_tpl->tpl_vars['nhucau']->value)){?>
        var  quanid=<?php echo $_smarty_tpl->tpl_vars['nhucau']->value;?>
;
         <?php }?>
      <?php if (isset($_smarty_tpl->tpl_vars['khunggia']->value)){?>
        var  quanid=<?php echo $_smarty_tpl->tpl_vars['khunggia']->value;?>
;
         <?php }?>
        </script>



 
 <?php /*  Call merged included template "headermeta.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headermeta.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '737050705df4789c79-34534434');
content_507d223b8c8526_12395794($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headermeta.tpl" */?>
 
 
 <?php /*  Call merged included template "headercss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headercss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '737050705df4789c79-34534434');
content_507d223b9a2510_25986969($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headercss.tpl" */?>
 
 
</head><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 09:00:43
         compiled from "smarty\templates\inver\headermeta.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d223b8c8526_12395794')) {function content_507d223b8c8526_12395794($_smarty_tpl) {?>




<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ | chinh chu, nha dat video</title>  
	<meta name="google-site-verification" content="4iPFEiUkfa92y9q-jw7vkMGMTTBGfW7LCVEq6vOa7bw" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta content="Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ" name="keywords" />
<meta content="NhadatVideo.vn 100% tin đăng có Ảnh thật, Video thực tế, LH chủ nhà. Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ " name="description" />
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 09:00:43
         compiled from "smarty\templates\inver\headercss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d223b9a2510_25986969')) {function content_507d223b9a2510_25986969($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
?>

<link rel="shortcut icon" href="<?php echo basename($_smarty_tpl->source->filepath);?>
/sites/default/files/favicon.png" type="image/x-icon" />
    <link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/system_services/views/css/views.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/modules/node/node.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/modules/system/defaults.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/modules/system/system.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/modules/system/system-menus.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/modules/user/user.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/application_services/dhtml_menu/dhtml_menu.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/application_services/filefield/filefield.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/application_services/nice_menus/nice_menus.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/application_services/nice_menus/nice_menus_default.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/system_services/cck/theme/content-module.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/system_services/date/date.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/system_services/date/date_popup/themes/datepicker.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/system_services/date/date_popup/themes/timeentry.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/system_services/tabs/drupal-tabs.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/vinno_services/css/layout_types.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/vinno_services/css/module_layout.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/vinno_services/css/geo.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/system_services/cck/modules/fieldgroup/fieldgroup.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/application_services/faceted_search/faceted_search_ui.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/application_services/autocomplete_element/css/jquery.autocomplete.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/modules/application_services/autocomplete_element/css/autocomplete_element.css?5" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/sites/all/themes/framework/style.css?5" />






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



<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 09:00:44
         compiled from "smarty\templates\inver\wrap_header.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d223c9d2604_02845516')) {function content_507d223c9d2604_02845516($_smarty_tpl) {?>   
<div id="header">
        <div id="block-buildweb_services-vinno_header" class="block block-buildweb_services">

  
  <div class="content clearfix">
    <div id="vinno-block-vinno_header" >
	<div class="box-outer">
		<div class="box-inner">
			<div class="box-inner-inner ">
								<div class="clearfix content"><div class="shell"><div class="inner-shell">	
		<div class='header clearfix'>
			<a class='logo' title='nhadatvideo, ban nha, cho thue nha, bat dong san, nha dat, chinh chu, video, ha noi, sai gon, ho chi minh' href='http://nhadatvideo.vn'>
				<b>nhadatvideo, ban nha, cho thue nha, bat dong san, nha dat, chinh chu, video, ha noi, sai gon, ho chi minh</b>
			</a>
			<div class='flash'>
				<div id="block--" class="block block-">

  
  <div class="content clearfix">
    <div class="clearfix" style="margin-top: 4px; margin-bottom:2px;">
	<div style="float:left;">						
		<div style="display: block;float:left;height: 88px;margin-left: 2px;width: 733px;background: #FFFFFF;border: 1px solid #F8DE42;">
			  <embed wmode="opaque" height="88" width="733"  src="<?php echo dirname($_smarty_tpl->source->filepath);?>
/images/vinno.swf" play="true" loop="true" menu="true"></embed>
		
</div>
		
	
		
	</div>
</div>  </div>

</div>

			</div>
		</div></div></div></div>
			</div>
		</div>
	</div>
</div>
  </div>

</div>
<div id="block-block-1" class="block block-block">

  
  <div class="content clearfix">
    <h1><b><strong><a href="/ha-noi.htm" title="nha dat ban nha ha noi video nha ban chinh chu" class="active">Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ nha dat ban nha ha noi video nha ban chinh chu</a></strong></b></h1>  </div>

</div>
<div id="block-block-27" class="block block-block">

  
  <div class="content clearfix">
    
<div id="container-geo">
		  <div id="topnav" class="topnav"> <a href="login" class="geo" title="Chọn khu vực muốn Mua/Thuê để xem nhà đất"><span>Xem nhà đất theo tọa độ Google Map</span></a> </div>
		  <fieldset id="signin_menu" style="display: none;">
			<iframe id="mapselector" src="<?php echo dirname($_smarty_tpl->source->filepath);?>
/mapselect/mapselector.php_1413875960.jpg" width="935" height="500"></iframe>    
		  </fieldset>
		</div>
		<script type="text/javascript">
       
				$(document).ready(function() {
                                       
					$(".geo").click(function(e) {          
						e.preventDefault();
						$("fieldset#signin_menu").toggle();
						$(".geo").toggleClass("menu-open");
                                                 if($("fieldset#signin_menu").is(':hidden')==false){
                                                          $("#container-geo").css("width","auto"); 
                                                           $("#topnav").css("padding-left","350px"); 
                                                          
                                                          // if ( $.browser.msie ) {
                                                                var myframe = document.getElementById("mapselector");
                                                                myframe.src = myframe.src;
                                                                
                                                         //  }

                                                 }else{
                                                           $("#container-geo").css("width","300px"); 
                                                           $("#topnav").css("padding-left","0px"); 
                                                 }
					});
					
					$("fieldset#signin_menu").mouseup(function() {
						return false
					});
					$(document).mouseup(function(e) {
						if($(e.target).parent("a.geo").length==0) {
							$(".geo").removeClass("menu-open");
							$("fieldset#signin_menu").hide();       
                                                         $("#container-geo").css("width","300px");      
                                                         $("#topnav").css("padding-left","0px");                                           
						}
					});			
					
				});

                       function parentMapProcess(longtitude,latitude, adress){
                                return true;
                       }

                       function getParentLatlong(){
                               return "";
                       }

		</script>  </div>

</div>
<div id="block-buildweb_services-vinno_status" class="block block-buildweb_services">

  
  <div class="content clearfix">
    <div id="vinno-block-vinno_status" >
	<div class="box-outer">
		<div class="box-inner">
			<div class="box-inner-inner vinno-title2" >
								<div class="clearfix content"><div class="shell"><div class="inner-shell"><div class='status'>
						<div class='menu clearfix'>
							<a href="./" class="del-search active" title="Bỏ tất cả các tiêu chí tìm kiếm"></a>
							<div class='mid'>
								<div class='menu-content clearfix'>
									<div class='whistlist'> <a href=" user/wishlist" class="first" title="Xem danh sách quan tâm của bạn, chú ý: bạn phải chọn &quot;Đưa vào danh sách quan tâm&quot; ở mỗi tin mà bạn quan tâm.">[ Danh sách quan tâm ]</a> </div>
									<div class='menu-link'> <a href="/" title="cho thue nha, ban nha, bat dong san, nha dat, video, chinh chu" class="active">Trang chủ</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://hongbach.vn" rel="nofollow" target="_blank">Tư vấn luật</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/content/lien-he.htm">Liên hệ</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/dang-tin/quang-cao-ban-nha-ban-dat-cho-thue-nha.htm" title="dang tin,  ban nha, ban dat, cho thue nha, cho thue cua hang, sang nhuong, quang cao, rao vat">Đăng tin</a> </div>
								</div>
							</div>
						</div>
						<div class='search'>
							<div class='mid'>
								<div class='search-content'>
  <form action=""  accept-charset="UTF-8" method="get" id="vinno-property-currentsearch-form">
<div>
 <div class='current_selected_search clearfix'>
  <div class='province_district other_option clearfix'>
   <div class='provine province_district_item other_item' ><div class="form-item" id="edit-province-wrapper">
 <label for="edit-province">Tinh thanh: </label>
 <select name="province" id="current_province" class="form-select" id="edit-province" ><option value="0">Tỉnh / Thành</option>
  <?php  $_smarty_tpl->tpl_vars['tinh'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['tinh']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachtinh']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['tinh']->key => $_smarty_tpl->tpl_vars['tinh']->value){
$_smarty_tpl->tpl_vars['tinh']->_loop = true;
?>
  <option value="<?php echo $_smarty_tpl->tpl_vars['tinh']->value['ProvinceID'];?>
" <?php if (isset($_smarty_tpl->tpl_vars['provinceselect']->value)){?><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['tinh']->value['ProvinceID'];?>
<?php $_tmp1=ob_get_clean();?><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['provinceselect']->value;?>
<?php $_tmp2=ob_get_clean();?><?php if ($_tmp1==$_tmp2){?> selected="selected" <?php }?> <?php }?> ><?php echo $_smarty_tpl->tpl_vars['tinh']->value['ProvinceName'];?>
</option>
 <?php } ?>
 
 </select>
</div>
</div>
 
 <div class='provine province_district_item other_item' ><div class="form-item" id="edit-province-wrapper">
 <label for="edit-province">Tinh thanh: </label>
 <select name="quan" id="current_district" class="form-select" id="edit-province" ><option value="0">Quận / Huyện:</option>
 
 
 </select>
</div>
</div>
 <div class='provine province_district_item other_item' ><div class="form-item" id="edit-province-wrapper">
 <label for="edit-province">Loại nhà: </label>
 <select name="loainha" id="current_district" class="form-select" id="edit-province" ><option value="0">Phân loại nhà:</option>
  
 <?php  $_smarty_tpl->tpl_vars['loainha'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['loainha']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachloainha']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['loainha']->key => $_smarty_tpl->tpl_vars['loainha']->value){
$_smarty_tpl->tpl_vars['loainha']->_loop = true;
?>
  <option value="<?php echo $_smarty_tpl->tpl_vars['loainha']->value['LoainhaID'];?>
" <?php if (isset($_smarty_tpl->tpl_vars['loainhaid']->value)){?><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['loainha']->value['LoainhaID'];?>
<?php $_tmp3=ob_get_clean();?><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['loainhaid']->value;?>
<?php $_tmp4=ob_get_clean();?><?php if ($_tmp3==$_tmp4){?> selected="selected" <?php }?> <?php }?> ><?php echo $_smarty_tpl->tpl_vars['loainha']->value['TenLoaiNha'];?>
</option>
 <?php } ?>
 </select>
</div>
</div>
 <div class='provine province_district_item other_item' ><div class="form-item" id="edit-province-wrapper">
 <label for="edit-province">Khung giá </label>
 <select name="khunggia" id="current_district" class="form-select" id="edit-province" ><option value="0">Khung giá:</option>
  
 <?php  $_smarty_tpl->tpl_vars['khunggia'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['khunggia']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachkhunggia']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['khunggia']->key => $_smarty_tpl->tpl_vars['khunggia']->value){
$_smarty_tpl->tpl_vars['khunggia']->_loop = true;
?>
  <option value="<?php echo $_smarty_tpl->tpl_vars['khunggia']->value['khunggiaid'];?>
" <?php if (isset($_smarty_tpl->tpl_vars['khunggiaid']->value)){?><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['khunggia']->value['khunggiaid'];?>
<?php $_tmp5=ob_get_clean();?><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['khunggiaid']->value;?>
<?php $_tmp6=ob_get_clean();?><?php if ($_tmp5==$_tmp6){?> selected="selected" <?php }?> <?php }?> ><?php echo $_smarty_tpl->tpl_vars['khunggia']->value['KhungGiaName'];?>
</option>
 <?php } ?>
 </select>
</div>
</div>
   <div class='keywords other_item'><div class="form-item" id="edit-new-keywords-wrapper">
 <label for="edit-new-keywords">Tu khoa can tim: </label>
 <input type="text" name="search" id="edit-new-keywords" value="" class="form-text autocomplete autocomplete-processed" autocomplete="off" />
</div>
</div>
   <div class="submit_button other_item" style="margin-left: 2px; "><input type="image"  id="edit-submit"  src="smarty\templates\inver/sites/all/modules/vinno_services/images/search-image1.jpg" class="form-image">
</div>
  
  </div></div>

</div></form>
</div>
							</div>
						</div>							
				   </div></div></div></div>
			</div>
		</div>
	</div>
</div>
  </div>

</div>
<div id="block-block-17" class="block block-block">

  
  <div class="content clearfix">
    <div class="clearfix" style="margin-top: 5px;">
	<div style="float:left;height:89px;border: 1px solid #F8DE42;">		
				
		<embed wmode="opaque" height="89" width="653"  src="<?php echo dirname($_smarty_tpl->source->filepath);?>
/images/top_adv_new_09.swf" play="true" loop="true" menu="true"></embed>

		
	</div>

	<div style="float:right;width: 341px;background-color: #FFFFFF;height:89px;border: 1px solid #F8DE42;">
<a href="http://www.NLPu.vn" rel="nofollow" target="_blank"><img height="89" width="341" src="<?php echo dirname($_smarty_tpl->source->filepath);?>
/images/qc-khoahoc.jpg" /></a>

	</div>
</div>	  </div>

</div>

             
		       

                <div class="clear"></div>
      </div> <!-- /#header -->
      
          <div id="nav">
        
        <!-- if block in $nav, removes default $primary and $secondary links -->

                                                      <div id="secondary-links"></div>
          
              </div> <!-- /#nav -->
	  <!--
	  <div class="breadcrumbs clearfix">
					</div>	
	   -->	
		  <!--	
		<div class="messages error" style='width: 977px;text-align: center;font-weight: bold;'> Bạn chậm chân hơn người khác ?, hãy bấm vào <a rel='nofollow' href='http://sms.nhadatvideo.vn/user'>Xem trước tin chưa đăng</a> để tăng cơ hội tìm được nhà đất như ý </div>
		 -->	
<?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 09:00:45
         compiled from "smarty\templates\inver\lbi_tindang1.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d223d828a48_66492756')) {function content_507d223d828a48_66492756($_smarty_tpl) {?><div id="node-<?php echo $_smarty_tpl->tpl_vars['foo']->value['NewsID'];?>
" class="node">

   
  
  <div class="content">
    
<div class="search-teaser clearfix">
<div class='border-left'></div>
	<div class='group clearfix'>
	<div class="search-header clearfix" >
	    		<a class="teaser-tile" href="view.php?themes=inver&newsid=<?php echo $_smarty_tpl->tpl_vars['foo']->value['NewsID'];?>
" style="display: block;" title="Bán  Nhà trong ngõ, hẻm  Hai Bà Trưng Số 17 ngõ 17 phố Tạ Quang Bửu Hà nội  chính chủ 5 tỷ den 10 tỷ 100m2 - 150m2 4 phòng ngủ, bat dong san, chinh chu, nha dat, video, hinh anh">
		<div class="district" ><h2><?php echo $_smarty_tpl->tpl_vars['foo']->value['Title'];?>
	<span style='text-decoration: underline;'>Xem chi tiết.</span></h2></div>		
		<div class="code" >		</div>
		</a>
	</div>
		<div class="search-desc clearfix">
		<div class="main clearfix">
			<div class="main_image"><img alt="Mua bán nhà  Hai Bà Trưng, Số 17 ngõ 17 phố Tạ Quang Bửu, Chính chủ, Giá 9 Tỷ, Liên hệ chính chủ, ĐT  0989141518 / 0913567051" width="154" height="116" src="<?php if (isset($_smarty_tpl->tpl_vars['foo']->value['Image__URL'])){?><?php echo $_smarty_tpl->tpl_vars['foo']->value['Image__URL'];?>
<?php }else{ ?>http://easyvn.net/news/themes/img/no-img.jpg<?php }?>"></img>
				
			</div>
			<div class="desc" style="float: right; width: 295px;">
				<div class="clearfix">
					<div style="background-color: #F4F5F7;float:left;width:100%;">
						
						<div style='float: left;'><b style='color: #000000;font-weight: bold;padding-left: 15px;'>Giá :  </b> <b style='color:#01A617;font-weight: bold;padding-right: 15px;'><?php echo $_smarty_tpl->tpl_vars['foo']->value['GiaNha'];?>
</b></div><div style='float: right;padding-right: 15px;'><SPAN style='font-weight: bold;'>Mã số: </SPAN><SPAN style='color:#01A617;font-weight: bold;'><?php echo $_smarty_tpl->tpl_vars['foo']->value['NewsID'];?>
</SPAN></div>							
					</div>
					<div style="float: left; text-align: left;">
						<SPAN style='padding-left: 2px;'></SPAN><?php echo $_smarty_tpl->tpl_vars['foo']->value['Content'];?>
</div>
				</div>
			
				
				
			</div>
			
		</div>
		<div class="right" style='display: none;'>
			<div class="feature">
				<div class="row-item clearfix">
					<div class="label">
						Giá :
					</div>
					<div class="data">
						
					</div>
				</div>
				<div class="row-item clearfix">
					<div class="label">
						Loại:
					</div>
					<div class="data">
						Nhà trong ngõ, hẻm					</div>
				</div>
				
			</div>	
			<div class="interest clearfix">
													
					<div class="node_watcher">
					  <div class="watcher_node"><a href="/user/0/watcher/toggle/49877?destination=property%2Fbrowse%2Fresults%2Ftaxonomy%3A1.55" class="watcher_node_toggle_watching_link" title="Đưa vào danh sách quan tâm, sau đó bạn có thể xem lại kỹ lưỡng.">Đưa vào danh sách quan tâm</a></div>					</div>
					
					
			  			</div>
		</div>	
	</div>
			<div class="detail"><SPAN>		 
	</SPAN></div>
 </div>	
<div class='border-right'></div>	
</div>

  </div>
    <div class="meta">
    <span class="clear"></span>
  </div>
  </div><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 09:00:45
         compiled from "smarty\templates\inver\lbi_tindang2.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d223df02ae4_96494970')) {function content_507d223df02ae4_96494970($_smarty_tpl) {?><div class="property-ad">
			<div class="ad-item">
			   <a href="view.php?themes=inver&newsid=<?php echo $_smarty_tpl->tpl_vars['foo']->value['NewsID'];?>
" style="display: block;text-decoration: none;" title="Cho thuê nhà  Hoàng Mai, Số 6 BT3 KĐT Pháp Vân, Tứ Hiệp, Chính chủ, Giá 30 Triệu/Tháng, Anh Sơn, ĐT 0909796668 " rel="nofollow">
				<span class="ad-title">
					<h4><?php echo $_smarty_tpl->tpl_vars['foo']->value['Title'];?>
</h4>
				</span>
				<span class="ad-image">
					<img width="154" height="116" src="<?php if (isset($_smarty_tpl->tpl_vars['foo']->value['Image__URL'])){?><?php echo $_smarty_tpl->tpl_vars['foo']->value['Image__URL'];?>
<?php }else{ ?>http://easyvn.net/news/themes/img/no-img.jpg<?php }?>">
				</span>
				<p></p>
				<span class="ad-des" >
					<?php echo $_smarty_tpl->tpl_vars['foo']->value['Content'];?>

				</span>
				</a>
			</div>
		</div><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 09:00:46
         compiled from "smarty\templates\inver\wrap_footer.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d223e34e5f8_35336857')) {function content_507d223e34e5f8_35336857($_smarty_tpl) {?>﻿ 
        <div id="footer" class="clear">
          <div id="block-buildweb_services-vinno_footer_header" class="block block-buildweb_services">

  
  <div class="content clearfix">
    <div id="vinno-block-vinno_footer_header" >
	<div class="box-outer">
		<div class="box-inner">
			<div class="box-inner-inner ">
								<div class="clearfix content"><div class="shell"><div class="inner-shell">	
		<div class='header clearfix'>			
			<div class='flash'>
				<div></div>
				<div><embed wmode="opaque" height="121" width="1003"  src="sites/all/modules/vinno_services/flash/footer_new.swf" play="true" loop="true" menu="true"></embed></div>
			</div>
		</div></div></div></div>
			</div>
		</div>
	</div>
</div>
  </div>

</div>
<div id="block-block-26" class="block block-block">

  
  <div class="content clearfix">
    <div class="clearfix" style="padding: 10px; background-color: #FFFFFF;font-size: 9px">
<div style="float:left;">

<h2>Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ, bán nhà hà nội chính chủ, nhà đất hà nội chính chủ, cần bán nhà hà nội chính chủ, 2012</h2><p><b>Nhà đất - Bán Nhà Hà Nội, Video Nhà bán chính chủ</b>, Thông tin nhà đất chính chủ hà nội 2012, video bán nhà đất, cho thuê nhà đất hà nội, cho thuê nhà phố tại hà nội, bán nhà phố ở hà nội</p>


</div>
</div>  </div>

</div>
<div id="block-block-22" class="block block-block">

  
  <div class="content clearfix">
    <div class="clearfix" style="padding: 10px; background-color: #FFFFFF;font-size: 9px">
<div style="float:left;">

<h3 style="float: left; font-size: 9px; "><a href="/ban-nha.htm" title="ban nha">Bán nhà</a> | </h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/ban-dat-ban-nen.htm" title="ban dat, ban dat nen">Bán đất, bán đất nền</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/ban-chung-cu-ban-can-ho.htm" title="ban chung cu, ban can ho, cc mini">Bán chung cư, bán căn hộ, cc mini </a> | </h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/ban-nha-mat-pho.htm" title="ban nha mat pho">Bán nhà mặt phố, bán nhà mặt tiền</a> | </h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/ban-nha-trong-ngo.htm" title="ban nha trong ngo">Bán nhà trong ngõ, bán nhà hẻm</a> | </h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/ban-nha-lien-ke.htm" title="ban nha lien ke">Bán nhà liền kề</a> | </h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/ban-nha-phan-lo.htm" title="ban nha phan lo">Bán nhà phân lô</a> | </h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/ban-trang-trai-khu-nghi-duong.htm" title="ban trang trai, khu nghi duong">Bán trang trại, khu nghỉ dưỡng</a> | </h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/ban-biet-thu-villa.htm" title="ban biet thu, ban villa">Bán biệt thự, bán villa</a> | </h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/ban-cua-hang-mat-bang-kinh-doanh.htm" title="ban cua hang, gian hang">Bán cửa hàng, gian hàng</a> | </h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/ban-nha-nghi-khach-san.htm" title="ban khach san, nha nghi">Bán khách sạn, nhà nghỉ </a></h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-nha.htm" title="cho thue nha">Cho thuê nhà, cho thuê nhà chính chủ </a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-chung-cu-cho-thue-can-ho.htm" title="cho thue chung cu, cho thue can ho, cc mini">Cho thuê chung cư, căn hộ, cc mini</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-cua-hang.htm" title="cho thue cua hang kinh doanh">Cho thuê cửa hàng kinh doanh</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-nha-pho.htm" title="cho thue nha pho">Cho thuê nhà mặt phố, nhà mặt tiền</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-nha-trong-ngo.htm" title="cho thue nha trong ngo">Cho thuê nhà trong ngõ, nhà hẻm</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-nha-phong-tro.htm" title="cho thue nha tro, phong tro">Cho thuê nhà trọ, phòng trọ</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-van-phong.htm" title="cho thue van phong cao oc">Cho thuê văn phòng, cao ốc</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-biet-thu-villa.htm" title="cho thue biet thu, villa">Cho thuê biệt thự, villa</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-nha-lam-nha-nghi-khach-san.htm" title="cho thue nha lam van phong, nha nghi, khach san">Cho thuê nhà làm văn phòng, nhà nghỉ, khách sạn</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-nha-lam-van-phong.htm" title="cho thue nha rieng, tien kinh doanh">Cho thuê nhà riêng, tiện kinh doanh</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-mat-bang.htm" title="cho thue mat bang, cho thue dat ">Cho thuê đất, cho thuê mặt bằng</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/cho-thue-nha-kho-bai-nha-xuong.htm" title="cho thue nha kho, nha xuong">Cho thuê nhà kho, nhà xưởng</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/sang-nhuong.htm" title="sang nhuong">Sang nhượng</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/sang-nhuong-cua-hang.htm" title="sang nhuong cua hang">Sang nhượng cửa hàng</a> |</h3>
<h3 style="float: left;font-size: 9px;margin-left: 2px;"><a href="/sang-nhuong-nha-nghi-khach-san.htm" title="sang nhuong nha nghi, khach san">Sang nhượng nhà nghỉ, khách sạn</a></h3>


</div>
</div>  </div>

</div>
<div id="block-buildweb_services-vinno_footer_status" class="block block-buildweb_services">

  
  <div class="content clearfix">
    <div id="vinno-block-vinno_footer_status" >
	<div class="box-outer">
		<div class="box-inner">
			<div class="box-inner-inner vinno-title2">
								<div class="clearfix content"><div class="shell"><div class="inner-shell"><div class='status'>
						<div class='search'>
							<div class='mid'>
								<div class='search-content'><div class="breadcrumbs clearfix">
			<div class="breadcrumb clearfix"><div class='first'><a href="/ha-noi.htm" title="Back to Home page" class="active">Trang chủ</a></div><div class="separator"></div><a href="/property/browse/results" rel="tag" title="Bỏ tiêu chí Hà nội">Hà nội</a></div>
		</div></div>
							</div>
						</div>	
						<div class='menu clearfix'>
							<a href="/" class="del-search active" title="Bỏ tất cả các tiêu chí tìm kiếm"></a>
							<div class='mid'>
								<div class='menu-content clearfix'>
									<div class='whistlist' style='color: #FFFFFF;'> <a href="/content/ban-nha-dat.htm" class="first" title="Mua ban nha dat, cho thue nha dat">Bán nhà đất</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/content/cho-thue-nha.htm" style="">Cho thuê nhà đất</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/content/ban-nha-ha-noi-cho-thue-nha-ha-noi.htm" style="">Hà Nội</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/content/ban-nha-sai-gon-cho-thue-nha-sai-gon.htm" style="">Hồ Chí Minh</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/10001" style="">Archive</a> </div>
									<div class='menu-link'> <a href="/" class="active">Trang chủ</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/content/lien-he.htm">Liên hệ</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/dang-tin/quang-cao-ban-nha-ban-dat-cho-thue-nha.htm" title="dang tin,  ban nha, ban dat, cho thue nha, cho thue cua hang, sang nhuong, quang cao, rao vat">Đăng tin</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href='#'>Lên đầu trang</a> </div>
								</div>
							</div>
						</div>
												
				   </div></div></div></div>
			</div>
		</div>
	</div>
</div>
  </div>

</div>
<div id="block-block-23" class="block block-block">

  
  <div class="content clearfix">
    <div style="text-align: center;width: 1000px;margin-top: 10px;">
<a href="http://www.vinno.vn" rel="nofollow" style="text-align: center; color:blue;font-weight: bold; ">Developped by VINNO </a> | <a href="http://www.ngoctraicaocap.com" title="Ngọc trai - Cửa hàng ngọc trai, trang sức ngọc trai" style="text-align: center; color:blue;font-weight: bold; ">Ngọc trai</a> | <a href="http://www.ngoctraicaocap.com/bot-ngoc-trai" title="Bột ngọc trai, bán bột ngọc trai nguyên chất" style="text-align: center; color:blue;font-weight: bold; ">Bán bột ngọc trai</a>
</div>
  </div>

</div>
                  </div> <!-- /#footer -->
                  <?php }} ?>