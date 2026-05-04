import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Lead from "@/models/Lead";
import { verifyAdmin } from "@/lib/auth";

export async function PUT(req, context) {
    try {
        await connectDB();
        const { user: authUser, error } = await verifyAdmin();

        const { id } = await context.params;
        const { status } = await req.json();

        const lead = await Lead.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        return NextResponse.json(lead);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}