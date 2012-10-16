<?php
include_once('../connect.php');
$db = new dbmanager();
$db->connect();
if(!empty($_GET['action']))
{
 if(($_GET['action']=='addloainha')&&!empty($_POST['loainhaname']))
 {
   $tenloainha=$_POST['loainhaname'];
   $sql = "INSERT INTO `nhadat`.`loainha` (`LoainhaID`, `TenLoaiNha`) VALUES (NULL, '$tenloainha')";
   $db->querry($sql);
 
   $newsinsert = mysql_insert_id();
   echo $newsinsert;
 }
 
 if(($_GET['action']=='delete')&&!empty($_POST['loainhaid']))
 {
   
  $loainhaid=$_POST['loainhaid']; 
    $sql="DELETE FROM loainha where LoainhaID=$loainhaid";
    echo $sql;
    $db->querry($sql);
 }
 
 if(($_GET['action']=='edittenloainha')&&!empty($_POST['id'])&&!empty($_POST['value']))
{
 echo $_POST['value'];
 $id=$_POST['id'];
 $name=$_POST['value'];
 $sql="UPDATE  `nhadat`.`loainha` SET  `TenLoaiNha` =  '$name' WHERE  `loainha`.`LoainhaID` = $id";
 $db->querry($sql);

}
 
 
}



?>