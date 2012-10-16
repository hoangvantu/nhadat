<?php
require_once 'global.php';
$qlgiaodien->assign('page_title',"Thay đổi mật khẩu");

if(isset($_GET['action'])&&isset($_GET['userid']))
{
 
  
   $db->user_delete($_GET['userid']);
}

$sql="select * from user";
$danhsachthanhvien=  $db->getAll($sql);
$qlgiaodien->assign('danhsachthanhvien',$danhsachthanhvien);

$qlgiaodien->display('danhsachthanhvien.tpl')











?>