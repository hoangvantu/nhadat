{extends file="layout.tpl"}
{block name="headjava" append}
<script type="text/javascript" src="../jscripts/tiny_mce/tiny_mce.js"></script>
{literal}
 
 
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
 
 
 {/literal}
{/block}

 {block name="content" }
 
 <div class="box round first fullpage">
   <h2>Gửi tin nhắn</h2>
 
 
 
<div class="block ">
    {if isset($thongbaoloi)}
    <div class="message error">
                                <h5>Có lỗi khi đăng ký!</h5>
                                <p style="color:#000000">
                                    {$error}
                                </p>
                            </div>
    
    {/if}
                    <form method="post" action="">
                      
                    <table class="form" border="1">
                        
                     <tr>
                            <td class="col1">
                                <label>
                                    Người nhận</label>
                            </td>
                            <td class="col2">
                                <input type="text" disabled id="grumble " name="txtemail" value="Administrator">
                                  <input type="hidden"  id="grumble " name="txtreceiverid" value="{if isset($nguoinhan)}{$nguoinhan}{else}3{/if}">
                            </td>
                        </tr>
                    <tr>
                            <td class="col1">
                                <label>
                                    Tiêu đề:</label>
                            </td>
                            <td class="col2">
                                <input type="text" id="grumble" class="large" name="txttitle" required>
                            </td>
                        </tr>
                        
                        <tr>
                            <td class="col1">
                                <label>
                                    Nội dung:</label>
                            </td>
                            <td class="col2">
                                <textarea name="txtContent" cols="50" rows="15"  required="required"> </textarea>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                    <input type="submit" class="btn btn-purple" name="btnsubmit" value="Gửi tin nhắn"/>
                    </td>
                    </tr>
                    </table>
                    </form>
                </div>
   </div>
 
 {/block}