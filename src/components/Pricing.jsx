"use client";
import { useEffect, useState } from "react";

export function Pricing() {



    const [settings, setSettings] = useState(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch("/api/admin/settings");
                const data = await res.json();
                setSettings(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchSettings();
    }, []);

    const getFinalPrice = (price, offer) => {
        const p = Number(price) || 0;
        const o = Number(offer) || 0;

        return Math.round(p - (p * o) / 100);
    };


    const plans = [
        {
            name: "Starter",
            original: settings?.pricing?.starter,
            price: getFinalPrice(settings?.pricing?.starter, settings?.offerPercentage),
            desc: "Perfect for personal or landing page",
            offer: `${settings?.offerPercentage || 0}% OFF`,
            features: [
                "1 Landing Page (Scroll Website)",
                "Responsive Design (Mobile + Tablet)",
                "Basic SEO Setup",
                "Contact Form Integration",
                "Delivery in 5 Days",
                "1 Revision Included"
            ],
        },
        {
            original: settings?.pricing?.business,
            price: getFinalPrice(settings?.pricing?.business, settings?.offerPercentage),
            desc: "Best for small businesses & portfolio",
            popular: true,
            offer: `${settings?.offerPercentage || 0}% OFF`,
            features: [
                "Up to 5 Pages Website",
                "Modern UI/UX Design",
                "SEO + Performance Optimization",
                "Fast Loading Speed",
                "WhatsApp / Contact Integration",
                "3 Revisions Included",
                "Delivery in 15 Days"
            ],
        },
        {
            name: "Pro",
            original: settings?.pricing?.pro,
            price: getFinalPrice(settings?.pricing?.pro, settings?.offerPercentage),
            desc: "For startups & custom web apps",
            offer: `${settings?.offerPercentage || 0}% OFF`,
            features: [
                "Custom Web Application",
                "Admin Panel / Dashboard",
                "Authentication (Login/Signup)",
                "Database Integration",
                "API Integration",
                "Full Optimization + Security",
                "Unlimited Revisions (Scope Based)",
                "Delivery: Depends on Project"
            ],
        },
    ];

    return (
        <section className="bg-[#0a192f] text-white py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4">
                    Pricing Plans
                </h2>

                <p className="text-gray-400 mb-12 text-sm">
                    Transparent pricing for every stage — from simple landing pages to full web apps
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`p-6 rounded-xl border ${plan.popular
                                ? "border-cyan-300 scale-105 shadow-lg shadow-cyan-300/10"
                                : "border-[#1f3a5f]"
                                } bg-[#112240] transition`}
                        >

                            {/* 🔥 Popular */}
                            {plan.popular && (
                                <p className="text-xs text-cyan-300 mb-2">
                                    🔥 Most Popular
                                </p>
                            )}

                            {/* 🔥 Offer Badge */}
                            <span className="text-xs bg-cyan-300 text-[#0a192f] px-2 py-1 rounded">
                                {plan.offer}
                            </span>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mt-3 mb-1">
                                {plan.name}
                            </h3>

                            <p className="text-gray-400 text-sm mb-3">
                                {plan.desc}
                            </p>

                            {/* 🔥 Price */}
                            <div className="mb-4 flex items-center justify-center gap-3">
                                <span className="text-gray-500 line-through text-lg">
                                    {plan.original}
                                </span>

                                <span className="text-3xl font-bold text-cyan-300">
                                    {plan.price - 1}
                                </span>
                            </div>

                            {/* 🔥 Urgency */}
                            <p className="text-xs text-red-400 mb-4">
                                Limited Time Offer
                            </p>

                            {/* Features */}
                            <ul className="text-gray-400 text-sm mb-6 space-y-2 text-left">
                                {plan.features.map((f, idx) => (
                                    <li key={idx}>✔ {f}</li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href={`https://wa.me/917651893226?text=${encodeURIComponent(
                                    `Hi, I am interested in your ${plan.name} plan. Please share more details.`
                                )}`}
                                target="_blank"
                                className="w-full block text-center border border-cyan-300 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-300 hover:text-[#0a192f] transition cursor-pointer"
                            >
                                Get Started
                            </a>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}