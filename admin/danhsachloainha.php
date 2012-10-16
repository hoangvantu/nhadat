<?php
require_once 'global.php';
$qlgiaodien->assign('page_title',"Danh sách loại nhà");
//$qlgiaodien->debugging= true;
if(isset($_GET['action'])&&isset($_GET['provinceid']))
{
   $db->province_delete($_GET['provinceid']);
}

$sql="select * from `loainha`";
$danhsachloainha=  $db->getAll($sql);
$qlgiaodien->assign('danhsachloainha',$danhsachloainha);

$qlgiaodien->display('danhsachloainha.tpl')











?>