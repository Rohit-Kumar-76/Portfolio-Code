"use client";

import { useEffect, useState } from "react";
import {
    FaProjectDiagram,
    FaUsers,
    FaEnvelope,
    FaChartLine,
    FaUserPlus,
} from "react-icons/fa";

export default function DashboardPage() {
    const [projects, setProjects] = useState([]);
    const [leads, setLeads] = useState([]);
    const [enquiries, setEnquiries] = useState([]);

    // 🔥 FETCH DATA
    useEffect(() => {
        fetchProjects();
        fetchLeads();
        fetchEnquiry();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch("/api/admin/projects");
            const data = await res.json();
            setProjects(data);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchLeads = async () => {
        try {
            const res = await fetch("/api/admin/leads");
            const data = await res.json();
            setLeads(data);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchEnquiry = async () => {
        try {
            const res = await fetch("/api/admin/enquiry");
            const data = await res.json();
            setEnquiries(data);
        } catch (err) {
            console.log(err);
        }
    };

    // 🔥 CALCULATIONS
    const totalProjects = projects.length;
    const activeProjects = projects.filter(p => p.status === "working").length;
    const totalLeads = leads.length;
    const totalEnquiry = enquiries.length;



    // 🔥 CATEGORY COUNT
    const categoryCount = {};
    projects.forEach(p => {
        const type = p.businessType || "Other";
        categoryCount[type] = (categoryCount[type] || 0) + 1;
    });

    const recentLeads = leads.slice(0, 5);
    const recentEnquiry = enquiries.slice(0, 5);


    const getThisMonth = (data) => {
        const now = new Date();
        return data.filter(item => {
            const d = new Date(item.createdAt);
            return d.getMonth() === now.getMonth() &&
                d.getFullYear() === now.getFullYear();
        });
    };

    const getLastMonth = (data) => {
        const now = new Date();
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

        return data.filter(item => {
            const d = new Date(item.createdAt);
            return d.getMonth() === lastMonth.getMonth() &&
                d.getFullYear() === lastMonth.getFullYear();
        });
    };

    const thisMonthLeads = getThisMonth(leads).length;
    const lastMonthLeads = getLastMonth(leads).length;

    let growth = 0;

    if (lastMonthLeads === 0) {
        growth = thisMonthLeads > 0 ? 100 : 0;
    } else {
        growth = ((thisMonthLeads - lastMonthLeads) / lastMonthLeads) * 100;
    }

    const growthText = `${growth.toFixed(1)}%`;

    return (
        <div className="space-y-8">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl font-bold text-cyan-300">
                    Dashboard Overview
                </h1>
                <p className="text-gray-400 text-sm">
                    Insights of your portfolio and client activity
                </p>
            </div>

            {/* STATS */}
            <div className="grid md:grid-cols-5 gap-6">
                <StatCard title="Total Projects" value={totalProjects} icon={<FaProjectDiagram />} />
                <StatCard title="Active Projects" value={activeProjects} icon={<FaUsers />} />
                <StatCard title="Leads" value={totalLeads} icon={<FaUserPlus />} />
                <StatCard title="Enquiries" value={totalEnquiry} icon={<FaEnvelope />} />
                <StatCard
                    title="Growth"
                    className={growth > 0 ? "text-green-400" : "text-red-400"}
                    value={growthText}
                    icon={<FaChartLine />}
                />
            </div>

            {/* CATEGORY */}
            <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">
                <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                    Project Categories
                </h2>

                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                    {Object.entries(categoryCount).map(([key, value]) => (
                        <Box key={key} title={key} count={value} />
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">

                {/* RECENT LEADS */}
                <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">
                    <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                        Recent Leads
                    </h2>

                    <div className="space-y-4 text-sm">
                        {recentLeads.map((l) => (
                            <Lead key={l._id} name={l.name} project={l.project || "Enquiry"} />
                        ))}
                    </div>
                </div>
                {/* RECENT LEADS */}
                <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">
                    <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                        Recent Enquiry
                    </h2>

                    <div className="space-y-4 text-sm">
                        {recentEnquiry.map((l) => (
                            <Lead key={l._id} name={l.name} project={l.phone || "Enquiry"} />
                        ))}
                    </div>
                </div>
            </div>


        </div >
    );
}


/* 🔧 STAT CARD */
function StatCard({ title, value, icon, className }) {
    return (
        <div className={`bg-[#112240] p-5 rounded-xl border border-[#1f3a5f] flex justify-between items-center ${className}`}>

            <div>
                <p className="text-gray-400 text-sm">{title}</p>
                <h3 className="text-xl font-bold">
                    <span className="bg-green-400/10 text-cyan-300 px-3 py-1 rounded-full">
                        {value}
                    </span>
                </h3>
            </div>

            <div className="text-xl">
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
            <span className="text-cyan-300 bg-green-400/10 text-cyan-300 px-3 py-1 rounded-full">{count}</span>
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
function Action({ text, url }) {
    return (
        <a href={url} className="px-4 py-2 bg-cyan-300 text-[#0a192f] rounded hover:opacity-80 cursor-pointer">
            {text}
        </a>
    );
}