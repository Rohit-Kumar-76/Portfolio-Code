"use client";

import TechStack from "@/components/TechStack";
import { useEffect, useRef, useState } from "react";
import { FaRocket, FaBullseye, FaUsers } from "react-icons/fa";
// import TechStack from "..components/TechStack";

/* 🔥 Scroll Hook */
function useInView() {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return [ref, visible];
}

export default function About() {
    const [heroRef, heroShow] = useInView();
    const [storyRef, storyShow] = useInView();
    const [missionRef, missionShow] = useInView();
    const [statsRef, statsShow] = useInView();
    const [approachRef, approachShow] = useInView();
    const [ctaRef, ctaShow] = useInView();

    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-5xl mx-auto px-6 space-y-20">

                {/* 🔥 HERO */}
                <div
                    ref={heroRef}
                    className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${heroShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                            About <span className="text-cyan-300">TrioScript</span>
                        </h1>

                        <p className="text-gray-400 mb-4">
                            We are a web development team dedicated to building modern,
                            high-performance websites that help businesses grow and
                            establish a strong online presence.
                        </p>

                        <p className="text-gray-400">
                            Our focus is on delivering fast, scalable and user-friendly
                            solutions that create real impact for our clients.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-300">
                            <span className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded-full">
                                Modern Design
                            </span>
                            <span className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded-full">
                                Fast Performance
                            </span>
                            <span className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded-full">
                                SEO Optimized
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center relative">
                        <div className="absolute w-[250px] h-[250px] bg-cyan-300/10 blur-3xl rounded-full"></div>

                        <img
                            src="/illustration/teams.svg"
                            alt="about"
                            className="w-[80%] max-w-md relative z-10"
                        />
                    </div>
                </div>

                {/* 🔥 STORY */}
                <div
                    ref={storyRef}
                    className={`transition-all duration-700 ${storyShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-2xl font-semibold mb-4">Our Story</h2>

                    <p className="text-gray-400 mb-4">
                        TrioScript started with a simple vision — to make professional
                        websites accessible for businesses of all sizes.
                    </p>

                    <p className="text-gray-400 mb-4">
                        Over time, we have worked on multiple projects ranging from
                        portfolio websites to business platforms and custom web
                        applications.
                    </p>

                    <p className="text-gray-400">
                        Today, we focus on delivering websites that are fast,
                        scalable and optimized for real-world usage.
                    </p>
                </div>

                {/* 🔥 MISSION */}
                <div
                    ref={missionRef}
                    className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${missionShow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                >
                    <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">
                        <FaBullseye className="text-cyan-300 text-2xl mb-3" />
                        <h3 className="font-semibold mb-2">Our Mission</h3>
                        <p className="text-gray-400 text-sm">
                            Deliver high-quality web solutions that help businesses grow online.
                        </p>
                    </div>

                    <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">
                        <FaRocket className="text-cyan-300 text-2xl mb-3" />
                        <h3 className="font-semibold mb-2">Our Vision</h3>
                        <p className="text-gray-400 text-sm">
                            Become a trusted web development partner delivering modern solutions.
                        </p>
                    </div>
                </div>

                {/* 🔥 STATS */}
                <div
                    ref={statsRef}
                    className={`grid grid-cols-3 gap-6 text-center transition-all duration-700 ${statsShow ? "opacity-100 scale-100" : "opacity-0 scale-90"
                        }`}
                >
                    <div>
                        <h3 className="text-3xl font-bold text-cyan-300">20+</h3>
                        <p className="text-gray-400 text-sm">Projects</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-cyan-300">15+</h3>
                        <p className="text-gray-400 text-sm">Clients</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-cyan-300">1+</h3>
                        <p className="text-gray-400 text-sm">Years</p>
                    </div>
                </div>

                {/* 🔥 APPROACH */}
                <div
                    ref={approachRef}
                    className={`transition-all duration-700 ${approachShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <FaUsers className="text-cyan-300" />
                        Our Approach
                    </h2>

                    <p className="text-gray-400 mb-4">
                        We understand client requirements deeply before starting development.
                    </p>

                    <p className="text-gray-400">
                        Our focus is always on performance, design and long-term scalability.
                    </p>
                </div>

                {/* 🔥 TECH STACK */}
                <TechStack />

                {/* 🔥 CTA */}
                <div
                    ref={ctaRef}
                    className={`text-center transition-all duration-700 ${ctaShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-2xl font-semibold mb-4">
                        Let’s Build Something Together
                    </h2>

                    <p className="text-gray-400 mb-6">
                        Have an idea? We are ready to turn it into a modern website.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block px-6 py-2 bg-cyan-300 text-[#0a192f] rounded hover:scale-105 transition"
                    >
                        Start Your Project
                    </a>
                </div>

            </div>
        </section>
    );
}