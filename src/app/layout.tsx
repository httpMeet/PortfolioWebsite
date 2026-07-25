import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/layout/lenis-provider";

export const metadata: Metadata = {
  title: "Meet Gandhi | Laravel Backend Developer & Backend Engineer",
  description:
    "Portfolio of Meet Gandhi, a Backend Engineer specializing in Laravel, PHP, MySQL, RESTful APIs, and clean software architecture.",
  keywords: [
    "Meet Gandhi",
    "Laravel Backend Developer",
    "Backend Engineer",
    "PHP Developer",
    "MySQL Database Architect",
    "REST API Developer",
  ],
  authors: [{ name: "Meet Gandhi" }],
  openGraph: {
    title: "Meet Gandhi | Laravel Backend Developer",
    description:
      "Backend Engineer specializing in Laravel, PHP, MySQL database design, and REST APIs.",
    type: "website",
    url: "https://gandhimeet.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="bg-[#0b0f17] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-rose-500/20 selection:text-rose-300"
        suppressHydrationWarning
      >
        <LenisProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
