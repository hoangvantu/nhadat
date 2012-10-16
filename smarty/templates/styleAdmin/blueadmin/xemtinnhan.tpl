{extends file="layout.tpl"}


 {block name="content" }
  <div class="box round first fullpage">
   <h2>Gửi tin nhắn</h2>
 
 
 
<div class="block ">
    {if isset($thongbaoloi)}
    <div class="message error">
                                <h5>Có lỗi khi đăng ký!</h5>
                                <p style="color:#000000">
                                    {$error}
                                </p>
                            </div>
    
    {/if}
                    <form method="get" action="guitinnhan.php">
                      
                    <table class="form" border="1">
                        
                     <tr>
                            <td class="col1">
                                <label>
                                    Người gửi</label>
                            </td>
                            <td class="col2">
                                <input type="text" disabled id="grumble " name="txtemail" value="Administrator">
                                  <input type="hidden"  id="grumble " name="nguoinhan" value="{if isset($tinnhan)}{$tinnhan.senderid}{else}3{/if}">
                            </td>
                        </tr>
                    <tr>
                            <td class="col1">
                                <label>
                                    Tiêu đề:</label>
                            </td>
                            <td class="col2">
                                <div>{$tinnhan.title}</div>
                            </td>
                        </tr>
                        
                        <tr>
                            <td class="col1">
                                <label>
                                    Nội dung:</label>
                            </td>
                            <td class="col2">
                               <div> {$tinnhan.content}</div> 
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                    <input type="submit"  class="btn btn-purple" name="btnsubmit" value="Trả lời"/>
                    </td>
                    </tr>
                    </table>
                    </form>
                </div>
   </div>
                                  {/block}