var service_code = '';
var pay_type = 0;
var pTop = jQuery(window).scrollTop() + 50;
var user_info = {email:'', fullname:'',mobile_phone:'',dia_chi:'',user_id:''};

/*DungNH create 3/1/2011*/
function show_pay_ovl(popUpContent)
{
	var maxH = document.documentElement.clientHeight;
	
	if(maxH >=1024)
	{
		maxH = 188;
	}
	else{
		maxH = 66;
	}
	
	jQuery.blockUI({message: popUpContent ,
		overlayCSS: {
			opacity: 0.9,
			background:'#000000',
			algin:'center'
		},
		css: {
			position: 'absolute',
			border: 'none',
			width:'100%',
			top:maxH + 'px',
			left:0,
			backgroundColor: 'transparent'
	}});
}

function backStepZero(){
	user_info.email = jQuery.trim(jQuery("#email_pay").val());
    user_info.fullname = jQuery.trim(jQuery("#ho_ten").val());
    user_info.mobile_phone = jQuery.trim(jQuery("#dien_thoai").val());
    user_info.dia_chi = jQuery.trim(jQuery("#dia_chi").val());
	show_pay_ovl(template.choosePaymentTypes());
}

function validateUserInfo(flg)
{
	var email = jQuery.trim(jQuery("#email_pay").val());
	//check input
    if(email == '')
    {
        alert("Hãy nhập email");
        jQuery("#email_pay").focus();
        return false;
    }
    
    if(email != '' && !is_email(email))
    {
    	alert("Hãy nhập đúng thông tin email");
    	jQuery("#email_pay").focus();
        return false;
    }
    
    if(jQuery.trim(jQuery("#ho_ten").val()) == '')
    {
        alert("Hãy nhập họ tên");
        jQuery("#ho_ten").focus();
        return false;
    }

    if(jQuery.trim(jQuery("#dien_thoai").val()) == "")
    {
        alert("Hãy nhập điện thoại.");
        jQuery("#dien_thoai").focus();
        return false;
    }
    else if(isNaN(jQuery.trim(jQuery("#dien_thoai").val())))
    {
        alert("Điện thoại phải nhập số");
        jQuery("#dien_thoai").focus();
        return false;
    }
    else if((jQuery.trim(jQuery("#dia_chi").val()) == "") && flg)
    {
        alert("Hãy nhập địa chỉ");
        jQuery("#dia_chi").focus();
        return false;
    }
    return true;
}

function stepTwo(){
	var flg = false;
    if(pay_type == 2)
    	flg = true;
    if(!validateUserInfo(flg))
    	return false;
   
    user_info.email = jQuery.trim(jQuery("#email_pay").val());
    user_info.fullname = jQuery.trim(jQuery("#ho_ten").val());
    user_info.mobile_phone = jQuery.trim(jQuery("#dien_thoai").val());
    user_info.dia_chi = jQuery.trim(jQuery("#dia_chi").val());
 
    show_pay_ovl(template.confirmPayment.confirmContent());
}

//------------------------------------TEMPLATE-------------------------------------------------//
var template = {
    choosePaymentTypes:function(){    
        stepZero = join
            ('<div style="margin:0 auto;width:775px" class="new-popup">')
                ('<div class="new-popup-title"><div class="bgl"><div class="bg"><div class="floatLeft">Các hình thức thanh toán trực tuyến</div><a title="Đóng" class="new-popup-close" onclick = "close_choose_payment();" href="javascript:void(0)" id="no_thank">x</a><div class="clear"></div></div></div></div>')
                    
                	('<div style="padding:20px;" class="content">')//begin thanh toan online
                    	('<div style="font-size:20px;font-weight:bold;height:25px;padding:5px">')
                            ('<input type="radio" value="1" id="pay_online" name="pay_rbu" ' + (pay_type == 1 ? 'checked="checked"' : '') + ' onclick="check_rbu_type(1)"/>&nbsp;<label for="pay_online" onclick="check_rbu_type(1)">Thanh toán online</label>')
                        ('</div>')
                        
                        ('<div id="visa" style="margin-left:15px">')
                        	('<div class="blockCheckOut">')
	                        	('<div class="checkOutBox">')
		                        	('<div class="paymentCheckOut floatLeft">')
		                        		('<div class="visa fixPng"></div>')
		                        	('</div>')
		                        	('<div class="paymentContent floatLeft">')
		                        		('<div class="paymentTitle">Sử dụng thẻ tín dụng - Credit Cards</div>')
		                        		('<div class="paymentText">')
		                        			('Thanh toán nhanh gọn và có thể sử dụng dịch vụ ngay sau khi thanh toán.')
		                        		('</div>')
		                        		('<div style="margin-bottom: 20px; display: none;" class="paymentText PaymentTextMore">')
		                        			('<div class="boldPayment">* Miễn phí giao dịch online</div>')
		                        			('<div class="boldPayment">* Các loại thẻ được chấp nhận:</div>')
		                        			('<div style="margin-top: 20px;" class="creditPay">')
			                        			('<a class="floatLeft pngFix" href="#"><span id="visa"></span></a>')
			                        			('<a class="floatLeft pngFix" href="#"><span id="master"></span></a>')
		                        				('<div style="clear: both; height: 0pt; overflow: hidden;"></div>')
		                        			('</div>')
		                        			('<div style="margin-top: 10px;">')
		                        				('<span class="boldPayment">* Lưu ý: </span>Có một số ngân hàng yêu cầu quý khách phải kích hoạt thanh toán Online (như thẻ Visa của BIDV) hoặc phải bỏ chế độ 3D Secure (như HSBC) thì bạn mới có thể thanh toán được. <br><br>Hãy liên hệ với ngân hàng phát hành thẻ của quý khách để yêu cầu hỗ trợ hoặc gọi số hỗ trợ của rongbay.com')
		                        			('</div>')
		                        		('</div>')
		                        	('</div>')
		                        	('<div class="clear"></div>')
	                        	('</div>')
                        	('</div>')
                        ('</div>')
                        
                        ('<div id="atm_online" style="margin-left:15px">')
                        	('<div class="blockCheckOut" style="margin-right: 0pt;">')
                        		('<div class="paymentSelect fixPng"></div>')
                        		('<div class="checkOutBox">')
                        			('<div class="paymentCheckOut floatLeft">')
                        				('<div class="internetBank fixPng"></div>')
                        			('</div>')
                        			('<div class="paymentContent floatLeft">')
                        				('<div class="paymentTitle">Sử dụng thẻ ATM có Internet/SMS Banking</div>')
                        				('<div class="paymentText">')
                        					('Thẻ ATM phải được đăng ký Internet Banking và SMS Banking với ngân hàng. Có thể sử dụng ngay dịch vụ sau khi thanh toán.')
                        				('</div>')
                        				('<div class="paymentText PaymentTextMore" style="display: none;">')
                        					('<div class="boldPayment">* Miễn phí giao dịch online</div>')
                        					('<div class="boldPayment">* Các loại thẻ được chấp nhận:</div>')
                        					('<div style="margin-top: 10px;" class="bankPay">')
	                        					('<a class="floatLeft pngFix" href="javascript:void(0)"><span id="vcb"></span></a>')
	                        					('<a class="floatLeft pngFix" href="javascript:void(0)"><span id="donga"></span></a>')
	                        					('<a class="floatLeft pngFix" href="javascript:void(0)"><span id="vib"></span></a>')
	                        					('<a class="floatLeft pngFix" href="javascript:void(0)"><span id="vietin"></span></a>')
	                        					('<a class="floatLeft pngFix" href="javascript:void(0)"><span id="hd"></span></a>')
	                        					('<a class="floatLeft pngFix" href="javascript:void(0)"><span id="techcom"></span></a>')
	                        					('<a class="floatLeft pngFix" href="javascript:void(0)"><span id="tp"></span></a>')
	                        					('<div style="clear: both; height: 0pt; overflow: hidden;"></div>')
                        					('</div>')
                        					('<div style="margin-top: 10px;">')
	                        					('<span class="boldPayment">* Lưu ý: </span>')
	                        					('Thẻ ATM của quý khách phải được đăng ký dịch vụ Internet/SMS Banking để có thể thanh toán trực tuyến. Hãy liên hệ với ngân hàng phát hành thẻ của quý khách để yêu cầu hỗ trợ hoặc gọi số hỗ trợ của rongbay.com')
                        					('</div>')
                        				('</div>')
                        			('</div>')
                        		('</div>')
                        		('<div class="clear"></div>')
                        	('</div>')
                        ('</div>')
                        
                        ('<div style="clear:both;height:0;overflow:hidden"></div>')   
                                                
                        ('<div style="font-size:20px;font-weight:bold;height:25px;padding:5px">')
                            ('<input type="radio" value="3" id="pay_sms" name="pay_rbu" ' + (pay_type == 3 ? 'checked="checked"' : '') + ' onclick="check_rbu_type(3)"/>&nbsp;<label for="pay_sms" onclick="check_rbu_type(3)">Soạn SMS</label>')
                        ('</div>')
                        
                        ('<div style="padding-left:25px">')
                            ('Soạn tin: <font color="#F10000"><b>RBU '+user_id+'</b></font> gửi <font color="#F10000"><b>8701</b></font> để được 15 lượt up vào tài khoản <b>'+user_email+'</b> (15.000VNĐ/sms)<br>')
                            ('<div style="margin-top:5px">')
							('<font color="#F10000"><b>Lưu ý:</b></font>')
							('</div>')
							('<div style="margin-top:5px">')
							('- Mỗi tin nhắn chỉ nhận đc 15 lượt up tin với giá 15.000 VNĐ/sms.')
							('</div>')
							('<div style="margin-top:5px">')
							('- Hình thức này không phải là hình thức để mua các gói lượt up bạn đã chọn ở trên.')
							('</div>')
						('</div>')
						
						('<div style="clear:both;height:0;overflow:hidden"></div>')   
                        
                        ('<div style="font-size:20px;font-weight:bold;height:25px;padding:5px">')
                            ('<input type="radio" value="4" id="pay_transfer" name="pay_rbu" ' + (pay_type == 4 ? 'checked="checked"' : '') + ' onclick="check_rbu_type(4)"/>&nbsp;<label for="pay_transfer" onclick="check_rbu_type(4)">Chuyển khoản qua Ngân hàng</label>')
                        ('</div>')
                        
                        ('<div style="padding-left:25px;display: none;" id="banking_trans">')
                           ('Các bạn có thể Chuyển khoản hoặc chuyển ATM vào TK sau:<br />')
                            ('<div style="margin-top:5px">')
							('- Chủ tài khoản: <font color="#F10000"><b>Công ty Cổ phần Truyền thông Việt Nam</b></font>')
							('</div>')
							('<ul style="margin-left:20px;margin-top:10px">')
								('<li style="height:20px">Ngân hàng thương mại cổ phần Quân đội - CN Hai Bà Trưng (MB): TK số: 0651100016002</li>')
								('<li style="height:20px">Ngân hàng Á Châu chi nhánh Hà Nội (ACB): TK số: 37182319</li>')
								('<li style="height:20px">Ngân hàng Vietcombank (VCB) Hà Nội: TK số: 002.1.00.183924.3</li>')
								('<li style="height:20px">Ngân hàng TMCP Quốc tế Việt Nam(VIB) - Sở Giao dịch VIB: TK số: 001704060035755.</li>')
								('<li style="height:20px">Ngân hàng Đông Á chi nhánh Bạch Mai Hà Nội: TK số: 002387340001.</li>')
								('<li style="height:20px">Ngân hàng Công thương Việt Nam(Vietinbank) - CN Hai Bà Trưng - Hà Nội: TK số: 1020.1000.1108.169</li>')
								('<li style="height:20px">Ngân hàng Ngân hàng NN&PTNT (Agribank) - CN Thủ Đô - Hà Nội: TK số: 1483.2010.047.40</li>')
							('</ul>')
						    ('<font color="#F10000"><b>Lưu ý:</b></font>')
							('<div style="margin-left:10px;margin-top:5px">')
								('<div style="margin-top:5px">')
									('- Khi chuyển ATM/hoặc chuyển khoản các bạn ghi rõ  mục đích chuyển tiền là:  Mua lượt UP cho tin có ID <font color="#F10000"><b>' + user_id + '</b></font> trên site Rồng Bay.<br />')
								('</div>')
								('<div style="margin-top:5px">')
									('- Khi bạn đã chuyển ATM/hoặc chuyển khoản mua lượt up vui lòng PM lại cho nick <b>huephamthi@vccorp.vn</b> trên Rồng Bay với tiêu đề: <font color="#F10000">Chuyển ATM (hoặc Chuyển khoản)</font>. ')
									('Nội dung ghi rõ: đã chuyển ATM (hoặc chuyển khoản) <font color="#F10000"><b>' + number_format(pay_services[service_code]['price']) + ' đồng</b></font> từ tài khoản số………..chủ tài khoản tên………….. tại ngân hàng …………….mua lượt up cho tin có ID <font color="#F10000"><b>' + user_id + '</b></font> trên site Rồng Bay vào hồi ……giờ ngày…..tháng…. năm…..')
								('</div>')
							('</div>')
						('</div>')
						
						('<div style="clear:both;height:0;overflow:hidden"></div>')   
                        
                        ('<div style="font-size:20px;font-weight:bold;height:25px;padding:5px">')
                            ('<input type="radio" value="5" id="pay_money" name="pay_rbu" ' + (pay_type == 5 ? 'checked="checked"' : '') + ' onclick="check_rbu_type(5)"/>&nbsp;<label for="pay_money" onclick="check_rbu_type(5)">Nộp tiền trực tiếp tại trụ sở RongBay</label>')
                        ('</div>')
                        
                        ('<div style="padding-left:25px;display: none;" id="pay_direct">')
                            ('Các bạn có thể nộp trực tiếp mua lượt up tại trụ sở RồngBay tại địa chỉ sau:<br>')
                            ('<div style="margin-top:5px">')
                            ('- Phòng Kế toán, Tầng 22, Công ty Cổ phần Truyền Thông Việt Nam, tháp B Vincom, 191 Bà Triệu, Hà Nội<br>')
                            ('</div>')
                            ('<div style="margin-top:5px">')
                            ('<font color="#f10000"><b>Lưu ý:</b></font>')
                            ('</div>')
                            ('<div style="margin-top:5px">')
                            	('<div style="margin-top:5px">')
	                            ('- Khi Nộp trực tiếp các bạn ghi rõ  mục đích nộp tiền là:  mua lượt UP cho thành viên <font color="#F10000"><b>' + user_info.email + ' </b></font> trên site RồngBay.<br>')
	                            ('</div>')
								('<div style="margin-top:5px">')
	                            ('- Khi bạn đã nộp tiền mặt mua lượt up, vui lòng PM lại cho nick <b>huephamthi@vccorp.vn</b> trên RồngBay với tiêu đề: ')
	                            ('<font color="#f10000"><b>Nộp tiền mặt</b></font>. Nội dung ghi rõ: Đã nộp tiền mặt ')
	                            ('<font color="#F10000"><b>' + number_format(pay_services[service_code]['price']) + ' đồng</b></font> từ tài khoản số………..chủ tài khoản tên………….. tại ngân hàng …………….mua lượt up cho thành viên ')
	                            ('<font color="#F10000"><b>' + user_info.email + ' </b></font> trên site RồngBay vào hồi ……giờ ngày…..tháng…. năm…..')
	                            ('</div>')
                            ('</div>')
                        ('</div>')
                        
                        ('<div style="clear:both;height:0;overflow:hidden"></div>')                      
                        
                        ('<div style="margin-top:15px" class="fl">')
                            ('<a class="blueButton" href="javascript:void(0)" onclick="close_choose_payment();"><span><span>HỦY BỎ</span></span></a>')
                        ('</div>')
                        ('<div style="margin-top:15px" class="fr">')
                        	('<a class="blueButton" href="javascript:void(0)" style="margin-right:15px" onclick="showOvlRbu();"><span><span><b>&laquo;</b>QUAY LẠI</span></span></a>')
                            ('<a class="blueButton" href="javascript:void(0)" onclick="stepOne();"><span><span>TIẾP TỤC <b>&raquo;</b></span></span></a>')
                        ('</div>')
                        ('<div class="c"></div>')
                    ('</div>')//end thanh toan online
                    
                ('<div class="bottom"><div class="bgl"><div class="bg"></div></div>')
                ('</div>')
            ('</div>')();
            return stepZero;
    },

    inputInfoType1: function(){
        inputInfo1 = join
            ('<div style="margin:0 auto;width:775px" class="new-popup">')
                ('<div class="new-popup-title">')
                    ('<div class="bgl">')
                        ('<div class="bg"><div class="floatLeft">Nhập thông tin liên hệ</div><a onclick="close_choose_payment();" title="Đóng" class="new-popup-close" href="javascript:void(0)">x</a><div class="clear"></div></div>')
                    ('</div>')
                ('</div>')
                ('<div style="padding: 20px 20px 10px;" class="content">')
                    ('<div class="reg_form pBottom10">')
                        ('<form id="cartRegisterForm" name="cartRegisterForm">')
                            ('<div class="cartNewForm">')
                                ('<div id="cError"></div>')
                                ('<div class="infoInputLeft">')
                                    ('<div>')
                                        ('<div class="newLabel">Email:</div>')
                                        ('<div class="infoInputTxt">')
                                            ('<input type="text" value="'+user_info.email+'" name="email_pay" id="email_pay" class="txt" disabled/>')
                                        ('</div>')
                                    ('</div>')
                                    ('<div class="mTop15">')
                                        ('<div class="newLabel">Họ tên:</div>')
                                        ('<div class="infoInputTxt">')
                                            ('<input type="text" value="'+user_info.fullname+'" name="ho_ten" id="ho_ten" class="txt" />')
                                        ('</div>')
                                        ('<div class="infoInputText">Vui lòng cho chúng tôi biết Họ và tên đầy đủ của Quý khách.</div>')
                                    ('</div>')
                                    ('<div class="mTop15">')
                                        ('<div class="newLabel">Điện thoại liên hệ:</div>')
                                        ('<div class="infoInputTxt"><input type="text" value="'+user_info.mobile_phone+'" name="dien_thoai" id="dien_thoai" class="txt" onkeypress="return numberOnly(this,event);"/></div>')
                                        ('<div class="infoInputText">Vui lòng nhập đúng số điện thoại liên hệ</div>')
                                    ('</div>')
                                    (pay_type == 2 ? '<div class="mTop15"><div class="newLabel">Địa chỉ:</div><div class="infoInputTxt"><input type="text" value="'+user_info.dia_chi+'" name="dia_chi" id="dia_chi" class="txt" /></div></div>': '')
                                    
                                    ('<div class="clear"></div>')
                                ('</div>')

                                ('<div class="infoInputRight">')
									('<div class="mTop15"><div align="right" class="bgAllPrice">Gói <span id="bgAllPrice">"' + service_code + '": ' + number_format(pay_services[service_code]['value']) + ' lượt up!</span></div></div>')
									('<div class="mTop15"><div align="right" class="bgAllPrice">Giá trị thanh toán: <span id="bgAllPrice">' + number_format(pay_services[service_code]['price']) + '</span> VNĐ</div></div>')
								('</div>')
											
                                ('<div class="clear"></div>')
                            ('</div>')
                        ('</form>')

                        ('<div style="margin-top:15px" class="fl">')
                            ('<a class="blueButton" href="javascript:void(0)" onclick="close_choose_payment();"><span><span>HỦY BỎ</span></span></a>')
                        ('</div>')
                        ('<div style="margin-top:15px" class="fr">')
                             ('<a class="blueButton" href="javascript:void(0)" style="margin-right:15px" onclick="backStepZero();"><span><span><b>&laquo;</b>QUAY LẠI</span></span></a>')
                             ('<a class="blueButton" href="javascript:void(0)" onclick="stepTwo();"><span><span>TIẾP TỤC <b>&raquo;</b></span></span></a>')
                        ('</div>')
                        ('<div class="c"></div>')
                    ('</div>')
                ('</div>')
                ('<div class="bottom"><div class="bgl"><div class="bg"></div></div></div>')
             ('</div>')();
         return inputInfo1;
    },
       
    confirmPayment:{
        confirmContent:function(){
            content = join
                ('<div style="margin:0 auto;width:775px" class="new-popup">')
                	('<div class="new-popup-title"><div class="bgl"><div class="bg"><div class="fl">Xác nhận thông tin thanh toán</div><a onclick="close_choose_payment();" title="Đóng" class="new-popup-close" href="javascript:void(0)">x</a><div class="clear"></div></div></div></div>')

                    ('<div style="padding: 20px 20px 10px;" class="content">')
                    	('<div class="box-gradien pBottom10">')
							('<div class="title">Thông tin khách hàng</div>')
							('<div class="content">')
								('<div class="mBottom10">Tên đăng nhập:<b> <span style="color:#ff9200;font-size:16px">' + user_info.email + '</span></b></div>')
								('<div class="mBottom10">Họ tên: <b><span style="color:#ff9200;font-size:16px">' + user_info.fullname + '</span></b></div>')
								(pay_type == 2 ? 
								'<div class="mBottom10">Địa chỉ:<b> <span style="color:#ff9200;font-size:16px">' + user_info.dia_chi + '</span></b></div>'
								: 
								'')
								('<div class="mBottom10">')
									('Điện thoại liên hệ:<b> <span style="color:#ff9200;font-size:16px">' + user_info.mobile_phone + '</span></b>')
									('<a class="blueButton" onclick="return stepOne();" href="javascript:void(0)" style="float:right"><span><span>SỬA THÔNG TIN CÁ NHÂN</span></span></a>')
								('</div>')
								
								('<div class="clear"></div>')
							('</div>')
						('</div>')
                        ('<div class="box-gradien pBottom10 mTop20"  style="padding-right:0">')
							(pay_type == 2 ? 
							'<div class="title">Hình thức thanh toán: <span style="font-size: 12px; font-weight: normal; text-transform: none;">Mua lượt up tại nhà</span></div><div style="padding-top:15px">Nhân viên của RongBay sẽ tới <b>'+user_info.dia_chi+'</b> để thu tiền mua lượt up của bạn.<br><br>Chỉ áp dụng với khách hàng mua từ 1 triệu trở lên, <a href="http://#" target="_blank">xem chi tiết tại đây</a></div>'
							: 
							'<div class="title">Hình thức thanh toán: <span style="font-size: 12px; font-weight: normal; text-transform: none;">Thanh toán Online</span></div><div class="content"><div class="fl"><a title="sohapay.com" target="_blank" href="https://sohapay.com/"><img height="94" width="207" border="0" src="style/images/payment/logo_sohapay.png"></a></div><div class="fl"><div class="mLeft25"><div style="font-size: 14px;"><div><b style="color: red;">Chú ý:</b> Bạn phải có <b>thẻ Visa/Master</b> đã kích hoạt thanh toán online</div><div class="mTop5">hoặc <b>thẻ ATM đã đăng kí sử dụng internet banking</b> với ngân hàng phát hành thẻ</div></div><div class="mTop10">Thanh toán Online được đảm bảo bởi <a title="sohapay.com" target="_blank" href="https://sohapay.com/">SohaPay</a></div></div></div><div class="c"></div></div>')
							
						('</div>')
                        ('<div class="box-gradien mTop20" style="padding:0">')
                        	('<div class="title mTop10 mLeft10" style="padding-left:10px">Thông tin dịch vụ</div>')
                            ('<div class="content">')
                            	('<table width="100%" cellspacing="0" cellpadding="0" border="0" class="cart-finish">')
                                	('<tr>')
                                        ('<th width="15%" class="head bRight">Mã Dịch vụ</th>')
                                        ('<th class="head bRight">Dịch vụ</th>')
                                        ('<th width="20%" class="head">Giá trị</th>')
                                    ('</tr>')
                                    ('<tr>')
                                        ('<td valign="top" align="center" class="item bRight"><b>'+service_code+'</b></td>')
                                        ('<td valign="top" align="center" class="item bRight">Mua <b>' + number_format(pay_services[service_code]['value']) + '</b> lượt up cho tài khoản <b>' + user_info.email + '</b></td>')
                                        ('<td valign="top" align="right" class="item">' + number_format(pay_services[service_code]['price']) + ' VNĐ</td>')
                                    ('</tr>')
                                    ('<tr>')
                                        ('<td align="right" colspan="4" class="item total-all">Tổng giá trị thanh toán: <span id="total-all">' + number_format(pay_services[service_code]['price']) + ' VNĐ</span></td>')
                                    ('</tr>')
                                ('</table>')
                             ('</div>')
                        ('</div>')
                        ('<div style="font-size: 16px;" class="mTop20 mBottom10">')
                        	('<input type="checkbox" class="checkbox" id="check-regulations" />')
                            ('<label for="check-regulations">&nbsp;<b>Tôi đã đọc và đồng ý với các <a target="_blank" href="http://rongbay.com/info.html?action=regulation">điều khoản</a> và <a target="_blank" href="trang-quy-dinh-refund.html">quy định thanh toán</a> của RongBay.com</b></label>')
                        ('</div>')

                        ('<div style="margin-top:15px" class="fl">')
                            ('<a class="blueButton" href="javascript:void(0)" onclick="close_choose_payment();"><span><span>HỦY BỎ</span></span></a>')
                        ('</div>')
                        ('<div style="margin-top:15px" class="fr">')
                             ('<a class="blueButton" href="javascript:void(0)" style="margin-right:15px" onclick="stepOne();"><span><span><b>&laquo;</b>QUAY LẠI</span></span></a>')
                            ('<a class="blueButton" href="javascript:void(0)" onclick="return payment_form_new();"><span><span>ĐỒNG Ý</span></span></a>')
                        ('</div>')
                        ('<div class="c"></div>')
                    ('</div>')
                    ('<div class="bottom"><div class="bgl"><div class="bg"></div></div></div>')
                ('</div>')();
            return content;
        }
    }
};

/*function join(str) {
    var store = [str];
    return function extend(other) {
        if (other != null && 'string' == typeof other ) {
            store.push(other);
            return extend;
        }
        return store.join('');
    }
}*/

function close_choose_payment(){
    jQuery.unblockUI();
}

//xử lý việc gửi thông tin đến soha pay
function payment_form_new()
{
    if(!jQuery("#check-regulations").attr('checked'))
    {
        alert("Quý khách chưa tích vào mục đã đọc và đồng ý các điều khoản và quy định của RồngBay");
        return false;
    }
    if(pay_type == 2)
	{
		alert("Cảm ơn Quý khách đã đăng ký mua lượt up tại nhà, chúng tôi sẽ liên hệ với Quý khách trong thời gian sớm nhất!");
		jQuery.unblockUI();
		return false;
	}

	var data = "email_pay="+user_info.email;
		data += "&fullname="+user_info.fullname;
		data += "&mobile="+user_info.mobile_phone;
		data += "&user_id="+user_id; //id của user
		data += "&service_code="+service_code; //Mã dịch vụ ->từ mã dịch vụ ->số tiền và nội dung mã
	
	jQuery.ajax({
		type: "POST",
		url: WEB_DIR + "ajax_request.php?request_type=payment&act=soha_payment",
		data: data,
		dataType: 'json',
		success: function(json)
		{
            if(json.errors == "" || typeof(json.errors) == "undefined")
            {
            	window.location = json.url;
            }
            else
            {
            	alert(json.errors);
            }
		}
    });
    
}
//end



//Bengin payment rbu

function showOvlRbu()
{
	if(IS_LOGIN)
	{
		user_info.email = user_email;
	    user_info.fullname = user_name;
	    user_info.mobile_phone = user_mobile;
	}
	
	var pay_info = '';
	
	for(i in pay_services)
	{
		if(pay_services[i]['type'] == 1)
		{
			pay_info+= '<div style="height:25px"><input type="radio" name="RBU_PAY" value="' + i + '" id="' + i + '" ' + (i == service_code?'checked':'') + '>&nbsp;&nbsp;<label for="' + i + '" ><b>' + i + '</b> - được <b>' + number_format(pay_services[i]['value']) + '</b> lượt up, trị giá <b>' + number_format(pay_services[i]['price']) + '</b> VNĐ</label></div>';
		}
	}
	
	frmChoicePackage = join
        ('<div style="margin:0 auto;width:575px" class="new-popup">')
            ('<div class="new-popup-title">')
                ('<div class="bgl">')
                    ('<div class="bg"><div class="floatLeft">Chọn gói dịch vụ bạn muốn mua</div><a onclick="close_choose_payment();" title="Đóng" class="new-popup-close" href="javascript:void(0)">x</a><div class="clear"></div></div>')
                ('</div>')
            ('</div>')
            ('<div style="padding: 20px 20px 10px;" class="content">')
                ('<div class="reg_form pBottom10">')
                    ('<form id="cartRegisterForm" name="cartRegisterForm">')
                        ('<div style="margin-left:10px;font-weight:normal;" align="left">'+ pay_info + '</div>')
                    ('</form>')
					('<div class="clear"></div>')
					
                    ('<div style="margin-top:15px;margin-left:0px" class="fl">')
                        ('<a class="blueButton" href="javascript:void(0)" onclick="close_choose_payment();"><span><span>HỦY BỎ</span></span></a>')
                    ('</div>')
                    ('<div style="margin-top:15px" class="fr">')
                        ('<a class="blueButton" href="javascript:void(0)" onclick="showOvlTypePurchase();"><span><span>TIẾP TỤC <b>&raquo;</b></span></span></a>')
                    ('</div>')
                    ('<div class="c"></div>')
                ('</div>')
            ('</div>')
            ('<div class="bottom"><div class="bgl"><div class="bg"></div></div></div>')
         ('</div>')();
	         
	show_pay_ovl(frmChoicePackage);
}

function showOvlTypePurchase()
{
	var radioObj = document.getElementsByName('RBU_PAY');
	var radioLength = radioObj.length;
	
	if(radioLength == undefined && radioObj.checked)
	{
		service_code = radioObj.value;
	}
	else
	{	
		for(var i = 0; i < radioLength; i++) {
			if(radioObj[i].checked) {
				service_code = radioObj[i].value;
				break;
			}
		}
	}

	if(service_code == '')
	{
		alert('Bạn chưa chọn gói dịch vụ bạn muốn mua!');
		return false;
	}
	
    show_pay_ovl(template.choosePaymentTypes());
    
	return false;
}

//Hàm thu gọn, mở rộng các hình thức thanh toán
function check_rbu_type(type)
{
	if(type == 1)
	{
		jQuery(".PaymentTextMore").slideDown();
		jQuery("#banking_trans").slideUp();
		jQuery("#pay_direct").slideUp();
	} 
	else if(type == 4)
	{
		jQuery("#banking_trans").slideDown();
		jQuery("#pay_direct").slideUp();
		jQuery(".PaymentTextMore").slideUp();
	}
	else if(type == 5)
	{
		jQuery("#pay_direct").slideDown();
		jQuery("#banking_trans").slideUp();
		jQuery(".PaymentTextMore").slideUp();
	}
	else
	{
		jQuery("#banking_trans").slideUp();
		jQuery("#pay_direct").slideUp();
		jQuery(".PaymentTextMore").slideUp();
	}
} 


function stepOne(){
    var radioObj = document.getElementsByName('pay_rbu');
	var radioLength = radioObj.length;
	
	if(radioLength == undefined && radioObj.checked)
	{
		pay_type = radioObj.value;
	}
	else
	{	
		for(var i = 0; i < radioLength; i++) {
			if(radioObj[i].checked) {
				pay_type = radioObj[i].value;
				break;
			}
		}
	}
	
	if(pay_type == '' || pay_type == 0)
	{
		alert('Bạn chưa chọn gói dịch vụ bạn muốn mua!');
		return false;
	}
    
	//Thanh toán online hoặc Mua lượt up tại nhà
	if(pay_type == 1 || pay_type == 2)
	{
		show_pay_ovl(template.inputInfoType1());
	}
	//Soạn SMS hoặc Chuyển khoản qua Ngân hàng hoặc Nộp tiền trực tiếp tại trụ sở RongBay
	else if(pay_type == 3 || pay_type == 4 || pay_type == 5)
	{
		alert("Cảm ơn Bạn đã sử dụng dịch vụ của chúng tôi!");
		close_choose_payment();
		service_code = '';
		pay_type = 0;
	}
}
//End payment rbu