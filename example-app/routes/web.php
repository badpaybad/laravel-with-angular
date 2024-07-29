<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Other routes for APIs and admin...
Route::prefix('api')->group(function () {
    // Your API routes go here...
});

Route::prefix('admin')->group(function () {
    // Your admin routes go here...
});


// Serve Angular static files correctly
Route::get('angularsample/{any}', function () {
    return file_get_contents(public_path('angularsample/index.html'));
})->where('any', '.*');

Route::get('angularsample', function () {
    return file_get_contents(public_path('angularsample/index.html'));
});


// Serve static files directly
Route::get('angularsample/{path}', function ($path) {
    $filePath = public_path('angularsample/' . $path);
    if (file_exists($filePath)) {
        return response()->file($filePath);
    }
    abort(404);
})->where('path', '.*');
