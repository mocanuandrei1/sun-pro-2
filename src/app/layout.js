import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import MobileFooterButtons from "@/components/MobileFooterButtons";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  keywords: [
    "SunPro",
    "Inchideri Terase",
    "Copertine",
    "Pergole",
    "Rulouri",
    "Prelate PVC",
  ],
  title: {
    default: "SunPro - Transformăm exteriorul casei tale" /* Default title */,
    template: "%s | SunPro" /* Template title */,
  },
  description:
    "SunPro oferă soluții personalizate pentru a satisface nevoile unice și specificațiile fiecărui proiect.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn-cookieyes.com/client_data/d77855b1c0dea4668a310afa/script.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${poppins.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <MobileFooterButtons />
        <Toaster />
      </body>
    </html>
  );
}
