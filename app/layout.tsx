import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Kaadu Golla Community",
    icons: {
    icon: 'https://chatgpt.com/s/m_6a250035aba081919e8ae5cef71ce271'

        },
    description: "Digital home for the Kaadu Golla community of Karnataka, India - preserving heritage, celebrating identity, and advocating for rights",
    keywords: [
        "Kaadu Golla",
        "Karnataka",
        "Community",
        "Scheduled Tribe",
        "Cultural Heritage",
        "Pastoral Heritage",
    ],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-cream-50 text-gray-900">
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
