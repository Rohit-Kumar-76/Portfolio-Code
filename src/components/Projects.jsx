"use client";

export default function Projects() {
    const projects = [
        {
            title: "E-commerce Website",
            desc: "A full-featured e-commerce platform with cart, payment integration, and admin dashboard.",
            image: "/projects/ecommerce.png",
            demo: "#",
            code: "#",
        },
        {
            title: "Portfolio Website",
            desc: "Modern personal portfolio with animations, responsive design, and clean UI.",
            image: "/projects/portfolio.png",
            demo: "#",
            code: "#",
        },
        {
            title: "Blog Platform",
            desc: "A MERN stack blog app with authentication, CRUD operations, and comments system.",
            image: "/projects/blog.png",
            demo: "#",
            code: "#",
        },
        {
            title: "Business Landing Page",
            desc: "High-converting landing page designed for startups and marketing campaigns.",
            image: "/projects/landing.png",
            demo: "#",
            code: "#",
        },
        {
            title: "Custom Web App",
            desc: "A custom-built web application tailored for client-specific business needs.",
            image: "/projects/app.png",
            demo: "#",
            code: "#",
        },
        {
            title: "Shops ",
            desc: "A custom-built web application tailored for client-specific business needs.",
            image: "/projects/app.png",
            demo: "#",
            code: "#",
        },
    ];

    return (
        <section className="bg-[#0a192f] text-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-300">
                        My Projects
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Some of my recent work and projects
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-[#112240] p-1 rounded-xl overflow-hidden border border-[#1f3a5f] hover:border-teal-300 hover:shadow-lg hover:shadow-teal-300/10 transition duration-300 group"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={`https://picsum.photos/400/300?random=${i}`}
                                    alt={project.title}
                                    className="w-full h-[180px] object-cover group-hover:scale-110 transition duration-500 rounded-md"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col justify-between h-[200px]">

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm line-clamp-3">
                                        {project.desc}
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-1 mt-1">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="bg-teal-300 text-[#0a192f] px-4 py-1 rounded text-sm hover:opacity-80"
                                    >
                                        Live Demo
                                    </a>

                                    {/* <a
                                        href={project.code}
                                        target="_blank"
                                        className="border border-teal-300 text-teal-300 px-4 py-1 rounded text-sm hover:bg-teal-300 hover:text-[#0a192f]"
                                    >
                                        Code
                                    </a> */}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}