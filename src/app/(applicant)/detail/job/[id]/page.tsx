import FormModalApply from "@/components/organisms/FormModalApply";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface DetailJobProps {}

const DetailJobPage: FC<DetailJobProps> = () => {
  return (
    <>
      <div className="bg-slate-100 px-32 pt-10 pb-14">
        <div className=" inline-flex gap-3 text-sm text-muted-foreground">
          <Link className="hover:underline hover:text-black" href={"/"}>
            Home
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href={"/find-companies"}
          >
            Companies
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href={"/detail/company/1"}
          >
            Twitter
          </Link>{" "}
          /{" "}
          <Link className="text-black" href={""}>
            Social Media Assistant
          </Link>
        </div>
        <div className="bg-white shadow-sm mt-10 p-3 w-11/12 mx-auto flex flex-row justify-between items-center">
          <div className="inline-flex items-center gap-5">
            <Image
              src={"/images/company2.png"}
              alt="/images/company2.png"
              width={88}
              height={88}
            />
            <div>
              <div className="text-2xl font-semibold">
                Social Media Assistant
              </div>
              <div className="text-muted-foreground">
                Agency . Paris, France . Full-Time
              </div>
            </div>
          </div>
          <FormModalApply />
        </div>
      </div>
      <div className="px-32 py-16 flex flex-row items-start gap-10">
        <div className="w-3/4">
          <div className="space-y-4 mb-16">
            <div className="text-3xl font-semibold">Description</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                ipsam iusto provident, molestias animi culpa ratione ea
                explicabo ducimus quae itaque suscipit, distinctio, illum
                commodi eius ad velit? Provident, animi?Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Ducimus iure laudantium amet
                odit exercitationem officia dolorem eius expedita neque,
                voluptate recusandae tenetur nam omnis, asperiores, suscipit
                mollitia quos esse aut!
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-16">
            <div className="text-3xl font-semibold">Responsibilities</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                ipsam iusto provident, molestias animi culpa ratione ea
                explicabo ducimus quae itaque suscipit, distinctio, illum
                commodi eius ad velit? Provident, animi?Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Ducimus iure laudantium amet
                odit exercitationem officia dolorem eius expedita neque,
                voluptate recusandae tenetur nam omnis, asperiores, suscipit
                mollitia quos esse aut!
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-16">
            <div className="text-3xl font-semibold">Who You Are</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                ipsam iusto provident, molestias animi culpa ratione ea
                explicabo ducimus quae itaque suscipit, distinctio, illum
                commodi eius ad velit? Provident, animi?Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Ducimus iure laudantium amet
                odit exercitationem officia dolorem eius expedita neque,
                voluptate recusandae tenetur nam omnis, asperiores, suscipit
                mollitia quos esse aut!
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-semibold">Nice-To-Haves</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                ipsam iusto provident, molestias animi culpa ratione ea
                explicabo ducimus quae itaque suscipit, distinctio, illum
                commodi eius ad velit? Provident, animi?Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Ducimus iure laudantium amet
                odit exercitationem officia dolorem eius expedita neque,
                voluptate recusandae tenetur nam omnis, asperiores, suscipit
                mollitia quos esse aut!
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div>
            <div className="text-3xl font-semibold">About this role</div>
            <div className="mt-6 p-4 bg-gray-100 border border-gray-200">
              <div className="mb-2">
                <span className="font-semibold">
                  5 Applied
                  <span className="text-gray-600"> of 10 capacity</span>
                </span>
                <Progress value={(5 / 10) * 100} />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Apply Before</div>
                <div className="font-semibold">31 Juli, 2023</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Posted</div>
                <div className="font-semibold">31 Juni, 2023</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Type</div>
                <div className="font-semibold">Full-Time</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Salary</div>
                <div className="font-semibold">$75-$8k USD</div>
              </div>
            </div>
          </div>
          <Separator className="my-10" />
          <div>
            <div className="text-3xl font-semibold">Categories</div>
            <div className="my-10 inline-flex gap-4">
              <Badge className="pt-1">Marketing</Badge>
            </div>
          </div>
          <Separator className="my-10" />
          <div>
            <div className="text-3xl font-semibold">Required Skills</div>
            <div className="my-10 inline-flex gap-4">
              {[0, 1, 2, 3].map((item: number) => (
                <Badge key={item} className="pt-1 bg-blue-200 text-blue-700">
                  Marketing
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 pb-16">
        <Separator className="mb-14" />
        <div className="mb-6">
          <div className="font-semibold text-3xl">Perks & Benefits</div>
          <div className="text-gray-500 mt-1">
            This job comes with several perks and benefits
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[0, 1, 2, 3].map((item: number) => (
            <div key={item} className="">
              <LayoutGrid className="w-12 h-12 text-primary" />
              <div className="font-semibold text-xl mt-6">Full Healthcare</div>
              <div className="mt-3 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                natus quo mollitia totam a quaerat corporis voluptas
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailJobPage;
