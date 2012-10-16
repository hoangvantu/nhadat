<?php
require_once 'global.php';
$qlgiaodien->assign('page_title', 'Trang quản trị');
$qlgiaodien->assign('quyenhan',$quyenhan);


$qlgiaodien->display("index.tpl")
?>