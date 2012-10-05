<?php

include_once('../connect.php');
require_once '../includes/sm_config_admin.php';
$db = new dbmanager();
$db->connect();
if(isset($_GET['action'])&&isset($_GET['newsid']))
{
    if(($_GET['action']=="delete")&&($_GET['newsid']!=""))
    {
        $newsid=$_GET['newsid'];
        $db->xoanews($newsid);
    }
}
$sql="SELECT *  FROM  `news`";
$danhsachtindang =  $db->getAll($sql);
//print_r($danhsachtindang);
$qlgiaodien->assign('danhsachtindang',$danhsachtindang);
$giaodien = 'danhsachtindang.tpl';
$qlgiaodien->assign('page_title', "Danh sách tin đăng");

$qlgiaodien->display($giaodien);


?>
