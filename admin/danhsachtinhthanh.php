<?php
include_once('../connect.php');
include '../function.php';
require_once '../includes/sm_config_admin.php';
$db = new dbmanager();
$db->connect();
$qlgiaodien->assign('page_title',"Danh sách tỉnh thành");
//$qlgiaodien->debugging= true;
if(isset($_GET['action'])&&isset($_GET['provinceid']))
{
   $db->province_delete($_GET['provinceid']);
}

$sql="select * from `province`";
$danhsachtinhthanh=  $db->getAll($sql);
$qlgiaodien->assign('danhsachtinhthanh',$danhsachtinhthanh);

$qlgiaodien->display('danhsachtinhthanh.tpl')











?>