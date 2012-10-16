{extends file="layout.tpl"}
{block name="footer"}
{/block}
{block name="java" append }
<script type="text/javascript">
       
 {if isset($quanid)}
      var  quanid={$quanid};
         {/if}
           {if isset($loainhaid)}
        var  quanid={$loainhaid};
         {/if}
              {if isset($nhucau)}
        var  quanid={$nhucau};
         {/if}
      {if isset($khunggia)}
        var  quanid={$khunggia};
         {/if}
        </script>


{/block}



{block name="center"}
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
     {if isset($danhsachbinhthuong)}
      {foreach from=$danhsachbinhthuong item=foo}
       {include file="lbi_tindang1.tpl"}
      {/foreach}
     {/if}
     <div class="item-list">
      
      <ul class="pager">
       {if $page==1}
        <li class="pager-current first">1</li>
        {else}
         <li class="pager-item"><a href="?page=1" title="Xem trang 1" class="active">1</a></li>
       {/if}
       {for $var=2 to $pages}
       {if $var==$page}
         <li class="pager-current">{$var}</li>
       
        {else}
          <li class="pager-item"><a href="?page={$var}" title="Xem trang {$var}" class="active">{$var}</a></li>
         
         {/if}
       
       
       {/for}
       
       <li class="pager-ellipsis">…</li>
       <li class="pager-next"><a href="?page={$page+1}" title="Trang sau" class="active">trang tiếp ›</a></li>
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
      {if isset($danhsachvip3)}
       {foreach from=$danhsachvip3 item=foo}
        {include file="lbi_tindang2.tpl"}
       {/foreach}
      {/if}
     </div>
    </div>

   </div>

  </div>
 </div> <!-- /#sidebar-right -->
</div>

{/block}