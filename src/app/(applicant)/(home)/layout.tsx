import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../../globals.css";
import Image from "next/image";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const epilogue = Epilogue({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Job Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
