"use client";

import {
    FaCheckCircle,
    FaUser,
    FaUserCog,
    FaLaptopCode,
    FaUserTie,
    FaBullseye,
    FaArrowRight,
} from "react-icons/fa";

export default function PortfolioWebsite() {
    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-6xl mx-auto px-6 space-y-24">

                {/* 🔥 HERO */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-teal-300 mb-4">
                            Portfolio Website
                        </h1>

                        <p className="text-gray-400 mb-4">
                            A modern personal portfolio website designed to showcase your
                            skills, projects, and experience in a professional way.
                        </p>

                        <p className="text-gray-400 mb-6">
                            Perfect for developers, designers, freelancers, and professionals
                            who want to build a strong online presence.
                        </p>


                    </div>

                    <div className="flex justify-center">
                        <img src="/illustration/portfolio.svg" className="w-[320px]" />
                    </div>
                </div>

                {/* 🔥 PROBLEM + SOLUTION */}
                <div className="grid md:grid-cols-2 gap-10">
                    <Box title="Problem" icon={<FaBullseye />}>
                        Many professionals struggle to showcase their work effectively
                        and fail to stand out in a competitive market.
                    </Box>

                    <Box title="Solution" icon={<FaBullseye />}>
                        We create visually appealing and well-structured portfolios
                        that highlight your strengths and attract opportunities.
                    </Box>
                </div>

                {/* 🔥 FEATURES */}
                <Section title="Key Features">
                    <Grid>
                        <Feature text="Project showcase section" />
                        <Feature text="Skills & experience display" />
                        <Feature text="Contact & social links" />
                        <Feature text="Responsive design" />
                        <Feature text="Clean modern UI" />
                        <Feature text="Fast performance" />
                    </Grid>
                </Section>

                {/* 🔥 PAGES */}
                <Section title="Website Sections">
                    <Grid>
                        <Feature text="Home (Introduction)" />
                        <Feature text="About Me" />
                        <Feature text="Projects Showcase" />
                        <Feature text="Skills Section" />
                        <Feature text="Contact Section" />
                        <Feature text="Testimonials (optional)" />
                    </Grid>
                </Section>

                {/* 🔥 USER FLOW */}
                <Section title="User Journey" icon={<FaUser />}>
                    <ul className="space-y-3 text-gray-300">
                        <li>1. Visitor lands on homepage</li>
                        <li>2. Reads introduction</li>
                        <li>3. Checks projects & skills</li>
                        <li>4. Builds trust</li>
                        <li>5. Contacts you</li>
                        <li>6. Converts into client / opportunity</li>
                    </ul>
                </Section>

                {/* 🔥 ADMIN (optional) */}
                <Section title="Admin Features (Optional)" icon={<FaUserCog />}>
                    <Grid>
                        <Feature text="Update projects easily" />
                        <Feature text="Edit content & skills" />
                        <Feature text="Manage contact messages" />
                        <Feature text="Add testimonials" />
                    </Grid>
                </Section>

                {/* 🔥 BENEFITS */}
                <Section title="Benefits">
                    <Grid>
                        <Feature text="Strong personal branding" />
                        <Feature text="More freelance opportunities" />
                        <Feature text="Professional presence" />
                        <Feature text="Better client trust" />
                        <Feature text="Showcase real work" />
                        <Feature text="Career growth" />
                    </Grid>
                </Section>

                {/* 🔥 TECH STACK */}
                <Section title="Tech Stack" icon={<FaLaptopCode />}>
                    <div className="flex flex-wrap gap-3">
                        <Tech text="Next.js" />
                        <Tech text="React" />
                        <Tech text="Tailwind CSS" />
                    </div>
                </Section>

                {/* 🔥 CTA */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">
                        Want your own portfolio website?
                    </h3>

                    <a
                        href="/contact-us"
                        className="px-6 py-2 bg-teal-300 text-[#0a192f] rounded hover:scale-105 transition cursor-pointer"
                    >
                        Get Started
                    </a>
                </div>

            </div>

        </section>
    );
}


/* 🔧 COMPONENTS */

function Section({ title, children, icon }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                {icon && <span className="text-teal-300">{icon}</span>}
                {title}
            </h2>
            {children}
        </div>
    );
}

function Grid({ children }) {
    return <div className="grid md:grid-cols-2 gap-6">{children}</div>;
}

function Feature({ text }) {
    return (
        <div className="flex items-center gap-3 bg-[#112240] p-4 rounded-lg border border-[#1f3a5f]">
            <FaCheckCircle className="text-teal-300" />
            {text}
        </div>
    );
}

function Tech({ text }) {
    return (
        <span className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded text-sm">
            {text}
        </span>
    );
}

function Box({ title, children, icon }) {
    return (
        <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-teal-300">{icon}</span>
                {title}
            </h3>
            <p className="text-gray-400">{children}</p>
        </div>
    );
}