<?php
include_once('connect.php');
include 'function.php';
require_once '/includes/sm_config.php';
$db = new dbmanager();
$db->connect();
$qlgiaodien->assign('page_title', 'Trang chủ');
$qlgiaodien->debugging =true;
if(isset($_GET['themes']))
{
$qlgiaodien->setTemplateDir('smarty/templates/'.$_GET['themes']);
};

include_once('include/simple_html_dom.php');
if (isset($_GET['quan'])) {
    $quanid = $_GET['quan'];
    if($quanid!='all')
    //  $querry = "SELECT * FROM NEWS  where DistrictID=$quanid order by DateTime DESC ";
    $sql = "SELECT * FROM NEWS  WHERE DistrictID  = $quanid order by TimeAction DESC";
    else
        $sql = 'SELECT * FROM NEWS order by TimeAction DESC';
} else {
    $sql = 'SELECT * FROM NEWS order by TimeAction DESC';
}




$danhsachnha = $db->getAll($sql);
$sql= 'SELECT * FROM NEWS  WHERE Display=1 order by TimeAction DESC';
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
if($danhsachnha) 
{
 foreach ($danhsachnha as  &$value) 
{
$value['Content']=str_get_html($value['Content'])->plaintext;

}

 $qlgiaodien->assign('danhsachnha',$danhsachnha);
 $qlgiaodien->assign('danhsachvip2',$danhsachnha);
 $qlgiaodien->assign('danhsachvip3',$danhsachnha);
}
$qlgiaodien->display("index.tpl")
       ?>
  