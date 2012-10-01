{extends file="layout.tpl"}


{block name="content"}


  
  
  <div class="box round first grid">
                <h2>
                    Tables &amp; Grids</h2>
                <div class="block">
                    
                    
                    
                    <div class="dataTables_wrapper" id="example_wrapper"><div id="example_length" class="dataTables_length"><label>Show <select size="1" name="example_length"><option value="10" selected="selected">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div class="dataTables_filter" id="example_filter"><label>Search: <input type="text"></label></div><table class="data display datatable" id="example">
					<thead>
						<tr><th class="sorting_asc" rowspan="1" colspan="1" style="width: 53px; ">User ID</th><th class="sorting" rowspan="1" colspan="1" style="width: 265px; ">Browser</th><th class="sorting" rowspan="1" colspan="1" style="width: 249px; ">Platform(s)</th><th class="sorting" rowspan="1" colspan="1" style="width: 179px; ">Engine version</th><th class="sorting" rowspan="1" colspan="1" style="width: 129px; ">CSS grade</th></tr>
					</thead>
					
				<tbody>
              {foreach from=$danhsachthanhvien item=thanhvien}
             
             <tr class="gradeA odd">
                     <td class="center">{$thanhvien.UserID}</td>
							<td class=" sorting_1">{$thanhvien.Email}</td>
							<td>{$thanhvien.Password}</td>
							 <td> <a href="changepass.php?userid={$thanhvien.UserID}"> <button class="btn btn-teal" >Sửa mật khẩu</button> </a> </td>
						  <td> <a href="?action=delete&userid={$thanhvien.UserID}"> <button class="btn btn-teal" >Xóa</button> </a> </td>
						</tr>
                  
                  
                
                 {/foreach}  
              <tr class="gradeA even">
							<td class=" sorting_1">Gecko</td>
							<td>Firefox 1.5</td>
							<td>Win 98+ / OSX.2+</td>
							<td class="center">1.8</td>
							<td class="center">A</td>
						</tr>
            </tbody>
                     
                     
                     
                     </table>
                     
                     
                     
                     <div class="dataTables_info" id="example_info">Showing 1 to 10 of 57 entries</div><div class="dataTables_paginate paging_two_button" id="example_paginate"><div class="paginate_disabled_previous" title="Previous" id="example_previous"></div><div class="paginate_enabled_next" title="Next" id="example_next"></div></div></div>
                    
                    
                    
                </div>
            </div>



{/block}