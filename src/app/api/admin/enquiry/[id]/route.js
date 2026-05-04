import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Enquiry from "@/models/Enquiry";
import { verifyAdmin } from "@/lib/auth";

export async function PUT(req, context) {
    try {
        await connectDB();
        const { user: authUser, error } = await verifyAdmin();
        const { id } = await context.params;
        const { status } = await req.json();

        const enquiry = await Enquiry.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        return NextResponse.json(enquiry);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}