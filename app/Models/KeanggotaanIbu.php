<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KeanggotaanIbu extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function ibu(){
        return $this->belongsTo(DataIbu::class, 'data_ibu_id');
    }

   
}
