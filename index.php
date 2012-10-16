<?php

if(!isset($_SESSION))
session_start();


include_once('connect.php');
include 'function.php';
require_once '/includes/sm_config.php';
$db = new dbmanager();
$db->connect();
$qlgiaodien->assign('page_title', 'Trang chủ');

if(isset($_GET['themes']))
{
$qlgiaodien->setTemplateDir('smarty/templates/'.$_GET['themes']);
};


$sql="select * from province";
$danhsachtinh=$db->getAll($sql);
$qlgiaodien->assign('danhsachtinh',$danhsachtinh);


include_once('include/simple_html_dom.php');
// Mot trang co 4 loai tin: 
//1 la tin binh thuong hien thi theo tuy chon cua nguoi tim kiem voi nhieu dieu kien
// 3 loai tin kia la tin vip l,2,3 
// Vip1 o ben duoi tin binh thuong
// Vip 2 va 3 o 2 menu ben phai tin binh thuong




$sql = "SELECT   `news`.`NewsID` , `news`.`Content`, `news`.`UserID` , `news`.`Title`, `news`.`Display` ,  `news`.`ViewCount` ,  `news`.`PhoneNumber` ,  `news`.`loainhaid` ,  `news`.`nhucauid` ,  `news`.`khunggia` ,  `news`.`address` ,  `news`.`GiaNha` , `news`.`lat` ,  `news`.`lng` ,  `news`.`VideoURL` ,  `news`.`keywordid` ,  `news_image`.`ImageID` ,  `news_image`.`Image__URL` ,  `news_image`.`IMG_desc` ,  `news_image`.`thumbnail_url`  FROM NEWS LEFT JOIN news_image ON news.NewsID = news_image.NewsID ";
$conditioncount=0;
$condition = array();
$provinceid=21;
if(isset($_SESSION['province']))
{
 $provinceid = $_SESSION['province'];
}
$qlgiaodien->assign('provinceselect',$provinceid);
if(!empty($_GET['quan']))
{
 array_push($condition, "DistrictID = ".$_GET['quan']);
 $qlgiaodien->assign('quanid',$_GET['quan']);
 $conditioncount++;
}
else
{
   $qlgiaodien->assign('danhsachquan',$db->getAll("SELECT * FROM  `district` WHERE provinceid =".$provinceid));

}
if(!empty($_GET['loainha']))
{
 $conditioncount++;
$qlgiaodien->assign('loainhaid',$_GET['loainha']);
  array_push($condition, "loainhaid = ".$_GET['loainha']);

}
else
{
     
}
 $qlgiaodien->assign('danhsachloainha',$db->getAll("SELECT * FROM  `loainha` "));
if(!empty($_GET['nhucau']))
{
 array_push($condition, "nhucauid = ".$_GET['nhucau']);
  $qlgiaodien->assign('nhucauid',$_GET['nhucau']);
 $conditioncount++;
}
else
{
      $qlgiaodien->assign('danhsachnhucau',$db->getAll("SELECT * FROM  `loainhucau` "));
   
}
if(!empty($_GET['khunggia']))
{
  $qlgiaodien->assign('khunggiaid',$_GET['khunggia']);
  array_push($condition, "khunggia = ".$_GET['khunggia']);
  $conditioncount++;
}
else
{
      
}
$qlgiaodien->assign('danhsachkhunggia',$db->getAll("SELECT * FROM  `khunggia` "));
if(!empty($_GET['search']))
{
     array_push($condition, " (Content LIKE  \"%".$_GET['search']."%\")");
       $conditioncount++;
}
$dieukien="";
if($conditioncount>0)
{
 $dieukien.=" WHERE ";
}
$dieukien.=implode(' AND ', $condition);
$sql.=  $dieukien." GROUP BY news.newsid  ";



// Doan nay la phan trang nhe hehe: --> Search Google thi voi tu khoa pagination PHP MYSQL AJAX rat nhieu






$page=1;
if(!empty($_GET['page']))
{
$page = $_GET['page'];
}
$cur_page = $page;
$per_page = 10;
$previous_btn = true;
$next_btn = true;
$first_btn = true;
$last_btn = true;
$start = ($page-1) * $per_page;

$query_pag_num = $db->getRow("SELECT COUNT(*) AS count FROM news".$dieukien)['count'];
$pages = ceil($query_pag_num/$per_page);

$sql.=" limit $start,$per_page";




/* --------------------------------------------- */
$count = $query_pag_num;
$no_of_paginations = $pages;

/* ---------------Calculating the starting and endign values for the loop----------------------------------- */
/*   Yeu cau dua vao no_of_paginations: so trang va $cur_page la trang hien tai */
if ($cur_page >= 7) {
    $start_loop = $cur_page - 3;
    if ($no_of_paginations > $cur_page + 3)
        $end_loop = $cur_page + 3;
    else if ($cur_page <= $no_of_paginations && $cur_page > $no_of_paginations - 6) {
        $start_loop = $no_of_paginations - 6;
        $end_loop = $no_of_paginations;
    } else {
        $end_loop = $no_of_paginations;
    }
} else {
    $start_loop = 1;
    if ($no_of_paginations > 7)
        $end_loop = 7;
    else
        $end_loop = $no_of_paginations;
}
$qlgiaodien->assign('startloop',$start_loop);
$qlgiaodien->assign('endloop',$end_loop);

// FOR ENABLING THE FIRST BUTTON
if ($first_btn && $cur_page > 1) {
    $qlgiaodien->assign('firstbutton',true);
} else if ($first_btn) {
    $qlgiaodien->assign('firstbutton',false);
}

// FOR ENABLING THE PREVIOUS BUTTON
if ($previous_btn && $cur_page > 1) {
    $pre = $cur_page - 1;
    $qlgiaodien->assign('previous_btn',$cur_page - 1);
    //$msg .= "<li p='$pre' class='active'>Previous</li>";
} else if ($previous_btn) {
    $qlgiaodien->assign('previous_btn',false);
}

// TO ENABLE THE NEXT BUTTON
if ($next_btn && $cur_page < $no_of_paginations) {
     $qlgiaodien->assign('next_btn',$next_btn+1);
} else if ($next_btn) {
    $qlgiaodien->assign('next_btn',false);
}

// TO ENABLE THE END BUTTON
if ($last_btn && $cur_page < $no_of_paginations) {
        $qlgiaodien->assign('last_btn',true);
} else if ($last_btn) {
      $qlgiaodien->assign('last_btn',false);


}

$qlgiaodien->assign('page',$page);
$qlgiaodien->assign('pages',$pages);

$danhsachbinhthuong = $db->getAll($sql);
//echo $sql;
//print_r($danhsachbinhthuong);
 $qlgiaodien->assign('danhsachbinhthuong',$danhsachbinhthuong);

 
 
$sql = "select `news`.`NewsID` , `news`.`Content`, `news`.`UserID` , `news`.`Title`, `news`.`Display` ,  `news`.`ViewCount` ,  `news`.`PhoneNumber` ,  `news`.`loainhaid` ,  `news`.`nhucauid` ,  `news`.`khunggia` ,  `news`.`address` ,  `news`.`GiaNha` , `news`.`lat` ,  `news`.`lng` ,  `news`.`VideoURL` ,  `news`.`keywordid` ,  `news_image`.`ImageID` ,  `news_image`.`Image__URL` ,  `news_image`.`IMG_desc` ,  `news_image`.`thumbnail_url` from NEWS LEFT JOIN news_image ON news.NewsID = news_image.NewsID WHERE Display=1 GROUP BY news.newsid ORDER BY RAND()  LIMIT 10";
$danhsachvip1=$db->getAll($sql);
$sql = "select `news`.`NewsID` , `news`.`Content`, `news`.`UserID` , `news`.`Title`, `news`.`Display` ,  `news`.`ViewCount` ,  `news`.`PhoneNumber` ,  `news`.`loainhaid` ,  `news`.`nhucauid` ,  `news`.`khunggia` ,  `news`.`address` ,  `news`.`GiaNha` , `news`.`lat` ,  `news`.`lng` ,  `news`.`VideoURL` ,  `news`.`keywordid` ,  `news_image`.`ImageID` ,  `news_image`.`Image__URL` ,  `news_image`.`IMG_desc` ,  `news_image`.`thumbnail_url` from NEWS LEFT JOIN news_image ON news.NewsID = news_image.NewsID WHERE Display=2 GROUP BY news.newsid ORDER BY RAND()  LIMIT 10";
$danhsachvip2=$db->getAll($sql);
$sql = "select `news`.`NewsID` , `news`.`Content`, `news`.`UserID` , `news`.`Title`, `news`.`Display` ,  `news`.`ViewCount` ,  `news`.`PhoneNumber` ,  `news`.`loainhaid` ,  `news`.`nhucauid` ,  `news`.`khunggia` ,  `news`.`address` ,  `news`.`GiaNha` , `news`.`lat` ,  `news`.`lng` ,  `news`.`VideoURL` ,  `news`.`keywordid` ,  `news_image`.`ImageID` ,  `news_image`.`Image__URL` ,  `news_image`.`IMG_desc` ,  `news_image`.`thumbnail_url` from NEWS LEFT JOIN news_image ON news.NewsID = news_image.NewsID WHERE Display=3 GROUP BY news.newsid ORDER BY RAND()  LIMIT 10";
$danhsachvip3=$db->getAll($sql);
$sql= 'SELECT `news`.`NewsID` , `news`.`Content`, `news`.`UserID` , `news`.`Title`, `news`.`Display` ,  `news`.`ViewCount` ,  `news`.`PhoneNumber` ,  `news`.`loainhaid` ,  `news`.`nhucauid` ,  `news`.`khunggia` ,  `news`.`address` ,  `news`.`GiaNha` , `news`.`lat` ,  `news`.`lng` ,  `news`.`VideoURL` ,  `news`.`keywordid` ,  `news_image`.`ImageID` ,  `news_image`.`Image__URL` ,  `news_image`.`IMG_desc` ,  `news_image`.`thumbnail_url` FROM NEWS LEFT JOIN news_image ON news.NewsID = news_image.NewsID WHERE Display=1 GROUP BY news.newsid order by TimeAction DESC';
$danhsachvip1 = $db->getAll($sql);
if($danhsachvip1)
{
  foreach ($danhsachvip1 as  &$value) 
{
$value['Content']=str_get_html($value['Content'])->plaintext;
}
$qlgiaodien->assign('danhsachvip1',$danhsachvip1);
//$result = mysql_query($querry, $conn);
}
if($danhsachbinhthuong) 
{
 foreach ($danhsachbinhthuong as  &$value) 
{
$value['Content']=str_get_html($value['Content'])->plaintext;
}
 $qlgiaodien->assign('danhsachbinhthuong',$danhsachbinhthuong);
}

if($danhsachvip1) 
{
 foreach ($danhsachvip1 as  &$value) 
{
$value['Content']=str_get_html($value['Content'])->plaintext;
}
 $qlgiaodien->assign('danhsachvip1',$danhsachvip1);
}
if($danhsachvip2) 
{
 foreach ($danhsachvip2 as  &$value) 
{
$value['Content']=str_get_html($value['Content'])->plaintext;
}
 $qlgiaodien->assign('danhsachvip2',$danhsachvip2);
}
 if($danhsachvip3) 
{
 foreach ($danhsachvip3 as  &$value) 
{
$value['Content']=str_get_html($value['Content'])->plaintext;
}
 $qlgiaodien->assign('danhsachvip3',$danhsachvip3);
}
$qlgiaodien->display("index.tpl")
       ?>
  