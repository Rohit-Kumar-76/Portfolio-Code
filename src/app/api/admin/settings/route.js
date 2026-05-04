import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Setting from "@/models/Setting";
import { verifyAdmin } from "@/lib/auth";

// 🔥 GET (fetch settings)
export async function GET() {
    try {
        await connectDB();
        // const { user: authUser, error } = verifyAdmin();
        let settings = await Setting.findOne();

        if (!settings) {
            settings = await Setting.create({
                offerPercentage: 0,
                pricing: { starter: 0, business: 0, pro: 0 },
            });
        }

        return NextResponse.json(settings);

    } catch (err) {
        console.error("GET ERROR:", err.message);
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}


// 🔥 POST (create new settings - optional use)
export async function POST(req) {
    try {
        await connectDB();
        const { user: authUser, error } = verifyAdmin();

        const body = await req.json();

        const newSettings = await Setting.create({
            mobile: body.mobile || "",
            whatsapp: body.whatsapp || "",
            supportEmail: body.supportEmail || "",
            infoEmail: body.infoEmail || "",

            offerPercentage: Number(body.offerPercentage) || 0,

            pricing: {
                starter: Number(body.pricing?.starter) || 0,
                business: Number(body.pricing?.business) || 0,
                pro: Number(body.pricing?.pro) || 0,
            },

            totalBalance: Number(body.totalBalance) || 0,
        });

        return NextResponse.json({
            message: "Settings created",
            newSettings,
        });

    } catch (err) {
        console.error("POST ERROR:", err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}


// 🔥 PUT (update existing settings)
export async function PUT(req) {
    try {
        await connectDB();
        const { user: authUser, error } = verifyAdmin();
        const body = await req.json();

        let settings = await Setting.findOne();

        const payload = {
            mobile: body.mobile || "",
            whatsapp: body.whatsapp || "",
            supportEmail: body.supportEmail || "",
            infoEmail: body.infoEmail || "",

            offerPercentage: Number(body.offerPercentage) || 0,

            pricing: {
                starter: Number(body.pricing?.starter) || 0,
                business: Number(body.pricing?.business) || 0,
                pro: Number(body.pricing?.pro) || 0,
            },

            totalBalance: Number(body.totalBalance) || 0,
        };

        if (!settings) {
            settings = await Setting.create(payload);
        } else {
            settings = await Setting.findByIdAndUpdate(
                settings._id,
                payload,
                { new: true }
            );
        }

        return NextResponse.json({
            message: "Settings updated",
            settings,
        });

    } catch (err) {
        console.error("PUT ERROR:", err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}


// 🔥 DELETE (delete settings)
export async function DELETE() {
    try {
        await connectDB();
        const { user: authUser, error } = verifyAdmin();
        await Setting.deleteMany(); // since single doc

        return NextResponse.json({
            message: "Settings deleted",
        });

    } catch (err) {
        console.error("DELETE ERROR:", err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}