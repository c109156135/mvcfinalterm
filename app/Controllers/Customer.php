<?php

namespace app\Controllers;
use vendor\Controller;
use app\Models\Customer as CustomerModel;

class Customer extends Controller
{
    private $em;
    public function __construct() {
        $this->em = new CustomerModel();
    }

    public function getCustomerAsID(){
        $ID = $_POST['ID'];
        return $this->em->getCustomerAsID($ID);
    }

    public function getCustomers(){
        return $this->em->getCustomers();
    }

    public function getCustomerAsCustid(){
        $Customer_id = $_POST['Customer_id'];
        return $this->em->getCustomerAsCustid($Customer_id);
    }
    
    public function newCustomer(){
        $ID = $_POST['ID'];
        $Name = $_POST['Name'];
        $Phone = $_POST['Phone'];
        return $this->em->newCustomer($ID,$Name,$Phone);
    }
    
    public function updateCustomer() {
        $Customer_id = $_POST['Customer_id'];
        $ID = $_POST['ID'];
        $Name = $_POST['Name'];
        $Phone = $_POST['Phone'];
        return $this->em->updateCustomer($Customer_id,$ID,$Name,$Phone);
    }
}



?>