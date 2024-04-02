import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

export default function Index() {
    return (
        <div>
            <div className="w-full bg-pink-500 text-white flex flex-col items-center justify-center py-3 rounded-lg">
                <img
                    src="Image/logo_posyandu.png"
                    alt=""
                    className="w-[50px] h-[50px] object-cover items-center bg-white rounded-full "
                />
                <h1 className="text-md md:text-lg lg:text-xl font-semibold my-1.4">
                    Selamat Datang Di Sistem Informasi Posyandu
                </h1>
                <p className="text-sm font-light italic">
                    Jl diponegoro Kelurahan Karema Desa Ini Pokkang Dusun Ini
                </p>
            </div>
        </div>
    );
}

Index.layout = (page) => <AdminLayout children={page} title="Dashboard" />;
