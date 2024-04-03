<?php

namespace App\Http\Controllers;

use App\Models\DataIbu;
use Illuminate\Http\Request;

class DataIbuController extends Controller
{
    public function index(Request $request)
    {
        $query = DataIbu::query()->with('pekerjaan', 'pendidikan');
        $dataIbu =  $query->get();
        return inertia("Admin/DataIbu/Index", compact('dataIbu'));
    }

    public function form_data_ibu(Request $request)
    {
        return inertia("Admin/DataIbu/ViewForm");
    }

    public function store(Request $request)
    {

        $attr = $request->validate([
            'nama_lengkap' => 'required|string|min:3',
            'nik' => 'required|numeric|unique:data_ibus,nik|digits:16',
            'tempat_lahir' => 'required|string|min:3',
            'tgl_lahir' => 'required',
            'gol_darah' => 'required',
            'alamat' => 'required|string|min:4',
            'desa' => 'required|string|min:4',
            'dusun' => 'required|string|min:4',
            'telephone' => 'required|numeric|digits:12',
            'pendidikan_id' => 'required',
            'pekerjaan_id' => 'required',
            'foto' => 'required',
        ]);
        if ($request->file('foto')) {
            $attr['foto'] = $request->file('foto')->store('FotoIbu', 'public');
        }
        $dataIbu = DataIbu::create($attr);
    }
    public function form_update_data_ibu(Request $request)
    {
        $dataIbu = DataIbu::with('pekerjaan', 'pendidikan')->findOrFail($request->id);
        return inertia("Admin/DataIbu/ViewForm", compact('dataIbu'));
    }

    public function update(Request $request)
    {

        dd($request->all());
    }
}
