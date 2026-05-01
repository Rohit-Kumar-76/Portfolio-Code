import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiMysql,
} from "react-icons/si";

export default function TechStack() {
    const stack = [
        {
            title: "Frontend",
            techs: [
                { icon: <FaHtml5 />, name: "HTML" },
                { icon: <FaCss3Alt />, name: "CSS" },
                { icon: <FaJs />, name: "JavaScript" },
                { icon: <FaReact />, name: "React" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiTailwindcss />, name: "Tailwind" },
            ],
        },
        {
            title: "Backend",
            techs: [
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <SiMongodb />, name: "MongoDB" },
                { icon: <SiMysql />, name: "MySQL" }, // ✅ added
            ],
        },
        {
            title: "Tools",
            techs: [{ icon: <FaGitAlt />, name: "Git" }],
        },
    ];

    return (
        <section className="bg-[#0a192f] text-white py-24">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-teal-300 text-center mb-16">
                    Tech Stack
                </h2>

                <div className="space-y-12">

                    {stack.map((category, i) => (
                        <div key={i}>

                            {/* Category Title */}
                            <h3 className="text-xl font-semibold mb-6 text-gray-300 border-l-4 border-teal-300 pl-3">
                                {category.title}
                            </h3>

                            {/* Tech List */}
                            <div className="flex flex-wrap gap-4">

                                {category.techs.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 px-5 py-3 rounded-lg bg-[#112240] border border-[#1f3a5f] hover:border-teal-300 hover:shadow-lg hover:shadow-teal-300/10 transition group"
                                    >

                                        {/* Icon */}
                                        <div className="text-xl text-teal-300 group-hover:scale-110 transition">
                                            {tech.icon}
                                        </div>

                                        {/* Name */}
                                        <span className="text-sm text-gray-300">
                                            {tech.name}
                                        </span>

                                    </div>
                                ))}

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}