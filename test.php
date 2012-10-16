<?php
include 'connect.php';
//include 'head/headxemtin.php';
$db = new dbmanager();
$db->connect();
$sql="SELECT * FROM  `NEWS` LEFT JOIN  `news_image` ON  `news`.`NewsID` =  `news_image`.`NewsID` GROUP BY  `news`.`newsid` LIMIT 0 , 10";
$sql = "SELECT  `news`.`NewsID` 
FROM NEWS
LEFT JOIN news_image ON news.NewsID = news_image.NewsID
GROUP BY news.newsid
LIMIT 0 , 10";

print_r($db->getAll($sql));
?>