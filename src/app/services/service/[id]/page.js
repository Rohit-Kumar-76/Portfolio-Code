"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import {
    FaExclamationTriangle,
    FaArrowLeft,
    FaHome,
} from "react-icons/fa";

import BusinessWebsite from "@/pages/Business";
import CafeWebsite from "@/pages/Cafe";
import CustomWebApp from "@/pages/Custom";
import GymWebsite from "@/pages/Gym";
import SchoolWebsite from "@/pages/School";
import Portfolio from "@/pages/Portfolio";

export default function ProjectPage() {
    const params = useParams();
    const router = useRouter();

    const id = params?.id;

    const pages = {
        "1": <BusinessWebsite />,
        "2": <CafeWebsite />,
        "3": <SchoolWebsite />,
        "4": <Portfolio />,
        "5": <CustomWebApp />,
        "6": <GymWebsite />,
    };

    // ✅ SAFETY CHECK
    if (!id) {
        return null; // ya loading UI
    }

    return (
        <div>
            {pages[id] ? (
                pages[id]
            ) : (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a192f] to-[#112240] px-6">
                    <div className="text-center max-w-md">

                        <FaExclamationTriangle className="text-cyan-300 text-5xl mb-4 mx-auto" />

                        <h2 className="text-3xl font-bold text-white mb-3">
                            Project Not Found
                        </h2>

                        <p className="text-gray-400 mb-6">
                            The project you are looking for does not exist.
                        </p>

                        <div className="flex gap-4 justify-center flex-wrap">

                            <button
                                onClick={() => router.back()}
                                className="flex items-center gap-2 border border-cyan-300 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-300 hover:text-[#0a192f]"
                            >
                                <FaArrowLeft /> Go Back
                            </button>

                            <Link
                                href="/"
                                className="flex items-center gap-2 bg-cyan-300 text-[#0a192f] px-4 py-2 rounded"
                            >
                                <FaHome /> Home
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}