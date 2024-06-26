import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "E-commerce Idshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:px-20 shadow-md h-20 md:h-32 fixed w-full bg-white" style={{zIndex: 1000}}>
          <Header/>
        </div>
        <div className="md:px-24 py-10 md:py-24 ">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
