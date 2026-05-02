"use client";

import {
    FaCheckCircle,
    FaUser,
    FaUserCog,
    FaLaptopCode,
    FaSchool,
    FaBullseye,
    FaArrowRight,
} from "react-icons/fa";

export default function SchoolWebsite() {
    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-6xl mx-auto px-6 space-y-24">

                {/* 🔥 HERO */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-teal-300 mb-4">
                            School / Coaching Website
                        </h1>

                        <p className="text-gray-400 mb-4">
                            A complete educational website designed for schools,
                            coaching institutes, and training centers to manage
                            students and provide information online.
                        </p>

                        <p className="text-gray-400 mb-6">
                            Helps institutions build trust, improve communication,
                            and manage students efficiently.
                        </p>

                        <button className="px-6 py-2 bg-teal-300 text-[#0a192f] rounded flex items-center gap-2 hover:scale-105 transition cursor-pointer">
                            View Demo <FaArrowRight />
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <img src="/illustration/school.svg" className="w-[320px]" />
                    </div>
                </div>

                {/* 🔥 PROBLEM + SOLUTION */}
                <div className="grid md:grid-cols-2 gap-10">
                    <Box title="Problem" icon={<FaBullseye />}>
                        Many schools and coaching centers struggle to manage student
                        information, communicate updates, and maintain an online presence.
                    </Box>

                    <Box title="Solution" icon={<FaBullseye />}>
                        We build educational websites with student management,
                        course details, and communication tools to simplify operations.
                    </Box>
                </div>

                {/* 🔥 FEATURES */}
                <Section title="Key Features">
                    <Grid>
                        <Feature text="Course & syllabus pages" />
                        <Feature text="Student information system" />
                        <Feature text="Online admission form" />
                        <Feature text="Notice & announcements section" />
                        <Feature text="Mobile-friendly design" />
                        <Feature text="Fast and optimized performance" />
                    </Grid>
                </Section>

                {/* 🔥 PAGES */}
                <Section title="Website Pages">
                    <Grid>
                        <Feature text="Home Page (Overview + Highlights)" />
                        <Feature text="About Institution Page" />
                        <Feature text="Courses / Classes Page" />
                        <Feature text="Admission Page" />
                        <Feature text="Contact Page" />
                        <Feature text="Results / Notices Section" />
                    </Grid>
                </Section>

                {/* 🔥 USER FLOW */}
                <Section title="User Journey" icon={<FaUser />}>
                    <ul className="space-y-3 text-gray-300">
                        <li>1. Student/Parent visits website</li>
                        <li>2. Checks courses and details</li>
                        <li>3. Reviews institution credibility</li>
                        <li>4. Fills admission form</li>
                        <li>5. Receives confirmation</li>
                        <li>6. Joins institute</li>
                    </ul>
                </Section>

                {/* 🔥 ADMIN PANEL */}
                <Section title="Admin Panel Features" icon={<FaUserCog />}>
                    <Grid>
                        <Feature text="Manage students data" />
                        <Feature text="Update courses & syllabus" />
                        <Feature text="Publish notices & updates" />
                        <Feature text="Manage admissions" />
                        <Feature text="Upload results" />
                        <Feature text="Track inquiries" />
                    </Grid>
                </Section>

                {/* 🔥 BENEFITS */}
                <Section title="Benefits for Institution">
                    <Grid>
                        <Feature text="Better student management" />
                        <Feature text="Improved communication" />
                        <Feature text="Professional online presence" />
                        <Feature text="More admissions" />
                        <Feature text="Time-saving operations" />
                        <Feature text="Trust building" />
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
                        Want a website for your school or coaching institute?
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