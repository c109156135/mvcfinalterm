<?php
namespace app\Middleware;
require_once __DIR__.'/../../vendor/Autoload.php';
use Exception;
use \vendor\JWT\JWT;
use \vendor\Router;
class AuthMiddleware {
    public static function checkToken(){
        $headers = getallheaders();
        $jwt = $headers['Authorization'];
        $secret_key = "wongkey";
        try {
            $payload = JWT::decode($jwt, $secret_key, array('HS256'));
            $jwt = self::genToken($payload->data->id);
            $response['status'] = 200;
            $response['message'] = "Access granted";
            $response['token'] =  $jwt;
        } catch (Exception $e) {
            $response['status'] = 403;
            $response['message'] = $e->getMessage();
        }
        return $response;
    }
    public static function doLogin(){
        $id = $_POST['id'];
        $router = new Router;
        require_once __DIR__."/../../routes/web.php";
        $response = $router->run("doLogin");
        if (isset($responseToken['token'])) {
            $response['token'] = $responseToken['token'];
        }
        //做登入判斷
        
        $jwt = self::genToken($id);
        $response['status'] = 200;
        $response['message'] = "Access granted";
        $response['token'] = $jwt;
        return $response;
    }
    public static function genToken($id){
        $secret_key = "wongkey";
        $issuer_claim = "http://localhost";
        $audience_claim = "http://localhost";
        $issuedat_claim = time(); // issued at
        $expire_claim = $issuedat_claim + 120;
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
}

?>