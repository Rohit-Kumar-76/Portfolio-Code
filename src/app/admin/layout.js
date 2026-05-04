import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import AdminLayout from "@/components/AdminLayout";

export const metadata = {
    title: {
        default: "TrioScript | Admin",
        template: "%s | TrioScript",
    },
};

export default async function DashboardLayout({ children }) {

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    // ❌ no token
    if (!token) {
        redirect("/login");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // ❌ role mismatch
        if (decoded.role !== "admin" && decoded.role !== "superuser") {
            redirect("/login");
        }

    } catch {
        redirect("/login");
    }

    return <AdminLayout>{children}</AdminLayout>;
}