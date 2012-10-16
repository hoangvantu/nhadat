{extends file="layout.tpl"}
{block name="headjava" append}

<script src="{$smarty.current_dir|replace:'\\':'/'}/jquery.jeditable.js" type="text/javascript"></script>
{literal}
 <script type="text/javascript">
  
    $(function() { 
 $(".editable_textarea").editable("ajaxloainha.php?action=edittenloainha", { 
      indicator : "<img src='img/indicator.gif'>",
      type   : 'textarea',
      submitdata: { _method: "put" },
      select : true,
      submit : 'OK',
      cancel : 'cancel',
      cssclass : "editable"
  });
 });
  
  
  
function themmoi()
{
 if(!$(".newprovince").get(0)) 
$(".bangdanhsach").append("<tr class=\"newprovince\"><td>Điền tên </td><td><input type=\"text\"/></td><td><button onclick=\"them()\">Thêm</button></td></tr>");
}
 
 function them()
  {
  // alert($(".newprovince td:eq(1) input").val());
   var newprovince = $(".newprovince td:eq(1) input").val();
    var newprovinceid;
    $.post("ajaxloainha.php?action=addloainha", { loainhaname: newprovince},
   function(data) {
    newprovinceid=data;
   
      $(".newprovince").html("");
   $(".newprovince").remove();
    $(".bangdanhsach").append("<tr class=\"gradeA odd td"+newprovinceid+" \"><td>"+newprovinceid+"</td><td><a href=\"danhsachquanhuyen.php?provinceid="+newprovinceid+"\">"+newprovince+"</a></td>  <td>  <button class=\"btn btn-teal\" type=\"Submit\" onclick=\"xoa("+newprovinceid+")\">Xóa</button> </td>	</tr>");
   });
     
   };
    function xoa(loainhaid)
  {
   if( confirm("Bạn có muốn xóa không"))
    {
      $.post("ajaxloainha.php?action=delete", { loainhaid: loainhaid},
   function(data) {
       
       $(".td"+loainhaid).html("");
      $(".td"+loainhaid).remove();
  
 });
 }}
   
 </script>
{/literal}
{/block}




{block name="content"}




 <div class="box round first grid">
                <h2>
                    Danh sách quận huyện</h2>
                <div class="block">
                    
                    
                    
                 <div class="dataTables_wrapper" id="example_wrapper"><div id="example_length" class="dataTables_length"><label>Show <select size="1" name="example_length"><option value="10" selected="selected">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>   <button type="button"onclick="themmoi()">Thêm mới</button></div><div class="dataTables_filter" id="example_filter"><label>Search: <input type="text"></label></div><table class="data display datatable" id="example">
					<thead>
						<tr><th class="sorting_asc" rowspan="1" colspan="1" style="width: 213px; ">Rendering engine</th><th class="sorting" rowspan="1" colspan="1" style="width: 265px; ">Browser</th><th class="sorting" rowspan="1" colspan="1" style="width: 249px; ">Platform(s)</th><th class="sorting" rowspan="1" colspan="1" style="width: 179px; ">Engine version</th><th class="sorting" rowspan="1" colspan="1" style="width: 129px; ">CSS grade</th></tr>
					</thead>
					
				<tbody class="bangdanhsach">
                                    {if isset($danhsachloainha)}
                                    {foreach from=$danhsachloainha item=loainha}
             
             <tr class="gradeA odd td{$loainha.LoainhaID}">
                     <td class="center">{$loainha.LoainhaID}</td>
							
                                  <td ><div id="{$loainha.LoainhaID}" class="editable_textarea">{$loainha.TenLoaiNha}</div></td>
                                 
                                  <td>  <button class="btn btn-teal" type="Submit" onclick="xoa({$loainha.LoainhaID})">Xóa</button> </td>	
                                            
                                    
                                    </tr>
                  
                  
                
                 {/foreach}  
                 {/if}
                                              </tbody>
                        
                        </table>
                        <div class="dataTables_info" id="example_info">Showing 1 to 10 of 57 entries</div>
                        <div class="dataTables_paginate paging_two_button" id="example_paginate">
                            <div class="paginate_disabled_previous" title="Previous" id="example_previous"></div>
                            <div class="paginate_enabled_next" title="Next" id="example_next"></div>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>

{/block}