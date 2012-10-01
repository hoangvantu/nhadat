<?php
include_once('connect.php');
include 'function.php';
require_once '/includes/sm_config.php';
$db = new dbmanager();
$db->connect();
$qlgiaodien->assign('page_title', 'Dang ky thanh vien');
$qlgiaodien->debugging =true;
if(isset($_GET['themes']))
{
$qlgiaodien->setTemplateDir('smarty/templates/'.$_GET['themes']);
};
/** Validate captcha */
 session_start(); 
 
if (!empty($_REQUEST['captcha_register'])) 
    {
     $error ='';
        if (empty($_SESSION['captcha']) || trim(strtolower($_REQUEST['captcha_register'])) != $_SESSION['captcha']) 
        {
      $error = $error.'<br/>Bạn đã điền sai mã captcha';
        } 
        $user = ($_POST['email']);
        if(!(filter_var($user, FILTER_VALIDATE_EMAIL)))
       {
           $error = $error.'<br/> Email bạn điền không đúng định dạng';
       }
        $name = ($_POST['full_name']);
        if($name='')
        {
             $error = $error.'<br/> Bạn phải điền họ tên của bạn';
        }
        
        $password = ($_POST['register_password']);
        $confirm_password = $_POST['confirm_password'];
        if($password=='')
        {
            $error = $error.'<br/> Không được để trống mật khẩu';
        }
        elseif ($password!=$confirm_password)    
        {
            $error = $error.'<br/> Hai ô mật khẩu phải trùng nhau';
        }
        
        $phone = ($_POST['mobile_phone']);
        if(isset($_POST['user_newsletter']))
        $emaillist = 1;
    else {
        $emaillist = 0;
    }
        if(isset($_POST['user_hide_email']))
            $emailhide=1;
        else 
        {
            $emailhide=0;
        }
        $time = time();
        $key = sha1($user . 'doyoulikesite'.  mt_rand(1, 20000));
       
               if($error=='')
        {
                   include 'connect.php';
        $querry ="INSERT INTO `nhadat`.`user` (`UserID`, `Email`, `Password`, `Name`, `EmailList`, `Telephone`, `EmailHide`, `TimeRegister`,active,`activestring`) VALUES (NULL, '".mysql_real_escape_string($user)."', '".mysql_real_escape_string($password)."', '".$name."', '".mysql_real_escape_string($emaillist)."', '".mysql_real_escape_string($phone)."', '".mysql_real_escape_string($emailhide)."', NOW() ,0,'".$key."')";
      //  echo $querry;
      //   "INSERT INTO user (username, password, email,timestamp) VALUES ('".mysql_real_escape_string($user)."','".mysql_real_escape_string($password)."', '".mysql_real_escape_string($email)."', '$time')";
       mysql_query("set names 'utf8'");


        mysql_query($querry);
        header('Location:registersuccess.php');
        }
 else 
       {
       $qlgiaodien->assign('error',$error);
      // echo '<div style="color:red">'.$error.'</div>';
       
        }
    $request_captcha = htmlspecialchars($_REQUEST['captcha_register']);
/*
    echo <<<HTML
        <div id="result" style="$style">
        <h2>$captcha_message</h2>
        <table>
        <tr>
            <td>Session CAPTCHA:</td>
            <td>{$_SESSION['captcha']}</td>
        </tr>
        <tr>
            <td>Form CAPTCHA:</td>
            <td>$request_captcha</td>
        </tr>
        </table>
        </div>
HTML;
 */
    unset($_SESSION['captcha']);
    
}
$qlgiaodien->display("register.tpl")
?>

