{block name="dsn"}
   {if isset($danhsachnha)}
<div id="huongdan">Các bạn click vào tiêu đề tin để xem chi tiết nhé</div>
    <table style="border:1"">
        <tr>
    	<td>Tiêu đề</td>
    	<td>Nội dung</td> 
    	<td>Số điện thoại</td>
    	<td>Thời gian đăng</td>
        </tr>
 
   {foreach from=$danhsachnha item=foo}
	    <tr>
		<td><a href="view.php?newsid={$foo.NewsID}">{$foo.Title}</a></td>
		<td>{$foo.Content}</td> 
		<td>{$foo.PhoneNumber}</td>
		<td>{$foo.DateTime}</td>
	    </tr>
       {/foreach}
       {else}
       <div id="huongdan">Khong co tin nao dang trong muc nay nhe</div>
 
   {/if}
  </table>       
       {/block}