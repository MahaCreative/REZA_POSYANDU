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
        Schema::create('pelayanan_ibus', function (Blueprint $table) {
            $table->id();
            $table->foreignId('data_kegiatan_id')->references('id')->on('data_kegiatans')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('data_ibu_id')->references('id')->on('data_ibus')->onDelete('cascade')->onUpdate('cascade');
            $table->string('tinggi_badan');
            $table->string('berat_badan');
            $table->string('lingkar_lengan');
            $table->string('lingkar_perut');
            $table->string('tinggi_fundus');
            $table->string('detak_jantung_janin');
            $table->string('tekanan_darah_ibu');
            $table->string('posisi_janin');
            $table->string('pemberian_imunisasi')->default('tidak ada');
            $table->string('pemberian_vaksin')->default('tidak ada');
            $table->string('nomor_imunisasi')->nullable();
            $table->string('nomor_vaksin')->nullable();
            $table->string('pemberian_vitamin_a')->default('tidak ada');
            $table->string('umur_kehamilan');
            $table->string('resiko_kehamilan')->default('resiko kehamilan rendah');
            $table->string('tindakan')->nullable();
            $table->string('nasihat')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pelayanan_ibus');
    }
};
