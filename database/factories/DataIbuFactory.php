<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DataIbu>
 */
class DataIbuFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gol = ['A-', 'A+', 'B-', 'B+', 'AB-', 'AB+', 'O-', 'O+',];
        return [
            'nama_lengkap' => $this->faker->name(),
            'nik' => rand(111111111, 999999999),
            'gol_darah' => $gol[rand(0, count($gol) - 1)],
            'tempat_lahir' => $this->faker->address(),
            'tgl_lahir' => $this->faker->date(),
            'pendidikan_id' => rand(1, 9),
            'pekerjaan_id' => rand(1, 5),
            'alamat' => $this->faker->word(4),
            'desa' => $this->faker->word(4),
            'dusun' => $this->faker->word(4),
            'telephone' => $this->faker->phoneNumber(),
        ];
    }
}
