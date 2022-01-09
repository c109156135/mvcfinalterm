<?php

namespace app\Models;
use vendor\DB;

class Flight{
    public function getFlight($workday,$Takeoff_Place,$Arrived_place){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `flight` WHERE workday LIKE ? AND Takeoff_Place LIKE ? AND Arrived_place LIKE ?";
        $arg = array($workday,$Takeoff_Place,$Arrived_place);
        
        return DB::select($sql,$arg);
    }

    public function getFlightAsId($Flight_id){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `flight` WHERE Flight_id LIKE ?";
        $arg = array($Flight_id);

        return DB::select($sql,$arg);
    }

    public function newflight($workday,$Takeoff_Place,$Arrived_place,$Takeoff_time,$Arrived_time){
        DB::connect();
        $sql = "INSERT INTO `flight`(`Flight_id`, `workday`, `Takeoff_place`, `Arrived_place`, `Takeoff_time`, `Arrived_time`) VALUES ('',?,?,?,?,?)";
        return DB::insert($sql,array($workday,$Takeoff_Place,$Arrived_place,$Takeoff_time,$Arrived_time)); 
    }

    public function getFlights(){
        DB::connect();
        $sql = "SELECT * FROM `flight`";
        $arg = null;
        return DB::select($sql,$arg); 
    }

    public function updateFlights($Arrived_place,$Arrived_time,$Flight_id,$Takeoff_place,$Takeoff_time,$workday){
        DB::connect();
        $sql = "UPDATE `flight` SET `workday`=?,`Takeoff_place`=?,`Arrived_place`=?,`Takeoff_time`=?,`Arrived_time`=? WHERE `Flight_id` LIKE ? ";
        $arg = array($workday,$Takeoff_place,$Arrived_place,$Takeoff_time,$Arrived_time,$Flight_id);

        return DB::update($sql,$arg);
    }
}


?>