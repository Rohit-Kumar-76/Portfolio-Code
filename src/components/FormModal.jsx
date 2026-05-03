"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaTimes } from "react-icons/fa";

export default function FormModal({ open, onClose, projectName }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [success, setSuccess] = useState(false);

    if (!open) return null;

    /* 🔥 HANDLE CHANGE */
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    /* 🔥 HANDLE SUBMIT */
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            ...form,
            project: projectName,
        };

        console.log("FORM DATA:", data); // 👈 yaha console me dikhega

        // success popup show
        setSuccess(true);

        // reset form
        setForm({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            <div className="bg-[#112240] p-6 rounded-xl w-[90%] max-w-md border border-[#1f3a5f] relative">

                {/* CLOSE */}
                <FaTimes
                    className="absolute top-4 right-4 cursor-pointer text-gray-300 hover:text-white"
                    onClick={onClose}
                />

                {/* 🔥 SUCCESS POPUP */}
                {success ? (
                    <div className="text-center space-y-4 py-10">

                        <h3 className="text-xl text-cyan-300 font-semibold">
                            Request Submitted ✅
                        </h3>

                        <p className="text-gray-300 text-sm">
                            Wait for our response.
                            We will provide you login credentials soon.
                        </p>

                        <button
                            onClick={() => {
                                setSuccess(false);
                                onClose();
                            }}
                            className="bg-cyan-300 text-[#0a192f] px-4 py-2 rounded"
                        >
                            Close
                        </button>

                    </div>
                ) : (
                    <>
                        <h3 className="text-xl font-semibold text-cyan-300 mb-6 text-center">
                            Get Demo Access
                        </h3>

                        <form className="space-y-4" onSubmit={handleSubmit}>

                            <input type="hidden" value={projectName} name="project" />

                            <Input icon={<FaUser />} name="name" value={form.name} onChange={handleChange} placeholder="Your Name" />

                            <Input icon={<FaEnvelope />} name="email" value={form.email} onChange={handleChange} placeholder="Your Email" />

                            <Input icon={<FaPhone />} name="phone" value={form.phone} onChange={handleChange} placeholder="Mobile Number" />

                            <div className="flex items-start gap-3 bg-[#0a192f] border border-[#1f3a5f] rounded px-3">
                                <FaCommentDots className="text-cyan-300 mt-4" />
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Message (What you need?)"
                                    rows="3"
                                    className="w-full p-3 bg-transparent outline-none resize-none"
                                />
                            </div>

                            <button className="w-full bg-cyan-300 text-[#0a192f] py-2 rounded hover:opacity-80 cursor-pointer">
                                Submit Request
                            </button>

                        </form>
                    </>
                )}

            </div>
        </div>
    );
}


/* 🔧 INPUT */
function Input({ icon, name, value, onChange, placeholder }) {
    return (
        <div className="flex items-center gap-3 bg-[#0a192f] border border-[#1f3a5f] rounded px-3">
            <span className="text-cyan-300">{icon}</span>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-3 bg-transparent outline-none"
            />
        </div>
    );
}