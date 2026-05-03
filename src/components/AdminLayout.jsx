"use client";

import {
    FaHome,
    FaProjectDiagram,
    FaUsers,
    FaEnvelope,
    FaCog,
    FaSignOutAlt,
    FaBars,
    FaCommentDots,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import LogoAdmin from "@/components/LogoAdmin";

export default function DashboardClient({ children }) {
    const [open, setOpen] = useState(true);

    return (
        <div className="bg-[#0a192f] text-white">

            {/* SIDEBAR */}
            <aside className={`fixed top-0 left-0 h-screen ${open ? "w-64" : "w-16"} bg-[#112240] border-r border-[#1f3a5f] transition-all duration-300 flex flex-col z-50`}>

                <div className="flex items-center justify-between p-4 border-b border-[#1f3a5f]">
                    {open && <LogoAdmin />}
                    <FaBars className="cursor-pointer" onClick={() => setOpen(!open)} />
                </div>

                <nav className="flex flex-col gap-2 p-4 text-sm flex-1 overflow-y-auto">
                    <NavItem icon={<FaHome />} text="Dashboard" link="/admin" open={open} />
                    <NavItem icon={<FaProjectDiagram />} text="Projects" link="/admin/projects" open={open} />
                    <NavItem icon={<FaUsers />} text="Users" link="/admin/users" open={open} />
                    <NavItem icon={<FaEnvelope />} text="Leads" link="/admin/leads" open={open} />
                    <NavItem icon={<FaCommentDots />} text="Enquiry" link="/admin/enquiry" open={open} />
                    <NavItem icon={<FaCog />} text="Settings" link="/admin/settings" open={open} />
                </nav>

                <div className="p-4 border-t border-[#1f3a5f]">
                    <button className="flex items-center gap-3 text-red-400 hover:text-red-300 w-full cursor-pointer">
                        <FaSignOutAlt />
                        {open && "Logout"}
                    </button>
                </div>

            </aside>

            {/* MAIN */}
            <div className={`${open ? "ml-64" : "ml-16"} h-screen flex flex-col`}>

                <header className="flex justify-between items-center px-6 py-4 border-b border-[#1f3a5f] bg-[#0a192f] sticky top-0 z-40">
                    <h2 className="text-lg font-semibold text-cyan-300">
                        Admin Dashboard
                    </h2>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-cyan-300 text-[#0a192f] flex items-center justify-center font-bold">
                                <a href="/admin/profile">A</a>
                            </div>
                            <span className="hidden md:block text-sm">
                                Admin
                            </span>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>

            </div>

        </div>
    );
}


/* NAV ITEM */
function NavItem({ icon, text, link, open }) {
    return (
        <Link href={link} className="flex items-center gap-3 px-2 py-2 rounded hover:bg-[#1f3a5f] transition">
            <span className="text-lg">{icon}</span>
            {open && <span>{text}</span>}
        </Link>
    );
}