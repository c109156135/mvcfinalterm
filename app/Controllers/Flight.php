<?php

namespace app\Controllers;
use vendor\Controller;
use app\Models\Flight as FlightModel;

class Flight extends Controller
{
    private $em;
    public function __construct() {
        $this->em = new FlightModel();
    }

    public function getFlight(){
        $weekarray=array(7,1,2,3,4,5,6);
        $date = $_POST['date'];
        $workday = $weekarray[date("w",strtotime($date))];
        $Takeoff_Place = $_POST['Takeoff_Place'];
        $Arrived_place = $_POST['Arrived_place'];
        return $this->em->getFlight($workday,$Takeoff_Place,$Arrived_place);
    }

    public function getFlightAsId(){
        $Flight_id = $_POST['Flight_id'];
        return $this->em->getFlightAsId($Flight_id);
    }
    
    public function getFlightasplaneid(){
        $Flight_id = $_POST['Flight_id'];
        return $this->em->getFlightasplaneid($Flight_id);
    }
    
    public function newflight(){
        $workday = $_POST['workday'];
        $Takeoff_Place = $_POST['Takeoff_Place'];
        $Arrived_place = $_POST['Arrived_place'];
        $Takeoff_time = $_POST['Takeoff_time'];
        $Arrived_time = $_POST['Arrived_time'];
        return $this->em->newflight($workday,$Takeoff_Place,$Arrived_place,$Takeoff_time,$Arrived_time);
    }
    public function getFlights(){
        return $this->em->getFlights();

    }
    public function updateFlights(){
        $workday = $_POST['workday'];
        $Takeoff_place = $_POST['Takeoff_place'];
        $Arrived_place = $_POST['Arrived_place'];
        $Takeoff_time = $_POST['Takeoff_time'];
        $Arrived_time = $_POST['Arrived_time'];
        $Flight_id = $_POST['Flight_id'];
        return $this->em->updateFlights($Arrived_place,$Arrived_time,$Flight_id,$Takeoff_place,$Takeoff_time,$workday);
    }

}



?>