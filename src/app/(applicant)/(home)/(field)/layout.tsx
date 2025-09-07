import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../../../globals.css";
import Image from "next/image";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import NextAuthProvider from "@/context/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const epilogue = Epilogue({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Job Portal",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (session === null || session.user.role !== "USER") {
    return redirect("/");
  }
  return (
    <html lang="en">
      <body className={`${epilogue.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
