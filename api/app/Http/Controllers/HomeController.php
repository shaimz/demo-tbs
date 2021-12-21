<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        try {
            $connection = mysqli_connect('89.42.218.13','tbs_boom','caramida2001','tbs_boom',3306);
            if($connection->connect_errno){
                echo $connection->connect_error;

                }else{
                    dd('success');
                }

        } catch (Exception $e) {

            return false;

        }
    }
}
