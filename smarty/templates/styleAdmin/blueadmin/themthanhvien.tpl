{extends file="layout.tpl"}
 {block name="content" }
 
 <div class="box round first fullpage">
   <h2>Thêm Thành Viên:</h2>
 
 
 
<div class="block ">
    {if isset($thongbaoloi)}
    <div class="message error">
                                <h5>Có lỗi khi đăng ký!</h5>
                                <p style="color:#000000">
                                    {$thongbaoloi}
                                </p>
                            </div>
    
    {/if}
                    <form method="post" action="">
                      
                    <table class="form" border="1">
                        
                    
                    <tr>
                            <td class="col1">
                                <label>
                                    email:</label>
                            </td>
                            <td class="col2">
                                <input type="email" id="grumble " name="txtemail">
                            </td>
                        </tr>
                        
                        <tr>
                            <td class="col1">
                                <label>
                                    Name:</label>
                            </td>
                            <td class="col2">
                                <input type="text" id="grumble " name="txtname">
                            </td>
                        </tr>
                        <tr>
                            <td class="col1">
                                <label>
                                    Password:</label>
                            </td>
                            <td class="col2">
                                <input type="password" id="grumble" name="txtpass">
                            </td>
                        </tr>
                        <tr>
                            <td class="col1">
                                <label>
                                    Retype Password:</label>
                            </td>
                            <td class="col2">
                                <input type="password" name="txtpass2">
                            </td>
                        </tr>
                        <tr>
                            <td class="col1">
                                <label>
                                    Telephone:</label>
                            </td>
                            <td class="col2">
                                <input type="text" id="grumble " name="txtphone">
                            </td>
                        </tr>
                        <tr>
                            <td>
                    <input type="submit" class="btn btn-purple" name="btnsubmit" value="Thêm thànnh viên"/>
                    </td>
                    </tr>
                    </table>
                    </form>
                </div>
   </div>
 
 {/block}