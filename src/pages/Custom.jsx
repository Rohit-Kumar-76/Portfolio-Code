"use client";

import {
    FaCheckCircle,
    FaUser,
    FaUserCog,
    FaLaptopCode,
    FaCogs,
    FaBullseye,
    FaArrowRight,
} from "react-icons/fa";

export default function CustomWebApp() {
    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-6xl mx-auto px-6 space-y-24">

                {/* 🔥 HERO */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-teal-300 mb-4">
                            Custom Web Application
                        </h1>

                        <p className="text-gray-400 mb-4">
                            A fully customized web application built specifically
                            for your business needs with advanced features and automation.
                        </p>

                        <p className="text-gray-400 mb-6">
                            Ideal for startups, businesses, and agencies who need
                            unique functionality beyond standard websites.
                        </p>

                        <button className="px-6 py-2 bg-teal-300 text-[#0a192f] rounded flex items-center gap-2 hover:scale-105 transition cursor-pointer">
                            View Demo <FaArrowRight />
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <img src="/illustration/app.svg" className="w-[320px]" />
                    </div>
                </div>

                {/* 🔥 PROBLEM + SOLUTION */}
                <div className="grid md:grid-cols-2 gap-10">
                    <Box title="Problem" icon={<FaBullseye />}>
                        Many businesses struggle with manual processes, lack of automation,
                        and generic tools that do not fit their workflow.
                    </Box>

                    <Box title="Solution" icon={<FaBullseye />}>
                        We build tailored web applications that automate tasks,
                        improve efficiency, and match your exact business requirements.
                    </Box>
                </div>

                {/* 🔥 FEATURES */}
                <Section title="Key Features">
                    <Grid>
                        <Feature text="Custom dashboard & UI" />
                        <Feature text="User authentication system" />
                        <Feature text="Role-based access control" />
                        <Feature text="Real-time data management" />
                        <Feature text="API integration" />
                        <Feature text="Secure & scalable architecture" />
                    </Grid>
                </Section>

                {/* 🔥 USE CASES */}
                <Section title="Use Cases">
                    <Grid>
                        <Feature text="Admin dashboards" />
                        <Feature text="CRM systems" />
                        <Feature text="Booking systems" />
                        <Feature text="Inventory management" />
                        <Feature text="Learning platforms" />
                        <Feature text="Custom business tools" />
                    </Grid>
                </Section>

                {/* 🔥 USER FLOW */}
                <Section title="User Journey" icon={<FaUser />}>
                    <ul className="space-y-3 text-gray-300">
                        <li>1. User logs into the system</li>
                        <li>2. Accesses dashboard</li>
                        <li>3. Performs required actions</li>
                        <li>4. Data gets stored & processed</li>
                        <li>5. Results displayed instantly</li>
                        <li>6. Improves workflow efficiency</li>
                    </ul>
                </Section>

                {/* 🔥 ADMIN PANEL */}
                <Section title="Admin Panel Features" icon={<FaUserCog />}>
                    <Grid>
                        <Feature text="Manage users & roles" />
                        <Feature text="Control permissions" />
                        <Feature text="View analytics & reports" />
                        <Feature text="Manage data & content" />
                        <Feature text="System configuration" />
                        <Feature text="Security controls" />
                    </Grid>
                </Section>

                {/* 🔥 BENEFITS */}
                <Section title="Business Benefits">
                    <Grid>
                        <Feature text="Automation of manual tasks" />
                        <Feature text="Improved efficiency" />
                        <Feature text="Time & cost savings" />
                        <Feature text="Scalable business system" />
                        <Feature text="Better data management" />
                        <Feature text="Competitive advantage" />
                    </Grid>
                </Section>

                {/* 🔥 TECH STACK */}
                <Section title="Tech Stack" icon={<FaLaptopCode />}>
                    <div className="flex flex-wrap gap-3">
                        <Tech text="Next.js" />
                        <Tech text="React" />
                        <Tech text="Tailwind CSS" />
                        <Tech text="Node.js" />
                        <Tech text="MongoDB / MySQL" />
                    </div>
                </Section>

                {/* 🔥 CTA */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">
                        Need a custom solution for your business?
                    </h3>

                    <a
                        href="/contact-us"
                        className="px-6 py-2 bg-teal-300 text-[#0a192f] rounded hover:scale-105 transition cursor-pointer"
                    >
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