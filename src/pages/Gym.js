"use client";

import {
    FaCheckCircle,
    FaUser,
    FaUserCog,
    FaLaptopCode,
    FaDumbbell,
    FaBullseye,
    FaArrowRight,
} from "react-icons/fa";

export default function GymWebsite() {
    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-6xl mx-auto px-6 space-y-24">

                {/* 🔥 HERO */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-teal-300 mb-4">
                            Gym / Fitness Website
                        </h1>

                        <p className="text-gray-400 mb-4">
                            A powerful website designed for gyms and fitness centers
                            to attract members, showcase services, and manage memberships.
                        </p>

                        <p className="text-gray-400 mb-6">
                            Perfect for gyms, personal trainers, and fitness studios
                            looking to grow their business online.
                        </p>

                        <button className="px-6 py-2 bg-teal-300 text-[#0a192f] rounded flex items-center gap-2 hover:scale-105 transition cursor-pointer">
                            View Demo <FaArrowRight />
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <img src="/illustration/gym.svg" className="w-[320px]" />
                    </div>
                </div>

                {/* 🔥 PROBLEM + SOLUTION */}
                <div className="grid md:grid-cols-2 gap-10">
                    <Box title="Problem" icon={<FaBullseye />}>
                        Many gyms struggle to attract new members and manage memberships,
                        schedules, and trainer information efficiently.
                    </Box>

                    <Box title="Solution" icon={<FaBullseye />}>
                        We build modern fitness websites with membership systems,
                        class schedules, and engaging design to increase signups.
                    </Box>
                </div>

                {/* 🔥 FEATURES */}
                <Section title="Key Features">
                    <Grid>
                        <Feature text="Membership plans display" />
                        <Feature text="Online registration system" />
                        <Feature text="Trainer profiles showcase" />
                        <Feature text="Workout / class schedule" />
                        <Feature text="Mobile-friendly design" />
                        <Feature text="Fast loading performance" />
                    </Grid>
                </Section>

                {/* 🔥 PAGES */}
                <Section title="Website Pages">
                    <Grid>
                        <Feature text="Home Page (Plans + CTA)" />
                        <Feature text="Membership Plans Page" />
                        <Feature text="Trainers Page" />
                        <Feature text="Schedule Page" />
                        <Feature text="Contact Page" />
                        <Feature text="Transformation / Gallery" />
                    </Grid>
                </Section>

                {/* 🔥 USER FLOW */}
                <Section title="User Journey" icon={<FaUser />}>
                    <ul className="space-y-3 text-gray-300">
                        <li>1. User visits gym website</li>
                        <li>2. Checks membership plans</li>
                        <li>3. Views trainers & facilities</li>
                        <li>4. Selects plan</li>
                        <li>5. Registers online</li>
                        <li>6. Joins gym</li>
                    </ul>
                </Section>

                {/* 🔥 ADMIN PANEL */}
                <Section title="Admin Panel Features" icon={<FaUserCog />}>
                    <Grid>
                        <Feature text="Manage memberships" />
                        <Feature text="Update plans & pricing" />
                        <Feature text="Manage trainer profiles" />
                        <Feature text="Update schedules" />
                        <Feature text="Track inquiries" />
                        <Feature text="Manage users" />
                    </Grid>
                </Section>

                {/* 🔥 BENEFITS */}
                <Section title="Business Benefits">
                    <Grid>
                        <Feature text="Increase memberships" />
                        <Feature text="Better brand visibility" />
                        <Feature text="Online registration convenience" />
                        <Feature text="Professional presence" />
                        <Feature text="Customer engagement" />
                        <Feature text="Higher revenue growth" />
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
                        Want a website for your gym or fitness center?
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