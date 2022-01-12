<?php

namespace app\Controllers;
use vendor\Controller;
use app\Models\Tickets as TicketsModel;

class Tickets extends Controller
{
    private $em;
    public function __construct() {
        $this->em = new TicketsModel();
    }

    public function getTicketsAsTicketid(){
        $Tickets_id = $_POST['Tickets_id'];
        return $this->em->getTicketsAsTicketid($Tickets_id);
    }

    public function getTicketsAsCustomerid(){
        $Customer_id = $_POST['Customer_id'];
        return $this->em->getTicketsAsCustomerid($Customer_id);
    }
    
    public function getTicketsAsFlightid(){
        $Flight_id = $_POST['Flight_id'];
        return $this->em->getTicketsAsFlightid($Flight_id);
    }
    
    public function newTicket(){
        $Tickets_detail_id = $_POST['Tickets_detail_id'];
        $Customer_id = $_POST['Customer_id'];
        $Place_id = $_POST['Place_id'];
        return $this->em->newTicket($Tickets_detail_id,$Customer_id,$Place_id);
    }

    public function newTicket_detail(){
        $Plane_id = $_POST['Plane_id'];
        $seat_level = $_POST['seat_level'];
        $seat_id = $_POST['seat_id'];
        return $this->em->newTicket_detail($Plane_id,$seat_level,$seat_id);
    }
    
    public function getvalidTickets(){        
        return $this->em->getvalidTickets();
    }

    public function getlastdetailid(){        
        return $this->em->getlastdetailid();
    }

    public function getticketasID(){
        $ID = $_POST['ID'];
        return $this->em->getticketasID($ID);
    }
    
    public function updateTicketsvalid(){
        $valid = $_POST['valid'];
        $Tickets_detail_id = $_POST['Tickets_detail_id'];
        return $this->em->updateTicketsvalid($valid,$Tickets_detail_id);
    }
}



?>