<?php

$user = ($_POST['user']);
$email = ($_POST['email']);
$time = time();
$password = ($_POST['password']);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include("config.php");

    $sql = "INSERT INTO users (username, password, email,timestamp) VALUES ('" . mysql_real_escape_string($user) . "','" . mysql_real_escape_string($password) . "', '" . mysql_real_escape_string($email) . "', '$time')";

    $result = mysql_query($sql);
    if (!$result) {
	die(mysql_error());
    }
}
?>