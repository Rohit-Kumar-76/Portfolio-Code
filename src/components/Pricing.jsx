export function Pricing() {
    const plans = [
        {
            name: "Basic",
            price: "₹999",
            features: ["1 Page Website", "Responsive Design", "Basic SEO"],
        },
        {
            name: "Standard",
            price: "₹2999",
            features: ["5 Pages Website", "Modern UI/UX", "SEO + Speed Optimization"],
            popular: true,
        },
        {
            name: "Premium",
            price: "₹5999",
            features: ["Custom Web App", "Admin Panel", "Full Optimization"],
        },
    ];

    return (
        <section className="bg-[#0a192f] text-white py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-teal-300 mb-12">
                    Pricing Plans
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`p-6 rounded-xl border ${plan.popular
                                ? "border-teal-300 scale-105"
                                : "border-[#1f3a5f]"
                                } bg-[#112240] hover:shadow-lg hover:shadow-teal-300/10 transition`}
                        >

                            {plan.popular && (
                                <p className="text-xs text-teal-300 mb-2">Most Popular</p>
                            )}

                            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

                            <p className="text-3xl font-bold text-teal-300 mb-4">
                                {plan.price}
                            </p>

                            <ul className="text-gray-400 text-sm mb-6 space-y-2">
                                {plan.features.map((f, idx) => (
                                    <li key={idx}>✔ {f}</li>
                                ))}
                            </ul>

                            <button className="border border-teal-300 text-teal-300 px-4 py-2 rounded hover:bg-teal-300 hover:text-[#0a192f] transition">
                                Choose Plan
                            </button>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}