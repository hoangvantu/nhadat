<div class="content">
     {if isset($danhsachbinhthuong)}
      {foreach from=$danhsachbinhthuong item=foo}
       {include file="lbi_tindang1.tpl"}
      {/foreach}
     {/if}
     <div class="item-list">
      
      <ul class="pager">
       
       {if $firstbutton}
        
        <button> First Button</button>
         
        {/if}
       
       {if $page==1}
       
        <li class="pager-current first">1</li>
        {else}
         
         <li class="pager-item"><a href="?page=1" title="Xem trang 1" class="active">1</a></li>
       {/if}
       
       {for $var=$startloop to $endloop}
       
        {if $var eq $page}
          
         <li class="pager-current">{$var}</li>
       
        {else}
         
          <li class="pager-item"><a href="?page={$var}" title="Xem trang {$var}" class="active">{$var}</a></li>
         
         {/if}
       
       
       {/for}
      
       
       

      </ul></div></div>