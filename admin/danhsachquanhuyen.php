<?php
include_once('../connect.php');
include '../function.php';
require_once '../includes/sm_config_admin.php';
$db = new dbmanager();
$db->connect();
$qlgiaodien->assign('page_title',"Danh sách quận huyện");
//$qlgiaodien->debugging= true;
if(isset($_GET['action'])&&isset($_GET['provinceid']))
{
   $db->province_delete($_GET['provinceid']);
}
$sql = "SELECT * FROM `province`";
$danhsachtinhthanh = $db->getAll($sql);
$qlgiaodien->assign('danhsachtinhthanh',$danhsachtinhthanh);
$sql="select * from `district`";
$danhsachquanhuyen=  $db->getAll($sql);
$qlgiaodien->assign('danhsachquanhuyen',$danhsachquanhuyen);

$qlgiaodien->display('danhsachquanhuyen.tpl')











?>