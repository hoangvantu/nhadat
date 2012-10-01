{capture name=some_content assign=dangtindang}

{/capture}


<div class="top-content">
 <div id="block-block-7" class="block block-block">


  <div class="content clearfix">

   <div class='new-daily clearfix'>
    <div class='title'> Tin mới hàng ngày</div>
    <div class='date'> - &nbsp;&nbsp;&nbsp;&nbsp;Thứ 5, Ngày 20/09/2012 </div>
    <div class='opportunity' style='color: #A70B0C;'>Cơ hội hấp dẫn </div>
   </div>
  </div>

 </div>
</div>	
<!-- end topcontent -->	
<div class="clearfix content-and-right">	
 <div class="main-content" style="float: left;">
  <div class="faceted-search-page faceted-search-stage-results faceted-search-env-property_browse"><div class="faceted-search-numbering">Kết quả</div><div class="box">

    <h2>Tin mới hôm nay</h2>

    <div class="content">
     {if isset($danhsachnha)}
      {foreach from=$danhsachnha item=foo}
       {include file="lbi_tindang1.tpl"}
      {/foreach}
     {/if}
     <div class="item-list"><ul class="pager"><li class="pager-current first">1</li>
       <li class="pager-item"><a href="?themes=inver&page=1" title="Xem trang 2" class="active">2</a></li>
       <li class="pager-item"><a href="?themes=inver&page=2" title="Xem trang 3" class="active">3</a></li>
       <li class="pager-item"><a href="?themes=inver&page=3" title="Xem trang 4" class="active">4</a></li>
       <li class="pager-item"><a href="?themes=inver&page=4" title="Xem trang 5" class="active">5</a></li>
       <li class="pager-item"><a href="?themes=inver&page=5" title="Xem trang 6" class="active">6</a></li>
       <li class="pager-item"><a href="?themes=inver&page=6" title="Xem trang 7" class="active">7</a></li>
       <li class="pager-item"><a href="?themes=inver&page=7" title="Xem trang 8" class="active">8</a></li>
       <li class="pager-item"><a href="?themes=inver&page=8" title="Xem trang 9" class="active">9</a></li>
       <li class="pager-ellipsis">…</li>
       <li class="pager-next"><a href="/ha-noi.htm?page=1" title="Trang sau" class="active">trang tiếp ›</a></li>
       <li class="pager-last last"><a href="/ha-noi.htm?page=15" title="Trang cuối" class="active">trang cuối »</a></li>
      </ul></div></div>
   </div>
  </div>
  <div id="block-block-5" class="block block-block">


   <div class="content clearfix">
    <div id="vinno-block-vinno_wishlist2" >
     <div class="box-outer">
      <div class="box-inner">
       <div class="box-inner-inner vinno-title7">
        <div class="header-outer">
         <div class="header-inner">
          <h3>Nhà đất cần bán (cho thuê) gấp</h3>		
         </div>	
        </div>	
        <div class="clearfix content"><div class="shell"><div class="inner-shell"><div class='wishlist'>
 {if isset($danhsachvip1) and ($danhsachvip1 != false)}
            {foreach from=$danhsachvip1 item=foo}
 {include file="lbi_tindang1.tpl"}

            {/foreach}
 {/if}

            <div class="item-list">
             <ul class="pager"><li class="pager-current first">1</li>
              <li class="pager-item"><a href="/ha-noi.htm?page=1" title="Xem trang 2" class="active">2</a></li>
              <li class="pager-item"><a href="/ha-noi.htm?page=2" title="Xem trang 3" class="active">3</a></li>
              <li class="pager-item"><a href="/ha-noi.htm?page=3" title="Xem trang 4" class="active">4</a></li>
              <li class="pager-item"><a href="/ha-noi.htm?page=4" title="Xem trang 5" class="active">5</a></li>
              <li class="pager-item"><a href="/ha-noi.htm?page=5" title="Xem trang 6" class="active">6</a></li>
              <li class="pager-item"><a href="/ha-noi.htm?page=6" title="Xem trang 7" class="active">7</a></li>
              <li class="pager-item"><a href="/ha-noi.htm?page=7" title="Xem trang 8" class="active">8</a></li>
              <li class="pager-item"><a href="/ha-noi.htm?page=8" title="Xem trang 9" class="active">9</a></li>
              <li class="pager-ellipsis">…</li>
              <li class="pager-next"><a href="/ha-noi.htm?page=1" title="Trang sau" class="active">trang tiếp ›</a></li>
              <li class="pager-last last"><a href="/ha-noi.htm?page=627" title="Trang cuối" class="active">trang cuối »</a></li>
             </ul></div></div></div></div></div>
       </div>
      </div>
     </div>
    </div>
   </div>

  </div>
 </div>
 <div id="sidebar-right" class="sidebar sidebar-right" style="float: right; margin-right:5px;">
  <div id="block-block-4" class="block block-block">


   <div class="content clearfix">

    <div class="clearfix">
     <div style="float: left;width: 49%;">
      {if isset($danhsachvip2)}
       {foreach from=$danhsachvip2 item=foo}
        {include file="lbi_tindang2.tpl"}
       {/foreach}
      {/if}

     </div>
     <div style="float: right;width: 49%;">
      {if isset($danhsachvip2)}
       {foreach from=$danhsachvip2 item=foo}
        {include file="lbi_tindang2.tpl"}
       {/foreach}
      {/if}
     </div>
    </div>

   </div>

  </div>
 </div> <!-- /#sidebar-right -->
</div>
