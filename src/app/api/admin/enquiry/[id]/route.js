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




export async function DELETE(req, { params }) {
    try {
        await connectDB();

        const { id } = await params;
        const { user: authUser, error } = await verifyAdmin();
        // 🔍 Check exist
        const enquiry = await Enquiry.findById(id);
        if (!enquiry) {
            return NextResponse.json(
                { success: false, message: "Enquiry not found" },
                { status: 404 }
            );
        }

        // 🗑️ Delete
        await Enquiry.findByIdAndDelete(id);

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