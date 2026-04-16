import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beverly Hills Group of Schools | Excellence in Education | Zimbabwe",
  description:
    "Beverly Hills Group of Schools is one of Zimbabwe's leading independent schools, offering ECD to A-Level education in a Christian-based environment at Raylands Estate. Enrol for 2026.",
  keywords: "Beverly Hills School, Zimbabwe private school, boarding school Zimbabwe, ECD, primary, secondary school, Gweru school, Zimbabwe education",
  openGraph: {
    title: "Beverly Hills Group of Schools | Excellence in Education",
    description: "A school built on imagination, perseverance and sustainability. Offering ECD to A-Level education in Zimbabwe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className={`${dmSans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
