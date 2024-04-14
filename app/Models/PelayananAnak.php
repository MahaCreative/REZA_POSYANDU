<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PelayananAnak extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function data_anak(){
        return $this->belongsTo(DataAnak::class, 'data_anak_id');
    }
    public function kegiatan(){
        return $this->belongsTo(DataKegiatan::class);
    }

     public static function jumlah_jenis_kelamin($id_kegiatan){
        $laki = static::where('jenis_kelamin', '=', 'laki-laki')->count();
        $perempuan = static::where('jenis_kelamin', 'perempuan')->count();
        $data = [
            ['jumlah' => $laki, 'kategori' => 'Laki-Laki'],
            ['jumlah' => $perempuan, 'kategori' => 'Perempuan']

    ];
        return $data;
    }
    public static function statistik_gol_anak($id_kegiatan){
        $gol = ['A-', 'A+', 'B-', 'B+', 'AB-', 'AB+', 'O-', 'O+',];
        $data = array();
        foreach($gol as $item){
            $data[] = [
                'name' => $item,
                'y' => static::where('gol_darah',$item)->count(),
            ];
        }
        return $data;
    }

    public static function statistik_usia($id_kegiatan){

        $query1 = static::query()->with('data_anak');
        $query2 = static::query()->with('data_anak');

         if($id_kegiatan){
            $query1->where('data_kegiatan_id','=', $id_kegiatan);
            $query2->where('data_kegiatan_id','=', $id_kegiatan);
        }

        $dataAnakLK = $query1->whereHas('data_anak', function($q){
            $q->where('jenis_kelamin', '=', 'laki-laki')->get();
        });
        $dataAnakPR = $query2->whereHas('data_anak', function($q){
            $q->where('jenis_kelamin', '=', 'perempuan')->get();
        });
        $kategori = ['0 - 3 bulan','4 - 6 bulan','7 - 12 bulan','13 + bulan'];
        $lk1=0;
        $lk2=0;
        $lk3=0;
        $lk4=0;
        $pr1=0;
        $pr2=0;
        $pr3=0;
        $pr4=0;

        foreach($dataAnakLK as $item){
            $tanggalLahir = new DateTime($item->tanggal_lahir);
            $selisih = $tanggalLahir->diff(Carbon::now());
            $umurLaki = ($selisih->y * 12) + $selisih->m;
            if($umurLaki >= 0 && $umurLaki <=3){
               $lk1 +=1;
            }
            else if($umurLaki >= 4 && $umurLaki <=6){
               $lk2 +=1;
            }
            else if($umurLaki >= 7 && $umurLaki <=12){
               $lk3 +=1;
            }
            else if($umurLaki >= 13){
               $lk4 +=1;
            }

        }
        foreach($dataAnakPR as $item){
            $tanggalLahir = new DateTime($item->tanggal_lahir);
            $selisih = $tanggalLahir->diff(Carbon::now());
            $umurLaki = ($selisih->y * 12) + $selisih->m;
            if($umurLaki >= 0 && $umurLaki <=3){
               $pr1 +=1;
            }
            else if($umurLaki >= 4 && $umurLaki <=6){
               $pr2 +=1;
            }
            else if($umurLaki >= 7 && $umurLaki <=12){
               $pr3 +=1;
            }
            else if($umurLaki >= 13){
               $pr4 +=1;
            }

        }

        return [
            'kategori'          => $kategori,
            'laki_laki' => [$lk1, $lk2, $lk3, $lk4],
            'perempuan' => [$pr1, $pr2, $pr3, $pr4],
        ];
    }

    public static function JumlahStunting($id_kegiatan){

        $query1 = static::query();
        $query2 = static::query();

        if($id_kegiatan){
            $query1->where('data_kegiatan_id','=', $id_kegiatan);
            $query2->where('data_kegiatan_id','=', $id_kegiatan);
        }
        $tidak = $query1->where('status_stunting', '=', 'tidak')->count();
        $stunting = $query2->where('status_stunting', '=', 'stunting')->count();

        return [
            ['kategori' => 'tidak', 'jumlah' => $tidak ],
            ['kategori' => 'stunting', 'jumlah' => $stunting ],
        ];
    }

}
