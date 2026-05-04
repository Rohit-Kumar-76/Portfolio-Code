import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { verifyAdmin } from "@/lib/auth";

// 🔥 GET USERS
export async function GET() {
    try {
        await connectDB();
        const { user: authUser, error } = verifyAdmin();
        const users = await User.find().select("-password");

        return NextResponse.json(users);

    } catch (err) {
        console.error("GET USERS ERROR:", err);

        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 }
        );
    }
}


// 🔥 CREATE USER
export async function POST(req) {
    try {
        await connectDB();
        const { user: authUser, error } = verifyAdmin();

        const { name, email, role } = await req.json();

        // 🔒 validation
        if (!name || !email || !role) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // ❌ duplicate check
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // 🔥 password generate
        const year = new Date().getFullYear();
        const base = name.replace(/\s/g, "").slice(0, 4);
        const rawPassword = `${base}${year}@`;

        // 🔐 hash password
        const hashedPassword = await bcrypt.hash(rawPassword, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        return NextResponse.json({
            message: "User created successfully",
            defaultPassword: rawPassword,
            user,
        });

    } catch (err) {
        console.error("CREATE USER ERROR:", err);

        return NextResponse.json(
            { error: "Failed to create user" },
            { status: 500 }
        );
    }
}