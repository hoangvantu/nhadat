		  
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
{if isset($nhucauid)}
   <a href="index.php?{if isset($khunggiaid)}&khunggia={$khunggiaid}{/if}{if isset($loainhaid)}&loainha={$loainhaid}{/if}{if isset($quanid)}&quan={$quanid}{/if}">Trở về</a> » Căn hộ, chung cư
{else }
    {foreach from=$danhsachnhucau item=nhucau}
<li><span class="faceted-search-category"><a href="index.php?{if isset($khunggiaid)}&khunggia={$khunggiaid}{/if}{if isset($loainhaid)}&loainha={$loainhaid}{/if}{if isset($quanid)}&quan={$quanid}{/if}&nhucau={$nhucau.nhucauid}" title="ban nha, ban nha dat, ban bat dong san">{$nhucau.nhucauname}</a></span></li>
      {/foreach}
   
{/if}
</ul></div></div>
<div class="faceted-search-facet faceted-search-env-property_browse faceted-search-facet--taxonomy--7 faceted-search-facet-inactive faceted-search-guided"><h3>Phân loại nhà đất</h3><div class="item-list"><ul>
{if isset($loainhaid)}
   <a href="index.php?{if isset($khunggiaid)}&khunggia={$khunggiaid}{/if}{if isset($nhucauid)}&nhucau={$nhucauid}{/if}{if isset($quanid)}&quan={$quanid}{/if}">Trở về</a> » Căn hộ, chung cư
{else }
    {foreach from=$danhsachloainha item=loainha}
<li><span class="faceted-search-category"><a href="index.php?{if isset($khunggiaid)}&khunggia={$khunggiaid}{/if}{if isset($nhucauid)}&nhucau={$nhucauid}{/if}{if isset($quanid)}&quan={$quanid}{/if}&loainha={$loainha.LoainhaID}" title="ban nha, ban nha dat, ban bat dong san">{$loainha.TenLoaiNha}</a></span></li>
      {/foreach}
   
{/if}
</ul></div></div>
<div class="faceted-search-facet faceted-search-env-property_browse faceted-search-facet--taxonomy--7 faceted-search-facet-inactive faceted-search-guided"><h3>Địa điểm</h3><div class="item-list"><ul>
{if isset($quanid)}
   <a href="index.php?{if isset($khunggiaid)}&khunggia={$khunggiaid}{/if}{if isset($nhucauid)}&nhucau={$nhucauid}{/if}{if isset($loainhaid)}&loainha={$loainhaid}{/if}">Trở về</a> » Căn hộ, chung cư
{else }
    {foreach from=$danhsachquan item=quan}
<li><span class="faceted-search-category"><a href="index.php?{if isset($khunggiaid)}&khunggia={$khunggiaid}{/if}{if isset($nhucauid)}&nhucau={$nhucauid}{/if}{if isset($loainhaid)}&loainha={$loainhaid}{/if}&quan={$quan.districtid}" title="ban nha, ban nha dat, ban bat dong san">{$quan.districtname}</a></span></li>
      {/foreach}
   
{/if}
</ul></div></div>
<div class="faceted-search-facet faceted-search-env-property_browse faceted-search-facet--taxonomy--7 faceted-search-facet-inactive faceted-search-guided"><h3>Khung giá </h3><div class="item-list"><ul>
{if isset($khunggiaid)}
   <a href="index.php?{if isset($nhucauid)}&nhucau={$nhucauid}{/if}{if isset($loainhaid)}&nhucau={$loainhaid}{/if}{if isset($quanid)}&quan={$quanid}{/if}">Trở về</a> » Căn hộ, chung cư
{else }
    {foreach from=$danhsachkhunggia item=khunggia}
<li><span class="faceted-search-category"><a href="index.php?{if isset($nhucauid)}&nhucau={$nhucauid}{/if}{if isset($loainhaid)}&nhucau={$loainhaid}{/if}{if isset($quanid)}&quan={$quanid}{/if}&khunggia={$khunggia.khunggiaid}" title="ban nha, ban nha dat, ban bat dong san">{$khunggia.KhungGiaName}</a></span></li>
      {/foreach}
   
{/if}
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

	{if isset($danhsachquangcaobenphai)}
    {foreach from=$danhsachquangcaobenphai item=$foo}
     {include file="lbi_tindang2.tpl"}
     {/foreach}
    {/if}
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
          </div> 