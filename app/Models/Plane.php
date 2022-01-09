<?php

namespace app\Models;
use vendor\DB;

class Plane{
    public function getPlanes($Plane_id){
        //dbname is mvcfinal
        DB::connect();
        if ($Plane_id != NULL) {
            $sql = "SELECT * FROM `plane` WHERE `Plane_id` LIKE ?";
            $arg = array($Plane_id);
        }
        else {
            $sql = "SELECT * FROM `plane`";
            $arg = NULL;
        }
        return DB::select($sql,$arg);
    }

    public function getStatusPlanes($Plane_status){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `plane` WHERE `Plane_status` LIKE ?";
        $arg = array($Plane_status);

        return DB::select($sql,$arg);
    }

    public function newPlane($Plane_id,$Plane_name,$Flight_id){
        DB::connect();
        $sql = "INSERT INTO `plane`(`Plane_id`, `Flight_id`, `Plane_Name`, `Plane_status`) VALUES (?, ? ,?, 'Free');";
        return DB::insert($sql,array($Plane_id,$Flight_id,$Plane_name)); 
    }


    public function updateFlight($Plane_id,$Flight_id){
        DB::connect();
        $sql = "UPDATE `plane` SET `Flight_id` = ? WHERE `plane`.`Plane_id` = ?";
        return DB::update($sql, array($Flight_id,$Plane_id));
    }


    public function updatePlaneStatus($Plane_id,$Plane_status){
        //更改飛機狀態
        DB::connect();
        $sql = "UPDATE `plane` SET `Plane_status` = ? WHERE `plane`.`Plane_id` = ?";
        return DB::update($sql,array($Plane_status,$Plane_id));
    }

    
}


?>