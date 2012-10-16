<?php
include_once('../connect.php');
$db = new dbmanager();
$db->connect();
if(!empty($_GET['action']))
{
 if(($_GET['action']=='addprovince')&&!empty($_POST['provincename']))
 {
   $provincename=$_POST['provincename'];
   $sql = "INSERT INTO `nhadat`.`province` (`ProvinceID`, `ProvinceName`) VALUES (NULL, '$provincename')";
   $db->querry($sql);
   $newsinsert = mysql_insert_id();
   echo $newsinsert;
 }
 
 if(($_GET['action']=='delete')&&!empty($_POST['provinceid']))
 {
     
  $provinceid=$_POST['provinceid']; 
    $sql="DELETE FROM province where ProvinceID=$provinceid";
    echo $sql;
    $db->querry($sql);
 }
if(($_GET['action']=='edittentinh')&&!empty($_POST['id'])&&!empty($_POST['value']))
{
 echo $_POST['value'];
 $provinceid=$_POST['id'];
 $provincename=$_POST['value'];
 $sql="UPDATE  `nhadat`.`province` SET  `ProvinceName` =  '$provincename' WHERE  `province`.`ProvinceID` = $provinceid";
 $db->querry($sql);
 
}
}
?>
