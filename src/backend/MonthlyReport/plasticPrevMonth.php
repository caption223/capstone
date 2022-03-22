<?php

include "config.php";
$condition = "1";
if(isset($_GET['id'])){
   $condition = " id=".$_GET['id'];
}
$query = "SELECT plastic,created_at FROM smartbin WHERE MONTH( created_at ) = MONTH( DATE_SUB(CURDATE(),INTERVAL 1 MONTH ))";
$query_run = mysqli_query($con, $query);

$response = array();
while($row = mysqli_fetch_assoc($query_run)){

   $response[] = $row;
}

echo json_encode($response);
exit;

?>