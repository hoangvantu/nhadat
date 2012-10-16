<?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 05:27:59
         compiled from "..\smarty\templates\styleAdmin\blueadmin\danhsachtinhthanh.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2807650729b552d3609-13811237%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '9715331cf12f2f0963c76820ca999099efe0bb12' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\danhsachtinhthanh.tpl',
      1 => 1350316484,
      2 => 'file',
    ),
    '5c9b732e7a183b501f3719781b8bd998024ce21e' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\layout.tpl',
      1 => 1350362906,
      2 => 'file',
    ),
    '8a48e3331a7d9f9f03f5e1db17b60f3bf0d666b7' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\headcss.tpl',
      1 => 1349448012,
      2 => 'file',
    ),
    '0fc3d3f5d0caae3f65ebc50f770b3e2d52a1d326' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\headjava.tpl',
      1 => 1350363007,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2807650729b552d3609-13811237',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_50729b55872cb4_78627450',
  'variables' => 
  array (
    'page_title' => 0,
    'name' => 0,
    'quyenhan' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_50729b55872cb4_78627450')) {function content_50729b55872cb4_78627450($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <meta http-equiv="content-type" content="text/html; charset=utf-8" />

 <title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>
 
<?php /*  Call merged included template "headcss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headcss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '2807650729b552d3609-13811237');
content_507cf05fdb03e0_78214470($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headcss.tpl" */?>
 
 
            <?php /*  Call merged included template "headjava.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headjava.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '2807650729b552d3609-13811237');
content_507cf060260d53_33149077($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headjava.tpl" */?>
 
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/jquery.jeditable.js" type="text/javascript"></script>

 
 <!--http://code.google.com/p/jquery-inline-editor-->
 
 <script type="text/javascript">
$(function() { 
 $(".editable_textarea").editable("ajaxtinhthanh.php?action=edittentinh", { 
      indicator : "<img src='img/indicator.gif'>",
      type   : 'textarea',
      submitdata: { _method: "put" },
      select : true,
      submit : 'OK',
      cancel : 'cancel',
      cssclass : "editable"
  });
 });
         
         
function themmoi()
{
 if(!$(".newprovince").get(0)) 
$(".bangdanhsach").append("<tr class=\"newprovince\"><td>Điền tên tỉnh thành</td><td><input type=\"text\"/></td><td><button onclick=\"them()\">Thêm</button></td></tr>");
}
 function them()
  {
  // alert($(".newprovince td:eq(1) input").val());
   var newprovince = $(".newprovince td:eq(1) input").val();
    var newprovinceid;
    $.post("ajaxtinhthanh.php?action=addprovince", { provincename: newprovince},
   function(data) {
    newprovinceid=data;
   
      $(".newprovince").html("");
   $(".newprovince").remove();
    $(".bangdanhsach").append("<tr class=\"gradeA odd td"+newprovinceid+" \"><td>"+newprovinceid+"</td><td><a href=\"danhsachquanhuyen.php?provinceid="+newprovinceid+"\">"+newprovince+"</a></td><td> <a href=\"?action=delete&provinceid="+newprovinceid+"\"><button class=\"btn btn-teal\" >Xóa</button></td></tr>");
   });
     
   };
 function xoa(provinceid)
  {
   if( confirm("Bạn có muốn xóa không"))
    {
      $.post("ajaxtinhthanh.php?action=delete", { provinceid: provinceid},
   function(data) {
       
       $(".td"+provinceid).html("");
      $(".td"+provinceid).remove();
  
 });
     
    
    }
   
   }
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
                            <li>Hello <?php if (isset($_smarty_tpl->tpl_vars['name']->value)){?><?php echo $_smarty_tpl->tpl_vars['name']->value;?>
<?php }?></li>
                            <li><a href="#">Config</a></li>
                            <li><a href="logout.php">Logout</a></li>
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
                                
                            </ul>
                        </li>
                     <?php if (isset($_smarty_tpl->tpl_vars['quyenhan']->value)){?>
                      <?php if ($_smarty_tpl->tpl_vars['quyenhan']->value==0){?>
                        <li><a class="menuitem">Quản lý thành viên</a>
                            <ul class="submenu">
                                <li><a  href="danhsachthanhvien.php">Danh sách thành viên</a> </li>
                                <li><a href="themthanhvien.php">Thêm thành viên</a> </li>
                               
                            </ul>
                        </li>
                     <?php }?>
                     <?php }?>
                        <li><a class="menuitem">Quản lý tin đăng</a>
                            <ul class="submenu">
                                <li><a href="danhsachtindang.php">Danh sách tin đăng</a> </li>
                                <li><a href="themtindang.php">Thêm tin đăng</a> </li>
                               
                            </ul>
                        </li>
                       
                      <li><a class="menuitem">Quản lý danh mục</a>
                            <ul class="submenu">
                                <li><a href="danhsachtinhthanh.php">Danh sách tỉnh thành</a> </li>
                               
                                <li><a href="danhsachnhucau.php">Danh sách nhu cầu</a> </li>		
                                <li><a href="danhsachkhunggia.php">Danh sách khung giá</a> </li>
                                <li><a href="danhsachloainha.php">Danh sách loại nhà</a> </li>
                            </ul>
                        </li>
                        <li><a class="menuitem">Hộp thư</a>
                            <ul class="submenu">
                                <li><a href="tinnhanden.php">Tin nhắn đến</a> </li>
                                <li><a href="tinnhandi.php">Tin nhắn đã gửi</a> </li>		
                                 <li><a href="guitinnhan.php">Gửi tin nhắn</a> </li>		
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="grid_10">
      
	  


<div class="box round first grid">
 <h2>
  Danh sách tỉnh thành</h2>
 <div class="block">



  <div class="dataTables_wrapper" id="example_wrapper"><div id="example_length" class="dataTables_length"><label>Show <select size="1" name="example_length"><option value="10" selected="selected">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>   <button type="button"onclick="themmoi()">Thêm mới</button></div><div class="dataTables_filter" id="example_filter"><label>Search: <input type="text"></label></div><table class="data display datatable" id="example">
    <thead>
     <tr><th class="sorting_asc" rowspan="1" colspan="1" style="width: 213px; ">Rendering engine</th><th class="sorting" rowspan="1" colspan="1" style="width: 265px; ">Browser</th><th class="sorting" rowspan="1" colspan="1" style="width: 249px; ">Platform(s)</th><th class="sorting" rowspan="1" colspan="1" style="width: 179px; ">Engine version</th><th class="sorting" rowspan="1" colspan="1" style="width: 129px; ">CSS grade</th></tr>
    </thead>

    <tbody class="bangdanhsach">
     
     <?php if (isset($_smarty_tpl->tpl_vars['danhsachtinhthanh']->value)){?>
      <?php  $_smarty_tpl->tpl_vars['tinhthanh'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['tinhthanh']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachtinhthanh']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['tinhthanh']->key => $_smarty_tpl->tpl_vars['tinhthanh']->value){
$_smarty_tpl->tpl_vars['tinhthanh']->_loop = true;
?>

       <tr class="gradeA odd td<?php echo $_smarty_tpl->tpl_vars['tinhthanh']->value['ProvinceID'];?>
 ">
        <td class="center categoryName"><?php echo $_smarty_tpl->tpl_vars['tinhthanh']->value['ProvinceID'];?>
</td>

        <td ><a href="danhsachquanhuyen.php?provinceid=<?php echo $_smarty_tpl->tpl_vars['tinhthanh']->value['ProvinceID'];?>
"><div id="<?php echo $_smarty_tpl->tpl_vars['tinhthanh']->value['ProvinceID'];?>
" class="editable_textarea"><?php echo $_smarty_tpl->tpl_vars['tinhthanh']->value['ProvinceName'];?>
</div></a></td>
        <td >  <button class="btn btn-teal" onclick="xoa(<?php echo $_smarty_tpl->tpl_vars['tinhthanh']->value['ProvinceID'];?>
)" >Xóa</button>	</td>	


       </tr>



      <?php } ?>  
     <?php }?>
    </tbody>

   </table>
  
 
   
   
   
   <div class="dataTables_info" id="example_info">Showing 1 to 10 of 57 entries</div>
   <div class="dataTables_paginate paging_two_button" id="example_paginate">
    <div class="paginate_disabled_previous" title="Previous" id="example_previous"></div>
    <div class="paginate_enabled_next" title="Next" id="example_next"></div>
   </div>
  </div>



 </div>
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
 </html><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 05:27:59
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headcss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507cf05fdb03e0_78214470')) {function content_507cf05fdb03e0_78214470($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
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
  <?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 05:28:00
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headjava.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507cf060260d53_33149077')) {function content_507cf060260d53_33149077($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
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