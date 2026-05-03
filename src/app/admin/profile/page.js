"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function ProfilePage() {

    const [profile, setProfile] = useState({
        name: "Admin",
        email: "admin@trioscript.in",
    });

    const [password, setPassword] = useState({
        current: "",
        new: "",
        confirm: "",
    });

    const [message, setMessage] = useState("");

    /* 🔥 PROFILE UPDATE */
    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const saveProfile = (e) => {
        e.preventDefault();
        console.log("PROFILE UPDATED:", profile);
        setMessage("Profile updated successfully ✅");
    };

    /* 🔥 PASSWORD UPDATE */
    const handlePasswordChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value });
    };

    const changePassword = (e) => {
        e.preventDefault();

        if (password.new !== password.confirm) {
            setMessage("Passwords do not match ❌");
            return;
        }

        console.log("PASSWORD UPDATED:", password);
        setMessage("Password changed successfully 🔐");

        setPassword({ current: "", new: "", confirm: "" });
    };

    return (
        <div className="space-y-8">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl font-bold text-cyan-300">
                    Profile Settings
                </h1>
                <p className="text-gray-400 text-sm">
                    Manage your account details and security
                </p>
            </div>

            {/* SUCCESS MESSAGE */}
            {message && (
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded">
                    {message}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">

                {/* 🔥 PROFILE INFO */}
                <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">

                    <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                        Profile Info
                    </h2>

                    <form onSubmit={saveProfile} className="space-y-4">

                        <Input icon={<FaUser />} name="name" value={profile.name} onChange={handleProfileChange} placeholder="Name" />
                        <Input icon={<FaEnvelope />} name="email" value={profile.email} onChange={handleProfileChange} placeholder="Email" />

                        <button className="w-full bg-cyan-300 text-[#0a192f] py-2 rounded">
                            Save Changes
                        </button>

                    </form>

                </div>

                {/* 🔥 PASSWORD CHANGE */}
                <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">

                    <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                        Change Password
                    </h2>

                    <form onSubmit={changePassword} className="space-y-4">

                        <Input icon={<FaLock />} name="current" value={password.current} onChange={handlePasswordChange} placeholder="Current Password" type="password" />
                        <Input icon={<FaLock />} name="new" value={password.new} onChange={handlePasswordChange} placeholder="New Password" type="password" />
                        <Input icon={<FaLock />} name="confirm" value={password.confirm} onChange={handlePasswordChange} placeholder="Confirm Password" type="password" />

                        <button className="w-full bg-cyan-300 text-[#0a192f] py-2 rounded">
                            Update Password
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}


/* 🔧 INPUT COMPONENT */
function Input({ icon, ...props }) {
    return (
        <div className="flex items-center gap-3 bg-[#0a192f] border border-[#1f3a5f] px-3 rounded">
            <span className="text-cyan-300">{icon}</span>
            <input
                {...props}
                className="w-full p-3 bg-transparent outline-none"
            />
        </div>
    );
}