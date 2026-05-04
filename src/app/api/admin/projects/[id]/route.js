import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import { verifyAdmin } from "@/lib/auth";

export async function PUT(req, context) {
    await connectDB();
    const { user: authUser, error } = verifyAdmin();
    const { id } = await context.params;
    const data = await req.json();

    const project = await Project.findByIdAndUpdate(id, data, {
        new: true,
    });

    return NextResponse.json(project);
}