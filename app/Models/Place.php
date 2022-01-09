<?php

namespace app\Models;
use vendor\DB;

class Place{
    public function getPlaces(){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `place`";
        $arg = NULL;
        
        return DB::select($sql,$arg);
    }

    public function getPlacesAsid($Place_id){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `place` WHERE Place_id LIKE ?";
        $arg = array($Place_id);
        
        return DB::select($sql,$arg);
    }

    public function getStatusPlaces($Place_status){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `place` WHERE `Place_status` LIKE ?";
        $arg = array($Place_status);

        return DB::select($sql,$arg);
    }

    public function newPlace($Place_Name,$Place_Status){
        DB::connect();
        $sql = "INSERT INTO `place`(`Place_id`, `Place_Name`, `Place_Status`) VALUES ('',?,?)";
        return DB::insert($sql,array($Place_Name,$Place_Status)); 
    }

    public function updatePlace($Place_id,$Place_Status,$Place_Name){
        DB::connect();
        $sql = "UPDATE `place` SET `Place_Status` = ?, `Place_Name` = ? WHERE `place`.`Place_id` = ?";
        return DB::update($sql, array($Place_Status,$Place_Name,$Place_id));
    }

}


?>