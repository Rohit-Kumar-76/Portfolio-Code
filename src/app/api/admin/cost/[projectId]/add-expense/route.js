import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Cost from "@/models/Cost";

export async function POST(req, { params }) {
    try {
        await connectDB();

        const { projectId } = await params;
        const data = await req.json();

        // 🔒 Basic validation
        if (!data.title || !data.amount) {
            return NextResponse.json(
                { error: "Title and amount are required" },
                { status: 400 }
            );
        }

        const updated = await Cost.findOneAndUpdate(
            { projectId },
            {
                $push: {
                    expenses: {
                        title: data.title,
                        amount: data.amount,
                        category: data.category || "",
                        vendor: data.vendor || "",
                        note: data.note || "",
                    },
                },
            },
            {
                returnDocument: "after", // ✅ fix
                upsert: true, // ✅ create if not exists
            }
        );

        return NextResponse.json(updated);
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}