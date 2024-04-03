<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DataKader>
 */
class DataKaderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama_lengkap' => $this->faker->name(),
            'nik' => rand(111111111, 999999999),
            'tempat_lahir' => $this->faker->address(),
            'tgl_lahir' => $this->faker->date(),
            'alamat' => $this->faker->address(),
            'telephone' => $this->faker->phoneNumber(),
        ];
    }
}
