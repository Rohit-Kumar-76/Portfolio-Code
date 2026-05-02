"use client";

import { FaPhone, FaEnvelope, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-7xl mx-auto px-6 space-y-20">

                {/* 🔥 HEADER */}
                {/* 🔥 INTRO SECTION */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT TEXT */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">
                            Let’s Build Something Amazing
                        </h2>

                        <p className="text-gray-400 mb-4">
                            Have an idea or project in mind? We help businesses turn ideas into
                            powerful and high-performing websites.
                        </p>

                        <p className="text-gray-400 mb-6">
                            Whether it's a business website, portfolio, or custom web app —
                            we’re here to help you grow online.
                        </p>

                        {/* 🔹 Small Points */}
                        <div className="space-y-2 text-gray-300 text-sm">
                            <p>✔ Quick response within 24 hours</p>
                            <p>✔ Affordable & scalable solutions</p>
                            <p>✔ Modern design & clean code</p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center relative">
                        <div className="absolute w-[250px] h-[250px] bg-cyan-300/10 blur-3xl rounded-full"></div>

                        <img
                            src="/illustration/call.svg"
                            alt="contact"
                            className="w-[80%] max-w-md relative z-10"
                        />
                    </div>

                </div>

                <ContactForm />
                {/* 🔥 CONTACT INFO */}
                <div className="grid md:grid-cols-3 gap-6 text-center">

                    <Info icon={<FaPhone />} text="+91 7651893226" />
                    <Info icon={<FaEnvelope />} text="info.trioscript@gmail.com" />
                    <Info icon={<FaWhatsapp />} text="WhatsApp Chat" />

                </div>

                {/* 🔥 WHY CONTACT US */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-6">
                        Why Work With Us?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">

                        <Feature text="Fast Delivery" />
                        <Feature text="Clean & Scalable Code" />
                        <Feature text="Affordable Pricing" />
                        <Feature text="Responsive & Modern Design" />
                        <Feature text="Ongoing Support & Maintenance" />
                        <Feature text="Client-Centric Approach" />

                    </div>
                </div>

            </div>
        </section>
    );
}

/* COMPONENTS */

function Info({ icon, text }) {
    return (
        <div className="bg-[#112240] p-5 rounded-lg border border-[#1f3a5f] flex flex-col items-center gap-2">
            <div className="text-cyan-300 text-xl">{icon}</div>
            <p className="text-gray-300 text-sm">{text}</p>
        </div>
    );
}

function Feature({ text }) {
    return (
        <div className="flex items-center justify-center gap-2 bg-[#112240] p-4 rounded-lg border border-[#1f3a5f]">
            <FaCheckCircle className="text-cyan-300" />
            {text}
        </div>
    );
}