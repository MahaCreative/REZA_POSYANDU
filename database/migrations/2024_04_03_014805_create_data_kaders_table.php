<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('data_kaders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable();
            $table->string('nama_lengkap');
            $table->string('nik');
            $table->string('tempat_lahir');
            $table->date('tgl_lahir');
            $table->string('alamat');
            $table->string('telephone');
            $table->string('foto')->default('image/preview_image.jpg');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_kaders');
    }
};
