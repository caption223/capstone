<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type, Authorization');
header('Content-Length: 0');
header('Content-Type: text/plain');
$con = mysqli_connect("localhost","root","","recycle_db") or die("could not connect DB");
?> 