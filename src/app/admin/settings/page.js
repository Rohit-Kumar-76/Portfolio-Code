"use client";

import { useEffect, useState } from "react";
import {
    FaEdit,
    FaSave,
    FaTimes,
    FaTrash
} from "react-icons/fa";
import { toast } from "sonner";

export default function SettingsPage() {

    const [settings, setSettings] = useState({});
    const [editMode, setEditMode] = useState(false);


    // 🔥 FETCH
    const fetchSettings = async () => {
        try {
            const res = await fetch("/api/admin/settings");

            if (!res.ok) throw new Error("Fetch failed");

            const data = await res.json();
            setSettings(data);

        } catch (err) {
            console.log(err);
            toast.error("❌ Failed to load settings");
        }
    };

    useEffect(() => {
        fetchSettings();
    }, []);

    // 🔥 CHANGE
    const handleChange = (e) => {
        try {
            setSettings({ ...settings, [e.target.name]: e.target.value });
        } catch (err) {
            console.log(err);
        }
    };

    const handlePricing = (e) => {
        try {
            setSettings({
                ...settings,
                pricing: {
                    ...settings.pricing,
                    [e.target.name]: e.target.value,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };

    // 🔥 SAVE
    const handleSave = async () => {
        try {
            const res = await fetch("/api/admin/settings", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...settings,
                    offerPercentage: Number(settings.offerPercentage),
                    totalBalance: Number(settings.totalBalance),
                    pricing: {
                        starter: Number(settings.pricing?.starter),
                        business: Number(settings.pricing?.business),
                        pro: Number(settings.pricing?.pro),
                    },
                }),
            });

            if (!res.ok) throw new Error("Save failed");

            toast.success("✅ Settings saved successfully");
            setEditMode(false);

        } catch (err) {
            console.log(err);
            toast.error("❌ Error saving settings");
        }


    };

    // 🔥 RESET
    const handleReset = async () => {
        try {
            const confirmDelete = confirm("Reset all settings?");
            if (!confirmDelete) return;

            const res = await fetch("/api/admin/settings", {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Delete failed");

            toast.error("❌ Settings reset");
            setEditMode(false);

            fetchSettings();

        } catch (err) {
            console.log(err);
            toast.error("❌ Error resetting settings");
        }


    };

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl text-cyan-300 font-bold">
                    Settings
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



            {/* FORM */}
            <div className="grid md:grid-cols-2 gap-6">

                <Field label="Mobile" value={settings.mobile} name="mobile" onChange={handleChange} editMode={editMode} />
                <Field label="WhatsApp" value={settings.whatsapp} name="whatsapp" onChange={handleChange} editMode={editMode} />

                <Field label="Support Email" value={settings.supportEmail} name="supportEmail" onChange={handleChange} editMode={editMode} />
                <Field label="Info Email" value={settings.infoEmail} name="infoEmail" onChange={handleChange} editMode={editMode} />

                <div className="md:col-span-2 bg-[#112240] p-5 rounded-xl border border-[#1f3a5f]">
                    <h2 className="text-cyan-300 mb-4 font-semibold">Pricing</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <Field label="Starter" value={settings.pricing?.starter} name="starter" onChange={handlePricing} editMode={editMode} />
                        <Field label="Business" value={settings.pricing?.business} name="business" onChange={handlePricing} editMode={editMode} />
                        <Field label="Pro" value={settings.pricing?.pro} name="pro" onChange={handlePricing} editMode={editMode} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <Field label="Offer %" value={settings.offerPercentage} name="offerPercentage" onChange={handleChange} editMode={editMode} />
                        {/* <Field label="Total Balance" disabled={disabled} value={settings.totalBalance} name="totalBalance" onChange={handleChange} editMode={editMode} /> */}
                    </div>
                </div>

            </div>

            {/* ACTIONS */}
            {editMode && (
                <div className="flex justify-end gap-4">

                    <button
                        onClick={() => setEditMode(false)}
                        className="px-4 py-2 border rounded"
                    >
                        <FaTimes /> Cancel
                    </button>

                    <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                        <FaTrash /> Reset
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-cyan-300 text-black rounded"
                    >
                        <FaSave /> Save
                    </button>

                </div>
            )}

        </div>
    );
}


/* FIELD */
function Field({ label, value, name, onChange, editMode }) {
    return (
        <div className="bg-[#112240] p-4 rounded-xl border border-[#1f3a5f]">
            <p className="text-gray-400 text-sm mb-1">{label}</p>

            {editMode ? (
                <input
                    name={name}
                    value={value || ""}
                    onChange={onChange}

                    className="w-full bg-[#0a192f] p-2 rounded outline-none"
                />
            ) : (
                <p className="text-white">{value || "-"}</p>
            )}
        </div>
    );
}