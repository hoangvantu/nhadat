<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <meta http-equiv="content-type" content="text/html; charset=utf-8" />

 <title>{$page_title}</title>
 {block name="headcss"}
{include file="headcss.tpl"}
 {/block}
 {block name="headjava"}
            {include file="headjava.tpl"}
 {/block}
 
 </head>
 <body>
 <div class="container_12">
        <div class="grid_12 header-repeat">
            <div id="branding">
                <div class="floatleft">
                    <img src="{$smarty.current_dir}/img/logo.png" alt="Logo" /></div>
                <div class="floatright">
                    <div class="floatleft">
                        <img src="{$smarty.current_dir}/img/img-profile.jpg" alt="Profile Pic" /></div>
                    <div class="floatleft marginleft10">
                        <ul class="inline-ul floatleft">
                            <li>Hello {if isset($name)}{$name}{/if}</li>
                            <li><a href="#">Config</a></li>
                            <li><a href="logout.php">Logout</a></li>
                        </ul>
                        <br />
                        <span class="small grey">Last Login: 3 hours ago</span>
                    </div>
                </div>
                <div class="clear">
                </div>
            </div>
        </div>
        <div class="clear">
        </div>
        <div class="grid_12">
            <ul class="nav main">
                <li class="ic-dashboard"><a href="index.php"><span>Bảng quản trị</span></a> </li>
                <li class="ic-form-style"><a href="javascript:"><span>Controls</span></a>
                    <ul>
                        <li><a href="form-controls.html">Forms</a> </li>
                        <li><a href="buttons.html">Buttons</a> </li>
                        <li><a href="form-controls.html">Full Page Example</a> </li>
                        <li><a href="table.html">Page with Sidebar Example</a> </li>
                    </ul>
                </li>
				<li class="ic-typography"><a href="typography.html"><span>Typography</span></a></li>
                <li class="ic-charts"><a href="charts.html"><span>Charts & Graphs</span></a></li>
                <li class="ic-grid-tables"><a href="table.html"><span>Data Table</span></a></li>
                <li class="ic-gallery dd"><a href="javascript:"><span>Image Galleries</span></a>
               		 <ul>
                        <li><a href="image-gallery.html">Pretty Photo</a> </li>
                        <li><a href="gallery-with-filter.html">Gallery with Filter</a> </li>
                    </ul>
                </li>
                <li class="ic-notifications"><a href="notifications.html"><span>Notifications</span></a></li>

            </ul>
        </div>
        <div class="clear">
        </div>
        <div class="grid_2">
            <div class="box sidemenu">
                <div class="block" id="section-menu">
                    <ul class="section menu">
                        <li><a class="menuitem">Quản lý tài khoản</a>
                            <ul class="submenu">
                                <li><a class="active">Thay đổi mật khẩu</a> </li>
                                <li><a>Thay đổi thông tin cá nhân</a> </li>
                                
                            </ul>
                        </li>
                     {if isset($quyenhan)}
                      {if $quyenhan eq 0}
                        <li><a class="menuitem">Quản lý thành viên</a>
                            <ul class="submenu">
                                <li><a  href="danhsachthanhvien.php">Danh sách thành viên</a> </li>
                                <li><a href="themthanhvien.php">Thêm thành viên</a> </li>
                               
                            </ul>
                        </li>
                     {/if}
                     {/if}
                        <li><a class="menuitem">Quản lý tin đăng</a>
                            <ul class="submenu">
                                <li><a href="danhsachtindang.php">Danh sách tin đăng</a> </li>
                                <li><a href="themtindang.php">Thêm tin đăng</a> </li>
                               
                            </ul>
                        </li>
                       
                      <li><a class="menuitem">Quản lý danh mục</a>
                            <ul class="submenu">
                                <li><a href="danhsachtinhthanh.php">Danh sách tỉnh thành</a> </li>
                               
                                <li><a href="danhsachnhucau.php">Danh sách nhu cầu</a> </li>		
                                <li><a href="danhsachkhunggia.php">Danh sách khung giá</a> </li>
                                <li><a href="danhsachloainha.php">Danh sách loại nhà</a> </li>
                            </ul>
                        </li>
                        <li><a class="menuitem">Hộp thư</a>
                            <ul class="submenu">
                                <li><a href="tinnhanden.php">Tin nhắn đến</a> </li>
                                <li><a href="tinnhandi.php">Tin nhắn đã gửi</a> </li>		
                                 <li><a href="guitinnhan.php">Gửi tin nhắn</a> </li>		
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="grid_10">
      
	  {block name="content"}
	  
	  {/block}
	  
            </div>
        </div>
        <div class="clear">
        </div>
    </div>
	 <div class="clear">
    </div>
	   <div id="site_info">
        <p>
            Copyright <a href="#">BlueWhale Admin</a>. All Rights Reserved.
        </p>
    </div>
 
 
 
 </body>
 </html>