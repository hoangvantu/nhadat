


{if isset($error)}
 <div style="color:red">{$error}</div>
 {/if}

<form name="Register" id="Register"  method="post"  ><input type="hidden" name="form_block_id" value="49475"><div class="divLayout">
	<h1 class="Header" style="font-size:11px"><span>Đăng ký thành viên</span></h1>


<div class="register">
    
	  <script type="text/javascript">
		
		jQuery().ready(function(){
			jQuery('#email').focus();
			
		});
		
		</script>
		 
		<p style="margin-bottom:5px; font-weight:bold; margin-left:25px">L&#7907;i &#237;ch khi &#273;&#259;ng k&#253; v&#224; sử dụng dịch vụ rao vặt của chúng tôi?</p>
		<ul>
			<li>+ Đăng tin rao vặt miễn phí.</li>
			<li>+ Bảng điều khiển giúp cho đăng tải được dễ dàng. </li>
			<li>+ Bảng thống kê tài khoản trên các tin rao.</li>
			<li>+ Lên lịch Up tin theo ý muốn.</li>
			<li>+ Và rất nhiều các tiện ích khác.</li>
        </ul>
		<br />
	  	      
                  
  		
                  <table cellspacing="0" cellpadding="0" class="RegisterPage" width="80%">
            <tr>
                 <td class="label">&#272;&#7883;a ch&#7881; E-mail:</td>
                 <td valign="top" class="star">
                 <input type="text" tooltipText="Vui l&#242;ng nh&#7853;p ch&#237;nh x&#225;c e-mail c&#7911;a b&#7841;n" name="email" id="email" class="txt" size="30" maxlength="100" value=""   onblur="if (this.value!='') makeRequest();"/> <span class="risk">*</span><span id='loading'></span></td>
            </tr>
            <tr>
                 <td class="label">T&#234;n &#273;&#7847;y &#273;&#7911;:</td>
                 <td valign="top" class="star">
                 <input tooltipText="Vui l&#242;ng cung c&#7845;p t&#234;n c&#7911;a b&#7841;n &#273;&#7875; tin rao &#273;&#432;&#7907;c &#273;&#225;nh gi&#225; cao h&#417;n" type="text" name="full_name" id="full_name" class="txt" size="30" maxlength="100" value="" /> <span class="risk">*</span></td>
            </tr>
            <tr>
                 <td class="label">M&#7853;t kh&#7849;u (t&#7889;i thi&#7875;u 6 k&#253; t&#7921;):</td>
                 <td valign="top" class="star">
                 <input  tooltipText="M&#7853;t kh&#7849;u t&#7889;i thi&#7875;u ph&#7843;i ch&#7913;a 6 k&#253; t&#7921;, kh&#244;ng s&#7917; d&#7909;ng kho&#7843;ng tr&#7855;ng" type="password" name="register_password" id="register_password" class="txt" size="16" maxlength="16" value="" /> <span class="risk">*</span></td>
            </tr>
            <tr>
                 <td class="label">G&#245; l&#7841;i m&#7853;t kh&#7849;u:</td>
                 <td valign="top" class="star">
                 <input type="password" class="txt" name="confirm_password" id="confirm_password" size="16" maxlength="16" value="" /> <span class="risk">*</span></td>
            </tr>
            <tr>
                 <td class="label">Số điện thoại di động:</td>
                 <td valign="top" class="star">
                  <input tooltipText="Nhập chính xác số điện thoại di động của bạn để có thể quản lý tin dễ dàng hơn" type="text" name="mobile_phone" id="mobile_phone" class="txt" size="16" maxlength="12" value="" /></td>
            </tr>
                        <tr>
                 <td class="label">Mã bảo mật:</td>
                 <td valign="top" class="star">
                 	<div class="floatLeft">
                    	<img id="captcha_img" alt="captcha" src="captcha.php" style="margin-right:10px" /><img id="reload_button" onclick="fn_reload_captcha()" src="style/images/indicator_arrows_static.gif" title="Tạo mã khác" alt="Tạo mã khác" class="creatNewCaptchaButton">
                    </div>
              		
                    <input name="captcha_register" type="text" id="captcha_register" maxlength="100"  style="width:50px;">
                 </td>
            </tr>
                           
            <tr>
              <td valign="top" class="label">L&#7921;a ch&#7885;n th&#234;m:</td>
              <td>
              <input type="checkbox" name="user_newsletter" id="user_newsletter" value="1" checked="checked" /> <label for="user_newsletter">Nh&#7853;n b&#7843;n tin qua e-mail</label><br />
              
             <input type="checkbox" name="user_hide_email" id="user_hide_email" value="1" /> <label for="user_hide_email">Gi&#7845;u e-mail c&#7911;a t&#244;i</label>
             
             <br /><br />
             
             <input onclick="change_confirm()" name="confirm_register" value="1" type="checkbox" id="confirm_register" />
             
             <label class="register-confirm"  for="confirm_register">Tôi chấp nhận những <a href="http://blog.rongbay.com/2008/10/21/quy-dinh-dang-tin-tren-rongbaycom-va-cac-doi-tac/" target="_blank">&#273;i&#7873;u kho&#7843;n của RongBay.com</a></label> 
             
             <span class="risk">*</span>
             </td>
            </tr>    
            <tr>
                <td>&nbsp;</td>
                 <td><br />
                 	<input type="submit" name="submit" id="submit"  value="Hoàn tất đăng ký" class="buttonDisabled" disabled="disabled" style="height:28px"/>
                 </td>
            </tr>
            </table>
          </div>
        
        
        </div>


<script type="text/javascript">
	var tooltipObj = new DHTMLgoodies_formTooltip();
	tooltipObj.setTooltipPosition('right');
	tooltipObj.setPageBgColor('#EEEEEE');
	tooltipObj.setTooltipCornerSize(10);
	tooltipObj.initFormFieldTooltip();
</script>
</form>	