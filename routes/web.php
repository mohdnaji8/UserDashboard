<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\QrCodeGeneratorController;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard',  [UserController::class, 'index'])
    ->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/User/create', [UserController::class,'create'])->name('admin.users.create');
Route::post('/User/store', [UserController::class,'store'])->name('admin.users.store');
Route::get('/User/{id}/editProfile', [UserController::class,'editProfile'])->name('admin.users.editProfile');
Route::put('/User/{id}/updateProfile', [UserController::class,'updateProfile'])->name('admin.users.updateProfile');
Route::put('/User/{id}/makeAdmin', [UserController::class,'makeAdmin'])->name('admin.users.makeAdmin');
Route::put('/User/{id}/makeActive', [UserController::class,'makeActive'])->name('admin.users.active');

Route::delete('/User/{id}/delete', [UserController::class,'destroy'])->name('admin.users.delete');

Route::get('/qr-codes', [QrCodeGeneratorController::class, 'generate']);
Route::get('/user/{id}/qrcode', function ($id) {
    $user =User::findOrFail($id);
    return QrCode::size(300)
            ->generate('http://127.0.0.1:8000/User/'.$user->id.'/editProfile ');
          //  ->generate('name: '.$user->name.'<br> email: '. $user->email);
})->name('qrcode');

require __DIR__.'/auth.php';
