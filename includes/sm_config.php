<?php

require('/smarty/Smarty.class.php');
$qlgiaodien = new Smarty();
$qlgiaodien->setTemplateDir('smarty/templates/inver');
$qlgiaodien->setCompileDir('smarty/templates_c');
$qlgiaodien->setCacheDir('smarty/cache');
$qlgiaodien->setConfigDir('smarty/configs');


// Chay khi kiem tra xem Smarty cai dat ok chua
//$smarty->testInstall();
$qlgiaodien->debugging =true;

?>