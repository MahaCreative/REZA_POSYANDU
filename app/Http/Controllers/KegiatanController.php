<?php

namespace App\Http\Controllers;
use App\Models\DataKegiatan;
use App\Models\{PelayananIbu, PelayananAnak};
use Illuminate\Http\Request;
use Carbon\Carbon;
class KegiatanController extends Controller
{
    public function index(Request $request){
        $query = DataKegiatan::query()->with('pelayananIbu', 'pelayananAnak')->withCount('pelayananIbu', 'pelayananAnak');
        $dataKegiatan = $query->get();

        return inertia('Admin/DataKegiatan/Index', compact('dataKegiatan'));
    }

    public function store(Request $request){

        $attr = $request->validate([
            'tanggal_kegiatan' => 'required|date|after:now',
            'catatan' => 'nullable|string',
        ]);

        $tanggalAkhir = Carbon::createFromFormat('Y-m-d', $request->tanggal_kegiatan)->endOfMonth();
        $cekKegiatan = DataKegiatan::whereBetween('tanggal_kegiatan', [$request->tanggal_kegiatan, $tanggalAkhir])->first();
        if($cekKegiatan){

            return redirect()->back()->withErrors(['message' => 'Sudah ada kegiatan yang ditambahkan bulan ini, anda tidak dapat lagi menambahkan kegiatan baru']);
        }
        $attr['kd_kegiatan'] = now()->format('ymd') . DataKegiatan::count() + 1;
        $attr['status_kegiatan'] = 'belum berlangsung';
        $dataKegiatan = DataKegiatan::create($attr);

    }

    public function delete(Request $request){
        $dataKegiatan = DataKegiatan::findOrFail($request->id);
        $dataKegiatan->delete();
    }

    public function show(Request $request){

        $dataKegiatan = DataKegiatan::with(['pelayananIbu' => function($q){
            $q->with('ibu');
        }, 'pelayananAnak' => function($q){
            $q->with(['data_anak' => function($q){
                $q->with('ibu');
            }]);
        }])
        ->where('kd_kegiatan', '=', $request->kd_kegiatan)->first();

        $countResiko = PelayananIbu::detail_count_resiko($dataKegiatan->id);
        $countPosisi = PelayananIbu::detail_count_pos_janin($dataKegiatan->id);
        $countImun = PelayananIbu::detail_count_pos_vaksin($dataKegiatan->id);
        $countPemberianVit = PelayananIbu::detail_count_vitamin_a($dataKegiatan->id);
        $countUsia = PelayananIbu::detail_usia_kehamilan($dataKegiatan->id);
        
        // get stati pelayanan ANak
        $jumlah_stunting = PelayananAnak::JumlahStunting($dataKegiatan->id);
        $jumlah_usia_anak = PelayananAnak::statistik_usia($dataKegiatan->id);
        dd($jumlah_usia_anak);
        return inertia('Admin/DataKegiatan/Show', compact('dataKegiatan','countResiko','countPosisi','countImun','countPemberianVit','countUsia'
    ));
    }
}
