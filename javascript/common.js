function openWin(image,title)
{
	aWindow=window.open("img_large.php?img="+image+"&title="+title,"","toolbar=no,width=400,height=400,status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}

function openWin2(url,w,h)
{
	aWindow=window.open(url,"","toolbar=no,width="+w+",height="+h+",status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}
function openWin3(url,w,h,title)
{
	aWindow=window.open(url,"","toolbar=no,width="+w+",height="+h+",status=no,scrollbars=yes,resize=no,menubars=no");
	aWindow.focus();
}


function openLargeImage(url)
{
	aWindow=window.open(url,"","toolbar=no,width=400,height=400,status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}

function openBookmark(aURL)
{
	aWindow=window.open(aURL,"","toolbar=no,width=400,height=100,status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}
function openVideo(aURL)
{
	aWindow=window.open(aURL,"","toolbar=no,width=400,height=400,status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}
function openMatchUs(aURL)
{
	aWindow=window.open(aURL,"","toolbar=no,width=400,height=200,status=no,scrollbars=no,resize=no,menubars=no");
	aWindow.focus();
}
function submitFormTA() 
{
	updateRTE('ta');
	return true;
}
function setImage(string) 
{
	var g = 'File:\/\/' + string;
	var t = "file:///E:/My%20Document/DSC00025.jpg";
	document.getElementById('previewImage').src = t;
	document.getElementById('previewImage').setAttrib('width') = '100';
	//alert(g );

}

function checkSelectedOption(value,form,warning)
{
	if( value != -1 )
	{
		form.catid.value = value;
		form.submit();
	}
	else
	{
		alert(warning);
	}
}
function previewImage(string)
{		
	document.getElementById('previewImage').src = 'File:\/\/' + string;	
}
function previewImageServer(string)
{		
	if (string=="")
		document.getElementById('previewImage').src = "../catimages/blank.gif";	
	else
		document.getElementById('previewImage').src = "../catimages/" + string;	
}
isNS4 = (document.layers) ? true : false;
isIE4 = (document.all && !document.getElementById) ? true : false;
isIE5 = (document.all && document.getElementById) ? true : false;
isNS6 = (!document.all && document.getElementById) ? true : false;

function switchDiv(strDivName,bolVisible){

 //identify the element based on browser type
 if (isNS4) {
   objElement = document.layers[strDivName];
 } else if (isIE4) {
   objElement = document.all[strDivName];
 } else if (isIE5 || isNS6) {
   objElement = document.getElementById(strDivName);
 }
 
 if(isNS4){
     if(!bolVisible) {
       objElement.visibility ="hidden"
     } else {
       objElement.visibility ="visible"
     }     
 }else{
     if(!bolVisible) {
       objElement.style.visibility = "hidden";
     } else {
       objElement.style.visibility = "visible";
     }
 }
}


function removeall(checkboxId)
{
  
	var the_box = eval("window.document.itemForm." + checkboxId);
	for (var i=0;i<the_box.length;i++) 
	{
		the_box[i].checked=false;
  	}
  	the_box[0].checked=true;
}

function resetfirst(checkboxId)
{
  	var the_box = eval("window.document.itemForm." + checkboxId);
  	the_box[0].checked=false;
}

function collapse_all (n_index, n_depth) {
	var o_tree = TREES[n_index ? n_index : 0];
	if (!n_depth) n_depth = 1;
	if (!o_tree)
		alert("Tree is not initialized yet");
	var a_nodes = o_tree.a_nodes;
	for (var i = a_nodes.length - 1; i >= 0; i--)
		if (a_nodes[i].n_depth >= n_depth && a_nodes[i].open)
			a_nodes[i].open(1, 1);
	o_tree.ndom_refresh();
}
function expand_all (n_index, n_depth) {
	var o_tree = TREES[n_index ? n_index : 0];
	if (!o_tree)
		alert("Tree is not initialized yet");
	var a_nodes = o_tree.a_nodes;
	for (var i = 0; i< a_nodes.length; i++)
		if (n_depth == null || a_nodes[i].n_depth <= n_depth)
			a_nodes[i].open(0, 1);
	o_tree.ndom_refresh();
}

function auto_resize_page(){
	var intMax;
	var intRec = 15;
	var intRow = Math.ceil(intRec/3);
	var intCol = 3;
	var intCount = 0;
	var pos = 1;
	
	for(i=1;i<=intRow;i++) {
		intMax = 0;
		for(j=1;j<=intCol;j++) {
			intCount++;
			if(intCount<=intRec) {
				intH = parseInt(document.getElementById('Cate'+intCount).offsetHeight);
				if (intH>intMax)
					intMax = intH;
			} else {
				intCount = intRec;
				break;
			}
		}
		for(j=pos;j<=intCount;j++) {
			document.getElementById('Cate'+j).style.height=intMax;
		}
		pos=intCount+1;
	}
}
function ietruebody(){
	return (document.compatMode && document.compatMode!="BackCompat" && !window.opera)? document.documentElement : document.body
}

function align_center(id,w,h) {
	id = document.getElementById(id);
	pgyoffset=isNS6? parseInt(pageYOffset) : parseInt(ietruebody().scrollTop)
	horzpos=isNS6? pageXOffset+window.innerWidth/2-w/2 : ietruebody().scrollLeft+ietruebody().clientWidth/2-w/2
	vertpos=isNS6? pgyoffset+window.innerHeight/2-h/2 : pgyoffset+ietruebody().clientHeight/2-h/2
	if (window.opera && window.innerHeight) //compensate for Opera toolbar
		vertpos=pgyoffset+window.innerHeight/2-h/2
	vertpos=Math.max(pgyoffset, vertpos)	
	
	id.style.left=horzpos+"px"
	id.style.top=vertpos+"px"
}
function closeDiv(id){
	document.getElementById(id).style.display="none";
}

var xmlHttp

function showRSS(str,divName)
{ 
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=str
	xmlHttp.onreadystatechange=function()
	{
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{ 
			document.getElementById(divName).innerHTML=xmlHttp.responseText 
		} 
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}
	
function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
	// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
	// Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

function getValueId(id,type,svalue){
	if(document.getElementById(id)){
		
		if(typeof(type)=='undefined'){
			var type='value';
		}
		
		if(typeof(svalue)=='undefined'){
			var svalue='';
		}
		
		if(type=='value'){
			return document.getElementById(id).value;
		}
		else if(type=='checked'){
			return document.getElementById(id).checked;
		}
		else if(type=='assign'){
			return document.getElementById(id).value = svalue;
		}
		else{
			return '';
		}
	}
}

function listColor(id,obj,check){
	if(!check){
		jQuery(obj).css('color', "FFFFFF");
	}
	else{
		var aryColor = {
			98: "000000",
			276: "00fffc",
			278: "000000",
			
			15: "00fffc",
			280: "fcd124",
			2: "fcd124",
			
			272: "000000",
			279: "00fffc",
			19: "fcd124",
			
			264: "00fffc",
			100: "10228f",
			20: "fcd124",
			
			69: "10228f",
			77: "10228f",
			81: "000000",
			
			1: "fcd124",
			283: "00fffc",
			266: "fcd124",
			
			83: "fcd124",
			282: "000000",
			286: "10228f",
			
			284: "00fffc",
			285: "00fffc",
			275: "fcd124"
		};	
		var color = (aryColor[id]) ? aryColor[id] : "FF0000" ;	
		jQuery(obj).css('color', color);
	}
	return;
	
	
}

/*DungNH added 2/7/2010*/
function unserialize(data) {
    var that = this;
    var utf8Overhead = function(chr) {
        var code = chr.charCodeAt(0);
        if (code < 0x0080) {
            return 0;
        }
        if (code < 0x0800) {
             return 1;
        }
        return 2;
    };

    var error = function (type, msg, filename, line){throw new that.window[type](msg, filename, line);};
    var read_until = function (data, offset, stopchr){
        var buf = [];
        var chr = data.slice(offset, offset + 1);
        var i = 2;
        while (chr != stopchr) {
            if ((i+offset) > data.length) {
                error('Error', 'Invalid');
            }
            buf.push(chr);
            chr = data.slice(offset + (i - 1),offset + i);
            i += 1;
        }
        return [buf.length, buf.join('')];
    };
    var read_chrs = function (data, offset, length){
        var buf;

        buf = [];
        for (var i = 0;i < length;i++){
            var chr = data.slice(offset + (i - 1),offset + i);
            buf.push(chr);
            length -= utf8Overhead(chr); 
        }
        return [buf.length, buf.join('')];
    };
    var _unserialize = function (data, offset){
        var readdata;
        var readData;
        var chrs = 0;
        var ccount;
        var stringlength;
        var keyandchrs;
        var keys;

        if (!offset) {offset = 0;}
        var dtype = (data.slice(offset, offset + 1)).toLowerCase();

        var dataoffset = offset + 2;
        var typeconvert = function(x) {return x;};

        switch (dtype){
            case 'i':
                typeconvert = function (x) {return parseInt(x, 10);};
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
            break;
            case 'b':
                typeconvert = function (x) {return parseInt(x, 10) !== 0;};
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
            break;
            case 'd':
                typeconvert = function (x) {return parseFloat(x);};
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
            break;
            case 'n':
                readdata = null;
            break;
            case 's':
                ccount = read_until(data, dataoffset, ':');
                chrs = ccount[0];
                stringlength = ccount[1];
                dataoffset += chrs + 2;

                readData = read_chrs(data, dataoffset+1, parseInt(stringlength, 10));
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 2;
                if (chrs != parseInt(stringlength, 10) && chrs != readdata.length){
                    error('SyntaxError', 'String length mismatch');
                }

                // Length was calculated on an utf-8 encoded string
                // so wait with decoding
                readdata = that.utf8_decode(readdata);
            break;
            case 'a':
                readdata = {};

                keyandchrs = read_until(data, dataoffset, ':');
                chrs = keyandchrs[0];
                keys = keyandchrs[1];
                dataoffset += chrs + 2;

                for (var i = 0; i < parseInt(keys, 10); i++){
                    var kprops = _unserialize(data, dataoffset);
                    var kchrs = kprops[1];
                    var key = kprops[2];
                    dataoffset += kchrs;

                    var vprops = _unserialize(data, dataoffset);
                    var vchrs = vprops[1];
                    var value = vprops[2];
                    dataoffset += vchrs;

                    readdata[key] = value;
                }

                dataoffset += 1;
            break;
            default:
                error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
            break;
        }
        return [dtype, dataoffset - offset, typeconvert(readdata)];
    };
    
    return _unserialize((data+''), 0)[2];
}

/*DungNH added 2/7/2010*/
function serialize(mixed_value) {
    var _getType = function (inp) {
        var type = typeof inp, match;
        var key;
        if (type == 'object' && !inp) {
            return 'null';
        }
        if (type == "object") {
            if (!inp.constructor) {
                return 'object';
            }
            var cons = inp.constructor.toString();
            match = cons.match(/(\w+)\(/);
            if (match) {
                cons = match[1].toLowerCase();
            }
            var types = ["boolean", "number", "string", "array"];
            for (key in types) {
                if (cons == types[key]) {
                    type = types[key];
                    break;
                }
            }
        }
        return type;
    };
    var type = _getType(mixed_value);
    var val, ktype = '';
    
    switch (type) {
        case "function": 
            val = ""; 
            break;
        case "boolean":
            val = "b:" + (mixed_value ? "1" : "0");
            break;
        case "number":
            val = (Math.round(mixed_value) == mixed_value ? "i" : "d") + ":" + mixed_value;
            break;
        case "string":
            mixed_value = this.utf8_encode(mixed_value);
            val = "s:" + encodeURIComponent(mixed_value).replace(/%../g, 'x').length + ":\"" + mixed_value + "\"";
            break;
        case "array":
        case "object":
            val = "a";
            /*
            if (type == "object") {
                var objname = mixed_value.constructor.toString().match(/(\w+)\(\)/);
                if (objname == undefined) {
                    return;
                }
                objname[1] = this.serialize(objname[1]);
                val = "O" + objname[1].substring(1, objname[1].length - 1);
            }
            */
            var count = 0;
            var vals = "";
            var okey;
            var key;
            for (key in mixed_value) {
                ktype = _getType(mixed_value[key]);
                if (ktype == "function") { 
                    continue; 
                }
                
                okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
                vals += this.serialize(okey) +
                        this.serialize(mixed_value[key]);
                count++;
            }
            val += ":" + count + ":{" + vals + "}";
            break;
        case "undefined": // Fall-through
        default: // if the JS object has a property which contains a null value, the string cannot be unserialized by PHP
            val = "N";
            break;
    }
    if (type != "object" && type != "array") {
        val += ";";
    }
    return val;
}

/*Code xu ly xoa tin cua khach vang lai*/
recent_ads = false;
function showIconRemove(id){
	jQuery("#ck_del_" + id).show();
}

function hideIconRemove(id){
	jQuery("#ck_del_" + id).hide();
}

function removeItem(id){
	recent_ads = jQuery.cookie('recent_ads');
	if (recent_ads){
		jQuery.post("ajax.php?act=item&act=del_item_user", {
				itemId:id
			},			
			function(html_content){
				if(html_content != "empty_item"){
					jQuery('#aqTip2').css("display","none");//hidden tooltip
					jQuery('#view_item_new').html(html_content);
					if(flagViewMore){
						jQuery('#view_ad_more').css("display","none");
						jQuery('#recent_ad_more').css("display","");
					}
				}
				else{
					jQuery('#view_item_new').css("display","none");
				}
			}
		);
    }
}

function viewMoreDis(type){
	$strHtml = '';
	//expan
	if(type==1){
		$strHtml = "<a class=\"btnMoreExp\" onmouseover=\"this.className='btnMoreOverExp'\" onmouseout=\"this.className='btnMoreExp'\" title=\"Xem th&#234;m\" onClick=\"viewMoreDis(2)\"></a>";
		jQuery('#content-bar').css("display",'none');
		jQuery('div.rowBarCon').css("display",'block');
	}
	else{
		$strHtml = "<a class=\"btnMoreCol\" onmouseover=\"this.className='btnMoreOverCol'\" onmouseout=\"this.className='btnMoreCol'\" title=\"Xem th&#234;m\" onClick=\"viewMoreDis(1)\"></a>";
		jQuery('#content-bar').css("display",'block');
		jQuery('div.rowBarCon').css("display",'none');
	}
	jQuery('div.colspan').html('');
	jQuery('div.colspan').html($strHtml);
}

function viewMoreCity(){
	if (document.getElementById('boxCity').style.display == 'none') {
		document.getElementById('boxCity').style.display = 'block';
		jQuery('#BarConditions').css("display",'none');
		jQuery('div.rowBarCon').css("display",'none');
		jQuery('div.colspan').css("display",'none');
	}
	else{
		document.getElementById('boxCity').style.display = 'none';
		jQuery('#BarConditions').css("display",'block');
		jQuery('#content-bar').css("display",'block');
		
	}
}

function viewMoreCate(){
	if (document.getElementById('boxCate').style.display == 'none') {
		document.getElementById('boxCate').style.display = 'block';
	}
	else{
		document.getElementById('boxCate').style.display = 'none';
	}
}

/*function viewCity(type){
	$strHtml = '';
	//expan
	if(type==1){
		$strHtml = "<a class=\"btnMoreCol\" onmouseover=\"this.className='btnMoreOverCol'\" onmouseout=\"this.className='btnMoreCol'\" title=\"Xem th&#234;m\" onClick=\"viewCity(2)\"></a>";
		jQuery('div.item-condition-city').css("display",'block');
	}
	else{		
		$strHtml = "<a class=\"btnMoreExp\" onmouseover=\"this.className='btnMoreOverExp'\" onmouseout=\"this.className='btnMoreExp'\" title=\"Xem th&#234;m\" onClick=\"viewCity(1)\"></a>";
		jQuery('div.item-condition-city').css("display",'none');
	}
	jQuery('div.colspanCity').html('');
	jQuery('div.colspanCity').html($strHtml);
}*/

function onChangeCate(e){
	jQuery.getJSON(WEB_DIR+"ajax.php?act=admin&act=load_sub_cate",{cat_id:e.value},function(data){
		jQuery('#sub_cate').html('');
		jQuery('#sub_cate').html(data.subCate);
	});
}


function number_format(Num) {
	Num = Num.toString().replace(/^0+/,"").replace(/\./g,"").replace(/,/g,"");// Bỏ hết số 0 ở đầu dãy số | Bỏ hết dấu . trong dãy số
	Num = "" + parseInt(Num);
	var temp1 = "";
	var temp2 = "";
	
	if (Num == 0 || Num == '0' || Num == '' || isNaN(Num)) {
		return 0;
	}
	else { 
		var count = 0;
		for (var k = Num.length-1; k >= 0; k--) {
			var oneChar = Num.charAt(k);
			if (count == 3) {
				temp1 += ".";
				temp1 += oneChar;
				count = 1;
				continue;
			}
			else{
				temp1 += oneChar;
				count ++;
			}
		}
		
		for (var k = temp1.length-1; k >= 0; k--) {
			var oneChar = temp1.charAt(k);
			temp2 += oneChar;
		}
		return temp2;
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
};

function is_email(str)
{ 
	return (/^[a-z][a-z-_0-9\.]+@[a-z-_=>0-9\.]+\.[a-z]{2,3}$/i).test(str);
};

function join(str) {
    var store = [str];
    return function extend(other) {
        if (other != null && 'string' == typeof other ) {
            store.push(other);
            return extend;
        }
        return store.join('');
    }
}

function in_array(value, array){  
    for (i = 0; i < array.length / 2 ; i++)      
       if(array[2*i] === value || ( i > 0 && array[2*i - 1] === value ))
          return true;  
    return false;  
}

   
function isValueInArray(arr, val) {
	inArray = false;
	for (i = 0; i < arr.length; i++)
		if (val == arr[i])
			inArray = true;
	
	return inArray;
}
/*
* ngannv dev fix dang tin tren IE6
* */
function isIE6(){
    //add by ngannv check IE6
    var is=false;
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
        var ieversion=new Number(RegExp.$1) //
        if (ieversion <= 6){
            is=true
        }
    }
    return is;
}
function de_active_sel(){
    //ngannv def
    if(isIE6()==true){
        jQuery("select").hide();
        jQuery('#ad_city_id_hidden').css("display","inline-block");
        jQuery('#ad_city_id_hidden').attr("value",jQuery('#ad_city_id option:selected').text());
        jQuery('#ad_id_subcat_hidden').css("display","inline-block");
        jQuery('#ad_id_subcat_hidden').attr("value",jQuery('#ad_id_subcat option:selected').text());
        jQuery('#ad_dist_id_hidden').css("display","inline-block");
        jQuery('#ad_dist_id_hidden').attr("value",jQuery('#ad_dist_id option:selected').text());
        jQuery('#ad_id_pcat_hidden').css("display","inline-block");
        jQuery('#ad_id_pcat_hidden').attr("value",jQuery('#ad_id_pcat option:selected').text());
        jQuery('#ad_cat_id_hidden').css("display","inline-block");
        jQuery('#ad_cat_id_hidden').attr("value",jQuery('#ad_cat_id option:selected').text());
    }

}
function reset_control(){
    //add by ngannv
    //
    if(isIE6()==true){
         jQuery('select').show();
         jQuery('#ad_city_id_hidden').css("display","none");
         jQuery('#ad_id_subcat_hidden').css("display","none");
         jQuery('#ad_cat_id_hidden').css("display","none");
         jQuery('#ad_id_pcat_hidden').css("display","none");
         jQuery('#ad_dist_id_hidden').css("display","none");
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
