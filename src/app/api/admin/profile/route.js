import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { verifyAdmin } from "@/lib/auth";

// 🔥 GET PROFILE
export async function GET() {
    try {
        const { user: authUser, error } = await verifyAdmin();

        if (error) {
            return NextResponse.json({ error }, { status: 401 });
        }

        await connectDB();

        // 🔥 logged-in user fetch
        const user = await User.findById(authUser.id).select("-password");

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);

    } catch (err) {
        console.error("PROFILE GET ERROR:", err.message);
        return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
    }
}


// 🔥 UPDATE PROFILE
export async function PUT(req) {
    try {
        const { user: authUser, error } = await verifyAdmin();

        if (error) {
            return NextResponse.json({ error }, { status: 401 });
        }

        await connectDB();

        const body = await req.json();

        // 🔥 logged-in user
        const user = await User.findById(authUser.id);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        user.name = body.name || user.name;
        user.email = body.email || user.email;

        await user.save();

        return NextResponse.json({
            message: "Profile updated",
            user,
        });

    } catch (err) {
        console.error("PROFILE UPDATE ERROR:", err.message);
        return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
    }
}