   {block name="wrap_header"}
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
			  <embed wmode="opaque" height="88" width="733"  src="{$smarty.current_dir}/images/vinno.swf" play="true" loop="true" menu="true"></embed>
		
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
			<iframe id="mapselector" src="{$smarty.current_dir}/mapselect/mapselector.php_1413875960.jpg" width="935" height="500"></iframe>    
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
  {foreach from=$danhsachtinh item=tinh}
  <option value="{$tinh.ProvinceID}" {if isset($provinceselect)}{if {$tinh.ProvinceID} eq {$provinceselect}} selected="selected" {/if} {/if} >{$tinh.ProvinceName}</option>
 {/foreach}
 
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
  
 {foreach from=$danhsachloainha item=loainha}
  <option value="{$loainha.LoainhaID}" {if isset($loainhaid)}{if {$loainha.LoainhaID} eq {$loainhaid}} selected="selected" {/if} {/if} >{$loainha.TenLoaiNha}</option>
 {/foreach}
 </select>
</div>
</div>
 <div class='provine province_district_item other_item' ><div class="form-item" id="edit-province-wrapper">
 <label for="edit-province">Khung giá </label>
 <select name="khunggia" id="current_district" class="form-select" id="edit-province" ><option value="0">Khung giá:</option>
  
 {foreach from=$danhsachkhunggia item=khunggia}
  <option value="{$khunggia.khunggiaid}" {if isset($khunggiaid)}{if {$khunggia.khunggiaid} eq {$khunggiaid}} selected="selected" {/if} {/if} >{$khunggia.KhungGiaName}</option>
 {/foreach}
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
				
		<embed wmode="opaque" height="89" width="653"  src="{$smarty.current_dir}/images/top_adv_new_09.swf" play="true" loop="true" menu="true"></embed>

		
	</div>

	<div style="float:right;width: 341px;background-color: #FFFFFF;height:89px;border: 1px solid #F8DE42;">
<a href="http://www.NLPu.vn" rel="nofollow" target="_blank"><img height="89" width="341" src="{$smarty.current_dir}/images/qc-khoahoc.jpg" /></a>

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
{/block}