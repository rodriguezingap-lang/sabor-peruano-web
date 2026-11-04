import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { negocio } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${negocio.nombre} | Comida Rápida, Hamburguesas y Pollo Broster`,
  description: `${negocio.eslogan}. Hamburguesas, pollo broster, alitas BBQ y caldos. Pide por WhatsApp con delivery rápido.`,
  keywords: [
    "comida rápida",
    "hamburguesas",
    "pollo broster",
    "alitas BBQ",
    "caldos",
    "delivery",
    negocio.nombre,
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: `${negocio.nombre} | Comida Rápida`,
    description: `${negocio.eslogan}. Pide por WhatsApp.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
