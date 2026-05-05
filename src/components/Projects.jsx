"use client";

import { useState } from "react";

import FormModal from "@/components/FormModal";
import Image from "next/image";

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
        <section className="bg-[#0a192f] text-white py-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-300">
                        Our Services
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
                            className="bg-[#112240] p-1 rounded-xl border border-[#1f3a5f] hover:border-cyan-300 transition group"
                        >

                            {/* ✅ FIXED IMAGE */}
                            <div className="relative h-[180px] flex items-center justify-center bg-[#0a192f] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain p-2"
                                    sizes="(max-width: 768px) 100vw, 300px"
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
                                    className="bg-cyan-400 text-[#0a192f] text-white px-4 py-2 rounded text-md mt-3 hover:opacity-80 cursor-pointer"
                                >
                                    View Demo
                                </button>


                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* 🔥 MODAL */}
            <FormModal open={open} onClose={() => setOpen(false)} />



        </section>
    );
}

