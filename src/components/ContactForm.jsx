"use client";

import Image from "next/image";
import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane, FaPhone } from "react-icons/fa";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [success, setSuccess] = useState(false);

    /* 🔥 HANDLE CHANGE */
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    /* 🔥 HANDLE SUBMIT */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/admin/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error);
                return;
            }

            setSuccess(true);

            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
            });

        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        }
    };

    return (
        <section className="bg-[#0a192f] text-white py-24 relative overflow-hidden">

            {/* Glow */}
            {/* <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-300/10 blur-3xl rounded-full"></div> */}
            {/* <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-300/10 blur-3xl rounded-full"></div> */}

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">

                {/* Illustration */}
                <div className="flex justify-center">
                    <Image
                        src="/illustration/bussiness.svg"
                        alt="business illustration"
                        width={500}
                        height={500}
                        className="w-[80%] max-w-md h-auto"
                        priority
                    />
                </div>

                {/* Form */}
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">

                    {success ? (
                        <div className="text-center space-y-4 py-10">

                            <h2 className="text-2xl font-semibold text-cyan-300">
                                Message Sent ✅
                            </h2>

                            <p className="text-gray-300 text-sm">
                                Thanks for contacting us. We will respond shortly.
                            </p>

                            <button
                                onClick={() => setSuccess(false)}
                                className="bg-cyan-300 text-[#0a192f] px-4 py-2 rounded"
                            >
                                Send Another
                            </button>

                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl font-bold text-cyan-300 mb-4">
                                Get In Touch
                            </h2>

                            <p className="text-gray-400 mb-6">
                                Let’s build something amazing together.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                {/* Name */}
                                <div className="relative">
                                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full bg-transparent border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-cyan-300"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="w-full bg-transparent border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-cyan-300"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="relative">
                                    <FaPhone className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        maxLength="10"
                                        placeholder="Your Phone"
                                        className="w-full bg-transparent border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-cyan-300"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Your Message"
                                        className="w-full bg-transparent border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-cyan-300"
                                        required
                                    ></textarea>
                                </div>

                                {/* Button */}
                                <button className="flex items-center justify-center gap-2 bg-cyan-300 text-[#0a192f] py-2 rounded-lg font-medium hover:scale-105 transition">
                                    <FaPaperPlane />
                                    Send Message
                                </button>

                            </form>
                        </>
                    )}

                </div>

            </div>
        </section>
    );
}