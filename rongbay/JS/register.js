function change_confirm()
{	
	if(getValueId('confirm_register','checked'))
	{		
		jQuery('#submit').removeClass('buttonDisabled').addClass('button').removeAttr('disabled');		
	}
	else{
		jQuery('#submit').removeClass('button').addClass('buttonDisabled').attr('disabled','disabled');
	}
}

function fn_reload_captcha(){	
	jQuery('#reload_button').attr({src : "style/images/indicator_arrows.gif"});
	jQuery("#captcha_img").attr({ src : 'captcha.php' + '?' + (new Date()).getTime() });		
	setTimeout(function(){jQuery('#reload_button').attr({src : "style/images/indicator_arrows_static.gif"}); }, 500);
	
	jQuery('#captcha_register').val('');
}

jQuery().ready(function(){				
	jQuery().ajaxComplete(function(r,s){
		jQuery("#loading-layer").fadeOut("slow");
	});	
	
	jQuery.validator.addMethod("standard", function(value, element) {
		return  this.optional(element) || /^\w+$/i.test(value);	
	}); 
	
	jQuery.validator.addMethod("phone_number", function(value, element) {
		return  this.optional(element) || /^[0-9\.\(\)\+]+$/i.test(value);	
	});  
	
	 jQuery.validator.addMethod("noSpace", function(value, element) { 
	  return value.indexOf(" ") < 0 && value != ""; 
	});

		
	jQuery("#Register").validate({
		errorElement: "em",
		success: function(label) {
				label.text("ok!").addClass("success");
		},
		rules: {
			full_name:{
				required: true,
				minlength: 4,
				maxlength: 25
			},		
			email: {
				required: true,
				email: true,
				remote: WEB_DIR+"ajax.php?act=user&code=register"
			},	
			register_password: {
				required: true,
				noSpace: true,
				minlength: 6
			},
			confirm_password: {
				required: true,
				minlength: 6,
				equalTo: "#register_password"
			},
			mobile_phone: {
				phone_number: true,				
				minlength: 9,
				maxlength: 12
			},
			captcha_register: {
				required: true,			
				remote: WEB_DIR+"ajax.php?act=user&code=captcha_register"
			}					
		},
		messages: {
			full_name:{
				required: "Phải nhập tên đầy đủ",
				minlength: "Họ và tên tối thiểu 4 ký tự",
				maxlength: "Họ và tên tối đa 25 ký tự"
			},
			email: {
				required: "Email không hợp lệ",
				email: "Email không hợp lệ",
				remote: "Email đã tồn tại" 
			},
			register_password: {
				required: "Mật mã truy cập không hợp lệ",
				noSpace: "Mật khẩu không sử dụng dấu cách",
				minlength: "Mật mã truy cập tối thiểu 6 ký tự"
			},
			confirm_password: {
				required: "Nhập lại mật mã không hợp lệ",
				minlength: "Nhập lại mật mã tối thiểu 6 ký tự",
				equalTo: "Nhập lại mật mã không chính xác"
			},
			mobile_phone: {
				phone_number: "Số điện thoại không hợp lệ",
				minlength: "Điện thoại ít nhất 9 ký tự",
				maxlength: "Số điện thoại quá dài, vượt quá 12 ký tự"
			},
			captcha_register: {	
				required: "Bạn chưa nhập mã bảo mật",			
				remote: "Mã bảo mật chưa đúng"
			}
		}		
	});	 		
});