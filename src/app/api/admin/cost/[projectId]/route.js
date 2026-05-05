import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Cost from "@/models/Cost";
import Project from "@/models/Project";

export async function GET(req, { params }) {
    try {
        await connectDB();

        const { projectId } = await params;

        const cost = await Cost.findOne({ projectId });
        const project = await Project.findById(projectId);

        if (!cost || !project) {
            return NextResponse.json(
                { message: "Data not found" },
                { status: 404 }
            );
        }

        const received = cost.totalReceived;
        const expense = cost.totalExpense;
        const totalAmount = project.payment || 0;

        const summary = {
            totalAmount,
            received,
            expense,
            remaining: totalAmount - received,
            profit: received - expense,
        };

        return NextResponse.json({
            cost,
            summary,
        });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}