import { Geist, Geist_Mono } from "next/font/google";
// import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "TrioScript | Web Development Services",
    template: "%s | TrioScript",
  },
  description:
    "TrioScript provides modern web development, portfolio websites, business websites, and custom web apps with fast performance and clean UI.",

  keywords: [
    // 🔹 Core Services
    "web developer",
    "freelance web developer",
    "full stack developer",
    "frontend developer",
    "backend developer",
    "website developer",

    // 🔹 Tech Stack
    "react developer",
    "next js developer",
    "javascript developer",
    "node js developer",
    "mern stack developer",
    "tailwind css developer",

    // 🔹 Freelancing / Hiring
    "hire web developer",
    "hire freelance developer",
    "freelance web developer india",
    "remote web developer",
    "website developer for hire",
    "best freelance developer",

    // 🔹 Website Types
    "portfolio website",
    "business website development",
    "landing page design",
    "startup website development",
    "company website design",
    "personal portfolio website",

    // 🔹 Industry Specific
    "gym website development",
    "school website development",
    "hotel website development",
    "restaurant website design",
    "coaching website development",
    "small business website",

    // 🔹 Custom Solutions
    "custom web app development",
    "web application developer",
    "admin dashboard development",
    "crm system development",
    "booking system website",

    // 🔹 SEO / Performance
    "seo optimized website",
    "fast loading website",
    "responsive web design",
    "modern ui ux design",
    "mobile friendly website",

    // 🔹 Location Based (VERY IMPORTANT 🔥)
    "web developer india",
    "freelance web developer india",
    "website developer bihar",
    "web developer patna",
    "best web developer in india",

    // 🔹 Client Intent (high conversion 🔥)
    "affordable website developer",
    "low cost website design",
    "professional website developer",
    "website development services",
    "custom website solutions"
  ],

  authors: [{ name: "TrioScript" }],
  creator: "TrioScript",

  openGraph: {
    title: "TrioScript | Web Development",
    description:
      "Modern websites & web apps with fast performance and clean UI.",
    url: "https://trioscript.in",
    siteName: "TrioScript",
    images: [
      {
        url: "/logo.png", // apni image dalna
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TrioScript",
    description: "Modern Web Development Services",
    images: ["/logo.png"],
  },
};

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <Button />
      {children}
      <Footer />
    </>
  );
}
