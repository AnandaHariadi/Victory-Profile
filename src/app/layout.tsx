import type { Metadata } from "next";
import { Inter, Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/ai/AIChatbot";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: '--font-jakarta' });
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel' });

export const metadata: Metadata = {
  title: "Victory International Futures | Pialang Berjangka Terpercaya",
  description: "Investasi Cerdas, Masa Depan Cerah. PT Victory International Futures adalah perusahaan pialang berjangka resmi terdaftar BAPPEBTI melayani trading forex, gold, dan komoditas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} ${cinzel.variable} font-body bg-slate-50 text-slate-900 antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
