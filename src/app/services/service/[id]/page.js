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
    const { id } = useParams();

    const pages = {
        "1": <BusinessWebsite />,
        // "4": <HotelWebsite />,   
        "2": <CafeWebsite />,
        "3": <SchoolWebsite />,
        "4": <Portfolio />,
        "5": <CustomWebApp />,
        "6": <GymWebsite />,
    };

    return (
        <div>
            {pages[id] || (
                <div className="text-white text-center py-20">
                    Project Not Found
                </div>
            )}
        </div>
    );
}