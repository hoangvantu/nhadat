{extends file="layout.tpl"}
 {block name="headjava" append}
$(document).keypress(function(e)
{
  if(e.which == 13) 
  $('#change_pass_form').submit();


}
{/block}
{block name="content"}


</table>


<div class="box round first fullpage">
 <h2>
  Đổi mật khẩu thành viên</h2>
 <div class="block ">
  {if isset($thongbaoloi)}
   <div class="message warning">
    <h5>Xuất hiện lỗi!</h5>
    <p>
     {$thongbaoloi}
    </p>
   </div>

  {/if}
  <form id="change_pass_form"action="" method="POST">
   <table class="form">
    <input type="hidden" name="userid" value="{$thanhvien.UserID}"/>
    <tr>
     <td class="col1">
      <label>
       Email  </label>
     </td>
     <td class="col2">
      <input type="text" id="grumble" value="{$thanhvien.Email}" disabled/>
     </td>
    </tr>
    <tr>
     <td class="col1">
      <label>
       Mật khẩu cũ</label>
     </td>
     <td class="col2">
      <input type="text" id="grumble" name="oldpass" />
     </td>
    </tr>
    <tr>
     <td>
      <label>
       Mật khẩu mới</label>
     </td>
     <td>
      <input  type="password" {if isset($pass_retype)}class="error" {/if} name="newpass" />
     </td>
    </tr>
    <tr>
     <td>
      <label>
       Điền lại mật khẩu mới</label> 
     </td>
     <td>
      <input type="password" {if isset($pass_retype)}class="error" {/if}name="newpass_retype"/> 


      {if isset($pass_retype)}
       {$pass_retype}
      {/if}
      </div>
     </td>
    </tr>

    <tr>
     <td>  <input type="submit" class="btn btn-teal" value="Đổi mật khẩu" /></td>
     <td> </td>

    </tr>

   </table>
  </form>
 </div>
</div>




{/block}