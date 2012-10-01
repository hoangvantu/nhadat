{block name="java"}
<script type="text/javascript">
    $('head').append('<link rel="stylesheet" href="css/style2.css" type="text/css" />');
</script> 
{/block}





{block name="suatin"}


{if isset($tindang)}
<!--TinyMCE original-->
	<form method="post" action="">
	    <input type="hidden" name="action" value="ad_update"/>
	    <table>
		<tr height="30">
		    <td valign="top"><strong>Ti&ecirc;u &#273;&#7873;</strong>:</td>
		    <td width="91%" valign="top"><input tooltipText="Vui l." id="ad_title" autocomplete="off" type="text" name="ad_title" maxlength="100" class="txt" value="{$tindang.Title}" onkeypress="return tieude_press(event);" style="width:500px; height:20px"> <span class="risk">*</span></td>
		</tr>
		<tr height="30">
		    <td valign="top">Điện thoại</td>
		    <td valign="top">
			<input tooltipText="Vui lòng nhập số điện thoại để khách hàng có thể liên hệ. Số điện thoại chỉ được phép là kiểu số, tối đa 12 ký tự và tối thiểu 9 ký tự." type="text" name="ad_mobile" maxlength="15" onkeypress="return shop.numberOnly(this, event)" value="{$tindang.PhoneNumber}" id="ad_mobile" style="width:195px; height:20px"/>
			<span class="risk">*</span> <a href=" http://blog.rongbay.com/2011/11/21/nhap-so-dien-thoai-khi-dang-tin-moi/" title="Tìm hiểu thêm" target="_blank"><img src="style/images/help_icon.gif"></a>
		    </td>
		</tr>

		<tr>
		    <td> Chọn tỉnh thành</td>
		    <td>
			<select style="width:200px" class="txt" name="ad_cat_id" id="ad_cat_id" >
			    <option value="0"></option>
			    <option value="0"></option>
			    <option value="0"></option>
			    <option value="0"></option>
			    <option value="0"></option>

			</select>
		    </td>
		</tr>
		<tr>
		    <td> Chọn quận huyện</td>
		    <td>
			<select style="width:200px" class="txt" name="DistrictID" id="DistrictID" >
			    <?php
			    $sql = "select * from district ";
			    $ds = mysql_query($sql);
			    while ($pt = mysql_fetch_array($ds)) {
				?>
            {foreach from=$danhsachquan item=foo}
	    		    <option  {if $foo.districtid == $tindang.DistrictID} selected="selected" {/if} value="{$foo.districtid}">{$foo.districtname} </option>
				<?php
			    }
			    ?>
             {/foreach}
			</select>
		    </td>
		</tr>
		<tr>
		    <td colspan="3"><strong>N&#7897;i dung &#273;&#259;ng </strong> <span class="risk">*</span></td>
		</tr>	
		<tr>

		    <td colspan="3">
			<!-- Gets replaced with TinyMCE, remember HTML in a textarea should be encoded -->
			<textarea id="elm1" name="elm1" rows="15" cols="80" style="width: 100%">
			   {$tindang.Content}
			</textarea>
		    </td>
		</tr>
	    </table>    


	    <br />
	    <input type="submit" name="save" value="Submit" />
	    <input type="reset" name="reset" value="Reset" />


	</form>
            {else}
              Nội dung này không tồn tại hoặc có thể đã bị xóa khỏi trang web.
{/if}


{/block}