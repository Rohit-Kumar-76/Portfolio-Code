"use client";

import Link from "next/link";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            slug: "business-website",
            title: "Business Website",
            desc: "Professional website designed to showcase services and generate leads.",
            img: "/illustration/bussinessp.svg",
            points: [
                "Service showcase pages",
                "Contact & lead form",
                "SEO optimized structure",
            ],
        },
        {
            slug: "cafe-website",
            title: "Cafe / Hotel Website",
            desc: "Modern website with menu, gallery and booking features.",
            img: "/illustration/cafe.svg",
            points: [
                "Online menu display",
                "Table booking system",
                "Mobile friendly design",
            ],
        },
        {
            slug: "school-coaching",
            title: "School / Coaching",
            desc: "Complete solution for managing courses and students.",
            img: "/illustration/school.svg",
            points: [
                "Course & syllabus pages",
                "Student information system",
                "Admin dashboard",
            ],
        },
        {
            slug: "gym-website",
            title: "GYM Website",
            desc: "A high-performance fitness website to manage memberships, showcase trainers, and increase gym signups..",
            img: "/illustration/gym.svg",
            points: [
                "Membership Plans",
                "Trainer Profiles",
                "Class Schedule",
                // "Online Registration",
            ],
        },
    ];


    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-7xl mx-auto px-6 space-y-20">

                {/* 🔥 HERO */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="text-teal-300">Projects</span>
                        </h2>

                        <p className="text-gray-400 mb-4">
                            We build different types of websites tailored to business needs,
                            focusing on performance, usability and modern design.
                        </p>

                        <p className="text-gray-400">
                            Each project is crafted to deliver real results and help clients
                            grow their online presence effectively.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-300">
                            <span className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded-full">
                                Real Projects
                            </span>
                            <span className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded-full">
                                Modern Stack
                            </span>
                            <span className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded-full">
                                High Performance
                            </span>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex justify-center relative">
                        <div className="absolute w-[250px] h-[250px] bg-teal-300/10 blur-3xl rounded-full"></div>

                        <img
                            src="/illustration/project.svg"
                            alt="projects"
                            className="w-[80%] max-w-md"
                        />
                    </div>
                </div>

                {/* 🔥 GRID */}
                <div className="grid md:grid-cols-2 gap-10">

                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f] hover:border-teal-300 hover:-translate-y-2 transition-all duration-300"
                        >

                            {/* Illustration */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-[120px] h-[120px] object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-center mb-2">
                                {project.title}
                            </h3>

                            {/* Desc */}
                            <p className="text-gray-400 text-sm text-center mb-4">
                                {project.desc}
                            </p>

                            {/* Points */}
                            <ul className="space-y-2 text-sm text-gray-300 mb-4">
                                {project.points.map((p, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <FaCheckCircle className="text-teal-300 text-xs" />
                                        {p}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <div className="flex justify-center gap-4 mt-4">

                                <Link
                                    href={`/projects/${i + 1}`}
                                    className="px-4 py-2 text-sm border border-teal-300 text-teal-300 rounded hover:bg-teal-300 hover:text-[#0a192f] transition cursor-pointer"
                                >
                                    View Details
                                </Link>

                                <a
                                    href="#"
                                    target="_blank"
                                    className="px-4 py-2 text-sm bg-teal-300 text-[#0a192f] rounded flex items-center gap-2 hover:scale-105 transition cursor-pointer"
                                >
                                    Demo <FaExternalLinkAlt />
                                </a>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;