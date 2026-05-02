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
import Logo from "@/components/Logo";

export default function Footer() {
    return (
        <footer className="bg-[#0a192f] text-gray-300 pt-20 pb-8 border-t border-[#1f3a5f] relative overflow-hidden">

            {/* Glow */}
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

                    {/* Social */}
                    <div className="flex gap-4 text-lg">
                        <a href="c:\Users\HP\AppData\Local\Packages\5319275A.51895FA4EA97F_cv1g1gvanyjgm\LocalState\sessions\26DACC113315A8502DAAA016BAF7B32C7BB3ABE9\transfers\2026-18\WhatsApp Image 2026-05-02 at 8.21.38 PM.jpeg" className="hover:text-cyan-300 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-cyan-300 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61589153280608" className="hover:text-cyan-300 transition">
                            <FaFacebook />
                        </a>
                        <a href="https://wa.me/917651893226" className="hover:text-cyan-300 transition">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* 🔹 Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Links
                    </h3>
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
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Services
                    </h3>
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
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Contact
                    </h3>

                    <div className="flex flex-col gap-3 text-sm">

                        <a
                            href="tel:+91765893226"
                            className="flex items-center gap-2 hover:text-cyan-300"
                        >
                            <FiPhone className="text-cyan-300" />
                            +91 7651893226
                        </a>

                        <a
                            href="mailto:info.trioscript@gmail.com"
                            className="flex items-center gap-2 hover:text-cyan-300"
                        >
                            <FaEnvelope className="text-cyan-300" />
                            info.trioscript@gmail.com
                        </a>

                        <a
                            href="https://wa.me/910000000000"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-cyan-300"
                        >
                            <FaWhatsapp className="text-cyan-300" />
                            Chat on WhatsApp
                        </a>

                    </div>

                    {/* CTA */}
                    <a
                        href="/contact-us"
                        className="inline-block mt-4 px-4 py-2 text-sm bg-cyan-300 text-[#0a192f] rounded hover:scale-105 transition"
                    >
                        Start a Project
                    </a>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center text-sm text-gray-500 mt-12 border-t border-[#1f3a5f] pt-5">
                © {new Date().getFullYear()} TrioScript. All rights reserved.
            </div>
        </footer>
    );
}