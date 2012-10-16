<?php
require_once 'global.php';
$qlgiaodien->assign('page_title', 'Hộp thư đến');

$sql = "SELECT  `messageid` ,  `title` ,  `content` ,  `datetime` , `senderid`, `Name` FROM `user`,`message` where `userid`=`senderid` and `receiverid` =".$_SESSION['userid'];
$message= $db->getAll($sql);
echo $sql;
$qlgiaodien->assign('danhsachtin',$message);
$qlgiaodien->display('tinnhanden.tpl');
?>
