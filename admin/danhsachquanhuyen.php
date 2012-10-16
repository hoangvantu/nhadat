<?php
require_once 'global.php';
$qlgiaodien->assign('page_title',"Danh sách quận huyện");
//$qlgiaodien->debugging= true;
if(isset($_GET['action'])&&isset($_GET['provinceid']))
{
 if($_GET['action']=='delete')
   $db->province_delete($_GET['provinceid']);
}
$sql = "SELECT  `ProvinceName` , `district`.`ProvinceID` , districtid , districtname FROM `province` , `district` WHERE `province`.`ProvinceID` = `district`.`provinceid`";
if(!empty($_GET['provinceid']))
{
       $provinceid=$_GET['provinceid'];
       $sql.="AND `district`.`ProvinceID` =$provinceid";
       $qlgiaodien->assign('quanhuyen',$provinceid);
}

$danhsachquanhuyen = $db->getAll($sql);

$qlgiaodien->assign('danhsachquanhuyen',$danhsachquanhuyen);

$danhsachquanhuyen=  $db->getAll($sql);
$qlgiaodien->display('danhsachquanhuyen.tpl')











?>