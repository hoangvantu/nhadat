<?php
include 'connect.php';
include 'function.php';
//include 'head/headxemtin.php';
$db = new dbmanager();
$db->connect();
require_once '/includes/sm_config.php';
$qlgiaodien->debugging =true;
if(isset($_GET['themes']))
{
$qlgiaodien->setTemplateDir('smarty/templates/'.$_GET['themes']);
};
$qlgiaodien->assign('page_title', 'Tiêu đề thử test');
$sql = "select * from district ";
$danhsachquan = $db->getAll($sql);
$qlgiaodien->assign('danhsachquan', $danhsachquan);
$sql = "select * from loainha";
$phanloainha = $db->getAll("select * from loainha");
$qlgiaodien->assign('phanloainha', $phanloainha);

if (isset($_GET['newsid'])) {
 $newsid = $_GET['newsid'];
 $sql = "select * from news where NewsID=$newsid";
 $tindang = $db->getRow($sql);
  $qlgiaodien->assign('tindang', $tindang);

 $userid = $tindang['UserID'];
 $userinfo = $db->getRow("select * from user where UserID=$userid");
 $qlgiaodien->assign('userinfo', $userinfo);

 
 
$viewcount = $tindang['ViewCount'] + 1;
$sql = "update news set ViewCount=$viewcount where newsid=$newsid";
$db->querry($sql);
}

$qlgiaodien->display('view.tpl');
?>