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
        $Flight_id = $_POST['Flight_id'];
        $Customer_id = $_POST['Customer_id'];
        $Place_id = $_POST['Place_id'];
        return $this->em->newTicket($Flight_id,$Customer_id,$Place_id);
    }
}



?>