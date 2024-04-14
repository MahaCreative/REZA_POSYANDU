import React from 'react'
import InputText from "@/Components/InputText";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Cancel, Save } from "@mui/icons-material";
import Swal from "sweetalert2";
export default function Form({setOpen, setOpenLoading}){
    
	const {data, setData, post, reset, errors} = useForm({
		tanggal_kegiatan:"",
		catatan:"",
	});
    const submitHandler = (e) => {
    e.preventDefault();
    setOpenLoading(true);
        post(route("admin.post-data-kegiatan"), {
            onError: (error) => {
                setTimeout(() => {
                    setOpenLoading(false);
                }, 350);
                setTimeout(() => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error ? error.message : "Gagal melakukan penambahan jadwal kegiatan baru, silahkan melihat formulir anda dengan baik",
                    });
                    console.log(error);
                }, 1000);
            },
            onSuccess: () => {
                setOpenLoading(false);
                setTimeout(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Yess...",
                        text: "Berhasil melakukan penambahan data",
                    });
                }, 300);
                reset();
            },
        });
    };
    const closeHandler = () => {
     	 Swal.fire({
            title: "Anda Yakin?",
            text: "Anda ingin menutup formulir Jadwal Kegiatan",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yakin",
        }).then((result) => {
            if (result.isConfirmed) {
               setOpen(false)
               // setModel(false);
               // reset();
            }
        });
    	
    }
	return (
		<div className='bg-gray-300 py-2 px-3 rounded-md my-3'>
			<h1 className='text-pink-500 font-bold text-xl'>Formulir Jadwal Kegiatan</h1>
			<form onSubmit={submitHandler}>
				
				<div className='grid grid-cols-1 gap-3'>
					<label htmlFor="tanggal_kegitan">Tanggal Kegiatan</label>
					<InputText type='date' name='tanggal_kegiatan' value={data.tanggal_kegiatan} error={errors.tanggal_kegiatan} onChange={(e) => setData({...data, [e.target.name]:e.target.value})}/>
					<label htmlFor="catatan">Catatan Kegiatan</label>
					<InputText  name='catatan' value={data.catatan} error={errors.catatan} onChange={(e) => setData({...data, [e.target.name]:e.target.value})}/>
				</div>

				     <div className="flex justify-end items-start my-3">
                        <div className="flex gap-3 items-center">
                            <button className="bg-blue-500 rounded-md hover:bg-blue-600 py-1 px-2 flex gap-3 text-white duration-300 ease-in-out transition-all items-center">
                                <Save color="inherit" fontSize="inherit" />
                                <p>Save</p>
                            </button>
                            <button onClick={closeHandler}
                                type='button'
                                className="bg-red-500 rounded-md hover:bg-red-600 py-1 px-2 flex gap-3 text-white duration-300 ease-in-out transition-all items-center"
                            >
                                <Cancel color="inherit" fontSize="inherit" />
                                <p>Batalkan</p>
                            </button>
                        </div>
                    </div>
			</form>
		</div>
		)
}