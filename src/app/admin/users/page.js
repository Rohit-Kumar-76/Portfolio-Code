"use client";

import { useState } from "react";

export default function UsersPage() {

    const [users, setUsers] = useState([
        { id: 1, name: "Rohit Kumar", email: "rohit@gmail.com", role: "super" },
        { id: 2, name: "Aman Singh", email: "aman@gmail.com", role: "user" },
        { id: 3, name: "Neha Sharma", email: "neha@gmail.com", role: "user" },
    ]);

    /* 🔥 TOGGLE ROLE */
    const toggleRole = (id) => {
        const updated = users.map((u) =>
            u.id === id
                ? { ...u, role: u.role === "user" ? "super" : "user" }
                : u
        );
        setUsers(updated);
    };

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl font-bold text-cyan-300">
                    Users Management
                </h1>
                <p className="text-gray-400 text-sm">
                    Manage users, roles and permissions
                </p>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto bg-[#112240] border border-[#1f3a5f] rounded-xl">

                <table className="w-full text-sm">

                    <thead className="border-b border-[#1f3a5f] text-gray-400">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Role</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b border-[#1f3a5f] hover:bg-[#0a192f]"
                            >

                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>

                                {/* ROLE */}
                                <td className="p-3">
                                    <RoleBadge role={user.role} />
                                </td>

                                {/* ACTION */}
                                <td className="p-3">
                                    <button
                                        onClick={() => toggleRole(user.id)}
                                        className="px-3 py-1 text-xs rounded bg-cyan-300 text-[#0a192f] hover:opacity-80"
                                    >
                                        {user.role === "user"
                                            ? "Promote to Super"
                                            : "Demote to User"}
                                    </button>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}


/* 🔧 ROLE BADGE */
function RoleBadge({ role }) {
    return (
        <span
            className={`px-2 py-1 rounded text-xs ${role === "super"
                ? "bg-green-500/20 text-green-400"
                : "bg-gray-500/20 text-gray-300"
                }`}
        >
            {role === "super" ? "Super Admin" : "User"}
        </span>
    );
}