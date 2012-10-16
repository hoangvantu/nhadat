<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="vi" lang="vi">
<head>
    {block name="title"}
<title>{$page_title}</title>
{/block}
<link rel="shortcut icon" href="/themes/favicon.png" type="image/x-icon" />
{block name="java"}
  <script src="{$smarty.current_dir|replace:'\\':'/'}/jquery-1.6.4.min.js"></script>
  
<script type="text/javascript" src="{$smarty.current_dir}/sites/default/files/js/js_589871593f149c3b07e4e337276416ea.jsmin.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, { "basePath": "/", "dhtmlMenu": { "slide": "slide", "siblings": "siblings", "relativity": "relativity", "children": "children", "doubleclick": "doubleclick", "clone": 0 }, "googleanalytics": { "trackOutgoing": 1, "trackMailto": 1, "trackDownload": 1, "trackDownloadExtensions": "7z|aac|avi|csv|doc|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xml|zip" }, "cron": { "basePath": "/poormanscron", "runNext": 1348145025 }, "tabs": { "slide": false, "fade": false, "speed": "fast", "auto_height": false, "next_text": "next", "previous_text": "previous" } });
//--><!]]>
</script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
$().ready(function() {
    $("#edit-new-keywords").autocomplete([  ], { "minChars": 0 });
  })
//--><!]]>
</script>
    <!--[if lte IE 7]><link type="text/css" rel="stylesheet" media="all" href="sites/all/themes/framework/fix-ie.css" /><![endif]--><!--If Less Than or Equal (lte) to IE 7-->
  <script type="text/javascript">
  {literal}
   $(document).ready(function(){
function changeprovince(provinceid)
 {
  $.post("session.php",{data:provinceid});
   
 }
  $.getJSON('ajax_request.php' ,{action:'getquan',provinceid:$('#current_province').val()},function(data){
               $.each(data, function(index) {
               // alert(data[index].districtid);
               $("#current_district").append("<option value=\""+data[index].districtid+"\">"+data[index].districtname+"</option>");
          });

});
  
$('#current_province').change(function(){

var provinceid = $('#current_province').val();
changeprovince(provinceid);
$.getJSON('ajax_request.php' ,{action:'getquan',provinceid:$(this).val()},function(data){
  $("#current_district").html("");
               $.each(data, function(index) {
               // alert(data[index].districtid);
               $("#current_district").append("<option value=\""+data[index].districtid+"\">"+data[index].districtname+"</option>");
          });

});



});

});
  
  {/literal}
    </script>
 {/block}
 {block name="metadata"}
 {include file="headermeta.tpl"}
 {/block}
 {block name="cssfile"}
 {include file="headercss.tpl"}
 
 {/block}
</head>