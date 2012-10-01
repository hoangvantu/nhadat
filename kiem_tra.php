<?php
if(empty($_GET['username'])) exit;
$db = mysql_connect("localhost","root","");
if(!$db)
{
echo "Không thể kết nối được dữ liệu";
exit;
}
$db_selected = mysql_select_db("nhadat",$db);
if(!$db_selected)
{
die ("Không thể sử dụng CSDL : ". mysql_error());
}
$sql = "SELECT * FROM user WHERE email='".$_GET['username']."'";
$query = mysql_query($sql);
$kiem_tra =mysql_num_rows($query);
if($kiem_tra == NULL)
{
echo "NO";
}
else
{
echo "YES";
}