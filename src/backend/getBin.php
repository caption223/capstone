<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type, Authorization');
header('Content-Length: 0');
header('Content-Type: text/plain');
$con = mysqli_connect("localhost","root","","recycle_db") or die("could not connect DB");
$condition ="2";  
$query = "SELECT plastic, metal, nonPlastic, created_at FROM smartbin ORDER BY id DESC LIMIT 1";
$query_run = mysqli_query($con, $query);
//$binData = mysqli_query($con,"SELECT * FROM smartbin WHERE ".$condition);
if(isset($_GET['id'])){
   $condition = " id=".$_GET['id'];
}

$response = array();

while($row = mysqli_fetch_assoc($query_run)){

   $response[] = $row;
}

echo json_encode($response);
exit;