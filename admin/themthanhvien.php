<?php
require_once 'global.php';
if($quyenhan!=0)
{
 header("location:loginform.php");
}
include_once('../connect.php');
require_once '../includes/sm_config_admin.php';
$db = new dbmanager();
$db->connect();
$thongbaoloi = '';


        
   
if(isset($_POST['btnsubmit']))
{
    
    if(isset($_POST['txtemail']))
    {
        if($_POST['txtemail']=="")
        {
        $thongbaoloi=$thongbaoloi."Bạn chưa điền email</br>";
      
        }
        else  if(!(filter_var($_POST['txtemail'], FILTER_VALIDATE_EMAIL)))
         {
           // echo $_POST['txtemail'];
           $thongbaoloi =$thongbaoloi.'<br/> Email  bạn điền không đúng định dạng</br>';
        }
        else $email = $_POST['txtemail'];
    }
    else 
    {
          
        $thongbaoloi =$thongbaoloi."Ban la hacker a.</br>";
    }
    
    if(isset($_POST['txtname']))
    {
        if($_POST['txtname']=="")
        {
            $thongbaoloi="Ban phai khai bao ten cua ban</br>";
           
        }
        $name = $_POST['txtname'];
    }
      else $thongbaoloi =$thongbaoloi."Ban la hacker a.</br>";
      if(isset($_POST['txtpass']))
      {
          if($_POST['txtpass']=="")
          {
              $thongbaoloi=$thongbaoloi."ban phai dien may khau</br>";
          }
          else if(isset($_POST['txtpass2']))
          {
              if($_POST['txtpass']==$_POST['txtpass2'])
              {
                  if(strlen($_POST['txtpass'])<=6)
                  {
                      $thongbaoloi=$thongbaoloi."Mat khau cua ban it nhat la 6 ky tu </br>";
                  }
                  else $pass=$_POST['txtpass'];
              }
              else $thongbaoloi=$thongbaoloi."Mat khau khong trung nhau</br>";
          }
          else $thongbaoloi =$thongbaoloi."Ban la hacker a.</br>";
          
      }
      else $thongbaoloi = $thongbaoloi."Ban la hacker a.</br>";
   if($thongbaoloi!="")
   {
       
   }
   else      
   {
     $caulenh = "INSERT INTO `nhadat`.`user` (`UserID`, `Email`, `Password`, `Name`, `Telephone`, `TimeRegister`, `active`, `activestring`) VALUES (NULL, '".$email."', '".$pass."', '".$name."', '".$_POST['txtphone']."', CURRENT_TIMESTAMP, '1', '')";
     if($db->querry($caulenh))
     {
         echo "chuyen trang";
         //header("Location: index.php");
     }
     else 
     {
         $thongbaoloi="Loi khong xac dinh";
         $qlgiaodien->assign('thongbaoloi',$thongbaoloi);
     }
     
   }
  
   
    
    
}


    
$giaodien = 'themthanhvien.tpl';
$qlgiaodien->assign('page_title', "them thanh vien");

$qlgiaodien->display($giaodien);
?>
