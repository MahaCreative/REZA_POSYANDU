<?php

namespace App\Http\Controllers;

use App\Models\JenisImunisasi;
use App\Models\JenisVaksin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JenisVaksinController extends Controller
{
    public function index(Request $request)
    {
        $dataVaksin = JenisVaksin::latest()->get();
        $dataImunisasi = JenisImunisasi::latest()->get();
        return inertia('Admin/Vaksin/Index', compact('dataVaksin', 'dataImunisasi'));
    }
    public function store(Request $request)
    {

        $attr = $request->validate([
            "kd_imunisasi" => 'required|min:3|string',
            "nama_imunisasi" => 'required|min:3|string|unique:jenis_imunisasis,nama_imunisasi',
            "kategori" => 'required|in:anak,ibu',
        ]);
        $imunisasi = JenisImunisasi::create($attr);
        return redirect()->back()->with(['type' => 'success', 'message' => 'Berhasil menambah data']);
    }
    public function update(Request $request)
    {
        $attr = $request->validate([
            "kd_imunisasi" => 'required|min:3|string',
            "nama_imunisasi" => 'required|min:3|string|unique:jenis_imunisasis,nama_imunisasi',
            "kategori" => 'required|in:anak,ibu',
        ]);
        $imunisasi = JenisImunisasi::findOrFail($request->id);
        $imunisasi->update($attr);
        return redirect()->back()->with(['type' => 'success', 'message' => 'Berhasil mengubah data']);
    }

    public function delete(Request $request)
    {

        $imunisasi = JenisImunisasi::findOrFail($request->id);
        $imunisasi->delete();
        return redirect()->back()->with(['type' => 'success', 'message' => 'Berhasil menghapus data']);
    }

    // untuk vaksin
    public function store_vaksin(Request $request)
    {

        $attr = $request->validate([
            "kd_imunisasi" => 'required|min:3|string',
            "nama_imunisasi" => 'required|min:3|string|unique:jenis_vaksins,nama_imunisasi',
            "kategori" => 'required|in:anak,ibu',
        ]);

        $imunisasi = JenisVaksin::create($attr);
        return redirect()->back()->with(['type' => 'success', 'message' => 'Berhasil menambah data']);
    }
    public function update_vaksin(Request $request)
    {
        $attr = $request->validate([
            "kd_imunisasi" => 'required|min:3|string',
            "nama_imunisasi" => 'required|min:3|string|unique:jenis_imunisasis,nama_imunisasi',
            "kategori" => 'required|in:anak,ibu',
        ]);
        $imunisasi = JenisVaksin::findOrFail($request->id);
        $imunisasi->update($attr);
        return redirect()->back()->with(['type' => 'success', 'message' => 'Berhasil mengubah data']);
    }

    public function delete_vaksin(Request $request)
    {

        $imunisasi = JenisVaksin::findOrFail($request->id);
        $imunisasi->delete();
        return redirect()->back()->with(['type' => 'success', 'message' => 'Berhasil menghapus data']);
    }
}
