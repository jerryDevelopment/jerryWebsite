<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

$json = [
  "name" => "Front Page",
  "text" => "This is the front page"
];

print json_encode($json);
?>