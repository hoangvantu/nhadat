<?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 06:48:12
         compiled from "..\smarty\templates\styleAdmin\blueadmin\changepass.tpl" */ ?>
<?php /*%%SmartyHeaderCode:92705073e0e3221050-27294540%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'fa280eb2c89e0ef0be3fcef92c1b0e09e323c8d5' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\changepass.tpl',
      1 => 1350370091,
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
  'nocache_hash' => '92705073e0e3221050-27294540',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_5073e0e458d002_78365206',
  'variables' => 
  array (
    'page_title' => 0,
    'name' => 0,
    'quyenhan' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5073e0e458d002_78365206')) {function content_5073e0e458d002_78365206($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <meta http-equiv="content-type" content="text/html; charset=utf-8" />

 <title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>
 
<?php /*  Call merged included template "headcss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headcss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '92705073e0e3221050-27294540');
content_507d032c650668_98087128($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headcss.tpl" */?>
 
 
            <?php /*  Call merged included template "headjava.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headjava.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '92705073e0e3221050-27294540');
content_507d032cbbbfc5_40740839($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headjava.tpl" */?>
 
 <script type="text/javascript">
  
$(document).keypress(function(e)
{
  if(e.which == 13) 
  $('#change_pass_form').submit()
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
      
	  


</table>


<div class="box round first fullpage">
 <h2>
  Đổi mật khẩu thành viên</h2>
 <div class="block ">
  <?php if (isset($_smarty_tpl->tpl_vars['thongbaoloi']->value)){?>
   <div class="message warning">
    <h5>Xuất hiện lỗi!</h5>
    <p>
     <?php echo $_smarty_tpl->tpl_vars['thongbaoloi']->value;?>

    </p>
   </div>

  <?php }?>
  <?php if (isset($_smarty_tpl->tpl_vars['thanhvien']->value)){?>
  <form id="change_pass_form"action="" method="POST">
   <table class="form">
    <input type="hidden" name="userid" value="<?php echo $_smarty_tpl->tpl_vars['thanhvien']->value['UserID'];?>
"/>
    <tr>
     <td class="col1">
      <label>
       Email  </label>
     </td>
     <td class="col2">
      <input type="text" id="grumble" value="<?php echo $_smarty_tpl->tpl_vars['thanhvien']->value['Email'];?>
" disabled/>
     </td>
    </tr>
    <?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['quyenhan']->value;?>
<?php $_tmp1=ob_get_clean();?><?php if ($_tmp1!=0){?>
    <tr>
     <td class="col1">
      <label>
       Mật khẩu cũ</label>
     </td>
     <td class="col2">
      <input type="text" id="grumble" name="oldpass" tooltiptext="Vui lòng nhập chính xác e-mail của bạn" required/>
     </td>
    </tr>
    <?php }?> 
    <tr>
     <td>
      <label>
       Mật khẩu mới</label>
     </td>
     <td>
      <input  type="password" <?php if (isset($_smarty_tpl->tpl_vars['pass_retype']->value)){?>class="error" <?php }?> name="newpass" required />
     </td>
    </tr>
    <tr>
     <td>
      <label>
       Điền lại mật khẩu mới</label> 
     </td>
     <td>
      <input type="password" <?php if (isset($_smarty_tpl->tpl_vars['pass_retype']->value)){?>class="error" <?php }?>name="newpass_retype" required/> 


      <?php if (isset($_smarty_tpl->tpl_vars['pass_retype']->value)){?>
       <?php echo $_smarty_tpl->tpl_vars['pass_retype']->value;?>

      <?php }?>
      </div>
     </td>
    </tr>

    <tr>
     <td>  <input type="submit" class="btn btn-teal" value="Đổi mật khẩu" /></td>
     <td> </td>

    </tr>

   </table>
  </form>
      
      <?php }?>
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
 </html><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 06:48:12
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headcss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d032c650668_98087128')) {function content_507d032c650668_98087128($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
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
  <?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 06:48:12
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headjava.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d032cbbbfc5_40740839')) {function content_507d032cbbbfc5_40740839($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
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