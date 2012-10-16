<?php
include_once 'checklogin.php';
include_once('../connect.php');
include '../function.php';
require_once '../includes/sm_config_admin.php';
$db = new dbmanager();
$db->connect();
$qlgiaodien->assign('quyenhan',$quyenhan);
$qlgiaodien->assign('name',$_SESSION['username']);


?>