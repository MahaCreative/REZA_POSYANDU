<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataIbu extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function pekerjaan()
    {
        return $this->belongsTo(Pekerjaan::class);
    }
    public function pendidikan()
    {
        return $this->belongsTo(Pendidikan::class);
    }
    public function anak(){
        return $this->hasMany(DataAnak::class);
    }
    public function keanggotaan(){
        return $this->hasOne(KeanggotaanIbu::class);
    }

    public function pelayanan_ibu(){
        return $this->belongsTo(PelayananIbu::class, 'data_ibu_id');
    }
}
