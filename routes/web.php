<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

foreach (config('tenancy.identification.central_domains') as $domain) {
    Route::domain($domain)->group(function () {
        Route::get('/', function () {
            return Inertia::render('Central/Home');
        })->name('home');

        Route::get('/about', function () {
            return Inertia::render('Central/AboutUs');
        })->name('about');

        Route::get('/pricing', function () {
            return Inertia::render('Central/Pricing');
        })->name('pricing');

        Route::get('/career', function () {
            return Inertia::render('Central/Career');
        })->name('career');

        Route::get('/contact', function () {
            return Inertia::render('Central/Contact');
        })->name('contact');
    });
}