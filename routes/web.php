<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
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

Route::get('/assets', function () {
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
