import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <>
      <header className="px-32 py-5 flex flex-row items-start justify-between">
        <div className="inline-flex items-center gap-12">
          <Link href={"/"}>
            <div>
              <Image
                src={"/images/logo2.png"}
                alt="/images/logo2.png"
                width={160}
                height={36}
              />
            </div>
          </Link>
          <div>
            <Link href={"/find-jobs"}>
              <span className="font-medium text-gray-400 mr-4 cursor-pointer">
                Find Jobs
              </span>
            </Link>
            <Link href={"/find-companies"}>
              <span className="font-medium text-gray-400 mr-4 cursor-pointer">
                Browse Companies
              </span>
            </Link>
          </div>
        </div>
        <div className="inline-flex items-center gap-4 h-8">
          <Button variant={"link"}>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
