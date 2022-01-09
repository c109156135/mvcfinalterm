<?php
require_once __DIR__."/Autoload.php";
use \vendor\JWT\JWT;
use \vendor\JWT\Key;
$headers = getallheaders();
$jwt = $headers['Authorization'];
$secret_key = "wongkey";
try {
    $decode = JWT::decode($jwt,new Key($secret_key,'HS256'));
    $jwt = genToken($payload->data->id);
    $response['status'] = 200;
    $response['message'] = "Access granted";
    $response['token'] =  $jwt;
} catch (Exception $e) {
    $response['status'] = 403;
    $response['message'] = $e->getMessage();
}
echo json_encode($response);
?>