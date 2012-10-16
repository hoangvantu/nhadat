<?php

session_start();
if(empty($_SESSION['username']))
{
 header("location:loginform.php");
}
else if($_SESSION['permission']!='0'&&$_SESSION['permission']!='1')
{
  header("location:loginform.php");
}
else
{
 $quyenhan=$_SESSION['permission'];
 
}

?>