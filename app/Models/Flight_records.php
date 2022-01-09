<?php

namespace app\Models;
use vendor\DB;

class Flight_records{
    public function getflight_recordsAsFlightid($Flight_id){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `flight_records` WHERE Flight_id LIKE ?";
        $arg = array($Flight_id);
        
        return DB::select($sql,$arg);
    }

    public function newflight_records($Flight_id,$Takeoff_time,$Arrived_time,$Flight_records_status){
        DB::connect();
        $sql = "INSERT INTO `flight_records`(`Flight_records_id`, `Flight_id`, `Takeoff_time`, `Arrived_time`, `Flight_records_status`, `Record_time`) VALUES ('',?,?,?,?,'')";
        return DB::insert($sql,array($Flight_id,$Takeoff_time,$Arrived_time,$Flight_records_status)); 
    }



}


?>