"use client";

import {
    FaCheckCircle,
    FaUser,
    FaUserCog,
    FaLaptopCode,
    FaUtensils,
    FaBullseye,
    FaArrowRight,
} from "react-icons/fa";

export default function CafeWebsite() {
    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-6xl mx-auto px-6 space-y-24">

                {/* 🔥 HERO */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">
                            Cafe / Restaurant Website
                        </h1>

                        <p className="text-gray-400 mb-4">
                            A modern website designed for cafes and restaurants to showcase menu,
                            attract customers, and increase bookings.
                        </p>

                        <p className="text-gray-400 mb-6">
                            Perfect for cafes, restaurants, hotels, and food businesses looking
                            to build a strong online presence.
                        </p>


                    </div>

                    <div className="flex justify-center">
                        <img src="/illustration/cafe.svg" className="w-[320px]" />
                    </div>
                </div>

                {/* 🔥 PROBLEM + SOLUTION */}
                <div className="grid md:grid-cols-2 gap-10">
                    <Box title="Problem" icon={<FaBullseye />}>
                        Many cafes struggle to attract customers online due to lack of digital presence,
                        outdated menus, and no online booking system.
                    </Box>

                    <Box title="Solution" icon={<FaBullseye />}>
                        We create modern cafe websites with digital menus, booking features,
                        and engaging design to attract more customers.
                    </Box>
                </div>

                {/* 🔥 FEATURES */}
                <Section title="Key Features">
                    <Grid>
                        <Feature text="Digital menu showcase" />
                        <Feature text="Online table booking system" />
                        <Feature text="Image gallery for food & ambience" />
                        <Feature text="Mobile-friendly design" />
                        <Feature text="Google Maps integration" />
                        <Feature text="Fast loading performance" />
                    </Grid>
                </Section>

                {/* 🔥 PAGES STRUCTURE */}
                <Section title="Website Pages">
                    <Grid>
                        <Feature text="Home Page (Menu highlights + CTA)" />
                        <Feature text="Menu Page (Food & pricing)" />
                        <Feature text="Gallery Page (Food & ambience)" />
                        <Feature text="Booking Page" />
                        <Feature text="Contact Page" />
                        <Feature text="Reviews / Testimonials" />
                    </Grid>
                </Section>

                {/* 🔥 USER FLOW */}
                <Section title="User Journey" icon={<FaUser />}>
                    <ul className="space-y-3 text-gray-300">
                        <li>1. User visits cafe website</li>
                        <li>2. Checks menu and pricing</li>
                        <li>3. Views gallery and ambience</li>
                        <li>4. Selects table / booking option</li>
                        <li>5. Confirms booking</li>
                        <li>6. Visits cafe</li>
                    </ul>
                </Section>

                {/* 🔥 ADMIN PANEL */}
                <Section title="Admin Panel Features" icon={<FaUserCog />}>
                    <Grid>
                        <Feature text="Update menu items" />
                        <Feature text="Manage bookings" />
                        <Feature text="Upload food images" />
                        <Feature text="Update timings and offers" />
                        <Feature text="View customer inquiries" />
                        <Feature text="Manage reviews" />
                    </Grid>
                </Section>

                {/* 🔥 BENEFITS */}
                <Section title="Business Benefits">
                    <Grid>
                        <Feature text="Increase customer footfall" />
                        <Feature text="Better brand visibility" />
                        <Feature text="Online booking convenience" />
                        <Feature text="Professional presentation" />
                        <Feature text="Boost customer engagement" />
                        <Feature text="Higher sales conversion" />
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
                        Want a website for your cafe or restaurant?
                    </h3>

                    <a href="/contact-us" className="px-6 py-2 bg-cyan-300 text-[#0a192f] rounded hover:scale-105 transition cursor-pointer">
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
                {icon && <span className="text-cyan-300">{icon}</span>}
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
            <FaCheckCircle className="text-cyan-300" />
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
                <span className="text-cyan-300">{icon}</span>
                {title}
            </h3>
            <p className="text-gray-400">{children}</p>
        </div>
    );
}