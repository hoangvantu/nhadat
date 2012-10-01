<?php

include_once('../connect.php');
include '../function.php';
require_once '../includes/sm_config_admin.php';

$db = new dbmanager();
$db->connect();
$qlgiaodien->assign('page_title', 'Trang quản trị');




$qlgiaodien->display("adduser.tpl")
?>