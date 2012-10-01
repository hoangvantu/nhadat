

<?php
include_once('connect.php');
include 'function.php';
require_once '/includes/sm_config.php';
$db = new dbmanager();
$db->connect();
$qlgiaodien->assign('page_title', 'Quan ly tin dang');


$sql = 'SELECT * FROM NEWS order by DateTime DESC';
$danhsachnha = $db->getAll($sql);
$qlgiaodien->assign('danhsachnha',$danhsachnha);
$qlgiaodien->display("quanlytindang.tpl");
?>