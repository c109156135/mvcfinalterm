<?php

namespace app\Controllers;
use vendor\Controller;
use app\Models\Place as PlaceModel;

class Place extends Controller
{
    private $em;
    public function __construct() {
        $this->em = new PlaceModel();
    }

    public function getPlaces() {
        return $this->em->getPlaces();
        
    }

    public function getPlacesAsid(){
        $Place_id = $_POST['Place_id'];
        return $this->em->getPlacesAsid($Place_id);
    }
    
    public function getStatusPlaces() {
        $Place_status = $_POST['Place_status'];
        return $this->em->getStatusPlaces($Place_status);
    }
    
    public function newPlace() {
        $Place_Name = $_POST['Place_Name'];
        $Place_Status = $_POST['Place_Status'];
        return $this->em->newPlace($Place_Name,$Place_Status);
    }
    
    public function updatePlace() {
        $Place_id = $_POST['Place_id'];
        $Place_Status = $_POST['Place_Status'];
        $Place_Name = $_POST['Place_Name'];
        return $this->em->updatePlace($Place_id,$Place_Status,$Place_Name);
    }
}



?>