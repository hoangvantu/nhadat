<?php
include_once('../connect.php');
$db = new dbmanager();
$db->connect();
if(!empty($_GET['action']))
{
 if(($_GET['action']=='addloainha')&&!empty($_POST['tenloainha']))
 {
   $tenloainha=$_POST['tenloainha'];
   $sql = "INSERT INTO `nhadat`.`khunggia` (`loainhaID`, `TenLoaiNha`) VALUES (NULL, '$tenloainha')";
   $db->querry($sql);
   $newsinsert = mysql_insert_id();
   echo $newsinsert;
 }
 
 if(($_GET['action']=='delete')&&!empty($_POST['loainhaid']))
 {
   
  $loainhaid=$_POST['loainhaid']; 
    $sql="DELETE FROM loainha where khunggiaid=$loainhaid";
    echo $sql;
    $db->querry($sql);
 }
}



?>