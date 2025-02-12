import {Sora} from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css"; 
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
const sora = Sora({
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Finitic Technology",
  description: "Finitic develops innovative FinTech solutions that empower brokers/investors to streamline your financial operations. Explore our cutting-edge products and services.",
  keywords: [
    "Forex trading",
    "Forex broker",
    "Currency trading",
    "Forex market",
    "Best forex trading platform",
    "Forex trading platform",
    "Forex trading strategies",
    "Forex signals",
    "Forex trading courses",
    "Forex analysis",
    "Forex news",
    "MetaTrader",
    "Forex trading for beginners",
    "Forex trading courses online",
    "Forex trading signals free",
    "Forex trading demo account",
    "Forex CRM software",
    "Forex trading CRM",
    "Forex broker CRM",
    "Forex CRM solutions",
    "Forex CRM system",
    "Forex CRM tools",
    "Forex CRM platform",
    "Forex CRM services",
    "Forex CRM providers",
    "Forex CRM solutions for brokers",
    "Forex automated trading",
    "What is forex trading",
    "How to trade forex",
    "Forex trading basics",
    "Forex trading tutorial"
  ],  
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <GoogleTagManager gtmId="G-GRCL809B31" /> */}
      <link rel="icon" href="/favicon.png" sizes="any" type= "image/png"/>
      <body className={`${sora.variable}`}>
        <Header />
        <div
          style={{
            marginTop: "100px",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
