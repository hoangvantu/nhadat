<?php

include_once('connect.php');
include 'function.php';
$db = new dbmanager();
$db->connect();
require_once "json/JSON.php";
$json = new Services_JSON();
if(isset($_POST['action']))
{
$action = $_POST['action'];
$newsid = $_POST['idtin'];
//convert php object to json 

$value = array('msg' => '', 'last' => '', 'address' => '');
if ($action == 'xoatin') {
  $sql = "delete from news where newsid = $newsid";
   if( $db->querry($sql)) {
	$value['msg'] = 'Đã xóa thành công' ;
    } else {
	$value['msg'] = 'Topic của bạn có thể đã bị xóa rồi hoặc bị khóa nên không thể xóa được' ;
    }
    $output = $json->encode($value);
    print($output);
}
if($action=='uptin')
{
     $sql = "UPDATE  `nhadat`.`news` SET  `DateTime` = CURRENT_TIMESTAMP WHERE  `news`.`NewsID` =$newsid";
    if( $db->querry($sql)) {
	$value['msg'] = 'Đã up tin thành công' ;
    } else {
	$value['msg'] = 'Bạn đã hết lượt up miễn phí' ;
    }
    $output = $json->encode($value);
    print($output);
}

}
if(isset($_GET['action']))
{
    $action=$_GET['action'];
if($action=='getquan')
{
    if(isset($_GET['provinceid']))
    {
        $districtid=$_GET['provinceid'];
        $sql="SELECT *  FROM  `district` WHERE  `provinceid` =$districtid";
        $danhsachquan=$db->getAll($sql);
        $output=json_encode($danhsachquan);
        print($output);
    }
}
}

?>
