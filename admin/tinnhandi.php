<?php
require_once 'global.php';
$qlgiaodien->assign('page_title', 'Hộp thư đến');

$sql = "SELECT  `messageid` ,  `title` ,  `content` ,  `datetime` ,  `Name` FROM `user`,`message` where `userid`=`receiverid` and `senderid` =".$_SESSION['userid'];
$message= $db->getAll($sql);

$qlgiaodien->assign('danhsachtin',$message);
$qlgiaodien->display('tinnhandi.tpl');
?>
