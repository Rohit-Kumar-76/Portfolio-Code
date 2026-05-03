"use client";

import { useState, useEffect } from "react";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

export default function AuthPage() {

    const [hasUser, setHasUser] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    /* 🔥 CHECK USER (TEMP) */
    useEffect(() => {
        const userExists = localStorage.getItem("userExists");
        if (userExists) setHasUser(true);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!hasUser) {
            // SIGNUP
            if (form.password !== form.confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            console.log("SIGNUP:", form);
            localStorage.setItem("userExists", "true");
            setHasUser(true);
        } else {
            // LOGIN
            console.log("LOGIN:", form);
        }
    };

    return (
        <section className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center px-6">

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

                {/* 🔥 LEFT (ILLUSTRATION) */}
                <div className="hidden md:flex justify-center relative">
                    <div className="absolute w-[250px] h-[250px] bg-cyan-300/10 blur-3xl rounded-full"></div>

                    <img
                        src="/illustration/login.svg"
                        alt="auth"
                        className="w-[80%] max-w-md relative z-10"
                    />
                </div>

                {/* 🔥 FORM */}
                <div className="bg-[#112240] p-8 rounded-2xl border border-[#1f3a5f] shadow-xl">

                    <h2 className="text-3xl font-bold text-cyan-300 mb-2">
                        {hasUser ? "Welcome Back" : "Create Account"}
                    </h2>

                    <p className="text-gray-400 mb-6">
                        {hasUser
                            ? "Login to access your dashboard"
                            : "Create your first account to get started"}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* 🔥 NAME (only signup) */}
                        {!hasUser && (
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full pl-10 pr-4 py-2 bg-transparent border border-[#1f3a5f] rounded focus:outline-none focus:border-cyan-300"
                                    required
                                />
                            </div>
                        )}

                        {/* EMAIL */}
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full pl-10 pr-4 py-2 bg-transparent border border-[#1f3a5f] rounded focus:outline-none focus:border-cyan-300"
                                required
                            />
                        </div>

                        {/* PASSWORD */}
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-400" />

                            <input
                                type={show ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full pl-10 pr-10 py-2 bg-transparent border border-[#1f3a5f] rounded focus:outline-none focus:border-cyan-300"
                                required
                            />

                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-3 top-3 cursor-pointer text-gray-400"
                            >
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {/* 🔥 CONFIRM PASSWORD (only signup) */}
                        {!hasUser && (
                            <div className="relative">
                                <FaLock className="absolute left-3 top-3 text-gray-400" />

                                <input
                                    type={show2 ? "text" : "password"}
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                    className="w-full pl-10 pr-10 py-2 bg-transparent border border-[#1f3a5f] rounded focus:outline-none focus:border-cyan-300"
                                    required
                                />

                                <span
                                    onClick={() => setShow2(!show2)}
                                    className="absolute right-3 top-3 cursor-pointer text-gray-400"
                                >
                                    {show2 ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        )}

                        {/* BUTTON */}
                        <button className="w-full bg-cyan-300 text-[#0a192f] py-2 rounded font-semibold hover:scale-105 transition">
                            {hasUser ? "Login" : "Create Account"}
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}