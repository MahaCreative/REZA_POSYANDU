import React, { useRef, useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Transition } from "@headlessui/react";
export default function DropdownSidebar({ children, title, logo }) {
    const [open, setOpen] = useState(false);
    const openRef = useRef(null);
    return (
        <div
            className={`${
                open ? "bg-pink-800" : ""
            } hover:cursor-pointer w-full gap-x-3 py-1 active:bg-pink-800   duration-300 transition-all my-1 font-light text-xs text-white `}
        >
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between relative"
            >
                <div className="flex gap-3 items-center px-4">
                    <p className="text-lg">{logo}</p>
                    <p className="">{title}</p>
                </div>
                <p
                    className={`${
                        open ? "rotate-90" : ""
                    } text-white transition-all duration-300 ease-in-out`}
                >
                    <ArrowForwardIosIcon color="inherit" fontSize="inherit" />
                </p>
            </div>
            <Transition
                show={open}
                enter="transition-all ease-in duration-300"
                enterFrom="-translate-y-2 opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition-all ease-out duration-300"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-2 opacity-0"
            >
                <div className="w-full">{children}</div>
            </Transition>
        </div>
    );
}
