<?php

include "config.php";
$condition = "1";
if(isset($_GET['id'])){
   $condition = " id=".$_GET['id'];
}
$query = "SELECT nonPlastic,created_at FROM smartbin WHERE created_at >= DATE_SUB(NOW(), INTERVAL 24 HOUR)";
$query_run = mysqli_query($con, $query);

$response = array();
while($row = mysqli_fetch_assoc($query_run)){

   $response[] = $row;
}

echo json_encode($response);
exit;

?>