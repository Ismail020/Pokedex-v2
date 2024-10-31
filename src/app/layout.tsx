import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sora = Sora({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--font-sora",
});

export const metadata: Metadata = {
    title: "Pokedex website",
    description: "A pokedex website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sora.variable} bg-background antialiased`}>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
