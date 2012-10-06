<?php

include_once('../connect.php');
include '../function.php';
require_once '../includes/sm_config_admin.php';

$db = new dbmanager();
$db->connect();
$qlgiaodien->debugging =true;
$qlgiaodien->assign('page_title', 'Thêm tin đăng');



$sql="SELECT * FROM  `province` ";
$danhsachtinh=$db->getAll($sql);
$qlgiaodien->assign('danhsachtinh',$danhsachtinh);
$sql="SELECT * FROM  `loainha` ";
$danhsachloainha=$db->getAll($sql);
$qlgiaodien->assign('danhsachloainha',$danhsachloainha);
$sql="SELECT * FROM  `khunggia` ";
$danhsachkhunggia=$db->getAll($sql);
$qlgiaodien->assign('danhsachkhunggia',$danhsachkhunggia);
$qlgiaodien->display("themtindang.tpl")
?>