"use client";

import { useState } from "react";
import { FaSearch, FaEdit, FaSave } from "react-icons/fa";



export default function LeadsPage() {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [editingId, setEditingId] = useState(null);

    const [leads, setLeads] = useState([
        {
            id: 1,
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            phone: "9876543210",
            project: "Business Website",
            status: "new",
        },
        {
            id: 2,
            name: "Aman Kumar",
            email: "aman@gmail.com",
            phone: "9123456780",
            project: "Cafe Website",
            status: "contacted",
        },
        {
            id: 3,
            name: "Neha Singh",
            email: "neha@gmail.com",
            phone: "9988776655",
            project: "Portfolio",
            status: "working",
        },
    ]);

    /* 🔥 FILTER */
    const filtered = leads.filter((l) => {
        const text = `${l.name} ${l.email} ${l.phone} ${l.project}`.toLowerCase();
        const matchSearch = text.includes(search.toLowerCase());
        const matchFilter = filter === "all" || l.status === filter;
        return matchSearch && matchFilter;
    });

    /* 🔥 STATUS UPDATE */
    const updateStatus = (id, status) => {
        setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
    };

    return (
        <div className="space-y-6">

            {/* 🔥 HEADER */}
            <div>
                <h1 className="text-2xl font-bold text-cyan-300">
                    Leads Management
                </h1>
                <p className="text-gray-400 text-sm">
                    Manage and track all client inquiries
                </p>
            </div>

            {/* 🔥 SEARCH + FILTER */}
            <div className="flex flex-wrap gap-4 justify-between">

                {/* SEARCH */}
                <div className="flex items-center bg-[#112240] px-3 rounded border border-[#1f3a5f] w-full md:w-80">
                    <FaSearch className="text-gray-400" />
                    <input
                        placeholder="Search name, email, phone..."
                        className="bg-transparent p-2 outline-none w-full"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* FILTER */}
                <select
                    className="bg-[#112240] border border-[#1f3a5f] px-3 py-2 rounded"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="working">Working</option>
                    <option value="done">Done</option>
                </select>

            </div>

            {/* 🔥 TABLE */}
            <div className="bg-[#112240] border border-[#1f3a5f] rounded-xl overflow-x-auto">

                <table className="w-full text-sm">

                    <thead className="text-gray-400 border-b border-[#1f3a5f]">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Project</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filtered.map((lead) => (
                            <tr key={lead.id} className="border-b border-[#1f3a5f] hover:bg-[#0a192f]">

                                <td className="p-3">{lead.name}</td>
                                <td className="p-3">{lead.email}</td>
                                <td className="p-3">{lead.phone}</td>
                                <td className="p-3">{lead.project}</td>

                                {/* STATUS */}
                                <td className="p-3">

                                    {lead.status === "new" ? (
                                        <select
                                            value={lead.status}
                                            onChange={(e) =>
                                                updateStatus(lead.id, e.target.value)
                                            }
                                            className="bg-[#0a192f] border border-[#1f3a5f] px-2 py-1 rounded"
                                        >
                                            <option value="new">New</option>
                                            <option value="contacted">Contacted</option>
                                        </select>
                                    ) : editingId === lead.id ? (
                                        <select
                                            value={lead.status}
                                            onChange={(e) =>
                                                updateStatus(lead.id, e.target.value)
                                            }
                                            className="bg-[#0a192f] border border-[#1f3a5f] px-2 py-1 rounded"
                                        >
                                            <option value="contacted">Contacted</option>
                                            <option value="working">Working</option>
                                            <option value="done">Done</option>
                                        </select>
                                    ) : (
                                        <StatusBadge status={lead.status} />
                                    )}

                                </td>

                                {/* ACTION */}
                                <td className="p-3">

                                    {lead.status !== "new" && (
                                        editingId === lead.id ? (
                                            <button
                                                onClick={() => setEditingId(null)}
                                                className="text-green-400 flex items-center gap-1"
                                            >
                                                <FaSave /> Save
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => setEditingId(lead.id)}
                                                className="text-cyan-300 flex items-center gap-1"
                                            >
                                                <FaEdit /> Edit
                                            </button>
                                        )
                                    )}

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

                {filtered.length === 0 && (
                    <div className="text-center py-6 text-gray-400">
                        No leads found
                    </div>
                )}

            </div>

        </div>
    );
}


/* 🔧 STATUS BADGE */
function StatusBadge({ status }) {
    const styles = {
        contacted: "text-yellow-400",
        working: "text-blue-400",
        done: "text-green-400",
    };

    return (
        <span className={`${styles[status]} capitalize`}>
            {status}
        </span>
    );
}