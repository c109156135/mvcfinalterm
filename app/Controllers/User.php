<?php

namespace app\Controllers;
use vendor\Controller;
use app\Models\User as UserModel;

class User extends Controller
{
    private $em;
    public function __construct() {
        $this->em = new UserModel();
    }

    public function doLogin(){
        $id = $_POST['id'];
        return $this->em->doLogin($id);
    }

}



?>