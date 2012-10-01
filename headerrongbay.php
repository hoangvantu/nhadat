 <div id="header_top_t">
    <script>
						var IS_LOGIN = 0, ZONE_ID = 0, itemPackage = {"1":{"num_up":40,"transfer":15000,"sms":45000,"card":20000},"2":{"num_up":100,"transfer":40000,"sms":90000,"card":50000},"3":{"num_up":150,"transfer":50000,"sms":150000,"card":80000},"4":{"num_up":300,"transfer":100000,"sms":300000,"card":150000},"5":{"num_up":600,"transfer":200000,"sms":600000,"card":240000},"6":{"num_up":900,"transfer":300000,"sms":900000,"card":380000},"7":{"num_up":1600,"transfer":500000,"sms":1605000,"card":600000}}, user_id=0, user_email = "", cate_otp = [15,19,2,272,69,264], pay_services = {"RBU01":{"type":1,"value":150,"price":50000,"price_format":"50.000","des":"150 l\u01b0\u1ee3t up"},"RBU02":{"type":1,"value":300,"price":100000,"price_format":"100.000","des":"300 l\u01b0\u1ee3t up"},"RBU03":{"type":1,"value":600,"price":200000,"price_format":"200.000","des":"600 l\u01b0\u1ee3t up"},"RBU04":{"type":1,"value":1600,"price":500000,"price_format":"500.000","des":"1.600 l\u01b0\u1ee3t up"},"RBU05":{"type":1,"value":3300,"price":1000000,"price_format":"100.0000","des":"3.300 l\u01b0\u1ee3t up"},"RBU06":{"type":1,"value":5200,"price":1500000,"price_format":"1.500.000","des":"5.200 l\u01b0\u1ee3t up"},"RBU07":{"type":1,"value":7000,"price":2000000,"price_format":"2.000.000","des":"7.000 l\u01b0\u1ee3t up"},"RBU08":{"type":1,"value":10500,"price":3000000,"price_format":"3.000.000","des":"10.500 l\u01b0\u1ee3t up"},"RBU09":{"type":1,"value":14500,"price":4000000,"price_format":"4.000.000","des":"14.500 l\u01b0\u1ee3t up"},"RBU10":{"type":1,"value":18500,"price":5000000,"price_format":"5.000.000","des":"18.500 l\u01b0\u1ee3t up"},"RBU11":{"type":1,"value":40000,"price":10000000,"price_format":"10.000.000","des":"40.000 l\u01b0\u1ee3t up"}}, user_name = "", user_mobile = "", OPEN_POPUP_CITY=1,CURRENT_CITY_ID = 1;</script>
    
    <script>
    OID_URL 	= "http://security.rongbay.com/index.html?openid_identifier=http://me.yahoo.com/&long_redirect=";
    OID_URL_GOG = "http://security.rongbay.com/index.html?openid_identifier=https://www.google.com/accounts/o8/id&long_redirect=";
    MOBILE_LOGIN = "";
    
    eb_user_info 		= {full_name:'', mobile:user_mobile, dia_chi:'', thanh_pho:1, thoi_gian:1, ngay:2, txt_thanhpho:'', txt_ngay:'', txt_thoigian:''};
    
    </script>
        
    <script language="javascript">
        jQuery().ready(function() {
            jQuery("#input_searchword").autocomplete("ajax.php?act=misc&code=autocomplete", {
                width: 345,
                selectFirst: false,
                max: 10,
                scroll: false
            });            
			jQuery("#input_searchword").result(function (event, data, formatted)
			{
				jQuery('#frmSearch').submit();
			});			 
        });
    </script>
    
                
        <script lang="javascript">
            jQuery(document).ready(function(){
                if (CURRENT_CITY_ID==0 && OPEN_POPUP_CITY==1) 
            {
                overlaySelectCity(); //Nếu chưa chọn 1 tỉnh thành nào thì hiển thị popup chọn tỉnh thành
            }
    });
        </script>    
        
            
        		                
        <div class="header_top_t">
            <div class="logo">
                <a href="/" title="Chào mừng ngày quốc khánh 2-9"><img src="http://rongbay2.vcmedia.vn/logo/1346149572.4633.png" border="0" alt="Rao vặt RongBay.com" height="44" /></a>            </div>
            <form name="frmSearch" id="frmSearch" method="get" action="Ha-Noi/search.html" onSubmit="return doSubmit()">
            <div class="search_t">
                <div class="searchLeftOn" id="keyStatus">
                    <a href="javascript:void(0)" onclick="changeKeyboard('keyStatus')">
                    <img width="27" height="27" border="0" src="style/images/spacer.gif"></a>
                </div>
                <div class="center_search">
                    <input type="text" onfocus="javascript:if(this.value=='Nhập từ khóa tìm kiếm'){this.value='';};" onblur="javascript:if(this.value==''){this.value='Nhập từ khóa tìm kiếm';};" value="Nhập từ khóa tìm kiếm" id="input_searchword" name="searchword" class="txt_search" maxlength="100" />&nbsp;				
                </div>
                <div class="right_search" style="float:left">
                    <div onmouseout="this.className='searchBtn'" onmouseover="this.className='searchBtnOn'" onclick="javascript:return doSubmit(0);" class="searchBtn"></div>
                </div>
            </div>
            </form>
            <div id="Hmenu">
                <div class="mnItem">
                                                            
                        <script type="text/javascript">
                            var close_div_login = 0;
        
                            jQuery('body').click(function(){
                                if(close_div_login)
                                {
                                    overlayclose('divLogin');
                                }
                            });
                            
                            jQuery(document).keydown(
                                function(event){
                                    if (event.keyCode == 27){
                                        overlayclose('divLogin');
                                    }
                                }
                            );
                            function show_login_box(obj,divtag,pos)
                            {
                                close_div_login = 0;
                                
                                overlay(obj,divtag,pos);
                                document.HeaderForm.user_email.focus();
                                return false;
                            };
                        </script>
                        
                        <a rel="nofollow" href="javascript:void(0);" onclick="overlayclose('divLogin');return shop.cart.frmViewCart(0,0,1);" class="hm_link_login" style="background:none; padding-right:0">Quản lý tin đăng</a>
                        <a rel="nofollow" href="sign_in.html?href=" onClick="show_login_box(this, 'divLogin', 'rightbottom');document.getElementById('divLogin').style.left='-95px'; document.getElementById('divLogin').style.top='40px'; return false;" class="hm_link_login" >Đăng nhập</a>
                        <a rel="nofollow" href="register.html" class="hm_link_login">Đăng ký</a>
                                                </div>
            
            <div id="divLogin" onmouseover="close_div_login = 0;" onmouseout="close_div_login = 1;">
                <form name="HeaderForm" id="HeaderForm"  method="POST"  enctype="multipart/form-data"  ><input type="hidden" name="form_block_id" value="48878">
                    <table border="0" cellpadding="0" style="border-collapse:collapse" width="100%">
                        <tr>
                            <td id="tdUsername" width="80px">E-mail:</td>
                            <td><input type="text" class="txtBox" name="user_email" id="user_email" size="20"/></td>
                        </tr>
                        <tr>
                            <td id="tdPassword">Mật khẩu:</td>
                            <td><input type="password" class="txtBox" name="user_password" id="user_password" size="20"/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="checkbox" name="set_cookie" id="set_cookie" value="1"/> <label for="set_cookie" style="font-size:10px">Nhớ mật khẩu</label></td>
        
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
                            <input name="oki" value="Đăng nhập" onclick="" type="hidden" />
                             <input class="btnQLogin" type="submit" name="submit" value="">
                             &nbsp;&nbsp; <a href="#" onClick="overlayclose('divLogin'); return false;">[Đóng]</a> &nbsp;&nbsp;<a onClick="overlayclose('divLogin');" href="sign_in.html#forgetpass">[Quên mật khẩu?]</a></td>
                        </tr>
                                                <tr>
                            <td colspan="2" align="center">
                                <div class="othrAcc"> Đăng nhập dùng nick : <a onmouseout="this.className='google'" onmouseover="this.className='googleOver'" class="google" href="http://security.rongbay.com/index.html?openid_identifier=https://www.google.com/accounts/o8/id&long_redirect=" title="Đăng nhập vào RồngBay bằng nick Google tại Google.com">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Google</a> hoặc &nbsp;<a onmouseout="this.className='yahoo'" onmouseover="this.className='yahooOver'" class="yahoo" href="http://security.rongbay.com/index.html?openid_identifier=http://me.yahoo.com/&long_redirect=" title="Đăng nhập vào RồngBay bằng nick Yahoo tại Yahoo.com">Yahoo</a>
                                                                </div>
                            </td>
                        </tr>
                                            </table>
                </form>	
            </div>
        </div>
    </div>
    </div>
    