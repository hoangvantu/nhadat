<?php
include_once('../connect.php');
include '../function.php';
require_once '../includes/sm_config_admin.php';
$db = new dbmanager();
$db->connect();
$qlgiaodien->assign('page_title',"Danh sách khung giá");
//$qlgiaodien->debugging= true;
if(isset($_GET['action'])&&isset($_GET['provinceid']))
{
   $db->province_delete($_GET['provinceid']);
}

$sql="select * from `khunggia`";
$danhsachkhunggia=  $db->getAll($sql);
$qlgiaodien->assign('danhsachkhunggia',$danhsachkhunggia);

$qlgiaodien->display('danhsachkhunggia.tpl')











?>