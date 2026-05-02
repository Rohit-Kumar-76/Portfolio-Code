"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaTimes } from "react-icons/fa";

export default function Projects() {
    const [open, setOpen] = useState(false);

    const projects = [
        {
            title: "Business Website",
            desc: "Professional business website to showcase services, build trust and generate leads.",
            image: "/illustration/bussinessp.svg",
        },
        {
            title: "Cafe / Hotel Website",
            desc: "Modern website with menu, gallery and booking system for cafes and hotels.",
            image: "/illustration/cafe.svg",
        },
        {
            title: "School / Coaching Website",
            desc: "Educational website to manage courses, students and provide institute information.",
            image: "/illustration/school.svg",
        },
        {
            title: "Gym Website",
            desc: "Fitness website with membership plans, trainer profiles and class schedules.",
            image: "/illustration/gym.svg",
        },
        {
            title: "Portfolio Website",
            desc: "Personal portfolio to showcase skills, projects and experience with modern UI.",
            image: "/illustration/portfolio.svg",
        },
        {
            title: "Custom Web Application",
            desc: "Fully customized web app tailored to business needs with scalable architecture.",
            image: "/illustration/app.svg",
        },
    ];

    return (
        <section className="bg-[#0a192f] text-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-300">
                        My Projects
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Solutions we provide for different businesses
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-[#112240] p-1 rounded-xl border border-[#1f3a5f] hover:border-teal-300 transition group"
                        >

                            {/* ✅ FIXED IMAGE */}
                            <div className="h-[180px] flex items-center justify-center bg-[#0a192f]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col justify-between h-[200px]">

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        {project.desc}
                                    </p>
                                </div>

                                {/* Button */}
                                <button
                                    onClick={() => setOpen(true)}
                                    className="bg-teal-300 text-[#0a192f] px-4 py-1 rounded text-sm mt-3 hover:opacity-80 cursor-pointer"
                                >
                                    View Demo
                                </button>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* 🔥 MODAL */}
            {open && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

                    <div className="bg-[#112240] p-6 rounded-xl w-[90%] max-w-md border border-[#1f3a5f] relative">

                        <FaTimes
                            className="absolute top-4 right-4 cursor-pointer text-gray-300 hover:text-white"
                            onClick={() => setOpen(false)}
                        />

                        <h3 className="text-xl font-semibold text-teal-300 mb-6 text-center">
                            Get Demo Access
                        </h3>

                        <form className="space-y-4">

                            <Input icon={<FaUser />} placeholder="Your Name" />
                            <Input icon={<FaEnvelope />} placeholder="Your Email" />
                            <Input icon={<FaPhone />} placeholder="Mobile Number" />

                            <div className="flex items-start gap-3 bg-[#0a192f] border border-[#1f3a5f] rounded px-3">
                                <FaCommentDots className="text-teal-300 mt-4" />
                                <textarea
                                    placeholder="Purpose (What you need?)"
                                    rows="3"
                                    className="w-full p-3 bg-transparent outline-none resize-none"
                                />
                            </div>

                            <button className="w-full bg-teal-300 text-[#0a192f] py-2 rounded hover:opacity-80 cursor-pointer">
                                Submit & View Demo
                            </button>

                        </form>

                    </div>
                </div>
            )}

        </section>
    );
}

/* 🔧 Reusable Input */
function Input({ icon, placeholder }) {
    return (
        <div className="flex items-center gap-3 bg-[#0a192f] border border-[#1f3a5f] rounded px-3">
            <span className="text-teal-300">{icon}</span>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full p-3 bg-transparent outline-none"
            />
        </div>
    );
}