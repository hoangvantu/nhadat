<?php
include_once('connect.php');
include 'function.php';
require_once '/includes/sm_config.php';
$qlgiaodien->assign('page_title', 'Đăng tin rao vặt');
$db = new dbmanager();
$db->connect();
if (isset($_POST['elm1'])&&isset($_POST['ad_title'])) {
    $noidung = $_POST['elm1'];
    $tieude=$_POST['ad_title'];
    $phonenumber=$_POST['ad_mobile'];
   
    $sql = "INSERT INTO `nhadat`.`news` (`NewsID`, `Title`, `Content`, `DateTime`, `DistrictID`, `UserID`, `Display`,`PhoneNumber`) VALUES (NULL, '$tieude', '" . $noidung . "', CURRENT_TIMESTAMP, '5', '1', '0',$phonenumber)";
    $db->querry($sql);
    
};
$qlgiaodien->display("dangtin.tpl");
        
?>

