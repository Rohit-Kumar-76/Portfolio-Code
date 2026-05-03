import AdminLayout from "@/components/AdminLayout";

export const metadata = {
    title: {
        default: "TrioScript | Admin",
        template: "%s | TrioScript",
    },
};

export default function DashboardLayout({ children }) {
    return <AdminLayout>{children}</AdminLayout>;
}