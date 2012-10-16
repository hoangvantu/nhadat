<?php
include_once('../connect.php');
 
session_start();
//$_SESSION['username']="1313";
unset($_SESSION['username']);
unset($_SESSION['permission']);
//echo $_SESSION['username'];
 //echo $_SESSION['username'];
//if(isset($_SESSION['username'])&&isset($_SESSION['permission'])) 
$db = new dbmanager();
$db->connect();
//session_destroy();
$message="";

if(!empty($_POST['login']))
 { 

 if(!empty($_POST['username'])&&!empty($_POST['password']))
 {
   $userid=$_POST['username'];
   $password=$_POST['password'];
   $sql="select * from `user` WHERE `Email`='$userid' AND `Password`='$password'";
   //echo $sql;
   $kiemtra = $db->getRow($sql);
  // print_r($kiemtra);
   if($kiemtra!=false)
   {
    //print_r($kiemtra);
    
   $_SESSION['userid']=$kiemtra['UserID'];
   $_SESSION['permission']=$kiemtra['active'];
   $_SESSION['username']=$kiemtra['Name'];
  // echo $_SESSION['username'];
 //  unset($_SESSION['username']);
   echo $_SESSION['username'];
  header("location:index.php"); // Re-direct to main.php
   }
 else {
    $message="Username or Password Incorrect";

   }
 }
 
}


?>


﻿<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6 lt8"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7 lt8"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8 lt8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="UTF-8" />
        <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">  -->
        <title>Control Panel Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="description" content="Login and Registration Form with HTML5 and CSS3" />
        <meta name="keywords" content="html5, css3, form, switch, animation, :target, pseudo-class" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="../favicon.ico"> 
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
		<link rel="stylesheet" type="text/css" href="css/animate-custom.css" />
    </head>
    <body>
        <div class="container">
            <!-- Codrops top bar -->
            <div class="codrops-top">
                <a href="">
                    <strong>&laquo; Previous Demo: </strong>Responsive Content Navigator
                </a>
                <span class="right">
                    <a href=" http://tympanus.net/codrops/2012/03/27/login-and-registration-form-with-html5-and-css3/">
                        <strong>Back to the Codrops Article</strong>
                    </a>
                </span>
                <div class="clr"></div>
            </div><!--/ Codrops top bar -->
            <header>
                <h1>Login to <span>Control Panel</span></h1>
				<nav class="codrops-demos">
					<span>Click <strong>"Join us"</strong> to see the form switch</span>
					<a href="index.html" class="current-demo">Login</a>
					
				</nav>
            </header>
            <section>				
                <div id="container_demo" >
                    <!-- hidden anchor to stop jump http://www.css3create.com/Astuce-Empecher-le-scroll-avec-l-utilisation-de-target#wrap4  -->
                    <a class="hiddenanchor" id="toregister"></a>
                    <a class="hiddenanchor" id="tologin"></a>
                    <div id="wrapper">
                        <div id="login" class="animate form">
                            <form  action="" autocomplete="on" method="POST"> 
                                <h1>Log in</h1> 
                                <p> 
                                    <label for="username" class="uname" data-icon="u" > Your email or username </label>
                                    <input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/>
                                </p>
                                <p> 
                                    <label for="password" class="youpasswd" data-icon="p"> Your password </label>
                                    <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> 
                                </p>
                                <p class="keeplogin"> 
									<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
									<label for="loginkeeping">Lưu phiên đăng nhập của tôi</label>
								</p>
                                <p class="login button"> 
                                    <input type="submit" name="login" value="LOGIN" /> 
								</p>
                                <p class="change_link">
									Nếu bạn quên mật khẩu thì hãy click vào
									<a href="#toregister" class="to_register">Quên mật khẩu</a>
								</p>
                            </form>
                        </div>

                         
						
                    </div>
                </div>  
            </section>
        </div>
    </body>
</html>