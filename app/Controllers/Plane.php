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

    public function getStatusPlanes() {
        $Plane_status = $_POST['Plane_status'];
        return $this->em->getStatusPlanes($Plane_status);
    }
    
    public function newPlane() {
        $Plane_id = $_POST['Plane_id'];
        $Plane_name = $_POST['Plane_name'];
        $Flight_id = $_POST['Flight_id'];
        return $this->em->newPlane($Plane_id, $Plane_name, $Flight_id);
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


}



?>