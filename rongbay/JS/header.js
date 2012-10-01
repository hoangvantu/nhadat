clicked1 = false;
function fn_click_chooseCityButton(value){
    jQuery("#chooseCity").slideToggle("fast");
    jQuery("#chooseCat").slideUp("fast");
    jQuery("#chooseCatButton").removeClass("btnHmenuMoreCurrent").addClass("btnHmenuMore");
    if (value.className == 'otherHover'){
        jQuery(value).removeClass("otherHover").addClass("otherCurrent");
        clicked1 = true;
    }
    else if (clicked1 == true){
        jQuery(value).removeClass("otherCurrent").addClass("other");
    }
}

function fn_over_chooseCatButton(value){
    jQuery(value).addClass("btnHmenuMoreHover").removeClass("btnHmenuMore");
}

function fn_out_chooseCatButton(value){
    jQuery(value).addClass("btnHmenuMore").removeClass("btnHmenuMoreHover");
}

function fn_over_chooseCityButton(value){
    jQuery(value).addClass("otherHover").removeClass("other");
}

function fn_out_chooseCityButton(value){
    jQuery(value).addClass("other").removeClass("otherHover");
}

function fn_click_boxClose(){	
    //jQuery("img.boxClose").click(function () {
    jQuery("#chooseCity").slideUp("fast");
    jQuery("#chooseCat").slideUp("fast");
    jQuery("#chooseCatButton").addClass("btnHmenuMore").removeClass("btnHmenuMoreCurrent");
    jQuery("#chooseCityButton").removeClass("otherCurrent").addClass("other");
//});
}

function fn_over_boxClose(value){
    jQuery(value).css({
        cursor:"pointer"
    });
}

function fn_out_boxClose(value){
    jQuery(value).css({
        cursor:"none"
    });
}

function fn_over_yahoo_sign(){
    jQuery(".yahoo_logo").attr({
        src: "style/images/head_signin_yahoo_hover.gif"
    });
}

function fn_out_yahoo_sign(){
    jQuery(".yahoo_logo").attr({
        src: "style/images/head_signin_yahoo.gif"
    });
}

function fn_over_City(value){
    jQuery(value).addClass("CityHover").removeClass("City");
}

function fn_out_City(value){
    jQuery(value).addClass("City").removeClass("CityHover");
}

function fn_new_mes(newMes,newComment,url){		
    var strMess = '';
    if(newMes >0 || newComment >0){
        if(newMes>0 && newComment >0){
            strMess += 'Bạn có <a href="'+WEB_DIR+'message.html">'+ newMes + ' tin nhắn</a> và <a href="'+WEB_DIR+'usercp.html?cmd=comment">' + newComment + ' phản hồi giao dịch </a> mới';
        }
        else if(newMes>0){
            strMess += 'Bạn có <a href="'+WEB_DIR+'message.html">'+ newMes + ' tin nhắn</a> mới';
        }
        else if(newComment>0)
        {
            strMess += 'Bạn có <a href="'+WEB_DIR+'usercp.html?cmd=comment">' + newComment + ' phản hồi giao dịch</a> mới';
        }

		
        jQuery.jGrowl(strMess,{
            header: 'Thông báo!'
        });
    }
    else{
        return false;
    }
}

/*Add by nhatvt - hien slidedown box thong bao*/
jQuery(document).ready(function(){
    var key_for_cookie = jQuery("#key_for_cookie").val();
	var is_close = 0;
	
    if(jQuery.cookie && jQuery.cookie('close_thongbao_'+key_for_cookie) != null){
		is_close = jQuery.cookie('close_thongbao_'+key_for_cookie);
    }
    
    if (is_close == 0){
        jQuery("#box-thongbao").show();
	}
});


function close_thongbao(){
    var key_for_cookie = jQuery("#key_for_cookie").val();
    jQuery("#box-thongbao").hide();
    jQuery.cookie('close_thongbao_'+key_for_cookie,1,{expires: 100000});
}