import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
