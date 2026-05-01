"use client";

import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="bg-[#0a192f] text-white py-24 relative overflow-hidden">

            {/* Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-teal-300/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-teal-300/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Illustration */}
                <div className="flex justify-center">
                    <img
                        src="/illustration/bussiness.svg"
                        alt="contact"
                        className="w-[80%] max-w-md"
                    />
                </div>

                {/* Form */}
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">

                    <h2 className="text-3xl font-bold text-teal-300 mb-4">
                        Get In Touch
                    </h2>

                    <p className="text-gray-400 mb-6">
                        Let’s build something amazing together.
                    </p>

                    <form className="flex flex-col gap-5">

                        {/* Name */}
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-transparent border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-teal-300"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-transparent border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-teal-300"
                            />
                        </div>
                        <div className="relative">
                            <FaPhone className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="tel"
                                maxLength="10"
                                placeholder="Your Phone"
                                className="w-full bg-transparent border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-teal-300"
                            />
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full bg-transparent border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-teal-300"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button className="flex items-center justify-center gap-2 bg-teal-300 text-[#0a192f] py-2 rounded-lg font-medium hover:scale-105 transition duration-300">
                            <FaPaperPlane />
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}