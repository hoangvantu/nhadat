<?php /* Smarty version Smarty-3.1.11, created on 2012-09-21 01:28:17
         compiled from "smarty\templates\default\menuleft.tpl" */ ?>
<?php /*%%SmartyHeaderCode:11521505bc2b1d348a0-43453501%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3d3683dbaf1dea3fd9d73c970cb31829b6ad94b0' => 
    array (
      0 => 'smarty\\templates\\default\\menuleft.tpl',
      1 => 1347864127,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '11521505bc2b1d348a0-43453501',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_505bc2b1d75a61_81393293',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_505bc2b1d75a61_81393293')) {function content_505bc2b1d75a61_81393293($_smarty_tpl) {?>
		<div class="floatleft" style="float:right;width:10%;position: fixed;left:0em;top:0em;">
			<ul id='menu' >
				<li>
					<a href="quanlytindang.php">Quản lý tin đăng</a>
					<li>
					<a href="register.php">Đăng ký</a>
						<li>
							<a href="danhsachnha.php?quan=2">Danh sách tin</a>
                      <li>
								<a href="suatin.php?newsid=9">Sửa tin</a>
							<li>
							<a href="dangtinraovat.php">Đăng tin</a>
							<li>
							<a href="view.php?newsid=12">Xem tin</a>
			</ul>
		</div>
      <?php }} ?>