<?php

require('/smarty/Smarty.class.php');
$qlgiaodien = new Smarty();
$qlgiaodien->setTemplateDir('../smarty/templates/styleAdmin/blueadmin');
$qlgiaodien->setCompileDir('../smarty/templates_c');
$qlgiaodien->setCacheDir('../smarty/cache');
$qlgiaodien->setConfigDir('../smarty/configs');


// Chay khi kiem tra xem Smarty cai dat ok chua
//$smarty->testInstall();
//$smarty->debugging =true;

?>