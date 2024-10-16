"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
    {
        title: "Home",
        path: "#hero", // Match the id of HeroSection
    },
    {
        title: "About",
        path: "#about", // Match the id of PageSection
    },
    {
        title: "Contact",
        path: "#contact", // Match the id of EmailSection
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

                {/* Mobile Toggle Button */}
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

                {/* Navbar Links */}
                <div
                    className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out transform ${
                        navbarOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    } md:opacity-100 md:max-h-full overflow-hidden`} // Allow full screen height on mobile view
                    id="navbar"
                >
                    <ul className="flex flex-col items-center md:flex-row md:space-x-8 md:ml-4 md:mr-auto space-y-4 md:space-y-0"> 
                        {navLinks.map((link, index) => (
                            <li key={index} className="md:my-0 my-2">
                                {/* Apply button styles to each link */}
                                <Link href={link.path}>
                                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-gray-500 to-pink-500 text-white hover:bg-slate-900">
                                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                            {link.title}
                                        </span>
                                    </button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
