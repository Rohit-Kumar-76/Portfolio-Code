import { NextResponse } from "next/server";

export async function POST() {
    try {
        const res = NextResponse.json({
            message: "Logged out successfully",
        });

        // 🔥 COOKIE DELETE
        res.cookies.set("token", "", {
            httpOnly: true,
            path: "/",
            maxAge: 0,
        });

        return res;

    } catch (err) {
        return NextResponse.json(
            { error: "Logout failed" },
            { status: 500 }
        );
    }
}