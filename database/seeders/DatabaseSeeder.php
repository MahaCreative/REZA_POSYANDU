<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\DataIbu;
use App\Models\DataAnak;
use App\Models\DataKader;
use App\Models\DataKegiatan;
use App\Models\JenisImunisasi;
use App\Models\JenisVaksin;
use App\Models\KeanggotaanIbu;
use App\Models\PelayananAnak;
use App\Models\PelayananIbu;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PekerjaanSeeder::class,
            PendidikanSeeder::class,
        ]);
        JenisVaksin::factory(4)->create();
        JenisImunisasi::factory(4)->create();
        DataKader::factory(10)->create();
        DataIbu::factory(50)->create()->each(function ($ibu) {
            $ibu->keanggotaan()->saveMany(
                KeanggotaanIbu::factory(3)->make()
            );

            $ibu->anak()->saveMany(
                DataAnak::factory(3)->make()
            );
        });


        DataKegiatan::factory(20)->create()->each(function($kegiatan){
            $kegiatan->PelayananAnak()->saveMany(
                PelayananAnak::factory(30)->make()
            );
            $kegiatan->PelayananIbu()->saveMany(
                PelayananIbu::factory(30)->make()
            );
        });

      

    }
}
