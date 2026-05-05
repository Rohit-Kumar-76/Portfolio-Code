"use client";

import { useEffect, useState } from "react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Amit Sharma",
            role: "Business Owner",
            text: "Our website completely transformed our business. We started getting real leads within the first week.",
        },
        {
            name: "Riya Singh",
            role: "Cafe Owner",
            text: "The design is modern and super fast. Customers now find us easily online.",
        },
        {
            name: "Rahul Kumar",
            role: "Coaching Institute",
            text: "Student enrollment increased after launching the website. It builds strong trust.",
        },
        {
            name: "Sneha Verma",
            role: "Freelancer",
            text: "My portfolio looks premium now. I started getting clients consistently.",
        },
        {
            name: "Arjun Patel",
            role: "Startup Founder",
            text: "Clean UI, smooth performance, and great communication.",
        },
        {
            name: "Neha Gupta",
            role: "Entrepreneur",
            text: "Delivered exactly what I needed. Fast, responsive, and SEO-friendly.",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) =>
                prev + 3 >= testimonials.length ? 0 : prev + 3
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#0a192f] text-white py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* 🔥 HEADER */}
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4">
                    Trusted by Clients
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                    Helping businesses grow with modern, fast and SEO-friendly websites.
                </p>

                {/* ⭐ GLOBAL RATING */}
                <div className="flex justify-center mb-10 text-yellow-400 text-lg">
                    ⭐⭐⭐⭐⭐
                    <span className="text-gray-400 text-sm ml-2">
                        (50+ happy clients)
                    </span>
                </div>

                {/* 🔥 SLIDER */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-1000 ease-in-out"
                        style={{
                            transform: `translateX(-${index * (100 / 3)}%)`,
                        }}
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="w-full md:w-1/3 px-4 flex-shrink-0"
                            >
                                {/* 🔥 CARD */}
                                <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f] hover:border-cyan-300 transition-all duration-300 h-[230px] flex flex-col justify-between relative overflow-hidden hover:-translate-y-2 hover:shadow-xl">

                                    {/* 💬 Quote Icon */}
                                    <div className="absolute top-3 left-4 text-cyan-300 text-4xl opacity-10">
                                        ❝
                                    </div>

                                    {/* ⭐ Rating */}
                                    <div className="text-yellow-400 text-sm mb-2 z-10">
                                        ⭐⭐⭐⭐⭐
                                    </div>

                                    {/* TEXT */}
                                    <p className="text-gray-300 text-sm line-clamp-4 leading-relaxed z-10">
                                        "{t.text}"
                                    </p>

                                    {/* USER */}
                                    <div className="mt-3 z-10">
                                        <h3 className="text-cyan-300 font-semibold">
                                            {t.name}
                                        </h3>
                                        <p className="text-gray-400 text-xs">
                                            {t.role}
                                        </p>
                                    </div>

                                    {/* 🔥 Glow effect */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-300 opacity-10 blur-2xl"></div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🔥 CTA */}
                <div className="mt-16">
                    <h3 className="text-xl font-semibold mb-4">
                        Ready to grow your business online?
                    </h3>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="/contact-us"
                            className="bg-cyan-300 text-[#0a192f] px-6 py-2 rounded-md font-medium hover:scale-105 transition"
                        >
                            Start Your Project 🚀
                        </a>

                        <a
                            href="/projects"
                            className="border border-cyan-300 text-cyan-300 px-6 py-2 rounded-md hover:bg-cyan-300 hover:text-[#0a192f] transition"
                        >
                            View Work
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}