
<?php

include_once('connect.php');
include 'function.php';
require_once '/includes/sm_config.php';
$db = new dbmanager();
$db->connect();
//$smarty->debugging = true ;
$qlgiaodien->assign('page_title', 'Quan ly tin dang');

if (isset($_POST['action'])) {
 $action = $_POST['action'];
 if ($action == 'ad_update') {
  $newsid = $_GET['newsid'];
  $tieude = $_POST['ad_title'];
  $noidung = $_POST["elm1"];
  $districid = $_POST['DistrictID'];
  $phonenumber = $_POST['ad_mobile'];
  //$provinceid = $_POST['ProvinceID'];
  $sql = "UPDATE  `nhadat`.`news` SET  `PhoneNumber` ='$phonenumber', `Title` = '$tieude',  `DistrictID`=$districid , `Content` =  '$noidung', `DateTime` =  CURRENT_TIMESTAMP  WHERE  `news`.`NewsID` =$newsid;";
  //echo$querry;
 $db->querry($sql);
 }
}
if (isset($_GET['newsid'])) {

 $sql = "select * from news where newsid=" . $_GET['newsid'];
 $tindang = $db->getRow($sql);
  $sql = "select * from district";
  $danhsachquan = $db->getAll($sql);
  $qlgiaodien->assign('danhsachquan', $danhsachquan);
//print_r($row);
 if ($tindang) {
  $qlgiaodien->assign('tindang', $tindang);
//$provinceid = $row['ProvinceID'];
//print_r($row);
  $qlgiaodien->display("suatin.tpl");
 } else 
  {
  $qlgiaodien->display("suatin.tpl");
  }
}
?>
