"use client";

import { useState } from "react";
import {
    FaGlobe,
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaSave
} from "react-icons/fa";

export default function SettingsPage() {

    const [settings, setSettings] = useState({
        siteName: "TrioScript",
        email: "admin@trioscript.in",
        phone: "9876543210",
        whatsapp: "917651893226",
        pricingNote: "Starting from ₹4,999",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();

        console.log("SETTINGS:", settings);

        setMessage("Settings updated successfully ✅");
    };

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl font-bold text-cyan-300">
                    Settings
                </h1>
                <p className="text-gray-400 text-sm">
                    Manage your website and contact settings
                </p>
            </div>

            {/* SUCCESS */}
            {message && (
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded">
                    {message}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">

                {/* 🔥 SITE SETTINGS */}
                <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">

                    <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                        Website Settings
                    </h2>

                    <form className="space-y-4">

                        <Input icon={<FaGlobe />} name="siteName" value={settings.siteName} onChange={handleChange} placeholder="Site Name" />
                        <Input icon={<FaEnvelope />} name="email" value={settings.email} onChange={handleChange} placeholder="Email" />

                    </form>

                </div>

                {/* 🔥 CONTACT SETTINGS */}
                <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f]">

                    <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                        Contact Settings
                    </h2>

                    <form className="space-y-4">

                        <Input icon={<FaPhone />} name="phone" value={settings.phone} onChange={handleChange} placeholder="Phone Number" />
                        <Input icon={<FaWhatsapp />} name="whatsapp" value={settings.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" />

                    </form>

                </div>

                {/* 🔥 PRICING SETTINGS */}
                <div className="bg-[#112240] p-6 rounded-xl border border-[#1f3a5f] md:col-span-2">

                    <h2 className="text-lg font-semibold text-cyan-300 mb-4">
                        Pricing Settings
                    </h2>

                    <textarea
                        name="pricingNote"
                        value={settings.pricingNote}
                        onChange={handleChange}
                        placeholder="Pricing details..."
                        className="w-full bg-[#0a192f] border border-[#1f3a5f] rounded p-3 outline-none"
                        rows="3"
                    />

                </div>

            </div>

            {/* SAVE BUTTON */}
            <div className="flex justify-end">
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-cyan-300 text-[#0a192f] px-6 py-2 rounded hover:opacity-80"
                >
                    <FaSave />
                    Save Settings
                </button>
            </div>

        </div>
    );
}


/* 🔧 INPUT */
function Input({ icon, ...props }) {
    return (
        <div className="flex items-center gap-3 bg-[#0a192f] border border-[#1f3a5f] px-3 rounded">
            <span className="text-cyan-300">{icon}</span>
            <input {...props} className="w-full p-3 bg-transparent outline-none" />
        </div>
    );
}