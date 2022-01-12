<?php

namespace app\Controllers;
use vendor\Controller;
use app\Models\Plane as PlaneModel;

class Plane extends Controller
{
    private $em;
    public function __construct() {
        $this->em = new PlaneModel();
    }

    public function getPlanes() {
        if (isset($_POST['Plane_id'])) {
            $Plane_id = $_POST['Plane_id'];
            return $this->em->getPlanes($Plane_id);
        } else {
            return $this->em->getPlanes(null);
        }
    }

    public function getPlanesAsName() {
        $Plane_name = $_POST['Plane_name'];
        return $this->em->getPlanesAsName($Plane_name);
    }


    public function getStatusPlanes() {
        $Plane_status = $_POST['Plane_status'];
        return $this->em->getStatusPlanes($Plane_status);
    }

    public function getAirport() {
        return $this->em->getAirport();
    }
    
    public function newPlane() {
        $Plane_name = $_POST['Plane_name'];
        $Flight_id = $_POST['Flight_id'];
        $Plane_status = $_POST['Plane_status'];
        return $this->em->newPlane($Plane_name, $Flight_id,$Plane_status);
    }

    public function addPlane() {
        $Plane_id = $_POST['Plane_id'];
        return $this->em->addPlane($Plane_id);
    }

    public function showPlaneseat(){
        $Plane_id = $_POST['Plane_id'];
        $seat_status = $_POST['seat_status'];
        return $this->em->showPlaneseat($Plane_id,$seat_status);
    }


    public function addPlaneSeat() {
        $Plane_id = $_POST['Plane_id'];
        $firstline = $_POST['firstline'];
        $firstrow = $_POST['firstrow'];
        $busline = $_POST['busline'];
        $busrow = $_POST['busrow'];
        $ecoline = $_POST['ecoline'];
        $ecorow = $_POST['ecorow'];
        return $this->em->addPlaneSeat($Plane_id,$firstline,$firstrow,$busline,$busrow,$ecoline,$ecorow);
    }
    
    public function updateFlight() {
        $Plane_id = $_POST['Plane_id'];
        $Flight_id = $_POST['Flight_id'];
        return $this->em->updateFlight($Plane_id,$Flight_id);
    }

    public function updatePlaneStatus() {
        $Plane_id = $_POST['Plane_id'];
        $Plane_status = $_POST['Plane_status'];
        return $this->em->updatePlaneStatus($Plane_id,$Plane_status);
    }

    public function updatePlane(){
        $Plane_id = $_POST['Plane_id'];
        $Plane_status = $_POST['Plane_status'];
        $Flight_id = $_POST['Flight_id'];
        $Plane_name = $_POST['Plane_name'];
        return $this->em->updatePlane($Plane_id,$Plane_status,$Flight_id,$Plane_name);
    }
    public function updatePlaneseatstatus(){
        $Plane_id = $_POST['Plane_id'];
        $seat_status = $_POST['seat_status'];
        $seat_id = $_POST['seat_id'];
        if ($seat_status == "empty"){
            $seat_status = "booked";
        } else {
            $seat_status = "empty";
        }
        
        return $this->em->updatePlaneseatstatus($Plane_id,$seat_status,$seat_id);
    }

}



?>