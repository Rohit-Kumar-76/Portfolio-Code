
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#0a192f] text-white">
                {children}
                <Toaster richColors position="top-right" />
            </body>
        </html>
    );
}