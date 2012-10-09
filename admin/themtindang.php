<?php

include_once('../connect.php');
include '../function.php';
require_once '../includes/sm_config_admin.php';

$db = new dbmanager();
$db->connect();
//$qlgiaodien->debugging =true;
$qlgiaodien->assign('page_title', 'Thêm tin đăng');
$error="";
if((isset($_POST['txtTitle']))&&(isset($_POST['txtContent'])))
        
{
      $title=$_POST['txtTitle'];
      $noidung=$_POST['txtContent'];
      $phone=$_POST['txtphone'];
      $tinh=$_POST['slprovince'];
      $quanhuyen=$_POST['sldistrict'];
      $loainha=$_POST['slloainha'];
      $khunggia=$_POST['slkhunggia'];
      $diachi=$_POST['txtdiachi'];
      $gianha=$_POST['txtgianha'];
      $toadox=$_POST['txttoadox'];
      $toadoy=$_POST['txttoadoy'];
      $videourl=$_POST['txtvideo'];
      //Thieu trong template
      $nhucauid=2;
      if($error=="")
      {
       $sql="INSERT INTO `nhadat`.`news` (`NewsID`, `Title`, `Content`, `TimeAction`, `DistrictID`, `UserID`, `Display`, `ViewCount`, `PhoneNumber`, `loainhaid`, `nhucauid`, `khunggia`, `address`, `GiaNha`, `lat`, `lng`,`VideoURL`) VALUES (NULL, '$title', '$noidung', CURRENT_TIMESTAMP, '$quanhuyen', '3', '1', '0', '$phone', '$loainha', '$nhucauid', '$khunggia', '$diachi', '$gianha', '$toadox', '$toadoy','$videourl');";
      
       if( $db->querry($sql))
       {
        $newsinsert =  mysql_insert_id();
               if(isset($_POST['txtimage']))
                foreach($_POST['txtimage'] as $image)
        { 
           $sql="INSERT INTO  `nhadat`.`news_image` (`ImageID` ,`NewsID` ,`Image__URL` ,`IMG_desc` ,`thumbnail_url`) VALUES ('',  '$newsinsert',  '$image',  '$image', '$image')";
          $db->querry($sql);
         
         }
       }
      }
       
 
}

$sql="SELECT * FROM  `province` ";
$danhsachtinh=$db->getAll($sql);
$qlgiaodien->assign('danhsachtinh',$danhsachtinh);
$sql="SELECT * FROM  `loainha` ";
$danhsachloainha=$db->getAll($sql);
$qlgiaodien->assign('danhsachloainha',$danhsachloainha);
$sql="SELECT * FROM  `khunggia` ";
$danhsachkhunggia=$db->getAll($sql);
$qlgiaodien->assign('danhsachkhunggia',$danhsachkhunggia);

$qlgiaodien->display("themtindang.tpl")
?>