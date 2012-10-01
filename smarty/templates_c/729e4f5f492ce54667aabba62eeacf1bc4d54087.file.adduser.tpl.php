<?php /* Smarty version Smarty-3.1.11, created on 2012-09-27 00:48:39
         compiled from "..\smarty\templates\styleAdmin\blueadmin\adduser.tpl" */ ?>
<?php /*%%SmartyHeaderCode:255155062837c0f5742-15481849%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '729e4f5f492ce54667aabba62eeacf1bc4d54087' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\adduser.tpl',
      1 => 1348633606,
      2 => 'file',
    ),
    '5c9b732e7a183b501f3719781b8bd998024ce21e' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\layout.tpl',
      1 => 1348671395,
      2 => 'file',
    ),
    '8a48e3331a7d9f9f03f5e1db17b60f3bf0d666b7' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\headcss.tpl',
      1 => 1348622034,
      2 => 'file',
    ),
    '0fc3d3f5d0caae3f65ebc50f770b3e2d52a1d326' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\headjava.tpl',
      1 => 1348622542,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '255155062837c0f5742-15481849',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_5062837c60c174_86976380',
  'variables' => 
  array (
    'page_title' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5062837c60c174_86976380')) {function content_5062837c60c174_86976380($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <meta http-equiv="content-type" content="text/html; charset=utf-8" />

 <title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>
 
<?php /*  Call merged included template "headcss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headcss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '255155062837c0f5742-15481849');
content_5063a267e90f38_33297329($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headcss.tpl" */?>
 
 
 <?php /*  Call merged included template "headjava.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headjava.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '255155062837c0f5742-15481849');
content_5063a268169711_15490961($_smarty_tpl);
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
                <h2>
                    Form Controls</h2>
                <div class="block ">
                    <form>
                    <table class="form">
                        <tr>
                            <td class="col1">
                                <label>
                                    Normal Input</label>
                            </td>
                            <td class="col2">
                                <input type="text" id="grumble" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Small Input</label>
                            </td>
                            <td>
                                <input type="text" class="mini" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Medium Sized Input</label>
                            </td>
                            <td>
                                <input type="text" class="medium" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Large Input</label>
                            </td>
                            <td>
                                <input type="text" class="large" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Error</label>
                            </td>
                            <td>
                                <input type="text" class="error" />
                                <span class="error">This is a required field.</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Success</label>
                            </td>
                            <td>
                                <input type="text" class="success" />
                                <span class="success">Email address verfified.</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Warning</label>
                            </td>
                            <td>
                                <input type="text" class="warning" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="error">
                                    Label Error</label>
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Checkboxes</label>
                            </td>
                            <td>
                                <input type="checkbox" />Checkbox 1
                                <input type="checkbox" />Checkbox 2
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Radio Buttons</label>
                            </td>
                            <td>
                                <input type="radio" name="rd1" />
                                Male
                                <input type="radio" name="rd1" />
                                Female
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Select</label>
                            </td>
                            <td>
                                <select id="select" name="select">
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Progress Bar</label>
                            </td>
                            <td>
                                <div id="progress-bar">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Dialog Box</label>
                            </td>
                            <td>
                                <div id="dialog" title="Basic dialog">
                                    <p>
                                        This is an animated dialog which is useful for displaying information. The dialog
                                        window can be moved, resized and closed with the 'x' icon.</p>
                                </div>
                                <button id="opener">
                                    Open Dialog</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Date Picker</label>
                            </td>
                            <td>
                                <input type="text" id="date-picker" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Attach File</label>
                            </td>
                            <td>
                                <input type="file" />
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: top; padding-top: 9px;">
                                <label>
                                    WYSIWYG Editor</label>
                            </td>
                            <td>
                                <textarea class="tinymce"></textarea>
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
 </html><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-27 00:48:39
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headcss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_5063a267e90f38_33297329')) {function content_5063a267e90f38_33297329($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\Nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
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
  <?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-09-27 00:48:40
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headjava.tpl" */ ?>
<?php if ($_valid && !is_callable('content_5063a268169711_15490961')) {function content_5063a268169711_15490961($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\Nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
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