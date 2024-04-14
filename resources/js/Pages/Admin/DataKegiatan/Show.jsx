import React, {useState, useEffect} from 'react'

import AdminLayout from '@/Layouts/AdminLayout'
import InputText from "@/Components/InputText";
import Loading from "@/Components/Loading";
import { Link, router } from "@inertiajs/react";
import { Add, Delete, Edit, Cancel } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Tooltip } from "@mui/material";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import ShowGrafik from './ShowGrafik'
let detailKegiatan = '';
export default function Show(props){
	const countResiko = props.countResiko
	const countUsia = props.countUsia
	const countPosisi = props.countPosisi
	const countImun = props.countImun
	const countPemberianVit = props.countPemberianVit
	const dataKegiatan = props.dataKegiatan
	detailKegiatan = dataKegiatan.kd_kegiatan
	const columnsIbu = [
		{
			name:"Aksi",
			width:"60px",
			selector : row => <div>
				  <button
                        className="py-1 text-xs px-1 rounded-md text-white hover:cursor-pointer hover:bg-blue-700 bg-blue-500"
                    >
                        <Tooltip title="Lihat semua data pelayanan ibu">
                            <VisibilityIcon color="inherit" fontSize="inherit" />
                        </Tooltip>
                    </button>

			</div>, wrap:true
		},
		{
			name:"Nama Ibu",
			selector : row => row.ibu.nama_lengkap, wrap:true
		},
		{
			name:"NIK",
			selector : row => row.ibu.nik, wrap:true
		},
		{
			name:"Umur Kehamilan",
			selector : row => row.umur_kehamilan + " Minggu", wrap:true, width:"130px"
		},
		{
			name:"Resiko Kehamilan",
			selector : row => row.resiko_kehamilan, wrap:true, width:"130px"
		},
		{
			name:"BB/TB",
			selector : row => `${row.berat_badan} KG / ${row.tinggi_badan} Cm`, wrap:true
		},
		{
			name:"Lingkar Lengan",
			selector : row => `${row.lingkar_lengan} Cm`, wrap:true, width:"120px"
		},
		{
			name:"Lingkar Perut",
			selector : row => `${row.lingkar_perut} Cm`, wrap:true
		},
		{
		name:"Tinggi Fundus",
			selector : row => `${row.tinggi_fundus} Cm`, wrap:true
		},
		{
			name:"Detak Janin",
			selector : row => `${row.detak_jantung_janin}`
		},	
		{
			name:"Tekanan Darah Ibu",
			selector : row => `${row.tekanan_darah_ibu}`, wrap:"true", width:"140px"
		},	
		{
			name:"Posisi Janin",
			selector : row => `${row.posisi_janin}`
		},	
		{
			name:"Imunisasi / Vaksin",
			selector : row => `${row.pemberian_imunisasi} / ${row.pemberian_vaksin}`, wrap:true, width:"150px"
		},	
		{
			name:"Pemberian Vit A",
			selector : row => row.pemberian_vitamin_a
		},	
		{
			name:"Tindakan",
			selector : row => row.tindakan
		},	
		{
			name:"nasihat",
			selector : row => row.nasihat
		},	
	]
	const columnsAnak = [
		{
			name:"Aksi",
			width:"60px",
			selector : row => <div>
				  <button
                        className="py-1 text-xs px-1 rounded-md text-white hover:cursor-pointer hover:bg-blue-700 bg-blue-500"
                    >
                        <Tooltip title="Lihat semua data pelayanan ibu">
                            <VisibilityIcon color="inherit" fontSize="inherit" />
                        </Tooltip>
                    </button>

			</div>, wrap:true
		},
		{
			name:"Nama Ibu",
			selector : row => row.anak.ibu.nama_lengkap, wrap:true
		},
		{
			name:"Nama Anak",
			selector : row => row.anak.nama, wrap:true
		},
		{
			name:"Berat Badan",
			selector : row => <div>
				<p> Sebelumnya : {row.berat_badan_sebelumnya} Kg</p>
					<p> Sekarang : {row.berat_badan_sekarang} Kg</p>
			</div>, wrap:true
		},
		{
			name:"Tinggi Badan",
			selector : row => <div>
				<p> Sebelumnya : {row.tinggi_badan_sebelumnya} Cm</p>
					<p> Sekarang : {row.tinggi_badan_sekarang} Cm</p>
			</div>, wrap:true, width:"130px"
		},
		{
			name:"Lingkar Kepala",
			selector : row => <div>
				<p> Sebelumnya : {row.lingkar_kepala_sebelumnya} Cm</p>
					<p> Sekarang : {row.lingkar_kepala_sekarang} Cm</p>
			</div>, wrap:true, width:"130px"
		},
			{
			name:"Lingkar Lengan",
			selector : row => <div>
				<p> Sebelumnya : {row.lingkar_lengan_sebelumnya} Cm</p>
					<p> Sekarang : {row.lingkar_lengan_sekarang} Cm</p>
			</div>, wrap:true, width:"120px"
		},
		{
			name:"Status Stunting",
			selector : row => <div>
				<p>{row.status_stunting} </p>
			</div>, wrap:true, width:"120px"
		},
		{
			name:"Status Gizi",
			selector : row => <div>
				<p> BB/U : {row.bb_u} </p>
				<p> TB/U : {row.tb_u} </p>
				<p> BB/TB : {row.bb_tb} </p>
				<p> IMT/U : {row.imt_u} </p>
			</div>, wrap:true, width:"150px"
		},
		{
			name:"Mengidap Diare",
			selector : row => <div>
				<p> {row.mengidap_diare} </p>
					
			</div>, wrap:true, width:"120px"
		},
		{
			name:"Pemberian Vitamin",
			selector : row => <div>
				<p> Vitamin A:  {row.pemberian_vit_a} </p>
				<p> Oralit:  {row.pemberian_oralit} </p>	
			</div>, wrap:true,
			width:"140px"
		},
		{
			name:"Imunisasi / Vaksin",
			selector : row => <div>
				<p> Imunisasi:  {row.pemberian_imunisasi} </p>
				<p> Vaksin:  {row.pemberian_vaksin} </p>	
			</div>, wrap:true, width:"190px"
		},
	]
	
	
	return (

		<div>
			<div className='w-full bg-white rounded-md shadow-md shadow-gray-500/30 py-2 px-3'>
                    <div className='my-3 rounded-md overflow-hidden py-2 px-3 bg-white rounded-md'>
                    	<h1 className='text-pink-500 text-xl my-3'>Data Pelayanan Ibu</h1>	
                    	<div className="flex items-center justify-end w-full">
                     
                        <div className="flex gap-3 items-center text-white">
                             <button
                                className="py-1 px-2 rounded-lg bg-blue-500 hover:bg-blue-500"
                            
                            >
                                <Add color="inherit" fontSize="small" />
                            </button>
                            <InputText
                                className="bg-white rounded-md overflow-hidden "
                                label={"Cari Data"}
                            />
                        </div>
                    </div>
                    	<div className='text-xs'>
                    		<DataTable data={dataKegiatan.pelayanan_ibu} columns={columnsIbu}  pagination/>
                    	</div>
                    	<div>
                    		<h1 className='text-pink-500 text-xl my-3'>Statistik Pelayanan Ibu</h1>	
                    		{/*Table count*/}
                    		<div>
                    			<table className='w-full border border-gray-500/40 table-auto'>
                    				<thead className='capitalize'>
                    					<tr>
                    						<th className='border border-gray-500/40' rowspan="2">#</th>
                    						<th className='border border-gray-500/40' colspan="2">Resiko Kehamilan</th>
                    						<th className='border border-gray-500/40' colspan="4">Posisi Janin</th>
                    						<th className='border border-gray-500/40' colspan="4">Pemberian Vitamin A</th>
                    					</tr>
                    					<tr>
                    						{countResiko.map((item, key) => <th className='border border-gray-500/40' key={key}>{item.kategori}</th>)}
                    						{countPosisi.map((item, key) => <th className='border border-gray-500/40' key={key}>{item.kategori}</th>)}
                    						{countPemberianVit.map((item, key) => <th className='border border-gray-500/40' key={key}>{item.kategori}</th>)}
                    					</tr>
                    				</thead>
                    				<tbody>
                    					<tr>
                    						<td  className='border border-gray-500/40'>Jumlah</td>
	                    					
	                    						{countResiko.map((item, key) => <td className='border border-gray-500/40 text-center' key={key}>{item.jumlah}</td>)}
	                    						{countPosisi.map((item, key) => <td className='border border-gray-500/40 text-center' key={key}>{item.jumlah}</td>)}
	                    					 	{countPemberianVit.map((item, key) => <td className='border border-gray-500/40 text-center' key={key}>{item.jumlah}</td>)}
                    					</tr>
                    				</tbody>
                    			</table>
                    			<table className='w-full border border-gray-500/40 table-auto my-3'>
                    				<thead className='capitalize'>
                    					<tr>
                    						<th className='border border-gray-500/40' rowspan="2">#</th>
                    						<th className='border border-gray-500/40' colspan={countImun.jumlah_imunisasi.length}>Pemberian Imunisasi</th>
                    						<th className='border border-gray-500/40' colspan={countImun.jumlah_vaksin.length}>Pemberian Vaksin</th>
                    						
                    					</tr>
                    					<tr>
                    						{countImun.jumlah_imunisasi.map((item, key) => <th className='border border-gray-500/40' key={key}>{item.kategori}</th>)}
                    						{countImun.jumlah_vaksin.map((item, key) => <th className='border border-gray-500/40' key={key}>{item.kategori}</th>)}
                    						
                    					</tr>
                    				</thead>
                    				<tbody>
                    					<tr>
                    						<td  className='border border-gray-500/40'>Jumlah</td>
	                    					
	                    						{countImun.jumlah_imunisasi.map((item, key) => <td className='border border-gray-500/40 text-center' key={key}>{item.jumlah}</td>)}
	                    						{countImun.jumlah_vaksin.map((item, key) => <td className='border border-gray-500/40 text-center' key={key}>{item.jumlah}</td>)}
	                    					 	
                    					</tr>
                    				</tbody>
                    			</table>
                    		</div>
                    		{/*Grafik*/}
                    		<ShowGrafik countUsia={countUsia}
	                    		countResiko={countResiko}
								countPosisi={countPosisi}
								countImun={countImun}
								countPemberianVit={countPemberianVit}
							/>
                    	</div>
                    </div>
                    <div className='my-3 rounded-md overflow-hidden py-2 px-3 bg-white rounded-md'>
                    	<h1 className='text-pink-500 text-xl my-3'>Data Pelayanan Anak</h1>	
                    	<div className="flex items-center justify-end w-full">
                     
                        <div className="flex gap-3 items-center text-white">
                             <button
                                className="py-1 px-2 rounded-lg bg-blue-500 hover:bg-blue-500"
                            
                            >
                                <Add color="inherit" fontSize="small" />
                            </button>
                            <InputText
                                className="bg-white rounded-md overflow-hidden "
                                label={"Cari Data"}
                            />
                        </div>
                    </div>
                    	<div className='text-xs'>
                    		<DataTable data={dataKegiatan.pelayanan_anak} columns={columnsAnak}  pagination/>
                    	</div>
                    	{/*Table Statistik*/}
                    	<div>
                    		<h1 className='text-pink-500 text-xl my-3'>Statistik Pelayanan Anak</h1>
                    		<table className='table-auto w-full'>
                    			<thead>
                    				<tr>
                    					<th className='border border-gray-500/40' rowspan="2"> #</th>
                    					<th className='border border-gray-500/40' colspan="2"> Jumlah Stunting</th>
                    					<th className='border border-gray-500/40' colspan="2"> Mengidap Diare</th>
                    					<th className='border border-gray-500/40' colspan="2"> Pemberian Vitamin A</th>
                    					<th className='border border-gray-500/40' colspan="2"> Pemberian Oralit</th>
                    				</tr>
                    				<tr>
	                    				
                    				</tr>
                    			</thead>
                    		</table>	
                    	</div>
                	</div>
				</div>	
		</div>

		);

}

Show.layout = (page) => <AdminLayout children={page} title={`Detail Kegiatan Kode ${detailKegiatan}`}/>