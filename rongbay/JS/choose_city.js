var cur_city = false;//CURRENT_CITY_ID
//var tp0_url 			= 'tp0';
//var tp_html = '<div  class="AllCity" align="center"><a href="' + WEB_DIR + tp0_url + '/Toan-Quoc.html">- Toàn quốc -</a></div>\
//<div class="RegionPanel">';
var style_city_selected = "";	
var tp_html = '<div class="boxOvlCityTop"><span></span></div>';

var real_url = window.location.toString();
var arr_real_url = real_url.split(/\//g);
var extra_url = '';
if (real_url > BASE_URL && real_url.search(/\.html/) != -1){
	if (real_url.search(/\/search.html/i) != -1){
    	var hashes = real_url.split('?');
	    extra_url = '/search.html?'+hashes[hashes.length-1];
    }
}
tp_html += '<div class="boxOvlCity">';
tp_html += '<div class="contentOvlCity">';
	
	tp_html += '<div class="RegionPanel" style="float:left"><div class="Region" style="background:none">Miền Bắc</div><ul>';
	for(var j in cities_top['NORTHEN']){
		var city_url_nort_top = cities_top['NORTHEN'][j]['url']+extra_url;
		if(cities_top['NORTHEN'][j]['name'])
		{
			if(cities_top['NORTHEN'][j]['id'] == CURRENT_CITY_ID)
			{
				cur_city = cities_top['NORTHEN'][j];				
			}
			style_city_selected = 'style="font-weight:bold;color:#0087c8;"';
			tp_html +='<li class="City" style="margin: 0;"><a href="'+city_url_nort_top+'" '+style_city_selected+'><b>'+cities_top['NORTHEN'][j]['name']+'</b></a></li>'
		}
	}
	
	for(var i in cities_rb['NORTHEN']){
		var city_url_nort = cities_rb['NORTHEN'][i]['url']+extra_url;
		if(cities_rb['NORTHEN'][i]['name']){
			style_city_selected = "";
			if(cities_rb['NORTHEN'][i]['id'] == CURRENT_CITY_ID)
			{
				cur_city = cities_rb['NORTHEN'][i];				
				style_city_selected = 'style="font-weight:bold;color:#CC9900;"';
			}
			
			tp_html +='<li class="City" style="margin: 0;"><a href="'+city_url_nort+'" '+style_city_selected+'>'+cities_rb['NORTHEN'][i]['name']+'</a></li>'	;
		}
	}
	tp_html += '</ul></div>';

	tp_html += '<div class="RegionPanel" style="float:left"><div class="Region" style="background:none">Miền Trung</div><ul>';
	for(var j in cities_top['MIDDLE']){
		var city_url_nort_top = cities_top['MIDDLE'][j]['url']+extra_url;
		if(cities_top['MIDDLE'][j]['name'])
		{
			if(cities_top['MIDDLE'][j]['id'] == CURRENT_CITY_ID)
			{
				cur_city = cities_top['MIDDLE'][j];				
			}
			style_city_selected = 'style="font-weight:bold;color:#0087c8;"';
			tp_html +='<li class="City" style="margin: 0;"><a href="'+city_url_nort_top+'" '+style_city_selected+'><b>'+cities_top['MIDDLE'][j]['name']+'</b></a></li>'
		}
	}
	
	for(var i in cities_rb['MIDDLE']){
		var city_url_mid = cities_rb['MIDDLE'][i]['url']+extra_url;
		if(cities_rb['MIDDLE'][i]['name']){			
			style_city_selected = "";
			if(cities_rb['MIDDLE'][i]['id'] == CURRENT_CITY_ID){
				cur_city = cities_rb['MIDDLE'][i];				
				style_city_selected = 'style="font-weight:bold;color:#CC9900;"';
			}
			
			tp_html +='<li class="City" style="margin: 0;"><a href="'+city_url_mid+'" '+style_city_selected+'>'+cities_rb['MIDDLE'][i]['name']+'</a></li>';
		}
	}
	tp_html += '</ul></div>';
	
	tp_html += '<div class="RegionPanel" style="float:left"><div class="Region" >Miền Nam</div><ul>';
	for(var j in cities_top['SOUTHEN']){
		var city_url_nort_top = cities_top['SOUTHEN'][j]['url']+extra_url;
		if(cities_top['SOUTHEN'][j]['name'])
		{
			if(cities_top['SOUTHEN'][j]['id'] == CURRENT_CITY_ID)
			{
				cur_city = cities_top['SOUTHEN'][j];				
			}
			style_city_selected = 'style="font-weight:bold;color:#0087c8;"';
			tp_html +='<li class="City" style="margin: 0;"><a href="'+city_url_nort_top+'" '+style_city_selected+'><b>'+cities_top['SOUTHEN'][j]['name']+'</b></a></li>'
		}
	}
	
	for(var i in cities_rb['SOUTHEN']){
		var city_url_sout = cities_rb['SOUTHEN'][i]['url']+extra_url;
		if(cities_rb['SOUTHEN'][i]['name']){			
			style_city_selected = "";
			if(cities_rb['SOUTHEN'][i]['id'] == CURRENT_CITY_ID){
				cur_city = cities_rb['SOUTHEN'][i];
				style_city_selected = 'style="font-weight:bold;color:#CC9900;"';
			}
		
			tp_html +='<li class="City" style="margin: 0;"><a href="'+city_url_sout+'" '+style_city_selected+'>'+cities_rb['SOUTHEN'][i]['name']+'</a></li>';
		}
	}
	tp_html += '</ul></div>';
tp_html += '</div>';
tp_html += '</div>';

tp_html += '<div class="boxOvlCityBottom"></div>';
		
if(document.getElementById("chooseCity")) {		
	document.getElementById("chooseCity").innerHTML = tp_html;
}///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*var tp_html = '';		
if(cur_city){
	tp_html +='<a href="#" onClick="return overlay(this, \'chooseCity\', \'rightbottom\')" class="current">'+cur_city['name']+'</a>';
}
else{
	tp_html +='<a href="#" onClick="return overlay(this, \'chooseCity\', \'rightbottom\')" class="current">Toàn quốc</a>';
}

if(document.getElementById("cityPlace")) {
	document.getElementById("cityPlace").innerHTML = tp_html;
}*/

delete(tp_html);


function overlaySelectCity()
{
	var content = getTempCity();
	var popup_content = cart_join
		('<div id="cart-check-out-step1" style="margin:0 auto;width:320px;text-align:left">')
				('<div style="background-color: transparent;">')
					('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
						('<div class="classic-popup_eb">')
							('<div class="classic-popup-top_eb">')
								('<div class="right_eb">')
									('<div class="bg_eb"></div>')
								('</div>')
							('</div>')
							('<div class="classic-popup-main_eb">')
								('<div class="classic-popup-title_eb bg_popup">')
									('<div class="fl_eb logo_popup">Chọn tỉnh thành</div>')
									('<div class="arrow_popup"></div>')
									('<div class="c_eb"></div>')
								('</div>')
								('<div class="classic-popup-content_eb">')
									('<div class="content_eb" style="padding:5px 10px 10px 10px">')
										('<div class="gold-content">'+content+'')
										('</div>')
										('<div class="mTop10_eb fl_eb" id="btnShowCity" style="margin-left:100px">')
                                            ('<a class="blueButton_eb" href="javascript:void(0)" onclick="showAllCity(1);"><span><span>TỈNH KHÁC</span></span></a>')
                                        ('</div><div class="c"></div>')
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

function showAllCity(type)
{
	var real_url = window.location.toString();
        var arr_real_url = real_url.split(/\//g);
        var extra_url = '';
        if(real_url > BASE_URL && real_url.search(/\.html/) != -1){
            if(real_url.search(/\/toan-quoc/i) != -1){
                extra_url = '/'+arr_real_url[arr_real_url.length-1];
                //extra_url = '?href_site='+Base64.encode(real_url);
            }else{
                extra_url = '?href_site='+Base64.encode(real_url);
            }
        }
        if (type == 2)
	{
		jQuery("#boxSelectCity").css({'height':'260px', 'overflow-y':'hidden'});
		jQuery("#btnShowCity").html('<a class="blueButton_eb" href="javascript:void(0)" onclick="showAllCity(1);"><span><span>TỈNH KHÁC</span></span></a>');
		jQuery("#otherCities").html('');
		return;
	}
	
	var tp_html = '';
	
	for(var i in cities_rb['NORTHEN']) {
		var city_url_nort = cities_rb['NORTHEN'][i]['url'];
		if(cities_rb['NORTHEN'][i]['name']){
			tp_html +='<div class="City"><a href="'+city_url_nort+extra_url+'"><b>'+cities_rb['NORTHEN'][i]['name']+'</b></a></div>'	;
		}
	}
	for(var i in cities_rb['MIDDLE']) {
		var city_url_mid = cities_rb['MIDDLE'][i]['url'];
		if(cities_rb['MIDDLE'][i]['name']){			
			tp_html +='<div class="City"><a href="'+city_url_mid+extra_url+'"><b>'+cities_rb['MIDDLE'][i]['name']+'</b></a></div>';
		}
	}
	for(var i in cities_rb['SOUTHEN']){
		var city_url_sout = cities_rb['SOUTHEN'][i]['url'];
		if(cities_rb['SOUTHEN'][i]['name']) {			
			tp_html +='<div class="City"><a href="'+city_url_sout+extra_url+'" ><b>'+cities_rb['SOUTHEN'][i]['name']+'</b></a></div>'	
		}
	}
	
	jQuery("#boxSelectCity").css({'height':'550px', 'overflow-x':'hidden', 'overflow-y':'scroll'});
	jQuery("#btnShowCity").html('<a class="blueButton_eb" href="javascript:void(0)" onclick="showAllCity(2);"><span><span>THU GỌN</span></span></a>');
	jQuery("#otherCities").html(tp_html);
}

function getTempCity()
{
	var cur_city = false;
	var style_city_selected = "";	
	
	var tp_html = '<div id="boxSelectCity">';
        
        var real_url = window.location.toString();
        var arr_real_url = real_url.split(/\//g);
        var extra_url = '';
        if(real_url > BASE_URL && real_url.search(/\.html/) != -1){
            if(real_url.search(/\/toan-quoc/i) != -1){
                extra_url = '/'+arr_real_url[arr_real_url.length-1];
                //extra_url = '?href_site='+Base64.encode(real_url);
            }else{
                extra_url = '?href_site='+Base64.encode(real_url);
            }
        }
        
	for(var j in cities_top['NORTHEN']) {
		var city_url_nort_top = cities_top['NORTHEN'][j]['url'];
		if(cities_top['NORTHEN'][j]['name'])
		{
			if(cities_top['NORTHEN'][j]['id'] == CURRENT_CITY_ID)
			{
				cur_city = cities_top['NORTHEN'][j];				
			}
			tp_html +='<div class="City"><a href="'+city_url_nort_top+extra_url+'" '+style_city_selected+'><b>'+cities_top['NORTHEN'][j]['name']+'</b></a></div>'	
		}
	}
	for(var j in cities_top['MIDDLE']) {
		var city_url_nort_top = cities_top['MIDDLE'][j]['url'];
		if(cities_top['MIDDLE'][j]['name'])
		{
			if(cities_top['MIDDLE'][j]['id'] == CURRENT_CITY_ID)
			{
				cur_city = cities_top['MIDDLE'][j];				
			}
			tp_html +='<div class="City"><a href="'+city_url_nort_top+extra_url+'" '+style_city_selected+'><b>'+cities_top['MIDDLE'][j]['name']+'</b></a></div>'	
		}
	}
	for(var j in cities_top['SOUTHEN']) {
		var city_url_nort_top = cities_top['SOUTHEN'][j]['url'];
		if(cities_top['SOUTHEN'][j]['name'])
		{
			if(cities_top['SOUTHEN'][j]['id'] == CURRENT_CITY_ID)
			{
				cur_city = cities_top['SOUTHEN'][j];				
			}
			tp_html +='<div class="City"><a href="'+city_url_nort_top+extra_url+'" '+style_city_selected+'><b>'+cities_top['SOUTHEN'][j]['name']+'</b></a></div>'	
		}
	}
	tp_html += '<div id="otherCities"></div>';
	tp_html += '</div>';
			
	return tp_html;
}