<?php
require_once 'global.php';
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
