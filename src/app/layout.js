
import "./globals.css";



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#0a192f] text-white">
                {children}
            </body>
        </html>
    );
}