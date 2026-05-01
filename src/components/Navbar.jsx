"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiHome, FiUser, FiBriefcase, FiFolder, FiMail } from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-[#0a192f] text-white shadow-lg border-b border-[#1f3a5f] sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                        alt="logo"
                        className="w-10 h-10"
                    />
                    <h1 className="text-xl font-bold text-teal-300">WebNova</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    <NavLink icon={<FiHome />} text="Home" />
                    <NavLink icon={<FiUser />} text="About" />
                    <NavLink icon={<FiBriefcase />} text="Services" />
                    <NavLink icon={<FiFolder />} text="Projects" />
                    <NavLink icon={<FiMail />} text="Contact" />

                    <button className="border border-teal-300 text-teal-300 px-4 py-1 rounded hover:bg-teal-300 hover:text-[#0a192f] transition">
                        Contact Us
                    </button>
                </div>

                {/* Hamburger */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <FaBars />
                </div>
            </div>

            {/* 🔥 Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setOpen(false)}
            ></div>

            {/* 🔥 Left Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-[260px] bg-[#112240] shadow-lg transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <FaTimes
                        className="text-2xl cursor-pointer"
                        onClick={() => setOpen(false)}
                    />
                </div>

                {/* Menu */}
                <div className="flex flex-col gap-6 px-6 mt-4">

                    <NavLink icon={<FiHome />} text="Home" />
                    <NavLink icon={<FiUser />} text="About" />
                    <NavLink icon={<FiBriefcase />} text="Services" />
                    <NavLink icon={<FiFolder />} text="Projects" />
                    <NavLink icon={<FiMail />} text="Contact" />

                    <button className="mt-4 border border-teal-300 text-teal-300 px-4 py-2 rounded hover:bg-teal-300 hover:text-[#0a192f] transition">
                        Contact Us
                    </button>

                </div>
            </div>
        </nav>
    );
}

/* 🔥 Reusable Link */
function NavLink({ icon, text }) {
    return (
        <a href="#" className="flex items-center gap-2 hover:text-teal-300">
            {icon}
            {text}
        </a>
    );
}