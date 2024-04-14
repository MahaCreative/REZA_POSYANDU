
import { Add, Delete, Edit, Check, Cancel } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

export default function Index({dataIbu,model, setModel, ...props}) {
	const columns = [
		{
            name: "Nama Lengkap",
            selector: (row) => row.nama_lengkap,
            wrap: true,
        },
        { name: "NIK", selector: (row) => row.nik, width: "100px" },
        {
            name: "Tempat Lahir",
            selector: (row) => row.tempat_lahir + ", " + row.tgl_lahir,
            wrap: true,
        },
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
                    {row.id == model?.id ? <button
                        onClick={() => cancelHandler(row)}
                        className="py-1 text-xs px-1 rounded-md text-white hover:cursor-pointer hover:bg-red-700 bg-red-500"
                    >
                        <Tooltip title="Hapus">
                            <Cancel color="inherit" fontSize="large" />
                        </Tooltip>
                    </button>
                : <button
                        onClick={() => pilihHandler(row)}
                        className="py-1 text-xs px-1 rounded-md text-white hover:cursor-pointer hover:bg-blue-700 bg-blue-500"
                    >
                        <Tooltip title="Hapus">
                            <Check color="inherit" fontSize="large" />
                        </Tooltip>
                    </button>}

                </div>
            ),
        },
    ];
    
    const pilihHandler = value => {
        
           Swal.fire({
            title: "Anda Yakin?",
            text: "Apakah anda yakin ingin memilih ibu ini?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, pilih ibu ini!",
        }).then((result) => {
            if (result.isConfirmed) {
                
                 setModel(value)
            } else {
                setOpenLoading(false);
            }
        });
    }
    const cancelHandler = value => {
        
           Swal.fire({
            title: "Anda Yakin?",
            text: "Apakah anda yakin membatalkan memilih ibu ini?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, batalkan memilih!",
        }).then((result) => {
            if (result.isConfirmed) {
                
                 setModel(null)
            } else {
                setOpenLoading(false);
            }
        });
    }
	return (

		<div>
			{dataIbu && <DataTable data={dataIbu} columns={columns} stripped pagination/>}
        </div>

	);
}
