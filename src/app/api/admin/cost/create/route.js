import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Cost from "@/models/Cost";

export async function POST(req) {
    try {
        await connectDB();

        const { projectId } = await req.json();

        const existing = await Cost.findOne({ projectId });
        if (existing) {
            return NextResponse.json(
                { message: "Cost already exists" },
                { status: 400 }
            );
        }

        const cost = await Cost.create({ projectId });

        return NextResponse.json(cost, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}