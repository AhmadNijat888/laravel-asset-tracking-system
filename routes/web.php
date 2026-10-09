<?php

use App\Http\Controllers\AssetController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DepartmentController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('signup');
});

Route::get('/index', function () {
    return view('index');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/dashboard', function () {
    return view('dashboard');
});

Route::get('/assets-page', function () {
    return view('assets');
});

Route::get('/search', function () {
    return view('search');
});

Route::get('/reports', function () {
    return view('reports');
});

Route::get('/contact', function () {
    return view('contact');
});


Route::resource('assets', AssetController::class);
Route::resource('users', UserController::class);
Route::resource('departments', DepartmentController::class);
