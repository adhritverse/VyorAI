import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/SEO/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://vyorai.com"),
    title: {
        default: "VyorAI | Next-Gen AI Virtual Try-On & Developer Infrastructure",
        template: "%s | VyorAI",
    },
    description: "VyorAI provides enterprise-grade AI Virtual Try-On systems for fashion commerce and high-performance intelligent automation APIs for developers. Built for absolute precision and 99.9% uptime scale.",
    applicationName: "VyorAI",
    keywords: [
        "VyorAI",
        "AI automation platform",
        "AI interaction layer",
        "AI developer platform",
        "virtual try-on AI API",
        "e-commerce AI fitting room",
        "AI clothing try-on system",
        "AI product catalog generator",
        "Generative AI infrastructure",
        "Enterprise AI API"
    ],
    authors: [{ name: "Nikhil", url: "https://vyorai.com" }],
    creator: "VyorAI Team",
    publisher: "VyorAI",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "https://vyorai.com",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://vyorai.com",
        siteName: "VyorAI",
        title: "VyorAI | AI Virtual Try-On & Intelligent Automation",
        description: "Transforming fashion and development with advanced AI automation, APIs, and hyper-realistic virtual try-on technology.",
        images: [
            {
                url: "/LOGO.png",
                width: 1200,
                height: 630,
                alt: "VyorAI Platform Architecture",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "VyorAI | AI Virtual Try-On & Intelligent Automation",
        description: "Transforming the future of fashion and development with advanced AI precision.",
        images: ["/LOGO.png"],
        creator: "@vyorai",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/LOGO.png",
        apple: "/LOGO.png",
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen antialiased bg-vyor-gradient text-white selection:bg-vyor-purple/30 overflow-x-hidden`} suppressHydrationWarning>
                <StructuredData />
                {children}
            </body>
        </html>
    );
}
