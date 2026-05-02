

import About from '@/pages/About'

export const metadata = {
    title: "About",
    description:
        "Learn about TrioScript – a modern web development service focused on building fast, responsive, and user-friendly websites and web applications.",
    keywords: [
        "about trioscript",
        "web developer india",
        "freelance developer portfolio",
        "frontend developer react",
        "next js developer india",
    ],

    openGraph: {
        title: "About TrioScript",
        description:
            "TrioScript builds modern websites and scalable web applications with clean UI and high performance.",
        url: "https://yourdomain.com/about",
        siteName: "TrioScript",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },
};

const page = () => {

    return (
        <div>
            <About />

        </div>
    )
}

export default page
