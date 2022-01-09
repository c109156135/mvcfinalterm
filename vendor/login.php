<?php
    require_once __DIR__."/Autoload.php";
    require_once __DIR__."/genToken.php";
    $id = $_POST['id'];
    $password = $_POST['password'];
    //查詢DB驗證帳密的正確性
    $jwt = genToken($id);
    $response['status'] = 200;
    $response['message'] = "Access granted";
    $response['status'] = $jwt;
    echo json_encode($response);
?>
