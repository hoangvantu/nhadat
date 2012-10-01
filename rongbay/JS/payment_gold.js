var eb_pay_gold = 0;//Số lượng Gold cần nạp
var eb_max_gold	= 50000;//Số lượng Gold nạp tối thiểu

function payment_bill(v_update_info)
{
	if(typeof(v_update_info) != 'undefined' && v_update_info)
	{
		f_pay_update_info();
	}
	
	var popUpContent = '<div style="margin:0 auto;width:700px" class="new-popup">\
							<div class="new-popup-title"><div class="bgl"><div class="bg"><div class="floatLeft">Hình thức thanh toán</div><a title="Đóng" class="new-popup-close"  onclick="return pay_cancel();">x</a><div class="clear"></div></div></div></div>\
								<div style="padding:20px;" class="content">\
									<div style="background: url(\'style/images/payment/online.png\') no-repeat scroll 14px 0 transparent;padding:0 0 10px 90px;">\
										<div class="arrowRight">\
											<div>\
												<div style="olor:#2C2C2C;font-size:12px;font-weight: bold;line-height: 100%;">Thanh toán online dùng Visa, Master Card, thẻ ATM, tài khoản có Internet Banking</div>\
												<div style="color: #777777;font-size: 11px;margin: 5px 0;">Thanh toán nhanh gọn và có thể mua hàng hoặc sử dụng ngay dịch vụ sau khi thanh toán.</div>\
												<div class="creditPay bankPay">\
													<div style="margin-top:0px;background:url(style/images/payment/visa_card.png) center center no-repeat;float:left;width:60px;height:24px;margin:5px 0"></div>\
													<div style="margin-top:0px;background:url(style/images/payment/master_card.png) center center no-repeat;float:left;width:60px;height:24px;margin:5px 0"></div>\
													<div style="margin-top:0px;background:url(style/images/payment/bank.png) center 0 no-repeat;float:left;width:60px;height:24px;margin:5px 0"></div>\
													<div style="margin-top:0px;background:url(style/images/payment/bank.png) center -24px no-repeat;float:left;width:80px;height:24px;margin:5px 0"></div>\
													<div style="margin-top:0px;background:url(style/images/payment/bank.png) center -48px no-repeat;float:left;width:80px;height:24px;margin:5px 0"></div>\
													<div style="margin-top:0px;background:url(style/images/payment/bank.png) center -120px no-repeat;float:left;width:100px;height:24px;margin:5px 0"></div>\
													<div class="clear"></div>\
													<div class="view_more_bank mTop5" style="display: block;">\
														<div style="margin-top:0px;background:url(style/images/payment/bank.png) center -216px no-repeat;float:left;width:70px;height:24px;margin:5px 0"></div>\
														<div style="margin-top:0px;background:url(style/images/payment/bank.png) center -192px no-repeat;float:left;width:80px;height:24px;margin:5px 0"></div>\
														<div style="margin-top:0px;background:url(style/images/payment/bank.png) center -240px no-repeat;float:left;width:60px;height:24px;margin:5px 0"></div>\
														<div class="clear"></div>\
													</div>\
												</div>\
											</div>\
											<div class="clear"></div>\
												<ul style="display: block;line-height: 150%;margin:5px 0 0;color: #777777;font-size: 11px;padding:5px 10px">\
													<li style="list-style: disc outside">Không mất phí thanh toán</li>\
													<li style="list-style: disc outside">Thẻ của Quý khách phải được kích hoạt chức năng thanh toán trực tuyến hoặc đã đăng ký Internet Banking</li>\
													<li style="list-style: disc outside">Thanh toán nhanh gọn và có thể sử dụng dịch vụ ngay sau khi thanh toán.</li>\
												</ul>\
											</div>\
										</div>\
									<div style="margin-top:15px" class="fl">\
										<a class="blueButton" onclick="return pay_cancel();" ><span><span>HỦY BỎ</span></span></a>\
									</div>\
									<div style="margin-top:15px" class="fr">\
										<a class="blueButton" onclick="return payment_bill_info();" ><span><span>TIẾP TỤC <b>&raquo;</b></span></span></a>\
									</div>\
									<div class="c"></div>\
								</div>\
							<div class="bottom"><div class="bgl"><div class="bg"></div></div>\
							</div>\
						</div>';
	
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
			top: '66px',
			left:0,
			backgroundColor: 'transparent'
	}});
	
	return false;
}

function payment_bill_info(check_accept)
{
	if(typeof(check_accept) != 'undefined' && check_accept)
	{
		if(jQuery('#check-regulations').is(':checked'))
		{
			eb_pay_accepted = 1;
		}
		else
		{
			eb_pay_accepted = 0;
		}
	}
	
	var popUpContent = '<div style="margin:0 auto;width:775px" class="new-popup">\
							<div class="new-popup-title">\
								<div class="bgl">\
									<div class="bg"><div class="floatLeft">Nhập thông tin liên hệ</div><a onclick="return pay_cancel();" title="Đóng" class="new-popup-close" href="javascript:void(0)">x</a><div class="clear"></div></div>\
								</div>\
							</div>\
							<div style="padding: 20px 20px 10px;" class="content">\
								<div class="reg_form pBottom10">\
									<form id="cartRegisterForm" name="cartRegisterForm">\
										<div class="cartNewForm">\
											<div id="cError"></div>\
											<div class="infoInputLeft">\
												<div>\
													<div class="newLabel">Tên đăng nhập:</div>\
													<div class="infoInputTxt"><div style="padding:3px 10px;font-size:16px;background: url(\'style/images/payment/bgPopup.png\') repeat-x scroll left -92px #FFFFFF;color:#472900;font-weight:bold">' + EB_USER_NAME + '</div></div>\
												</div>\
												<div class="mTop15">\
													<div class="newLabel">Họ tên:</div>\
													<div class="infoInputTxt"><input type="text" value="' + eb_user_info.full_name + '" name="pay_full_name" id="pay_full_name" class="txt"></div>\
													<div class="infoInputText">Vui lòng cho chúng tôi biết Họ và tên đầy đủ của Quý khách.</div>\
												</div>\
												<div class="mTop15">\
													<div class="newLabel">Điện thoại liên hệ:</div>\
													<div class="infoInputTxt"><input type="text" value="' + eb_user_info.mobile + '" name="pay_mobile" id="pay_mobile" class="txt" onkeypress="return f_number_only(this, event)"></div>\
													<div class="infoInputText">Vui lòng nhập đúng số điện thoại liên hệ</div>\
												</div>\
												<div class="clear"></div>\
											</div>\
											<div class="infoInputRight">\
												<div class="mTop15"><div align="right" class="bgAllPrice">Giá trị thanh toán: <span id="bgAllPrice">' + bill_price + '</span> VNĐ</div></div>\
											</div>\
											<div class="clear"></div>\
										</div>\
									</form>\
									<div style="margin-top:15px" class="fl">\
										<a class="blueButton" onclick="return pay_cancel();" ><span><span>HỦY BỎ</span></span></a>\
									</div>\
									<div style="margin-top:15px" class="fr">\
										 <a class="blueButton" onclick="return payment_bill(1);"  style="margin-right:15px"><span><span><b>&laquo;</b>QUAY LẠI</span></span></a>\
										<a class="blueButton" onclick="return payment_bill_confirm();" ><span><span>TIẾP TỤC <b>&raquo;</b></span></span></a>\
									</div>\
									<div class="c"></div>\
								</div>\
							</div>\
							<div class="bottom"><div class="bgl"><div class="bg"></div></div></div>\
						 </div>';
	
	pay_popup(popUpContent);
	return false;
}

function payment_bill_confirm()
{
	var full_name 	= jQuery.trim(getValueId('pay_full_name'));
	var mobile 		= jQuery.trim(getValueId('pay_mobile'));
	
	if(full_name == '')
	{
		alert('Tên đầy đủ không được để trống');		
		jQuery('#pay_full_name').focus();
	
		return false;
	}
	else
	{
		eb_user_info.full_name = full_name;
	}
	
	if(mobile == '')
	{
		alert('Điện thoại liên hệ không được để trống');		
		jQuery('#pay_mobile').focus();
		return false;
	}
	else
	{
		eb_user_info.mobile = mobile;
	}
	
	var popUpContent = '<div style="margin:0 auto;width:799px" class="new-popup">\
							<div class="new-popup-title"><div class="bgl"><div class="bg"><div class="fl">Xác nhận thông tin thanh toán</div><a onclick="return pay_cancel();" title="Đóng" class="new-popup-close" href="javascript:void(0)">x</a><div class="clear"></div></div></div></div>\
							<div style="padding: 20px 20px 10px;" class="content">\
								<div class="box-gradien pBottom10">\
									<div class="title">Thông tin khách hàng</div>\
									<div class="content">\
										<div class="mBottom10">Tên đăng nhập:<b> <span style="color:#ff9200;font-size:16px">' + EB_USER_NAME + '</span></b></div>\
										<div class="mBottom10">Họ tên: <b><span style="color:#ff9200;font-size:16px">' + eb_user_info.full_name + '</span></b></div>\
										<div class="mBottom10">\
											Điện thoại liên hệ:<b> <span style="color:#ff9200;font-size:16px">' + eb_user_info.mobile + '</span></b>\
											<a class="blueButton" onclick="return payment_bill_info(1);"  style="float:right"><span><span>SỬA THÔNG TIN CÁ NHÂN</span></span></a>\
										</div>\
										<div class="clear"></div>\
									</div>\
								</div>\
								<div class="box-gradien pBottom10 mTop20"  style="padding-right:0">\
									<div class="title">Hình thức thanh toán: <span style="font-size: 12px; font-weight: normal; text-transform: none;">Thanh toán Online</span></div>\
									<div class="content">\
										<div class="fl">\
											<a title="pay.soha.vn" target="_blank" href="https://pay.soha.vn/"><img height="55" width="136" border="0" src="style/images/payment/logoSoha.png"></a>\
										</div>\
										<div class="fl">\
											<div class="mLeft25">\
												<div style="font-size: 14px;">\
													<div>\
														<b style="color: red;">Chú ý:</b> Bạn phải có <b>thẻ Visa/Master</b> đã kích hoạt thanh toán online</div>\
													<div class="mTop5">hoặc <b>thẻ ATM đã đăng kí sử dụng internet banking</b> với ngân hàng phát hành thẻ</div>\
												</div>\
												<div class="mTop10">Thanh toán Online được đảm bảo bởi <a title="pay.soha.vn" target="_blank" href="https://pay.soha.vn/">Soha Payment</a></div>\
											</div>\
										</div>\
										<div class="c"></div>\
									</div>\
								</div>\
								<div class="box-gradien mTop20" style="padding:0">\
									<div class="title mTop10 mLeft10">Thông tin thanh toán</div>\
									<div class="content">\
										<table width="100%" cellspacing="0" cellpadding="0" border="0" class="cart-finish">\
											<tr>\
												<th width="405" class="head bRight">Mã các giao dịch</th>\
												<th width="80" class="head">Giá trị</th>\
											</tr>\
											<tr>\
											  <td valign="top" class="item bRight" style="font-weight:normal">Thanh toán hóa đơn trả sau cho các giao dịch có ID: <b>' + bill_id + '</b> của <b>' + EB_USER_NAME + '</b></td>\
												<td valign="top" align="right" class="item">' + bill_price + ' VNĐ</td></tr>\
											<tr>\
												<td align="right" colspan="2" class="item total-all">Tổng giá trị thanh toán: <span id="total-all">' + bill_price + ' VNĐ</span></td>\
											</tr>\
										</table>\
									 </div>\
								</div>\
								<div style="font-size: 16px;" class="mTop20 mBottom10">\
									<input type="checkbox" class="checkbox" id="check-regulations" ' + (eb_pay_accepted?'checked':'') + '>\
									<label for="check-regulations"><b>Tôi đã đọc và đồng ý với các <a target="_blank" href="http://blog.rongbay.com/2011/11/30/409/">điều khoản</a> và các <a target="_blank" href="http://help.rongbay.com">thể lệ thanh toán trả sau</a> của Rồngbay.com</b></label>\
								</div>\
								<div style="margin-top:15px" class="fl">\
									<a class="blueButton" onclick="return pay_cancel();" ><span><span>HỦY BỎ</span></span></a>\
								</div>\
								<div style="margin-top:15px" class="fr">\
									 <a class="blueButton" onclick="payment_bill_info(1);"  style="margin-right:15px"><span><span><b>&laquo;</b>QUAY LẠI</span></span></a>\
									<a class="blueButton" onclick="return payment_bill_accept();" ><span><span>HOÀN TẤT</span></span></a>\
								</div>\
								<div class="c"></div>\
							</div>\
							<div class="bottom"><div class="bgl"><div class="bg"></div></div></div>\
						</div>';
	
	
	var maxH = document.documentElement.clientHeight;
	
	if(maxH >=1024)
	{
		maxH = 86;
	}
	else{
		maxH = 16;
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
	
	return false;
}

function payment_bill_accept()
{
	if(jQuery('#check-regulations').is(':checked'))
	{
		eb_pay_accepted = 1;
	}
	else
	{
		eb_pay_accepted = 0;
		
		alert("Bạn phải đồng ý với điều khoản của Rồng Bay!");
		return false;
	}
	
	jQuery.post(WEB_DIR+"ajax.php?act=payment&code=payment_bill", {	
		bill_id:bill_id, full_name:eb_user_info.full_name,mobile:eb_user_info.mobile
		},
		function(msg){			
			if(msg == 'not_login')
			{			
				login_error();
				return false;
			}
			else if(msg == 'no_perm')
			{			
				log_faile('Bạn không có quyền thực hiện chức năng này',5000);
				return false;
			}	
			else if(msg == 'error_service')
			{
				log_faile ('Lỗi dịch vụ, mời bạn thử lại sau!',5000);
				return false;					
			}	
			else if(msg == 'error_info')
			{
				log_faile ('Bạn phải nhập tên hoặc điện thoại liên hệ!',5000);
				return false;
			}
			else//Success redirect
			{	
				window.location = msg;	
			}		
		}
	);
		
	return false;
}

var check_gold_info = 0;//Request check user & gold info
var last_ts 		= 0;//Last time stamp
var gold_suggest = 0;
var gold_used = 0;

function pay_more_gold(packMoney) {
	gold_used = packMoney;
	pay_gold();
}

//Nạp Gold
function pay_gold()
{
	var ts = Math.round((new Date()).getTime() / 1000);
	
	if(check_gold_info && ts - last_ts > 300)
	{
		check_gold_info =0 ;
	}
	
	last_ts = ts;
	
	jQuery('#eb_manage_box').hide();
						
	if(IS_BLOCK)
	{
		log_faile('Bạn không có quyền thực hiện chức năng này.',5000);
		return false;
	}
	  
	if(check_gold_info ==0)
	{
		jQuery.ajax({
					type: "POST",
					url: WEB_DIR+"ajax.php?act=payment&code=gold_get_info",
					dataType: 'json',
					success: function(data)
					{			
						if(data.msg == 'not_login')
						{
							login_error();
							return false;
						}
						else if(data.msg == 'no_perm')
						{
							log_faile('Bạn không có quyền thực hiện chức năng này.',5000);
							return false;
						}
						else if(data.user_name != EB_USER_NAME)
						{
							window.location.reload();
							
							return false;
						}
						else if(data.msg == '')
						{
							EB_GOLD = data.gold;
							gold_suggest = gold_used - EB_GOLD;//Số gold cần nạp thêm
							check_gold_info = 1;
							
							show_pay_gold();
						}
					}
				});
	}
	else
	{
		gold_suggest = gold_used - EB_GOLD;//Số gold cần nạp thêm
		show_pay_gold();
	}
}

function show_pay_gold()
{
    var back_btn='';
    var strGoldMore = "";
    if (gold_suggest > 0) {
    	strGoldMore += "<li>- Bạn cần nạp thêm <b style='color:red'>"+number_format(gold_suggest)+" Gold</b></li>";
    }
    /*if(pay_gold_back){
       // back_btn='<a class="blueButton_eb mRight20_eb" style="float:right"  onclick="objPayPro."><span><span><b>«</b> QUAY LẠI</span></span></a>';
    }*/
    var strEmail = '';
    if (user_email != '')
    {
    	strEmail = "("+user_email+")";
    }
    
	jQuery.unblockUI();
	var popup_content = cart_join
								('<div id="cart-check-out-step1" style="margin:0 auto;width:580px;text-align:left">')
										('<div style="background-color: transparent;">')
											('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
												('<div class="classic-popup_eb">')
													('<div class="classic-popup-top_eb">')
														('<div class="right_eb">')
															('<div class="bg_eb"></div>')
														('</div>')
													('</div>')
													('<div class="classic-popup-main_eb">')
														('<div class="classic-popup-title_eb">')
															('<div class="fl_eb">Nạp Gold vào tài khoản</div>')
															('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" href="javascript:void(0)">x</a>')
															('<div class="c_eb"></div>')
														('</div>')
														('<div class="classic-popup-content_eb">')
															('<div class="content_eb" style="padding:5px 10px 10px 10px">')
																('<div id="cError"></div>\
																<div class="gold-content">\
																	<div class="gold-right"><div class="gold-title" style="font-size:14px"><label for="radio_self">Nạp Gold vào tài khoản cá nhân <a href="' + WEB_DIR + 'member-'+user_id + '.html" target="_blank" style="font-size:16px;color:#f00">' + strEmail + '</a></label></div><ul style="margin:15px 0px 10px 0px"><li>- ID tài khoản: <b>'+ user_id +'</b></li><li>- Bạn đang có: <b style="color:red">' + number_format(EB_GOLD) + ' Gold</b></li>'+strGoldMore+'<li>- Nạp thêm Gold để có thể mua dịch vụ dễ dàng chỉ trong vài nhấp chuột</li></ul></div>\
																	<div class="c"></div>\
																</div>')
																('<div>' +
                                                                    '<a class="blueButton_eb  mLeft10_eb" onclick="pay_cancel()"><span><span>HỦY</span></span></a>' +
                                                                    '<a id="fr" class="blueButton_eb  mLeft10_eb" onclick="gold_paytype()"><span><span>TIẾP TỤC <b>»</b></span></span></a>'+back_btn+'<div class="c"></div></div>')

															('</div>')
														('</div>')
													('</div>')
													('<div class="classic-popup-bottom_eb">')
														('<div class="right_eb">')
															('<div class="bg_eb"></div>')
														('</div>')
													('</div>')
												('</div>')
											('</div>')
										('</div>')
									 ('</div>')();
									 
							pay_popup(popup_content);
}

function gold_paytype(check_gold)
{
	eb_max_gold		= 50000;
	jQuery.unblockUI();
	if(typeof(check_gold) != 'undefined' && check_gold)
	{
		eb_pay_gold = getValueId('gold_money');
		eb_pay_gold = parseInt(eb_pay_gold.toString().replace(/\./g,""));// Bỏ hết số 0 ở đầu dãy số | Bỏ hết dấu . trong dãy số
	}
	
	var popUpContent = cart_join
            ('<div style="margin:0 auto;width:710px; text-align:left">')
                ('<div style="background-color: transparent;">')
                    ('<div style="padding: 0px; color: black; font-size: 12px; height: 900px; display: block;">')
                        ('<div class="classic-popup_eb">')
                            ('<div class="classic-popup-top_eb">')
                                ('<div class="right_eb">')
                                    ('<div class="bg_eb"></div>')
                                ('</div>')
                            ('</div>')
                            ('<div class="classic-popup-main_eb">')
                                ('<div class="classic-popup-title_eb">')
                                    ('<div class="fl_eb">Chọn hình thức nạp Gold</div>')
                                    ('<a onclick = "pay_cancel();" title="Đóng" class="classic-popup-close_eb" href="javascript:void(0)">x</a>')
                                    ('<div class="c_eb"></div>')
                                ('</div>')
                                ('<div class="classic-popup-content_eb">')
                                    ('<div style="padding: 0pt 0pt 10px;" class="content_eb">')
										//Online
										('<div id="paytype_1" class="paymentChooseType_eb sendOnline_eb' + (eb_pay_type==1?' clicked_eb pay_active_eb' : '') + '" onclick="cart_choosePaymentType(1)" onmouseover="cart_overPaymentType(1)" onmouseout="cart_outPaymentType(1)">')
                                            ('<div class="arrowRight_eb">')
                                                ('<div class="radioBox_eb">')
                                                    ('<input type="radio" value="visa" id="radio_1" name="radio_1" '+(eb_pay_type==1?' checked':'')+'>')
                                                ('</div>')
                                                ('<div class="paymentContent_eb">')
                                                    ('<div class="paymentTitle_eb">Nạp từ thẻ Visa, Master Card, thẻ ATM có Internet Banking</div>')
													('<div class="paymentText_eb">Số tiền nạp được chuyển tương ứng thành Gold theo tỉ lệ <font color="red">1 Gold ~ 1 VNĐ</font></div>')
                                                    ('<div class="creditPay_eb bankPay_eb">')
                                                        ('<span id="visa"></span>')
                                                        ('<span id="master"></span>')
                                                        ('<a href="javascript:void(0)" class="fl_eb">')
                                                            ('<span id="vcb"></span>')
                                                        ('</a>')
                                                        ('<a href="javascript:void(0)" class="fl_eb">')
                                                            ('<span id="donga"></span>')

                                                        ('</a>')
                                                        ('<a href="javascript:void(0)" class="fl_eb">')
                                                            ('<span id="techcom"></span>')
                                                        ('</a>')
                                                        ('<a href="javascript:void(0)" class="fl_eb">')
                                                            ('<span id="vietin"></span>')
                                                        ('</a>')
                                                        ('<a onclick="cart_showOnlineBank();"  class="bank_more_link_eb">[ Thêm... ]</a>')
                                                        ('<div class="c_eb"></div>')
                                                        ('<div class="view_more_bank_eb hidden_eb mTop5_eb">')
                                                            ('<a  class="fl_eb">')
                                                                ('<span id="hd"></span>')
                                                            ('</a>')
                                                            ('<a  class="fl_eb">')
                                                                ('<span id="vib"></span>')
                                                            ('</a>')
                                                            ('<a  class="fl_eb">')
                                                                ('<span id="tp"></span>')
                                                            ('</a>')
                                                            ('<div class="c_eb"></div>')
                                                        ('</div>')
                                                    ('</div>')
                                                ('</div>')
                                                ('<div class="c_eb"></div>')
                                                ('<ul id="info_1" class="paymentText_eb paymentGuide_eb hidden_eb">')
                                                    ('<li>Không mất phí thanh toán</li>')
                                                    ('<li>Thẻ của Quý khách phải được kích hoạt chức năng thanh toán trực tuyến hoặc đã đăng ký Internet Banking</li>')
                                                    ('<li>Thanh toán nhanh gọn và có thể sử dụng dịch vụ ngay sau khi thanh toán.</li>')
                                                ('</ul>')
                                            ('</div>')
                                        ('</div>')
										
										('<div id="paytype_6" class="paymentChooseType_eb sendGold_eb'+(eb_pay_type==6?' clicked_eb pay_active_eb':'')+'" onclick="cart_choosePaymentType(6)" onmouseover="cart_overPaymentType(6)" onmouseout="cart_outPaymentType(6)"><div class="arrowRight_eb"><div class="radioBox_eb"><input type="radio" value="mcard" id="radio_6" name="radio_pay" '+(eb_pay_type==6?' checked':'')+'></div><div style="*height:50px" class="paymentContent_eb"><div class="paymentTitle_eb">Nạp Gold bằng thẻ cào điện thoại và thẻ Game <font color="red">(Khấu trừ <b style="font-size:16px">' + (100 - RB_CARD_RATE * 100) + '%</b>)</font></div><div class="paymentText">Hỗ trợ thẻ của mạng Vinaphone, Mobifone, Viettelvà Vcoin. Áp dụng cho mọi loại mệnh giá thẻ.</div><div class="bankPay_eb"><a href="javascript:void(0)" class="fl_eb"><span id="mobiphone"></span></a><a  class="fl_eb"><span id="vinaphone"></span></a><a  class="fl_eb"><span id="viettel"></span></a><a  class="fl_eb"><span id="vcoin"></span></a><div class="c_eb"></div></div><div class="c_eb"></div></div><div class="c_eb"></div></div></div>')
										
										
										//SMS
										('<div id="paytype_7" class="paymentChooseType_eb sendCop_eb'+(eb_pay_type==7?' clicked_eb pay_active_eb':'')+'" onclick="cart_choosePaymentType(7)" onmouseover="cart_overPaymentType(7)" onmouseout="cart_outPaymentType(7)"><div class="arrowRight_eb"><div class="radioBox_eb"><input type="radio" value="cop" id="radio_7" name="radio_pay" '+(eb_pay_type==7?' checked':'')+'></div><div class="paymentContent_eb"><div class="paymentTitle_eb">Nạp Gold bằng SMS <font color="red">(Khấu trừ <b style="font-size:16px">' + 
							(100 - Math.floor(100 * SMS_RATE/15000)) 
						 + '%</b>)</font></div><ul style="padding-left:15px" class="paymentText_eb"><li>Chấp nhận các số điện thoại di động của các mạng: Vina, Mobi, Viettel, Beeline, Vietnammobile và Sfone.</li><li>Mỗi SMS bị trừ <font color="red"><b>15.000</b></font> đồng bạn nhận được <font color="red"><b>' + number_format(SMS_RATE) + '</b></font> Gold.</li><li>Mỗi SMS sẽ nhận được tin nhắn trả về.</li></ul></div><div class="c_eb"></div></div></div>')
										
										//Home
										('<div id="paytype_2" class="paymentChooseType_eb sendCod_eb' + (eb_pay_type == 2 ? ' clicked_eb pay_active_eb' : '') + '" onclick="cart_choosePaymentType(2)" onmouseover="cart_overPaymentType(2)" onmouseout="cart_outPaymentType(2)">')
											('<div class="arrowRight_eb pBottom10_eb">')
                                                ('<div class="radioBox_eb">')
                                                    ('<input type="radio" value="cod" id="radio_2" name="radio_2" '+( eb_pay_type == 2?' checked="checked"' : '' ) + '>')
                                                ('</div>')
                                                ('<div class="paymentContent_eb">')
                                                    ('<div class="paymentTitle_eb">Nạp Gold thu tiền tận nơi <font color="red">(1 Gold ~ 1 VNĐ)</font></div>')
                                                    ('<div class="paymentText_eb">Trong thời gian từ 2-7 ngày làm việc, nhân viên RồngBay sẽ đến tận nơi thu tiền nạp Gold.</div>')
                                                ('</div>')
                                                ('<div class="c_eb"></div>')
                                                ('<ul id="info_2" class="paymentText_eb paymentGuide_eb hidden_eb">')
                                                    ('<li>Quý khách có thể bị mất phí khi chọn hình thức này.</li>')
                                                    ('<li>Nhân viên giao phiếu của RồngBay sẽ liên hệ với Quý khách trước khi giao</li>')
                                                    ('<li>Quý khách chỉ được sử dụng dịch vụ sau khi đã thanh toán tiền cho nhân viên thu tiền.</li>')
                                                ('</ul>')
											('</div>')
                                        ('</div>')
										
										
										//At EB
                                        ('<div id="paytype_3" class="paymentChooseType_eb sendEb_eb' + ( eb_pay_type == 3 ? ' clicked_eb pay_active_eb' : '' ) + '"  onclick="cart_choosePaymentType(3)" onmouseover="cart_overPaymentType(3)" onmouseout="cart_outPaymentType(3)">')
                                            ('<div class="arrowRight_eb pBottom10_eb">')
                                                ('<div class="radioBox_eb">')
                                                    ('<input type="radio" value="cod" id="radio_3" name="radio_3" ' + ( eb_pay_type == 3 ? ' checked' : '' ) + '>')
                                                ('</div>')
                                                ('<div class="paymentContent_eb">')
                                                    ('<div class="paymentTitle_eb">Nạp Gold tại trụ sở RồngBay <font color="red">(1 Gold ~ 1 VNĐ)</font></div>')
                                                    ('<div class="paymentText_eb">Quý khách đến trực tiếp tại trụ sở RồngBay (Phòng Kế Toán - Công Ty CP Truyền Thông Việt Nam - Tầng 17, Tòa nhà 18 Tam Trinh- P.Minh Khai  - Q.Hai Bà Trưng - TP.Hà Nội) để nộp tiền mặt.</div>')
                                                ('</div>')
                                                ('<div class="c_eb"></div>')
                                                ('<ul id="info_3" class="paymentText_eb paymentGuide_eb hidden_eb">')
                                                    ('<li>Hình thức này quý khách phải đến trụ sở RồngBay để nộp tiền.</li>')
                                                    ('<li>Gold sẽ được nạp ngay sau khi quý khách hoàn thành thanh toán</li>')
                                                ('</ul>')
                                            ('</div>')
                                        ('</div>')


										//ATM
										('<div id="paytype_4" class="paymentChooseType_eb sendAtm_eb' + ( eb_pay_type == 4 ? ' clicked_eb pay_active_eb' : '' ) + '" onclick="cart_choosePaymentType(4)" onmouseover="cart_overPaymentType(4)" onmouseout="cart_outPaymentType(4)">')
                                        	('<div class="arrowRight_eb">')
                                                ('<div class="radioBox_eb">')
                                                    ('<input type="radio" value="atm" id="radio_4" name="radio_4" '+(eb_pay_type==4?' checked':'')+'>')
												('</div>')
                                                ('<div class="paymentContent_eb">')
                                                    ('<div class="paymentTitle_eb">Chuyển khoản <span>(Quý khách tự thanh toán chi phí chuyển khoản)</span></div>')
													('<div class="paymentText_eb">- Số tiền nạp được chuyển tương ứng thành Gold theo tỉ lệ <font color="red">1 Gold ~ 1 VNĐ</font></div>')
                                                    ('<div class="paymentText_eb">- Quý khách chuyển tiền vào tài khoản của RồngBay.com. Quý khách phải chờ từ <span style="color:rgb(91, 91, 91);"><b>4-24</b></span> giờ để RồngBay.com xác nhận giao dịch.</div>')
                                                ('</div>')
                                                ('<div class="c_eb"></div>')
												
                                                ('<div class="bank_eb ' + ( (cart_bank_type && eb_pay_type == 4) ? '' : 'hidden_eb' ) + '" id="bank_hidden">')
                                                    ('<div class="bank_title_eb">Chọn ngân hàng của RồngBay.com mà Quý khách sẽ chuyển tiền vào:</div>')
                                                    ('<div class="bank_info_eb" style="display:none">')
                                                        ('<div class="bank_detail_eb"></div>')
														('<a class="bank_go_eb" onclick="cart_listBank()">Chọn ngân hàng khác</a>')
														('<div class="c_eb"></div>')
                                                    ('</div>')
                                                    
													('<div class="bank_list_eb">')
                                                        ('<a class="fl_eb" onclick="cart_chooseBank(this, \'vc_bank\')" >')
                                                            ('<span id="vcb"></span>')
                                                        ('</a>')
                                                        ('<a class="fl_eb" onclick="cart_chooseBank(this, \'donga_bank\')" >')
                                                            ('<span id="donga"></span>')
                                                        ('</a>')
                                                        ('<a class="fl_eb" onclick="cart_chooseBank(this, \'techcom_bank\')" >')
                                                            ('<span id="techcom"></span>')
                                                        ('</a>')
                                                        ('<a class="fl_eb" onclick="cart_chooseBank(this, \'agribank\')" >')
                                                            ('<span id="agri"></span>')
                                                        ('</a>')
                                                        ('<a class="fl_eb" onclick="cart_chooseBank(this, \'bidv_bank\')" >')
                                                            ('<span id="bidv"></span>')
                                                        ('</a>')
                                                        ('<a class="fl_eb" onclick="cart_chooseBank(this, \'vietinbank\')" >')
                                                            ('<span id="vietin"></span>')
                                                        ('</a>')
                                                        ('<a class="fl_eb" onclick="cart_chooseBank(this, \'mb_bank\')" >')
                                                            ('<span id="mb"></span>')
                                                        ('</a>')
                                                        ('<a class="fl_eb" onclick="cart_chooseBank(this, \'acb_bank\')" >')
                                                            ('<span id="acb"></span>')
                                                        ('</a>')
                                                        ('<a class="fl_eb" onclick="cart_chooseBank(this, \'vib_bank\')" >')
                                                            ('<span id="vib"></span>')
                                                        ('</a>')
                                                        ('<div class="c_eb"></div>')
                                                    ('</div>')
													
                                                    ('<ul id="info_4" class="paymentText_eb paymentGuide_eb">')
                                                        ('<li>Khi chuyển khoản qua Internet Banking hoặc Quầy giao dịch, Quý khách vui lòng tự chịu phí chuyển khoản.</li>')
                                                        ('<li>Sau khi chuyển khoản, Quý khách vui lòng thông báo cho RồngBay được biết qua địa chỉ mail: linhngothuy@enbac.com hoặc điện thoại: 04.3632.1221 máy lẻ 227 </li>')
                                                        ('<li>Dịch vụ được kích hoạt chỉ khi tiền đã về tài khoản của RồngBay</li>')
                                                    ('</ul>')
                                                ('</div>')
                                            ('</div>')
                                        ('</div>')
	
                                        //Mua tra sau (11/2/2011)
                                        /*(''+(is_premium?'<div id="paytype_5" class="paymentChooseType_eb sendCop_eb'+(eb_pay_type==5?' clicked_eb pay_active_eb':'')+'"  onclick="cart_choosePaymentType(5)" onmouseover="cart_overPaymentType(5)" onmouseout="cart_outPaymentType(5)">':' <div id="paytype_5" style="display:none" >')+'')
                                            ('<div class="arrowRight_eb pBottom10_eb">')
                                                ('<div class="radioBox_eb">')
                                                    ('<input type="radio" value="cod" id="radio_5" name="radio_5" '+(eb_pay_type==5?' checked':'')+'>')
                                                ('</div>')
                                                ('<div class="paymentContent_eb">')
                                                    ('<div class="paymentTitle_eb">Sử dụng dịch vụ thấu chi</span> <font color="red">(1 Gold ~ 1 VNĐ)</font></div>')
                                                    ('<div class="paymentText_eb">Chỉ áp dụng cho khách hàng đã ký hợp đồng sử dụng dịch vụ thấu chi với RồngBay</div>')
                                                ('</div>')
                                                ('<div class="c_eb"></div>')
                                                ('<ul id="info_5" class="paymentText_eb paymentGuide_eb hidden_eb">')
                                                    ('<li>Hình thức này quý khách có thể dùng trước trả tiền sau.</li>')
                                                    ('<li>Gold sẽ được nạp khi số hạn mức của quý khách sử dụng còn đủ với số tiền cần thanh toán để nạp Gold</li>')
										            ('<li>Hạn mức của quý khách còn: <font color="red"><b>' + number_format(money_quota * 1000) + '</b></font> VNĐ</li>')
                                                ('</ul>')
                                            ('</div>')
                                        ('</div>')*/
                                        //end mua tra sau

                                        ('<div class="c_eb"></div>')
                                        ('<div align="center_eb" class="mRight20_eb" style="padding-bottom:20px">')
                                            ('<div class="mTop10_eb">')
                                                ('<a class="blueButton_eb mLeft20_eb fL_eb"  onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
                                                ('<a class="blueButton_eb" style="float:right"  onclick="gold_check_type(1);"><span><span>TIẾP TỤC <b>&raquo;</b></span></span></a>')
												('<a class="blueButton_eb mRight20_eb" style="float:right"  onclick="pay_gold();"><span><span><b>«</b> QUAY LẠI</span></span></a>')
                                            ('</div>')
                                            ('<div class="c_eb"></div>')
                                        ('</div>')
                                    ('</div>')
                                ('</div>')
                            ('</div>')
                            ('<div class="classic-popup-bottom_eb">')
                                ('<div class="right_eb">')
                                    ('<div class="bg_eb"></div>')
                                ('</div>')
                            ('</div>')
                        ('</div>')
                    ('</div>')
                ('</div>')
            ('</div>')();
	
	pay_popup(popUpContent);
}

//Hàm kiểm tra việc chọn hình thức thanh toán, nhập thông tin người dùng
function gold_check_type(check)
{
	if(eb_pay_type == 6)//Card charge
	{
//		gold_pay_card();
		info_user_card();
		return false;
	}
	else if(eb_pay_type == 7)//SMS
	{
		gold_sms();
		return false;
	}
	
	if(typeof(check) != 'undefined' && check)
	{
		if(eb_pay_type == 0)
		{
			alert("Quý khách chưa chọn hình thức nạp Gold.");
			return false;
		}
	}
	gold_input();
}

//Nhập số Gold muốn nạp
function gold_input(update_info, accept_payment)
{
	if(typeof(accept_payment) != 'undefined' && accept_payment)
	{
		if(jQuery('#check-regulations').is(':checked'))
		{
			eb_pay_accepted = 1;
		}
		else
		{
			eb_pay_accepted = 0;
		}
	}
	
	var str_type = "";
	
	if(typeof(update_info) != 'undefined' && update_info)
	{
		f_pay_update_info();
	}
	
	eb_max_gold = 50000;
	
	if(eb_pay_type == 1)//Online
	{
		eb_max_gold = 200000;
		
		str_type = 'qua hình thức Online Soha Pay';
	}
	else if(eb_pay_type == 2)//Thu tận nơi
	{
		eb_max_gold = 200000;
		
		str_type = 'qua hình thức thu tiền tận nơi';
	}
	else if(eb_pay_type == 3)//Tại EB
	{
		str_type = 'tại trụ sở RồngBay';
	}
	else if(eb_pay_type == 4)
	{
		str_type = 'qua hình thức chuyển khoản';
		
		if(cart_bank_type == '')//Check Ngân hàng
		{
			alert("Bạn chưa chọn ngân hàng!");
			return false;
		}
	}
	else if(eb_pay_type == 5)//Tại EB
	{
		str_type = 'qua hình thức thấu chi';
	}
	
	// Goi y khach hang nạp Gold	
	gold_suggest = gold_suggest>eb_max_gold?gold_suggest:eb_max_gold;
	
	jQuery.unblockUI();
	var templ = cart_join
				('<div id="cart-check-out-step1" style="margin:0 auto;width:595px; text-align:left">')
					('<div style="background-color: transparent;">')
						('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
							('<div class="classic-popup_eb">')
								('<div class="classic-popup-top_eb">')
									('<div class="right_eb">')
										('<div class="bg_eb"></div>')
									('</div>')
								('</div>')
								('<div class="classic-popup-main_eb">')
									('<div class="classic-popup-title_eb">')
										('<div class="fl_eb">Nhập số Gold muốn nạp ' + str_type + '</div>')
										('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" >x</a>')
										('<div class="c_eb"></div>')
									('</div>')
									('<div class="classic-popup-content_eb">')
										('<div class="content_eb">')
											('<div class="reg_cart_form_eb">')
												('<div id="cError"></div>')
												('<div class="gold-content mTop10_eb">')
													('<div style="margin:0 0 10px 55px" class="gold-title">\
													 	<div class="fl">\
															<span style="line-height:32px">Số Gold cần nạp:</span>\
														</div>\
														<div class="fl mLeft5_eb">\
															<div>\
																<input type="text" onkeypress="return f_number_only(this, event)" onfocus="this.select()" onkeyup="f_mix_money(this);" name="gold_money" id="gold_money" value="' + number_format(gold_suggest) + '"> <b style="color:red">1 Gold ~ 1 VNĐ</b>\
																</div>\
																<div id="mTop5" class="paymentText_eb">Mỗi lần nạp phải từ <font color="red"><b>' + number_format(eb_max_gold) +'</b> Gold</font> trở lên</div>\
																' + ( eb_pay_type == 5 ? '<div id="mTop5" class="paymentText_eb">Hạn mức tài khoản của bạn còn: <font color="red"><b>' + number_format(money_quota * 1000) +'</b></font> VNĐ</div>' : '') + 
															'</div>\
															<div class="c"></div>\
														</div>')
												('</div>')
												('<div class="mTop10_eb fl_eb">')
													('<a class="blueButton_eb"  onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
												('</div>')
												('<div class="mTop10_eb">')
													('<a class="blueButton_eb mLeft10_eb" style="float:right" onclick="gold_update_info(1);" >')
														('<span>')
															('<span>TIẾP TỤC <b>»</b></span>')
														('</span>')
													('</a>')
													('<a class="blueButton_eb" style="float:right" onclick="gold_paytype(1);" >')
														('<span>')
															('<span><b>«</b> QUAY LẠI</span>')
														('</span>')
													('</a>')
													('<div class="c_eb"></div>')
												('</div>')
												('<div class="c_eb"></div>')
											('</div>')
										('</div>')
									('</div>')
								('</div>')
								('<div class="classic-popup-bottom_eb">')
									('<div class="right_eb">')
										('<div class="bg_eb"></div>')
									('</div>')
								('</div>')
							('</div>')
						('</div>')
					('</div>')
				 ('</div>')();
				 
		pay_popup(templ);
		
		jQuery("#gold_money").select();
}

//Check gold input & update infor
function gold_update_info(check_gold, update_info, accept_payment)
{
	if(typeof(check_gold) != 'undefined' && check_gold)
	{
		eb_pay_gold = getValueId('gold_money');
		eb_pay_gold = parseInt(eb_pay_gold.toString().replace(/\./g,""));// Bỏ hết số 0 ở đầu dãy số | Bỏ hết dấu . trong dãy số
	
		if(eb_pay_gold < eb_max_gold)
		{
			alert('Số Gold bạn cần nạp phải lớn hơn mức tối thiểu là ' + number_format(eb_max_gold) + ' Gold!');
			jQuery('#gold_money').focus();
			return false;
		}
		
		if(eb_pay_gold > 20000000)
		{
			alert('Số Gold bạn nhập vào quá lớn, hãy nhập lại!');
			jQuery('#gold_money').focus();
			return false;
		}
	}
	jQuery.unblockUI();
	if(eb_pay_type == 3)//Tại trụ sở EB 
	{
		f_pay_gold_at_eb();
		return false;
	}
	else if(eb_pay_type == 4)//Chuyển khoản
	{
		f_pay_gold_ck();
		return false;
	}
	else if(eb_pay_type == 5)//Mua trả sau
	{
		if(money_quota * 1000 < eb_pay_gold)//hết hạn mức tiền
		{
			alert('Hạn mức tiền còn lại của bạn không đủ để nạp ' + number_format(eb_pay_gold) + ' Gold!');
			return false;
		}
		
		f_pay_gold_premium();
	}
	else
	{
		if(typeof(update_info) != 'undefined' && update_info)
		{
			f_pay_update_info();
		}
		
		if(typeof(accept_payment) != 'undefined' && accept_payment)
		{
			if(jQuery('#check-regulations').is(':checked'))
			{
				eb_pay_accepted = 1;
			}
			else
			{
				eb_pay_accepted = 0;
			}
		}
		
		if(eb_pay_type == 2)//Thu tiền tận nơi
		{
			gold_pay_info_home();
		}
		else//1: Online
		{			
			gold_pay_info_soha();
		}
	}
}

//Nạp Gold online soha pay
function gold_pay_info_soha()
{
	var templ = cart_join
				('<div id="cart-check-out-step1" style="margin:0 auto;width:633px;text-align:left">')
					('<div style="background-color: transparent;">')
						('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
							('<div class="classic-popup_eb">')
								('<div class="classic-popup-top_eb">')
									('<div class="right_eb">')
										('<div class="bg_eb"></div>')
									('</div>')
								('</div>')
								('<div class="classic-popup-main_eb">')
									('<div class="classic-popup-title_eb">')
										('<div class="fl_eb">Nhập thông tin cá nhân</div>')
										('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" >x</a>')
										('<div class="c_eb"></div>')
									('</div>')
									('<div class="classic-popup-content_eb">')
										('<div class="content_eb">')
											('<div class="reg_cart_form_eb">')
												('<form id="cartRegisterForm" name="cartRegisterForm">')
													('<div class="cartNewForm_eb">')
														('<div id="cError_eb"></div>')
														('<div class="infoInputLeft_eb">')
															('<div class="guestInfo_eb">')
																('<div class="newCustomerInfo_eb">')
																	('<div class="input_eb">')
																		('Tài khoản: <font color=blue>'+user_email+'</font> [ID TK: '+user_id+']')
																	('</div>')
																	('<div class="description_eb" style="font-size:14px"><font color=red>(Tài khoản người được nạp Gold)</font></div>')
																('</div>')
																('<div class="newCustomerInfo_eb mTop5_eb">')
																	('<div class="input_eb">')
																		('Họ tên: <input type="text" value="'+eb_user_info.full_name+'" name="ho_ten" id="ho_ten" style="width: 209px;">')
																	('</div>')
																	('<div class="description_eb">Vui lòng cho chúng tôi biết Họ tên của Quý khách</div>')
																('</div>')
																('<div class="newCustomerInfo_eb mTop5_eb">')
																	('<div class="input_eb">')
																		('Di động: <input type="text" onkeypress="return f_number_only(this, event)" maxlength="20" value="'+eb_user_info.mobile+'" name="dien_thoai" id="dien_thoai" style="width: 121px;">')
																	('</div>')
																	('<div class="description_eb">Vui lòng nhập đúng số điện thoại di động</div>')
																('</div>')
																('<div class="c_eb"></div>')
															('</div>')
														('</div>')
														('<div class="infoInputRight_eb">')
															('<div class="newLabel_eb">Số Gold nạp: <span style="color:blue">' + number_format(eb_pay_gold) + '</span> Gold</div>')
															('<div class="mTop15_eb">')
																('<div align="right" class="bgAllPrice_eb">')
																	('Tổng tiền: <span style="color:red"><span id="bgAllPrice">' 
																	 +
																		number_format(1000 * Math.ceil(eb_pay_gold/1000)) 
																	 + '</span> VNĐ</span>')
																('</div>')
															('</div>')
														('</div>')
														('<div class="c_eb"></div>')
													('</div>')
												('</form>')
												('<div class="mTop10_eb fl_eb">')
													('<a class="blueButton_eb"  onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
												('</div>')
												('<div class="mTop10_eb">')
													('<a class="blueButton_eb mLeft10_eb" style="float:right" onclick="gold_pay_confirm();" >')
														('<span>')
															('<span>TIẾP TỤC <b>»</b></span>')
														('</span>')
													('</a>')
													('<a class="blueButton_eb" style="float:right" onclick="gold_input(1);" >')
														('<span>')
															('<span><b>«</b> QUAY LẠI</span>')
														('</span>')
													('</a>')
													('<div class="c_eb"></div>')
												('</div>')
												('<div class="c_eb"></div>')
											('</div>')
										('</div>')
									('</div>')
								('</div>')
								('<div class="classic-popup-bottom_eb">')
									('<div class="right_eb">')
										('<div class="bg_eb"></div>')
									('</div>')
								('</div>')
							('</div>')
						('</div>')
					('</div>')
				 ('</div>')();
				 
		pay_popup(templ);
}

//Nạp Gold tận nơi
function gold_pay_info_home()
{
	var templ = cart_join
				('<div id="cart-check-out-step1" style="margin:0 auto;width:710px; text-align:left">')
					('<div style="background-color: transparent;">')
							('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
								('<div class="classic-popup_eb">')
									('<div class="classic-popup-top_eb">')
										('<div class="right_eb">')
											('<div class="bg_eb"></div>')
										('</div>')
									('</div>')
	
									('<div class="classic-popup-main_eb">')
										('<div class="classic-popup-title_eb">')
											('<div class="fl_eb">Nhập thông tin cá nhân</div>')
											('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" >x</a>')
											('<div class="c_eb"></div>')
										('</div>')
									
										('<div class="classic-popup-content_eb">')
											('<div class="content_eb">')
												('<div class="reg_cart_form_eb">')
													('<form id="cartRegisterForm" name="cartRegisterForm">')
														('<div class="cartNewForm_eb">')
															('<div id="cError_eb"></div>')
															('<div class="infoInputLeft_eb">')
																('<div class="newCustomerInfo_eb">')
																	('<div class="input_eb">')
																		('Tài khoản: <font color=blue>'+user_email+'</font> [ID: '+user_id+']')
																	('</div>')
																	('<div class="description_eb" style="font-size:14px"><font color=red>(Tài khoản người được nạp Gold)</font></div>')
																('</div>')
																('<div class="newCustomerInfo_eb mTop5_eb">')
																	('<div class="input_eb">')
																		('Họ tên: <input type="text" value="'+eb_user_info.full_name+'" name="ho_ten" id="ho_ten" style="width: 209px;">')
																	('</div>')
																	('<div class="description_eb">Vui lòng cho chúng tôi biết Họ tên của Quý khách</div>')
																('</div>')
																('<div class="newCustomerInfo_eb mTop5_eb">')
																	('<div class="input_eb">')
																		('Điện thoại di động: <input type="text" onkeypress="return f_number_only(this, event)" maxlength="20" value="'+eb_user_info.mobile+'" name="dien_thoai" id="dien_thoai" style="width: 121px;">')
																	('</div>')
																	('<div class="description_eb">Vui lòng nhập đúng số điện thoại di động</div>')
																('</div>')
																('<div class="newCustomerInfo_eb mTop5_eb">')
																	('<div class="input_eb">')
																		('<div class="fl" style="margin-left:0px">Địa chỉ: <textarea class="fr" name="dia_chi" id="dia_chi" style="width:209px;height:80px">'+eb_user_info.dia_chi+'</textarea></div> ')
																	('</div><div class="c"></div>')
																	('<div class="description_eb">Vui lòng nhập đúng địa chỉ của quý khách để nhân viên RồngBay có thể tới thu tiền.</div>')
																('</div>')
																('<div class="newCustomerInfo_eb mTop5_eb">')
																	('<div class="input_eb">')
																		('Thành phố: <select name="thanh_pho" id="thanh_pho">')
																			('<option value="1" '+(eb_user_info.thanh_pho==1? 'selected':'')+' id="tp1">Hà Nội</option>')
																			('<option value="2" '+(eb_user_info.thanh_pho==2? 'selected':'')+' id="tp2">Hồ Chí Minh</option>')
																		('</select>')
																	('</div>')
																	('<div class="description_eb">Vui lòng cho chúng tôi biết thành phố Quý khách đang sống</div>')
                                                            	('</div>')
																('<div class="newCustomerInfo_eb mTop5_eb">')
																	('<div class="input_eb">')
																		('Thứ: <select name="ngay" id="ngay">')
																			('<option value="2" '+(eb_user_info.ngay==2? 'selected':'')+' id="t2">Thứ Hai</option>')
																			('<option value="3" '+(eb_user_info.ngay==3? 'selected':'')+' id="t3">Thứ Ba</option>')
																			('<option value="4" '+(eb_user_info.ngay==4? 'selected':'')+' id="t4">Thứ Tư</option>')
																			('<option value="5" '+(eb_user_info.ngay==5? 'selected':'')+' id="t5">Thứ Năm</option>')
																			('<option value="6" '+(eb_user_info.ngay==6? 'selected':'')+' id="t6">Thứ Sáu</option>')
																		('</select>  ')
																		
																		('Thời gian: <select name="thoi_gian" id="thoi_gian">')
																			('<option value="1" '+(eb_user_info.thoi_gian==1? 'selected':'')+' id="b1">Sáng</option>')
																			('<option value="2" '+(eb_user_info.thoi_gian==2? 'selected':'')+' id="b2">Chiều</option>')
																			('<option value="3" '+(eb_user_info.thoi_gian==3? 'selected':'')+' id="b3">Tối</option>')
																		('</select>')
																	('</div>')
																	('<div class="description_eb">Vui lòng cho chúng tôi biết địa chỉ chính xác và thời gian Quý Khách có thể ở nhà.</div>')
																('</div>')
																('<div class="c_eb"></div>')
															('</div>')
															('<div class="infoInputRight_eb" style="margin-left:10px">')
															('<div class="newLabel_eb">Số Gold nạp: <span style="color:blue">' + number_format(eb_pay_gold) + '</span> Gold</div>')
															('<div class="mTop15_eb">')
																('<div align="right" class="bgAllPrice_eb">')
																	('Tổng tiền: <span style="color:red"><span id="bgAllPrice">' 
																	 +
																		number_format(1000 * Math.ceil(eb_pay_gold/1000)) 
																	 + '</span> VNĐ</span>')
																('</div>')
															('</div>')
														('</div>')
															('<div class="c_eb"></div>')
														('</div>')
													('</form>')
	
													('<div class="mTop10_eb fl_eb">')
														('<a class="blueButton_eb"  onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
													('</div>')
													('<div class="mTop10_eb">')
														('<a class="blueButton_eb mLeft10_eb" style="float:right" onclick="gold_pay_confirm();" >')
															('<span>')
																('<span>TIẾP TỤC <b>»</b></span>')
															('</span>')
														('</a>')
														('<a class="blueButton_eb" style="float:right" onclick="gold_input(1);" >')
															('<span>')
																('<span><b>«</b> QUAY LẠI</span>')
															('</span>')
														('</a>')
														('<div class="c_eb"></div>')
													('</div>')
													('<div class="c_eb"></div>')
												('</div>')
											('</div>')
										('</div>')
	
									('</div>')
									('<div class="classic-popup-bottom_eb">')
										('<div class="right_eb">')
											('<div class="bg_eb"></div>')
										('</div>')
									('</div>')
								('</div>')
							('</div>')
						('</div>')
				 ('</div>')();
				 
	pay_popup(templ);
}

//Hàm confirm thông tin thanh toán
function gold_pay_confirm()
{
	//check input
	if(jQuery.trim(jQuery("#ho_ten").val()) == ''){
		alert("Hãy nhập họ tên");
		jQuery("#ho_ten").focus();
		return false;
	}

	if(jQuery.trim(jQuery("#dien_thoai").val()) == ""){
		alert("Hãy nhập điện thoại.");
		jQuery("#dien_thoai").focus();
		return false;
	}
	else if(isNaN(jQuery.trim(jQuery("#dien_thoai").val()))){
		alert("Điện thoại phải nhập số");
		jQuery("#dien_thoai").focus();
		return false;
	}
	
	if(eb_pay_type == 2)
	{
		if(jQuery.trim(jQuery("#dia_chi").val()) == ""){
			alert("Hãy nhập địa chỉ thu tiền.");
			jQuery("#dia_chi").focus();
			return false;
		}
	
		eb_user_info.dia_chi 		= jQuery.trim(jQuery("#dia_chi").val());
		eb_user_info.thanh_pho 		= jQuery("#thanh_pho").val();
		eb_user_info.ngay 			= jQuery("#ngay").val();
		eb_user_info.thoi_gian  	= jQuery("#thoi_gian").val();
		
		eb_user_info.txt_thanhpho 	= jQuery("#tp"+eb_user_info.thanh_pho).html();
		eb_user_info.txt_ngay 		= jQuery("#t"+eb_user_info.ngay).html();
		eb_user_info.txt_thoigian 	= jQuery("#b"+eb_user_info.thoi_gian).html();
	}
	
	
	eb_user_info.full_name 	= jQuery.trim(jQuery("#ho_ten").val());
	eb_user_info.mobile 	= jQuery.trim(jQuery("#dien_thoai").val());

	jQuery.unblockUI();
	var content = cart_join
                ('<div style="margin:0 auto;width:815px; text-align:left">')
                    ('<div style="background-color: transparent;">')
                        ('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
                            ('<div class="classic-popup_eb">')
                                ('<div class="classic-popup-top_eb">')
                                    ('<div class="right_eb">')
                                        ('<div class="bg_eb"></div>')
                                    ('</div>')
                                ('</div>')
                                ('<div class="classic-popup-main_eb">')
                                    ('<div class="classic-popup-title_eb">')
                                        ('<div class="fl_eb">Thanh Toán nạp Gold</div>')
                                        ('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" >x</a>')
                                        ('<div class="c_eb"></div>')
                                    ('</div>')

                                    ('<div class="classic-popup-content_eb">')
                                        ('<div style="padding: 10px 20px;" class="content_eb">')
                                            //Thong tin khach hang
                                            ('<div class="box-gradien_eb pBottom10_eb" id="idUserInfo">')
                                                ('<div class="title_eb">Thông tin khách hàng</div>')
                                                ('<div id="pTop10" class="content_eb">')
                                                ('</div>')
                                            ('</div>')

                                            //hinh thuc thanh toan
                                            ('<div class="box-gradien_eb pBottom10_eb pTop15_eb mTop10_eb" id="paymentTypeInfo">')
                                                ('<div class="title_eb">')
                                                ('</div>')
                                                ('<div class="content_eb">')
                                                    ('<div class="c_eb"></div>')
                                                ('</div>')
                                            ('</div>')

                                            //Thong tin dich vu
                                            ('<div id="box-gradien2" class="box-gradien_eb mTop10_eb">')
                                                ('<div class="title_eb mTop10_eb mLeft10_eb">Thông tin dịch vụ</div>')
                                                ('<div id="pTop5" class="content_eb">')
                                                    ('<table width="100%" cellspacing="0" cellpadding="0" border="0" class="cart-finish_eb">')
                                                        ('<tr>')
                                                            ('<th class="head_eb bRight_eb" align="center" >Dịch vụ</th>')
                                                            ('<th class="head_eb" align="center">Tổng giá trị thanh toán</th>')
                                                        ('</tr>')
                                                        ('<tr>')
                                                            ('<td valign="top" align="center" class="item_eb bRight_eb" style="font-size:16px;color:#00A0DC">Nạp <font color="#F10000"><b>' + number_format(eb_pay_gold) + '</b></font> Gold cho thành viên <font color="#F10000"><b>' + user_email + '</b></font></td>')
																	('<td valign="top" align="center" class="item_eb" width="30%" style="font-size:16px;color:#00A0DC"><span id="bgAllPrice">'  + 
																	 number_format(1000 * Math.ceil(eb_pay_gold/1000)) 
															+ '</span> VNĐ</td>')
                                                        ('</tr>')
                                                    ('</table>')
                                                 ('</div>')
                                            ('</div>')
                                            ('<div style="font-size: 16px; width: 758px; font-weight:normal" class="mTop10_eb">')
                                                ('<input type="checkbox" class="checkbox" id="check-regulations"' + (eb_pay_accepted? ' checked="checked"':'') +'/>')
                                                ('<label for="check-regulations"><b>Tôi đã đọc và đồng ý với các <a href="http://blog.rongbay.com/2011/11/30/409/" target="_blank">điều khoản</a> của RồngBay.com</b></label>')
                                            ('</div>')

                                            ('<div class="mTop10_eb fl_eb">')
                                                ('<a class="blueButton_eb"  onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
                                            ('</div>')
                                            ('<div class="mTop10_eb">')
                                                ('<a id="cart_pay_button" class="blueButton_eb mLeft10_eb" style="float:right">')
                                                    ('<span onclick="f_gold_pay_accept();">')
                                                        ('<span>THANH TOÁN</span>')
                                                    ('</span>')
                                                ('</a>')
                                                ('<a class="blueButton_eb" style="float:right" onclick="gold_update_info(0,1,1);" >')
                                                    ('<span>')
                                                        ('<span><b>«</b> QUAY LẠI</span>')
                                                    ('</span>')
                                                ('</a>')
                                                ('<div class="c_eb"></div>')
                                            ('</div>')
                                            ('<div class="c_eb"></div>')
                                        ('</div>')
                                    ('</div>')

                                ('</div>')
                                ('<div class="classic-popup-bottom_eb">')
                                    ('<div class="right_eb">')
                                        ('<div class="bg_eb"></div>')
                                    ('</div>')
                                ('</div>')
                            ('</div>')
                        ('</div>')
                    ('</div>')
                ('</div>')();
				
	pay_popup( content);
	//Cập nhật nội dung cho templates theo từng kiểu thanh toán (eb_pay_type)
   	if(eb_pay_type == 1)//Thanh toán online
	{
		//Thong tin khach hang
         jQuery("#idUserInfo .content_eb").html(cart_join
				('<a class="blueButton_eb" style="float:right" onclick="gold_update_info(0,1,1);" >')
                    ('<span>')
                        ('<span>SỬA THÔNG TIN CÁ NHÂN</span>')
                    ('</span>')
                ('</a>')
                ('<div style="font-weight:normal">')
                    ('<strong>Tài khoản được nạp Gold: </strong>')
                    ('<span class="cff9200_eb">' + user_email + '</span>')
                ('</div>')
                ('<div class="mTop5_eb" style="font-weight:normal">')
                    ('<strong>Họ tên quý khách: </strong>')
                    ('<span class="cff9200_eb">' + eb_user_info.full_name + '</span>')
                ('</div>')
                ('<div class="mTop5_eb" style="font-weight:normal">')
                    ('<strong>Điện thoại di động quý khách: </strong>')
                    ('<span class="cff9200_eb">' + eb_user_info.mobile + '</span>')
                ('</div>')
                
                ('<div class="c_eb"></div>')()
            );
		 
        //hinh thuc thanh toan
        jQuery("#paymentTypeInfo .title_eb").html(cart_join
                ('Hình thức thanh toán: <span style="font-size: 12px; font-weight: normal; text-transform: none;">Thanh toán Online</span>')()
            );
		
        jQuery("#paymentTypeInfo .content_eb").html(cart_join
            ('<div class="fl_eb">')
                ('<a title="sohapay.com" target="_blank" href="http://sohapay.com/">')
                    ('<img width="207" height="94" border="0" src="style/images/logo_sohapay.png">')
                ('</a>')
            ('</div>')
            ('<div class="fl_eb">')
                ('<div class="mLeft25_eb">')
                    ('<div>')
                        ('<div style="font-weight:normal">')
                            ('<strong style="color: red;">Chú ý:</strong> Quý khách phải có <b>thẻ Visa/Master</b> đã kích hoạt thanh toán online</div>')
                        ('<div class="mTop5_eb" style="font-weight:normal">hoặc <b>thẻ ATM đã đăng kí sử dụng internet banking</b> với ngân hàng phát hành thẻ</div>')
                    ('</div>')
                    ('<div class="mTop10_eb" style="font-weight:normal">Thanh toán Online được đảm bảo bởi <a title="sohapay.com" target="_blank" href="http://sohapay.com/">Soha Pay</a></div>')
                ('</div>')
            ('</div>')
            ('<div class="c_eb"></div>')()
        );
    }
	else if(eb_pay_type == 2)//Thu tiền tận nơi
	{
        //Thong tin khach hang
         jQuery("#idUserInfo .content_eb").html(cart_join
				('<a class="blueButton_eb" style="float:right" onclick="gold_update_info(0,1,1);" >')
                    ('<span>')
                        ('<span>SỬA THÔNG TIN CÁ NHÂN</span>')
                    ('</span>')
                ('</a>')
                ('<div>')
                    ('<strong>Tài khoản được nạp Gold: </strong>')
                    ('<span class="cff9200_eb">' + user_email + '</span>')
                ('</div>')
                ('<div class="mTop5_eb">')
                    ('<strong>Họ tên quý khách: </strong>')
                    ('<span class="cff9200_eb">' + eb_user_info.full_name + '</span>')
                ('</div>')
				('<div class="mTop5_eb">')
                    ('<strong>Điện thoại di động: </strong>')
                    ('<span class="cff9200_eb">' + eb_user_info.mobile + '</span>')
                ('</div>')
				('<div class="mTop5_eb">')
                    ('<strong>Thời gian thu tiền: </strong>')
                    ('<span class="cff9200_eb">' + eb_user_info.txt_thoigian + ' '+ eb_user_info.txt_ngay +'</span>')
                ('</div>')
                ('<div class="mTop5_eb">')
                    ('<strong>Địa điểm thu tiền của quý khách: </strong>')
                    ('<span class="cff9200_eb">' + eb_user_info.dia_chi + ', TP. '+ eb_user_info.txt_thanhpho +'</span>')
                ('</div>')
                ('<div class="c_eb"></div>')()
            );

        //hinh thuc thanh toan
        jQuery("#paymentTypeInfo .title_eb").html(cart_join
                ('Hình thức thanh toán: <span style="font-size: 12px; font-weight: normal; text-transform: none;">Thu tiền tận nơi.</span>')()
            );
        jQuery("#paymentTypeInfo .content_eb").html(cart_join
            ('<div class="fl_eb">')
                    ('<a title="pay.soha.vn" target="_blank" href="https://pay.soha.vn/"><img height="55" width="136" border="0" src="style/images/payment/costinfo.png"></a>')
            ('</div>')
            ('<div class="fl_eb">')
                ('<div class="mLeft25_eb">')
                    ('<div>')
                        ('<div>')
                            ('<div class="mTop5_eb">Nhân viên RồngBay sẽ liên hệ trực tiếp với bạn và đến thu tiền tại địa chỉ bạn đã đăng ký với RồngBay</div>')
                            ('<b style="color: red;">Chú ý:</b> Chỉ áp dụng với khách hàng ở các quận nội thành Hà Nội và Tp.Hồ Chí Minh.</div>')
                    ('</div>')
                ('</div>')
            ('</div>')
            ('<div class="c_eb"></div>')()
        );
    }
}

function numberOnly(myfield, e){
    var key,keychar;
    if (window.event){key = window.event.keyCode}
    else if (e){key = e.which}
    else{return true}
    keychar = String.fromCharCode(key);
    if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27)){return true}
    else if (("0123456789").indexOf(keychar) > -1){return true}
    return false;
}
    
/**
 * Nhat
 * Them man hinh xac nhan thong tin user khi nap card vina - mobi
 */
function info_user_card(){
		jQuery.unblockUI();
    	var popup_content = cart_join
							('<div id="cart-check-out-step1" style="margin:0 auto;width:470px; text-align:left">')
                                ('<div style="background-color: transparent;">')
                                    ('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
                                        ('<div class="classic-popup_eb">')
                                            ('<div class="classic-popup-top_eb">')
                                                ('<div class="right_eb">')
                                                    ('<div class="bg_eb"></div>')
                                                ('</div>')
                                            ('</div>')
                                            ('<div class="classic-popup-main_eb">')
                                                ('<div class="classic-popup-title_eb">')
                                                    ('<div class="fl_eb">Nhập thông tin cá nhân</div>')
                                                    ('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" href="javascript:void(0)">x</a>')
                                                    ('<div class="c_eb"></div>')
                                                ('</div>')
                                                ('<div class="classic-popup-content_eb">')
                                                    ('<div class="content_eb">')
                                                        ('<div class="reg_cart_form_eb">')
                                                            ('<form id="cartRegisterForm" name="cartRegisterForm">')
                                                                ('<div class="cartNewForm_eb">')
                                                                    ('<div id="cError_eb"></div>')
                                                                    ('<div class="infoInputLeft_eb">')
                                                                        ('<div class="guestInfo_eb">')
                                                                            ('<div class="newCustomerInfo_eb">')
                                                                                ('<div class="input_eb">')
                                                                                    ('Tài khoản: <input type="text" value="'+user_email+'" name="fullname" id="cart_fullname" style="width: 225px;" disabled>')
                                                                                ('</div>')
                                                                            ('</div>')
                                                                            ('<div class="newCustomerInfo_eb mTop5_eb">')
                                                                                ('<div class="input_eb">')
                                                                                    ('Họ tên: <input type="text" value="'+eb_user_info.full_name+'" name="ho_ten" id="ho_ten" style="width: 250px;">')
                                                                                ('</div>')
                                                                                ('<div class="description_eb">Vui lòng cho chúng tôi biết Họ tên của Quý khách</div>')
                                                                            ('</div>')
                                                                            ('<div class="newCustomerInfo_eb mTop5_eb">')
                                                                                ('<div class="input_eb">')
                                                                                    ('Điện thoại di động: <input type="text" onkeypress="return numberOnly(this, event)" maxlength="20" value="'+eb_user_info.mobile+'" name="dien_thoai" id="dien_thoai" style="width: 160px;">')
                                                                                ('</div>')
                                                                                ('<div class="description_eb">Vui lòng nhập đúng số điện thoại di động</div>')
                                                                            ('</div>')
                                                                            ('<div class="c_eb"></div>')
                                                                        ('</div>')
                                                                    ('</div>')
                                                                    ('<div class="c_eb"></div>')
                                                                ('</div>')
                                                            ('</form>')
                                                            ('<div class="mTop10_eb fl_eb">')
                                                                ('<a class="blueButton_eb" href="javascript:void(0)" onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
                                                            ('</div>')
                                                            ('<div class="mTop10_eb">')
                                                                ('<a id="fr" class="blueButton_eb mLeft10_eb" onclick="gold_pay_card();" href="javascript:void(0)">')
                                                                    ('<span>')
                                                                        ('<span>TIẾP TỤC <b>»</b></span>')
                                                                    ('</span>')
                                                                ('</a>')
                                                                ('<a id="fr" class="blueButton_eb" onclick="gold_paytype();" href="javascript:void(0)">')
                                                                    ('<span>')
                                                                        ('<span><b>«</b> QUAY LẠI</span>')
                                                                    ('</span>')
                                                                ('</a>')
                                                                ('<div class="c_eb"></div>')
                                                            ('</div>')
                                                            ('<div class="c_eb"></div>')
                                                        ('</div>')
                                                    ('</div>')
                                                ('</div>')
                                            ('</div>')
                                            ('<div class="classic-popup-bottom_eb">')
                                                ('<div class="right_eb">')
                                                    ('<div class="bg_eb"></div>')
                                                ('</div>')
                                            ('</div>')
                                        ('</div>')
                                    ('</div>')
                                ('</div>')
                             ('</div>')();

	pay_popup(popup_content);
}

//Nạp gold từ thẻ cào
function gold_pay_card()
{
    eb_user_info.mobile = jQuery.trim(jQuery("#dien_thoai").val());
    if (!eb_user_info.mobile)
    {
        alert("Bạn chưa nhập số điện thoại");
        return false;
    }
    jQuery.unblockUI();
	var popup_content = cart_join
							('<div id="cart-check-out-step1" style="margin:0 auto;width:470px;text-align:left">')
									('<div style="background-color: transparent;">')
										('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
											('<div class="classic-popup_eb">')
												('<div class="classic-popup-top_eb">')
													('<div class="right_eb">')
														('<div class="bg_eb"></div>')
													('</div>')
												('</div>')
												('<div class="classic-popup-main_eb">')
													('<div class="classic-popup-title_eb">')
														('<div class="fl_eb">Nạp Gold từ thẻ cào điện thoại</div>')
														('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb">x</a>')
														('<div class="c_eb"></div>')
													('</div>')
													('<div class="classic-popup-content_eb">')
														('<div class="content_eb cartRecharge_eb" style="padding:5px 10px 10px 10px">')
														('<div style="width: 340px; color:red; margin: 5px auto 15px; padding:10px; background:rgb(255, 249, 215); border: 1px solid rgb(226, 200, 34); text-align: center; font-size: 15px;display:none" class="my_msg mTop10_eb"  id="cError"></div>')
															('<center><b style="color:red">Khấu trừ <span style="font-size:14px">' + (100 - RB_CARD_RATE * 100) + '%</span></b> (<b>Ví dụ:</b> Thẻ mệnh giá 100.000 VNĐ ~ ' + (RB_CARD_RATE * 100) + '.000 Gold)</center>')
															('<div id="complete"></div>')
															('<div class="gold-content mTop10_eb">')
																('<div class="gold-title">')
																	('<div class="fl mTop10_eb" style="width:101px; text-align:right">')
																		('<span>Kiểu thẻ:</span>')
																	('</div>')
																	('<div class="fl mLeft5_eb card_type_eb">')
																		('<div align="center" class="fl"><label for="r_vinaphone"><img width="85" height="30" style="cursor:pointer;background:url(style/images/payment/vinaphone.png) no-repeat 50% 50%" src="style/images/spacer.gif"></label><br><input type="radio" onclick="checkTypeCard(1);" name="card_gold_type" class="radio_info" id="r_vinaphone" value="vinaphone"></div>')
																		('<div align="center" class="fl"><label for="r_mobifone" onclick="checkTypeCard(2);"><img width="80" height="30" style="cursor:pointer;background:url(style/images/payment/mobiphone.png) no-repeat 50% 50%" src="style/images/spacer.gif"></label><br><input type="radio" onclick="checkTypeCard(2);" name="card_gold_type" class="radio_info" id="r_mobifone" value="mobifone"></div>')
																		('<div align="center" class="fl"><label for="r_viettel" onclick="checkTypeCard(3);"><img width="60" height="30" style="cursor:pointer;background:url(style/images/newCart/viettel.png) no-repeat 50% 50%" src="style/images/spacer.gif"></label><br><input type="radio" onclick="checkTypeCard(3);" name="card_gold_type" class="radio_info" id="r_viettel" value="viettel"></div>')
																		('<div align="center" class="fl"><label for="r_vcoin" onclick="checkTypeCard(4);"><img width="80" height="30" style="cursor:pointer;background:url(style/images/newCart/vcoin.png) no-repeat 50% 50%" src="style/images/spacer.gif"></label><br><input type="radio" onclick="checkTypeCard(4);" name="card_gold_type" class="radio_info" id="r_vcoin" value="vcoin"></div>')
																		('<div class="c"></div>')
																	('</div>')
																	('<div class="c"></div>')
																('</div>')
															('</div>')
															
															('<div class="gold-content mTop10_eb" id="box_seri">')
																('<div class="gold-title">')
																	('<div class="fl" style="width:101px; text-align:right">')
																		('<span>Số seri: </span>')
																	('</div>')
																	('<div class="fl mLeft5_eb">')
																		('<input type="text" maxlength="30" value="" name="c_seri" id="c_seri">')
																		('<div style="color:#787878;font-size: 11px;padding-top:5px;text-align: justify;">Vui lòng nhập chính xác số seri in trên thẻ.')
																		('</div>')
																	('</div>')
																	('<div class="c"></div>')
																('</div>')
															('</div>')
															
															('<div class="gold-content mTop10_eb">')
																('<div class="gold-title">')
																	('<div class="fl">')
																		('<span>Mã số thẻ cào: </span>')
																	('</div>')
																	('<div class="fl mLeft5_eb">')
																		('<input type="text" maxlength="30" onkeypress="return f_number_only(this, event)" value="" name="c_recharge" id="c_recharge">')
																		('<div style="color:#787878;font-size: 11px;padding-top:5px;text-align: justify;">Vui lòng nhập chính xác mã số in trên thẻ.<br>Hệ thống chỉ cho phép nhập sai không quá <span style="color:red;font-size:14px"><b>5</b></span> lần.</div>')
																	('</div>')
																	('<div class="c"></div>')
																	('<div class="mTop10_eb">')
																	    ('<span style="color:#f00;cursor:pointer" onclick="jQuery(\'#show_card_list\').toggle()">Giá trị nạp Gold tương ứng của các mệnh giá thẻ: </span> <img src="style/images/arrow_over.gif" style="cursor:pointer" onclick="jQuery(\'#show_card_list\').toggle()"><br />')
																		('<div id="show_card_list" style="display:none">')
																			('<div class="mLeft20_eb" style="color:#787878;font-size: 11px;padding-top:2px">- Thẻ mệnh giá 10.000 VNĐ ~ ' + number_format(RB_CARD_RATE * 10000) + ' Gold</div>')
																			('<div class="mLeft20_eb"  style="color:#787878;font-size: 11px;padding-top:2px">- Thẻ mệnh giá 20.000 VNĐ ~ ' + number_format(RB_CARD_RATE * 20000) + ' Gold</div>')
																			('<div class="mLeft20_eb"  style="color:#787878;font-size: 11px;padding-top:2px">- Thẻ mệnh giá 30.000 VNĐ ~ ' + number_format(RB_CARD_RATE * 30000) + ' Gold</div>')
																			('<div class="mLeft20_eb"  style="color:#787878;font-size: 11px;padding-top:2px">- Thẻ mệnh giá 50.000 VNĐ ~ ' + number_format(RB_CARD_RATE * 50000) + ' Gold</div>')
																			('<div class="mLeft20_eb"  style="color:#787878;font-size: 11px;padding-top:2px">- Thẻ mệnh giá 100.000 VNĐ ~ ' + number_format(RB_CARD_RATE * 100000) + ' Gold</div>')
																			('<div class="mLeft20_eb"  style="color:#787878;font-size: 11px;padding-top:2px">- Thẻ mệnh giá 200.000 VNĐ ~ ' + number_format(RB_CARD_RATE * 200000) + ' Gold</div>')
																			('<div class="mLeft20_eb"  style="color:#787878;font-size: 11px;padding-top:2px">- Thẻ mệnh giá 300.000 VNĐ ~ ' + number_format(RB_CARD_RATE * 300000) + ' Gold</div>')
																			('<div class="mLeft20_eb"  style="color:#787878;font-size: 11px;padding-top:2px">- Thẻ mệnh giá 500.000 VNĐ ~ ' + number_format(RB_CARD_RATE * 500000) + ' Gold</div>')
																		('</div>')
																	('</div>')
																('</div>')
																('<div align="center" style="line-height:2px" class="mTop10_eb">')
																	('<p id="close"><a class="blueButton_eb  mLeft10_eb" style="float:right" onclick="gold_recharge();"><span><span>NẠP THẺ <b>»</b></span></span></a></p>')
																	('<p id="card_retry" style="display:none"><a class="blueButton_eb  mLeft10_eb" style="float:right" onclick="gold_card_retry();"><span><span>THỬ LẠI <b>»</b></span></span></a></p>')
																	('<img align="absmiddle" id="loading_pay" style="display:none" src="style/images/loading.gif"> <span id="back_btn"><a class="blueButton_eb" style="float:right" onclick="info_user_card();" ><span><span><b>«</b> QUAY LẠI</span></span></a></span>')
																	('<div class="c"></div>')
																('</div>')
															('</div>')
														('</div>')
													('</div>')
												('</div>')
												('<div class="classic-popup-bottom_eb">')
													('<div class="right_eb">')
														('<div class="bg_eb"></div>')
													('</div>')
												('</div>')
											('</div>')
										('</div>')
									('</div>')
								 ('</div>')();
			
			
	pay_popup(popup_content);
}

function checkTypeCard(type)
{
	/*if (type <= 2) {
		jQuery('#box_seri').hide();
	}
	else {
		jQuery('#box_seri').show();
	}*/
}

//Submit Nạp Gold từ thẻ cào
function gold_recharge()
{
	jQuery('#cError').html('').hide();
	
	var code = '', seri = '', card_type = 0;
	
	if (!jQuery('#r_vinaphone').is(":checked") && !jQuery('#r_mobifone').is(":checked") && !jQuery('#r_viettel').is(":checked") && !jQuery('#r_vcoin').is(":checked"))
	{
		jQuery('#cError').html('Bạn chưa chọn loại thẻ cào!').show();
		
		return false;
	}
	else
	{
		if (jQuery('#r_vinaphone').is(":checked")) card_type = 'vinaphone';
		else if (jQuery('#r_mobifone').is(":checked")) card_type = 'mobifone';
		else if (jQuery('#r_viettel').is(":checked")) card_type = 'viettel';
		else if (jQuery('#r_vcoin').is(":checked")) card_type = 'vcoin';
	}
	
	code = jQuery.trim(jQuery('#c_recharge').val());
	seri = jQuery.trim(jQuery('#c_seri').val());
	
	//if ((card_type == 'viettel' || card_type == 'vcoin') && seri == '')
	if (seri == '')
	{
		jQuery('#cError').html('Bạn chưa nhập số seri của thẻ cào!').show();
		jQuery('#c_seri').focus();
		return false;
	}
	if(code == '')
	{
		jQuery('#cError').html('Bạn chưa nhập mã số thẻ cào!').show();
		jQuery('#c_recharge').focus();
		return false;
	}
	else if(code.length < 12)
	{
		jQuery('#cError').html('Mã số thẻ không hợp lệ!').show();
		jQuery('#c_recharge').focus();
		return false;
	}
	
	
	jQuery('#r_vinaphone').attr("disabled",true);
	jQuery('#r_mobifone').attr("disabled",true);
	jQuery('#c_recharge').attr("disabled",true);
	jQuery('#c_seri').attr("disabled",true);
	jQuery('#close').hide();
	jQuery('#back_btn').hide();
	
	jQuery('#loading_pay').show();
	
	card_retry_time_out = setTimeout(function(){
													jQuery('#card_retry').show(); 
												}, 6000);
	
	jQuery.ajax({
		type: "POST",
		url: WEB_DIR+"ajax.php?act=payment&code=gold_recharge",
		data: {mobile: eb_user_info.mobile, card_code: code, card_seri: seri, card_type:card_type},
		dataType: 'json',
		success: function(data)
		{
			jQuery('#loading_pay').hide();
			jQuery('#close').show();
			//jQuery('#back_btn').html('<a class="blueButton" style="float:right" onclick="pay_cancel();" ><span><span>HỦY</span></span></a>').show();
			
			jQuery('#back_btn').show();
			
			jQuery('#r_vinaphone').attr({'disabled':false,'checked':false});
			jQuery('#r_mobifone').attr({'disabled':false,'checked':false});
			jQuery('#c_seri').attr("disabled",false).val('');
			jQuery('#c_recharge').attr("disabled",false).val('');
			jQuery('#card_retry').hide();
			
			clearTimeout(card_retry_time_out);
			
			if(data.msg == 'not_login')
			{			
				login_error();
				return false;
			}
			else if(data.msg == 'no_perm')
			{			
				log_faile('Bạn không có quyền thực hiện chức năng này',5000);
				return false;
			}
			else if(data.msg == 'error')
			{
				alert("Thông tin thẻ cào không đúng, mời bạn thử lại!");
				
				window.location.reload();
				return false;
			}
			else if(data.msg == '')//Đã ok
			{
				EB_GOLD = data.user_gold;
				if (typeof EB_GOLD == 'undefined') {
					alert("Thông tin thẻ cào không đúng, mời bạn thử lại!");
					return;
				}
				
				jQuery('#customer_gold').html(number_format(EB_GOLD));
				
				if(EB_GOLD > 999)
				{
					jQuery('#customer_gold_up').hide();
					jQuery('#customer_gold_down').show();
				}
				else
				{
					jQuery('#customer_gold_up').show();
					jQuery('#customer_gold_down').hide();
				}
				
				jQuery('#account_gold').html('('+number_format(data.user_gold)+' Gold)');
				
				number_format(data.user_gold)
				jQuery('#complete').html('<div align="left">\
											<div id="pTop5" class="newCustomerInfo mTop5">\
												<div style="margin-left:30px; font-weight:normal" class="card_type">\
															Quý khách vừa nạp thành công thẻ '+ card_type +': <strong>'+number_format(data.card_price) +' VNĐ</strong>.<br/>Tài khoản <b>'+ user_email+'</b> được nạp <b>'+ number_format(data.gold)+'</b> Gold.<br/>Số Gold hiện tại của (<b>'+ user_email+'</b>) là <b>'+ number_format(data.user_gold)+'</b> Gold.<br/>Mã giao dịch: <b><a href="' + WEB_DIR + 'usercp.html?cmd=gold_history&log_id=' + data.log_id + '" target="_blank" style="display:inline;float:none;padding:0;margin:0">CARD_'+ data.card_log_id+'</a></b>\
												</div>\
											</div>\
										</div>');
			}
			else//Lỗi nạp thẻ
			{
				if(data.locked)
				{
					pay_cancel();
					alert(data.msg);
					window.location = WEB_DIR;
				}
				else{
					alert(data.msg);	
				}
			}
			
			return false;
		}
	});
}

//Thử lại nạp Gold từ thẻ cào
function gold_card_retry()
{
	jQuery('#card_retry').hide();
	jQuery('#loading_pay').hide();
	jQuery('#close').show();
	jQuery('#back_btn').html('<a class="blueButton" style="float:right" onclick="pay_cancel();" ><span><span>HỦY</span></span></a>').show();
	
	jQuery('#r_vinaphone').attr({'disabled':false,'checked':false});
	jQuery('#r_mobifone').attr({'disabled':false,'checked':false});
	jQuery('#c_seri').attr("disabled",false).val('');
	jQuery('#c_recharge').attr("disabled",false).val('');
	
	jQuery('#complete').html('');
}

//Nạp Gold qua SMS
function gold_sms()//Nạp gold bằng SMS
{
	jQuery.unblockUI();
	popup_content = cart_join
							('<div id="cart-check-out-step1" style="margin:0 auto;width:710px; text-align:left">')
								('<div style="background-color: transparent;">')
									('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
										('<div class="classic-popup_eb">')
											('<div class="classic-popup-top_eb">')
												('<div class="right_eb">')
													('<div class="bg_eb"></div>')
												('</div>')
											('</div>')
											('<div class="classic-popup-main_eb">')
												('<div class="classic-popup-title_eb">')
													('<div class="fl_eb">Nạp Gold bằng SMS</div>')
													('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" >x</a>')
													('<div class="c_eb"></div>')
												('</div>')
												('<div class="classic-popup-content_eb">')
													('<div class="content_eb">')
														('<div class="box-gradien_eb pBottom10_eb pTop15_eb mTop10_eb" style="width:auto">\
																<div class="title_eb" style="font-size:12px;font-weight:normal;text-transform:none;">\
																	<div style="margin-top:10px;"><span style="font-weight:bold;color:#034B8A">- Tỷ lệ nạp Gold:</span> <b>1</b> SMS ~ <font color="#c00"><b>'+number_format(SMS_RATE) +'</b></font> Gold, Dùng điện thoại di động soạn tin nhắn <b>sms</b> với cú pháp:\
																	</div>\
																	<div style="text-align:center" class="paymentText_eb">\
																		 <span style="color:red;font-weight: bold;font-size:28px">RBG ' + user_id + ' </span> gửi <span style="color: red; font-weight: bold;font-size:28px"> 8701</span> (15.000VNĐ/sms).\
																		 <div style="font-size:14px;margin-top:10px">Để nạp <font color="#c00"><b>'+number_format(SMS_RATE) +'</b></font> Gold vào tài khoản <font color="#c00"><b>' + user_email +'</b></font></div>\
																	</div>\
																	<div class="paymentText_eb" style="margin-top:20px;">\
																		<a onclick="jQuery(\'#rule_sms_eb\').toggle();"><b>- Xem quy định gửi tin nhắn:</b></a>\
																		<div class="rule_sms_eb hidden_eb" id="rule_sms_eb">\
																			<ul class="paymentText_eb">\
																				<li>Khách hàng không được gửi quá 3 tin nhắn có cùng nội dung với một số điện thoại trong thời gian 5 phút</li>\
																				<li>Khách hàng không được gửi quá 30 tin nhắn có cùng nội dung với một số điện thoại trong thời gian 1 giờ</li>\
																				<li>VMS, Sfone:  quy định định mức tiền của mỗi thuê bao là: 150k/ ngày</li>\
																				<li>Khách hàng không được sử dụng các dịch vụ nội dung của một nhà cung cấp quá 150.000 đồng ( đã bao gồm thuế GTGT) trong ngày (từ 0h00:00 đến 23h59:59)</li><li>Nếu KH sử dụng quá hạn mức thì KH vẫn bị trừ tiền</li>\
																			</ul>\
																		</div>\
																	</div>\
																</div>\
														</div>')
														('<div class="reg_cart_form_eb">')                                            
															('<div class="mTop10_eb fl_eb">')
																('<a class="blueButton_eb"  onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
															('</div>')
															('<div class="mTop10_eb">')
																('<a class="blueButton_eb mLeft10_eb" style="float:right" onclick="pay_cancel();" >')
																	('<span>')
																		('<span>KẾT THÚC</span>')
																	('</span>')
																('</a>')
																('<a class="blueButton_eb" style="float:right" onclick="gold_paytype();" >')
																	('<span>')
																		('<span><b>«</b> QUAY LẠI</span>')
																	('</span>')
																('</a>')
																('<div class="c_eb"></div>')
															('</div>')
															('<div class="c_eb"></div>')
														('</div>')
													('</div>')
												('</div>')
											('</div>')
											('<div class="classic-popup-bottom_eb">')
												('<div class="right_eb">')
													('<div class="bg_eb"></div>')
												('</div>')
											('</div>')
										('</div>')
									('</div>')
								('</div>')
							 ('</div>')();
							 
	pay_popup(popup_content);
}

function f_pay_gold_at_eb()
{
	var content = cart_join
						('<div style="margin:0 auto;width:815px; text-align:left">')
							('<div style="background-color: transparent;">')
								('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
									('<div class="classic-popup_eb">')
										('<div class="classic-popup-top_eb">')
											('<div class="right_eb">')
												('<div class="bg_eb"></div>')
											('</div>')
										('</div>')
										('<div class="classic-popup-main_eb">')
											('<div class="classic-popup-title_eb">')
												('<div class="fl_eb">Nạp Gold tại trụ sở RồngBay</div>')
												('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" >x</a>')
												('<div class="c_eb"></div>')
											('</div>')
			
											('<div class="classic-popup-content_eb">')
												('<div style="padding: 10px 20px;" class="content_eb">')
													//Tài khoản được nạp Gold
													('<div class="box-gradien_eb pBottom10_eb pTop15_eb mTop10_eb" id="paymentTypeInfo">')
														('<div class="title_eb">')
														('Tài khoản được nhận Gold: <span style="font-size:14px;text-transform: none;color:#f00"> ' + user_email + '</span>')
														('</div>')
													('</div>')
													//hinh thuc thanh toan
													('<div class="box-gradien_eb pBottom10_eb pTop15_eb mTop10_eb" id="paymentTypeInfo">')
														('<div class="title_eb">')
														('Hình thức nạp Gold: <span style="font-size: 12px; font-weight: normal; text-transform: none;"> Quý khách đến trực tiếp tại trụ sở RồngBay <font color=red>(Phòng Kế Tóan - Công Ty CP Truyền Thông Việt Nam - Tầng 17, Tòa nhà 18 Tam Trinh- P.Minh Khai  - Q.Hai Bà Trưng - TP.Hà Nội) </font> để nộp tiền mặt.</span>')
														('</div>')
														('<div class="content_eb">')
															('<ul class="paymentText_eb paymentGuide_eb hidden_eb" id="info_3" style="display: block;">\
															 <li>Gold sẽ được nạp vào tài khoản của quý khách ngay sau khi quý khách hoàn thành thanh toán.</li>\
															 <li>Số Gold quý khách được nạp tương ứng với số tiền quý khách đóng tại RồngBay.</li>\
															 <li><font color=red>Thời gian nộp tiền: từ 9h - 12h, 14h - 17h30 các ngày thứ 2 đến thứ 6. Thứ 7: từ 9h - 12h</font></li>\
															 </ul>')
															('<div class="c_eb"></div>')
														('</div>')
													('</div>')
			
													//Thong tin dich vu
													('<div id="box-gradien2" class="box-gradien_eb mTop10_eb">')
														('<div class="title_eb mTop10_eb mLeft10_eb">Thông tin dịch vụ</div>')
														('<div id="pTop5" class="content_eb">')
															('<table width="100%" cellspacing="0" cellpadding="0" border="0" class="cart-finish_eb">')
																('<tr>')
																	('<th class="head_eb bRight_eb" align="center" >Dịch vụ</th>')
																	('<th class="head_eb" align="center">Tổng giá trị thanh toán</th>')
																('</tr>')
																('<tr>')
																	('<td valign="top" align="center" class="item_eb bRight_eb" style="font-size:16px;color:#00A0DC">Nạp <font color="#F10000"><b>' + number_format(eb_pay_gold) + '</b></font> Gold cho thành viên <font color="#F10000"><b>' + user_email + '</b></font></td>')
																	('<td valign="top" align="center" class="item_eb" width="30%" style="font-size:16px;color:#00A0DC"><span id="bgAllPrice">'  + 
																	 number_format(1000 * Math.ceil(eb_pay_gold/1000)) 
															+ '</span> VNĐ</td>')
																('</tr>')
															('</table>')
														 ('</div>')
													('</div>')
													('<div style="font-size: 16px; width: 758px;" class="mTop10_eb">')
														('<input type="checkbox" class="checkbox" id="check-regulations"' + (eb_pay_accepted? ' checked="checked"':'') +'/>')
														('<label for="check-regulations" style="font-weight:normal"><b>Tôi đã đọc và đồng ý với các <a target="_blank" href="http://blog.rongbay.com/2011/11/30/409/">điều khoản và quy định</a> của RồngBay.com</b></label>')
													('</div>')
			
													('<div class="mTop10_eb fl_eb">')
														('<a class="blueButton_eb"  onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
													('</div>')
													('<div class="mTop10_eb">')
														('<a id="cart_pay_button" class="blueButton_eb mLeft10_eb" style="float:right">')
															('<span onclick="f_gold_pay_accept();">')
																('<span>ĐẶT HÀNG</span>')
															('</span>')
														('</a>')
														('<a class="blueButton_eb" style="float:right" onclick="gold_input(0,1);">')
															('<span>')
																('<span><b>«</b> QUAY LẠI</span>')
															('</span>')
														('</a>')
														('<div class="c_eb"></div>')
													('</div>')
													('<div class="c_eb"></div>')
												('</div>')
											('</div>')
			
										('</div>')
										('<div class="classic-popup-bottom_eb">')

											('<div class="right_eb">')
												('<div class="bg_eb"></div>')
											('</div>')
										('</div>')
									('</div>')
								('</div>')
							('</div>')
						('</div>')();
						
						
		pay_popup( content );	
}

function f_pay_gold_ck()
{
	if(cart_bank_type == '')
	{
		alert("Bạn chưa chọn ngân hàng!");
		return false;
	}
	
	var content = cart_join
						('<div style="margin:0 auto;width:815px; text-align:left">')
							('<div style="background-color: transparent;">')
								('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
									('<div class="classic-popup_eb">')
										('<div class="classic-popup-top_eb">')
											('<div class="right_eb">')
												('<div class="bg_eb"></div>')
											('</div>')
										('</div>')
										('<div class="classic-popup-main_eb">')
											('<div class="classic-popup-title_eb">')
												('<div class="fl_eb">Nạp Gold qua chuyển khoản</div>')
												('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" >x</a>')
												('<div class="c_eb"></div>')
											('</div>')
			
											('<div class="classic-popup-content_eb">')
												('<div style="padding: 10px 20px;" class="content_eb">')
													//Tài khoản được nạp Gold
													('<div class="box-gradien_eb pBottom10_eb pTop15_eb mTop10_eb" id="paymentTypeInfo">')
														('<div class="title_eb">')
														('Tài khoản được nhận Gold: <span style="font-size:14px;text-transform: none;color:#f00"> ' + user_email + '</span>')
														('</div>')
													('</div>')
													
													//hinh thuc thanh toan
													('<div class="box-gradien_eb pBottom10_eb pTop15_eb mTop10_eb" id="paymentTypeInfo">')
														('<div class="title_eb">')
														('Hình thức thanh toán:<span style="font-size: 12px; font-weight: normal; text-transform: none;"> Chuyển khoản thanh toán qua ATM hoặc nộp tiền tại quầy GD ngân hàng về:</span>')
														('</div>')
														('<div class="content_eb">')
															('<div class="c_eb"></div>')
														('</div>')
													('</div>')
													//luu y khi thanh toan
													('<div class="box-gradien_eb pBottom10_eb pTop15_eb mTop10_eb" id="paymentTypeInfo">')
														('<div class="title_eb">')
														('<font color="#F10000">Lưu ý khi chuyển khoản:</font>')
														('</div>')
														('<div class="content_eb">')
															('<div style="margin-left:10px;line-height:150%; font-weight:normal">														- Khi chuyển ATM/hoặc chuyển khoản các bạn ghi rõ  mục đích chuyển tiền là: Nạp <font color="#F10000"><b>' + number_format(eb_pay_gold) + '</b></font> Gold cho thành viên <font color="#F10000"><b>' + user_email + '</b></font> trên site Rồng Bay.<br>														- Khi bạn đã chuyển ATM/hoặc chuyển khoản mua lượt up vui lòng email lại về địa chỉ lienhe@rongbay.com trên Rồng Bay với tiêu đề: <font color="#F10000"><b>Chuyển ATM (hoặc Chuyển khoản)</b></font>. Nội dung ghi rõ: đã chuyển ATM (hoặc chuyển khoản) <font color="#F10000"><b>'  + 
																	 number_format(1000 * Math.ceil(eb_pay_gold/1000)) 
															+ '</b> </font> VNĐ từ tài khoản số………..chủ tài khoản tên………….. tại ngân hàng ……………. thanh toán nạp <b>' + number_format(eb_pay_gold) + '</b> Gold cho thành viên <font color="#F10000"><b>' + user_email + '</b></font> trên site Rồng Bay vào hồi ……giờ ngày…..tháng…. năm…..													</div>')
															('<div class="c_eb"></div>')
														('</div>')
													('</div>')
			
													//Thong tin dich vu
													('<div id="box-gradien2" class="box-gradien_eb mTop10_eb">')
														('<div class="title_eb mTop10_eb mLeft10_eb">Thông tin dịch vụ</div>')
														('<div id="pTop5" class="content_eb">')
															('<table width="100%" cellspacing="0" cellpadding="0" border="0" class="cart-finish_eb">')
																('<tr>')
																	('<th class="head_eb bRight_eb" align="center" >Dịch vụ</th>')
																	('<th class="head_eb" align="center">Tổng giá trị thanh toán</th>')
																('</tr>')
																('<tr>')
																	('<td valign="top" align="center" class="item_eb bRight_eb" style="font-size:16px;color:#00A0DC">Nạp <font color="#F10000"><b>' + number_format(eb_pay_gold) + '</b></font> Gold cho thành viên <font color="#F10000"><b>' + user_email + '</b></font></td>')
																	('<td valign="top" align="center" class="item_eb" width="30%" style="font-size:16px;color:#00A0DC"><span id="bgAllPrice">'  + 
																	 number_format(1000 * Math.ceil(eb_pay_gold/1000)) 
															+ '</span> VNĐ</td>')
																('</tr>')
															('</table>')
														 ('</div>')
													('</div>')
													('<div style="font-size: 16px; width: 758px; font-weight:normal" class="mTop10_eb">')
														('<input type="checkbox" class="checkbox" id="check-regulations"' + (eb_pay_accepted? ' checked="checked"':'') +'/>')
														('<label for="check-regulations"><b>Tôi đã đọc và đồng ý với các <a target="_blank" href="http://blog.rongbay.com/2011/11/30/409/">điều khoản</a> của RồngBay.com</b></label>')
													('</div>')
			
													('<div class="mTop10_eb fl_eb">')
														('<a class="blueButton_eb"  onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
													('</div>')
													('<div class="mTop10_eb">')
														('<a id="cart_pay_button" class="blueButton_eb mLeft10_eb" style="float:right">')
															('<span onclick="f_gold_pay_accept();">')
																('<span>ĐẶT HÀNG</span>')
															('</span>')
														('</a>')
														('<a class="blueButton_eb" style="float:right" onclick="gold_input(0,1)">')
															('<span>')
																('<span><b>«</b> QUAY LẠI</span>')
															('</span>')
														('</a>')
														('<div class="c_eb"></div>')
													('</div>')
													('<div class="c_eb"></div>')
												('</div>')
											('</div>')
			
										('</div>')
										('<div class="classic-popup-bottom_eb">')
											('<div class="right_eb">')
												('<div class="bg_eb"></div>')
											('</div>')
										('</div>')
									('</div>')
								('</div>')
							('</div>')
						('</div>')();
						
						
		pay_popup( content );
		
		 //hinh thuc thanh toan
        tem = cart_bankInfo();
        jQuery("#paymentTypeInfo .content_eb").html(tem);				
}

function f_pay_gold_premium()
{
	var content = cart_join
						('<div style="margin:0 auto;width:815px; text-align:left">')
							('<div style="background-color: transparent;">')
								('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
									('<div class="classic-popup_eb">')
										('<div class="classic-popup-top_eb">')
											('<div class="right_eb">')
												('<div class="bg_eb"></div>')
											('</div>')
										('</div>')
										('<div class="classic-popup-main_eb">')
											('<div class="classic-popup-title_eb">')
												('<div class="fl_eb">Nạp Gold qua dịch vụ thấu chi</div>')
												('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" >x</a>')
												('<div class="c_eb"></div>')
											('</div>')
			
											('<div class="classic-popup-content_eb">')
												('<div style="padding: 10px 20px;" class="content_eb">')
													//Tài khoản được nạp Gold
													('<div class="box-gradien_eb pBottom10_eb pTop15_eb mTop10_eb" id="paymentTypeInfo">')
														('<div class="title_eb">')
														('Tài khoản được nhận Gold: <span style="font-size:14px;text-transform: none;color:#f00"> ' + user_email + '</span>')
														('</div>')
													('</div>')
													
													//hinh thuc thanh toan
													('<div class="box-gradien_eb pBottom10_eb pTop15_eb mTop10_eb" id="paymentTypeInfo">')
														('<div class="title_eb">')
														('Hình thức thanh toán:<span style="font-size: 12px; font-weight: normal; text-transform: none;"> Sử dụng dịch vụ thấu chi, nạp Gold trước, trả tiền sau.</span>')
														('</div>')
														('<div class="content_eb">')
															('<ul class="paymentText_eb paymentGuide_eb hidden_eb" id="info_3" style="display: block;">\
															 <li><font color=red>Gold sẽ được nạp vào tài khoản của quý khách ngay sau khi quý khách đồng ý xác nhận các thông tin thanh toán và click vào nút <b>NẠP GOLD</b></font></li>\
															 <li>Số Gold quý khách được nạp tương ứng với số tiền quý khách sẽ phải trả sau này.</li>\
															 </ul>')
															('<div class="c_eb"></div>')
														('</div>')
													('</div>')
			
													//Thong tin dich vu
													('<div id="box-gradien2" class="box-gradien_eb mTop10_eb">')
														('<div class="title_eb mTop10_eb mLeft10_eb">Thông tin dịch vụ</div>')
														('<div id="pTop5" class="content_eb">')
															('<table width="100%" cellspacing="0" cellpadding="0" border="0" class="cart-finish_eb">')
																('<tr>')
																	('<th class="head_eb bRight_eb" align="center" >Dịch vụ</th>')
																	('<th class="head_eb" align="center">Tổng giá trị thanh toán</th>')
																('</tr>')
																('<tr>')
																	('<td valign="top" align="center" class="item_eb bRight_eb" style="font-size:16px;color:#00A0DC">Nạp <font color="#F10000"><b>' + number_format(eb_pay_gold) + '</b></font> Gold cho thành viên <font color="#F10000"><b>' + user_email + '</b></font></td>')
																	('<td valign="top" align="center" class="item_eb" width="30%" style="font-size:16px;color:#00A0DC"><span id="bgAllPrice">' + 
																	 number_format(1000 * Math.ceil(eb_pay_gold/1000)) 
															+ '</span> VNĐ</td>')
																('</tr>')
															('</table>')
														 ('</div>')
													('</div>')
													('<div style="font-size: 16px; width: 758px;" class="mTop10_eb">')
														('<input type="checkbox" class="checkbox" id="check-regulations"' + (eb_pay_accepted? ' checked="checked"':'') +'/>')
														('<label for="check-regulations"><b>Tôi đã đọc và đồng ý với các <a target="_blank" href="http://blog.rongbay.com/2011/11/30/409/">điều khoản và quy định</a>điều khoản</a> của RồngBay.com</b></label>')
													('</div>')
			
													('<div class="mTop10_eb fl_eb">')
														('<a class="blueButton_eb"  onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
													('</div>')
													('<div class="mTop10_eb">')
														('<a id="cart_pay_button" class="blueButton_eb mLeft10_eb" style="float:right">')
															('<span onclick="f_gold_pay_accept();">')
																('<span>NẠP GOLD</span>')
															('</span>')
														('</a>')
														('<a class="blueButton_eb" style="float:right" onclick="gold_input(0,1)">')
															('<span>')
																('<span><b>«</b> QUAY LẠI</span>')
															('</span>')
														('</a>')
														('<div class="c_eb"></div>')
													('</div>')
													('<div class="c_eb"></div>')
												('</div>')
											('</div>')
			
										('</div>')
										('<div class="classic-popup-bottom_eb">')
											('<div class="right_eb">')
												('<div class="bg_eb"></div>')
											('</div>')
										('</div>')
									('</div>')
								('</div>')
							('</div>')
						('</div>')();
						
		pay_popup( content );
		
		 //hinh thuc thanh toan
        tem = cart_bankInfo();
        jQuery("#paymentTypeInfo .content_eb").html(tem);				
}

function f_gold_pay_accept()
{
	if(jQuery('#check-regulations').is(':checked'))
	{
		eb_pay_accepted = 1;
	}
	else
	{
		eb_pay_accepted = 0;
		
		alert("Bạn phải đồng ý với điều khoản của Rồng Bay!");
		return false;
	}
	
	if(eb_pay_type == 1)//Online Soha Payment
	{
		jQuery.ajax({
						type: "POST",
						url: WEB_DIR+"ajax.php?act=payment&code=buy_gold_osp",	
						data: {pay_gold: eb_pay_gold,mobile: eb_user_info.mobile, full_name: eb_user_info.full_name}, 
						dataType: 'json',
						success: function(data)
						{
							if(data.msg == 'not_login')
							{			
								login_error();
								return false;
							}
							else if(data.msg == 'no_perm')
							{			
								log_faile('Bạn không có quyền thực hiện chức năng này',5000);
								return false;
							}
							else if(data.msg == 'not_user')
							{			
								alert("Tài khoản người được nạp Gold (" + data.user_name + ") không tồn tại!");
								return false;
							}
							else if(data.msg != '')//Error
							{	
								alert(data.msg);	
							}	
							else//Succes
							{		
								pay_cancel();
								
								window.location = data.soha_url;
								
								return false;
							}
						}
					});
	}
	if(eb_pay_type == 2)//Thu tiền tận nơi
	{
		jQuery.ajax({
						type: "POST",
						url: WEB_DIR+"ajax.php?act=payment&code=buy_gold_home",	
						data: {pay_gold: eb_pay_gold,full_name: eb_user_info.full_name,mobile: eb_user_info.mobile, dia_chi: eb_user_info.dia_chi, thanh_pho: eb_user_info.thanh_pho, ngay: eb_user_info.ngay,thoi_gian: eb_user_info.thoi_gian}, 
						dataType: 'json',
						success: function(data)
						{
							if(data.msg == 'not_login')
							{			
								login_error();
								return false;
							}
							else if(data.msg == 'no_perm')
							{			
								log_faile('Bạn không có quyền thực hiện chức năng này',5000);
								return false;
							}
							else if(data.msg == 'not_user')
							{			
								alert("Tài khoản người được nạp Gold (" + data.user_name + ") không tồn tại!");
								return false;
							}
							else if(data.msg != '')//Error
							{	
								alert(data.msg);	
							}	
							else//Succes
							{		
								var gold = eb_pay_gold;
								pay_cancel();
								
								alert("Đơn đặt hàng nạp " + number_format(gold) + " Gold cho tài khoản " + user_email + " của bạn đã được lưu lại, hãy chủ động liên hệ với RồngBay hoặc chờ nhân viên RồngBay gọi điện xác nhận đơn hàng và tiến hành thu tiền - Nạp Gold cho quý khách!\n\nCảm ơn bạn đã sử dụng dịch vụ của RồngBay!");
								
								return false;
							}
						}
					});
	}
	else if(eb_pay_type == 3)//Tại Trụ sở EB
	{
		jQuery.ajax({
						type: "POST",
						url: WEB_DIR+"ajax.php?act=payment&code=order_gold_at_eb",	
						data: {pay_gold: eb_pay_gold}, 
						dataType: 'json',
						success: function(data)
						{
							if(data.msg == 'not_login')
							{			
								login_error();
								return false;
							}
							else if(data.msg == 'no_perm')
							{			
								log_faile('Bạn không có quyền thực hiện chức năng này',5000);
								return false;
							}
							else if(data.msg == 'not_user')
							{			
								alert("Tài khoản người được nạp Gold (" + data.user_name + ") không tồn tại!");
								return false;
							}
							else if(data.msg != '')//Error
							{	
								alert(data.msg);	
							}	
							else//Succes
							{		
								var gold = eb_pay_gold;
								pay_cancel();
								
								alert("Đơn đặt hàng nạp " + number_format(gold) + " Gold cho tài khoản " + user_email + " của bạn đã được lưu lại, hãy tới trụ sở RồngBay để thanh toán đơn hàng này và nạp Gold!\n\nCảm ơn bạn đã sử dụng dịch vụ của RồngBay!");
								
								return false;
							}
						}
					});
	}
	else if(eb_pay_type == 4)//Chuyển khoản
	{
		jQuery.ajax({
						type: "POST",
						url: WEB_DIR+"ajax.php?act=payment&code=order_gold_ck",	
						data: {pay_gold: eb_pay_gold, bank_type: cart_bank_type}, 
						dataType: 'json',
						success: function(data)
						{
							if(data.msg == 'not_login')
							{			
								login_error();
								return false;
							}
							else if(data.msg == 'no_perm')
							{			
								log_faile('Bạn không có quyền thực hiện chức năng này',5000);
								return false;
							}
							else if(data.msg == 'not_user')
							{			
								alert("Tài khoản người được nạp Gold (" + data.user_name + ") không tồn tại!");
								return false;
							}
							else if(data.msg != '')//Error
							{	
								alert(data.msg);	
							}	
							else//Succes
							{			
								var gold = eb_pay_gold;
								pay_cancel();
								
								alert("Đơn đặt hàng nạp " + number_format(gold) + " Gold cho tài khoản " + user_email + " của bạn qua hình thức chuyển khoản đã được lưu lại.\n\nHãy gọi điện thông báo cho RồngBay theo số hỗ trợ: 04.39743410 - ext: 770 / 495 / 496 / 497 / 498, hoặc làm theo hướng dẫn trước để hoàn thành việc nạp Gold!\n\nCảm ơn bạn đã sử dụng dịch vụ của RồngBay!");
								
								return false;
							}
						}
					});
	}
	else if(eb_pay_type == 5)//Thấu chi
	{
		jQuery.ajax({
						type: "POST",
						url: WEB_DIR+"ajax.php?act=payment&code=buy_gold_premium",	
						data: {pay_gold: eb_pay_gold}, 
						dataType: 'json',
						success: function(data)
						{
							if(data.msg == 'not_login')
							{			
								login_error();
								return false;
							}
							else if(data.msg == 'no_perm')
							{			
								log_faile('Bạn không có quyền thực hiện chức năng này',5000);
								return false;
							}
							else if(data.msg == 'not_user')
							{			
								alert("Tài khoản người được nạp Gold (" + data.user_name + ") không tồn tại!");
								return false;
							}
							else if(data.msg != '')//Error
							{	
								alert(data.msg);	
							}	
							else//Succes
							{			
								EB_GOLD = data.user_gold;
				
								jQuery('#customer_gold').html(number_format(EB_GOLD));
								
								if(EB_GOLD > 999)
								{
									jQuery('#customer_gold_up').hide();
									jQuery('#customer_gold_down').show();
								}
								else
								{
									jQuery('#customer_gold_up').show();
									jQuery('#customer_gold_down').hide();
								}
								
								var gold = eb_pay_gold;
								pay_cancel();
								
								alert("Bạn đã nạp thành công " + number_format(gold) + " Gold cho tài khoản " +data.user_name+ " qua hình thức thấu chi!\nHạn mức của bạn còn: " + number_format(data.money_quota * 1000) + " VNĐ\n\nCám ơn bạn đã sử dụng dịch vụ của RồngBay!");
								
								return false;
							}
						}
					});
	}
}