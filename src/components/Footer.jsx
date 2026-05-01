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
        <footer className="bg-[#0a192f] text-gray-300 pt-16 pb-8 border-t border-[#1f3a5f]">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

                {/* 🔹 Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-teal-300 mb-3">
                        WebNova
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Building modern, fast and scalable web experiences for businesses and individuals.
                    </p>
                </div>

                {/* 🔹 Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Quick Links
                    </h3>

                    <ul className="flex flex-col gap-2 text-sm">
                        <li><a href="#" className="hover:text-teal-300">Home</a></li>
                        <li><a href="#" className="hover:text-teal-300">Services</a></li>
                        <li><a href="#" className="hover:text-teal-300">Projects</a></li>
                        <li><a href="#" className="hover:text-teal-300">Contact</a></li>
                    </ul>
                </div>

                {/* 🔹 Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Contact
                    </h3>

                    <div className="flex flex-col gap-3 text-sm">

                        <div className="flex items-center gap-2">
                            <FiPhone className="text-teal-300" />
                            <span>+91 0000000000</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-teal-300" />
                            <span>your@email.com</span>
                        </div>

                        <div className="flex items-center gap-3 mt-2">
                            <a href="#" className="hover:text-teal-300 text-lg">
                                <FaGithub />
                            </a>
                            <a href="#" className="hover:text-teal-300 text-lg">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="hover:text-teal-300 text-lg">
                                <FaWhatsapp />
                            </a>
                        </div>

                    </div>
                </div>

            </div>

            {/* 🔻 Bottom */}
            <div className="text-center text-sm text-gray-500 mt-10 border-t border-[#1f3a5f] pt-5">
                © {new Date().getFullYear()} WebNova. All rights reserved.
            </div>

        </footer>
    );
}