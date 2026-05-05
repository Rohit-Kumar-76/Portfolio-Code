import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import { verifyAdmin } from "@/lib/auth";

//GET
export async function GET() {
    await connectDB();

    const projects = await Project.find();

    const updated = projects.map((p) => {

        const today = new Date();
        const start = new Date(p.startDate || p.createdAt);

        // 🔥 LOCAL DATE ONLY (IMPORTANT FIX)
        const todayDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        );

        const startDate = new Date(
            start.getFullYear(),
            start.getMonth(),
            start.getDate()
        );

        const diffDays = Math.floor(
            (todayDate - startDate) / (1000 * 60 * 60 * 24)
        );

        const remainingDays = Math.max(p.totalDays - diffDays, 0);

        return {
            ...p._doc,
            remainingDays,
        };
    });

    return NextResponse.json(updated);
}

// 🔥 CREATE PROJECT
export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const {
            name,
            businessType,
            clientName,
            clientNumber,
            developerName,
            totalDays,
            status,
            projectType,
            payment,
            advpayment,
        } = body;

        // 🔒 validation
        if (!name || !businessType || !clientName || !clientNumber || !developerName || !totalDays) {
            return NextResponse.json(
                { error: "All required fields must be filled" },
                { status: 400 }
            );
        }

        const project = await Project.create({
            name,
            businessType,
            clientName,
            clientNumber,
            developerName,
            totalDays: Number(totalDays),
            status: status || "pending",
            projectType: projectType || "Starter",
            payment:payment ||0,
            advpayment:advpayment ||0,

        });

        return NextResponse.json({
            message: "Project created successfully",
            project,
        });

    } catch (err) {
        console.error("PROJECT CREATE ERROR:", err.message);

        return NextResponse.json(
            { error: err.message },
            { status: 500 }
        );
    }
}