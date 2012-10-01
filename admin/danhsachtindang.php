<?php

include_once('../connect.php');
require_once '../includes/sm_config_admin.php';
$db = new dbmanager();
$db->connect();
$sql="SELECT *  FROM  `news`";
$danhsachtindang =  $db->getAll($sql);
//print_r($danhsachtindang);
$qlgiaodien->assign('danhsachtindang',$danhsachtindang);
$giaodien = 'danhsachtindang.tpl';
$qlgiaodien->assign('page_title', "Danh sách tin đăng");

$qlgiaodien->display($giaodien);


?>
