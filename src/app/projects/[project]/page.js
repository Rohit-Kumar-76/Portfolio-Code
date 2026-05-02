"use client";

import { useParams } from "next/navigation";

import BusinessWebsite from "@/pages/Business";
import CafeWebsite from "@/pages/Cafe";
import CustomWebApp from "@/pages/Custom";
import GymWebsite from "@/pages/Gym";
import HotelWebsite from "@/pages/Hotel";
import SchoolWebsite from "@/pages/School";
import Portfolio from "@/pages/Portfolio";

export default function ProjectPage() {
    const { project } = useParams();

    const pages = {
        "1": <BusinessWebsite />,
        "2": <CafeWebsite />,
        "3": <SchoolWebsite />,
        "6": <Portfolio />,
        "5": <CustomWebApp />,
        "4": <GymWebsite />,
    };

    return (
        <div>
            {pages[project] || (
                <div className="text-white text-center py-20">
                    Project Not Found
                </div>
            )}
        </div>
    );
}