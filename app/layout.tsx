import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Righteous Unisex Salon and Business Services | Tuobodom, Techiman",
  description: "Precision haircuts, beard grooming, hair treatments and mobile money services in Tuobodom, Techiman. Open daily till 9 PM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased selection:bg-amber/30">{children}</body>
    </html>
  );
}
