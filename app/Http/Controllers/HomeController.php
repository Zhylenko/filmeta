<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function Show()
    {
    	$title = 'Filmeta';
    	return view('home.show', ['title' => $title]);
    }


}
