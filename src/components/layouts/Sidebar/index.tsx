"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Building2,
  CalendarDays,
  ClipboardList,
  House,
  LogOut,
  Mail,
  Settings,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();
  const sideJobListPage = () => router.push("/dashboard/job-listings");

  return (
    <>
      <div className="pb-12 min-h-screen">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <Link href={"/dashboard"}>
              <h2 className="mb-7 px-4 text-lg font-semibold">Dashboard</h2>
            </Link>
            <div className="space-y-3">
              <Button
                variant={"ghost"}
                className="w-full justify-start font-medium text-slate-500 hover:text-blue-600"
              >
                <House className="text-lg mr-1" />
                Home
              </Button>
              <Button
                variant={"ghost"}
                className="w-full justify-start font-medium text-slate-500 hover:text-blue-600"
              >
                <Mail className="text-lg mr-1" />
                Messages
              </Button>
              <Button
                variant={"ghost"}
                className="w-full justify-start font-medium text-slate-500 hover:text-blue-600"
              >
                <Building2 className="text-lg mr-1" />
                Company Profile
              </Button>
              <Button
                variant={"ghost"}
                className="w-full justify-start font-medium text-slate-500 hover:text-blue-600"
              >
                <UsersRound className="text-lg mr-1" />
                All Applicants
              </Button>
              <Button
                variant={"ghost"}
                className="w-full justify-start font-medium text-slate-500 hover:text-blue-600"
                onClick={sideJobListPage}
              >
                <ClipboardList className="text-lg mr-1" />
                Job Listings
              </Button>
              <Button
                variant={"ghost"}
                className="w-full justify-start font-medium text-slate-500 hover:text-blue-600"
              >
                <CalendarDays className="text-lg mr-1" />
                My Schedule
              </Button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-7 px-4 text-lg font-semibold">Setting</h2>
            <div className="space-y-3">
              <Button
                variant={"ghost"}
                className="w-full justify-start font-medium text-slate-500 hover:text-blue-600"
              >
                <Settings className="text-lg mr-1" />
                Settings
              </Button>
              <Button
                variant={"ghost"}
                className="w-full justify-start font-medium text-red-500 hover:text-slate-100 hover:bg-red-500"
              >
                <LogOut className="text-lg mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
