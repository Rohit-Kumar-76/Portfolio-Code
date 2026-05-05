import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Cost from "@/models/Cost";

export async function POST(req, { params }) {
    try {
        await connectDB();

        const { projectId } = await params; // ✅ fixed
        const data = await req.json();

        // 🔒 Validation
        if (!data.amount || !data.type) {
            return NextResponse.json(
                { error: "Amount and type are required" },
                { status: 400 }
            );
        }

        const updated = await Cost.findOneAndUpdate(
            { projectId },
            {
                $push: {
                    payments: {
                        amount: data.amount,
                        type: data.type,
                        method: data.method || "",
                        note: data.note || "",
                    },
                },
            },
            {
                returnDocument: "after", // ✅ fix warning
                upsert: true, // ✅ create if not exists
            }
        );

        return NextResponse.json(updated);
    } catch (err) {
        console.error("Payment Add Error:", err);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}