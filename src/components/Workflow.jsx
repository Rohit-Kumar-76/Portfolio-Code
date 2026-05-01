"use client";

import { FaComments, FaPenNib, FaCode, FaCheckCircle, FaRocket } from "react-icons/fa";

export default function Workflow() {
    const steps = [
        {
            icon: <FaComments />,
            title: "Discussion",
            desc: "Understanding your requirements and project goals clearly.",
        },
        {
            icon: <FaPenNib />,
            title: "Planning",
            desc: "Designing structure, UI/UX and project roadmap.",
        },
        {
            icon: <FaCode />,
            title: "Development",
            desc: "Building fast, responsive and scalable website.",
        },
        {
            icon: <FaCheckCircle />,
            title: "Testing",
            desc: "Ensuring everything works perfectly without bugs.",
        },
        {
            icon: <FaRocket />,
            title: "Delivery",
            desc: "Launching your website with full support.",
        },
    ];

    return (
        <section className="bg-[#112240] text-white py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-300">
                        My Workflow
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Simple and effective process to deliver high-quality projects
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">

                    {/* Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[#1f3a5f]"></div>

                    <div className="grid md:grid-cols-5 gap-8">

                        {steps.map((step, i) => (
                            <div key={i} className="relative text-center">

                                {/* Icon Circle */}
                                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#0a192f] border border-teal-300 text-teal-300 text-xl z-10 relative">
                                    {step.icon}
                                </div>

                                {/* Step Number */}
                                <p className="text-teal-300 mt-3 font-semibold">
                                    Step {i + 1}
                                </p>

                                {/* Title */}
                                <h3 className="font-semibold mt-1">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mt-2">
                                    {step.desc}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}