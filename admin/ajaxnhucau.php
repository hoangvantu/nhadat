<?php
include_once('../connect.php');
$db = new dbmanager();
$db->connect();
if(!empty($_GET['action']))
{
 if(($_GET['action']=='addnhucau')&&!empty($_POST['nhucauname']))
 {
   $tennhucau=$_POST['nhucauname'];
   $sql = "INSERT INTO `nhadat`.`loainhucau` (`nhucauid`, `nhucauname`) VALUES (NULL, '$tennhucau')";
   $db->querry($sql);
   $newsinsert = mysql_insert_id();
   echo $newsinsert;
 }
 
 if(($_GET['action']=='delete')&&!empty($_POST['nhucauid']))
 {
   
  $nhucauid=$_POST['nhucauid']; 
    $sql="DELETE FROM loainhucau where nhucauid=$nhucauid";
    echo $sql;
    $db->querry($sql);
 }
 
 if(($_GET['action']=='edittennhucau')&&!empty($_POST['id'])&&!empty($_POST['value']))
{
 echo $_POST['value'];
 $id=$_POST['id'];
 $name=$_POST['value'];
 $sql="UPDATE  `nhadat`.`loainhucau` SET  `nhucauname` =  '$name' WHERE  `loainhucau`.`nhucauid` = $id";
 $db->querry($sql);

}
}



?>