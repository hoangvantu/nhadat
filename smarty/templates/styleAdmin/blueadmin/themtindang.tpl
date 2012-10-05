

{extends file="layout.tpl"}


 {block name="headjava" append}
<script type="text/javascript" src="../jscripts/tiny_mce/tiny_mce.js"></script>
{literal}
<script type="text/javascript">
	tinyMCE.init({
		// General options
		mode : "textareas",
		theme : "advanced",
		plugins : "autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,wordcount,advlist,autosave,visualblocks",

		// Theme options
		theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,fontselect,fontsizeselect",
		theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
		theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
		theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak,restoredraft,visualblocks",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "bottom",
		theme_advanced_resizing : true,

		// Example content CSS (should be your site CSS)
		content_css : "css/content.css",

		// Drop lists for link/image/media/template dialogs
		template_external_list_url : "lists/template_list.js",
		external_link_list_url : "lists/link_list.js",
		external_image_list_url : "lists/image_list.js",
		media_external_list_url : "lists/media_list.js",

		// Style formats
		style_formats : [
			{title : 'Bold text', inline : 'b'},
			{title : 'Red text', inline : 'span', styles : {color : '#ff0000'}},
			{title : 'Red header', block : 'h1', styles : {color : '#ff0000'}},
			{title : 'Example 1', inline : 'span', classes : 'example1'},
			{title : 'Example 2', inline : 'span', classes : 'example2'},
			{title : 'Table styles'},
			{title : 'Table row 1', selector : 'tr', classes : 'tablerow1'}
		],

		// Replace values for the template plugin
		template_replace_values : {
			username : "Some User",
			staffid : "991234"
		}
	});
            
            
            
</script>
<script type="text/javascript">

function getquan(provinceid)
     {
      
   // if(!confirm('Bạn có chắc muốn xóa không?')){return false};
    $.get("../ajax_request.php?action=getquan&provinceid=provinceid",
    function(data) 
    {
       
        for(var key in data) {
       alert(data[key].districtname);
        }
       
    }
     ,"json")
	
     }
</script>
{/literal}

{/block}




{block name="content"}




 <div class="box round first grid">
                <h2>
                    Thêm Tin Đăng</h2>
                <div class="block ">
                    <form>
                    <table class="form">
                        <tbody>
                            <tr>
                            <td class="col1">
                                <label>
                                    Tiêu đề</label>
                            </td>
                            <td class="col2">
                                <input type="text" name="txtTitle" id="grumble">
                            </td>
                        </tr>
                        <tr>
                       <td>  <label>Nội dung</label></td>
                         <td> <textarea name="content" cols="50" rows="15">This is some content that will be editable with TinyMCE.</textarea></td>
                        
                        </tr>
                        <tr>
                        <td><label>Tỉnh</label></td>
                        <td>
                            <select onchange="javascript: return  getquan(1);">
                                {if isset($danhsachtinh)}
                                    {foreach from=$danhsachtinh item=tinh}
                                <option value="{$tinh.ProvinceID}">{$tinh.ProvinceName}</option>
                                {/foreach}
                                {/if}
                            </select>
                        
                        
                        </td>
                        </tr>
                        <tr>
                            <td><label>Quận/Huyện</label></td>
                            <td>
                            <select>
                                <option>1</option>
                            
                            </select>
                            </td>
                        
                        </tr>
                       
                    </tbody></table>
                    </form>
                </div>
  {/block}