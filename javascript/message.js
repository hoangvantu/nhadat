// dinh nghia bien cho PM
var inbox_reload_jcache = false;
var outbox_reload_jcache = false;

function check_send_mess(type){
	var is_save = 0;
	
	var content_pm = trim(jQuery('#content_pm').val());
	
	if(type=='typing_user'){// gui tu quan ly tin nhan
		//var title_pm 	= jQuery('#title_pm').val();
		//var user_email 	= jQuery('#user_email').val();
		var user_email 	= '';
		var mt_id 		= jQuery('#mt_id').val();
		
		if(!mt_id){
			var user_email 	= jQuery('#user_email').val();
			
			if(user_email=="" || !isEmail(user_email)){
				document.getElementById('mess_success').style.display = '';
				document.getElementById('mess_success').innerHTML = 'Email không hợp lệ!';	
				document.getElementById('user_email').focus();
				return false;
			}
		}
		/*if(title_pm==""){
			document.getElementById('mess_success').style.display = '';
			document.getElementById('mess_success').innerHTML = 'Tiêu đề tin nhắn không hợp lệ';
			document.getElementById('title_pm').focus();
			return false;
		}*/
		
		if(content_pm == ""){
			document.getElementById('mess_success').style.display = '';
			document.getElementById('mess_success').innerHTML = 'Nội dung tin nhắn không hợp lệ';	
			document.getElementById('content_pm').focus();
		}
		else{
			document.getElementById('loading_ajax').style.display  = '';				
			
			if(getValueId('is_save','checked')){
				var is_save = 1;	
			}
			
			jQuery.ajax({
				'url': 'ajax.php',
				'data': {
					'act':'message',
					'code':'send_mes',
					'mt_id':mt_id,
					'user_email':user_email,
					//'title_pm':title_pm,
					'content_pm':content_pm,
					'is_save':is_save
					},
				'type': 'POST',
				'success': function(data){
					if(data=="not_login"){
						document.getElementById('mess_success').style.display = '';
						document.getElementById('mess_success').innerHTML = 'Bạn phải đăng nhập mới gửi được tin nhắn';
					}
					else if(data=="invalid_email"){
						document.getElementById('mess_success').style.display = '';
						document.getElementById('mess_success').innerHTML = 'Email không hợp lệ!';
					}
					else if(data=="your_self"){
						document.getElementById('mess_success').style.display = '';
						document.getElementById('mess_success').innerHTML = 'Bạn không được gửi tin nhắn cho chính bạn';
					}
					else if(data=="over_limit"){
						document.getElementById('mess_success').style.display = '';
						document.getElementById('mess_success').innerHTML = 'Vượt quá 5 thành viên cho phép gửi cùng lúc';
					}					
					else if(data=="unsuccess"){
						document.getElementById('mess_success').style.display = '';
						document.getElementById('mess_success').innerHTML = 'Không gửi được tin nhắn. Hãy kiểm tra lại các thông tin';
					}
					else{ // gui tin nhan thanh cong
						jQuery("#mt_id").val(0);
						jQuery("#user_email").attr("disabled","").val('');
						jQuery("#content_pm").val('');
				
						document.getElementById('mess_success').style.display = '';	
						document.getElementById('mess_success').innerHTML = data;	
				
						setTimeout(function(){document.getElementById('mess_success').style.display = 'none';}, 10000); //10000	
					}
					document.getElementById('loading_ajax').style.display  = 'none';					
					outbox_reload_jcache = true;
				}
			});
		}
		
	}
	else{ // gui tu trang chi tiet san pham
		if(IS_LOGIN || type=='detail'){//Thành viên đã đăng nhập hoặc gửi trong trang chi tiết		
			if(ad_userid==0){
				document.getElementById('mess_success').style.display = '';
				document.getElementById('mess_success').innerHTML = 'Người đăng là khách vãng lai. Bạn không gửi được tin nhắn';	
				return false;
			}
			else if(ad_userid == IS_LOGIN){//gửi tin nhắn cho chính mình
				document.getElementById('mess_success').style.display = '';
				document.getElementById('mess_success').innerHTML = 'Bạn không được gửi tin nhắn cho chính bạn';	
				return false;
			}
			else{
				var g_email = '';	
				
				if(!IS_LOGIN && type == 'detail'){//khách gửi tin nhắn trong trang chi tiết
					g_email = trim(jQuery('#g_email').val());
					
					if(g_email != '' && g_email != null){
						if(!isEmail(g_email)){
							document.getElementById('mess_success').style.display = '';
							document.getElementById('mess_success').innerHTML = 'Email không hợp lệ!';
							jQuery("#g_email").focus();
							return false;
						}
						else{
							document.getElementById('mess_success').style.display = 'none';
							document.getElementById('mess_success').innerHTML = '';
						}
					}
					else{
						document.getElementById('mess_success').style.display = '';
						document.getElementById('mess_success').innerHTML = 'Bạn chưa nhập Email liên hệ!';
						jQuery("#g_email").val('');
						jQuery("#g_email").focus();
						return false;
					}
				}
				
				if(content_pm){
					if(typeof(ad_id) == 'undefined'){
						ad_id = 0;
					}
					document.getElementById('loading_ajax').innerHTML = '<div align="center" style="padding:10px"><span class="textMes"><img src="style/images/loading.gif" align="absmiddle"> Đang tải dữ liệu ...</span></div>';
					
					jQuery.ajax({
						'url': 'ajax.php',
						'data': {
							'act':'message', 
							'code':'send_mes',
							'ad_userid':ad_userid,
							'ad_id':ad_id,
							//'title_pm':title_pm,
							'email':g_email,
							'content_pm':content_pm
							},
						'type': 'POST',
						'success': function(data)
						{
							if(data=="not_login"){
								document.getElementById('mess_success').style.display = '';
								document.getElementById('mess_success').innerHTML = 'Bạn phải đăng nhập mới gửi được tin nhắn';	
							}
							else if(data=="invalid_email"){
								document.getElementById('mess_success').style.display = '';
								document.getElementById('mess_success').innerHTML = 'Email không hợp lệ!';
							}
							else if(data=="your_self"){
								document.getElementById('mess_success').style.display = '';
								document.getElementById('mess_success').innerHTML = 'Bạn không được gửi tin nhắn cho chính bạn';
							}
							else if(data=="success"){
								//document.getElementById('title_pm').value="";
								jQuery('#content_pm').val("");
								
								if(type!='detail'){
									document.getElementById('mess_success').style.display = '';	
									document.getElementById('mess_success').innerHTML = 'Gửi tin nhắn thành công';	
									setTimeout(function(){document.getElementById('mess_success').style.display = 'none';}, 5000);	
								}
								else{
									jQuery.unblockUI();
									document.getElementById('loading_ajax').innerHTML = '';
									outbox_reload_jcache = true;
									alert('Gửi tin nhắn thành công');
									return;
								}									
							}
							document.getElementById('loading_ajax').innerHTML = '';
							outbox_reload_jcache = true;
							
							if(type=='detail'){
								setTimeout(function(){jQuery.unblockUI();}, 5000);												
							}
						}
					});
				}
				else{
					jQuery("#content_pm").val('');
					document.getElementById('mess_success').style.display = '';
					document.getElementById('mess_success').innerHTML = 'Nội dung tin nhắn không được để trống';
					jQuery("#content_pm").focus();
				}
			}
		}	
		else{
			document.getElementById('mess_success').style.display = '';
			document.getElementById('mess_success').innerHTML = 'Bạn phải đăng nhập mới gửi được tin nhắn';
			return false;
		}
	}
	return false;
}

var bbcode = false;
function loadElements(){
	if(!bbcode){
		document.getElementById('btnSendPm').style.display='';
		
		jQuery('#content_pm').markItUp(mySettings);
		
		
		document.getElementById('content_pm').focus();
		setCaretTo(document.getElementById('content_pm'),0);
		
			
		document.getElementById('content_pm').style.color="#000000";			
		document.getElementById('content_pm').style.fontStyle="";
		//document.getElementById('content_pm').innerHTML="";
		if(jQuery('#content_pm').val() =='Click vào đây để nhắn tin cho người đăng ...  '){
			jQuery('#content_pm').val('');
		}
			
		bbcode = true;
	}
}

function isEmail(email) 
{
	AtPos = email.indexOf("@")
	StopPos = email.lastIndexOf(".")
	Message = ""
	
	if (email == "") {
		return false;
	}
	
	if (AtPos == -1 || StopPos == -1) {
		return false;
	}
	
	if (StopPos < AtPos) {
		return false;
	}
	
	if (StopPos - AtPos == 1) {
		return false;
	}
	
	return true;
}

function CheckAllCheckbox(f,checkboxname){
	var len=f.elements.length;
	for(var i=0;i<len;i++){
		if(f.elements[i].name==checkboxname){
			f.elements[i].checked=true;
		}
	}
	return;
}

function UnCheckAllCheckbox(f,checkboxname){
	var len=f.elements.length;
	for(var i=0;i<len;i++){
		if(f.elements[i].name==checkboxname){
			f.elements[i].checked=false;
		}
	}
	return;
}

function check_uncheck(){
	var f= document.frm_mess;
	if(f.checkall.checked){
		CheckAllCheckbox(f,'id[]');
	}else{
		UnCheckAllCheckbox(f,'id[]');
	}			
}

function delMessage(mt_id,del_all,type){
	if(mt_id == 0 && del_all){// xoa nhieu item
		var frm_name  	= document.frm_mess;
		var str_ids   	= "";
		var len			=frm_name.elements.length;
		
		for (var i = 0; i < len; i++){
			if (frm_name.elements[i].name == 'id[]' && frm_name.elements[i].type == "checkbox" && frm_name.elements[i].checked) {			
				str_ids += (str_ids?",":"")+frm_name.elements[i].value;
			}
		}
		
		if(str_ids!=""){
			if(confirm("Bạn có chắc chắn xóa các tin nhắn được chọn không?")){
				jQuery.ajax({
					'url': 'ajax.php',
					'data': {
						'request_type':'message', 
						'act':'delmess',
						'mt_ids': str_ids
						},
					'type': 'POST',
					'success': function(data){
						if(data=="success"){
							if(type=="inbox"){
								 inbox_reload_jcache = true;
								 showMesInbox();								 
							}
							else{
								outbox_reload_jcache = true;
								showMesOutbox();								
							}
						}
						else{
							alert("Không xóa được tin nhắn");
							return false;
						}
					}
				});	
			}
		}
		else{
			alert("Bạn chưa chọn tin nhắn nào!");	
		}
	}
	else if(mt_id){// xoa 1 item
		if(confirm("Bạn có muốn xóa tin nhắn này không?")){
			jQuery.ajax({
				'url': 'ajax.php',
				'data': {
					'request_type':'message', 
					'act':'delmess',
					'mt_id': mt_id
					},
				'type': 'POST',
				'success': function(data){
					if(data=="success"){
						if(type=="inbox"){
							 inbox_reload_jcache = true;
							 showMesInbox(true);
						}
						else{
							outbox_reload_jcache = true;
							showMesOutbox();
						}
					}
					else{
						alert("Không xóa được tin nhắn");
						return false;
					}
				}
			});			
		}
	}
	else{
		alert("Bạn chưa chọn tin nhắn nào!");
	}
	
	return false;
}

function mesForwardReply(mt_id,type){
	tabResetClassMes(3);
				
	mesCompose();
	jQuery.post("ajax.php?act=message&act="+type+"&mt_id="+mt_id,
		{mt_id : mt_id},
		function(json){	
			if(json['sender_id']){
				jQuery("#mt_id").val(0);
				jQuery("#user_email").attr("disabled","").val(json['receiver']);
			}
			else{
				jQuery("#mt_id").val(json['mt_id']);
				jQuery("#user_email").attr("disabled","disabled").val(json['name_sender']);
			}
			
			//jQuery("#title_pm").val(json['title']);
			
			//if(type == 'rpMess'){
				//jQuery("#content_pm").val('').focus();
			//}
			//else{
				jQuery("#content_pm").val('\n\n'+json['content']).focus();
			//}
		}
		,"json"
	);
}

function tabResetClassMes(tab){
	document.getElementById('tab_1').className = 'unactive';
	document.getElementById('tab_2').className = 'unactive';
	document.getElementById('tab_3').className = 'unactive';
	if (tab) document.getElementById('tab_' + tab).className = "active";
}

function backMesDetail(type){
	if(type=='inbox'){
		showMesInbox();
	}
	else{
		showMesOutbox();
	}
}

function mesCompose(){
	document.getElementById('mes_detail').style.display = 'none';
	document.getElementById('mess_content').style.display = 'none';
	document.getElementById('mess_success').style.display = 'none';
	document.getElementById('compose_mess').style.display = '';
}

function showMesInbox(){
	if(document.getElementById('compose_mess')){
		document.getElementById('compose_mess').style.display = 'none';
	}
	
	document.getElementById('mes_detail').style.display = 'none';	
	document.getElementById('mess_content').style.display = '';	
	jQuery.jCache.maxSize = 10;
	var cache_key = "ajax.php?act=message&act=showMesInbox";
	if (jQuery.jCache.hasItem(cache_key) && !inbox_reload_jcache){
		document.getElementById('mess_content').innerHTML = jQuery.jCache.getItem(cache_key);
	}
	else{
		document.getElementById('mess_content').innerHTML = '<div align="center" style="padding:10px"><span class="textMes"><img src="style/images/loading.gif" align="absmiddle"> Đang tải dữ liệu ...</span></div>';
		jQuery.get(cache_key, function(data){
			document.getElementById('mess_content').innerHTML = data;
			jQuery.jCache.setItem(cache_key, data);
		});
	}
	
	inbox_reload_jcache = false;
}

function showMesOutbox(){	
	document.getElementById('mes_detail').style.display = 'none';
	document.getElementById('compose_mess').style.display = 'none';
	document.getElementById('mess_content').style.display = '';	
	jQuery.jCache.maxSize = 10;
	var cache_key = "ajax.php?act=message&act=showMesOutbox";
	if (jQuery.jCache.hasItem(cache_key) && !outbox_reload_jcache){
		document.getElementById('mess_content').innerHTML = jQuery.jCache.getItem(cache_key);
	}
	else{

		document.getElementById('mess_content').innerHTML = '<div align="center" style="padding:10px"><span class="textMes"><img src="style/images/loading.gif" align="absmiddle"> Đang tải dữ liệu ...</span></div>';
		jQuery.get(cache_key, function(data){
			document.getElementById('mess_content').innerHTML = data;
			jQuery.jCache.setItem(cache_key, data);
		});
	}
	
	outbox_reload_jcache = false;
	
}

function showMesDetail(mes_id){	
	document.getElementById('compose_mess').style.display = 'none';
	jQuery.jCache.maxSize = 10;
	var cache_key = "ajax.php?act=message&act=showDetail&mt_id="+mes_id;
	var divid = "#mes_detail";
	document.getElementById('mes_detail').style.display = '';
	if (jQuery.jCache.hasItem(cache_key)){
		jQuery(divid).html(jQuery.jCache.getItem(cache_key));
		document.getElementById('mess_content').style.display = 'none';
	}
	else{
		document.getElementById('mess_content').innerHTML = '<div align="center" style="padding:10px"><span class="textMes"><img src="style/images/loading.gif" align="absmiddle"> Đang tải dữ liệu ...</span></div>';
		jQuery.get(cache_key, function(data){
			jQuery(divid).html(data);
			jQuery.jCache.setItem(cache_key, data);
			document.getElementById('mess_content').style.display = 'none';
		});
	}
}

function trim(str) {
    return str.replace(/(^[\s\xA0]+|[\s\xA0]+$)/g, '');
}