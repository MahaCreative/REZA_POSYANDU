import InputText from '@/Components/InputText';
import CountCard from '@/Components/CountCard';
import Loading from '@/Components/Loading';
import AdminLayout from '@/Layouts/AdminLayout'
import { Link, router } from '@inertiajs/react';
import { Add, Delete, Edit } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import GrafikAnak from './GrafikAnak'
export default function Index(props) {
    const dataAnak = props.dataAnak;
    const statistikUsia = props.statistikUsia;
    const statistikDarah = props.statistikDarah;
    const jumlahKelamin = props.jumlahKelamin;
    
    const [openLoading, setOpenLoading] = useState(false);
    const columns = [
        {
            name: "Nama Lengkap",
            selector: (row) => row.nama,
            wrap: true,
        },
        {
            name: "Nama Ibu",
            selector: (row) => row.ibu.nama_lengkap,
            wrap: true,
        },
        {
            name: "Tempat TGL Lahir",
            selector: (row) => row.tempat_lahir + ", " + row.tgl_lahir,
            wrap: true,
        },


        { name: "Golongan Darah", selector: (row) => row.gol_darah },
        { name: "Jenis Kelamin", selector: (row) => row.jenis_kelamin },
        { name: "Proses Kelahiran", selector: (row) => row.proses_kelahiran },
        { name: "BB/TB Lahir", selector: (row) => `${row.berat_lahir } / ${row.tinggi_lahir}` },

        {
            name: "Foto",
            selector: (row) => (
                <>
                    <a target="_blank" href={"storage/" + row.foto}>
                        <img
                            src={"storage/" + row.foto}
                            alt=""
                            className="w-[40px]"
                        />
                    </a>
                </>
            ),
        },
        {
            name: "Aksi",
            selector: (row) => (
                <div className="flex gap-3 justify-center">
                    <button
                        onClick={() => deleteHandler(row.id)}
                        className="py-1 text-xs px-1 rounded-md text-white hover:cursor-pointer hover:bg-red-700 bg-red-500"
                    >
                        <Tooltip title="Hapus">
                            <Delete color="inherit" fontSize="inherit" />
                        </Tooltip>
                    </button>
                    <button
                        onClick={() => editHandler(row)}
                        className="py-1 text-xs px-1 rounded-md text-white hover:cursor-pointer hover:bg-orange-700 bg-orange-500"
                    >
                        <Tooltip title="Edit">
                            <Edit color="inherit" fontSize="inherit" />
                        </Tooltip>
                    </button>
                </div>
            ),
        },
    ];
    const editHandler = (value) => {
            Swal.fire({
                title: "Anda Yakin?",
                text: "Apakah anda yakin ingin mengubah data ini?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yakin",
            }).then((result) => {
                if (result.isConfirmed) {
                    router.get(
                        route("admin.form-update-data-anak", { id: value.id })
                    );
                }
            });
        };
    const deleteHandler = (id) => {
        setOpenLoading(true);
        Swal.fire({
            title: "Anda Yakin?",
            text: "Apakah anda yakin ingin menghapus data ini?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                router.delete(route("admin.delete-data-anak", { id: id }), {
                    onSuccess: () => {
                        setOpenLoading(false);
                        setTimeout(() => {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Sukses menghapus data",
                                icon: "success",
                            });
                        }, 1000);
                    },
                });
            } else {
                setOpenLoading(false);
            }
        });
    };
    
  
    console.log(jumlahKelamin)
  return (
    <div>
        <div className="w-full">
                <Loading open={openLoading} setOpen={setOpenLoading} />
                <div className="flex flex-col gap-3 md:flex-row jusitfy-between items-center my-3">
                    {jumlahKelamin.map((item, key) => <CountCard key={key} title={item.kategori} count={item.jumlah}/>)}
                    
                </div>
                <div className="w-full">
                    <div className="flex items-center jusitfy-between w-full">
                        <h1 className="text-white font-semibold w-full">
                            Data Anak
                        </h1>
                        <div className="flex gap-3 items-center text-white">
                            <Link
                                href={route("admin.form-data-anak")}
                                className="py-1 px-2 rounded-lg bg-blue-500 hover:bg-blue-500"
                            >
                                <Add color="inherit" fontSize="small" />
                            </Link>
                            <InputText
                                className="bg-white rounded-md overflow-hidden "
                                label={"Cari Data"}
                            />
                        </div>
                    </div>
                    <div className="rounded-md w-full py-3">
                        <DataTable
                            data={dataAnak}
                            columns={columns}
                            striped
                            highlightOnHover
                            dense
                            pagination
                            responsive
                        />
                    </div>
                </div>
                <div>
                <GrafikAnak darah={statistikDarah} usia={statistikUsia} jumlahKelamin={jumlahKelamin}/>
                </div>
            </div>
    </div>
  )
}

Index.layout = page => <AdminLayout children={page} title={'Kelola Data Anak'}/>
