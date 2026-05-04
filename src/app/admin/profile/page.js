"use client";

import { useEffect, useState } from "react";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEdit,
    FaSave,
    FaTimes
} from "react-icons/fa";
import { toast } from "sonner";

export default function ProfilePage() {

    const [profile, setProfile] = useState({});
    const [password, setPassword] = useState({
        current: "",
        new: "",
        confirm: "",
    });

    const [editMode, setEditMode] = useState(false);


    // 🔥 FETCH PROFILE
    const fetchProfile = async () => {
        try {
            const res = await fetch("/api/admin/profile");
            const data = await res.json();
            setProfile(data);
        } catch (err) {
            console.log(err);

            toast.error("Failed to Load Data");
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    // 🔥 CHANGE PROFILE
    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    // 🔥 SAVE PROFILE
    const saveProfile = async () => {
        try {
            const res = await fetch("/api/admin/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(profile),
            });

            if (!res.ok) throw new Error();

            toast.success("✅ Profile updated");

            setEditMode(false);

        } catch {
            toast.error("❌ Failed to update profile");

        }


    };

    // 🔥 PASSWORD CHANGE
    const handlePasswordChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value });
    };

    const changePassword = async () => {
        try {
            if (password.new !== password.confirm) {
                toast.error("❌ New passwords do not match");
                return;
            }

            const res = await fetch("/api/admin/change-password", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(password),
            });

            const data = await res.json(); // 🔥 IMPORTANT

            if (!res.ok) {
                toast.error(`❌ ${data.error}`); // 👈 backend error show
                return;
            }

            toast.success("🔐 Password updated successfully");

            setPassword({ current: "", new: "", confirm: "" });

        } catch (err) {
            console.log(err);
            toast.error("❌ Something went wrong");

        }

    };
    return (
        <div className="space-y-8">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-cyan-300">
                    Profile
                </h1>

                {!editMode && (
                    <button
                        onClick={() => setEditMode(true)}
                        className="flex items-center gap-2 bg-cyan-300 text-black px-4 py-2 rounded"
                    >
                        <FaEdit /> Edit
                    </button>
                )}
            </div>



            <div className="grid md:grid-cols-3 gap-6">

                {/* 🔥 PROFILE CARD */}
                <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f] text-center">

                    <div className="w-20 h-20 mx-auto rounded-full bg-cyan-300 text-black flex items-center justify-center text-2xl font-bold">
                        {profile.name?.charAt(0) || "A"}
                    </div>

                    <h2 className="text-lg text-white mt-3 font-semibold">
                        {profile.name || "Admin"}
                    </h2>

                    <p className="text-gray-400 text-sm">
                        {profile.email || "admin@mail.com"}
                    </p>

                </div>

                {/* 🔥 PROFILE EDIT */}
                <div className="md:col-span-2 bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">

                    <h2 className="text-cyan-300 mb-4 font-semibold">
                        Profile Info
                    </h2>

                    <div className="space-y-4">

                        <Field icon={<FaUser />} name="name" value={profile.name} onChange={handleProfileChange} editMode={editMode} placeholder="Name" />

                        <Field icon={<FaEnvelope />} name="email" value={profile.email} onChange={handleProfileChange} editMode={editMode} placeholder="Email" />

                    </div>

                    {/* ACTIONS */}
                    {editMode && (
                        <div className="flex justify-end gap-4 mt-4">

                            <button
                                onClick={() => setEditMode(false)}
                                className="px-4 py-2 border rounded"
                            >
                                <FaTimes /> Cancel
                            </button>

                            <button
                                onClick={saveProfile}
                                className="px-6 py-2 bg-cyan-300 text-black rounded"
                            >
                                <FaSave /> Save
                            </button>

                        </div>
                    )}

                </div>

            </div>

            {/* 🔥 PASSWORD SECTION */}
            <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">

                <h2 className="text-cyan-300 mb-4 font-semibold">
                    Change Password
                </h2>

                <div className="grid md:grid-cols-3 gap-4">

                    <Field icon={<FaLock />} name="current" value={password.current} onChange={handlePasswordChange} editMode={true} placeholder="Current Password" type="password" />

                    <Field icon={<FaLock />} name="new" value={password.new} onChange={handlePasswordChange} editMode={true} placeholder="New Password" type="password" />

                    <Field icon={<FaLock />} name="confirm" value={password.confirm} onChange={handlePasswordChange} editMode={true} placeholder="Confirm Password" type="password" />

                </div>

                <div className="flex justify-end mt-4">
                    <button
                        onClick={changePassword}
                        className="bg-cyan-300 text-black px-6 py-2 rounded"
                    >
                        Update Password
                    </button>
                </div>

            </div>

        </div>
    );
}


/* 🔧 FIELD */
function Field({ icon, editMode, value, ...props }) {
    return (
        <div className="flex items-center gap-3 bg-[#0a192f] border border-[#1f3a5f] px-3 rounded">
            <span className="text-cyan-300">{icon}</span>

            {editMode ? (
                <input
                    {...props}
                    value={value || ""}
                    className="w-full p-3 bg-transparent outline-none"
                />
            ) : (
                <p className="text-white w-full p-3">{value || "-"}</p>
            )}
        </div>
    );
}