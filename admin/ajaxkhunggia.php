<?php
include_once('../connect.php');
$db = new dbmanager();
$db->connect();
if(!empty($_GET['action']))
{
 if(($_GET['action']=='addkhunggia')&&!empty($_POST['khunggianame']))
 {
   $tenkhunggia=$_POST['khunggianame'];
   $sql = "INSERT INTO `nhadat`.`khunggia` (`khunggiaid`, `KhungGiaName`) VALUES (NULL, '$tenkhunggia')";
   $db->querry($sql);
   $newsinsert = mysql_insert_id();
   echo $newsinsert;
 }
 
 if(($_GET['action']=='delete')&&!empty($_POST['khunggiaid']))
 {
   
  $khunggiaid=$_POST['khunggiaid']; 
    $sql="DELETE FROM khunggia where khunggiaid=$khunggiaid";
    echo $sql;
    $db->querry($sql);
 }

 if(($_GET['action']=='edittenkhunggia')&&!empty($_POST['id'])&&!empty($_POST['value']))
{
 echo $_POST['value'];
 $id=$_POST['id'];
 $name=$_POST['value'];
 $sql="UPDATE  `nhadat`.`khunggia` SET  `KhungGiaName` =  '$name' WHERE  `khunggia`.`khunggiaid` = $id";
 $db->querry($sql);

}
}



?>