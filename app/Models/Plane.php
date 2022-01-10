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

    public function getPlanesAsName($Plane_name){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `plane` WHERE `Plane_name` LIKE ?";
        $arg = array($Plane_name);
 
        return DB::select($sql,$arg);
    }

    public function getStatusPlanes($Plane_status){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `plane` WHERE `Plane_status` LIKE ?";
        $arg = array($Plane_status);

        return DB::select($sql,$arg);
    }

    public function newPlane($Plane_name,$Flight_id,$Plane_status){
        DB::connect();
        $sql = "INSERT INTO `plane`(`Plane_id`, `Flight_id`, `Plane_Name`, `Plane_status`) VALUES (null, ? ,?, ?);";
        return DB::insert($sql,array($Flight_id,$Plane_name,$Plane_status)); 
    }

    public function addPlane($Plane_id){
        DB::$dbName = 'plane';
        DB::connect();
        $sql = "CREATE TABLE `plane`.`?` ( `seat_line` TEXT NOT NULL ,`seat_row` TEXT NOT NULL , `seat_level` TEXT NOT NULL , `seat_status` TEXT NOT NULL ) ENGINE = InnoDB;";
        return DB::insert($sql,array($Plane_id)); 
    }

    public function addPlaneSeat($Plane_id,$firstline,$firstrow,$busline,$busrow,$ecoline,$ecorow){
        DB::$dbName = 'plane';
        DB::connect();
        $x = 0;
        //頭等
        for ($i=0; $i < $firstline ; $i++) { 
            if ($i == $firstline and $x==$firstrow-1) {
                $sql = "INSERT INTO `?` (`seat_line`,`seat_row`, `seat_level`, `seat_status`) VALUES (?, ?, 'first', 'empty');";
                return DB::insert($sql,array($Plane_id,$firstline,$firstrow));
            } else {
                for ($x=0; $x < $firstrow ; $x++) { 
                    $sql = "INSERT INTO `?` (`seat_line`,`seat_row`, `seat_level`, `seat_status`) VALUES (?, ?, 'first', 'empty');";
                    DB::insert($sql,array($Plane_id,$i+1,$x+1));
                }                   
            }
        }
        //商務
        for ($i=0; $i < $busline ; $i++) { 
            if ($i == $busline and $x==$busrow-1) {
                $sql = "INSERT INTO `?` (`seat_line`,`seat_row`, `seat_level`, `seat_status`) VALUES (?, ?, 'business', 'empty');";
                return DB::insert($sql,array($Plane_id,$busline,$busrow));
            } else {
                for ($x=0; $x < $busrow ; $x++) { 
                    $sql = "INSERT INTO `?` (`seat_line`,`seat_row`, `seat_level`, `seat_status`) VALUES (?, ?, 'business', 'empty');";
                    DB::insert($sql,array($Plane_id,$i+1,$x+1));
                }                   
            }
        }

        //經濟
        for ($i=0; $i < $ecoline ; $i++) { 
            if ($i == $ecoline and $x==$ecorow-1) {
                $sql = "INSERT INTO `?` (`seat_line`,`seat_row`, `seat_level`, `seat_status`) VALUES (?, ?, 'economy', 'empty');";
                return DB::insert($sql,array($Plane_id,$ecoline,$ecorow));
            } else {
                for ($x=0; $x < $ecorow ; $x++) { 
                    $sql = "INSERT INTO `?` (`seat_line`,`seat_row`, `seat_level`, `seat_status`) VALUES (?, ?, 'economy', 'empty');";
                    DB::insert($sql,array($Plane_id,$i+1,$x+1));
                }                   
            }
        }
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