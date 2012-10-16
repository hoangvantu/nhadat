<?php
include 'connect.php';
include 'function.php';
//include 'head/headxemtin.php';
$db = new dbmanager();
$db->connect();
require_once '/includes/sm_config.php';
//$qlgiaodien->debugging =true;
if(isset($_GET['themes']))
{
$qlgiaodien->setTemplateDir('smarty/templates/'.$_GET['themes']);
};
$qlgiaodien->assign('page_title', 'Tin ');
$sql = "select * from district ";
$danhsachquan = $db->getAll($sql);
$qlgiaodien->assign('danhsachquan', $danhsachquan);
$sql = "select * from loainha";
$phanloainha = $db->getAll("select * from loainha");
$qlgiaodien->assign('phanloainha', $phanloainha);



$sql="select * from province";
$danhsachtinh=$db->getAll($sql);
$qlgiaodien->assign('danhsachtinh',$danhsachtinh);




if(!empty($_GET['quan']))
{
 array_push($condition, "DistrictID = ".$_GET['quan']);
 $qlgiaodien->assign('quanid',$_GET['quan']);
 $conditioncount++;
}
else
{
   $qlgiaodien->assign('danhsachquan',$db->getAll("SELECT * FROM  `district` "));
}
if(!empty($_GET['loainha']))
{
 $conditioncount++;
$qlgiaodien->assign('loainhaid',$_GET['loainha']);
  array_push($condition, "loainhaid = ".$_GET['loainha']);

}
else
{
      $qlgiaodien->assign('danhsachloainha',$db->getAll("SELECT * FROM  `loainha` "));
   
}
if(!empty($_GET['nhucau']))
{
 array_push($condition, "nhucauid = ".$_GET['nhucau']);
  $qlgiaodien->assign('nhucauid',$_GET['nhucau']);
 $conditioncount++;
}
else
{
      $qlgiaodien->assign('danhsachnhucau',$db->getAll("SELECT * FROM  `loainhucau` "));
   
}
if(!empty($_GET['khunggia']))
{
  $qlgiaodien->assign('khunggiaid',$_GET['khunggia']);
  array_push($condition, "khunggia = ".$_GET['khunggia']);
  $conditioncount++;
}
else
{
      $qlgiaodien->assign('danhsachkhunggia',$db->getAll("SELECT * FROM  `khunggia` "));
}







if (isset($_GET['newsid'])) {
 $newsid = $_GET['newsid'];
 $sql = "select * from news where NewsID=$newsid";
 $tindang = $db->getRow($sql);
  $qlgiaodien->assign('tindang', $tindang);

 $userid = $tindang['UserID'];
 $userinfo = $db->getRow("select * from user where UserID=$userid");
 $qlgiaodien->assign('userinfo', $userinfo);
 $sql  = "select * from `news_image` where newsid=$newsid";
 $danhsachhinhanh = $db->getAll($sql);
 $qlgiaodien->assign('danhsachhinhanh',$danhsachhinhanh);
 
 $sql="select `NewsID`,`Title` from `news` where Display=1 ORDER BY RAND()  LIMIT 1";
 $tinvipmep1=$db->getRow($sql);
 $qlgiaodien->assign('tinvipmep1',$tinvipmep1);
 
$viewcount = $tindang['ViewCount'] + 1;
$sql = "update news set ViewCount=$viewcount where newsid=$newsid";
$db->querry($sql);
}

$qlgiaodien->display('view.tpl');
?>