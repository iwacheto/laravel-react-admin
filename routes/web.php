<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/{path?}', 'ReactController@index');
Route::get('/admin{path?}', 'ReactController@index');
Route::get('/admin/dashboard{path?}', 'ReactController@index');
Route::get('/admin/table{path?}', 'ReactController@index');
Route::get('/admin/icons{path?}', 'ReactController@index');
Route::get('/admin/user{path?}', 'ReactController@index');
Route::get('/admin/add-child{path?}', 'ReactController@index');


// Queries
Route::post('/add-child', 'ReactController@addChild');


