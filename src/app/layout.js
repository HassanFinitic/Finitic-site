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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
