import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";

const epilogue = Epilogue({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.className} antialiased`}
      >
        <main>
          <div className="border-t">
            <div className="bg-background">
              <div className="flex flex-row">
                <div className="hidden lg:block w-[18%]">
                  <Sidebar />
                </div>
                <div className="col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%]">
                  <div className="px-6 py-6 lg:px-8">
                    <div className="">
                      <Header />
                    </div>
                    <div className="">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
