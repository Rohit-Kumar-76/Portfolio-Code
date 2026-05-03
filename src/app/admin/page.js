"use client";

import {
    FaProjectDiagram,
    FaUsers,
    FaEnvelope,
    FaChartLine,
    FaArrowUp,
} from "react-icons/fa";

export default function DashboardPage() {

    return (
        <div className="space-y-8">

            {/* 🔥 HEADER */}
            <div>
                <h1 className="text-2xl font-bold text-cyan-300">
                    Dashboard Overview
                </h1>
                <p className="text-gray-400 text-sm">
                    Insights of your portfolio and client activity
                </p>
            </div>

            {/* 🔥 STATS CARDS */}
            <div className="grid md:grid-cols-4 gap-6">

                <StatCard title="Total Projects" value="12" icon={<FaProjectDiagram />} />
                <StatCard title="Active Clients" value="8" icon={<FaUsers />} />
                <StatCard title="Leads" value="25" icon={<FaEnvelope />} />
                <StatCard title="Growth" value="+32%" icon={<FaChartLine />} />

            </div>

            {/* 🔥 PROJECT ANALYTICS */}
            <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">

                <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                    Project Categories
                </h2>

                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">

                    <Box title="Business Websites" count="4" />
                    <Box title="Cafe / Restaurant" count="2" />
                    <Box title="School / Coaching" count="3" />
                    <Box title="Gym Websites" count="1" />
                    <Box title="Portfolio Sites" count="1" />
                    <Box title="Custom Apps" count="1" />

                </div>

            </div>

            {/* 🔥 RECENT LEADS */}
            <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">

                <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                    Recent Leads
                </h2>

                <div className="space-y-4 text-sm">

                    <Lead name="Rahul Sharma" project="Business Website" />
                    <Lead name="Aman Kumar" project="Cafe Website" />
                    <Lead name="Neha Singh" project="Portfolio Website" />

                </div>

            </div>

            {/* 🔥 QUICK ACTIONS */}
            <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">

                <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                    Quick Actions
                </h2>

                <div className="flex flex-wrap gap-4">

                    <Action text="Add Project" />
                    <Action text="View Leads" />
                    <Action text="Manage Users" />
                    <Action text="Update Pricing" />

                </div>

            </div>

        </div>
    );
}


/* 🔧 STAT CARD */
function StatCard({ title, value, icon }) {
    return (
        <div className="bg-[#112240] p-5 rounded-xl border border-[#1f3a5f] flex justify-between items-center">

            <div>
                <p className="text-gray-400 text-sm">{title}</p>
                <h3 className="text-xl font-bold text-cyan-300">{value}</h3>
            </div>

            <div className="text-cyan-300 text-xl">
                {icon}
            </div>

        </div>
    );
}


/* 🔧 CATEGORY BOX */
function Box({ title, count }) {
    return (
        <div className="bg-[#0a192f] p-4 rounded border border-[#1f3a5f] flex justify-between">
            <span>{title}</span>
            <span className="text-cyan-300">{count}</span>
        </div>
    );
}


/* 🔧 LEAD ITEM */
function Lead({ name, project }) {
    return (
        <div className="flex justify-between border-b border-[#1f3a5f] pb-2">
            <span>{name}</span>
            <span className="text-cyan-300">{project}</span>
        </div>
    );
}


/* 🔧 ACTION BUTTON */
function Action({ text }) {
    return (
        <button className="px-4 py-2 bg-cyan-300 text-[#0a192f] rounded hover:opacity-80 cursor-pointer">
            {text}
        </button>
    );
}