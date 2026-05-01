"use client";

import { useEffect, useRef, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
    const footerRef = useRef(null);
    const [isNearFooter, setIsNearFooter] = useState(false);

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

    return (
        <div
            className={`fixed right-5 z-50 flex flex-col gap-3 transition-all duration-300 ${isNearFooter ? "bottom-32" : "bottom-6"
                }`}
        >

            {/* WhatsApp */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
            >
                <FaWhatsapp size={20} />
            </a>

            {/* Call */}
            <a
                href="tel:+919876543210"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-300 text-[#0a192f] shadow-lg hover:scale-110 transition"
            >
                <FiPhone size={20} />
            </a>

        </div>
    );
}