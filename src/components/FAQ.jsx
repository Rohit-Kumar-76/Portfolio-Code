"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQ() {
    const [active, setActive] = useState(null);

    const faqs = [
        {
            question: "How much time does it take to build a website?",
            answer: "It depends on the project. A basic website takes 2-5 days, while advanced projects may take 1-2 weeks.",
        },
        {
            question: "Do you provide mobile responsive design?",
            answer: "Yes, all websites I build are fully responsive and work perfectly on all devices.",
        },
        {
            question: "What technologies do you use?",
            answer: "I use modern technologies like React, Next.js, Tailwind CSS, Node.js, and MongoDB/MySQL.",
        },
        {
            question: "Will I get support after delivery?",
            answer: "Yes, I provide support even after delivery for minor fixes and guidance.",
        },
        {
            question: "How can I contact you?",
            answer: "You can contact me via WhatsApp, call, or the contact form on this website.",
        },
    ];

    return (
        <section className="bg-[#0a192f] text-white py-24">
            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 text-center mb-12">
                    Frequently Asked Questions
                </h2>

                {/* FAQ List */}
                <div className="flex flex-col gap-4">

                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-[#112240] border border-[#1f3a5f] rounded-xl overflow-hidden"
                        >

                            {/* Question */}
                            <button
                                onClick={() => setActive(active === i ? null : i)}
                                className="w-full flex justify-between items-center px-5 py-4 text-left"
                            >
                                <span className="font-medium">{faq.question}</span>

                                <FiChevronDown
                                    className={`transition-transform duration-300 ${active === i ? "rotate-180 text-cyan-300" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`px-5 transition-all duration-300 overflow-hidden ${active === i ? "max-h-40 pb-4" : "max-h-0"
                                    }`}
                            >
                                <p className="text-gray-400 text-sm">
                                    {faq.answer}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}