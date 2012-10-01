<?php /* Smarty version Smarty-3.1.11, created on 2012-10-01 11:38:36
         compiled from "..\smarty\templates\styleAdmin\blueadmin\themthanhvien.tpl" */ ?>
<?php /*%%SmartyHeaderCode:30097506980bce54120-80932983%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3d9dc85fb96f45cf24736ba95106571809a2150c' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\themthanhvien.tpl',
      1 => 1348837488,
      2 => 'file',
    ),
    '5c9b732e7a183b501f3719781b8bd998024ce21e' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\layout.tpl',
      1 => 1349091052,
      2 => 'file',
    ),
    '8a48e3331a7d9f9f03f5e1db17b60f3bf0d666b7' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\headcss.tpl',
      1 => 1349091050,
      2 => 'file',
    ),
    '0fc3d3f5d0caae3f65ebc50f770b3e2d52a1d326' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\headjava.tpl',
      1 => 1349091050,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '30097506980bce54120-80932983',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'page_title' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_506980bd0b8705_72770106',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_506980bd0b8705_72770106')) {function content_506980bd0b8705_72770106($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <meta http-equiv="content-type" content="text/html; charset=utf-8" />

 <title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>
 
<?php /*  Call merged included template "headcss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headcss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '30097506980bce54120-80932983');
content_506980bcec8948_77700058($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headcss.tpl" */?>
 
 
 <?php /*  Call merged included template "headjava.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headjava.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '30097506980bce54120-80932983');
content_506980bcf1c228_37111689($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headjava.tpl" */?>
 
 
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
                                <li><a href="adduser.php">Thêm thành viên</a> </li>
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
      
	  
	  
	  
 
 <div class="box round first fullpage">
   <h2>Thêm Thành Viên:</h2>
 
 
 
<div class="block ">
    <?php if (isset($_smarty_tpl->tpl_vars['thongbaoloi']->value)){?>
    <div class="message error">
                                <h5>Có lỗi khi đăng ký!</h5>
                                <p style="color:#000000">
                                    <?php echo $_smarty_tpl->tpl_vars['thongbaoloi']->value;?>

                                </p>
                            </div>
    
    <?php }?>
                    <form method="post" action="">
                      
                    <table class="form" border="1">
                        
                    
                    <tr>
                            <td class="col1">
                                <label>
                                    email:</label>
                            </td>
                            <td class="col2">
                                <input type="text" id="grumble " name="txtemail">
                            </td>
                        </tr>
                        
                        <tr>
                            <td class="col1">
                                <label>
                                    Name:</label>
                            </td>
                            <td class="col2">
                                <input type="text" id="grumble " name="txtname">
                            </td>
                        </tr>
                        <tr>
                            <td class="col1">
                                <label>
                                    Password:</label>
                            </td>
                            <td class="col2">
                                <input type="password" id="grumble" name="txtpass">
                            </td>
                        </tr>
                        <tr>
                            <td class="col1">
                                <label>
                                    Retype Password:</label>
                            </td>
                            <td class="col2">
                                <input type="password" name="txtpass2">
                            </td>
                        </tr>
                        <tr>
                            <td class="col1">
                                <label>
                                    Telephone:</label>
                            </td>
                            <td class="col2">
                                <input type="text" id="grumble " name="txtphone">
                            </td>
                        </tr>
                        <tr>
                            <td>
                    <input type="submit" class="btn btn-purple" name="btnsubmit" value="Thêm thànnh viên"/>
                    </td>
                    </tr>
                    </table>
                    </form>
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
 </html><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-01 11:38:36
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headcss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_506980bcec8948_77700058')) {function content_506980bcec8948_77700058($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
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
  <?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-01 11:38:36
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headjava.tpl" */ ?>
<?php if ($_valid && !is_callable('content_506980bcf1c228_37111689')) {function content_506980bcf1c228_37111689($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
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