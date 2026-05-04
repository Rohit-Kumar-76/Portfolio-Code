"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    // 🔥 FETCH USERS
    const fetchUsers = async () => {
        try {
            const res = await fetch("/api/admin/user");

            if (!res.ok) throw new Error("Failed to fetch users");

            const data = await res.json();
            setUsers(data);
        } catch (err) {
            console.log(err);
            toast.error("Error loading users");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const [showModal, setShowModal] = useState(false);

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        role: "superuser",
    });

    // 🔥 ADD USER
    const handleAddUser = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/admin/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.error);
                return;
            }

            toast.success(`User added ✅\nPassword: ${data.defaultPassword}`);

            setShowModal(false);
            setNewUser({ name: "", email: "", role: "user" }); // ✅ FIX

            fetchUsers();
        } catch (err) {
            console.log(err);
            toast.error("Error adding user");
        }
    };

    // 🔥 TOGGLE ROLE
    const toggleRole = async (id, currentRole) => {
        try {
            const newRole = currentRole === "admin" ? "superuser" : "admin";

            const res = await fetch(`/api/admin/user/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ role: newRole }),
            });

            if (!res.ok) throw new Error("Role update failed");

            fetchUsers();
        } catch (err) {
            console.log(err);
            toast.error("Error updating role");
        }
    };

    // 🔥 DELETE USER
    const deleteUser = async (id) => {
        try {
            const confirmDelete = confirm("Are you sure you want to delete this user?");
            if (!confirmDelete) return;

            const res = await fetch(`/api/admin/user/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Delete failed");
            toast.success("User Deleted");
            fetchUsers();
        } catch (err) {
            console.log(err);
            toast.error("Error deleting user");
        }
    };

    // 🔥 BLOCK USER
    const toggleBlock = async (id) => {
        try {
            const res = await fetch(`/api/admin/user/${id}`, {
                method: "PATCH",
            });

            if (!res.ok) throw new Error("Block failed");

            fetchUsers();
        } catch (err) {
            console.log(err);
            toast.error("Error blocking user");
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-cyan-300">
                Users Management
            </h1>

            <button
                onClick={() => setShowModal(true)}
                className="bg-cyan-300 text-black px-4 py-2 rounded text-sm"
            >
                + Add User
            </button>

            <div className="overflow-x-auto bg-[#112240] border border-[#1f3a5f] rounded-xl">
                <table className="w-full text-sm">
                    <thead className="border-b border-[#1f3a5f] text-gray-400">
                        <tr>
                            <th className="p-3 text-left">#</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Role</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td className="p-3">
                                    {index + 1}
                                </td>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>

                                <td className="p-3">{user.role}</td>

                                <td className="p-3">
                                    {user.isBlocked ? "Blocked" : "Active"}
                                </td>

                                <td className="p-3 space-x-2">
                                    <button
                                        onClick={() =>
                                            toggleRole(user._id, user.role)
                                        }
                                        className="px-2 py-1 bg-cyan-300 text-black text-xs rounded"
                                    >
                                        Change Role
                                    </button>

                                    <button
                                        onClick={() => toggleBlock(user._id)}
                                        className="px-2 py-1 bg-red-400 text-black text-xs rounded"
                                    >
                                        {user.isBlocked ? "Unblock" : "Block"}
                                    </button>

                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        className="px-2 py-1 bg-red-500 text-white text-xs rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 🔥 MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-[#112240] p-6 rounded-xl w-full max-w-md border border-[#1f3a5f]">
                        <h2 className="text-xl font-bold text-cyan-300 mb-4">
                            Add New User
                        </h2>

                        <form onSubmit={handleAddUser} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={newUser.name}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, name: e.target.value })
                                }
                                className="w-full p-2 bg-transparent border rounded"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                value={newUser.email}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, email: e.target.value })
                                }
                                className="w-full p-2 bg-transparent border rounded"
                                required
                            />

                            <select
                                value={newUser.role}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, role: e.target.value })
                                }
                                className="w-full p-2 bg-transparent border rounded text-white"
                            >

                                <option value="superuser">Super Admin</option>
                            </select>

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-3 py-1 text-sm bg-gray-500 rounded"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="px-3 py-1 text-sm bg-cyan-300 text-black rounded"
                                >
                                    Add User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}