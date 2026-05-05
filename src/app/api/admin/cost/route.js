import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import Cost from "@/models/Cost";

export async function GET() {
    await connectDB();

    const projects = await Project.find().lean();
    const costs = await Cost.find().lean();

    const data = projects.map((project) => {
        const cost = costs.find(
            (c) => c.projectId.toString() === project._id.toString()
        );

        const payments = cost?.payments || [];
        const expenses = cost?.expenses || [];

        const received = payments.reduce((s, p) => s + p.amount, 0);
        const expense = expenses.reduce((s, e) => s + e.amount, 0);

        const totalAmount = project.payment || 0;

        return {
            ...project,

            // 🔥 IMPORTANT FIX
            payments,
            expenses,

            received,
            expense,
            remaining: totalAmount - received,
            profit: received - expense,
            costId: cost?._id || null,
        };
    });

    return NextResponse.json(data);
}