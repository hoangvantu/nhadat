<?php
require_once 'global.php';
$qlgiaodien->assign('page_title',"Danh sách nhu cầu");
//$qlgiaodien->debugging= true;


$sql="select * from `loainhucau`";
$danhsachnhucau=  $db->getAll($sql);
$qlgiaodien->assign('danhsachnhucau',$danhsachnhucau);

$qlgiaodien->display('danhsachnhucau.tpl')











?>