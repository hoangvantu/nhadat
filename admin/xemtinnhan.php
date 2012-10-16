<?php
require_once 'global.php';
$qlgiaodien->assign('page_title', "Đọc tin nhắn");

if(!empty($_GET['matinnhan']))
{
 $sql="select * from `message` where `messageid`=".$_GET['matinnhan']." AND `receiverid`=".$_SESSION['userid'];
 
 $qlgiaodien->assign('tinnhan', $db->getRow($sql));
}

$qlgiaodien->display('xemtinnhan.tpl');
?>
