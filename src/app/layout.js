import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

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
  title: "Sun-Pro",
  description: "Sun-Pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${poppins.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
