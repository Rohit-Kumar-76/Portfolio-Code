"use client";

import { useEffect, useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { toast } from "sonner";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editId, setEditId] = useState(null);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [page, setPage] = useState(1);
    const limit = 10;

    const [form, setForm] = useState({
        name: "",
        businessType: "Business Website",
        clientName: "",
        clientNumber: "",
        developerName: "",
        totalDays: "",
        status: "pending",
        projectType: "Starter",
    });

    // 🔥 FETCH
    const fetchProjects = async () => {
        try {
            const res = await fetch("/api/admin/projects");
            const data = await res.json();
            setProjects(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // 🔥 RESET PAGE ON FILTER
    useEffect(() => {
        setPage(1);
    }, [search, statusFilter]);

    // 🔥 FILTER LOGIC
    const filteredProjects = projects.filter((p) => {
        const text = `${p.clientName} ${p.developerName} ${p.businessType}`.toLowerCase();
        const matchSearch = text.includes(search.toLowerCase());
        const matchStatus = statusFilter === "all" || p.status === statusFilter;
        return matchSearch && matchStatus;
    });

    // 🔥 PAGINATION
    const totalPages = Math.ceil(filteredProjects.length / limit);
    const paginatedProjects = filteredProjects.slice(
        (page - 1) * limit,
        page * limit
    );

    // 🔥 INPUT
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 🔥 SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = editId
                ? `/api/admin/projects/${editId}`
                : "/api/admin/projects";

            const method = editId ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    totalDays: Number(form.totalDays),
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.error);
                return;
            }

            setShowModal(false);
            setEditId(null);
            resetForm();
            fetchProjects();
            toast.success("Projects Added");

        } catch (err) {
            console.log(err);
        }
    };

    // 🔥 EDIT
    const handleEdit = (project) => {
        setForm({
            name: project.name || "",
            businessType: project.businessType || "Business Website",
            clientName: project.clientName || "",
            clientNumber: project.clientNumber || "",
            developerName: project.developerName || "",
            totalDays: project.totalDays || "",
            status: project.status || "pending",
            projectType: project.projectType || "Starter",
        });

        setEditId(project._id);
        setShowModal(true);
    };

    const resetForm = () => {
        setForm({
            name: "",
            businessType: "Business Website",
            clientName: "",
            clientNumber: "",
            developerName: "",
            totalDays: "",
            status: "pending",
            projectType: "Starter",
        });
    };

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-cyan-300">
                    Projects Management
                </h1>

                <button
                    onClick={() => {
                        resetForm();
                        setEditId(null);
                        setShowModal(true);
                    }}
                    className="bg-cyan-300 text-black px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
                >
                    <FaPlus /> Add Project
                </button>
            </div>

            {/* 🔍 SEARCH + FILTER */}
            <div className="flex flex-wrap gap-4 justify-between">
                <input
                    placeholder="Search client / developer..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-[#112240] border border-[#1f3a5f] px-3 py-2 rounded w-full md:w-80"
                />

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-[#112240] border border-[#1f3a5f] px-3 py-2 rounded cursor-pointer"
                >
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="working">Working</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {/* TABLE */}
            <div className="bg-[#112240] border border-[#1f3a5f] rounded-xl overflow-x-auto">
                <table className="w-full text-sm">

                    <thead className="text-gray-400 border-b border-[#1f3a5f]">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Client</th>
                            <th className="p-3">Number</th>
                            <th className="p-3">Developer</th>
                            <th className="p-3">Days</th>
                            <th className="p-3">Progress</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Type</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {paginatedProjects.map((p, index) => {
                            const progress = p.totalDays
                                ? Math.round(((p.totalDays - p.remainingDays) / p.totalDays) * 100)
                                : 0;
                            return (
                                <tr key={p._id} className="border-b border-[#1f3a5f] text-center">
                                    <td className="p-3">
                                        {(page - 1) * limit + index + 1}
                                    </td>
                                    <td>{p.businessType}</td>
                                    <td>{p.clientName}</td>
                                    <td>{p.clientNumber || "-"}</td>
                                    <td>{p.developerName}</td>

                                    <td>
                                        <span className="text-red-500">{p.remainingDays}</span> /
                                        <span className="text-green-500"> {p.totalDays}</span>
                                    </td>

                                    <td className="p-3">
                                        <div className="w-full bg-gray-700 h-2 rounded">
                                            <div
                                                className="bg-cyan-300 h-2 rounded"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-400">{progress}%</p>
                                    </td>

                                    <td className="capitalize">{p.status}</td>
                                    <td className="capitalize">{p.projectType}</td>

                                    <td>
                                        <button
                                            onClick={() => handleEdit(p)}
                                            className="text-cyan-300 flex items-center gap-1 justify-center cursor-pointer"
                                        >
                                            <FaEdit /> Edit
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center gap-2">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-40"
                >
                    Prev
                </button>

                <span>{page} / {totalPages || 1}</span>

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-40"
                >
                    Next
                </button>
            </div>

            {/* MODAL (same as before) */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">

                    <div className="bg-[#0f172a] p-6 rounded-xl w-full max-w-2xl border border-[#1f3a5f] shadow-lg">

                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-cyan-300 font-semibold">
                                {editId ? "Edit Project" : "Add Project"}
                            </h2>

                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-400 hover:text-red-400"
                            >
                                ✕
                            </button>
                        </div>

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

                            <Input name="name" value={form.name} onChange={handleChange} placeholder="Project Name" />

                            <Select name="businessType" value={form.businessType} onChange={handleChange}>
                                <option>Business Website</option>
                                <option>Portfolio Website</option>
                                <option>School/Coaching Website</option>
                                <option>Gym Website</option>
                                <option>Hotel/Cafe Website</option>
                                <option>Custom Website</option>
                            </Select>

                            <Input name="clientName" value={form.clientName} onChange={handleChange} placeholder="Client Name" />

                            <Input name="clientNumber" value={form.clientNumber} onChange={handleChange} placeholder="Client Number" />

                            <Input name="developerName" value={form.developerName} onChange={handleChange} placeholder="Developer Name" />

                            <Input type="number" name="totalDays" value={form.totalDays} onChange={handleChange} placeholder="Total Days" />

                            <Select name="status" value={form.status} onChange={handleChange}>
                                <option value="pending">Pending</option>
                                <option value="working">Working</option>
                                <option value="completed">Completed</option>
                                <option value="canceled">Canceled</option>
                            </Select>

                            <Select name="projectType" value={form.projectType} onChange={handleChange}>
                                <option>Starter</option>
                                <option>Business</option>
                                <option>Pro</option>
                            </Select>

                            {/* BUTTONS */}
                            <div className="col-span-2 flex justify-end gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-700"
                                >
                                    Cancel
                                </button>

                                <button className="bg-cyan-300 text-black px-4 py-2 rounded hover:opacity-80">
                                    {editId ? "Update Project" : "Add Project"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}

function Input({ ...props }) {
    return (
        <input
            {...props}
            className="bg-[#112240] border border-[#1f3a5f] px-3 py-2 rounded outline-none focus:border-cyan-300"
        />
    );
}

function Select({ children, ...props }) {
    return (
        <select
            {...props}
            className="bg-[#112240] border border-[#1f3a5f] px-3 py-2 rounded outline-none focus:border-cyan-300"
        >
            {children}
        </select>
    );
}