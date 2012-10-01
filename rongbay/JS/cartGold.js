var service_code 		= '';
var item_id		 		= 0;
var eb_pay_accepted 	= 1;
var eb_pay_type	 		= 0;//1:online, 2:Thu tận nơi, 3:Tại EB, 4: Chuyển khoản, 5: trả sau; 6: card, 7: sms
var service_type 		= '';
var cart_bank_type 		= '';
var cart_redirect		= 0;
var cart_money_less 	= 0;
var cart_item_id 		= 0;

jQuery(document).keydown(
	function(event){
		if (event.keyCode == 27){
			pay_cancel(1);
		}
	}
);

//Vẽ popup
function pay_popup(popUpContent)
{
	jQuery('body').block({message: popUpContent  ,
							overlayCSS: {
								opacity: 0.8,
								background:'#000000'
							},
							centerY	: false,
							css: {
								top: (jQuery(window).scrollTop() + 50) + 'px',
								border: 'none',
								width : '900px',
								'background-color' : 'transparent'
							}});
}

//Hủy popup
function pay_cancel(update)
{	
	if(typeof(update) != 'undefined' && update)
	{
		var full_name 	= jQuery.trim(getValueId('ho_ten'));
		var mobile 		= jQuery.trim(getValueId('dien_thoai'));
		
		if(full_name != '')
		{
			eb_user_info.full_name = full_name;
		}
		
		if(mobile != '')
		{
			eb_user_info.mobile = mobile;
		}
	}
	
	//Cart
	service_code 	= '';
	eb_pay_type	= 0;
	service_type 	= '';
	cart_item_id	= 0;
	cart_bank_type	= '';
	//End Cart
	
	//Gold Payment
	
	//End Gold Payment
	
	jQuery.unblockUI();	
	
	// Return BDS if buy Gold from its
	if(typeof href_bds != 'undefined')
	{
		window.location.href = href_bds;
	}
	
	if(cart_redirect)
	window.location.reload();
	pay_gold_back=false;
	return false;
}

//hidden popup
function pay_hidden()
{
	
	jQuery.unblockUI();	
	
	if(cart_redirect)
	window.location.reload();
	pay_gold_back=false;
	return false;
}

function cart_ebu(scroll_top)
{
	if(IS_BLOCK)
	{
		log_faile('Bạn không có quyền thực hiện chức năng này.',5000);
		return false;
	}
	  
	if(typeof(scroll_top) != undefined)
	{
		window.scroll(0,0);
	}
	
	if(typeof(eb_cart.cart_item) == 'undefined')
	{
		return false
	}
	
	var pay_info  = '';
	var pay_style = '';
	
	for(var i in pay_services)
	{
		if(pay_services[i]['type'] == 1)
		{
			pay_info += '<tr>\
							<td align="center" class="td_border_basic_eb">' + i + '</td>\
							<td align="center" class="td_border_basic_eb">' + number_format(pay_services[i]['value']) + '</td>\
							<td align="center" class="td_border_basic_eb">' + number_format(pay_services[i]['price']) + ' Gold</td>\
							<td align="center" class="td_border_basic_eb">\
								<a onclick="cart_show(\''+ i +'\', \'cart_ebu\');"><img src="style/images/newCart/Mua.png"></a>\
							</td>\
						</tr>';
		}
	}
	
	var popUpContent = '<div style="margin:0 auto;width:815px; text-align:left;background-color:transparent;padding:0px;opacity:1; z-index:333;width:683px">\
							<div class="classic-popup_eb">\
								<div class="classic-popup-top_eb">\
									<div class="right_eb">\
										<div class="bg_eb"></div>\
									</div>\
								</div>\
								<div class="classic-popup-main_eb">\
									<div class="classic-popup-title_eb">\
										<div class="fl_eb">Dùng Gold mua lượt up tin cho tài khoản <a href="' + WEB_DIR + EB_USER_NAME + '" target="_blank" style="margin-left:5px"><span style="color:pink;font-size:20px">'+ EB_USER_NAME +'</span></a></div>\
										<a  class="classic-popup-close_eb" title="Đóng" onclick="pay_cancel();">x</a>\
										<div class="c_eb"></div>\
									</div>\
									<div class="classic-popup-content_eb">\
										<div class="content_eb">\
											<div style="padding:5px">\
												<table cellspacing="0" cellpadding="0" class="stats_eb">\
													<tr>\
														  <td align="center" valign="middle" class="hed_eb">\
															 Gói lượt up\
														  </td>\
															<td align="center" valign="middle" class="hed_eb">\
															   Lượt up</td>\
															<td align="center" valign="middle" class="hed_eb">\
															   Giá (Gold)\
															</td>\
															<td align="center" valign="middle" class="hed_eb"></td>\
													  </tr>\
													  ' + pay_info + '\
												</table>\
											</div>\
											<div align="center" class="mRight10_eb">\
												<span id="tt">\
													<div class="mTop10_eb">\
														<a  onclick="pay_cancel();" class="fL_eb blueButton_eb mLeft10_eb">\
															<span>\
																<span>HỦY BỎ</span>\
															</span>\
														</a>\
														<a class="blueButton_eb" style="float:right" onclick="cart_show(\'\', \'cart_ebu\');">\
															<span><span>XEM GIỎ HÀNG</span></span>\
														</a>\
														<div class="c_eb"></div>\
													</div>\
												</span>\
											</div>\
											<div class="mTop10_eb" style="font-size: 16px;"></div>\
											<div align="center" class="mTop10_eb">\
												<div class="c_eb"></div>\
											</div>\
										</div>\
									</div>\
								</div>\
								<div class="classic-popup-bottom_eb">\
									<div class="right_eb">\
										<div class="bg_eb"></div>\
									</div>\
								</div>\
							</div>\
    					</div>';
	
	pay_popup(popUpContent);
	return false;
}

function cart_ebd(c_item_id, scroll_top)
{
	if(IS_BLOCK)
	{
		log_faile('Bạn không có quyền thực hiện chức năng này.',5000);
		return false;
	}
	
	if(typeof(scroll_top) != undefined)
	{
		window.scroll(0,0);
	}
	
	if(typeof(eb_cart.cart_item) == 'undefined')
	{
		return false
	}
	
	if(typeof(c_item_id) != undefined)
	{
		cart_item_id	= c_item_id;
	}
	
	var pay_info  = '';
	var pay_style = '';
	
	for(var i in pay_services)
	{
		if(pay_services[i]['type'] == 2)
		{
			pay_info += '<tr>\
							<td align="center" class="td_border_basic_eb">' + i + '</td>\
							<td align="center" class="td_border_basic_eb">' + number_format(pay_services[i]['value']) + '</td>\
							<td align="center" class="td_border_basic_eb">' + number_format(pay_services[i]['price']) + ' Gold</td>\
							<td align="center" class="td_border_basic_eb">\
								<a onclick="cart_show(\''+ i +'\', \'cart_ebd\');"><img src="style/images/newCart/Mua.png"></a>\
							</td>\
						</tr>';
		}
	}
	
	var popUpContent = '<div style="margin:0 auto;width:815px; text-align:left;background-color:transparent;padding:0px;opacity:1; z-index:333;width:683px">\
							<div class="classic-popup_eb">\
								<div class="classic-popup-top_eb">\
									<div class="right_eb">\
										<div class="bg_eb"></div>\
									</div>\
								</div>\
								<div class="classic-popup-main_eb">\
									<div class="classic-popup-title_eb">\
										<div class="fl_eb">Mua lượt up tin cho tin có ID: <a href="' + WEB_DIR + 'p' + c_item_id + '.html" target="_blank" style="margin-left:5px"><span style="color:pink;font-size:20px">'+ c_item_id +'</span></a></div>\
										<a  class="classic-popup-close_eb" title="Đóng" onclick="pay_cancel();">x</a>\
										<div class="c_eb"></div>\
									</div>\
									<div class="classic-popup-content_eb">\
										<div class="content_eb">\
											<div style="padding:5px">\
												<table cellspacing="0" cellpadding="0" class="stats_eb">\
													<tr>\
														<td align="center" valign="middle" class="hed_eb">\
																Gói lượt up\
														</td>\
														<td align="center" valign="middle" class="hed_eb">\
														   Lượt up</td>\
														<td align="center" valign="middle" class="hed_eb">\
														  Giá (Gold)\
														</td>\
														<td align="center" valign="middle" class="hed_eb"></td>\
													  </tr>\
													  ' + pay_info + '\
												</table>\
											</div>\
											<div align="center" class="mRight10_eb">\
												<span id="tt">\
													<div class="mTop10_eb">\
														<a  onclick="pay_cancel();" class="fL_eb blueButton_eb mLeft10_eb">\
															<span>\
																<span>HỦY BỎ</span>\
															</span>\
														</a>\
														<a class="blueButton_eb" style="float:right" onclick="cart_show(\'\', \'cart_ebd\');">\
															<span><span>XEM GIỎ HÀNG</span></span>\
														</a>\
														<div class="c_eb"></div>\
													</div>\
												</span>\
											</div>\
											<div class="mTop10_eb" style="font-size: 16px;"></div>\
											<div align="center" class="mTop10_eb">\
												<div class="c_eb"></div>\
											</div>\
										</div>\
									</div>\
								</div>\
								<div class="classic-popup-bottom_eb">\
									<div class="right_eb">\
										<div class="bg_eb"></div>\
									</div>\
								</div>\
							</div>\
    					</div>';
	
	pay_popup(popUpContent);
	return false;
}

function cart_show(s_code, s_type)
{
	add_cart = false;
	
	if(!s_type)
	{
		s_type = '';
	}
	else
	{
		service_type = s_type;
	}
	
	if(s_code != undefined && s_code != '')//Add to cart
	{
		add_cart = true;
		
		if(pay_services[s_code] == undefined)//Add to cart
		{
			alert("Gói mua lượt up không đúng!");
			return false;
		}
	}
	
	var html 		= '';
	var id_update 	= 0;
	
	if(eb_cart && eb_cart.cart_item)
	{
		var stt = 1;
		
		for(var ci in eb_cart.cart_item)
		{
			if(typeof(ci) == "string" && ci != "inArray")
			{
				cart_s_code = eb_cart.cart_item[ci]['service_code'];//Mã DV cũ
				cart_s_type = eb_cart.cart_item[ci]['type'];//Kiểu DV cũ
				
				if(
				   		add_cart && cart_s_code == s_code && cart_s_type == pay_services[s_code]['type'] && 
				   		(cart_s_type == 1 || (cart_s_type == 2 && cart_item_id == eb_cart.cart_item[ci]['item_id']) )
					)//Add lại chính dịch vụ cũ
				{
					add_cart = false;
				}
				
				if(
				   		add_cart && cart_s_code != s_code && cart_s_type == pay_services[s_code]['type'] && 
				   		(cart_s_type == 1 || (cart_s_type == 2 && cart_item_id == eb_cart.cart_item[ci]['item_id']) )
					)//Đổi dịch vụ mới
				{
					id_update								= 	ci;
					
					eb_cart.price 		= eb_cart.price - parseInt(eb_cart.cart_item[ci]['price']) + parseInt(pay_services[s_code]['price']);
					
					eb_cart.cart_item[ci]['type']			=	pay_services[s_code]['type'];
					eb_cart.cart_item[ci]['price']			=	pay_services[s_code]['price'];
					eb_cart.cart_item[ci]['service_code']	=	s_code;
					
					if(pay_services[s_code]['type'] == 1)//EBU
					{
						eb_cart.cart_item[ci]['des']	=	s_code + ': Mua ' + number_format(pay_services[s_code]['value']) + ' lượt up cho tài khoản <b>' + EB_USER_NAME + '</b>';
					}
					else//EBD
					{
						eb_cart.cart_item[ci]['des']	=	s_code + ': Mua ' + number_format(pay_services[s_code]['value']) + ' lượt up cho tin có ID <b>' + eb_cart.cart_item[ci]['item_id'] + '</b>';
					}
					
					eb_cart.cart_item[ci]['checked']		=	1;
					eb_cart.cart_item[ci]['check_origin']	=	1;
					
					html += '<tr id="cart_row_' + ci + '">\
								<td valign="top" align="center" class="item_eb bRight_eb">' + stt + '</td>\
								<td valign="top" class="item_eb bRight_eb" align="left">\
									' + eb_cart.cart_item[ci]['des'] + '\
								</td>\
								<td valign="top" class="item_eb bRight_eb" align="center">\
									' + number_format(eb_cart.cart_item[ci]['price']) + ' Gold\
								</td>\
								<td valign="top" class="item_eb bRight_eb" align="center" >\
									<input type="checkbox" name="cart_item_' + ci + '" id="cart_item_' + ci + '" value="' + ci + '" title="Chọn thanh toán" class="clssId" onclick="cart_check(this.value);" ' + (eb_cart.cart_item[ci]['checked']==1? 'checked="checked"':'') + '>\
								</td>\
								<td valign="MIDDLE" align="center" class="item_eb">\
									<a  onclick="del_cart(' + ci + ');">\
										<img src="style/images/newCart/icon_del.gif">\
									</a>\
								</td>\
							</tr>';
				}
				else
				{
					html += '<tr id="cart_row_' + ci + '">\
								<td valign="top" align="center" class="item_eb bRight_eb">' + stt + '</td>\
								<td valign="top" class="item_eb bRight_eb" align="left">\
									' + eb_cart.cart_item[ci]['des'] + '\
								</td>\
								<td valign="top" class="item_eb bRight_eb" align="center">\
									' + number_format(eb_cart.cart_item[ci]['price']) + ' Gold\
								</td>\
								<td valign="top" class="item_eb bRight_eb" align="center" >\
									<input type="checkbox" name="cart_item_' + ci + '" id="cart_item_' + ci + '" value="' + ci + '" title="Chọn thanh toán" class="clssId" onclick="cart_check(this.value);" ' + (eb_cart.cart_item[ci]['checked']==1? 'checked="checked"':'') + '>\
								</td>\
								<td valign="MIDDLE" align="center" class="item_eb">\
									<a  onclick="del_cart(' + ci + ');">\
										<img src="style/images/newCart/icon_del.gif">\
									</a>\
								</td>\
							</tr>';
				}
				
				stt++;
			}
		}
		
		if(!id_update && add_cart)//Insert Item mới
		{
			var a_tmp = new Array();
			
			a_tmp['item_id']		=	0;
			a_tmp['type']			=	pay_services[s_code]['type'];
			a_tmp['price']			=	pay_services[s_code]['price'];
			a_tmp['service_code']	=	s_code;
			a_tmp['checked']		=	1;
			a_tmp['check_origin']	=	1;
			
			
			if(a_tmp['type'] == 1)//EBU
			{
				a_tmp['des']	=	s_code + ': Mua ' + number_format(pay_services[s_code]['value']) + ' lượt up cho tài khoản <b>' + EB_USER_NAME + '</b>';
			}
			else//EBD
			{
				a_tmp['item_id']				=	cart_item_id;
				
				a_tmp['des']	=	s_code + ': Mua ' + number_format(pay_services[s_code]['value']) + ' lượt up cho tin có ID <b>' + cart_item_id + '</b>';
			}
						
			eb_cart.cart_item['zzzzzz'] 		=  a_tmp;
			
			eb_cart.price 		+=  parseInt(a_tmp['price']);
			
			html += '<tr id="cart_row_zzzzzz">\
							<td valign="top" align="center" class="item_eb bRight_eb">' + stt + '</td>\
							<td valign="top" class="item_eb bRight_eb" align="left">\
								' + a_tmp['des'] + '\
							</td>\
							<td valign="top" class="item_eb bRight_eb" align="center">\
								' + number_format(a_tmp['price']) + ' Gold\
							</td>\
							<td valign="top" class="item_eb bRight_eb" align="center">\
								<input type="checkbox" name="cart_item_zzzzzz" id="cart_item_zzzzzz" value="zzzzzz" title="Chọn thanh toán" class="clssId" onclick="cart_check(this.value);" checked="checked">\
							</td>\
							<td valign="MIDDLE" align="center" class="item_eb" id="del_cart_zzzzzz">\
								<a >\
									<img src="style/images/newCart/icon_del.gif">\
								</a>\
							</td>\
						</tr>';
		}
	}
	else if(add_cart)//eb_cart chưa có ITEM
	{
		var a_tmp = new Array();
		
		a_tmp['item_id']		=	0;
		a_tmp['type']			=	pay_services[s_code]['type'];
		a_tmp['price']			=	pay_services[s_code]['price'];
		a_tmp['service_code']	=	s_code;
		a_tmp['checked']		=	1;
		a_tmp['check_origin']	=	1;
		
		
		if(a_tmp['type'] == 1)//EBU
		{
			a_tmp['des']	=	s_code + ': Mua ' + number_format(pay_services[s_code]['value']) + ' lượt up cho tài khoản <b>' + EB_USER_NAME + '</b>';
		}
		else//EBD
		{
			a_tmp['item_id']				=	cart_item_id;
			
			a_tmp['des']	=	s_code + ': Mua ' + number_format(pay_services[s_code]['value']) + ' lượt up cho tin có ID <b>' + cart_item_id + '</b>';
		}
		
		eb_cart.cart_item['zzzzzz'] 		=  a_tmp;
		
		eb_cart.price 		+=  parseInt(a_tmp['price']);
		
		html = '<tr id="cart_row_zzzzzz">\
				<td valign="top" align="center" class="item_eb bRight_eb">1</td>\
				<td valign="top" class="item_eb bRight_eb" align="left">\
					' + a_tmp['des'] + '\
				</td>\
				<td valign="top" class="item_eb bRight_eb" align="center">\
					' + number_format(a_tmp['price']) + ' Gold\
				</td>\
				<td valign="top" class="item_eb bRight_eb" align="center">\
					<input type="checkbox" name="cart_item_zzzzzz" id="cart_item_zzzzzz" value="zzzzzz" title="Chọn thanh toán" class="clssId" onclick="cart_check(this.value);" checked="checked">\
				</td>\
				<td valign="MIDDLE" align="center" class="item_eb"  id="del_cart_zzzzzz">\
					<a >\
						<img src="style/images/newCart/icon_del.gif">\
					</a>\
				</td>\
			</tr>';
	}
	
	if(html == '')//eb_cart chưa có ITEM
	{
		log_faile ('Hiện tại chưa có dịch vụ nào trong giỏ hàng!',5000);
	}
	else
	{
		var popUpContent = '<div style="background-color:transparent;padding:0px;opacity:1;z-index:333;width:710px;color:black;font-size: 12px;margin:0 auto;" id="popup-container">\
							<div class="classic-popup_eb">\
								<div class="classic-popup-top_eb">\
									<div class="right_eb">\
										<div class="bg_eb"></div>\
									</div>\
								</div>\
								<div class="classic-popup-main_eb">\
									<div class="classic-popup-title_eb">\
										<div class="fl_eb">Thông tin giỏ hàng</div>\
										<a  class="classic-popup-close_eb" title="Đóng" onclick="pay_cancel();">x</a>\
										<div class="c_eb"></div>\
									</div>\
									<div class="classic-popup-content_eb">\
										<div class="content_eb" style="padding: 10px 0px;">\
											<span id="mycart">\
												<table width="100%" cellspacing="0" cellpadding="0" border="0" class="cart-finish_eb">\
													<tr>\
														<th width="25" class="head_eb bRight_eb">STT</th>\
														<th class="head_eb bRight_eb" align="left">Dịch vụ</th>\
														<th width="150" class="head_eb bRight_eb" align="left">Giá (Gold)</th>\
														<th width="30" class="head_eb bRight_eb">\
															<div style="margin-left: -4px;">\
																<input type="checkbox" name="chkAll" id="chkAll" title="Chọn tất cả" onclick="cart_check_all()">\
															</div>\
														</th>\
														<th width="40" class="head_eb"></th>\
													</tr>' 
													+  html +
													'<tr>\
														<td align="right" class="item_eb total-all_eb" colspan="2">Tổng giá trị thanh toán:</td>\
														<td align="center" class="item_eb total-all_eb"><span id="cart_price_pay">' + number_format(eb_cart.price) + '</span> Gold</td>\
														<td align="center" class="item_eb total-all_eb" colspan="2"></td>\
													</tr>\
												</table>\
											</span>\
											<div align="center" class="mRight20_eb">\
												<span id="tt">\
													<div class="mTop10_eb">\
														<a class="blueButton_eb mLeft10_eb" style="float:right" onclick="cart_check_items();">\
															<span>\
																<span>THANH TOÁN<b>»</b></span>\
															</span>\
														</a>\
														<a class="blueButton_eb mLeft10_eb" style="float:right" onclick="pay_cancel();">\
															<span>\
																<span>TIẾP TỤC MUA<b>»</b></span>\
															</span>\
														</a>' +
														(service_type != ''?
														'<span id="quaylai">\
															<a onclick="' + service_type + '();" class="fL_eb blueButton_eb mLeft10_eb">\
																<span><span><b>«</b> QUAY LẠI</span>\
																</span>\
															</a>\
														</span>':'')
														+ '<div class="c_eb"></div>\
													</div>\
												</span>\
											</div>\
											<div class="mTop10_eb" style="font-size: 16px; width: 758px;"></div>\
											<div align="center" class="mTop10_eb">\
												<div class="c_eb"></div>\
											</div>\
										</div>\
									</div>\
								</div>\
								<div class="classic-popup-bottom_eb">\
									<div class="right_eb">\
										<div class="bg_eb"></div>\
									</div>\
								</div>\
							</div>\
						</div>';
	
		pay_popup(popUpContent);
	}
		
	if(id_update)//Cập nhật Item
	{
		jQuery.ajax({
				type: "POST",
				url: WEB_DIR+"ajax.php?act=payment&code=update_item_cart",
				data: {service_code: s_code,cart_id:eb_cart.cart_id,cart_item_id:id_update},
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
					else if(data.msg == 'error')
					{
						log_faile('Có lỗi trong quá trình xử lý, mời bạn thử lại.',5000);
						window.location.reload();
						
						return false;
					}
					else if(data.msg == '')
					{
						eb_cart.price =  parseInt(data.price);
						
						CartCheckPrice();
					}
				}
			});
	}
	else if(add_cart)
	{
		jQuery.ajax({
				type: "POST",
				url: WEB_DIR+"ajax.php?act=payment&code=add_to_cart",
				data: {service_code: s_code, cart_id: eb_cart.cart_id, item_id: cart_item_id},
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
					else if(data.msg == 'error')
					{
						alert('Có lỗi trong quá trình xử lý, mời bạn thử lại.');
						window.location.reload();
						
						return false;
					}
					else if(data.msg == '')
					{
						eb_cart.price =  parseInt(data.price);
						
						eb_cart.cart_item[data.id] = eb_cart.cart_item['zzzzzz'];
					
						eb_cart.cart_id = data.cart_id;
						
						delete(eb_cart.cart_item['zzzzzz']);
						
						jQuery("#del_cart_zzzzzz").html('<a  onclick="del_cart(' + data.id + ');">\
															<img src="style/images/newCart/icon_del.gif">\
														</a>');
						
						eb_cart.s_total++;
						
						if(eb_cart.s_total > 0)
						{
							jQuery('#num_item_cart').html('Có ' + eb_cart.s_total + ' dịch vụ');	
							jQuery('#cart_num').html(eb_cart.s_total).attr('title','Có ' + eb_cart.s_total + ' dịch vụ trong giỏ hàng');	
							jQuery('#cart_item_zzzzzz').attr({'name':'cart_item_' + data.id,'id':'cart_item_' + data.id}).val(data.id);	
							jQuery('#cart_row_zzzzzz').attr('id','cart_row_' + data.id);	
							
							
							if(eb_cart.s_total > 9)
							{
								jQuery('#alert-cart').css("right","3px");
							}
							else
							{
								jQuery('#alert-cart').css("right","10px");
							}
							
							jQuery('#alert-cart').show();	
						}
						else
						{
							jQuery('#alert-cart').hide();	
							
							log_faile ('Hiện tại chưa có dịch vụ nào trong giỏ hàng!',5000);
						}
						
						CartCheckPrice();
					}
				}
			});
	}
	
	return false;
}

//Xóa item trong cart
function del_cart(cart_item_id)
{
	if(eb_cart.cart_item[cart_item_id] != undefined)
	{
		jQuery.ajax({
				type: "POST",
				url: WEB_DIR+"ajax.php?act=payment&code=del_cart",
				data: {cart_item_id: cart_item_id,cart_id: eb_cart.cart_id},
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
					else if(data.msg == 'error')
					{
						alert('Có lỗi trong quá trình xử lý, mời bạn thử lại.');	
						window.location.reload();
						return false;
					}
					else if(data.msg == '')
					{
						eb_cart.price =  parseInt(data.price);
						
						delete(eb_cart.cart_item[cart_item_id]);
						
						eb_cart.s_total--;
						jQuery('#cart_row_' + cart_item_id).remove();	
						
						jQuery('#num_item_cart').html('Có ' + eb_cart.s_total + ' dịch vụ');	
						jQuery('#cart_num').html(eb_cart.s_total).attr('title','Có ' + eb_cart.s_total + ' dịch vụ trong giỏ hàng');	
							
						if(eb_cart.s_total > 0)
						{
							if(eb_cart.s_total > 9)
							{
								jQuery('#alert-cart').css("right","3px");
							}
							
							jQuery('#alert-cart').show();	
						}
						else
						{
							jQuery('#alert-cart').hide();	
							pay_cancel();
							
							log_faile ('Không còn dịch vụ nào trong giỏ hàng!', 5000);
						}						
						
						CartCheckPrice();
					}
				}
			});
	}
}

//Hàm kiểm tra các check box của item trong giỏ hàng
function cart_check_all()
{
	if(jQuery("#chkAll").is(':checked'))
	{
		jQuery(".clssId").attr('checked', true);
		jQuery('#cart_price_pay').html(''+number_format(eb_cart.price)+'');
	}
	else
	{
		jQuery(".clssId").attr('checked', false);	
		jQuery('#cart_price_pay').html('0');
	}
}

//Hàm khi check, uncheck item trong giỏ hàng
function cart_check(check_id)
{
	if(jQuery('#cart_item_'+check_id).is(':checked'))
	{
		eb_cart.cart_item[check_id]['checked'] =	1;	
	}
	else
	{
		eb_cart.cart_item[check_id]['checked'] =	0;
	}
	
	var cart_check_all = true;
	eb_cart.price = 0;
	
	jQuery(".clssId").each(function(){
		if(jQuery(this).is(':checked'))
		{
			eb_cart.price += parseInt(eb_cart.cart_item[this.value]['price']);
		}
		else		
		{
			cart_check_all = false;
		}
	});
	
	jQuery('#cart_price_pay').html(''+number_format(eb_cart.price)+'');
	
	jQuery("#chkAll").attr('checked', cart_check_all);
}

function cart_check_items()
{
	if(eb_cart.cart_id == 0 || eb_cart.price <= 0 || eb_cart.s_total <= 0)
	{
		alert('Bạn chưa chọn dịch vụ để thanh toán!');
		return false;
	}
	
	var check_ids = '',un_check_ids='';
	
	for(var ci in eb_cart.cart_item)
	{
		if(typeof(ci) == "string" && ci != "inArray")
		{
			if(eb_cart.cart_item[ci]['checked'] != eb_cart.cart_item[ci]['check_origin'])
			{
				if(eb_cart.cart_item[ci]['checked'])
				{
					eb_cart.cart_item[ci]['check_origin'] = 1;
					
					check_ids += (check_ids !='' ? ',' : '') + ci;
				}
				else
				{
					eb_cart.cart_item[ci]['check_origin'] = 0;
					
					un_check_ids += (un_check_ids !='' ? ',' : '') + ci;
				}
			}
		}
	}
	
	if(check_ids || un_check_ids)	
	{
		jQuery.ajax({
				type: "POST",
				url: WEB_DIR+"ajax.php?act=payment&code=update_cart",	
				data: {cart_id: eb_cart.cart_id,check_ids:check_ids,un_check_ids:un_check_ids}, 
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
					else if(data.msg == 'error')
					{			
						alert('Có lỗi trong quá trình thanh toán giỏ hàng, mời bạn thử lại sau.');
						
						window.location.reload();
						return false;
					}
					else if(data.msg != '')//Error
					{	
						alert(data.msg);	
					}	
					else//Succes
					{	
						eb_cart.price = data.price;
						
						
						cart_pay_confirm();
					}
				}
			});
	}
	else{
		cart_pay_confirm();
	}
}

function cart_pay_confirm()
{
	if(eb_cart.cart_id == 0 || eb_cart.price <= 0 || eb_cart.s_total <= 0)
	{
		log_faile ('Hiện tại chưa có dịch vụ nào trong giỏ hàng!',5000);
		return false;
	}
	
	//Vẽ templates
	content = cart_join
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
                                        ('<div class="fl_eb">Xác nhận thanh toán Giỏ hàng bằng Gold</div>')
                                        ('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" >x</a>')
                                        ('<div class="c_eb"></div>')
                                    ('</div>')

                                    ('<div class="classic-popup-content_eb">')
                                        ('<div style="padding: 10px 20px;" class="content_eb">')
                                            //Thong tin khach hang
                                            ('<div class="box-gradien_eb pBottom10_eb" id="idUserInfo">')
                                                ('<div class="title_eb">Thông tin khách hàng</div>')
                                                ('<div id="pTop10" class="content_eb">')
													('<div>')
														('<strong>Tên đăng nhập: </strong>')
														('<span class="cff9200_eb">' + EB_USER_NAME + '</span>')
													('</div>')
													('<div class="mTop5_eb">')
														('<strong>Số Gold trong tài khoản: </strong>')
														('<font color="' + (EB_GOLD - eb_cart.price >=0 ? 'blue' : 'red' ) + '">' + number_format(EB_GOLD) + ' Gold</font> <font color="blue"><b> [ <a onclick="pay_cancel();pay_gold();" title="Nạp '+(EB_GOLD>0 ? 'thêm':'')+' Gold vào tài khoản"><font color="blue">Nạp '+(EB_GOLD>0 ? 'thêm':'')+' Gold</font></a> ]</b></font>')
													('</div>')
													('<div class="mTop5_eb">')
														('<strong>Số Gold tối thiểu cần để thanh toán: </strong>')
														('<font color="blue">' + number_format(eb_cart.price) + ' Gold</font>')
													('</div>' + 
													(EB_GOLD - eb_cart.price >=0 ? 
																'<div class="mTop5_eb">\
																 	<strong>Số Gold còn lại sau Thanh Toán: </strong>\
																	<font color="red">' + number_format(EB_GOLD - eb_cart.price) + ' Gold</font>\
																</div>' 
															: 
															'')
													+ '<div class="c_eb"></div>')
                                                ('</div>')
                                            ('</div>')

                                            //hinh thuc thanh toan
                                            ('<div class="box-gradien_eb pBottom10_eb pTop15_eb mTop10_eb" id="paymentTypeInfo">')
                                                ('<div class="title_eb">')
													('Hình thức thanh toán: <span style="font-size: 12px; font-weight: normal; text-transform: none;">Sử dụng Gold trong tài khoản</span>')
                                                ('</div>')
                                                ('<div class="content_eb">')
													('<ul style="display: block;" id="info_3" class="paymentText_eb paymentGuide_eb hidden_eb">												<li><font color="red">Quý khách cần có đủ số Gold trong tài khoản để thanh toán giỏ hàng này</font></li>\
													 	<li><font color="red">Giỏ hàng sẽ được thanh toán ngay sau khi quý khách click vào nút <b>XÁC NHẬN & THANH TOÁN</b></font></li>\
													 	<li>Số Gold quý khách sử dụng để thanh toán giỏ hàng sẽ được trừ vào tài khoản của quý khách.</li>\
														<li>Số Gold bị trừ vào tài khoản tương ứng với giá trị giỏ hàng.</li>\
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
                                                            ('<td valign="top" align="center" class="item_eb bRight_eb" style="font-size:16px;color:#00A0DC">Thanh toán giỏ hàng mã số: ' + eb_cart.cart_id + ' bằng Gold</td>')
                                                            ('<td valign="top" align="center" class="item_eb" width="30%" style="font-size:16px;color:#00A0DC"><span id="bgAllPrice">' + number_format(eb_cart.price) + '</span> Gold</td>')
                                                        ('</tr>')
                                                    ('</table>')
                                                 ('</div>')
                                            ('</div>')
                                            ('<div style="font-size: 16px; width: 758px;" class="mTop10_eb">')
                                                ('<input type="checkbox" class="checkbox" id="check-regulations"' + (eb_pay_accepted? ' checked="checked"':'') +'/>')
                                                ('<label for="check-regulations"><b>Tôi đã đọc và đồng ý với các <a target="_blank" href="http://help.enbac.com/index.php/D%E1%BB%8Bch_v%E1%BB%A5_Thanh_To%C3%A1n_Online">điều khoản thanh toán online</a> của ÉnBạc.com</b></label>')
                                            ('</div>')

                                            ('<div class="mTop10_eb fl_eb">')
                                                ('<a class="blueButton_eb"  onclick="pay_cancel();"><span><span>HỦY BỎ</span></span></a>')
                                            ('</div>')
                                            ('<div class="mTop10_eb">')
                                                ('<a id="cart_pay_button" class="blueButton_eb mLeft10_eb" style="float:right">')
                                                    ('<span onclick="cart_payment_accept();">')
                                                        ('<span>XÁC NHẬN & THANH TOÁN</span>')
                                                    ('</span>')
                                                ('</a>')
                                                ('<a class="blueButton_eb" style="float:right" onclick="cart_show();" >')
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
				
	pay_popup(content);
}

function cart_payment_accept()
{
	if(jQuery('#check-regulations').is(':checked'))
	{
		eb_pay_accepted = 1;
	}
	else
	{
		eb_pay_accepted = 0;
		
		alert("Bạn phải đồng ý với điều khoản của Én Bạc!");
		return false;
	}
	
	if(EB_GOLD < eb_cart.price)
	{
		if(confirm("Số Gold trong tài khoản của quý khách không đủ để thực hiện giao dịch này!\n\nBạn có muốn nạp thêm Gold vào tài khoản không?"))
		{
			pay_cancel();
			pay_gold();
		}
		
		return false;
	}
	
	jQuery.ajax({
				type: "POST",
				url: WEB_DIR+"ajax.php?act=payment&code=cart_payment",	
				data: {cart_id: eb_cart.cart_id}, 
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
					else if(data.msg == 'error')
					{			
						alert('Có lỗi trong quá trình thanh toán giỏ hàng, mời bạn thử lại sau.');
						
						window.location.reload();
						return false;
					}
					else if(data.msg == 'payed')
					{			
						alert('Giỏ hàng có ID '+ eb_cart.cart_id +' này đã được thanh toán rồi, bạn không thể thanh toán giỏ hàng này nữa!');
						
						window.location.reload();
						return false;
					}
					else if(data.msg == 'over_price')
					{			
						alert('Số Gold trong tài khoản của quý khách là ' + number_format(data.gold_user) + ' Gold, không đủ để thanh toán giỏ hàng có ID ' +eb_cart.cart_id+ ' này!');
						
						window.location.reload();
						return false;
					}
					else if(data.msg != '')//Error
					{	
						alert(data.msg);	
					}	
					else//Succes
					{			
						pay_cancel();
						
						alert("Bạn đã thanh toán thành công giỏ hàng có ID "+ eb_cart.cart_id +", số Gold bị trừ vào tài khoản " +data.user_name+ " là " + number_format(data.gold_used) + " Gold!\nTài khoản của bạn còn: " + number_format(data.gold_user) + " Gold\n\nCám ơn bạn đã sử dụng dịch vụ của ÉnBạc!");
						
						window.location.reload();
					}
				}
			});
}

//NhatVT
function cart_showOnlineBank(){
    if(jQuery('.view_more_bank_eb').hasClass('hidden_eb')){
        jQuery('.view_more_bank_eb').slideDown().removeClass('hidden_eb');
    }else{
        jQuery('.view_more_bank_eb').slideUp().addClass('hidden_eb');
    }
};

function cart_overPaymentType(id){
    var i = 1;
    for(i = 1; i<=7; i++){
        if(i == id){
            jQuery("#paytype_"+i).addClass("pay_active_eb");
        }else if(!jQuery("#paytype_"+i).hasClass('clicked_eb')){
            jQuery("#paytype_"+i).removeClass('pay_active_eb');
        }
    }
}

function cart_outPaymentType(id){
    if(!jQuery("#paytype_"+id).hasClass('clicked_eb')){
            jQuery("#paytype_"+id).removeClass('pay_active_eb');
        }
}

function cart_chooseBank(obj, id){
    jQuery('.bank .active').removeClass('active');
    jQuery(obj).addClass('active');
    cart_bank_type = id;

    //show bank detail
    cart_temBankInfo();
}

function cart_choosePaymentType(id)
{
    for(var i = 1; i<=7; i++)
	{
        if(i == id)
		{
            jQuery("#paytype_"+i).addClass("clicked_eb").addClass("pay_active_eb");
            jQuery("#radio_"+i).attr("checked", true);
            jQuery("#info_"+i).slideDown(300);
        }
		else
		{
            jQuery("#paytype_"+i).removeClass("clicked_eb").removeClass('pay_active_eb');
            jQuery("#radio_"+i).attr("checked", false);
            jQuery("#info_"+i).slideUp(300);
        }
    }
	
    if(id == 4)//Chuyển khoản
	{
        jQuery("#bank_hidden").slideDown(300);
    }
	else
	{
        jQuery("#bank_hidden").slideUp(300);
    }

    //lay kieu thanh toan
    eb_pay_type = id;
	
	if(eb_pay_type != 4)
	cart_bank_type 	= '';
}

function cart_temBankInfo(){
    tem = cart_bankInfo();
    jQuery('.bank_list_eb').slideUp(500);
    jQuery('.bank_info_eb .bank_detail_eb').html(tem);
    jQuery('.')
    jQuery('.bank_info_eb').slideDown(500);
}

function cart_bankInfo()
{
    var cart_listBank = {
			bank:{
                'mb_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+0651100016002%3Cstrong%3E%3Cbr%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+th%C6%B0%C6%A1ng+m%E1%BA%A1i+c%E1%BB%95+ph%E1%BA%A7n+Qu%C3%A2n+%C4%91%E1%BB%99i+-+CN+Hai+B%C3%A0+Tr%C6%B0ng+%28MB%29%3C%2Fstrong%3E',
                'acb_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+37182319%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+%C3%81+Ch%C3%A2u+chi+nh%C3%A1nh+H%C3%A0+N%E1%BB%99i+%28ACB%29%3C%2Fstrong%3E',
                'vc_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+002.1.00.183924.3%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+Vietcombank+%28VCB%29+H%C3%A0+N%E1%BB%99i%3C%2Fstrong%3E',
                'vib_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+001704060035755%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+TMCP+Qu%E1%BB%91c+t%E1%BA%BF+Vi%E1%BB%87t+Nam+%28VIB%29%3C%2Fstrong%3E',
                'donga_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+002387340001%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+%C4%90%C3%B4ng+%C3%81+chi+nh%C3%A1nh+B%E1%BA%A1ch+Mai+-+H%C3%A0+N%E1%BB%99i%3C%2Fstrong%3E',
                'techcom_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+10320141354011%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+Techcombank+CN+Th%C4%83ng+Long%3C%2Fstrong%3E',
                'bidv_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+12010000318895%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+BIDV+S%E1%BB%9F+Giao+d%E1%BB%8Bch%3C%2Fstrong%3E',
                'vietinbank': '%3Cp%3E%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+1020.1000.1108.169%3Cbr+%2F%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr+%2F%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+C%C3%B4ng+th%C6%B0%C6%A1ng+Vi%E1%BB%87t+Nam+chi+nh%C3%A1nh+Hai+B%C3%A0+Tr%C6%B0ng%3C%2Fstrong%3E%3C%2Fp%3E',
                'agribank': '%3Cp%3E%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+1483.2010.047.40%3Cbr+%2F%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr+%2F%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+AGRIBANK+chi+nh%C3%A1nh+Th%E1%BB%A7+%C4%90%C3%B4%3C%2Fstrong%3E%3C%2Fp%3E'
                }
		};
        
    var logo = '<div class="'+cart_bank_type+'_eb"></div>',
    note = decodeURIComponent(cart_listBank.bank[cart_bank_type]);
    note = '<div class="mTop10_eb">'+note.replace(/\+/gi,' ')+'</div>';
	
    return tem = cart_join
					('<div class="fl_eb">'+logo+'</div>')
					('<div class="fl_eb" style="width:320px">'+note)
					('<div style="color:#BE0D0D" class="f11_eb mTop5_eb">(Quý khách vui lòng tự thanh toán chi phí CK)</div></div>')
					('<div class="c_eb"></div>')()
}

function cart_join(str){
    var store = [str];
    return function extend(other) {
        if (other != null && 'string' == typeof other ) {
            store.push(other);
            return extend;
        }
        return store.join('');
    }
}

function cart_listBank()
{
	cart_bank_type = '';
	
    jQuery('.bank_info_eb').slideUp(300);
    jQuery('.bank_list_eb').slideDown(300);
}

function f_number_only(myfield, e){
    var key,keychar;
    if (window.event){key = window.event.keyCode}
    else if (e){key = e.which}
    else{return true}
    keychar = String.fromCharCode(key);
    if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27)){return true}
    else if (("0123456789").indexOf(keychar) > -1){return true}
    return false;
} 

function f_mix_money(myfield){
	myfield.value = number_format(myfield.value);
}

function CartCheckPrice()
{
	if(eb_cart && eb_cart.cart_item)
	{
		var cart_price = 0;
		
		for(var ci in eb_cart.cart_item)
		{
			if(typeof(ci) == "string" && ci != "inArray" && eb_cart.cart_item[ci]['checked'] == 1)
			{
				cart_price += parseInt(eb_cart.cart_item[ci]['price']);
			}
		}
		
		if(cart_price != eb_cart.price)
		{
			window.location.reload();
		}
		
		jQuery('#cart_price_pay').html(''+number_format(cart_price)+'');
	}
}

function f_pay_update_info()
{
	var full_name 	= jQuery.trim(getValueId('ho_ten'));
	var mobile 		= jQuery.trim(getValueId('dien_thoai'));

	if(full_name != '')
	{
		eb_user_info.full_name = full_name;
	}
	
	if(mobile != '')
	{
		eb_user_info.mobile = mobile;
	}
	
	if(eb_pay_type == 2)
	{
		var dia_chi 	= jQuery.trim(jQuery("#dia_chi").val());
		var thanh_pho 	= jQuery("#thanh_pho").val();
		var ngay 		= jQuery("#ngay").val();
		var thoi_gian 	= jQuery("#thoi_gian").val();
		
		if(dia_chi != '')
		{
			eb_user_info.dia_chi = dia_chi;
		}
		
		if(thanh_pho != '')
		{
			eb_user_info.thanh_pho = thanh_pho;
			eb_user_info.txt_thanhpho 	= jQuery("#tp"+thanh_pho).html();
		}
		
		if(ngay != '')
		{
			eb_user_info.ngay 		= ngay;
			eb_user_info.txt_ngay 	= jQuery("#t"+ngay).html();
		}
		
		if(thoi_gian != '')
		{
			eb_user_info.thoi_gian 		= thoi_gian;
			eb_user_info.txt_thoigian 	= jQuery("#b"+thoi_gian).html();
		}
	}
}