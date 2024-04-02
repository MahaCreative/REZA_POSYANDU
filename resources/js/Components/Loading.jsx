import { Transition } from "@headlessui/react";
import React, { useState } from "react";

export default function Loading({ open, setOpen, ...props }) {
    return (
        <div>
            <Transition
                show={open}
                enter="transition-all duration-300 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all duration-300 ease-in-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div
                    onClick={() => setOpen(false)}
                    className="fixed top-0 left-0 w-full h-screen bg-slate-950/50 backdrop-blur-sm z-[99] flex justify-center items-center"
                >
                    <div className="flex flex-col gap-4 text-white">
                        <p>Loading</p>
                    </div>
                </div>
            </Transition>
        </div>
    );
}
