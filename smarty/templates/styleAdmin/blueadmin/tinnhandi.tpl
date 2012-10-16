{extends file="layout.tpl"}


 {block name="content" }
  
  <div class="dataTables_wrapper" id="example_wrapper"><div id="example_length" class="dataTables_length"><label>Show <select size="1" name="example_length"><option value="10" selected="selected">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div class="dataTables_filter" id="example_filter"><label>Search: <input type="text"></label></div><table class="data display datatable" id="example">
					<thead>
						<tr><th class="sorting_asc" rowspan="1" colspan="1" style="width: 70px; ">Mã tin nhắn</th><th class="sorting" rowspan="1" colspan="1" style="width: 465px; ">Tiêu đề</th><th class="sorting" rowspan="1" colspan="1" style="width: 249px; ">Người nhận</th><th class="sorting" rowspan="1" colspan="1" style="width: 179px; ">Thời gian gửi</th> </tr>
					</thead>
					
				<tbody>
             {if isset($danhsachtin)}
             {foreach from=$danhsachtin item=tin}
             <tr class="gradeA odd">
							<td class=" sorting_1">{$tin.messageid}</td>
							<td>{$tin.title}</td>
							<td>{$tin.Name}</td>
							<td class="center">{$tin.datetime}</td>
							
						</tr>
                  {/foreach}
                  {/if}
             </tbody></table><div class="dataTables_info" id="example_info">Showing 1 to 10 of 57 entries</div><div class="dataTables_paginate paging_two_button" id="example_paginate"><div class="paginate_disabled_previous" title="Previous" id="example_previous"></div><div class="paginate_enabled_next" title="Next" id="example_next"></div></div></div>
{/block}