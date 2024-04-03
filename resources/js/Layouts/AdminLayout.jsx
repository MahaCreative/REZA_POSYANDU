import DropdownSidebar from "@/Components/DropdownSidebar";
import MenuSidebar from "@/Components/MenuSidebar";
import { Head } from "@inertiajs/react";
import {
    ChildFriendly,
    Contacts,
    MiscellaneousServicesOutlined,
    PersonAdd,
    PregnantWoman,
    Widgets,
} from "@mui/icons-material";
import { Drawer } from "@mui/material";
import React, { useState } from "react";

export default function AdminLayout({ children, title }) {
    const [drawer, setDrawer] = useState(false);

    return (
        <div>
            <Head title={title} />
            {/* Navbar */}
            <div className="w-full bg-pink-500 flex justify-between items-center px-4">
                <div
                    onClick={() => setDrawer(true)}
                    className="text-white hover:cursor-pointer hover:text-pink-900 transition-all duration-300 ease-in-out"
                >
                    <Widgets color="inherit" fontSize="inherit" />
                </div>
            </div>
            {/* Drawer */}
            <Drawer open={drawer} onClose={() => setDrawer(false)}>
                <div className="bg-pink-600 h-full w-[250px]">
                    <div className="w-full items-center justify-center bg-pink-800 flex gap-5  py-3">
                        <img
                            src="Image/logo_posyandu.png"
                            alt=""
                            className="w-[50px] h-[50px] object-cover bg-white rounded-full"
                        />
                        <p className="text-white font-semibold">
                            Posyandu Desa Ini
                        </p>
                    </div>
                    {/* Menu */}
                    <div>
                        <p className="font-light text-white px-4 pt-3 text-sm">
                            General
                        </p>

                        <MenuSidebar
                            link={"admin.dashboard"}
                            title={"Dashboard"}
                            logo={
                                <Widgets color="inherit" fontSize="inherit" />
                            }
                        />

                        {/* Dropdownd Menu */}
                        <DropdownSidebar
                            title={"Master Data"}
                            logo={
                                <MiscellaneousServicesOutlined
                                    color="inherit"
                                    fontSize="inherit"
                                />
                            }
                        >
                            <MenuSidebar
                                link={"admin.jenis-vaksin"}
                                logo={
                                    <MiscellaneousServicesOutlined
                                        color="inherit"
                                        fontSize="inherit"
                                    />
                                }
                                title={"Jenis Vaksin & Imunisasi"}
                            />

                            <MenuSidebar
                                link={"admin.data-kader"}
                                logo={
                                    <Contacts
                                        color="inherit"
                                        fontSize="inherit"
                                    />
                                }
                                title={"Data Kader"}
                            />
                            <MenuSidebar
                                link={"admin.data-ibu"}
                                logo={
                                    <PregnantWoman
                                        color="inherit"
                                        fontSize="inherit"
                                    />
                                }
                                title={"Data Ibu"}
                            />
                            <MenuSidebar
                                link={"admin.data-anak"}
                                logo={
                                    <ChildFriendly
                                        color="inherit"
                                        fontSize="inherit"
                                    />
                                }
                                title={"Data Anak"}
                            />
                            <MenuSidebar
                                link={"admin.dashboard"}
                                logo={
                                    <PersonAdd
                                        color="inherit"
                                        fontSize="inherit"
                                    />
                                }
                                title={"Pendaftaran Keanggotaan Ibu"}
                            />
                        </DropdownSidebar>
                    </div>
                </div>
            </Drawer>
            <div className="py-4 px-4 min-h-screen md:px-8 lg:px-10 bg-slate-950 h-full">
                <h1 className="font-bold text-base md:text-lg lg:text-xl text-white border-pink-500 border-b-2 inline-block mb-3">
                    {title}
                </h1>
                {children}
            </div>
        </div>
    );
}
