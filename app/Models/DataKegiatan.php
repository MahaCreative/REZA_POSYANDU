<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataKegiatan extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function PelayananAnak(){
        return $this->hasMany(PelayananAnak::class);
    }
    
    public function PelayananIbu(){
        return $this->hasMany(PelayananIbu::class);
    }
}
