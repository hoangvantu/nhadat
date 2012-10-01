<?php
// Y tuong xuat phat tu: http://simage.tinhte.vn/data.php?url=http://i1166.photobucket.com/albums/q605/fantasyy3/IMG_2046.jpg?t=1337324035&w=90&h=90
// The file
if(isset($_GET['url']))
$filename = $_GET['url'];
else
$filename = 'http://valplibrary.files.wordpress.com/2009/01/5b585d_merry-christmas-blue-style.jpg';

//$percent = 0.5; // percentage of resize

// Content type
header('Content-type: image/jpeg');

// Get new dimensions
list($width, $height) = getimagesize($filename);
if(isset($_GET['w'])&&isset($_GET['h']))
{
$new_width = $_GET['w'];
$new_height = $_GET['h'];
}
else
{
$new_width = 50;
$new_height = 50;
};
// Resample
$image_p = imagecreatetruecolor($new_width, $new_height);
$image = imagecreatefromjpeg($filename);
imagecopyresampled($image_p, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);

// Output
imagejpeg($image_p, null, 100);
?>