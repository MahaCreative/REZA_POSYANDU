import { Link, router } from "@inertiajs/react";
import clsx from "clsx";
import React from "react";

export default function MenuSidebar({ title, logo, link, active }) {
    return (
        <Link
            href={route(link)}
            as="div"
            className={clsx(
                route().current(link) ? "bg-pink-900 border-r-8" : "",
                "flex hover:cursor-pointer w-full hover:bg-pink-800 gap-x-3 items-center px-4 py-1 active:bg-pink-800  active:border-r-8 border-cyan-300 duration-300 transition-all my-1 font-light text-xs text-white"
            )}
        >
            <div className="text-xl">{logo}</div>

            <p>{title}</p>
        </Link>
    );
}
