/*function trim(str) {
    return str.replace(/(^[\s\xA0]+|[\s\xA0]+$)/g, '');
}*/
function trim(str){
	if(!str || typeof str != 'string')
		return null;
	str = Loaidaucach(str);
	return str.replace(/^[\s]+/,'').replace(/[\s]+$/,'').replace(/[\s]{2,}/,'');
}

function Loaidaucach(ElementId){
	var strDes = ElementId;
	var strTag = strDes;

	var i=0;
	while (i<strDes.length){
		if(strTag.charAt(i)==' ' && strTag.charAt(i+1)==' ' && strTag.charAt(i+2)==' '){
			str1 = strTag.substring(0,i);
			str2 = strTag.substring(i+2,strTag.length);
			strTag = str1 + str2;
			//alert(strTag+'\n gia tri cua bien i:'+i);
			i = i;
		//	alert('gia tri xau Tag:'+strTag+'\ngia tri xau Des:'+strDes);
		}
		if(strTag.charAt(i)==' ' && strTag.charAt(i+1)==' '){
			str1 = strTag.substring(0,i);
			str2 = strTag.substring(i+1,strTag.length);
			strTag = str1 + str2;
			//alert(strTag+'\n gia tri cua bien i:'+i);
			i = i;
		//	alert('gia tri xau Tag:'+strTag+'\ngia tri xau Des:'+strDes);
		}
		else{i=i+1;}
		return strTag;
	}
}

function promt_error(msg){
	if(!msg){
		msg = 'Có lỗi xảy ra';
	}
	jQuery.prompt(
		'<span style="color:#DF0023">'+ msg +'</span>',
		{
			prefix:'cleanblue',
			opacity: 0.3,
			top: '35%',	
			overlayspeed: 'fast'								
		}
	); 
}

function AddBookmark(ad_id){
	jQuery.get('ajax.php?act=item&code=bookmark',
			   {ad_id:ad_id}, 
				function(data){
					if(data == 'saved'){
						document.getElementById('Bookmark').style.display='none';
						alert('Tin đã được lưu!\nVui lòng vào menu Quản lý tin đăng -> Tin đã lưu.');
					}
					else if(data == 'exist'){ 
						alert('Bạn đã lưu tin này rồi!\nVui lòng vào menu Quản lý tin đăng -> Tin đã lưu.');
					}
					else{
						alert('Có lỗi xảy ra');
					}
				}
	);
}

//tuannk add on 2008/02/19
function displayDiv(obj){
	if(obj && typeof(obj.style) !='undefined' && obj.style.display=='none')
		obj.style.display='';
}

function hideDiv(obj){
	if(obj && typeof(obj.style) !='undefined' &&  obj.style.display=='')
	obj.style.display='none';
}

function displayID(objId){
	if(document.getElementById(objId))
	displayDiv(document.getElementById(objId));
}

function hideID(objId){
	if(document.getElementById(objId))
	hideDiv(document.getElementById(objId));
}


//added by Nova
//29.07.08
function showhideDiv(objId){
	var obj = document.getElementById(objId);
	if(obj){
		if(obj.style.display=='')
		obj.style.display='none';
		else
		obj.style.display='';
	}
}

function EditAdTags(){
	//tinyMCE.triggerSave();
	var adTags = document.getElementById('ad_tags_value').value;
	document.getElementById('btnEditTags').disabled = true;
	document.getElementById('loadingTagsDiv').style.display='';
	
	jQuery.ajax({'url': 'ajax.php?act=item&code=update_tags',
					'data': {'ad_id':ad_id,'ad_tags':adTags},
					'type': 'POST',
					'success': function(data){
						if(trim(data)){				
							document.getElementById('ad_tags_contents').innerHTML = trim(data);
							document.getElementById('btnEditTags').disabled = false;
							document.getElementById('loadingTagsDiv').style.display = 'none';
							
							showhideDiv('ad_tags_list');showhideDiv('ad_tags_list_editable');
						}
						else{
							document.getElementById('ad_tags_contents').innerHTML = '';
							document.getElementById('btnEditTags').disabled = false;
							document.getElementById('loadingTagsDiv').style.display = 'none';
							showhideDiv('ad_tags_list');showhideDiv('ad_tags_list_editable');
						}
						}
				});
}

function countUpChar(str){
	str = trim(str);
	
	var strNotAllow = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÀÃẠÂẤẦẪẬĂẮẰẴẶÉÈẼẸÊẾỀỄỆÍÌĨỊÓÒÕỌÔỐỒỖỘƠỚỜỠỢÚÙŨỤƯỨỪỮỰÝỲỸỴ";
	var aLen = str.length;
	var intCount = 0;
	for(i=0;i<aLen;i++) 
	{
		strC = str.charAt(i);
		if (strNotAllow.indexOf(strC)!=-1)
			intCount++;
	}
	if(intCount>Math.floor(aLen/3)) {
		alert("Bạn nhập tiêu đề quá nhiều chữ HOA cho phép!");
		return false;
	}
	return true;
}

function EditAdTitle(){
	var adTitle	= jQuery('#ad_title_value').val();
	
	if(trim(adTitle)==''){
		document.getElementById('warnningAd').innerHTML ='<div class="red" style="padding-left: 30px; text-align: left;"><ul><li>Bạn chưa nhập vào tiêu đề tin!</li></ul></div>';
		jQuery('#ad_title_value').focus();
		return false;
	}
	
	if (!countUpChar(trim( adTitle ))) 
	{
		jQuery('#ad_title_value').focus();
		return false;
	}
		
	document.getElementById('btnEditTitle').disabled=true;
	document.getElementById('loadingTitleDiv').style.display='';
	
	jQuery.ajax({
		type: "POST",
		url: "ajax.php?act=item&code=editAdTitle&ad_id=" + ad_id ,
		data: {ad_title_value: adTitle},
		success: function(data){
			if(trim(data) == 'ok')
			{
				//do something when actions finished
				document.getElementById('loadingTitleDiv').innerHTML ='';	
				
				document.getElementById('ad_title').innerHTML = adTitle;
				document.getElementById('btnEditTitle').disabled=false;
				document.getElementById('loadingTitleDiv').style.display='none';
				
				hideID('ad_title_edit');
				displayID('ad_title');
			}
			else if(trim(data) == 'validate')
			{
				document.getElementById('warnningAd').innerHTML ='<div class="red" style="padding-left: 30px; text-align: left;"><ul><li>Tin chứa nội dung nhạy cảm, tin sẽ được kiểm duyệt lại sau!</li></ul></div>';
				document.getElementById('ad_title').innerHTML = adTitle;
				document.getElementById('btnEditTitle').disabled=false;
				document.getElementById('loadingTitleDiv').style.display='none';
				
				hideID('ad_title_edit');
				displayID('ad_title');
			}
		}
	});
}

function cancelEditTitle()
{
	displayID('ad_title'); 
	hideID('ad_title_edit'); 
	document.getElementById('ad_title_value').value=document.getElementById('ad_title').innerHTML;
	document.getElementById('btnEditTitle').disabled=false;
	document.getElementById('loadingTitleDiv').style.display='none';
}
//tuannk add on 2008/02/19

function post_complant(){	
	jQuery.blockUI({message: '<div style="width:400px;border:none; background-color:#fff; padding:0;" align="left"><div style=" height:27px; background-color:#427bd6" align="left"><div style="line-height:26px;color: #fff; padding-left:10px;float:left;width:350px">Lý do than phiền</div><div class="close_blockui" onmouseover="this.className=\'close_blockui_hover\'" onmouseout="this.className=\'close_blockui\'" style="float:right"><img src="'+base_url+'/style/images/spacer.gif" width="15" height="14" id="close_box" title="Close..." style="cursor:pointer" /></div></div><div style=" background:url(style/images/bg_log_faile.gif) repeat-x bottom;"><div style="font-weight:normal; margin-left:10px;" id="bound_data"><br /><label><input type="checkbox" name="val_0" id="val_0" value="Tin sai chuyên mục"/><span style="margin-left:3px;cursor:pointer">Tin sai chuyên mục</span></label><br /><label><input type="checkbox" name="val_1" id="val_1" value="Không có địa chỉ, số tel của người bán"/><span style="margin-left:3px;cursor:pointer">Không có địa chỉ, số tel của người bán</span></label><br /><label><input type="checkbox" name="val_2" id="val_2" value="Không có thông tin về sản phẩm bán"/><span style="margin-left:3px;cursor:pointer">Không có thông tin về sản phẩm bán</span></label><br /><label><input type="checkbox" name="val_3" id="val_3" value="Tiêu đề tin không dấu/ có ký tự lạ"/><span style="margin-left:3px;cursor:pointer">Tiêu đề tin không dấu/ có ký tự lạ</span></label><br /><label><input type="checkbox" name="val_4" id="val_4" value="Spam/ Làm mới tin/ Đăng tin quá quy định"/><span style="margin-left:3px;cursor:pointer">Spam/ Làm mới tin/ Đăng tin quá quy định</span></label><br /><label><input type="checkbox" name="val_5" id="val_5" value="Lập nhiều nick bán hàng"/><span style="margin-left:3px;cursor:pointer">Lập nhiều nick bán hàng</span></label><br />  <br /><b>Lý do khác:</b></div><textarea name="other_complaint" id="other_complaint" rows="2" class="textAreaBlockUI" style="margin-left:10px"></textarea><div style=" margin-top:-5px; padding-bottom:5px;" align="center"> <input value="Gửi lý do"  id="send_reason" type="button" class="button_blockui" /></div></div></div>',css: { border:'none', padding:0}});		
	setTimeout(function(){jQuery("#other_complaint").focus();}, 500);
	jQuery('#close_reason').click(function () { 
		jQuery.unblockUI();
	});
	
	jQuery('#close_box').click(function () {
		jQuery.unblockUI();
	});
	
	jQuery('#send_reason').click(function () {										   	
		
		
			var reason_send = '';
			
			if(getValueId('val_0','checked')){
				reason_send += getValueId('val_0');
				if(getValueId('val_1','checked') || getValueId('val_2','checked') || getValueId('val_3','checked') || getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if(getValueId('val_1','checked')){
				reason_send += getValueId('val_1');
				if(getValueId('val_2','checked') || getValueId('val_3','checked') || getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if(getValueId('val_2','checked')){
				reason_send += getValueId('val_2');
				if (getValueId('val_3','checked') || getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('val_3','checked')){
				reason_send += getValueId('val_3');
				if (getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('val_4','checked')){
				reason_send += getValueId('val_4');
				if (getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('val_5','checked')){
				reason_send += getValueId('val_5');
				if (getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('other_complaint') != ""){
				reason_send += getValueId('other_complaint');
			}
			
			if(reason_send!=""){			
				jQuery.ajax({
				type: "POST",
				url: "ajax.php?act=item&code=complaint",
				data: "ad_id="+ad_id+"&message="+reason_send+"&ad_userid="+ad_userid+"&ad_catid="+ad_catid,
				success: function(msg) {		
						if(msg == 'not_login'){
							 alert("Bạn phải đăng nhập mới thực hiện được chức năng này.");
							 return false;
						}					
						else if(msg == 'success'){
							document.getElementById('show_add_complaint').style.display='none';
							jQuery.unblockUI();
							return ;
						}
						else{						
							alert("Không thực hiện được than phiền.");
							 return false;							
						}						
					}
				});
			}
			else{
				alert("Lý do than phiền không được để trống");
				return false;			
			}
	}); 
	jQuery('#overlay').click(function () { 
	  jQuery.unblockUI();
	});		
}

function show_pm(){
	jQuery("#bound_box_message").toggle();	
}

function valid_item(type){
	
	if(type=='invalid'){
		
		var reason_send = '';
		
		jQuery.blockUI({message: '<div style="width:400px;border:none; background-color:#fff; padding:0;" align="left"><div style=" height:26px; background-color:#00A8EB" align="left"><div style="line-height:26px;color: #fff; padding-left:10px;float:left;width:350px">Lý do kiểm duyệt</div><div class="close_blockui" onmouseover="this.className=\'close_blockui_hover\'" onmouseout="this.className=\'close_blockui\'" style="float:right"><img src="'+base_url+'/style/images/spacer.gif" width="15" height="14" id="close_box" title="Close..." style="cursor:pointer" /></div></div><div style=" background:url(style/images/bg_log_faile.gif) repeat-x bottom;"><div style="font-weight:normal; margin-left:10px;" id="bound_data"><br /><label><input type="checkbox" name="val_0" id="val_0" value="Tin sai chuyên mục"/><span style="margin-left:3px;cursor:pointer">Tin sai chuyên mục</span></label><br /><label><input type="checkbox" name="val_1" id="val_1" value="Không có địa chỉ, số tel của người bán"/><span style="margin-left:3px;cursor:pointer">Không có địa chỉ, số tel của người bán</span></label><br /><label><input type="checkbox" name="val_2" id="val_2" value="Không có thông tin về sản phẩm bán"/><span style="margin-left:3px;cursor:pointer">Không có thông tin về sản phẩm bán</span></label><br /><label><input type="checkbox" name="val_3" id="val_3" value="Tiêu đề tin không dấu/ có ký tự lạ"/><span style="margin-left:3px;cursor:pointer">Tiêu đề tin không dấu/ có ký tự lạ</span></label><br /><label><input type="checkbox" name="val_4" id="val_4" value="Spam/ Làm mới tin/ Đăng tin quá quy định"/><span style="margin-left:3px;cursor:pointer">Spam/ Làm mới tin/ Đăng tin quá quy định</span></label><br /><label><input type="checkbox" name="val_5" id="val_5" value="Lập nhiều nick bán hàng"/><span style="margin-left:3px;cursor:pointer">Lập nhiều nick bán hàng</span></label><br />  <br /><b>Lý do khác:</b></div><textarea name="other_complaint" id="other_complaint" rows="2" class="textAreaBlockUI" style="margin-left:10px"></textarea><div style=" margin-top:-5px; padding-bottom:5px;" align="center"><input value="Gửi lý do"  id="send_reason" type="button" class="button_blockui" /></div></div></div>',css: { border:'none', padding:0}});
		
	setTimeout(function(){jQuery("#other_complaint").focus();}, 500);		
	
	jQuery('#close_reason').click(function () { 
		jQuery.unblockUI();
	});
	
	jQuery('#close_box').click(function () {
		jQuery.unblockUI();
	});
			
	jQuery('#send_reason').click(function () {										   								
			
			if(getValueId('val_0','checked')){
				reason_send += getValueId('val_0');
				if(getValueId('val_1','checked') || getValueId('val_2','checked') || getValueId('val_3','checked') || getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('val_6','checked') || getValueId('val_7','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if(getValueId('val_1','checked')){
				reason_send += getValueId('val_1');
				if(getValueId('val_2','checked') || getValueId('val_3','checked') || getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if(getValueId('val_2','checked')){
				reason_send += getValueId('val_2');
				if (getValueId('val_3','checked') || getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('val_3','checked')){
				reason_send += getValueId('val_3');
				if (getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('val_4','checked')){
				reason_send += getValueId('val_4');
				if (getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('val_5','checked')){
				reason_send += getValueId('val_5');
				if (getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			if (getValueId('val_6','checked')){
				reason_send += getValueId('val_6');
				if (getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			if (getValueId('val_7','checked')){
				reason_send += getValueId('val_7');
				if (getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('other_complaint') != ""){
				reason_send += getValueId('other_complaint');
			}
									
			if(reason_send!=""){			
								
				jQuery.ajax({
				type: "POST",
				url: path + "ajax.php?act=item&act=valid_item",		
				data: "ad_id="+ad_id+"&type="+type+"&message="+reason_send,
				success: function(msg) {		
						if(msg == 'not_login'){
							 alert("Bạn phải đăng nhập mới thực hiện được chức năng này.");
							 return false;
						}
						else if(msg=='not_perm'){
							alert("Bạn không có quyền thực hiện chức năng này");
							 return false;
						}
						else if(msg == 'success'){
							if(type=='valid'){
								document.getElementById('valid_item').innerHTML = '<a id="valid_item" href="javascript:void(0)" class="DelAd" onclick="valid_item(\'invalid\')">Kiểm duyệt</a>';
								document.getElementById('warnningAd').innerHTML='';
								jQuery.unblockUI();
							}
							else{
								document.getElementById('valid_item').innerHTML = '<a id="valid_item" href="javascript:void(0)" class="DelAd" onclick="valid_item(\'valid\')">Duyệt tin</a>';						
								document.getElementById('warnningAd').innerHTML='<div class="red" style="padding-left: 30px; text-align: left;"><ul><li>Tin đang chờ duyệt</li></ul></div>';
								jQuery.unblockUI();
							}
							return ;
						}
						else{						
							alert("Không thực hiện được kiểm duyệt.");
							 return false;							
						}						
					}
				});									
		
	}
	else{
		alert("Lý do than phiền không được để trống");
		return false;			
	}
			
			
	}); 			
	
	jQuery('#overlay').click(function () { 
	  jQuery.unblockUI();
	});	
	
	
	}	//end neu la kiem duyet
	else if(type=='valid'){
		jQuery.ajax({
		type: "POST",
		url: path + "ajax.php?act=item&act=valid_item",		
		data: "ad_id="+ad_id+"&type="+type,
		success: function(msg) {		
				if(msg == 'not_login'){
					 alert("Bạn phải đăng nhập mới thực hiện được chức năng này.");
					 return false;
				}
				else if(msg=='not_perm'){
					alert("Bạn không có quyền thực hiện chức năng này");
					 return false;
				}
				else if(msg == 'success'){
					if(type=='valid'){
						document.getElementById('valid_item').innerHTML = '<a id="valid_item" href="javascript:void(0)" class="DelAd" onclick="valid_item(\'invalid\')">Kiểm duyệt</a>';
						document.getElementById('warnningAd').innerHTML='';						
					}
					else{
						document.getElementById('valid_item').innerHTML = '<a id="valid_item" href="javascript:void(0)" class="DelAd" onclick="valid_item(\'valid\')">Duyệt tin</a>';						
						document.getElementById('warnningAd').innerHTML='<div class="red" style="padding-left: 30px; text-align: left;"><ul><li>Tin đang chờ duyệt</li></ul></div>';						
					}
					return ;
				}
				else{						
					alert("Không thực hiện được kiểm duyệt.");
					 return false;							
				}						
			}
		});	
	}
}


function up_item_detail(id_item, upcatid)
{
	if(!IS_LOGIN){
		login_error();
		return false;
	}
	else if(IS_BLOCK){
		log_faile('Bạn không có quyền thực hiện chức năng này.');
		return false;
	}
	
	var up_tk = up_free_day ? 0 : 1;
	
	if(up_tk && acc_up_number <= 0)
	{
		log_faile ('Bạn đã hết lượt up ' + up_time_type + ' cho tin và hết lượt up trong tài khoản.');
		return false;
	}

	jQuery.ajax({url:"ajax.php?act=item&code=up_item",
				type: "POST",
				data: {item_id:id_item, up:up_tk},
				dataType: 'json',
				success: function(json){
					
					up_msg_text = '';
					
					if(json.msg=='not_login')
					{
						login_error('Bạn phải đăng nhập mới được thực hiện chức năng này.');
						return false;
					}
					else if(json.msg=='no_perm'){
						log_faile ('Bạn không được sử dụng chức năng này.');
					}
					else if(json.msg=='lock_topic'){
						log_faile ('Topic này đã bị khóa hoặc kiểm duyệt. Bạn không thể làm mới tin!');
					}
					else if(json.msg=='limit_action')
					{
						log_faile ('Tài khoản của bạn đã hết quyền thao tác với tin rao trong ngày.');
					}
					else if(json.msg == 'time_out' || json.msg == 'time_out1' || json.msg == 'time_out2'){
						var str_time = 'Trong ngày';
						
						if(json.msg == 'time_out1')
						{
							str_time = 'Buổi sáng';
						}
						else if(json.msg == 'time_out2')
						{
							str_time = 'Buổi chiều';
						}
						 
						up_time_type = str_time;
						up_msg_text  = "-Hết lượt up " + str_time + "<br />- Còn "+number_format(acc_up_number)+" lượt up trong tài khoản!";
						
						log_faile ('Giao dịch đã hết lượt up tin trong ngày.');
					}
					else if(json.msg == 'up_over')//hết lượt up
					{
						acc_up_number = 0;
						
						up_msg_text = "- Hết lượt up " + up_time_type + "<br />- Còn "+number_format(acc_up_number)+" lượt up trong tài khoản!";
						
						log_success ('Bạn đã hết lượt up trong tài khoản.');
					}
					else
					{
						if(json.msg == 'up-0')//up free cho admin
						{
							//...
						}
						else
						{
							if(json.msg == 'up-1')
							{
								acc_up_number--;
							}
							
							up_msg_text = "- Hết lượt up " + up_time_type + "<br />- Còn "+number_format(acc_up_number)+" lượt up trong tài khoản!";
							if(json.msg == 'fail')//Up không thành công
							{
								log_faile('Thực hiện không thành công, mời bạn thử lại.');
								return false;
							}
						}
						
						log_success ('Tin đã được làm mới.');
					}
					
					up_free_day = 0;
					
					if(up_msg_text != '')
					jQuery('#up_msg').html(up_msg_text);
				}
	});
}

function confirm_del(ad_id){
	jQuery.blockUI({message: '<div style="width:400px;border:none; background-color:#fff; padding:0;" align="left"><div style=" height:26px; background-color:#00A8EB" align="left"><div style="line-height:26px;color: #fff; padding-left:10px;float:left;width:350px">Lý do xoá</div><div class="close_blockui" onmouseover="this.className=\'close_blockui_hover\'" onmouseout="this.className=\'close_blockui\'" style="float:right"><img src="'+base_url+'/style/images/spacer.gif" width="15" height="14" id="close_box" title="Close..." style="cursor:pointer" /></div></div><div style=" background:url(style/images/bg_log_faile.gif) repeat-x bottom;"><div style="font-weight:normal; margin-left:10px;" id="bound_data"><br /><label><input type="checkbox" name="val_0" id="val_0" value="Tin sai chuyên mục"/><span style="margin-left:3px;cursor:pointer">Tin sai chuyên mục</span></label><br /><label><input type="checkbox" name="val_1" id="val_1" value="Không có địa chỉ, số tel của người bán"/><span style="margin-left:3px;cursor:pointer">Không có địa chỉ, số tel của người bán</span></label><br /><label><input type="checkbox" name="val_2" id="val_2" value="Không có thông tin về sản phẩm bán"/><span style="margin-left:3px;cursor:pointer">Không có thông tin về sản phẩm bán</span></label><br /><label><input type="checkbox" name="val_3" id="val_3" value="Tiêu đề tin không dấu/ có ký tự lạ"/><span style="margin-left:3px;cursor:pointer">Tiêu đề tin không dấu/ có ký tự lạ</span></label><br /><label><input type="checkbox" name="val_4" id="val_4" value="Spam/ Làm mới tin/ Đăng tin quá quy định"/><span style="margin-left:3px;cursor:pointer">Spam/ Làm mới tin/ Đăng tin quá quy định</span></label><br /><label><input type="checkbox" name="val_5" id="val_5" value="Lập nhiều nick bán hàng"/><span style="margin-left:3px;cursor:pointer">Lập nhiều nick bán hàng</span></label><br /><label><input type="checkbox" name="val_6" id="val_6" value="Sai quy định đăng tin"/><span style="margin-left:3px;cursor:pointer">Sai quy định đăng tin</span></label><br /><label><input type="checkbox" name="val_7" id="val_7" value="Nghi ngờ lừa đảo"/><span style="margin-left:3px;cursor:pointer">Nghi ngờ lừa đảo</span></label><br />  <br /><b>Lý do khác:</b></div><textarea name="other_complaint" id="other_complaint" rows="2" class="textAreaBlockUI" style="margin-left:10px"></textarea><div style=" margin-top:-5px; padding-bottom:5px;" align="center"><input value="Gửi lý do"  id="send_reason" type="button" class="button_blockui" /></div></div></div>',css: { border:'none', padding:0}});		
	setTimeout(function(){jQuery("#other_complaint").focus();}, 500);
	jQuery('#close_reason').click(function () { 
		jQuery.unblockUI();
	});
	
	jQuery('#close_box').click(function () {
		jQuery.unblockUI();
	});

	jQuery('#send_reason').click(function () {										   	
				
			var reason_send = '';
			
			if(getValueId('val_0','checked')){
				reason_send += getValueId('val_0');
				if(getValueId('val_1','checked') || getValueId('val_2','checked') || getValueId('val_3','checked') || getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('val_6','checked') || getValueId('val_7','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if(getValueId('val_1','checked')){
				reason_send += getValueId('val_1');
				if(getValueId('val_2','checked') || getValueId('val_3','checked') || getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if(getValueId('val_2','checked')){
				reason_send += getValueId('val_2');
				if (getValueId('val_3','checked') || getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('val_3','checked')){
				reason_send += getValueId('val_3');
				if (getValueId('val_4','checked') || getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('val_4','checked')){
				reason_send += getValueId('val_4');
				if (getValueId('val_5','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('val_5','checked')){
				reason_send += getValueId('val_5');
				if (getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			if (getValueId('val_6','checked')){
				reason_send += getValueId('val_6');
				if (getValueId('val_6','checked') || getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('val_7','checked')){
				reason_send += getValueId('val_7');
				if (getValueId('content_rs_mini') != ""){
					reason_send +='; ';
				}
			}
			
			if (getValueId('other_complaint') != ""){
				reason_send += getValueId('other_complaint');
			}
			
			if(reason_send!=""){			
				jQuery.ajax({
				type: "POST",
				url: "ajax.php?act=item&code=del_item",
				data: "ad_id="+ad_id+"&reason_del="+reason_send,
				success: function(msg) {		
						if(msg == 'not_perm'){
							 alert("Bạn không có quyền thực hiện chức năng này.");
							 return false;
						}					
						else if(msg == 'unsuccess'){
							alert("Không thực hiện được than phiền.");
							return false;							
						}
						else{						
							//location.reload();
							window.location = msg;
							return ;
						}						
					}
				});
			}
			else{
				alert("Lý do xóa không được để trống");
				return false;			
			}
	}); 
	jQuery('#overlay').click(function () { 
	  jQuery.unblockUI();
	});			
}

var page_log = 1;
var up_log_show = 0;

function show_log_up_ad(item_id){	
	if(up_log_show==0){
		jQuery.post("ajax.php?act=item&code=show_log_up_ad", {
			item_id: item_id
			},			
			function(msg){
				if(msg == 'no_log'){
					alert("Chưa có lịch sử up tin cho tin này!");
					return false;
				}
				else{
					page_log 	= 1;
					up_log_show = 1;
					jQuery("#show_log").html(msg).css({display:"inline"});
				}
			}
		);
	}
	else if(up_log_show==1){
		up_log_show = 2;
		jQuery("#show_log").hide();
	}
	else{
		up_log_show = 1;
		jQuery("#show_log").show();
	}
}

function show_log_up_more(item_id){
	page_log++;
	
	jQuery.post("ajax.php?act=item&code=show_log_up_ad", {
		item_id: item_id,page_no: page_log
		},			
		function(msg){
			if(msg == 'no_log'){
				alert("Chưa có thêm lịch sử up tin cho tin này!");
				page_log--;
				jQuery("#btn_log_more").hide();
				return false;
			}
			else{
				jQuery("#show_log_more").append(msg).css({display:"inline"});
			}
		}
	);
}

var load_jcache_edit_des = false;
function fn_click_edit_desc_click(ad_id){
	
	if(document.getElementById('NewsImg')){
		document.getElementById('NewsImg').style.display = 'none';
	}
	jQuery.jCache.maxSize = 10;	
	document.getElementById('loadingEditContentDiv').style.display = '';
	var cache_key = "ajax.php?act=item&code=loadAdContent&ad_id="+ad_id;
	if (jQuery.jCache.hasItem(cache_key) && !load_jcache_edit_des){		
		tinyMCE.activeEditor.setContent(jQuery.jCache.getItem(cache_key));
	}
	else{				
		jQuery.get(cache_key, function(data){								   
			tinyMCE.activeEditor.setContent(data);
			load_jcache_edit_des = false;	
			jQuery.jCache.setItem(cache_key, data);		
		});		
	}	
	
	setTimeout(function(){
		document.getElementById('loadingEditContentDiv').style.display = 'none';
		document.getElementById('lbl_content_edit').style.display = 'none';
	}, 500);	
	document.getElementById('NewsContent').style.display = 'none';
	document.getElementById('NewsContent_edit').style.display = '';		
}

function fn_click_reset_desc(){
	document.getElementById('lbl_content_edit').style.display = '';
	document.getElementById('NewsContent').style.display = '';
	if(document.getElementById('NewsImg')){
		document.getElementById('NewsImg').style.display = '';
	}
	document.getElementById('NewsContent_edit').style.display = 'none';
	document.getElementById('loadingContentDiv').style.display = 'none';
	document.getElementById('loadingContentDiv').style.display = 'none';
	return;
}

function fn_click_submit_desc(ad_id){
	if(document.getElementById('NewsImg')){
		document.getElementById('NewsImg').style.display = '';
	}
	
	tinyMCE.triggerSave();
	var desc = tinyMCE.get('ad_content_value').getContent();
	
	if(desc == ''){	
		fn_click_reset_desc();
	}
	document.getElementById('loadingContentDiv').style.display = '';	
	jQuery.ajax({
		type: "POST",
		url: "ajax.php?act=item&code=editAdContent&ad_id="+ad_id,
		data: {ad_content_value: desc},
		success: function(msg){
			fn_click_reset_desc();
			if(msg=="empty"){
				alert("nội dung không được để trống");
			}
			else if(msg == 'validate'){				
				alert("Tin đang chờ duyệt!");
				document.getElementById('NewsContent').innerHTML = desc;
			}
			else{ // is Okie
				document.getElementById('NewsContent').innerHTML = desc;
			}
		}
	});
	fn_click_reset_desc();
	load_jcache_edit_des = true;
}



var page_log_sms = 1;
var log_sms = 0;

function show_log_sms(item_id){	
	if(log_sms==0){
		jQuery.post("ajax.php?act=item&code=show_log_sms", {
			item_id: item_id
			},			
			function(msg){
				if(msg == 'no_log'){
					alert("Chưa có SMS cho tin này!");
					return false;
				}
				else{
					page_log_sms 	= 1;
					log_sms = 1;
					jQuery("#show_log_sms").html(msg).css({display:"inline"});
				}
			}
		);
	}	
	else if(log_sms==1){
		log_sms = 2;
		jQuery("#show_log_sms").hide();
	}
	else{
		log_sms = 1;
		jQuery("#show_log_sms").show();
	}	 
}

function show_log_sms_more(item_id){
	page_log_sms++;
	
	jQuery.post("ajax.php?act=item&act=show_log_sms", {
		item_id: item_id,page_no: page_log_sms
		},			
		function(msg){
			if(msg == 'no_log'){
				alert("Chưa có thêm SMS cho tin này!");
				page_log_sms--;
				jQuery("#btn_log_more").hide();
				return false;
			}
			else{
				jQuery("#show_log_more").append(msg).css({display:"inline"});
			}
		}
	);
}

function vip_check(flgVipTop, count_vip_top, item_id,title){
	var data = '';

	jQuery.post("ajax.php?act=item&code=vip_check", {
		item_id: item_id,
		count_vip_top: count_vip_top,
		flgVipTop: flgVipTop,
		title: title
		},			
		function(data){
			if(data == 'not_exit'){
				alert("Tin rao không tồn tại!");
				return false;
			}
			else
			if(data == 'no_perm'){
				alert("Bạn không được phép kiểm tra VIP đối với tin rao này!");
				return false;
			}
			else{
				//############################
				jQuery.blockUI({message: '\
				   <div style="width:630px;border:1px solid #ccc; background-color:#fff;padding:0;font-size:12px" align="left">\
                               	<div style="height:30px; background-color:#00A8EB;padding-top:5px" align="left">\
                                	<div style="line-height:26px;color:#fff; padding-left:10px;float:left;width:350px;font-weight:bold">Thông tin VỊ TRÍ TIN NỔI BẬT</div>\
                                    <div class="close_blockui" onmouseover="this.className=\'close_blockui_hover\'" onmouseout="this.className=\'close_blockui\'" style="float:right"><img src="'+base_url+'/style/images/spacer.gif" width="15" height="14" onclick="jQuery.unblockUI();" title="Close..." style="cursor:pointer" /></div>\
                                </div>\
									<div style="padding:10px 15px;font-weight:normal">\
								   		'+data+'\
								    </div>\
								    <div style="padding:10px 45px;font-weight:normal"><img src="'+base_url+'/style/images/usercp/demo-tinvip.jpg"/></div>\
                            </div>\
				   ',css: { border:'none', padding:0, margin: '0 0 0 -260px'}
				});
				
				jQuery('#overlay').click(function () { 
				  jQuery.unblockUI();
				});	
				//############################
			}
		}
	);
}

var itemId = 0;
var cateId = 0;
var pCateId = 0;
var subCateId = 0;
function addNextOtp(id, catId, pcate_id, sub_cate_id){
    itemId = id;//id của tin đăng
    cateId = catId;//id của category
    pCateId = pcate_id;
    subCateId = sub_cate_id;
    shop.show_overlay_popup('payment-add-item', 'Kích hoạt cho tin đăng hiển thị',
    template.choosePaymentTypes('payment-add-item', 'Kích hoạt cho tin đăng hiển thị'),
    {
        background: {
            'background-color' : 'transparent'
        },
        border: {
            'background-color' : 'transparent',
            'padding' : '0px'
        },
        title: {
            'display' : 'none'
        },
        content: {
            'padding' : '0px',
            'width' : '625px',
            'font-size': '12px'
        }
    });
    if(isIE6()==true){
        de_active_sel();
        jQuery('#huy_btn').click(function(){
            reset_control();
        });
        jQuery('a.classic-popup-close').click(function(){
            reset_control();
        });

    }//end if

	jQuery('.box-gradien').slideUp().addClass('hidden');
	jQuery("#pay_info_sms").css("display", "block");
}

function addItem()
{
	var otp_code = jQuery("#otp_code").attr("value");
    if(otp_code == "")
    {
        alert("Hãy nhập Mã kích hoạt");
        return
    }

    var data= "otp_code="+otp_code+"&item_id="+itemId+"&cateId="+cateId+'&pCateId='+pCateId+"&subCateId="+subCateId;
    var btoff = "<a href='javascript:void(0);' class='blueButton'><span><span style='color:#BBB'>ĐANG GỬI ...</span></span></a>";
    var bton = "<a onclick='return addItem();' style='cursor:pointer' class='blueButton'><span><span>KÍCH HOẠT</span></span></a>";
    jQuery("#add_item_finish").html(btoff);
    jQuery.ajax({
	    type: "POST",
	    url:"ajax.php?act=payment&code=activeItem",
	    data: data,
	    dataType: 'json',
	    success: function(json)
	    {
	    	jQuery("#add_item_finish").html(bton);
	    	
            if(json.strErrors == "")
            {
                alert("Kích hoạt hiển thị thành công");
                jQuery.unblockUI();
                location.reload();
            }
            else if(json.strErrors != "" && json.ad_is_validated){
                alert(json.strErrors);
                jQuery.unblockUI();
                //location.reload();
            }
            else
            {
                alert(json.strErrors);
				//location.reload();
            }
	    }
	});
	return false;
}


function requestSentOtp(){
	var resent_mobi = jQuery("#resent_mobi").attr("value");
	if(!resent_mobi)
	{
		alert("Hãy nhập số điện thoại");
		return
	}

	var data= "resent_mobi="+resent_mobi;

	jQuery.ajax({
	    type: "POST",
	    url:"ajax.php?act=payment&code=getOtpByTel",
	    data: data,
	    dataType: 'json',
	    success: function(json)
	    {
	    	if(json.errors == "")
	    	{
		    	jQuery('#otp_code').attr('value', json.otp);
		    	jQuery('.rule_sms').slideUp().addClass('hidden');
	    	}
	    	else
	    	{
	    		alert(json.errors);
	    	}
	    }
	});
	return false;
}


var template = {
    choosePaymentTypes : function(id, title){

    	var cardInfo = '';
		var strMobile = '';
		
		if(ad_mobile)
		{
			var strMobile = ' thuê bao số <span style="font-size:20px;color:red;font-weight:bold">'+ad_mobile+'</span> <span style="font-size:15px;color:green;font-weight:bold"> ( bắt buộc <a href=" http://blog.rongbay.com/2012/02/16/su-dung-so-dien-thoai-kich-hoat-tin-o-chuyen-muc-dien-thoai/" title="Tìm hiểu thêm" target="_blank"><img src="style/images/help_icon.gif"></a> )</span>';
		}
			
		for(i in pay_card_info)
		{
			cardInfo += ('<tr><td valign="top" align="center" class="item bRight">'+ number_format(i) +' VNĐ</td><td valign="top" align="left" class="item bRight">Tin này được đăng và <a href="http://blog.rongbay.com/2011/03/08/t%E1%BB%B1-d%E1%BB%99ng-dang-l%E1%BA%A1i-tin/" target="_blank">tự động đăng lại</a> <b>' +pay_card_info[i]+ ' lần</b></td></tr>');
		}

        frmPay = join
            ('<div id="atm_online" style="margin-left:15px;margin-top:-5px">')
            	('<div class="blockCheckOut" style="margin-right: 0pt;">')
            		('<div class="paymentSelect fixPng"></div>')
            		('<div class="checkOutBox">')
            			('<div class="paymentCheckOut floatLeft">')
            				('<div class="sendSms fixPng"></div>')
            			('</div>')
            			('<div class="paymentContent floatLeft" style="width:485px">')
            				('<div class="infoInputLeft" style="width:100%;color:#777;font-size:11px">Dùng điện thoại di động '+strMobile+' soạn tin:</div>')
            				('<div class="infoInputLeft" style="width:100%;font-size:14px;padding-top:5px;text-indent:40px;padding-bottom:3px"><b>RBO</b> <font style="font-size:12px;color:#777">gửi</font> <b>8701</b> (<b>15.000đ/tin</b>) <font style="font-size:12px;color:#777">để tin này được đăng và <a href="http://blog.rongbay.com/2011/03/08/t%E1%BB%B1-d%E1%BB%99ng-dang-l%E1%BA%A1i-tin/" target="_blank">tự động đăng lại</a> <b>15 lần</b></font></div>')
            				('<div class="infoInputLeft" style="width:100%;text-align:left;color:#ff0000"><b>Hoặc</b></div>')
                        	((pCateId == 85 || pCateId == 187)?'<div class="infoInputLeft" style="width:100%;font-size:14px;text-align:left;text-indent:40px;padding-top:8px;padding-bottom:5px"><b>RBO</b> <font style="font-size:12px;color:#777">gửi</font> <b>8501</b> (<b>5000đ/tin</b>) <font style="font-size:12px;color:#777">để tin này được đăng</font></div>':'<div class="infoInputLeft" style="width:100%;font-size:14px;text-align:left;text-indent:40px;padding-top:8px;padding-bottom:5px"><b>RBO</b> <font style="font-size:12px;color:#777">gửi</font> <b>8001</b> (<b>500đ/tin</b>) <font style="font-size:12px;color:#777">để tin này được đăng</font></div>')
                        	('<div id="pay_info_sms" style="display: none;">')
                            	('<div class="infoInputLeft" style="width:100%;padding-top:3px;color:#777;font-size:11px">')
                            		('- Mã kích hoạt sẽ được gửi vào điện thoại của Quý khách, Quý khách vui lòng nhập vào ô bên dưới để thực hiện kích hoạt cho tin.')
                                ('</div>')

                        		('<div class="infoInputLeft" style="width:100%;padding-top:3px;color:#777;font-size:11px">')
                            		('- Sau khi gửi tin nhắn nếu không nhận được mã kích hoạt do lỗi nhà mạng, Quý khách vui lòng chờ hệ thống xử lý.')
                                ('</div>')
                                ('<div class="infoInputLeft" style="width:100%;padding-top:3px;color:#777;font-size:11px">')
                                	('- Một mã kích hoạt chỉ được dùng cho 1 tin')
                                ('</div>')
                            	('<div style="float:left;padding-top:20px">')
                                    ('<div class="newLabel" style="float:left;font-size:12px">Mã kích hoạt:</div>')
                                    ('<div class="infoInputTxt" style="float:left;width:70px; margin-top:-5px;margin-left:10px">')
                                        ('<input type="text" name="otp_code" id="otp_code" class="txt" style="width:80%;font-size:14" onkeypress="return numberOnly(this,event);" maxlength="4"/>')
                                    ('</div>')
                                    ('<div style="margin-left:5px; margin-top:-7px" class="fl" id="add_item_finish">')
					                    ('<a class="blueButton" style="cursor:pointer" onclick="return addItem();"><span><span>KÍCH HOẠT</span></span></a>')
					                ('</div>')
                                ('</div>')

                                ('<div class="infoInputLeft" style="width:100%;padding-top:15px;color:#777;font-size:11px">')
						 			/*('- Nếu Quý khách đã gửi tin nhắn nhưng chưa nhận được mã kích hoạt thì click <a href="javascript:void(0)" onClick="shop.cart.viewMoreSmsInfo(this)"><b>Vào đây</b></a>')*/
								 	('<div class="rule_sms hidden" style="display:block">')
								 		('<div align="left" id="pay" style="display:inline ;width:100%">')
								 			('<div>')
												('<center style="width:460px;color:#000000;margin:5px auto 10px;padding:10px;background:#FFF9D7;border:1px solid #E2C822;font-size: 12px;">Nếu Quý khách đã gửi tin nhắn nhưng chưa nhận được mã kích hoạt, xin mời nhập số điện thoại vừa nhắn tin vào ô bên dưới, chọn <b>Gửi</b> đi. Hệ thống sẽ tự động gửi lại mã kích hoạt cho Quý khách.</center>')
												('<div class="mTop5" id="msg_cart"></div>')
											('</div>')

											('<div id="pTop10" class="newCustomerInfo mTop5">')
												('<div class="input fl" style="width:115px">Số điện thoại: </div>')
												('<div class="fl">')
													('<input type="text" id="resent_mobi" name="resent_mobi" style="width:210px" value="" onkeypress="return shop.numberOnly(this, event);"/>')
													('&nbsp;<a href="javascript:void(0)" onclick="requestSentOtp()" id="fr" class="blueButton"><img src="style/images/payment/request_otp.png" /></a>')
												('</div>')
												('<div class="c"></div>')
											('</div>')
										('</div>')
								 	('</div>')
								('</div>')

                            ('</div>')
            			('</div>')
            			('<div class="clear"></div>')
            		('</div>')
            	('</div>')
            ('</div>')
            ('<div style="clear:both;height:0;overflow:hidden"></div>')();

            return shop.popupSite(id, title, shop.join
			('<div class="content cartMoreAddress" style="padding:10px 15px">')
			('<form name="cartAddressForm" id="cartAddressForm">')
				(frmPay+'')
                    /*('<a class="blueButton" id="huy_btn" href="javascript:void(0)"  onclick="shop.hide_overlay_popup(\'payment-add-item\')"><span><span>HỦY BỎ</span></span></a>')
                    ('<div style="display:none;text-align:center;margin-top:9px;margin-left:175px" id="loading_pay" class="fl">')
						('<img src="style/images/uploading.gif" align="absmiddle"/> Đang xử lý... ')
					('</div>')
                ('</div>')
                ('<div style="margin-top:15px" class="fr" id="add_item_finish">')
                    ('<a class="blueButton" style="cursor:pointer" onclick="return addItem();"><span><span>KÍCH HOẠT</span></span></a>')
                ('</div>')
                ('<div class="c"></div>')*/
			('</form>')
		('</div>')());
    }

};
function del_ad(ad_id){
    //ngannv dev xóa tin 15.08.01
    //testing...k xóa
    var txt = '<span style="font-family:arial;">Bạn có chắc chắn muốn xóa không ?</span> <input type="hidden" id="ad_id" name="ad_id" value="'+ ad_id +'" />';
	jQuery.prompt(txt,{
		buttons:{'Xóa':true, Không:false},
		prefix:'cleanblue',
		opacity: 0.3,
		top: '35%',
		overlayspeed: 'fast',
		callback: function(v,m,f){
			if(v){
				var aid = f.ad_id;
				jQuery.get('usercp.php?act=ajax&code=delete_item',{ad_id:aid}, function(data){
					if(data == 'deleted'){
				        window.location='';
					}else{
						promt_error();
					}
				});
			}
		}
	});
}
function remove_ad_by_mod(ad_id){
	var txt = '<span style="font-family:arial;">Bạn có chắc chắn muốn xóa không ?</span> <input type="hidden" id="ad_id" name="ad_id" value="'+ ad_id +'" />';
	jQuery.prompt(txt,{
		buttons:{'Xóa':true, Không:false},
		prefix:'cleanblue',
		opacity: 0.3,
		top: '35%',
		overlayspeed: 'fast',
		callback: function(v,m,f){
			if(v){
				var aid = f.ad_id;
				jQuery.get('usercp.php?act=ajax&code=delete_item',{ad_id:aid}, function(data){
					if(data == 'deleted'){
                        alert("xóa")
				        //jQuery(this).remove();
					}else{
						promt_error();
					}
				});
			}
			else{}

		}
	});
}

var totalReasonCheat = 0;
function reportCheat()
{
	jQuery.unblockUI();
	
	var arraReason = Array(
						   "Tin đăng có dấu hiệu lừa đảo.",
						   "Sản phẩm này quá rẻ so với giá thị trường.",
						   "Không có thông tin sản phẩm cần bán.",
						   "Không có địa chỉ hoặc số ĐT liên hệ cụ thể.",
						   "Tin đăng chứa nội dung xấu.",
						   "Tin đăng spam."
						   );
	var strReason = "";
	var str_captcha = "";
	
	totalReasonCheat = arraReason.length;
	
	for(var i=0; i<arraReason.length; i++)
	{
		strReason += '<li><input type="checkbox" id="rp'+i+'" value="'+arraReason[i]+'" /> <label for="rp'+i+'"> '+arraReason[i]+'</label></li>';
	}
	
	if(!IS_LOGIN)
	{
		str_captcha = '<li><div style="margin-top:5px">Mã bảo mật: <input type="text" id="captcha" style="width:40px; height:20px"> <img id="captcha_img" alt="captcha" src="captcha.php" style="margin-right:5px; vertical-align:bottom" width="50" height="23"/><img id="reload_button" onclick="fn_reload_captcha()" src="style/images/indicator_arrows_static.gif" style="vertical-align:middle;cursor:pointer" title="Tạo mã khác" alt="Tạo mã khác" class="creatNewCaptchaButton"></div></li>';
	}
	
	if(current_user_email)
	{		
		var str_email = '<li><div>Email:<input disabled="disabled" type="text" id="email_contact" maxlength="100" style="width:300px; height:20px;margin-left:9px" value="'+current_user_email+'"></div></li>';
	}
	else
	{
		var str_email = '<li><div>Email:<input type="text" id="email_contact" maxlength="100" style="width:300px; height:20px;margin-left:9px"></div></li>';
	}
	
	if(current_user_mobile)
	{
		var str_mobile = '<li><div style=" margin-top:5px">Mobile:<input disabled="disabled" type="text" id="mobile_contact" maxlength="15" style="width:100px; height:20px; margin-left:5px" value="'+current_user_mobile+'"></div></li>';
	}
	else
	{
		var str_mobile = '<li><div style=" margin-top:5px">Mobile:<input type="text" id="mobile_contact" maxlength="15" style="width:100px; height:20px; margin-left:5px"></div></li>';
	}
	
	var popup_content = cart_join
								('<div id="cart-check-out-step1" style="margin:0 auto;width:565px;text-align:left">'				)
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
															('<div class="fl_eb">Thông báo tới Ban Quản Trị Rồng Bay</div>')
															('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" href="javascript:void(0)">x</a>')
															('<div class="c_eb"></div>')
														('</div>')
														('<div class="classic-popup-content_eb">')
															('<div class="content_eb" style="padding:5px 10px 10px 10px">')
																('<div id="cError"></div>\
																<div class="gold-content">\
																	<div class="gold-right" style="margin-bottom:0px"><div id="noteEmpty"></div><div class="gold-title" ><span style="font-size:15px; color:#0093D0;font-weight:bold; margin-left:18px">Bạn hãy cho chúng tôi biết lý do cảnh báo tin này!</span></div><ul style="margin:15px 0px 10px 0px">'+strReason+'<li><div style="margin:5px 0 5px 0">Lý do khác</div><div><textarea id="re_other" cols="89" rows="5" style="font-family:Arial;font-size:12px"></textarea></div></li><li><div style="margin:10px 0 10px"><b>Thông tin để BQT Rồng Bay liên hệ:</b></div></li>'+str_email+str_mobile+str_captcha+'</ul></div>\
																	<div class="c"></div>\
																</div>')
																('<div style="width:495px; margin-left:15px;">' +
                                                                    '<a class="blueButton_eb  mLeft10_eb" onclick="pay_cancel()"><span><span>HỦY</span></span></a><span style="margin-left:125px" id="rpLoading"></span>' +
                                                                    '<a id="fr" class="blueButton_eb  mLeft10_eb" onclick="doReportCheat()"><span><span>CHẤP NHẬN</span></span></a><div class="c"></div></div>')

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

function doReportCheat()
{				
	var str_checked = "";
	var charSplit = "_RBrpC_";
	
	for(var i=0; i<totalReasonCheat; i++)
	{		
		if(document.getElementById("rp"+i).checked == true)
		{			
			str_checked += (str_checked?charSplit:"")+document.getElementById("rp"+i).value;					
		}			
	}	
	
   var rpo = document.getElementById("re_other").value;
   var email = document.getElementById("email_contact").value;
   var mobile = document.getElementById("mobile_contact").value;
   
   if(!IS_LOGIN)
   {
	   var captcha = document.getElementById("captcha").value;
      
	   if(captcha=="")
	   {
		   jQuery("#noteEmpty").addClass("noteEmpty");
		   jQuery("#noteEmpty").html("<span style='color:red'>Bạn chưa nhập mã bảo mật!</span>");
		   return;
	   }
   }
   else captcha = "";
   
   if(email && !is_email(email))
   {
	   jQuery("#noteEmpty").addClass("noteEmpty");
	   jQuery("#noteEmpty").html("<span style='color:red'>Email bạn nhập không chính xác!</span>");
	   return;
   }
   
   if(rpo)
   {
   		str_checked += (str_checked?charSplit:"")+rpo;
   }
   
   if(str_checked=="")
   {
	  jQuery("#noteEmpty").addClass("noteEmpty");
	  jQuery("#noteEmpty").html("<span style='color:red'>Bạn hãy cho chúng tôi biết lý do cần cảnh báo tin này!</span>");
	  return;
   }
   else
   {
	   jQuery("#rpLoading").html("<img src=\"images/loading.gif\" /><span style=\"font-size:11px; margin-left:5px;\">Đang gửi thông tin...</span>");	   
	   jQuery.ajax({'url': 'ajax.php?act=item&code=report_cheat',
			'data': {'msg':str_checked,'ad_id':ad_id,'email':email,'mobile':mobile,'captcha':captcha},
			'type': 'POST',
			'success': function(data){
				jQuery("#rpLoading").html("");
				
				if(data=="error_captcha")
				{
					jQuery("#noteEmpty").addClass("noteEmpty");
	   				jQuery("#noteEmpty").html("<span style='color:red'>Lỗi nhập mã bảo mật. Hãy nhập lại!</span>");
				}
				else if(data=="data_empty")
				{
					jQuery("#noteEmpty").addClass("noteEmpty");
	   				jQuery("#noteEmpty").html("<span style='color:red'>Bạn hãy cho chúng tôi biết lý do cần cảnh báo tin này!</span>");
				}
				else if(data=="error_email")
				{
					jQuery("#noteEmpty").addClass("noteEmpty");
	   				 jQuery("#noteEmpty").html("<span style='color:red'>Email bạn nhập không chính xác!</span>");
				}
				else if(data == "success")
				{
					jQuery("#noteEmpty").addClass("noteEmpty");
					jQuery("#noteEmpty").html("<span style='color:green'>Cảm ơn bạn đã thông báo cho chúng tôi. Chúng tôi sẽ kiểm tra sau ít phút nữa.</span>");
					setTimeout("pay_cancel()",3000);
				}
				else
				{
					 jQuery("#noteEmpty").addClass("noteEmpty");
	   				 jQuery("#noteEmpty").html("<span style='color:red'>Bạn hãy cho chúng tôi biết lý do cần cảnh báo tin này!</span>");
				}
			}
		});
   }
    		
}

function formSendPMDetail(user_id, user_name)
{	
	jQuery.unblockUI();
		
	var str_captcha = "";
	var captcha = "";
	
	var is_login = 0;
			
	str_captcha = '<li><div style="margin-top:5px">Mã bảo mật: <input type="text" id="captcha" style="width:40px; height:20px"> <img id="captcha_img" alt="captcha" src="captcha.php" style="margin-right:5px; vertical-align:bottom" width="50" height="23"/><img id="reload_button" onclick="fn_reload_captcha()" src="style/images/indicator_arrows_static.gif" style="vertical-align:middle;cursor:pointer" title="Tạo mã khác" alt="Tạo mã khác" class="creatNewCaptchaButton"></div></li>';

	
	if(current_user_email)
	{		
		var str_email = '<li><div>Email:<input disabled="disabled" type="text" id="email" maxlength="100" style="width:300px; height:20px;margin-left:9px" value="'+current_user_email+'"></div></li>';
	}
	else
	{
		var str_email = '<li><div>Email:<input type="text" id="email" maxlength="100" style="width:300px; height:20px;margin-left:9px"></div></li>';
	}		
	
	var popup_content = cart_join
								('<div id="cart-check-out-step1" style="margin:0 auto;width:565px;text-align:left;">'				)
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
															('<div class="fl_eb"> Gửi tin nhắn / liên hệ tới '+user_name+" - ID: <a target='_blank' style='font-size:18px; color:#FFF;font-weight:normal' title='Tới trang cá nhân của thành viên "+user_name+"' href='member-"+user_id+".html'>"+user_id+'</a></div>')
															('<a onclick="pay_cancel();" title="Đóng" class="classic-popup-close_eb" href="javascript:void(0)">x</a>')
															('<div class="c_eb"></div>')
														('</div>')
														('<div class="classic-popup-content_eb">')
															('<div class="content_eb" style="padding:5px 10px 10px 10px">')
																('<div id="cError"></div>\
																<div class="gold-content">\
																	<div class="gold-right" style="margin-bottom:0px"><div id="noteEmpty"></div><ul style="margin:15px 0px 10px 0px"><li><b>Tiêu đề</b>: <input class="pm_text" name="title_pm" type="text" id="title_pm" style="height:20px; width:480px"/></li><li><div style="margin:5px 0 5px 0; font-weight:bold">Nội dung</div><div><textarea rows="8" cols="50" name="content_pm" id="content_pm" style="width:480px; font-size:14px; font-family:Arial, Helvetica"></textarea><script language="javacript">jQuery(\'#content_pm\').markItUp(mySettings);jQuery("#title_pm").focus();</script></div></li><li><div style="margin:10px 0 10px"><b>Thông tin người gửi:</b></div></li>'+str_email+str_captcha+'</ul></div>\
																	<div class="c"></div>\
																</div>')
																('<div style="width:495px; margin-left:15px;">' +
                                                                    '<a class="blueButton_eb  mLeft10_eb" onclick="pay_cancel()"><span><span>HỦY</span></span></a><span style="margin-left:125px" id="rpLoading"></span>' +
                                                                    '<a id="fr" class="blueButton_eb  mLeft10_eb" onclick="void(0)"><span><span>GỬI ĐI</span></span></a><div class="c"></div></div>')

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
	
	jQuery("#fr").click(function()
	{	 	
		var is_save = 0;
		var content_pm = getValueId('content_pm');
		var title_pm = getValueId('title_pm');				
		var email = getValueId('email');	
		
		var captcha = "";
		
		if(jQuery("#captcha").val()) 
		{
			captcha = jQuery("#captcha").val();
		}
   			
		if(title_pm=="")
		{
			document.getElementById('noteEmpty').style.display = '';
			jQuery("#noteEmpty").addClass("noteEmpty");
			jQuery("#noteEmpty").html("<span style='color:red'>Tiêu đề tin nhắn không hợp lệ!</span>");
			document.getElementById('title_pm').focus();
			return;
		}
		else if(content_pm=="")
		{
			document.getElementById('noteEmpty').style.display = '';
			jQuery("#noteEmpty").addClass("noteEmpty");
			jQuery("#noteEmpty").html("<span style='color:red'>Nội dung tin nhắn không hợp lệ!</span>");
			document.getElementById('content_pm').focus();
			return;
		}
		else if(email=="" || !is_email(email))
		{	
			document.getElementById('noteEmpty').style.display = '';
			jQuery("#noteEmpty").addClass("noteEmpty");		
			jQuery("#noteEmpty").html("<span style='color:red'>Email không chính xác!</span>");
			document.getElementById('email').focus();
			return;
		}
		else if(captcha=="")
		{		  			   
		   jQuery("#noteEmpty").addClass("noteEmpty");			   
		   jQuery("#noteEmpty").html("<span style='color:red'>Bạn chưa nhập mã bảo mật!</span>");
		   document.getElementById('captcha').focus();
		   return;		   
		}
		else
		{	
			if(getValueId('is_save','checked')){
				var is_save = 1;	
			}
			 jQuery("#rpLoading").html("<img src=\"images/loading.gif\" /><span style=\"font-size:11px; margin-left:5px;\">Đang gửi thông tin...</span>");
			jQuery.ajax({
				'url': WEB_DIR+'ajax.php',
				'data': {
					'act':'personal', 
					'code':'send_mess',
					'email':email,
					'user_id':user_id,
					'title_pm':title_pm,
					'content_pm':content_pm,
					'is_save':is_save,
					'captcha':captcha,
					'from_detail':1,
					'strUrl':strUrl,
					'ad_title':ad_title
					},
				'type': 'POST',
				'success': function(data){
					jQuery("#rpLoading").html("");
					if(data=="error_captcha"){
						document.getElementById('noteEmpty').style.display = '';
						jQuery("#noteEmpty").addClass("noteEmpty");
						jQuery("#noteEmpty").html("<span style='color:red'>Mã bảo mật không chính xác!</span>");
					}
					else if(data=="your_self"){
						document.getElementById('noteEmpty').style.display = '';
						jQuery("#noteEmpty").addClass("noteEmpty");
						jQuery("#noteEmpty").html("<span style='color:red'>Bạn không được gửi tin nhắn cho chính bạn!</span>");
					}										
					else if(data=="unsuccess"){
						document.getElementById('noteEmpty').style.display = '';
						jQuery("#noteEmpty").addClass("noteEmpty");
						jQuery("#noteEmpty").html("<span style='color:red'>Không gửi được tin nhắn. Hãy kiểm tra lại các thông tin!</span>");
					}
					else
					{						
						log_success("Bạn đã gửi tin nhắn tới "+user_name+" thành công.");
						return;
					}					
				}
			});
		}
	});
}

function move_archive_detail(ad_id)
{
	jQuery.get('ajax.php?act=item&code=move_archive',{ad_id:ad_id}, function(data){
		if(data == 'moved')
		{
		 	location.reload();	
		}		
	});
}