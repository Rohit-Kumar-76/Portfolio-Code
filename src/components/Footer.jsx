"use client";

import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaEnvelope,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-[#0a192f] text-gray-300 pt-20 pb-8 border-t border-[#1f3a5f] relative overflow-hidden">

            {/* Glow */}
            <div className="absolute w-[250px] h-[250px] bg-teal-300/10 blur-3xl rounded-full top-[-80px] right-[-80px]"></div>

            <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">

                {/* 🔹 Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-teal-300 mb-3">
                        WebNova
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">
                        Building modern, fast and scalable web experiences for businesses.
                    </p>

                    {/* Social */}
                    <div className="flex gap-4 text-lg">
                        <a href="#" className="hover:text-teal-300 transition">
                            <FaGithub />
                        </a>
                        <a href="#" className="hover:text-teal-300 transition">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="hover:text-teal-300 transition">
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
                        <li><a href="/" className="hover:text-teal-300">Home</a></li>
                        <li><a href="/about-us" className="hover:text-teal-300">Services</a></li>
                        <li><a href="/services" className="hover:text-teal-300">Projects</a></li>
                        <li><a href="/contact-us" className="hover:text-teal-300">Contact</a></li>
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
                        <li>Web Applications</li>
                        <li>Landing Pages</li>
                    </ul>
                </div>

                {/* 🔹 Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Contact
                    </h3>

                    <div className="flex flex-col gap-3 text-sm">

                        <a
                            href="tel:+910000000000"
                            className="flex items-center gap-2 hover:text-teal-300"
                        >
                            <FiPhone className="text-teal-300" />
                            +91 0000000000
                        </a>

                        <a
                            href="mailto:your@email.com"
                            className="flex items-center gap-2 hover:text-teal-300"
                        >
                            <FaEnvelope className="text-teal-300" />
                            your@email.com
                        </a>

                        <a
                            href="https://wa.me/910000000000"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-teal-300"
                        >
                            <FaWhatsapp className="text-teal-300" />
                            Chat on WhatsApp
                        </a>

                    </div>

                    {/* CTA */}
                    <a
                        href="contact"
                        className="inline-block mt-4 px-4 py-2 text-sm bg-teal-300 text-[#0a192f] rounded hover:scale-105 transition"
                    >
                        Start a Project
                    </a>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center text-sm text-gray-500 mt-12 border-t border-[#1f3a5f] pt-5">
                © {new Date().getFullYear()} WebNova. All rights reserved.
            </div>
        </footer>
    );
}