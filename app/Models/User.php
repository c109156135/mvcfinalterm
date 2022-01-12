<?php

namespace app\Models;
use vendor\DB;

class User{
    public function doLogin($ID) {
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `customer` WHERE ID = ?";
        $arg = array($ID);
        
        return DB::select($sql,$arg);
    }

}


?>