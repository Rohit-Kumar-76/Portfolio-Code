"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-[#0a192f] text-white min-h-screen flex items-center relative overflow-hidden">

            {/* 🔥 Glow Background */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-300/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-300/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                <div>

                    <h2 className="text-cyan-300 text-lg mb-3">
                        Freelance Web Developer
                    </h2>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                        MERN & Next.JS Developer <br />
                        <span className="text-cyan-300">
                            Building Fast Modern Websites
                        </span>
                    </h1>

                    <p className="text-gray-400 mb-6 max-w-lg">
                        I’m a freelance web developer specializing in React and Next.js,
                        creating fast, SEO-friendly, and responsive websites for businesses
                        and startups.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="/projects" className="bg-cyan-300 text-[#0a192f] px-6 py-2 rounded-md font-medium hover:scale-105 transition duration-300 shadow-md">
                            View Projects
                        </a>

                        <a href="/contact-us" className="border border-cyan-300 text-cyan-300 px-6 py-2 rounded-md hover:bg-cyan-300 hover:text-[#0a192f] transition duration-300">
                            Hire Me
                        </a>
                    </div>

                </div>

                {/* Right Illustration */}
                <div className="flex justify-center relative">

                    {/* Glow */}
                    <div className="absolute w-[250px] h-[250px] bg-cyan-300/10 blur-3xl rounded-full"></div>

                    <Image
                        src="/illustration/hero1.png"
                        alt="TrioScript hero illustration"
                        width={500}
                        height={500}
                        sizes="(max-width: 768px) 80vw, 400px"
                        className="w-[85%] max-w-md h-auto relative z-10 hover:scale-105 transition-all duration-500 ease-in-out"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}