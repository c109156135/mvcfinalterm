<?php

namespace app\Controllers;
use vendor\Controller;
use app\Models\Flight_records as Flight_recordsModel;

class Flight_records extends Controller
{
    private $em;
    public function __construct() {
        $this->em = new Flight_recordsModel();
    }

    public function getflight_recordsAsFlightid(){
        $Flight_id = $_POST['Flight_id'];
        return $this->em->getflight_recordsAsFlightid($Flight_id);
    }

    public function newflight_records(){
        $Flight_id = $_POST['Flight_id'];
        $Takeoff_time = $_POST['Takeoff_time'];
        $Arrived_time = $_POST['Arrived_time'];
        $Flight_records_status = $_POST['Flight_records_status'];
        return $this->em->newflight_records($Flight_id,$Takeoff_time,$Arrived_time,$Flight_records_status);
    }
    
}



?>