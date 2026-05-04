"use client";

import { useEffect, useState } from "react";
import { FaSearch, FaEdit, FaSave } from "react-icons/fa";
import { toast } from 'sonner';
import { FaEye } from "react-icons/fa";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function LeadsPage() {

    const [viewLead, setViewLead] = useState(null);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [editingId, setEditingId] = useState(null);

    const [leads, setLeads] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 10;

    useEffect(() => {
        setPage(1);
    }, [search, filter]);

    // 🔥 FETCH FROM DB
    const fetchLeads = async () => {
        try {
            const res = await fetch("/api/admin/enquiry");

            if (!res.ok) throw new Error("Failed to fetch");

            const data = await res.json();
            setLeads(data);

        } catch (err) {
            console.log(err);
            toast.error("Error Loading Data");
        }
    };

    const shortMessage = (msg) => {
        if (!msg) return "";
        const words = msg.split(" ");
        return words.length > 3
            ? words.slice(0, 3).join(" ") + "..."
            : msg;
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    /* 🔥 FILTER */
    const filtered = leads.filter((l) => {
        const text = `${l.name} ${l.email} ${l.phone}`.toLowerCase();
        const matchSearch = text.includes(search.toLowerCase());
        const matchFilter = filter === "all" || l.status === filter;
        return matchSearch && matchFilter;
    });

    const totalPages = Math.ceil(filtered.length / limit);

    const paginatedLeads = filtered.slice(
        (page - 1) * limit,
        page * limit
    );

    /* 🔥 STATUS UPDATE (API CALL) */
    const updateStatus = async (id, status) => {
        try {
            const res = await fetch(`/api/admin/enquiry/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
            });

            if (!res.ok) throw new Error("Update failed");

            fetchLeads(); // refresh

        } catch (err) {
            console.log(err);
            // alert("Error updating status");
            toast.error("Error updating status");
        }
    };


    const exportToExcel = () => {
        try {
            // 🔥 data clean (sirf useful fields)
            const data = leads.map((l, index) => ({
                No: index + 1,
                Name: l.name,
                Email: l.email,
                Phone: l.phone,
                Message: l.message,
                Status: l.status,
            }));

            // 🔥 sheet
            const worksheet = XLSX.utils.json_to_sheet(data);

            // 🔥 workbook
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiry");

            // 🔥 file
            const excelBuffer = XLSX.write(workbook, {
                bookType: "xlsx",
                type: "array",
            });

            const file = new Blob([excelBuffer], {
                type: "application/octet-stream",
            });

            saveAs(file, "Leads.xlsx");

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl font-bold text-cyan-300">
                    Enquiry Management
                </h1>
                <p className="text-gray-400 text-sm">
                    Manage and track all client inquiries
                </p>
            </div>

            {/* SEARCH + FILTER */}
            <div className="flex flex-wrap gap-4 justify-between">

                <div className="flex items-center bg-[#112240] px-3 rounded border border-[#1f3a5f] w-full md:w-80">
                    <FaSearch className="text-gray-400" />
                    <input
                        placeholder="Search name, email, phone..."
                        className="bg-transparent p-2 outline-none w-full"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

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

            {/* TABLE */}
            <div className="bg-[#112240] border border-[#1f3a5f] rounded-xl overflow-x-auto">

                <table className="w-full text-sm">

                    <thead className="text-gray-400 border-b border-[#1f3a5f]">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Message</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {paginatedLeads.map((lead, index) => (
                            <tr key={lead._id} className="border-b border-[#1f3a5f] hover:bg-[#0a192f]">
                                <td className="p-3">
                                    {(page - 1) * limit + index + 1}
                                </td>
                                <td className="p-3">{lead.name}</td>
                                <td className="p-3">{lead.email}</td>
                                <td className="p-3">{lead.phone}</td>
                                <td className="p-3 flex items-center gap-2">
                                    <span>{shortMessage(lead.message)}</span>
                                </td>

                                {/* STATUS */}
                                <td className="p-3">

                                    {lead.status === "new" ? (
                                        <select
                                            value={lead.status}
                                            onChange={(e) =>
                                                updateStatus(lead._id, e.target.value)
                                            }
                                            className="bg-[#0a192f] border border-[#1f3a5f] px-2 py-1 rounded"
                                        >
                                            <option value="new">New</option>
                                            <option value="contacted">Contacted</option>
                                        </select>
                                    ) : editingId === lead._id ? (
                                        <select
                                            value={lead.status}
                                            onChange={(e) =>
                                                updateStatus(lead._id, e.target.value)
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

                                    <div className="flex items-center gap-3">

                                        {lead.status !== "new" && (
                                            editingId === lead._id ? (
                                                <button
                                                    onClick={() => setEditingId(null)}
                                                    className="text-green-400 flex items-center gap-1"
                                                >
                                                    <FaSave /> Save
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => setEditingId(lead._id)}
                                                    className="text-cyan-300 flex items-center gap-1"
                                                >
                                                    <FaEdit /> Edit
                                                </button>
                                            )
                                        )}

                                        <button
                                            onClick={() => setViewLead(lead)}
                                            className="text-cyan-300 hover:scale-110"
                                        >
                                            <FaEye />
                                        </button>

                                    </div>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

                <div className="flex justify-center gap-2 mt-4">

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded disabled:opacity-40"
                    >
                        Prev
                    </button>

                    <span className="text-gray-400 px-2">
                        {page} / {totalPages || 1}
                    </span>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className="px-3 py-1 bg-[#112240] border border-[#1f3a5f] rounded disabled:opacity-40"
                    >
                        Next
                    </button>

                </div>
                <button
                    onClick={exportToExcel}
                    className="bg-[#112259] cursor-pointer border-[#512240] text-white px-4 py-2 rounded hover:opacity-80 ml-5 mb-2"
                >
                    Export Excel
                </button>

                {filtered.length === 0 && (
                    <div className="text-center py-6 text-gray-400">
                        No leads found
                    </div>
                )}

            </div>

            {viewLead && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

                    <div className="bg-[#0f172a] p-6 rounded-xl w-full max-w-lg border border-[#1f3a5f]">

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-cyan-300 text-lg font-semibold">
                                Lead Details
                            </h2>

                            <button
                                onClick={() => setViewLead(null)}
                                className="text-gray-400 hover:text-red-400"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-3 text-sm">

                            <p><span className="text-gray-400">Name:</span> {viewLead.name}</p>
                            <p><span className="text-gray-400">Email:</span> {viewLead.email}</p>
                            <p><span className="text-gray-400">Phone:</span> {viewLead.phone}</p>

                            <div>
                                <p className="text-gray-400 mb-1">Message:</p>
                                <div className="bg-[#112240] p-3 rounded border border-[#1f3a5f] text-gray-300">
                                    {viewLead.message}
                                </div>
                            </div>

                            <p>
                                <span className="text-gray-400">Status:</span>{" "}
                                <span className="capitalize">{viewLead.status}</span>
                            </p>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}

/* STATUS BADGE */
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