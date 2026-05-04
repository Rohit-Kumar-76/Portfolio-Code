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




export async function DELETE(req, { params }) {
    try {
        await connectDB();

        const { id } = await params;
        const { user: authUser, error } = await verifyAdmin();
        // 🔍 Check exist
        const enquiry = await Lead.findById(id);
        if (!enquiry) {
            return NextResponse.json(
                { success: false, message: "Enquiry not found" },
                { status: 404 }
            );
        }

        // 🗑️ Delete
        await Lead.findByIdAndDelete(id);

        return NextResponse.json({
            success: true,
            message: "Enquiry deleted successfully",
        });

    } catch (error) {
        console.log("DELETE ERROR:", error);

        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}