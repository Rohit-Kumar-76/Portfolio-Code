"use client";

import { useEffect, useRef, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {

    const [isNearFooter, setIsNearFooter] = useState(false);

    // 🔥 dynamic numbers
    const [contact, setContact] = useState({
        phone: "0000000000",
        whatsapp: "0000000000",
    });

    // 🔥 footer detect
    useEffect(() => {
        const footer = document.querySelector("footer");

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsNearFooter(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (footer) observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    // 🔥 FETCH SETTINGS
    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch("/api/admin/settings");
                const data = await res.json();

                setContact({
                    phone: data?.phone || "0000000000",
                    whatsapp: data?.whatsapp || "0000000000",
                });

            } catch (err) {
                console.log("CONTACT ERROR:", err);
            }
        };

        fetchSettings();
    }, []);

    return (
        <div
            className={`fixed right-5 z-50 flex flex-col gap-3 transition-all duration-300 ${isNearFooter ? "bottom-32" : "bottom-6"
                }`}
        >

            {/* 🔥 WhatsApp */}
            <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
            >
                <FaWhatsapp size={20} />
            </a>

            {/* 🔥 Call */}
            <a
                href={`tel:+${contact.phone}`}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-300 text-[#0a192f] shadow-lg hover:scale-110 transition"
            >
                <FiPhone size={20} />
            </a>

        </div>
    );
}