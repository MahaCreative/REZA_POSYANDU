<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JenisImunisasi>
 */
class JenisImunisasiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $kategori = ['ibu', 'anak'];
        return [
            'kd_imunisasi' => $this->faker->word(1),
            'nama_imunisasi' => $this->faker->word(1),
            'kategori' => $kategori[rand(0, 1)],
        ];
    }
}
