"use client";

import { useEffect, useState } from "react";
import {
    FaEye,
    FaMoneyBill,
    FaReceipt,
    FaTimes
} from "react-icons/fa";

export default function CostPage() {

    const [projects, setProjects] = useState([]);
    const [viewData, setViewData] = useState(null);
    const [modal, setModal] = useState(null);

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [businessFilter, setBusinessFilter] = useState("all");

    const [form, setForm] = useState({
        amount: "",
        title: "",
        type: "advance",
    });

    const filteredProjects = projects
        .filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.clientName.toLowerCase().includes(search.toLowerCase())
        )
        .filter((p) => {
            if (businessFilter === "all") return true;
            return p.businessType === businessFilter;
        });


    const totalPages = Math.ceil(filteredProjects.length / limit);

    const paginatedProjects = filteredProjects.slice(
        (page - 1) * limit,
        page * limit
    );

    useEffect(() => {
        setPage(1);
    }, [search]);


    /* FETCH DATA */
    const fetchData = async () => {
        const res = await fetch("/api/admin/cost");
        const data = await res.json();
        setProjects(data);
        return data;
    };

    useEffect(() => {
        fetchData();
    }, []);

    /* OPEN MODAL */
    const openModal = (type, id) => {
        setModal({ type, id });
        setForm({
            amount: "",
            title: "",
            type: "advance",
        });
    };

    /* SUBMIT */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!modal) return;

        try {
            let url = "";
            let bodyData = {};

            if (modal.type === "payment") {
                url = `/api/admin/cost/${modal.id}/add-payment`;

                bodyData = {
                    amount: Number(form.amount),
                    type: form.type,
                    method: "upi",
                    note: "",
                };
            } else {
                url = `/api/admin/cost/${modal.id}/add-expense`;

                bodyData = {
                    amount: Number(form.amount),
                    title: form.title,
                };
            }

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyData),
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.error || "Something went wrong");
                return;
            }

            // 🔥 fresh updated data lao
            const updatedProjects = await fetchData();

            // 🔥 updated project find karo
            const latest = updatedProjects.find(p => p._id === modal.id);

            // 🔥 modal update karo
            setViewData(latest);

            // close modal
            setModal(null);

        } catch (err) {
            console.error(err);
            alert("Request failed");
        }
    };

    return (
        <div className="p-6 text-white space-y-6">

            <h1 className="text-2xl font-bold text-cyan-300">
                Project Finance
            </h1>


            <div className="flex gap-3 mb-4 justify-between">

                {/* SEARCH */}
                <input
                    type="text"
                    placeholder="Search project or client..."
                    className="p-2 w-1/4 bg-[#0a192f] border border-[#1f3a5f] rounded"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* BUSINESS TYPE FILTER */}
                <select
                    value={businessFilter}
                    onChange={(e) => {
                        setPage(1);
                        setBusinessFilter(e.target.value);
                    }}
                    className="p-2 bg-[#0a192f] border border-[#1f3a5f] rounded w-1/4"
                >
                    <option value="all">All</option>
                    <option value="Portfolio Website">Portfolio Website</option>
                    <option value="Custom Website">Custom Website</option>
                    <option value="School/Coaching Website">School/Coaching Website</option>
                    <option value="Business Website">Business Website</option>
                    <option value="	Gym Website">	Gym Website</option>
                    <option value="Hotel/Cafe Website">Hotel/Cafe Website</option>
                </select>

            </div>
            {/* TABLE */}
            <div className="overflow-x-auto bg-[#112240] border border-[#1f3a5f] rounded-xl">

                <table className="w-full text-sm">

                    <thead className="text-gray-400 border-b border-[#1f3a5f] text-left">
                        <tr>
                            <th className="p-3 ">#</th>
                            <th className="p-3 ">Project</th>
                            <th className="p-3">Client</th>
                            <th className="p-3">businessType</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Received</th>
                            <th className="p-3">Expense</th>
                            <th className="p-3">Profit</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {paginatedProjects.map((p, index) => (
                            <tr key={p._id} className="border-b border-[#1f3a5f] hover:bg-[#0a192f]">

                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{p.name}</td>
                                <td className="p-3">{p.clientName}</td>
                                <td className="p-3">{p.businessType}</td>
                                <td className="p-3">₹{p.payment}</td>
                                <td className="p-3 text-green-400">₹{p.received}</td>
                                <td className="p-3 text-red-400">₹{p.expense}</td>

                                <td className={`p-3 ${p.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                                    ₹{p.profit}
                                </td>

                                <td className="p-3 flex gap-2">

                                    <button
                                        onClick={() => setViewData(p)}
                                        className="text-cyan-300"
                                    >
                                        <FaEye />
                                    </button>

                                    <button
                                        onClick={() => openModal("payment", p._id)}
                                        className="text-green-400"
                                    >
                                        <FaMoneyBill />
                                    </button>

                                    <button
                                        onClick={() => openModal("expense", p._id)}
                                        className="text-red-400"
                                    >
                                        <FaReceipt />
                                    </button>

                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <div className="flex justify-between items-center mt-4">

                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
                >
                    Prev
                </button>

                <span>Page {page} of {totalPages}</span>

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
                >
                    Next
                </button>

            </div>

            {/* VIEW MODAL */}
            {viewData && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

                    <div className="bg-[#112240] p-6 rounded-xl w-[95%] max-w-lg border border-[#1f3a5f] relative">

                        <FaTimes
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={() => setViewData(null)}
                        />

                        <h2 className="text-xl text-cyan-300 mb-4">
                            {viewData.name} Details
                        </h2>

                        <p className="text-sm text-gray-400 mb-3">
                            {viewData.clientName} • {viewData.clientNumber}
                        </p>

                        {/* PAYMENTS */}
                        <div className="mb-4">
                            <h3 className="text-green-400 mb-2">Payments</h3>

                            {viewData.payments?.length > 0 ? (
                                viewData.payments.map((pay, i) => (
                                    <div key={i} className="flex justify-between text-sm border-b border-[#1f3a5f] py-1">
                                        <span>₹{pay.amount}</span>
                                        <span>
                                            {pay.date
                                                ? new Date(pay.date).toLocaleDateString()
                                                : "No date"}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-sm">No payments yet</p>
                            )}
                        </div>

                        {/* EXPENSES */}
                        <div>
                            <h3 className="text-red-400 mb-2">Expenses</h3>

                            {viewData.expenses?.length > 0 ? (
                                viewData.expenses.map((exp, i) => (
                                    <div key={i} className="flex justify-between text-sm border-b border-[#1f3a5f] py-1">
                                        <span>{exp.title}</span>
                                        <span>₹{exp.amount}</span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-sm">No expenses yet</p>
                            )}
                        </div>

                    </div>

                </div>
            )}

            {/* ADD MODAL */}
            {modal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

                    <div className="bg-[#112240] p-6 rounded-xl w-[90%] max-w-md border border-[#1f3a5f] relative">

                        <FaTimes
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={() => setModal(null)}
                        />

                        <h2 className="text-lg text-cyan-300 mb-4 text-center">
                            {modal.type === "payment" ? "Add Payment" : "Add Expense"}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="number"
                                placeholder="Amount"
                                className="w-full p-3 bg-[#0a192f] border border-[#1f3a5f] rounded"
                                value={form.amount}
                                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                                required
                            />

                            {/* PAYMENT TYPE */}
                            {modal.type === "payment" && (
                                <select
                                    className="w-full p-3 bg-[#0a192f] border border-[#1f3a5f] rounded"
                                    value={form.type}
                                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                                >
                                    <option value="advance">Advance</option>
                                    <option value="installment">Installment</option>
                                    <option value="final">Final</option>
                                </select>
                            )}

                            {/* EXPENSE TITLE */}
                            {modal.type === "expense" && (
                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="w-full p-3 bg-[#0a192f] border border-[#1f3a5f] rounded"
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                    required
                                />
                            )}

                            <button className="w-full bg-cyan-300 text-black py-2 rounded">
                                Submit
                            </button>

                        </form>

                    </div>

                </div>
            )}

        </div>
    );
}