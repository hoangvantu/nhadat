<?php
require_once 'global.php';

$qlgiaodien->assign('page_title',"Danh sách khung giá");
//$qlgiaodien->debugging= true;

$sql="select * from `khunggia`";
$danhsachkhunggia=  $db->getAll($sql);
$qlgiaodien->assign('danhsachkhunggia',$danhsachkhunggia);

$qlgiaodien->display('danhsachkhunggia.tpl')











?>