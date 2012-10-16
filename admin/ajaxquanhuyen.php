<?php
include_once('../connect.php');
$db = new dbmanager();
$db->connect();
if(!empty($_GET['action']))
{
 if(($_GET['action']=='addquanhuyen')&&!empty($_POST['tenquanhuyen'])&&!empty($_GET['provinceid']))
 {
   $tenquanhuyen=$_POST['tenquanhuyen'];
   $provinceid=$_GET['provinceid'];
   $sql = "INSERT INTO `nhadat`.`district` (`districtid` ,`districtname` ,`provinceid`) VALUES (NULL, '$tenquanhuyen','$provinceid')";
 
   $db->querry($sql);

   $newsinsert = mysql_insert_id();
   echo $newsinsert;
 }
 
 if(($_GET['action']=='delete')&&!empty($_POST['quanhuyenid']))
 {
   
  $quanhuyenid=$_POST['quanhuyenid']; 
    $sql="DELETE FROM district where districtid=$quanhuyenid";
    echo $sql;
    $db->querry($sql);
 }
 if(($_GET['action']=='edittenhuyen')&&!empty($_POST['id'])&&!empty($_POST['value']))
{
 echo $_POST['value'];
 $id=$_POST['id'];
 $name=$_POST['value'];
 $sql="UPDATE  `nhadat`.`district` SET  `districtname` =  '$name' WHERE  `district`.`districtid` = $id";
 $db->querry($sql);
 
}
}



?>