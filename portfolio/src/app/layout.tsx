import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maryam Ali | Software Engineer",
  description:
    "Portfolio of Maryam Ali — Software Engineer specializing in .NET, TypeScript, scalable REST APIs and full-stack web applications.",
  openGraph: {
    title: "Maryam Ali | Software Engineer · .NET & TypeScript",
    description:
      "Software Engineer with hands-on experience in ASP.NET Core, Next.js, NestJS, TypeScript, PostgreSQL and RabbitMQ.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Maryam Ali | Software Engineer · .NET & TypeScript",
    description:
      "Software Engineer with hands-on experience in ASP.NET Core, Next.js, NestJS, TypeScript, PostgreSQL and RabbitMQ.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <noscript>
          <style>{`[data-hero]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
