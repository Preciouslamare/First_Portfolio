"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
    {
        title: "Home",
        path: "#hero", // Update this to match the id of HeroSection
    },
    {
        title: "About",
        path: "#about", // Update this to match the id of PageSection
    },
    {
        title: "Contact",
        path: "#contact", // Update this to match the id of EmailSection
    }
];


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold mr-4 md:mr-8">
                    LOGO
                </Link>

                <div className="md:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        onClick={toggleNavbar}
                    >
                        {navbarOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                <div
                    className={`w-full md:flex md:items-center md:w-auto transition-all duration-500 ease-in-out ${
                        navbarOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    } md:opacity-100 md:max-h-full overflow-hidden`}
                    id="navbar"
                >
                    <ul className="flex flex-col items-center md:flex-row md:space-x-8 md:ml-4 md:mr-auto">
                        {navLinks.map((link, index) => (
                            <li key={index} className="md:my-0 my-2">
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
