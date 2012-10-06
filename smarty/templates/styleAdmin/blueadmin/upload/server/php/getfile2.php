<?php 
include_once('../../../../../../../connect.php');
require_once '../../../../../../../includes/sm_config_admin.php';
$db = new dbmanager();
$db->connect();
if(isset($_GET['newsid']))
{
$newsid=$_GET['newsid'];
$sql="SELECT * FROM `news_image` where `NewsID`=$newsid";
$danhsachanh=$db->getAll($sql);
$output=json_encode($danhsachanh);
print($output);
}


?>