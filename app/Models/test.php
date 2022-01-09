<?php

namespace app\Models;
use vendor\DB;

class Employee{
    public function getUsers(){
        $sql = "SELECT  *  FROM  `user`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }
    public function getUser($id){
        $sql = "SELECT  *  FROM  `user` WHERE `id`=?";
        $arg = array($id);
        return DB::select($sql, $arg);
    }
    public function newUser($id, $password, $email, $phone){
        $sql = "INSERT INTO `user` (`id`, `password`, `email`, `phone`) VALUES (?, ?, ?, ?)";
        return DB::insert($sql, array($id, $password, $email, $phone));
    }
    public function removeUser($id){
        $sql = "DELETE FROM `user` WHERE id=?";
        return DB::delete($sql, array($id));
    }
    public function updateUser($id, $password, $email, $phone){
        $sql = "UPDATE `user` SET `password`=?, `email`=?, `phone`=? WHERE id=?";
        return DB::update($sql, array($password, $email, $phone, $id));
    }
}


?>