<?php /* Smarty version Smarty-3.1.11, created on 2012-10-14 12:55:06
         compiled from "smarty\templates\inver\ajax_phantrang.tpl" */ ?>
<?php /*%%SmartyHeaderCode:13805507aa82c91b274-35851623%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c0fed31a6aa884535eae8671c38c61cc4e2f4d0a' => 
    array (
      0 => 'smarty\\templates\\inver\\ajax_phantrang.tpl',
      1 => 1350219292,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13805507aa82c91b274-35851623',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_507aa82cd7d234_20609783',
  'variables' => 
  array (
    'danhsachbinhthuong' => 0,
    'firstbutton' => 0,
    'page' => 0,
    'startloop' => 0,
    'endloop' => 0,
    'var' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_507aa82cd7d234_20609783')) {function content_507aa82cd7d234_20609783($_smarty_tpl) {?><div class="content">
     <?php if (isset($_smarty_tpl->tpl_vars['danhsachbinhthuong']->value)){?>
      <?php  $_smarty_tpl->tpl_vars['foo'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['foo']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachbinhthuong']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['foo']->key => $_smarty_tpl->tpl_vars['foo']->value){
$_smarty_tpl->tpl_vars['foo']->_loop = true;
?>
       <?php echo $_smarty_tpl->getSubTemplate ("lbi_tindang1.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

      <?php } ?>
     <?php }?>
     <div class="item-list">
      
      <ul class="pager">
       
       <?php if ($_smarty_tpl->tpl_vars['firstbutton']->value){?>
        
        <button> First Button</button>
         
        <?php }?>
       
       <?php if ($_smarty_tpl->tpl_vars['page']->value==1){?>
       
        <li class="pager-current first">1</li>
        <?php }else{ ?>
         
         <li class="pager-item"><a href="?page=1" title="Xem trang 1" class="active">1</a></li>
       <?php }?>
       
       <?php $_smarty_tpl->tpl_vars['var'] = new Smarty_Variable;$_smarty_tpl->tpl_vars['var']->step = 1;$_smarty_tpl->tpl_vars['var']->total = (int)ceil(($_smarty_tpl->tpl_vars['var']->step > 0 ? $_smarty_tpl->tpl_vars['endloop']->value+1 - ($_smarty_tpl->tpl_vars['startloop']->value) : $_smarty_tpl->tpl_vars['startloop']->value-($_smarty_tpl->tpl_vars['endloop']->value)+1)/abs($_smarty_tpl->tpl_vars['var']->step));
if ($_smarty_tpl->tpl_vars['var']->total > 0){
for ($_smarty_tpl->tpl_vars['var']->value = $_smarty_tpl->tpl_vars['startloop']->value, $_smarty_tpl->tpl_vars['var']->iteration = 1;$_smarty_tpl->tpl_vars['var']->iteration <= $_smarty_tpl->tpl_vars['var']->total;$_smarty_tpl->tpl_vars['var']->value += $_smarty_tpl->tpl_vars['var']->step, $_smarty_tpl->tpl_vars['var']->iteration++){
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
      
       
       

      </ul></div></div><?php }} ?>