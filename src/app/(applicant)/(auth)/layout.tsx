import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../../globals.css";
import Image from "next/image";
import { Toaster } from "@/components/ui/sonner";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const epilogue = Epilogue({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Job Portal",
};

export default async function AuthRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (session !== null && session.user.role === "USER") {
    return redirect("/");
  }

  return (
    <html lang="en">
      <body className={`${epilogue.className} antialiased`}>
        <main className="grid grid-cols-2">
          <div className="relative h-screen">
            <div className="absolute w-full h-full">
              <Image
                src={"/images/bg-auth.png"}
                alt="/images/bg-auth.png"
                fill
                objectFit="cover"
                objectPosition="middle"
              />
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {children}
            </div>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
