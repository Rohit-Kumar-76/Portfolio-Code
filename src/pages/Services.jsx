"use client";

import { WhyChoose } from "@/components/Whyus";
import Workflow from "@/components/Workflow";
import {
    FaStore,
    FaSchool,
    FaUtensils,
    FaUserTie,
    FaMobileAlt,
    FaCheckCircle,
    FaArrowRight,
    FaDumbbell,
} from "react-icons/fa";

export default function Services() {

    const services = [
        {
            icon: <FaStore />,
            title: "Business Website",
            desc: "Professional websites designed to build trust and convert visitors into customers.",
            features: ["Modern UI Design", "SEO Optimized", "Fast Loading"],
        },
        {
            icon: <FaUtensils />,
            title: "Cafe & Hotel Website",
            desc: "Attractive websites with menu, gallery and booking features.",
            features: ["Online Menu", "Booking System", "Mobile Friendly"],
        },
        {
            icon: <FaSchool />,
            title: "School / Coaching",
            desc: "Complete solution for institutes to manage courses and students.",
            features: ["Course Pages", "Student Info", "Admin Panel"],
        },
        {
            icon: <FaUserTie />,
            title: "Portfolio Website",
            desc: "Showcase your work and build your personal brand.",
            features: ["Modern Layout", "Project Showcase", "Responsive"],
        },
        {
            icon: <FaMobileAlt />,
            title: "Custom Web App",
            desc: "Fully customized web applications tailored to your needs.",
            features: ["Custom Features", "Scalable", "Secure Backend"],
        },
        {
            icon: <FaDumbbell />,
            title: "Gym Website",
            desc: "A high-performance fitness website to manage memberships, showcase trainers, and increase gym signups.",
            features: [
                "Membership Plans",
                "Trainer Profiles",
                "Class Schedule",
                "Online Registration",
            ],
        },
    ];

    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-7xl mx-auto px-6 space-y-20">

                {/* 🔥 HERO */}
                <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeUp">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="text-cyan-300">Services</span>
                        </h2>

                        <p className="text-gray-400 mb-4">
                            We provide complete web solutions designed to help your business grow online.
                            From design to deployment, we ensure performance and results.
                        </p>

                        <p className="text-gray-400">
                            Whether you need a simple website or a complex web application,
                            we deliver scalable and user-friendly solutions.
                        </p>

                        {/* Tags */}
                        <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-300">
                            <span className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded-full">
                                Fast Delivery
                            </span>
                            <span className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded-full">
                                Modern UI
                            </span>
                            <span className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded-full">
                                SEO Ready
                            </span>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center relative">
                        <div className="absolute w-[250px] h-[250px] bg-cyan-300/10 blur-3xl rounded-full"></div>

                        <img
                            src="/illustration/service.svg"
                            alt="services"
                            className="w-[80%] max-w-md relative z-10"
                        />
                    </div>
                </div>

                {/* 🔥 GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeUp">

                    {services.map((service, i) => (
                        <div
                            key={i}
                            style={{ animationDelay: `${i * 0.1}s` }}
                            className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f] hover:border-cyan-300 hover:-translate-y-2 transition-all duration-300 group animate-fadeUp"
                        >

                            {/* ICON */}
                            <div className="text-cyan-300 text-3xl mb-4 group-hover:scale-110 transition">
                                {service.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold mb-2">
                                {service.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-gray-400 text-sm mb-4">
                                {service.desc}
                            </p>

                            {/* FEATURES */}
                            <ul className="space-y-2 text-sm text-gray-300 mb-4">
                                {service.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <FaCheckCircle className="text-cyan-300 text-xs" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href={`/services/service/${i + 1}`}
                                className="flex items-center gap-2 text-cyan-300 text-sm hover:gap-3 transition cursor-pointer"
                            >
                                Learn More <FaArrowRight />
                            </a>

                        </div>
                    ))}

                </div>

                {/* 🔥 EXTRA SECTIONS */}
                <WhyChoose />
                <Workflow />

            </div>

        </section>
    );
}