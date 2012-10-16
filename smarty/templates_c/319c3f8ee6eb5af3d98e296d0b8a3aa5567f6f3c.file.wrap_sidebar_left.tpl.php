<?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 06:52:38
         compiled from "smarty\templates\inver\wrap_sidebar_left.tpl" */ ?>
<?php /*%%SmartyHeaderCode:292850705df541b2e6-13531850%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '319c3f8ee6eb5af3d98e296d0b8a3aa5567f6f3c' => 
    array (
      0 => 'smarty\\templates\\inver\\wrap_sidebar_left.tpl',
      1 => 1350370354,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '292850705df541b2e6-13531850',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_50705df55336d9_93743977',
  'variables' => 
  array (
    'nhucauid' => 0,
    'khunggiaid' => 0,
    'loainhaid' => 0,
    'quanid' => 0,
    'danhsachnhucau' => 0,
    'nhucau' => 0,
    'danhsachloainha' => 0,
    'loainha' => 0,
    'danhsachquan' => 0,
    'quan' => 0,
    'danhsachkhunggia' => 0,
    'khunggia' => 0,
    'danhsachquangcaobenphai' => 0,
    'foo' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_50705df55336d9_93743977')) {function content_50705df55336d9_93743977($_smarty_tpl) {?>﻿		  
            <div id="block-buildweb_services-vinno_property_browse" class="block block-buildweb_services">

  
  <div class="content clearfix">
    <div id="vinno-block-vinno_property_browse"  class="vinno-box-search-table" >
	<div class="box-outer">
		<div class="box-inner">
			<div class="box-inner-inner vinno-title-search-table">
									<div class="header-outer">
						<div class="header-inner">
							<h3>Bảng tìm kiếm</h3>		
						</div>	
					</div>	
								<div class="clearfix content"><div class="shell"><div class="inner-shell"><div class='property-browse'>
						<div id="block--" class="block block-">

      <h3>Hướng dẫn tìm kiếm</h3>
  
  <div class="content clearfix">
    <p>.</p>
   
<div class="faceted-search-facet faceted-search-env-property_browse faceted-search-facet--taxonomy--7 faceted-search-facet-inactive faceted-search-guided"><h3>Bán/Cho thuê</h3><div class="item-list"><ul>
<?php if (isset($_smarty_tpl->tpl_vars['nhucauid']->value)){?>
   <a href="index.php?<?php if (isset($_smarty_tpl->tpl_vars['khunggiaid']->value)){?>&khunggia=<?php echo $_smarty_tpl->tpl_vars['khunggiaid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['loainhaid']->value)){?>&loainha=<?php echo $_smarty_tpl->tpl_vars['loainhaid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['quanid']->value)){?>&quan=<?php echo $_smarty_tpl->tpl_vars['quanid']->value;?>
<?php }?>">Trở về</a> » Căn hộ, chung cư
<?php }else{ ?>
    <?php  $_smarty_tpl->tpl_vars['nhucau'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['nhucau']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachnhucau']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['nhucau']->key => $_smarty_tpl->tpl_vars['nhucau']->value){
$_smarty_tpl->tpl_vars['nhucau']->_loop = true;
?>
<li><span class="faceted-search-category"><a href="index.php?<?php if (isset($_smarty_tpl->tpl_vars['khunggiaid']->value)){?>&khunggia=<?php echo $_smarty_tpl->tpl_vars['khunggiaid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['loainhaid']->value)){?>&loainha=<?php echo $_smarty_tpl->tpl_vars['loainhaid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['quanid']->value)){?>&quan=<?php echo $_smarty_tpl->tpl_vars['quanid']->value;?>
<?php }?>&nhucau=<?php echo $_smarty_tpl->tpl_vars['nhucau']->value['nhucauid'];?>
" title="ban nha, ban nha dat, ban bat dong san"><?php echo $_smarty_tpl->tpl_vars['nhucau']->value['nhucauname'];?>
</a></span></li>
      <?php } ?>
   
<?php }?>
</ul></div></div>
<div class="faceted-search-facet faceted-search-env-property_browse faceted-search-facet--taxonomy--7 faceted-search-facet-inactive faceted-search-guided"><h3>Phân loại nhà đất</h3><div class="item-list"><ul>
<?php if (isset($_smarty_tpl->tpl_vars['loainhaid']->value)){?>
   <a href="index.php?<?php if (isset($_smarty_tpl->tpl_vars['khunggiaid']->value)){?>&khunggia=<?php echo $_smarty_tpl->tpl_vars['khunggiaid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['nhucauid']->value)){?>&nhucau=<?php echo $_smarty_tpl->tpl_vars['nhucauid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['quanid']->value)){?>&quan=<?php echo $_smarty_tpl->tpl_vars['quanid']->value;?>
<?php }?>">Trở về</a> » Căn hộ, chung cư
<?php }else{ ?>
    <?php  $_smarty_tpl->tpl_vars['loainha'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['loainha']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachloainha']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['loainha']->key => $_smarty_tpl->tpl_vars['loainha']->value){
$_smarty_tpl->tpl_vars['loainha']->_loop = true;
?>
<li><span class="faceted-search-category"><a href="index.php?<?php if (isset($_smarty_tpl->tpl_vars['khunggiaid']->value)){?>&khunggia=<?php echo $_smarty_tpl->tpl_vars['khunggiaid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['nhucauid']->value)){?>&nhucau=<?php echo $_smarty_tpl->tpl_vars['nhucauid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['quanid']->value)){?>&quan=<?php echo $_smarty_tpl->tpl_vars['quanid']->value;?>
<?php }?>&loainha=<?php echo $_smarty_tpl->tpl_vars['loainha']->value['LoainhaID'];?>
" title="ban nha, ban nha dat, ban bat dong san"><?php echo $_smarty_tpl->tpl_vars['loainha']->value['TenLoaiNha'];?>
</a></span></li>
      <?php } ?>
   
<?php }?>
</ul></div></div>
<div class="faceted-search-facet faceted-search-env-property_browse faceted-search-facet--taxonomy--7 faceted-search-facet-inactive faceted-search-guided"><h3>Địa điểm</h3><div class="item-list"><ul>
<?php if (isset($_smarty_tpl->tpl_vars['quanid']->value)){?>
   <a href="index.php?<?php if (isset($_smarty_tpl->tpl_vars['khunggiaid']->value)){?>&khunggia=<?php echo $_smarty_tpl->tpl_vars['khunggiaid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['nhucauid']->value)){?>&nhucau=<?php echo $_smarty_tpl->tpl_vars['nhucauid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['loainhaid']->value)){?>&loainha=<?php echo $_smarty_tpl->tpl_vars['loainhaid']->value;?>
<?php }?>">Trở về</a> » Căn hộ, chung cư
<?php }else{ ?>
    <?php  $_smarty_tpl->tpl_vars['quan'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['quan']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachquan']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['quan']->key => $_smarty_tpl->tpl_vars['quan']->value){
$_smarty_tpl->tpl_vars['quan']->_loop = true;
?>
<li><span class="faceted-search-category"><a href="index.php?<?php if (isset($_smarty_tpl->tpl_vars['khunggiaid']->value)){?>&khunggia=<?php echo $_smarty_tpl->tpl_vars['khunggiaid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['nhucauid']->value)){?>&nhucau=<?php echo $_smarty_tpl->tpl_vars['nhucauid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['loainhaid']->value)){?>&loainha=<?php echo $_smarty_tpl->tpl_vars['loainhaid']->value;?>
<?php }?>&quan=<?php echo $_smarty_tpl->tpl_vars['quan']->value['districtid'];?>
" title="ban nha, ban nha dat, ban bat dong san"><?php echo $_smarty_tpl->tpl_vars['quan']->value['districtname'];?>
</a></span></li>
      <?php } ?>
   
<?php }?>
</ul></div></div>
<div class="faceted-search-facet faceted-search-env-property_browse faceted-search-facet--taxonomy--7 faceted-search-facet-inactive faceted-search-guided"><h3>Khung giá </h3><div class="item-list"><ul>
<?php if (isset($_smarty_tpl->tpl_vars['khunggiaid']->value)){?>
   <a href="index.php?<?php if (isset($_smarty_tpl->tpl_vars['nhucauid']->value)){?>&nhucau=<?php echo $_smarty_tpl->tpl_vars['nhucauid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['loainhaid']->value)){?>&nhucau=<?php echo $_smarty_tpl->tpl_vars['loainhaid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['quanid']->value)){?>&quan=<?php echo $_smarty_tpl->tpl_vars['quanid']->value;?>
<?php }?>">Trở về</a> » Căn hộ, chung cư
<?php }else{ ?>
    <?php  $_smarty_tpl->tpl_vars['khunggia'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['khunggia']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachkhunggia']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['khunggia']->key => $_smarty_tpl->tpl_vars['khunggia']->value){
$_smarty_tpl->tpl_vars['khunggia']->_loop = true;
?>
<li><span class="faceted-search-category"><a href="index.php?<?php if (isset($_smarty_tpl->tpl_vars['nhucauid']->value)){?>&nhucau=<?php echo $_smarty_tpl->tpl_vars['nhucauid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['loainhaid']->value)){?>&nhucau=<?php echo $_smarty_tpl->tpl_vars['loainhaid']->value;?>
<?php }?><?php if (isset($_smarty_tpl->tpl_vars['quanid']->value)){?>&quan=<?php echo $_smarty_tpl->tpl_vars['quanid']->value;?>
<?php }?>&khunggia=<?php echo $_smarty_tpl->tpl_vars['khunggia']->value['khunggiaid'];?>
" title="ban nha, ban nha dat, ban bat dong san"><?php echo $_smarty_tpl->tpl_vars['khunggia']->value['KhungGiaName'];?>
</a></span></li>
      <?php } ?>
   
<?php }?>
</ul></div></div>

  </div>

</div>
	
				   </div></div></div></div>
			</div>
		</div>
	</div>
</div>
  </div>

</div>
<div id="block-block-18" class="block block-block">

  
  <div class="content clearfix">

	<?php if (isset($_smarty_tpl->tpl_vars['danhsachquangcaobenphai']->value)){?>
    <?php  $_smarty_tpl->tpl_vars[$_smarty_tpl->tpl_vars['foo']->value] = new Smarty_Variable; $_smarty_tpl->tpl_vars[$_smarty_tpl->tpl_vars['foo']->value]->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachquangcaobenphai']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars[$_smarty_tpl->tpl_vars['foo']->value]->key => $_smarty_tpl->tpl_vars[$_smarty_tpl->tpl_vars['foo']->value]->value){
$_smarty_tpl->tpl_vars[$_smarty_tpl->tpl_vars['foo']->value]->_loop = true;
?>
     <?php echo $_smarty_tpl->getSubTemplate ("lbi_tindang2.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

     <?php } ?>
    <?php }?>
		  </div>

</div>
<div id="block-buildweb_services-vinno_news_box" class="block block-buildweb_services">

  
  <div class="content clearfix" style="display:none">
    <div id="vinno-block-vinno_news_box"  class="vinno-box-search-table" >
	<div class="box-outer">
		<div class="box-inner">
			<div class="box-inner-inner vinno-title">
									<div class="header-outer">
						<div class="header-inner">
							<h3>Mách bạn đôi điều</h3>		
						</div>	
					</div>	
								<div class="clearfix content"><div class="shell"><div class="inner-shell"><div class='news clearfix'>
			<div class="view view-Latest-news view-id-Latest_news view-display-id-default view-dom-id-1">
    
  
  
      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first">
      
  <div class="views-field-title">
                <span class="field-content"><a href="/content/kinh-nghiem-ban-cho-thue-nha-dat.htm">Kinh nghiệm bán, cho thuê nhà đất</a></span>
  </div>
  
  <div class="views-field-field-news-teaser-value">
                <div class="field-content">Không ai mua bán nhà đất mà không tìm...</div>
  </div>
  </div>
  <div class="views-row views-row-2 views-row-even">
      
  <div class="views-field-title">
                <span class="field-content"><a href="/content/tu-lam-cac-le-cung-trong-qua-trinh-xay-nha-chuyen-nha.htm">Tự làm các lễ cúng trong quá trình xây nhà, chuyển nhà</a></span>
  </div>
  
  <div class="views-field-field-news-teaser-value">
                <div class="field-content">Các bài văn khấn cũng như cách thức sắm...</div>
  </div>
  </div>
  <div class="views-row views-row-3 views-row-odd">
      
  <div class="views-field-title">
                <span class="field-content"><a href="/content/tu-xem-tuoi-lam-nha.htm">Tự xem tuổi làm nhà</a></span>
  </div>
  
  <div class="views-field-field-news-teaser-value">
                <div class="field-content"> Tuổi để xem là “tuổi mụ”, tức là tuổi...</div>
  </div>
  </div>
  <div class="views-row views-row-4 views-row-even views-row-last">
      
  <div class="views-field-title">
                <span class="field-content"><a href="/content/giup-ban-tu-thu-xep-chuyen-nha.htm">Giúp bạn tự thu xếp chuyển nhà</a></span>
  </div>
  
  <div class="views-field-field-news-teaser-value">
                <div class="field-content"> Chuyển nhà, một công việc vừa mệt mỏi...</div>
  </div>
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
          </div> <?php }} ?>