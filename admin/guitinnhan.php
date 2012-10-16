<?php
require_once 'global.php';
$qlgiaodien->assign('page_title', 'Hộp thư đến');
$error="";

if(!empty($_GET['nguoinhan']))
{
  if($db->getRow("select * from user where `userid`=".$_GET['nguoinhan']))
   $qlgiaodien->assign('nguoinhan',$_GET['nguoinhan']);
}

if(!empty($_POST['btnsubmit']))
{
 if(!empty($_POST['txtreceiverid']))
 {
 if(!empty($_POST['txttitle'])&&!empty($_POST['txtContent']))
 {
  $title=$_POST['txttitle'];
  $noidung=$_POST['txtContent'];
  $nguoigui=$_SESSION['userid'];
  $nguoinhan=$_POST['txtreceiverid'];
   $sql="INSERT INTO `nhadat`.`message` (`messageid`, `title`, `content`, `datetime`, `senderid`, `receiverid`, `flow`) VALUES (NULL, '$title', '$noidung', CURRENT_TIMESTAMP, '$nguoigui', '$nguoinhan', NULL);";
   $db->querry($sql);
   header("location:tinnhandi.php");
 }
 else
 {
  $error.="Chưa điền đầy đủ thông tin";
 };
 }
 else
 {
  $error="Không xác định người nhận";
 }
}
if($error!='')
{
 
}
$qlgiaodien->assign('error',$error);
$qlgiaodien->display('guitinnhan.tpl');
?>
