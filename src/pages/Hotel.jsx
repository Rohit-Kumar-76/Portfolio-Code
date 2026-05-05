"use client";

import Image from "next/image";
import {
    FaCheckCircle,
    FaUser,
    FaUserCog,
    FaLaptopCode,
    FaHotel,
    FaBullseye,
    FaArrowRight,
} from "react-icons/fa";

export default function HotelWebsite() {
    return (
        <section className="bg-[#0a192f] text-white py-24">

            <div className="max-w-6xl mx-auto px-6 space-y-24">

                {/* 🔥 HERO */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">
                            Hotel Website
                        </h1>

                        <p className="text-gray-400 mb-4">
                            A modern hotel website designed to showcase rooms, attract guests,
                            and enable direct online bookings.
                        </p>

                        <p className="text-gray-400 mb-6">
                            Perfect for hotels, resorts, lodges, and hospitality businesses
                            looking to increase bookings and online visibility.
                        </p>


                    </div>

                    <div className="flex justify-center">
                        <Image width={400} height={400} alt="Hotels website by TrioScript" src="/illustration/hotel.svg" className="w-[320px]" />
                    </div>
                </div>

                {/* 🔥 PROBLEM + SOLUTION */}
                <div className="grid md:grid-cols-2 gap-10">
                    <Box title="Problem" icon={<FaBullseye />}>
                        Many hotels rely on third-party platforms and lose customers due to lack
                        of direct booking systems and poor online presence.
                    </Box>

                    <Box title="Solution" icon={<FaBullseye />}>
                        We build hotel websites with direct booking systems, room showcase,
                        and premium design to increase direct reservations.
                    </Box>
                </div>

                {/* 🔥 FEATURES */}
                <Section title="Key Features">
                    <Grid>
                        <Feature text="Room listing with details & pricing" />
                        <Feature text="Online booking system" />
                        <Feature text="Photo gallery (rooms & amenities)" />
                        <Feature text="Mobile-friendly design" />
                        <Feature text="Google Maps integration" />
                        <Feature text="Fast loading & SEO optimized" />
                    </Grid>
                </Section>

                {/* 🔥 PAGES STRUCTURE */}
                <Section title="Website Pages">
                    <Grid>
                        <Feature text="Home Page (Rooms + Offers)" />
                        <Feature text="Rooms Page (Details & pricing)" />
                        <Feature text="Gallery Page" />
                        <Feature text="Booking Page" />
                        <Feature text="Contact Page" />
                        <Feature text="Reviews / Testimonials" />
                    </Grid>
                </Section>

                {/* 🔥 USER FLOW */}
                <Section title="User Journey" icon={<FaUser />}>
                    <ul className="space-y-3 text-gray-300">
                        <li>1. User visits hotel website</li>
                        <li>2. Browses rooms and pricing</li>
                        <li>3. Views photos and amenities</li>
                        <li>4. Selects dates & room</li>
                        <li>5. Completes booking</li>
                        <li>6. Receives confirmation</li>
                    </ul>
                </Section>

                {/* 🔥 ADMIN PANEL */}
                <Section title="Admin Panel Features" icon={<FaUserCog />}>
                    <Grid>
                        <Feature text="Manage room listings" />
                        <Feature text="Update pricing & availability" />
                        <Feature text="Handle bookings" />
                        <Feature text="Upload images & content" />
                        <Feature text="Manage customer inquiries" />
                        <Feature text="View booking analytics" />
                    </Grid>
                </Section>

                {/* 🔥 BENEFITS */}
                <Section title="Business Benefits">
                    <Grid>
                        <Feature text="Increase direct bookings" />
                        <Feature text="Reduce dependency on third-party apps" />
                        <Feature text="Improve brand trust" />
                        <Feature text="Better customer experience" />
                        <Feature text="Higher revenue" />
                        <Feature text="Professional online presence" />
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
                        Want a website for your hotel or resort?
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