// app/layout.tsx
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Urbanist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Urbanist({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StatuApp",
  description: "Patrimonio Rosario",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Contenido */}
          <main
            className="
              min-h-[70vh]
              pb-28                    /* espacio para el dock */
              md:pb-24
              [padding-bottom:calc(env(safe-area-inset-bottom,0)+7rem)] /* iOS */
            "
          >
            {children}
          </main>

          {/* Dock flotante */}
          <Navbar />

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
