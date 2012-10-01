<?php

include_once('../connect.php');
include '../function.php';
require_once '../includes/sm_config_admin.php';
$db = new dbmanager();
$db->connect();
$giaodien = 'changepass.tpl';
$qlgiaodien->assign('page_title', "Đổi mật khẩu thành viên");
$userid = $_GET['userid'];
if (isset($_POST['userid']) && isset($_POST['userid']) && isset($_POST['oldpass']) && isset($_POST['newpass'])) {
 $oldpass = $_POST['oldpass'];
 $newpass = $_POST['newpass'];
 $newpass_retype = $_POST['newpass_retype'];
 if ($newpass != $newpass_retype) {
  $pass_retype = "Hai ô mật khẩu phải khớp nhau";
  $qlgiaodien->assign('pass_retype', $pass_retype);
 } else {
  if (is_bool($thongbaoloi = $db->user_change_pass($userid, $oldpass, $newpass))) {
   // echo $userid.$oldpass.$newpass;
   //  $giaodien='change_user_pass_success.tpl';
  } else {
   $qlgiaodien->assign('thongbaoloi', $thongbaoloi);
  }
 }
}

$userid = $_GET['userid'];
$thanhvien = $db->user_getinfo($userid);

$qlgiaodien->assign('thanhvien', $thanhvien);
$qlgiaodien->debugging = true;
//$userid="3";
//$matkhau ="matkhautest";
//$sql="UPDATE  `nhadat`.`user` SET  `Password` =  '$matkhau' WHERE  `user`.`UserID` =$userid;";
//$danhsachadmin =  $db->getAll($sql);
//$smarty->assign('danhsachadmin',$danhsachadmin);
$qlgiaodien->display($giaodien);
?>