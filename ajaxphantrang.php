<?php
include_once('connect.php');
require_once '/includes/sm_config.php';
$db = new dbmanager();
$db->connect();
$sql = "SELECT * FROM NEWS";
$conditioncount=0;
$condition = array();
if(!empty($_GET['quan']))
{
 array_push($condition, "DistrictID = ".$_GET['quan']);
 $qlgiaodien->assign('quanid',$_GET['quan']);
 $conditioncount++;
};
if(!empty($_GET['loainha']))
{
 $conditioncount++;
$qlgiaodien->assign('loainhaid',$_GET['loainha']);
  array_push($condition, "loainhaid = ".$_GET['loainha']);
}
if(!empty($_GET['nhucau']))
{
 array_push($condition, "nhucauid = ".$_GET['nhucau']);
  $qlgiaodien->assign('nhucauid',$_GET['nhucau']);
 $conditioncount++;
}
if(!empty($_GET['khunggia']))
{
  $qlgiaodien->assign('khunggiaid',$_GET['khunggia']);
  array_push($condition, "khunggia = ".$_GET['khunggia']);
  $conditioncount++;
}
if($conditioncount>0)
{
 $sql.=" WHERE ";
}
$sql.= implode(' AND ', $condition);
//echo $sql;
$danhsachall=$db->getAll($sql);





// Doan nay la phan trang nhe hehe: --> Search Google thi voi tu khoa pagination PHP MYSQL AJAX rat nhieu
$page=0;
$start=0;
if(!empty($_GET['page']))
{
$page=$_GET['page'];
$cur_page = $page;
$per_page = 1;
$previous_btn = true;
$next_btn = true;
$first_btn = true;
$last_btn = true;
$start = ($page-1) * $per_page;
 

$query_pag_num = $db->getRow("SELECT COUNT(*) AS count FROM news")['count'];
$pages = ceil($query_pag_num/$per_page);
$sql.=" limit $start,$per_page";
$danhsachbinhthuong = $db->getAll($sql);

$qlgiaodien->assign('page',$page);
$qlgiaodien->assign('pages',$pages);

 $qlgiaodien->assign('danhsachbinhthuong',$danhsachbinhthuong);







/* --------------------------------------------- */
$count = $query_pag_num;
$no_of_paginations = $pages;

/* ---------------Calculating the starting and endign values for the loop----------------------------------- */
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


$qlgiaodien->display("ajax_phantrang.tpl");



}

?>

