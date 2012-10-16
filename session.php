<?php
session_start();
if(isset($_POST['data']))
{
 $_SESSION['province']=$_POST['data'];
}
echo $_SESSION['province'];
?>