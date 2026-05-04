import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
        return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // yaha pe tu nodemailer use karega later
    console.log(body);

    return NextResponse.json({ success: true, message: "Message received" });
}