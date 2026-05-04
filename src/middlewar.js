import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
    const token = req.cookies.get("token")?.value;

    const { pathname } = req.nextUrl;

    // 🔥 protect admin routes
    if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {

        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (!decoded) {
                return NextResponse.redirect(new URL("/login", req.url));
            }

        } catch (err) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    // return NextResponse.next();

    const res = NextResponse.next();

    res.headers.set("Cache-Control", "no-store");

    return res;
}

export const config = {
    matcher: ["/admin/:path*", "/api/admin/:path*"],
};