"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const router = useRouter();
  const { data: session } = useSession();

  const navCreateJobPage = () => router.push("/dashboard/post-a-job");
  return (
    <>
      <div className="pb-3 mb-8 border-b flex flex-row items-center justify-between">
        <div className="">
          <div className="">Company</div>
          <div className="font-semibold">{session?.user.name}</div>
        </div>
        <div className="">
          <Button
            className="py-3 px-6 bg-blue-600 hover:bg-blue-800 transition-all duration-500 ease-in-out"
            onClick={navCreateJobPage}
          >
            <PlusIcon />
            Post a Job
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
