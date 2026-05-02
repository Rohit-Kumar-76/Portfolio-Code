"use client";

import {
    FaCheckCircle,
    FaUser,
    FaUserCog,
    FaLaptopCode,
    FaLayerGroup,
    FaBullseye,
    FaArrowRight,
} from "react-icons/fa";

export default function BusinessWebsite() {
    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-6xl mx-auto px-6 space-y-24">

                {/* 🔥 HERO */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-teal-300 mb-4">
                            Business Website
                        </h1>

                        <p className="text-gray-400 mb-4">
                            A professional website designed to represent your business online,
                            build trust, and convert visitors into paying customers.
                        </p>

                        <p className="text-gray-400 mb-6">
                            This solution is ideal for startups, agencies, and local businesses
                            who want to establish a strong digital presence.
                        </p>

                        <button className="px-6 py-2 bg-teal-300 text-[#0a192f] rounded flex items-center gap-2 hover:scale-105 transition cursor-pointer">
                            View Demo <FaArrowRight />
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <img src="/illustration/bussiness.svg" className="w-[320px]" />
                    </div>
                </div>

                {/* 🔥 PROBLEM + SOLUTION */}
                <div className="grid md:grid-cols-2 gap-10">
                    <Box title="Problem" icon={<FaBullseye />}>
                        Many businesses struggle to attract customers online due to poor
                        website design, slow performance, or lack of clear messaging.
                    </Box>

                    <Box title="Solution" icon={<FaBullseye />}>
                        We build high-performance, modern websites that clearly communicate
                        your services and convert visitors into leads.
                    </Box>
                </div>

                {/* 🔥 FEATURES */}
                <Section title="Key Features">
                    <Grid>
                        <Feature text="Modern responsive UI design" />
                        <Feature text="SEO optimized pages" />
                        <Feature text="Fast loading performance" />
                        <Feature text="Lead generation forms" />
                        <Feature text="Mobile-first design" />
                        <Feature text="Clean and professional layout" />
                    </Grid>
                </Section>

                {/* 🔥 PAGES STRUCTURE */}
                <Section title="Website Pages">
                    <Grid>
                        <Feature text="Home Page (Overview + CTA)" />
                        <Feature text="About Page (Trust building)" />
                        <Feature text="Services Page" />
                        <Feature text="Contact Page" />
                        <Feature text="Portfolio / Projects Page" />
                        <Feature text="Testimonials Section" />
                    </Grid>
                </Section>

                {/* 🔥 USER FLOW */}
                <Section title="User Journey" icon={<FaUser />}>
                    <ul className="space-y-3 text-gray-300">
                        <li>1. User visits homepage</li>
                        <li>2. Understands services</li>
                        <li>3. Builds trust through content</li>
                        <li>4. Navigates through pages</li>
                        <li>5. Fills contact form</li>
                        <li>6. Business receives lead</li>
                    </ul>
                </Section>

                {/* 🔥 ADMIN PANEL */}
                <Section title="Admin Panel Features" icon={<FaUserCog />}>
                    <Grid>
                        <Feature text="Update content easily" />
                        <Feature text="Manage inquiries" />
                        <Feature text="Edit services and pages" />
                        <Feature text="Track leads" />
                        <Feature text="Add testimonials" />
                        <Feature text="Upload images/content" />
                    </Grid>
                </Section>

                {/* 🔥 BENEFITS */}
                <Section title="Business Benefits">
                    <Grid>
                        <Feature text="Increase customer trust" />
                        <Feature text="Generate more leads" />
                        <Feature text="Improve brand visibility" />
                        <Feature text="Better online presence" />
                        <Feature text="Higher conversion rate" />
                        <Feature text="Professional branding" />
                    </Grid>
                </Section>

                {/* 🔥 TECH STACK */}
                <Section title="Tech Stack" icon={<FaLaptopCode />}>
                    <div className="flex flex-wrap gap-3">
                        <Tech text="Next.js" />
                        <Tech text="React" />
                        <Tech text="Tailwind CSS" />
                        <Tech text="Node.js (optional)" />
                    </div>
                </Section>

                {/* 🔥 CTA */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">
                        Want this type of website for your business?
                    </h3>

                    <a href="/contact-us" className="px-6 py-2 bg-teal-300 text-[#0a192f] rounded hover:scale-105 transition cursor-pointer">
                        Start Your Project
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