"use client";

export default function Hero() {
    return (
        <section className="bg-[#0a192f] text-white min-h-screen flex items-center relative overflow-hidden">

            {/* 🔥 Glow Background */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-teal-300/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-teal-300/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <div>

                    <h2 className="text-teal-300 text-lg mb-3">
                        Hi, I'm WebNova 👋
                    </h2>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                        I build modern <br />
                        <span className="text-teal-300">
                            Web Experiences
                        </span>
                    </h1>

                    <p className="text-gray-400 mb-6 max-w-lg">
                        I’m a freelance web developer focused on creating fast,
                        responsive, and visually appealing websites using React,
                        Next.js, and modern technologies.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button className="cursor-pointer bg-teal-300 text-[#0a192f] px-6 py-2 rounded-md font-medium hover:scale-105 transition duration-300 shadow-md">
                            View Projects
                        </button>

                        <button className="cursor-pointer border border-teal-300 text-teal-300 px-6 py-2 rounded-md hover:bg-teal-300 hover:text-[#0a192f] transition duration-300">
                            Contact Us
                        </button>
                    </div>

                </div>

                {/* Right Illustration */}
                <div className="flex justify-center relative">

                    {/* Glow */}
                    <div className="absolute w-[250px] h-[250px] bg-teal-300/10 blur-3xl rounded-full"></div>

                    <img
                        src="/illustration/hero1.png" // 👉 local use kar (best)
                        alt="hero illustration"
                        className="w-[85%] max-w-md relative z-10 hover:scale-105 transition duration-500"
                    />
                </div>

            </div>
        </section>
    );
}