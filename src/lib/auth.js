import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function verifyAdmin() {
    try {
        const cookieStore = await cookies(); // 🔥 FIX

        const token = cookieStore.get("token")?.value;

        if (!token) {
            return { error: "No token" };
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "admin" && decoded.role !== "superuser") {
            return { error: "Forbidden" };
        }

        return { user: decoded };

    } catch (err) {
        return { error: "Invalid token" };
    }
}