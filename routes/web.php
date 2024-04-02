<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\JenisVaksinController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');


Route::get('jenis-vaksin-imunisasi', [JenisVaksinController::class, 'index'])->name('admin.jenis-vaksin');

Route::post('post-jenis-imunisasi', [JenisVaksinController::class, 'store'])->name('admin.post-jenis-imunisasi');
Route::post('update-jenis-imunisasi', [JenisVaksinController::class, 'update'])->name('admin.update-jenis-imunisasi');
Route::delete('delete-jenis-imunisasi', [JenisVaksinController::class, 'delete'])->name('admin.delete-jenis-imunisasi');

Route::post('post-jenis-vaksin', [JenisVaksinController::class, 'store_vaksin'])->name('admin.post-jenis-vaksin');
Route::post('update-jenis-vaksin', [JenisVaksinController::class, 'update_vaksin'])->name('admin.update-jenis-vaksin');
Route::delete('delete-jenis-vaksin', [JenisVaksinController::class, 'delete_vaksin'])->name('admin.delete-jenis-vaksin');
