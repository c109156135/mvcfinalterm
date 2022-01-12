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

    public function newTicket($Tickets_detail_id,$Customer_id,$Place_id){
        DB::connect();
        $sql = "INSERT INTO `tickets`(`Tickets_id`, `Tickets_detail_id`, `Customer_id`, `Place_id`, `booked_time`) VALUES ('',?,?,?,null)";
        return DB::insert($sql,array($Tickets_detail_id,$Customer_id,$Place_id)); 
    }

    public function newTicket_detail($Plane_id,$seat_level,$seat_id){
        DB::connect();
        $sql = "INSERT INTO `tickets_detail`(`Tickets_detail_id`, `Plane_id`, `seat_level`, `seat_id`, `valid`) VALUES ('',?,?,?,?)";
        $arg = array($Plane_id,$seat_level,$seat_id,"true");
        return DB::insert($sql,$arg); 
    }

    public function getvalidTickets(){
        DB::connect();
        $sql = "SELECT tickets.Tickets_id,plane.Flight_id,plane.Plane_Name,tickets_detail.seat_id,customer.Name,place.Place_Name,tickets.booked_time,plane.Plane_id,tickets_detail.Tickets_detail_id
        FROM tickets,tickets_detail,customer,place,plane 
        WHERE tickets.Tickets_detail_id = tickets_detail.Tickets_detail_id AND tickets.Customer_id = customer.Customer_id 
        AND tickets.Place_id = place.Place_id AND tickets_detail.Plane_id = plane.Plane_id AND tickets_detail.valid LIKE 'true'";
        $arg = null;
        return DB::select($sql,$arg); 
    }

    public function getlastdetailid(){
        DB::connect();
        $sql = "SELECT * FROM `tickets_detail`  
                ORDER BY `tickets_detail`.`Tickets_detail_id` DESC
                LIMIT 1";
        $arg = null;
        return DB::select($sql,$arg); 
    }

    public function getticketasID($ID){
        DB::connect();
        $sql = "SELECT customer.Customer_id,customer.Name,tickets.Tickets_id,place.Place_Name,tickets_detail.Plane_id,seat_level,seat_id,valid,tickets_detail.Tickets_detail_id
        FROM customer,tickets,tickets_detail,place
        WHERE customer.Customer_id = tickets.Customer_id
        AND		tickets.Tickets_detail_id = tickets_detail.Tickets_detail_id
        AND		tickets.Place_id = place.Place_id
        AND		customer.ID = ?";
        $arg = array($ID);
        return DB::select($sql,$arg); 
    }

    public function updateTicketsvalid($valid,$Tickets_detail_id){
        DB::connect();
        $sql = "UPDATE `tickets_detail` SET `valid`= ? WHERE `Tickets_detail_id`= ?";
        $arg = array($valid,$Tickets_detail_id);
        return DB::update($sql,$arg); 
    }

}


?>