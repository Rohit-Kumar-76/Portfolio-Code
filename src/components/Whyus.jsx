import { FaBolt, FaRupeeSign, FaPalette, FaRocket } from "react-icons/fa";

export function WhyChoose() {
    const points = [
        {
            icon: <FaBolt />,
            title: "Fast Delivery",
            desc: "Quick turnaround time without compromising quality.",
        },
        {
            icon: <FaRupeeSign />,
            title: "Affordable Pricing",
            desc: "Budget-friendly solutions for startups and businesses.",
        },
        {
            icon: <FaPalette />,
            title: "Modern Design",
            desc: "Clean, responsive and user-friendly UI/UX.",
        },
        {
            icon: <FaRocket />,
            title: "SEO Friendly",
            desc: "Optimized websites to rank better on search engines.",
        },
    ];

    return (
        <section className="bg-[#112240] text-white py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-teal-300 mb-12">
                    Why Choose Us
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {points.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#0a192f] p-6 rounded-xl border border-[#1f3a5f] hover:border-teal-300 hover:shadow-lg hover:shadow-teal-300/10 transition flex flex-col items-center text-center"
                        >

                            {/* 🔥 ICON CENTER */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#112240] text-teal-300 text-xl mb-4">
                                {item.icon}
                            </div>

                            {/* TEXT */}
                            <h3 className="font-semibold mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}