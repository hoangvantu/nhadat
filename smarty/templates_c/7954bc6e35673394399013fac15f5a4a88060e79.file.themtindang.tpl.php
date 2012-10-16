<?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 06:51:12
         compiled from "..\smarty\templates\styleAdmin\blueadmin\themtindang.tpl" */ ?>
<?php /*%%SmartyHeaderCode:3124350705d8c445422-77186520%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7954bc6e35673394399013fac15f5a4a88060e79' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\themtindang.tpl',
      1 => 1350344476,
      2 => 'file',
    ),
    '5c9b732e7a183b501f3719781b8bd998024ce21e' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\layout.tpl',
      1 => 1350362906,
      2 => 'file',
    ),
    '8a48e3331a7d9f9f03f5e1db17b60f3bf0d666b7' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\headcss.tpl',
      1 => 1349448012,
      2 => 'file',
    ),
    '0fc3d3f5d0caae3f65ebc50f770b3e2d52a1d326' => 
    array (
      0 => '..\\smarty\\templates\\styleAdmin\\blueadmin\\headjava.tpl',
      1 => 1350363007,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3124350705d8c445422-77186520',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.11',
  'unifunc' => 'content_50705d8cdb07c0_75708405',
  'variables' => 
  array (
    'page_title' => 0,
    'name' => 0,
    'quyenhan' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_50705d8cdb07c0_75708405')) {function content_50705d8cdb07c0_75708405($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <meta http-equiv="content-type" content="text/html; charset=utf-8" />

 <title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
</title>
 
<?php /*  Call merged included template "headcss.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headcss.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '3124350705d8c445422-77186520');
content_507d03e08cbbf4_10784454($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headcss.tpl" */?>
 

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
        
 <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/juploader/fileuploader.css" media="screen" />

 
            <?php /*  Call merged included template "headjava.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("headjava.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0, '3124350705d8c445422-77186520');
content_507d03e0c85df1_70580310($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "headjava.tpl" */?>
 

<script type="text/javascript" src="../jscripts/tiny_mce/tiny_mce.js"></script>

<script type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/ajaxuploader/ajaxfileupload.js"></script>  

<script type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/galeria/dump.js"></script>
     <script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/galeria/galleria-1.2.8.min.js"></script>
          <script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/jquery-1.6.4.min.js"></script>

 
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
      $.getJSON('../ajax_request.php' ,{action:'getquan',provinceid:$(".province").val()},function(data){
               $.each(data, function(index) {
               // alert(data[index].districtid);
               $(".district").append("<option value=\""+data[index].districtid+"\">"+data[index].districtname+"</option>");
          });

}); 
       
      $(".province").change(function(data)
         {  $(".district").html("");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            $.getJSON('../ajax_request.php' ,{action:'getquan',provinceid:$(this).val()},function(data){
               $.each(data, function(index) {
               // alert(data[index].districtid);
              
               $(".district").append("<option value=\""+data[index].districtid+"\">"+data[index].districtname+"</option>");
          });

});
            
         }
         );
          
          
          
                
     
     


          
          
          
});
   
 </script>
 
 
 <script type="text/javascript">
 
 
    
 
 
 </script>



 
 </head>
 <body>
 <div class="container_12">
        <div class="grid_12 header-repeat">
            <div id="branding">
                <div class="floatleft">
                    <img src="<?php echo dirname($_smarty_tpl->source->filepath);?>
/img/logo.png" alt="Logo" /></div>
                <div class="floatright">
                    <div class="floatleft">
                        <img src="<?php echo dirname($_smarty_tpl->source->filepath);?>
/img/img-profile.jpg" alt="Profile Pic" /></div>
                    <div class="floatleft marginleft10">
                        <ul class="inline-ul floatleft">
                            <li>Hello <?php if (isset($_smarty_tpl->tpl_vars['name']->value)){?><?php echo $_smarty_tpl->tpl_vars['name']->value;?>
<?php }?></li>
                            <li><a href="#">Config</a></li>
                            <li><a href="logout.php">Logout</a></li>
                        </ul>
                        <br />
                        <span class="small grey">Last Login: 3 hours ago</span>
                    </div>
                </div>
                <div class="clear">
                </div>
            </div>
        </div>
        <div class="clear">
        </div>
        <div class="grid_12">
            <ul class="nav main">
                <li class="ic-dashboard"><a href="index.php"><span>Bảng quản trị</span></a> </li>
                <li class="ic-form-style"><a href="javascript:"><span>Controls</span></a>
                    <ul>
                        <li><a href="form-controls.html">Forms</a> </li>
                        <li><a href="buttons.html">Buttons</a> </li>
                        <li><a href="form-controls.html">Full Page Example</a> </li>
                        <li><a href="table.html">Page with Sidebar Example</a> </li>
                    </ul>
                </li>
				<li class="ic-typography"><a href="typography.html"><span>Typography</span></a></li>
                <li class="ic-charts"><a href="charts.html"><span>Charts & Graphs</span></a></li>
                <li class="ic-grid-tables"><a href="table.html"><span>Data Table</span></a></li>
                <li class="ic-gallery dd"><a href="javascript:"><span>Image Galleries</span></a>
               		 <ul>
                        <li><a href="image-gallery.html">Pretty Photo</a> </li>
                        <li><a href="gallery-with-filter.html">Gallery with Filter</a> </li>
                    </ul>
                </li>
                <li class="ic-notifications"><a href="notifications.html"><span>Notifications</span></a></li>

            </ul>
        </div>
        <div class="clear">
        </div>
        <div class="grid_2">
            <div class="box sidemenu">
                <div class="block" id="section-menu">
                    <ul class="section menu">
                        <li><a class="menuitem">Quản lý tài khoản</a>
                            <ul class="submenu">
                                <li><a class="active">Thay đổi mật khẩu</a> </li>
                                <li><a>Thay đổi thông tin cá nhân</a> </li>
                                
                            </ul>
                        </li>
                     <?php if (isset($_smarty_tpl->tpl_vars['quyenhan']->value)){?>
                      <?php if ($_smarty_tpl->tpl_vars['quyenhan']->value==0){?>
                        <li><a class="menuitem">Quản lý thành viên</a>
                            <ul class="submenu">
                                <li><a  href="danhsachthanhvien.php">Danh sách thành viên</a> </li>
                                <li><a href="themthanhvien.php">Thêm thành viên</a> </li>
                               
                            </ul>
                        </li>
                     <?php }?>
                     <?php }?>
                        <li><a class="menuitem">Quản lý tin đăng</a>
                            <ul class="submenu">
                                <li><a href="danhsachtindang.php">Danh sách tin đăng</a> </li>
                                <li><a href="themtindang.php">Thêm tin đăng</a> </li>
                               
                            </ul>
                        </li>
                       
                      <li><a class="menuitem">Quản lý danh mục</a>
                            <ul class="submenu">
                                <li><a href="danhsachtinhthanh.php">Danh sách tỉnh thành</a> </li>
                               
                                <li><a href="danhsachnhucau.php">Danh sách nhu cầu</a> </li>		
                                <li><a href="danhsachkhunggia.php">Danh sách khung giá</a> </li>
                                <li><a href="danhsachloainha.php">Danh sách loại nhà</a> </li>
                            </ul>
                        </li>
                        <li><a class="menuitem">Hộp thư</a>
                            <ul class="submenu">
                                <li><a href="tinnhanden.php">Tin nhắn đến</a> </li>
                                <li><a href="tinnhandi.php">Tin nhắn đã gửi</a> </li>		
                                 <li><a href="guitinnhan.php">Gửi tin nhắn</a> </li>		
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="grid_10">
      
	  

 
 
 
 



<div class="box round first grid">
 <h2>
  Thêm Tin Đăng</h2>
 <div class="block ">
  
  <form action="" method="POST">
   <table class="form">
    <tbody>
     <tr>
      <td><label>Tỉnh</label></td>
      <td>
       <select name="slprovince" class="province" >
        <?php if (isset($_smarty_tpl->tpl_vars['danhsachtinh']->value)){?>
         <?php  $_smarty_tpl->tpl_vars['tinh'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['tinh']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachtinh']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['tinh']->key => $_smarty_tpl->tpl_vars['tinh']->value){
$_smarty_tpl->tpl_vars['tinh']->_loop = true;
?>
          <option value="<?php echo $_smarty_tpl->tpl_vars['tinh']->value['ProvinceID'];?>
"><?php echo $_smarty_tpl->tpl_vars['tinh']->value['ProvinceName'];?>
</option>
         <?php } ?>
        <?php }?>
       </select>


      </td>
     </tr>
     <tr>
      <td><label>Quận/Huyện</label></td>
      <td>
       <select name="sldistrict" class="district" required title="Bạn chưa chọn quận huyện" >
       

       </select>
      </td>

     </tr>
     <tr>
      <td><label>Loại nhà</label></td>
      <td>
       <select  name="slloainha" required title="Bạn chưa chọn loại nhà"  >
         <option value=""></option>
        <?php if (isset($_smarty_tpl->tpl_vars['danhsachloainha']->value)){?>
         <?php  $_smarty_tpl->tpl_vars['loainha'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['loainha']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachloainha']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['loainha']->key => $_smarty_tpl->tpl_vars['loainha']->value){
$_smarty_tpl->tpl_vars['loainha']->_loop = true;
?>
          <option value="<?php echo $_smarty_tpl->tpl_vars['loainha']->value['LoainhaID'];?>
"><?php echo $_smarty_tpl->tpl_vars['loainha']->value['TenLoaiNha'];?>
</option>
         <?php } ?>
        <?php }?>
       </select>


      </td>
     </tr>
     <tr>
      <td><label>Khung giá</label></td>
      <td>
       <select required  name="slkhunggia" required title="Bạn chưa chọn khung giá" >
         <option value=""></option>
        <?php if (isset($_smarty_tpl->tpl_vars['danhsachkhunggia']->value)){?>
         <?php  $_smarty_tpl->tpl_vars['khunggia'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['khunggia']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['danhsachkhunggia']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['khunggia']->key => $_smarty_tpl->tpl_vars['khunggia']->value){
$_smarty_tpl->tpl_vars['khunggia']->_loop = true;
?>
          <option value="<?php echo $_smarty_tpl->tpl_vars['khunggia']->value['khunggiaid'];?>
"><?php echo $_smarty_tpl->tpl_vars['khunggia']->value['KhungGiaName'];?>
</option>
         <?php } ?>
        <?php }?>
       </select>


      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
        Tiêu đề</label>
      </td>
      <td class="col2">
       <input type="text" name="txtTitle" class="large" id="grumble" required title="Tiêu đề không được bỏ trông"/ >
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
        Số điện thoại</label>
      </td>
      <td class="col2">
       <input type="text" name="txtphone" id="grumble" pattern="[0-9]{10,11}" title="Số điện thoại bao gồm 10 hoặc 11 chữ số" required/>
      </td>
     </tr>
     <tr>
      <td>  <label>Nội dung</label></td>
      <td> <textarea name="txtContent" cols="50" rows="15"  required="required">1</textarea></td>

     </tr>
      <tr>
      <td class="col1"  required>
       <label>
       Video URL<label>
      </td>
      <td class="col2">
       <input type="text" name="txtvideo"  id="grumble">
      </td>
     </tr>
			<tr>
          <td></td>
				<td><input id="file" type="file" size="45" name="file" class="input">	

					
			
             Please select a file and click Upload button<br>
					<button class="button" id="buttonUpload" onclick="return ajaxFileUpload();">Upload</button>
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
      <td>
      </td>
      <td>
    

    <!-- <button type="button" onclick="add()" value="1211 "> </button>-->
     
     <div id="galleria">
     </div>
      <script>
      

    // Load the classic theme
    
    Galleria.loadTheme('<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/galeria/galleria.classic.min.js');
    
    // Initialize Galleria
    Galleria.configure({
    width:400,
    height:400
});
    Galleria.run('#galleria',{
    dataSource: dataimage
     
});
  

    </script>
     

      </td>
     </tr>
     
      <tr>
      <td class="col1">
       <label>
         Địa chỉ</label>
      </td>
      <td class="col2">
       <input type="text" name="txtdiachi" id="grumble" required="required">
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
       Giá nhà (viết bằng chữ)</label>
      </td>
      <td class="col2">
       <input type="text" name="txtgianha" id="grumble" required="required">
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
       Tọa độ x</label>
      </td>
      <td class="col2">
       <input type="text" name="txttoadox" id="grumble">
      </td>
     </tr>
     <tr>
      <td class="col1">
       <label>
        Tọa độ y</label>
      </td>
      <td class="col2">
       <input type="text" name="txttoadoy" id="grumble">
      </td>
     </tr>
      <tr>
      <td class="col1">
      
      </td>
      <td class="col2">
       
      <button type="submit" value="Submit" > <input type="submit"  /> </button>
      </td>
     </tr>

    </tbody></table>
 
       
  </form>

    
		 <div id="disqus_thread"></div>
        <script type="text/javascript">
            /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
            var disqus_shortname = 'hongvnt'; // required: replace example with your forum shortname

            /* * * DON'T EDIT BELOW THIS LINE * * */
            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
        
       
		
			
	
	
 </div>
 
	  
            </div>
        </div>
        <div class="clear">
        </div>
    </div>
	 <div class="clear">
    </div>
	   <div id="site_info">
        <p>
            Copyright <a href="#">BlueWhale Admin</a>. All Rights Reserved.
        </p>
    </div>
 
 
 
 </body>
 </html><?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 06:51:12
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headcss.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d03e08cbbf4_10784454')) {function content_507d03e08cbbf4_10784454($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
?> <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/reset.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/text.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/grid.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/layout.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/nav.css" media="screen" />
    <!--[if IE 6]><link rel="stylesheet" type="text/css" href="css/ie6.css" media="screen" /><![endif]-->
    <!--[if IE 7]><link rel="stylesheet" type="text/css" href="css/ie.css" media="screen" /><![endif]-->
  <?php }} ?><?php /* Smarty version Smarty-3.1.11, created on 2012-10-16 06:51:12
         compiled from "..\smarty\templates\styleAdmin\blueadmin\headjava.tpl" */ ?>
<?php if ($_valid && !is_callable('content_507d03e0c85df1_70580310')) {function content_507d03e0c85df1_70580310($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_replace')) include 'C:\\wamp\\www\\nhadat\\includes\\smarty\\plugins\\modifier.replace.php';
?><!-- BEGIN: load jquery -->
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-1.6.4.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-ui/jquery.ui.core.min.js"></script>
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-ui/jquery.ui.widget.min.js" type="text/javascript"></script>
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-ui/jquery.ui.accordion.min.js" type="text/javascript"></script>
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-ui/jquery.effects.core.min.js" type="text/javascript"></script>
<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jquery-ui/jquery.effects.slide.min.js" type="text/javascript"></script>
<!-- END: load jquery -->
<!-- BEGIN: load jqplot -->
<link rel="stylesheet" type="text/css" href="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/css/jquery.jqplot.min.css" />
<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/excanvas.min.js"></script><![endif]-->
<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/jquery.jqplot.min.js"></script>

<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/plugins/jqplot.barRenderer.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/plugins/jqplot.pieRenderer.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/plugins/jqplot.categoryAxisRenderer.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/plugins/jqplot.highlighter.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/jqPlot/plugins/jqplot.pointLabels.min.js"></script>
<!-- END: load jqplot -->

<script src="<?php echo smarty_modifier_replace(dirname($_smarty_tpl->source->filepath),'\\','/');?>
/js/setup.js" type="text/javascript"></script>

 <script type="text/javascript">
         
    $(document).ready(function () 
    {
     
     
        setupLeftMenu();
       setSidebarHeight();
           
           
    });
 </script>
<?php }} ?>