"use client";

import { useEffect, useState } from "react";
import { FaSearch, FaEdit, FaSave } from "react-icons/fa";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Loader from "@/components/Loader";
export default function LeadsPage() {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [editingId, setEditingId] = useState(null);
    const [page, setPage] = useState(1);
    const limit = 10;

    const [leads, setLeads] = useState([]);
    const [loader, setLoader] = useState(false);

    const [deleteId, setDeleteId] = useState(null);
    const [deleting, setDeleting] = useState(false);


    useEffect(() => {
        setPage(1);
    }, [search, filter]);

    // 🔥 FETCH FROM DB
    const fetchLeads = async () => {
        try {
            const res = await fetch("/api/admin/leads");

            const data = await res.json(); // 🔥 पहले parse करो

            if (!res.ok) {
                console.log("API ERROR:", data);
                setLeads([]);
                return;
            }

            // 🔥 safety check
            if (!Array.isArray(data)) {
                console.log("Invalid data:", data);
                setLeads([]);
                return;
            }

            setLeads(data);

        } catch (err) {
            console.log(err);
            setLeads([]); // ✅ important
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    /* 🔥 FILTER */
    const filtered = leads.filter((l) => {
        const text = `${l.name} ${l.email} ${l.phone} ${l.project}`.toLowerCase();
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
        setLoader(true);
        try {
            const res = await fetch(`/api/admin/leads/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
            });

            if (!res.ok) throw new Error("Update failed");

            fetchLeads(); // refresh
            setLoader(false);

        } catch (err) {
            console.log(err);
            toast.error("Error updating status");
        }
    };

    const handleDelete = async () => {
        if (!deleteId) return;

        setDeleting(true);
        setLoader(true);

        try {
            const res = await fetch(`/api/admin/leads/${deleteId}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Delete failed");

            toast.success("Deleted successfully");

            // UI update
            setLeads(prev => prev.filter(item => item._id !== deleteId));

            setDeleteId(null);
            setLoader(false);
        } catch (err) {
            console.log(err);
            toast.error("Delete failed");
            setLoader(false);
        } finally {
            setDeleting(false);
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
                Project: l.project,
                Status: l.status,
            }));

            // 🔥 sheet
            const worksheet = XLSX.utils.json_to_sheet(data);

            // 🔥 workbook
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

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
                    Leads Management
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
                            <th className="p-3 ">#</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Project</th>
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
                                <td className="p-3">{lead.project}</td>

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

                                        {/* Edit */}
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

                                        {/* 🔥 DELETE */}
                                        <button
                                            onClick={() => setDeleteId(lead._id)}
                                            className="text-red-400 hover:scale-110"
                                        >
                                            Delete
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
                    <button
                        onClick={exportToExcel}
                        className="bg-[#112259] cursor-pointer border-[#512240] text-white px-4 py-2 rounded hover:opacity-80 ml-5 mb-2"
                    >
                        Export Excel
                    </button>
                </div>
                {filtered.length === 0 && (
                    <div className="text-center py-6 text-gray-400">
                        No leads found
                    </div>
                )}

            </div>
            {deleteId && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="bg-[#0f172a] p-6 rounded-xl border border-[#1f3a5f] w-[320px] text-center">

                        <h2 className="text-lg font-semibold text-white mb-3">
                            Delete Enquiry?
                        </h2>

                        <p className="text-gray-400 mb-5">
                            This action cannot be undone.
                        </p>

                        <div className="flex justify-center gap-4">

                            <button
                                onClick={() => setDeleteId(null)}
                                className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-800"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600"
                            >
                                {deleting ? "Deleting..." : "Delete"}
                            </button>

                        </div>

                    </div>
                </div>
            )}
            {loader && <Loader />}
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