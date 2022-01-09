<?php
namespace bootstrap;
require_once __DIR__."/../vendor/Autoload.php";
use vendor\DB;
use vendor\Router;
use app\Middleware\AuthMiddleware;

class Main{
    static function run(){
        $conf =  parse_ini_file(__DIR__ ."/../vendor/.env");
        DB::$dbHost = $conf['dbHost'];
        DB::$dbName = $conf['dbName'];
        DB::$dbUser = $conf['dbUser'];
        DB::$dbPassword = $conf['dbPassword'];

        if(isset($_GET['action'])){
            $action = $_GET['action'];
        }else {
            $action = "no_action";
        }
        $response = $responseToken = AuthMiddleware::checkToken();


        /// DEBUGMODE
        if (isset($_POST['debugmode'])) {
            $router = new Router;
            require_once __DIR__."/../routes/web.php";
            $response = $router->run($action);
            $response['token'] = $responseToken['token'];
        }
        ///



        
        if ($responseToken['status'] == 200) {
            if ($action != "no_action") {
                $router = new Router;
                require_once __DIR__."/../routes/web.php";
                $response = $router->run($action);
                $response['token'] = $responseToken['token'];
            } 
        }else {
            switch ($action) {
                case 'doLogin':
                    $response = AuthMiddleware::doLogin();
                    break;
                default:
                    break;
            }
        }
        echo json_encode($response);
        return $response;
    }
}

?>