import FormModalApply from "@/components/organisms/FormModalApply";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import prisma from "../../../../../../../../lib/prisma";
import { dateFormat } from "@/lib/utils";
import { supabaseGetPublicUrl } from "@/lib/supabase";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";

async function getDetailJob(id: string) {
  const session = await getServerSession(authOptions);

  const data = await prisma.job.findFirst({
    where: {
      id: id,
    },
    include: {
      Company: {
        include: {
          CompanyOverview: true,
        },
      },
      CategoryJob: true,
    },
  });
  let imageUrl;

  if (data?.Company?.CompanyOverview[0].image) {
    const { publicUrl } = await supabaseGetPublicUrl(
      data.Company.CompanyOverview[0].image,
      "company"
    );
    imageUrl = publicUrl;
  } else {
    imageUrl = "/images/company2.png";
  }

  // const isApply = await prisma.applicant.count({
  const isApply = await prisma.applicant.findFirst({
    where: {
      userId: session?.user.id,
      jobId: id,
    },
  });

  if (!session) {
    return { ...data, image: imageUrl, isApply: false };
  }

  return { ...data, image: imageUrl, isApply: !!isApply };
}

const DetailJobPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const data = await getDetailJob(id);
  const session = await getServerSession(authOptions);

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
            href={`/detail/company/${data?.Company?.CompanyOverview[0].id}`}
          >
            {data?.Company?.CompanyOverview[0].name}
          </Link>{" "}
          /{" "}
          <Link className="text-black" href={""}>
            {data?.roles}
          </Link>
        </div>
        <div className="bg-white shadow-sm mt-10 p-3 w-11/12 mx-auto flex flex-row justify-between items-center">
          <div className="inline-flex items-center gap-5">
            <Image src={data.image} alt={data.image} width={88} height={88} />
            <div>
              <div className="text-2xl font-semibold">{data?.roles}</div>
              <div className="text-muted-foreground">
                {data?.CategoryJob?.name} .{" "}
                {data?.Company?.CompanyOverview[0].location} . {data?.jobType}
              </div>
            </div>
          </div>
          {session && session.user.role === "USER" ? (
            <>
              {data.isApply ? (
                <Button size={"lg"} disabled className="text-lg px-12 py-6">
                  Applied
                </Button>
              ) : (
                <FormModalApply
                  image={data.image}
                  jobType={data.jobType!}
                  location={data?.Company?.CompanyOverview[0].location!}
                  roles={data.roles!}
                  company={data?.CategoryJob?.name!}
                  id={data.id!}
                  isApply={data.isApply}
                />
              )}
            </>
          ) : (
            <>
              <Button size={"lg"} disabled className="text-lg px-12 py-6">
                Sign-in First
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="px-32 py-16 flex flex-row items-start gap-10">
        <div className="w-3/4">
          <div className="space-y-4 mb-16">
            <div className="text-3xl font-semibold">Description</div>
            <div
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: data?.description ? data?.description : "",
              }}
            />
          </div>
          <div className="space-y-4 mb-16">
            <div className="text-3xl font-semibold">Responsibilities</div>
            <div
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: data?.responsibility ? data?.responsibility : "",
              }}
            />
          </div>
          <div className="space-y-4 mb-16">
            <div className="text-3xl font-semibold">Who You Are</div>
            <div
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: data?.whoYouAre ? data?.whoYouAre : "",
              }}
            />
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-semibold">Nice-To-Haves</div>
            <div
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: data?.niceToHaves ? data?.niceToHaves : "",
              }}
            />
          </div>
        </div>
        <div className="w-1/4">
          <div>
            <div className="text-3xl font-semibold">About this role</div>
            <div className="mt-6 p-4 bg-gray-100 border border-gray-200">
              <div className="mb-2">
                <span className="font-semibold">
                  {data?.applicants} Applied
                  <span className="text-gray-600">
                    {" "}
                    of {data?.needs} capacity
                  </span>
                </span>
                <Progress value={(data?.applicants! / data?.needs!) * 100} />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Apply Before</div>
                <div className="font-semibold">{dateFormat(data?.dueDate)}</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Posted</div>
                <div className="font-semibold">
                  {dateFormat(data?.datePosted)}
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Type</div>
                <div className="font-semibold">{data?.jobType}</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Salary</div>
                <div className="font-semibold">
                  ${data?.salaryFrom}-${data?.salaryTo} USD
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-10" />
          <div>
            <div className="text-3xl font-semibold">Categories</div>
            <div className="my-10 inline-flex gap-4">
              <Badge className="pt-1">{data?.CategoryJob?.name}</Badge>
            </div>
          </div>
          <Separator className="my-10" />
          <div>
            <div className="text-3xl font-semibold">Required Skills</div>
            <div className="my-10 inline-flex gap-4">
              {data?.requiredSkills!.map((item: any) => (
                <Badge key={item} className="pt-1 bg-blue-200 text-blue-700">
                  {item}
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
          {data?.benefits!.map((item: any) => (
            <div key={item} className="">
              <LayoutGrid className="w-12 h-12 text-primary" />
              <div className="font-semibold text-xl mt-6">{item.benefit}</div>
              <div className="mt-3 text-sm text-gray-500">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailJobPage;
