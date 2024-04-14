<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DataKegiatan>
 */
class DataKegiatanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'kd_kegiatan' => rand(0, 10000),
            'status_kegiatan' => 'selesai',
            'tanggal_kegiatan' => $this->faker->dateTimeBetween('- 3 years', 'now'),
        ];
    }
}
