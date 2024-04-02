import InputText from "@/Components/InputText";
import SelectOption from "@/Components/SelectOption";
import { useForm, usePage } from "@inertiajs/react";
import { MenuItem } from "@mui/material";

import React, { useEffect } from "react";
import Swal from "sweetalert2";

export default function FormFaksin({ model, setmodel, ...props }) {
    const { data, setData, post, reset, errors } = useForm({
        kd_imunisasi: "",
        nama_imunisasi: "",
        kategori: "",
    });
    useEffect(() => {
        setData({
            ...data,
            kd_imunisasi: model ? model.kd_imunisasi : "",
            nama_imunisasi: model ? model.nama_imunisasi : "",
            kategori: model ? model.kategori : "",
        });
    }, [model]);
    const submitHandler = (e) => {
        e.preventDefault();
        props.getLoading(true);
        post(route("admin.post-jenis-vaksin"), {
            onError: (error) => {
                setTimeout(() => {
                    props.getLoading(false);
                }, 350);
                setTimeout(() => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Gagal Melakukan Penambahan data Silahkan Cek Formulir Isian Anda",
                    });
                    console.log(errors);
                }, 1000);
            },
            onSuccess: () => {
                props.getLoading(false);
                setTimeout(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Oops...",
                        text: "Berhasil melakukan penambahan data",
                    });
                }, 300);
                reset();
                setmodel(null);
            },
        });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        props.getLoading(true);
        post(route("admin.update-jenis-vaksin"), {
            onError: (error) => {
                setTimeout(() => {
                    props.getLoading(false);
                }, 350);
                setTimeout(() => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Gagal Melakukan Perubahan data Silahkan Cek Formulir Isian Anda",
                    });
                    console.log(errors);
                }, 1000);
            },
            onSuccess: () => {
                props.getLoading(false);
                setTimeout(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Oops...",
                        text: "Berhasil melakukan perubahan data",
                    });
                }, 300);
                reset();
                setmodel(null);
            },
        });
    };

    return (
        <form
            onSubmit={model ? updateHandler : submitHandler}
            className="flex gap-4 flex-col"
        >
            <InputText
                label="Kode Vaksin"
                name="kd_imunisasi"
                value={data.kd_imunisasi}
                error={errors.kd_imunisasi}
                onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                }
            />
            <InputText
                label="Nama Vaksin"
                name="nama_imunisasi"
                value={data.nama_imunisasi}
                error={errors.nama_imunisasi}
                onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                }
            />
            <SelectOption
                name="kategori"
                label={"Kategori"}
                value={data.kategori}
                error={errors.kategori}
                onChange={(e) => setData({ ...data, kategori: e.target.value })}
            >
                <MenuItem value="">Pilih Kategori</MenuItem>
                <MenuItem value="anak">imunisasi Untuk Anak</MenuItem>
                <MenuItem value="ibu">imunisasi Untuk Ibu</MenuItem>
            </SelectOption>
            <button className="flex w-full my-3 items-cente justify-center bg-green-500 hover:bg-green-700 duration-300 transition-all ease-in-out text-white rounded-md">
                {model ? "Update Data" : "Simpan Data"}
            </button>
        </form>
    );
}
