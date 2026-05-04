"use client";

import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaEnvelope,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

export default function Footer() {

    const [contact, setContact] = useState({
        phone: "0000000000",
        whatsapp: "0000000000",
        email: "noemail@example.com",
    });

    // 🔥 FETCH SETTINGS
    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch("/api/admin/settings");
                const data = await res.json();

                setContact({
                    phone: data?.mobile || "0000000000",
                    whatsapp: data?.whatsapp || "0000000000",
                    email: data?.infoEmail || "noemail@example.com",
                });

            } catch (err) {
                console.log("FOOTER ERROR:", err);
            }
        };

        fetchSettings();
    }, []);

    return (
        <footer className="bg-[#0a192f] text-gray-300 pt-20 pb-8 border-t border-[#1f3a5f] relative overflow-hidden">

            <div className="absolute w-[250px] h-[250px] bg-cyan-300/10 blur-3xl rounded-full top-[-80px] right-[-80px]"></div>

            <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">

                {/* 🔹 Brand */}
                <div>
                    <div className="p-2">
                        <Logo />
                    </div>

                    <p className="text-gray-400 text-sm mb-4">
                        Building modern, fast and scalable web experiences for businesses.
                    </p>

                    <div className="flex gap-4 text-lg">
                        <a href="#" className="hover:text-cyan-300"><FaInstagram /></a>
                        <a href="#" className="hover:text-cyan-300"><FaLinkedin /></a>
                        <a href="#" className="hover:text-cyan-300"><FaFacebook /></a>
                        <a href={`https://wa.me/${contact.whatsapp}`} className="hover:text-cyan-300">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* 🔹 Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-cyan-300">Home</a></li>
                        <li><a href="/about-us" className="hover:text-cyan-300">About Us</a></li>
                        <li><a href="/services" className="hover:text-cyan-300">Services</a></li>
                        <li><a href="/projects" className="hover:text-cyan-300">Projects</a></li>
                        <li><a href="/contact-us" className="hover:text-cyan-300">Contact</a></li>
                    </ul>
                </div>

                {/* 🔹 Services */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Business Website</li>
                        <li>Portfolio Website</li>
                        <li>School/Coaching Website</li>
                        <li>Gym Website</li>
                        <li>Hotel/Cafe Website</li>
                        <li>Custom Website</li>
                    </ul>
                </div>

                {/* 🔹 Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>

                    <div className="flex flex-col gap-3 text-sm">

                        <a
                            href={`tel:+${contact.phone}`}
                            className="flex items-center gap-2 hover:text-cyan-300"
                        >
                            <FiPhone className="text-cyan-300" />
                            +91 {contact.phone}
                        </a>

                        <a
                            href={`mailto:${contact.email}`}
                            className="flex items-center gap-2 hover:text-cyan-300"
                        >
                            <FaEnvelope className="text-cyan-300" />
                            {contact.email}
                        </a>

                        <a
                            href={`https://wa.me/${contact.whatsapp}`}
                            target="_blank"
                            className="flex items-center gap-2 hover:text-cyan-300"
                        >
                            <FaWhatsapp className="text-cyan-300" />
                            Chat on WhatsApp
                        </a>

                    </div>

                    <a
                        href="/contact-us"
                        className="inline-block mt-4 px-4 py-2 text-sm bg-cyan-300 text-[#0a192f] rounded hover:scale-105 transition"
                    >
                        Start a Project
                    </a>
                </div>

            </div>

            <div className="text-center text-sm text-gray-500 mt-12 border-t border-[#1f3a5f] pt-5">
                © {new Date().getFullYear()} TrioScript. All rights reserved.
            </div>
        </footer>
    );
}