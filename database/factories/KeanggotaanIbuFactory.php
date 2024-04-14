<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\DataIbu;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KeanggotaanIbu>
 */
class KeanggotaanIbuFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $ibu = DataIbu::all();
        return [
            
            "kode_anggota" =>  rand(0,99999),
            "tanggal_pendaftaran" => $this->faker->dateTimeBetween('-2 years', 'now'),
            "usia_kehamilan" => rand(0, 90) ,
            "berat_badan" => rand(40, 90),
            "tinggi_badan" => rand(140, 180),
            "hpht" =>  $this->faker->dateTimeBetween('-2 years', 'now'),
            "htp" =>  $this->faker->dateTimeBetween('-2 years', 'now'),
            "hamil_ke" => rand(1,5),
        
        ];
    }
}
