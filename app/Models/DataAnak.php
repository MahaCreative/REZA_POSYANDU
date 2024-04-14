<?php

namespace App\Models;

use Carbon\Carbon;
use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;

class DataAnak extends Model
{

    use HasFactory;
    protected $guarded = [];

    public function pelayanan_anak(){
        return $this->hasMany(PelayananAnak::class, 'data_anak_id');
    }

    public function ibu(){
        return $this->belongsTo(DataIbu::class, 'data_ibu_id');
    }

   }
