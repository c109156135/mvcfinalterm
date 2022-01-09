<?php

namespace app\Models;
use vendor\DB;

class Customer{
    public function getCustomerAsID($ID){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `customer` WHERE ID LIKE ?";
        $arg = array($ID);
        
        return DB::select($sql,$arg);
    }

    public function getCustomerAsCustid($Customer_id){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `customer` WHERE Customer_id LIKE ?";
        $arg = array($Customer_id);

        return DB::select($sql,$arg);
    }

    public function getCustomers(){
        //dbname is mvcfinal
        DB::connect();
        $sql = "SELECT * FROM `customer`";
        $arg = array();

        return DB::select($sql,$arg);
    }

    public function newCustomer($ID,$Name,$Phone){
        DB::connect();
        $sql = "INSERT INTO `customer`(`Customer_id`, `ID`, `Name`, `Phone`) VALUES ('',?,?,?)";

        return DB::insert($sql,array($ID,$Name,$Phone)); 
    }

    public function updateCustomer($Customer_id,$ID,$Name,$Phone){
        DB::connect();
        $sql = "UPDATE `customer` SET `ID`=? , `Name`=? , `Phone`=? WHERE `customer`.`Customer_id` LIKE ?";
        $arg = array($ID,$Name,$Phone,$Customer_id);

        return DB::update($sql,$arg);
    }

    

    

}


?>