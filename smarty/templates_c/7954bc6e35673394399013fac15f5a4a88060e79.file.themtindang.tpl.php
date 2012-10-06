<?php /* Smarty version Smarty-3.1.11, created on 2012-10-06 20:23:55
         compiled from "..\smarty\templates\styleAdmin\blueadmin\themtindang.tpl" */ ?>
<?php /*%%SmartyHeaderCode:6072506ed32bde1ff8-44359923%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7954bc6e35673394399013fac15f5a4a88060e79' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\themtindang.tpl',
      1 => 1349526232,
      2 => 'file',
    ),
    '5c9b732e7a183b501f3719781b8bd998024ce21e' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\layout.tpl',
      1 => 1349522957,
      2 => 'file',
    ),
    '8a48e3331a7d9f9f03f5e1db17b60f3bf0d666b7' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\headcss.tpl',
      1 => 1349522955,
      2 => 'file',
    ),
    '0fc3d3f5d0caae3f65ebc50f770b3e2d52a1d326' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\headjava.tpl',
      1 => 1349522955,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6072506ed32bde1ff8-44359923',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_506ed32bf3ad18_84598198',
  'variables' => 
  array (
    'page_title' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_506ed32bf3ad18_84598198')) {function content_506ed32bf3ad18_84598198($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\Xampp\\htdocs\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <meta http-equiv="content-type" content="text/html; charset=utf-8" />

 <title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>
 
<?php /*  Call merged included template "headcss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headcss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '6072506ed32bde1ff8-44359923');
content_507022dbb0a993_49772503($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headcss.tpl" */?>
 
<!-- Bootstrap CSS Toolkit styles -->
<link rel="stylesheet" href="http://blueimp.github.com/cdn/css/bootstrap.min.css">
<!-- Generic page styles -->
<link rel="stylesheet" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/upload/css/style.css">
<!-- Bootstrap styles for responsive website layout, supporting different screen sizes -->
<link rel="stylesheet" href="http://blueimp.github.com/cdn/css/bootstrap-responsive.min.css">
<!-- Bootstrap CSS fixes for IE6 -->
<!--[if lt IE 7]><link rel="stylesheet" href="http://blueimp.github.com/cdn/css/bootstrap-ie6.min.css"><![endif]-->
<!-- Bootstrap Image Gallery styles -->

<link rel="stylesheet" href="http://blueimp.github.com/Bootstrap-Image-Gallery/css/bootstrap-image-gallery.min.css">
<!-- CSS to style the file input field as button and adjust the Bootstrap progress bars -->
<link rel="stylesheet" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/upload/css/jquery.fileupload-ui.css">
<!-- Shim to make HTML5 elements usable in older Internet Explorer versions -->
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->



 
            <?php /*  Call merged included template "headjava.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headjava.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '6072506ed32bde1ff8-44359923');
content_507022dbb664d9_37380527($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headjava.tpl" */?>
 
<script type="text/javascript" src="../jscripts/tiny_mce/tiny_mce.js"></script>

  
 
 
 
  <!--Tiny MCE Intializing -->
 <script type="text/javascript">
    tinyMCE.init({
       // General options
       mode : "textareas",
       theme : "advanced",
       plugins : "autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,wordcount,advlist,autosave,visualblocks",
        
       // Theme options
       theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,fontselect,fontsizeselect",
       theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
       theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
       theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak,restoredraft,visualblocks",
       theme_advanced_toolbar_location : "top",
       theme_advanced_toolbar_align : "left",
       theme_advanced_statusbar_location : "bottom",
       theme_advanced_resizing : true,

       // Example content CSS (should be your site CSS)
       content_css : "css/content.css",

       // Drop lists for link/image/media/template dialogs
       template_external_list_url : "lists/template_list.js",
       external_link_list_url : "lists/link_list.js",
       external_image_list_url : "lists/image_list.js",
       media_external_list_url : "lists/media_list.js",

       // Style formats
       style_formats : [
          {title : 'Bold text', inline : 'b'},
          {title : 'Red text', inline : 'span', styles : {color : '#ff0000'}},
          {title : 'Red header', block : 'h1', styles : {color : '#ff0000'}},
          {title : 'Example 1', inline : 'span', classes : 'example1'},
          {title : 'Example 2', inline : 'span', classes : 'example2'},
          {title : 'Table styles'},
          {title : 'Table row 1', selector : 'tr', classes : 'tablerow1'}
       ],

       // Replace values for the template plugin
       template_replace_values : {
          username : "Some User",
          staffid : "991234"
       }
    });
            
 </script>

   <!-- AJAX -->
 <script type="text/javascript">
      $(document).ready(function(){
      $.getJSON('../ajax_request.php' ,{action:'getquan',provinceid:$(".province").val()},function(data){
               $.each(data, function(index) {
               // alert(data[index].districtid);
               $(".district").append("<option value=\""+data[index].districtid+"\">"+data[index].districtname+"</option>");
          });

}); 
       
      $(".province").change(function(data)
         {
            $(".district").empty();
            $.getJSON('../ajax_request.php' ,{action:'getquan',provinceid:$(this).val()},function(data){
               $.each(data, function(index) {
               // alert(data[index].districtid);
               $(".district").append("<option value=\""+data[index].districtid+"\">"+data[index].districtname+"</option>");
          });

});
            
         }
         );
});
   
 </script>



 
 </head>
 <body>
 <div class="container_12">
        <div class="grid_12 header-repeat">
            <div id="branding">
                <div class="floatleft">
                    <img src="<?php echo dirname($_smarty_tpl->source->filepath);?>
/img/logo.png" alt="Logo" /></div>
                <div class="floatright">
                    <div class="floatleft">
                        <img src="<?php echo dirname($_smarty_tpl->source->filepath);?>
/img/img-profile.jpg" alt="Profile Pic" /></div>
                    <div class="floatleft marginleft10">
                        <ul class="inline-ul floatleft">
                            <li>Hello Admin</li>
                            <li><a href="#">Config</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                        <br />
                        <span class="small grey">Last Login: 3 hours ago</span>
                    </div>
                </div>
                <div class="clear">
                </div>
            </div>
        </div>
        <div class="clear">
        </div>
        <div class="grid_12">
            <ul class="nav main">
                <li class="ic-dashboard"><a href="index.php"><span>Bảng quản trị</span></a> </li>
                <li class="ic-form-style"><a href="javascript:"><span>Controls</span></a>
                    <ul>
                        <li><a href="form-controls.html">Forms</a> </li>
                        <li><a href="buttons.html">Buttons</a> </li>
                        <li><a href="form-controls.html">Full Page Example</a> </li>
                        <li><a href="table.html">Page with Sidebar Example</a> </li>
                    </ul>
                </li>
				<li class="ic-typography"><a href="typography.html"><span>Typography</span></a></li>
                <li class="ic-charts"><a href="charts.html"><span>Charts & Graphs</span></a></li>
                <li class="ic-grid-tables"><a href="table.html"><span>Data Table</span></a></li>
                <li class="ic-gallery dd"><a href="javascript:"><span>Image Galleries</span></a>
               		 <ul>
                        <li><a href="image-gallery.html">Pretty Photo</a> </li>
                        <li><a href="gallery-with-filter.html">Gallery with Filter</a> </li>
                    </ul>
                </li>
                <li class="ic-notifications"><a href="notifications.html"><span>Notifications</span></a></li>

            </ul>
        </div>
        <div class="clear">
        </div>
        <div class="grid_2">
            <div class="box sidemenu">
                <div class="block" id="section-menu">
                    <ul class="section menu">
                        <li><a class="menuitem">Quản lý tài khoản</a>
                            <ul class="submenu">
                                <li><a class="active">Thay đổi mật khẩu</a> </li>
                                <li><a>Thay đổi thông tin cá nhân</a> </li>
                                <li><a >Submenu 3</a> </li>
                                <li><a>Submenu 4</a> </li>
                                <li><a>Submenu 5</a> </li>
                            </ul>
                        </li>
                        <li><a class="menuitem">Quản lý thành viên</a>
                            <ul class="submenu">
                                <li><a href="danhsachthanhvien.php">Danh sách thành viên</a> </li>
                                <li><a href="themthanhvien.php">Thêm thành viên</a> </li>
                                <li><a>Submenu 3</a> </li>
                                <li><a>Submenu 4</a> </li>
                                <li><a>Submenu 5</a> </li>
                            </ul>
                        </li>
                        <li><a class="menuitem">Quản lý tin đăng</a>
                            <ul class="submenu">
                                <li><a>Danh sách tin đăng</a> </li>
                                <li><a>Submenu 2</a> </li>
                                <li><a>Submenu 3</a> </li>
                                <li><a>Submenu 4</a> </li>
                                <li><a>Submenu 5</a> </li>
                            </ul>
                        </li>
                        <li><a class="menuitem">Quản lý tin tức</a>
                            <ul class="submenu">
                                <li><a>Danh sách tin tức</a> </li>
                                <li><a>Submenu 2</a> </li>
                                <li><a>Submenu 3</a> </li>		
                                <li><a>Submenu 4</a> </li>
                                <li><a>Submenu 5</a> </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="grid_10">
      
	  




<div class="box round first grid">
 <h2>
  Thêm Tin Đăng</h2>
 <div class="block ">
  
  <form enctype="multipart/form-data" action="" method="POST">
   <table class="form">
    <tbody>
     <tr>
      <td class="col1">
       <label>
        Tiêu đề</label>
      </td>
      <td class="col2">
       <input type="text" name="txtTitle" id="grumble">
      </td>
     </tr>
     <tr>
      <td>  <label>Nội dung</label></td>
      <td> <textarea name="content" cols="50" rows="15">This is some content that will be editable with TinyMCE.</textarea></td>

     </tr>
     <tr>
      <td><label>Tỉnh</label></td>
      <td>
       <select class="province" value="112">
        <?php if (isset($_smarty_tpl->tpl_vars['danhsachtinh']->value)){?>
         <?php  $_smarty_tpl->tpl_vars['tinh'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['tinh']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachtinh']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['tinh']->key => $_smarty_tpl->tpl_vars['tinh']->value){
$_smarty_tpl->tpl_vars['tinh']->_loop = true;
?>
          <option value="<?php echo $_smarty_tpl->tpl_vars['tinh']->value['ProvinceID'];?>
"><?php echo $_smarty_tpl->tpl_vars['tinh']->value['ProvinceName'];?>
</option>
         <?php } ?>
        <?php }?>
       </select>


      </td>
     </tr>
     <tr>
      <td><label>Quận/Huyện</label></td>
      <td>
       <select class="district">
       

       </select>
      </td>

     </tr>
     <tr>
      <td><label>Loại nhà</label></td>
      <td>
       <select class="province" value="112">
        <?php if (isset($_smarty_tpl->tpl_vars['danhsachloainha']->value)){?>
         <?php  $_smarty_tpl->tpl_vars['loainha'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['loainha']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachloainha']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['loainha']->key => $_smarty_tpl->tpl_vars['loainha']->value){
$_smarty_tpl->tpl_vars['loainha']->_loop = true;
?>
          <option value="<?php echo $_smarty_tpl->tpl_vars['loainha']->value['LoainhaID'];?>
"><?php echo $_smarty_tpl->tpl_vars['loainha']->value['TenLoaiNha'];?>
</option>
         <?php } ?>
        <?php }?>
       </select>


      </td>
     </tr>
     <tr>
      <td><label>Khung giá</label></td>
      <td>
       <select class="province" value="112">
        <?php if (isset($_smarty_tpl->tpl_vars['danhsachkhunggia']->value)){?>
         <?php  $_smarty_tpl->tpl_vars['khunggia'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['khunggia']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachkhunggia']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['khunggia']->key => $_smarty_tpl->tpl_vars['khunggia']->value){
$_smarty_tpl->tpl_vars['khunggia']->_loop = true;
?>
          <option value="<?php echo $_smarty_tpl->tpl_vars['khunggia']->value['khunggiaid'];?>
"><?php echo $_smarty_tpl->tpl_vars['khunggia']->value['KhungGiaName'];?>
</option>
         <?php } ?>
        <?php }?>
       </select>


      </td>
     </tr>
      <tr>
      <td class="col1">
       <label>
         Địa chỉ</label>
      </td>
      <td class="col2">
       <input type="text" name="txtTitle" id="grumble">
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
       Giá nhà (viết bằng chữ)</label>
      </td>
      <td class="col2">
       <input type="text" name="txtTitle" id="grumble">
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
       Tọa độ x</label>
      </td>
      <td class="col2">
       <input type="text" name="txtTitle" id="grumble">
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
        Tọa độ y</label>
      </td>
      <td class="col2">
       <input type="text" name="txtTitle" id="grumble">
      </td>
     </tr>

    </tbody></table>
  </form>
 </div>
 
	  
            </div>
        </div>
        <div class="clear">
        </div>
    </div>
	 <div class="clear">
    </div>
	   <div id="site_info">
        <p>
            Copyright <a href="#">BlueWhale Admin</a>. All Rights Reserved.
        </p>
    </div>
 
 
 
 </body>
 </html><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-06 20:23:55
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headcss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507022dbb0a993_49772503')) {function content_507022dbb0a993_49772503($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\Xampp\\htdocs\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
?> <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/reset.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/text.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/grid.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/layout.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/nav.css" media="screen" />
    <!--[if IE 6]><link rel="stylesheet" type="text/css" href="css/ie6.css" media="screen" /><![endif]-->
    <!--[if IE 7]><link rel="stylesheet" type="text/css" href="css/ie.css" media="screen" /><![endif]-->
  <?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-06 20:23:55
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headjava.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507022dbb664d9_37380527')) {function content_507022dbb664d9_37380527($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\Xampp\\htdocs\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
?><!-- BEGIN: load jquery -->
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-1.6.4.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-ui/jquery.ui.core.min.js"></script>
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-ui/jquery.ui.widget.min.js" type="text/javascript"></script>
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-ui/jquery.ui.accordion.min.js" type="text/javascript"></script>
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-ui/jquery.effects.core.min.js" type="text/javascript"></script>
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-ui/jquery.effects.slide.min.js" type="text/javascript"></script>
<!-- END: load jquery -->
<!-- BEGIN: load jqplot -->
<link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/jquery.jqplot.min.css" />
<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/excanvas.min.js"></script><![endif]-->
<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/jquery.jqplot.min.js"></script>

<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/plugins/jqplot.barRenderer.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/plugins/jqplot.pieRenderer.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/plugins/jqplot.categoryAxisRenderer.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/plugins/jqplot.highlighter.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/plugins/jqplot.pointLabels.min.js"></script>
<!-- END: load jqplot -->

<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/setup.js" type="text/javascript"></script>

 <script type="text/javascript">
         
    $(document).ready(function () 
    {
        setupLeftMenu();
        setSidebarHeight();
           
           
    });
 </script>
<?php }} ?>