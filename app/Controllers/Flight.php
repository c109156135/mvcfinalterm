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
        $date = $_POST['date'];
        //轉成數字型態and判斷該日星期
        $date = intval($date);
        $workday = date("w",$date);
        //將函式判斷出來的變數回歸正常的星期
        if ($workday == 0) {
            $workday = 7;
        } else {
            $workday = $workday - 1;
        }
        $Takeoff_Place = $_POST['Takeoff_Place'];
        $Arrived_place = $_POST['Arrived_place'];
        return $this->em->getFlight($workday,$Takeoff_Place,$Arrived_place);
    }

    public function getFlightAsId(){
        $Flight_id = $_POST['Flight_id'];
        return $this->em->getFlightAsId($Flight_id);
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