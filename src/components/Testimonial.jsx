"use client";

import { useEffect, useState } from "react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Amit Sharma",
            role: "Business Owner",
            text: "Amazing website! My business grew after launching the site.",
        },
        {
            name: "Riya Singh",
            role: "Cafe Owner",
            text: "Clean design and fast delivery. Highly recommended!",
        },
        {
            name: "Rahul Kumar",
            role: "Coaching Institute",
            text: "Students enrollment increased after website launch.",
        },
        {
            name: "Sneha Verma",
            role: "Freelancer",
            text: "Portfolio looks premium and professional now.",
        },
        {
            name: "Arjun Patel",
            role: "Startup Founder",
            text: "Great UI/UX and smooth performance.",
        },
        {
            name: "Neha Gupta",
            role: "Entrepreneur",
            text: "Highly satisfied with the final product.",
        },
    ];

    const [index, setIndex] = useState(0);

    // 🔥 Slow auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) =>
                prev + 3 >= testimonials.length ? 0 : prev + 3
            );
        }, 5000); // ⏳ slow (5 sec)

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#0a192f] text-white py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-12">
                    What Clients Say
                </h2>

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
                                {/* 🔥 Equal Height Card */}
                                <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f] hover:border-cyan-300 transition h-[180px] flex flex-col justify-between">

                                    <p className="text-gray-300 text-sm line-clamp-3">
                                        "{t.text}"
                                    </p>

                                    <div>
                                        <h3 className="text-cyan-300 font-semibold">
                                            {t.name}
                                        </h3>
                                        <p className="text-gray-400 text-xs">
                                            {t.role}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}