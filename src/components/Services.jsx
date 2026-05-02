"use client";

import { useEffect, useRef, useState } from "react";
import {
    FaLaptopCode,
    FaStore,
    FaSchool,
    FaUtensils,
    FaUserTie,
    FaMobileAlt,
    FaDumbbell,
} from "react-icons/fa";

export default function Services() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );

        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const services = [
        { icon: <FaStore />, title: "Business" },
        { icon: <FaUtensils />, title: "Cafe/Hotel" },
        { icon: <FaSchool />, title: "Coaching/School" },
        { icon: <FaUserTie />, title: "Portfolio" },
        { icon: <FaMobileAlt />, title: "Custom App" },
        { icon: <FaDumbbell />, title: "GYM" },
    ];

    const left = services.slice(0, 3);
    const right = services.slice(3, 6);

    return (
        <section ref={ref} className="bg-[#112240] text-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-center text-3xl md:text-4xl font-bold text-cyan-300 mb-16">
                    My Services
                </h2>

                {/* 🔥 FLEX LAYOUT (Better than grid here) */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-18">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col gap-6 items-end">
                        {left.map((service, i) => (
                            <AnimatedCard key={i} service={service} delay={i} visible={visible} align="right" />
                        ))}
                    </div>

                    {/* CENTER */}
                    <div className="flex justify-center items-center">
                        <div className="relative">
                            <div className="absolute w-[250px] h-[220px] bg-cyan-300/10 blur-3xl rounded-full"></div>

                            <img
                                src="/illustration/2.svg"
                                alt="illustration"
                                className="w-[160px] md:w-[220px] relative z-10"
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-6 items-start">
                        {right.map((service, i) => (
                            <AnimatedCard key={i} service={service} delay={i + 3} visible={visible} align="left" />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

/* 🔥 Animated Card */
function AnimatedCard({ service, delay, visible, align }) {
    return (
        <div
            style={{
                transform: visible
                    ? "translateX(0px)"
                    : align === "left"
                        ? "translateX(40px)"
                        : "translateX(-40px)",
                opacity: visible ? 1 : 0,
                transition: `all 0.6s ease ${delay * 0.15}s`,
            }}
            className="bg-[#0a192f] w-[180px] h-[100px] flex flex-col justify-center items-center gap-2 rounded-xl border border-[#1f3a5f] hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/10 text-center"
        >
            <div className="text-cyan-300 text-xl md:text-2xl">
                {service.icon}
            </div>

            <h3 className="text-xs md:text-sm font-medium">
                {service.title}
            </h3>
        </div>
    );
}