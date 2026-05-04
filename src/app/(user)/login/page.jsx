"use client";

import { useState } from "react";
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";
import { toast } from "sonner";

export default function LoginPage() {
    const [show, setShow] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                }),
            });

            const data = await res.json();

            if (!res.ok) {

                toast.error(data.error);
                return;
            }

            localStorage.setItem("token", data.token);


            toast.success("Login successful 🎉");

            // redirect
            window.location.href = "/admin";

        } catch (error) {
            console.log(error);
            // alert("Something went wrong");
            toast.error("Something went wrong");


        }
    };

    return (
        <section className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center px-6">

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT */}
                <div className="hidden md:flex justify-center relative">
                    <div className="absolute w-[250px] h-[250px] bg-cyan-300/10 blur-3xl rounded-full"></div>

                    <img
                        src="/illustration/login.svg"
                        alt="login"
                        className="w-[80%] max-w-md relative z-10"
                    />
                </div>

                {/* FORM */}
                <div className="bg-[#112240] p-8 rounded-2xl border border-[#1f3a5f] shadow-xl">

                    <h2 className="text-3xl font-bold text-cyan-300 mb-2">
                        Welcome Back
                    </h2>

                    <p className="text-gray-400 mb-6">
                        Login to access your dashboard
                    </p>

                    <form onSubmit={handleLogin} className="space-y-5">

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

                        {/* BUTTON */}
                        <button className="w-full bg-cyan-300 text-[#0a192f] py-2 rounded font-semibold hover:scale-105 transition">
                            Login
                        </button>

                    </form>

                    {/* SIGNUP LINK */}
                    <p className="text-gray-400 mt-4 text-sm text-center">
                        Don’t have an account?{" "}
                        <a href="/signup" className="text-cyan-300">
                            Create Account
                        </a>
                    </p>

                </div>
            </div>

        </section>

    );
}
