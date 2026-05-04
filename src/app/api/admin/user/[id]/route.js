import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { verifyAdmin } from "@/lib/auth";

// 🔥 UPDATE ROLE
export async function PUT(req, context) {
    try {
        await connectDB();

        const { id } = await context.params; // ✅ FIX
        const { role } = await req.json();

        if (!id || !role) {
            return NextResponse.json({ error: "Missing data" }, { status: 400 });
        }

        const user = await User.findByIdAndUpdate(
            id,
            { role },
            { new: true }
        );

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);

    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}


// 🔥 BLOCK / UNBLOCK
export async function PATCH(req, context) {
    try {
        await connectDB();
        const { user: authUser, error } = verifyAdmin();

        const { id } = await context.params; // ✅ FIX

        const user = await User.findById(id);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        user.isBlocked = !user.isBlocked;

        await user.save();

        return NextResponse.json({
            message: user.isBlocked ? "Blocked" : "Unblocked",
            user,
        });

    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}


// 🔥 DELETE
export async function DELETE(req, context) {
    try {
        await connectDB();

        const { id } = await context.params; // ✅ FIX

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User deleted" });

    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}