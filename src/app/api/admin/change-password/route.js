import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { verifyAdmin } from "@/lib/auth";

export async function PUT(req) {
    try {
        await connectDB();

        // 🔥 auth user
        const { user: authUser, error } = await verifyAdmin();

        if (error) {
            return NextResponse.json({ error }, { status: 401 });
        }

        const { current, new: newPassword } = await req.json();

        // 🔥 logged-in user fetch
        const user = await User.findById(authUser.id);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // 🔐 check current password (same user)
        const isMatch = await bcrypt.compare(current, user.password);

        if (!isMatch) {
            return NextResponse.json(
                { error: "Current password incorrect" },
                { status: 400 }
            );
        }

        // 🔐 hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        return NextResponse.json({
            message: "Password updated successfully",
        });

    } catch (err) {
        console.error("PASSWORD ERROR:", err.message);

        return NextResponse.json(
            { error: "Failed to update password" },
            { status: 500 }
        );
    }
}