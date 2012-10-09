

{extends file="layout.tpl"}
{block name="headcss" append}
{literal}
 <style>

            /* Demo styles */sground:#222;margin:0;}
            body{border-top:4px solid #000;}
            .content{color:#777;font:12px/1.4 "helvetica neue",arial,sans-serif;width:620px;margin:20px auto;}
            h1{font-size:12px;font-weight:normal;color:#ddd;margin:0;}
            p{margin:0 0 20px}
         
            .cred{margin-top:20px;font-size:11px;}

            /* This rule is read by Galleria to define the gallery height: */
            #galleria{height:500px;width:500}
        </style>
        {/literal}
 <link rel="stylesheet" type="text/css" href="{$smarty.current_dir|replace:'\\':'/'}/juploader/fileuploader.css" media="screen" />
{/block}

{block name="headjava" append}
<script type="text/javascript">
{if isset($tindang)}
var provinceid={$provinceid};
var districtid={$tindang.DistrictID};
var loainhaid={$tindang.loainhaid};
var khunggiaid={$tindang.khunggia};

{/if}
</script>

<script type="text/javascript" src="../jscripts/tiny_mce/tiny_mce.js"></script>

<script type="text/javascript" src="{$smarty.current_dir|replace:'\\':'/'}/ajaxuploader/ajaxfileupload.js"></script>  

<script type="text/javascript" src="{$smarty.current_dir|replace:'\\':'/'}/galeria/dump.js"></script>
     <script src="{$smarty.current_dir|replace:'\\':'/'}/galeria/galleria-1.2.8.min.js"></script>
 {literal}
    <script type="text/javascript">
  var dataimage = [
    { image: "http://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Locomotives-Roundhouse2.jpg/800px-Locomotives-Roundhouse2.jpg",
     thumb: 'http://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Locomotives-Roundhouse2.jpg/100px-Locomotives-Roundhouse2.jpg'
 }
];
  </script>
  
  <script type="text/javascript">
 

  function add()
   {
    
               dataimage.push({ image: "http://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Locomotives-Roundhouse2.jpg/800px-Locomotives-Roundhouse2.jpg",
     thumb: 'http://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Locomotives-Roundhouse2.jpg/100px-Locomotives-Roundhouse2.jpg'
 });
  Galleria.get(0).push({ image: "http://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Locomotives-Roundhouse2.jpg/800px-Locomotives-Roundhouse2.jpg",
     thumb: 'http://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Locomotives-Roundhouse2.jpg/100px-Locomotives-Roundhouse2.jpg'
 });
  dump(dataimage,true);
    }
 

   function ajaxFileUpload()
    {
        //starting setting some animation when the ajax starts and completes
        $("#loading")
        .ajaxStart(function(){
            $(this).show();
        })
        .ajaxComplete(function(){
            $(this).hide();
        });
        
        /*
            prepareing ajax file upload
            url: the url of script file handling the uploaded files
                        fileElementId: the file type of input element id and it will be the index of  $_FILES Array()
            dataType: it support json, xml
            secureuri:use secure protocol
            success: call back function when the ajax complete
            error: callback function when the ajax failed
            
                */
        $.ajaxFileUpload
        (
            {
                url:'http://localhost/te/photouploader/INDEX2.PHP', 
                secureuri:false,
                data:{name:'nhadatimage'},
                fileElementId:'file',
                dataType: 'json',
                success: function (data, status)
                {
                 Galleria.get(0).push({ image: data.url,
     thumb: data.url
 });
                   $(".imageuploaded").append("<input type=\"text\" readonly name=\"txtimage[]\" id=\"grumble\" value=\""+data.url +"\"><br/>");
                     if(typeof(data.error) != 'undefined')
                    {
                        if(data.error != '')
                        {
                            alert(data.error);
                        }else
                        {
                         
                         //   alert(data.msg);
                       
                        }
                    }
                },
                error: function (data, status, e)
                {
                    alert(e);
                }
            }
        )
        
        return false;

    }  
 </script>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <!--Tiny MCE Intializing -->
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

   <!-- AJAX -->
 <script type="text/javascript">
      $(document).ready(function(){
      
      
      $(".province").change(function(data)
         {
            $(".district").empty();
            $.getJSON('../ajax_request.php' ,{action:'getquan',provinceid:$(this).val()},function(data){
               $.each(data, function(index) {
               // alert(data[index].districtid);
               $(".district").append("<option value=\""+data[index].districtid+"\">"+data[index].districtname+"</option>");
          });

});
            
         }
         );
          
           $(".province").val(provinceid);
             $("name=[sldistrict]").val(districtid);
           
         $.getJSON('../ajax_request.php' ,{action:'getquan',provinceid:$(".province").val()},function(data){
               $.each(data, function(index) {
               // alert(data[index].districtid);
               $(".district").append("<option value=\""+data[index].districtid+"\">"+data[index].districtname+"</option>");
          });
             $(".district").val(districtid);
       
          
      
      
}); 
           $("select[name=\"slloainha\"]").val(loainhaid)
        $("select[name=\"slkhunggia\"]").val(khunggiaid);
       
});
   
 </script>
 
 
 <script type="text/javascript">
 
 
 </script>
{/literal}

{/block}




{block name="content"}
{literal}
 
 
 
 {/literal}



<div class="box round first grid">
 <h2>
  Sửa Tin Đăng</h2>
 <div class="block ">
  {if isset($tindang)}
  <form action="" method="POST">
   <table class="form">
    <tbody>
     <tr>
      <td class="col1">
       <label>
        Tiêu đề</label>
      </td>
      <td class="col2">
       <input type="text" name="txtTitle" value={$tindang.Title} id="grumble">
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
        Số điện thoại</label>
      </td>
      <td class="col2">
       <input type="text" name="txtphone" value={$tindang.PhoneNumber} id="grumble">
      </td>
     </tr>
     <tr>
      <td>  <label>Nội dung</label></td>
      <td> <textarea name="txtContent" cols="50" rows="15">{$tindang.Content}</textarea></td>

     </tr>
     
			<tr>
          <td></td>
				<td><input id="file" type="file" size="45" name="file" class="input">	

					
			
             Please select a file and click Upload button<br>
					<button class="button" id="buttonUpload" onclick="return ajaxFileUpload();">Upload</button>
               </td>
				</tr>
            <tr>
      <td class="col1">
       <label>
       Video URL<label>
      </td>
      <td class="col2">
       <input type="text" name="txtvideo" value="{$tindang.VideoURL}" id="grumble">
      </td>
     </tr>
     <tr>
      <td class="image1122">
       <label>
        Upload Image</label>
      </td>
      <td class="imageuploaded">
      
      </td>
     </tr>
     <tr>
      <td>111
      </td>
      <td>
    {literal}

    <!-- <button type="button" onclick="add()" value="1211 "> </button>-->
     
     <div id="galleria">
     </div>
      <script>
      
{/literal}
    // Load the classic theme
    Galleria.loadTheme('{$smarty.current_dir|replace:'\\':'/'}/galeria/galleria.classic.min.js');
{literal}    
    // Initialize Galleria
    Galleria.configure({
    width:400,
    height:400
});
    Galleria.run('#galleria',{
    dataSource: dataimage
     
});
  
{/literal}
    </script>
     

      </td>
     </tr>
     <tr>
      <td><label>Tỉnh</label></td>
      <td>
       <select name="slprovince" class="province" >
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
       <select name="sldistrict" class="district" >
       

       </select>
       
       
      </td>

     </tr>
   
     <tr>
      <td><label>Loại nhà</label></td>
      <td>
       <select  name="slloainha"  >
        {if isset($danhsachloainha)}
         {foreach from=$danhsachloainha item=loainha}
          <option value="{$loainha.LoainhaID}">{$loainha.TenLoaiNha}</option>
         {/foreach}
        {/if}
       </select>

    
      </td>
     </tr>
     <tr>
      <td><label>Khung giá</label></td>
      <td>
       <select  name="slkhunggia"  class="khunggia" >
        {if isset($danhsachkhunggia)}
         {foreach from=$danhsachkhunggia item=khunggia}
          <option value="{$khunggia.khunggiaid}">{$khunggia.KhungGiaName}</option>
         {/foreach}
        {/if}
       </select>


      </td>
     </tr>
      <tr>
      <td class="col1">
       <label>
         Địa chỉ</label>
      </td>
      <td class="col2">
       <input type="text" name="txtdiachi" id="grumble" value="{$tindang.address}">
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
       Giá nhà (viết bằng chữ)</label>
      </td>
      <td class="col2">
       <input type="text" name="txtgianha" id="grumble" value="{$tindang.GiaNha}">
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
       Tọa độ x</label>
      </td>
      <td class="col2">
       <input type="text" name="txttoadox" id="grumble" value="{$tindang.lat}" >
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
        Tọa độ y</label>
      </td>
      <td class="col2">
       <input type="text" name="txttoadoy" id="grumble" value="{$tindang.lng}">
      </td>
     </tr>
      <tr>
      <td class="col1">
      
      </td>
      <td class="col2">
      <button type="submit" value="Submit" >Gửi tin</button>
      </td>
     </tr>

    </tbody></table>
 
       
  </form>

    
		{/if}
       
		
			
	
	
 </div>
 {/block}