<?php
require_once __DIR__."/Autoload.php";
require_once __DIR__."/JWT/JWT.php";
use \vendor\JWT\JWT;
function genToken($id){
    $secret_key = "wongkey";
    $issuer_claim = "http://localhost";
    $audience_claim = "http://localhost";
    $issuedat_claim = time(); // issued at
    $expire_claim = $issuedat_claim + 30;
    $payload = array(
        "iss" => $issuer_claim,
        "aud" => $audience_claim,
        "iat" => $issuedat_claim,
        "exp" => $expire_claim,
        "data" => array(
            "id" => $id,
      ));
    $jwt = JWT::encode($payload, $secret_key);
    //標準化輸出
    return $jwt;
}

?>