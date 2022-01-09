<?php

namespace app\Models;
use vendor\DB;

class Tickets{
    public function getTicketsAsTicketid($Tickets_id){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `tickets` WHERE Tickets_id LIKE ?";
        $arg = array($Tickets_id);
        
        return DB::select($sql,$arg);
    }

    public function getTicketsAsCustomerid($Customer_id){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `tickets` WHERE Customer_id LIKE ?";
        $arg = array($Customer_id);

        return DB::select($sql,$arg);
    }
    
    public function getTicketsAsFlightid($Flight_id){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `tickets` WHERE Flight_id LIKE ?";
        $arg = array($Flight_id);

        return DB::select($sql,$arg);
    }

    public function newTicket($Flight_id,$Customer_id,$Place_id){
        DB::connect();
        $sql = "INSERT INTO `tickets`(`Tickets_id`, `Flight_id`, `Customer_id`, `Place_id`, `booked_time`) VALUES ('',?,?,?,null)";
        return DB::insert($sql,array($Flight_id,$Customer_id,$Place_id)); 
    }

}


?>