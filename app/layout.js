import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fudee",
  description: "This is a food delivery application, you can deliver food using this application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        
    </html>
  );
}
