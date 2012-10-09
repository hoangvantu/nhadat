<?php

if (isset($_GET['newsid'])) {
 include_once('../connect.php');
 require_once '../includes/sm_config_admin.php';
 $db = new dbmanager();
 $db->connect();
 $qlgiaodien->assign('page_title',"Sửa tin đăng");
if(isset($_POST['txtTitle']))
{
 $newsid=$_GET['newsid'];
$title=($_POST['txtTitle']);
$phone=$_POST['txtphone'];
$noidung=$_POST['txtContent'];
$provinceid=$_POST['slprovince'];
$districtid=$_POST['sldistrict'];
$loainhaid=$_POST['slloainha'];
$khunggiaid=$_POST['slkhunggia'];
$address=$_POST['txtdiachi'];
$gianha=$_POST['txtgianha'];
$lat=$_POST['txttoadox'];
$lng=$_POST['txttoadoy'];
$videourl=$_POST['txtvideo'];
$nhucauid=2;
$sql="UPDATE `nhadat`.`news` SET `Title` = '$title', `Content` = '$noidung', `DistrictID` = '$districtid', `PhoneNumber` = '$phone', `loainhaid` = '$loainhaid', `address` = '$address', `GiaNha` = '$gianha', `lat` = '$lat', `lng` = '$lng', `VideoURL` = '$videourl' ,`nhucauid`= '$nhucauid', `khunggia`='$khunggiaid' WHERE `news`.`NewsID` = $newsid";
$db->querry($sql);

}
 if(isset($_GET['newsid']))
 {
 $newsid = $_GET['newsid'];
 $sql = "SELECT *  FROM  `news`  WHERE  `NewsID` =$newsid";
 $tindang = $db->getRow($sql);
 if ($tindang) {
$sql="SELECT * FROM  `province` ";
$danhsachtinh=$db->getAll($sql);
$qlgiaodien->assign('danhsachtinh',$danhsachtinh);
$districtid=$tindang['DistrictID'];
$qlgiaodien->assign('provinceid',$db->getOne("SELECT `provinceid` FROM `district` where `districtid`=$districtid"));
  $qlgiaodien->assign('tindang', $tindang);
  
  
  $sql="SELECT * FROM  `loainha` ";
$danhsachloainha=$db->getAll($sql);
$qlgiaodien->assign('danhsachloainha',$danhsachloainha);
$sql="SELECT * FROM  `khunggia` ";
$danhsachkhunggia=$db->getAll($sql);
$qlgiaodien->assign('danhsachkhunggia',$danhsachkhunggia);


  
  $sql = "SELECT * FROM `news_image` where `NewsID`=$newsid";
  $hinhanh = $db->getAll($sql);
  if ($hinhanh) {
   $qlgiaodien->assign('hinhanh', $hinhanh);
  }
  $district=$db->getRow("select districtname from `district` where `districtid`=2");
 }
 }
 $qlgiaodien->display('suatindang.tpl');
}
?>
