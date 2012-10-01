{block name="java"}


{literal}
 <script src="jscripts/jquery.js"></script>
 <script type="text/javascript">
     var http_request = false;
     function uptin(newsid)
     {
    //$.post("ajax_request.php",{action:'uptin',idtin:newsid})
    $.post("ajax_request.php",{action:'uptin',idtin:newsid},
    function(json) 
    {
        /*
        for(var key in data) {
       alert(data[key]);
        }
        */
       if(json.msg!='thanhcong')
           {
          alert(json.msg);
          location.reload();
           }
    }
     ,"json")
     }
     function deletenews(newsid)
     {
    if(!confirm('Bạn có chắc muốn xóa không?')){return false};
    $.post("ajax_request.php",{action:'xoatin',idtin:newsid},
    function(json) 
    {
        /*
        for(var key in data) {
       alert(data[key]);
        }
        */
       if(json.msg!='thanhcong')
           {
          alert(json.msg);
          location.reload();
           }
    }
     ,"json")
	
     }
     function process(data)
     {
    alert(data);
     }
 </script>
{/literal}

{/block}



{block name="noidungquanly"}
   {if isset($danhsachnha)}
 {foreach from=$danhsachnha item=foo}
  <table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid #C9C9C9;margin-top:4px">
   <tbody><tr>
     <td align="right" valign="top">                                     
      <input name="check_manage_transaction_product[]" type="checkbox" id="check_manage_transaction_product_17340186" value="17340186" style="margin:5px 0 0 5px;cursor:pointer;">
     </td>
     <td style="padding:4px" width="108" valign="top">
      <div align="center" style="width:100px;height:120px;background:url(style/images/no-images-69x53.jpg) center 50% no-repeat;">
       <a href="view.php?=" target="_blank"><img src="style/images/spacer.gif" width="100" height="120" border="0"></a>
      </div>
     </td>
     <td valign="top" style="padding:8px">					
      <div align="left" style="width:636px;float:left;padding-bottom:8px;border-bottom:1px solid #C9C9C9">
       <div style="width:415px;*width:508px;float:left">
        <a href="?action=view&newsid={$foo.NewsID}" style="color:#3B5A9A;font-weight:bold;font-size:13px;display:block;float:left" id="re_ad_17340186" onmouseover="re_ad_tip(this.id, '&lt;center&gt;Soạn tin &lt;span style=\'color:#F10000;font-size:15px\'&gt;&lt;strong&gt;RBD 17340186&lt;/strong&gt;&lt;/span&gt; gửi &lt;span style=\'color:#F10000;font-size:15px\'&gt;&lt;strong&gt;8701&lt;/strong&gt;&lt;/span&gt; (15.000VNĐ/sms)&lt;br /&gt;để được 15 lần tự động đưa tin này lên đầu trang 1&lt;/center&gt;',1);" onmouseout="re_ad_tip(this.id)">{$foo.Title}</a>           
       </div>
      </div>
      <div class="c"></div>				
      <div align="left" class="p_info" style="line-height:180%">
       <strong><font color="#6B6B6B">ID tin:</font> <font color="#C00C00">{$foo.NewsID}</font></strong> -

       Xem: <span class="high_light" id="ad_view_17340186">{$foo.ViewCount}</span> - Đăng: <span class="high_light">{$foo.DateTime}</span> - Làm mới: <span class="high_light">{$foo.DateTime}</span>
       <br>

       Mục: <a href="/Ha-Noi/Cho-thue-Nha-o-Nha-tro-Thue-va-cho-thue-nha-c272-t634-n242.html">Cho thuê - Nhà ở/ Nhà trọ | Thuê và cho thuê nhà</a>

      </div>
      <div align="left" style="width:100%;float:left;padding-top:10px;border-top:1px solid #C9C9C9">
       <div style="width:100%;float:left">
        <a class="p_action up_action upcat_272" id="up_action_17340186" href="javascript:void(0);" onclick="uptin({$foo.NewsID})" lang="1" upcat="272" title="Còn lượt up Buổi sáng, 0 lượt up trong tài khoản!" style="color: rgb(0, 255, 0); "><strong ">Up tin</strong></a>
        |

        <a class="p_action" title="Xóa tin" onclick="deletenews({$foo.NewsID})" href="javascript:void(0);">Xóa</a>

        |
        <a class="p_action" title="Sửa tin" href="?action=edit&newsid={$foo.NewsID}" target="_blank">Sửa</a>
        | <a class="p_action" title="Reset lượt xem của tin đăng" onclick="javacript: reset_view(17340186)">Reset view</a>



        <div class="fr" style="width:410px">
         <b>Lịch up tin:</b> 
         <span id="schedule_on_17340186" style="color:#FF8C03">
          <a style="color:#00F" onclick="schedule_config(17340186,0);" class="p_action"><b>Lên lịch up tin</b></a>
         </span>
         <span id="schedule_off_17340186" style="display:none;">

          <a style="color:#00F" onclick="schedule_config(17340186,0);" class="p_action"><b>Sửa lịch up</b></a>
          |

          <a style="color:#0F0;" onclick="schedule_active(17340186,1);" class="p_action" id="schedule_active_17340186"><b>Kích hoạt</b></a>

          <a style="color:#F60;display:none" onclick="schedule_active(17340186,0);" class="p_action" id="schedule_stop_17340186"><b>Tạm dừng</b></a>
          |
          <a style="color:#c00" onclick="schedule_active(17340186,-1);" class="p_action"><b>Xoá lịch up</b></a>
         </span>
         <div class="c"></div>
        </div>
       </div>

      </div>
     </td>
    </tr>
   </tbody></table>


 {/foreach}
{/if}
{/block}