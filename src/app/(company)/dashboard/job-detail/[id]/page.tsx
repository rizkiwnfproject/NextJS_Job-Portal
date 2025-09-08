import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "../../../../../../lib/prisma";

type paramsType = {
  id: string;
};

interface JobDetailProps {
  params: paramsType;
}

export const revalidate = 0

async function getDetailJob(id: string) {
  const job = await prisma.job.findFirst({
    where: {
      id: id,
    },
    include: {
      Applicant: {
        include: {
          User: true,
        },
      },
      CategoryJob: true,
    },
  });
  return job;
}

const JobDetailPage: FC<JobDetailProps> = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const job = await getDetailJob(params.id);

  return (
    <>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href={"/dashboard/job-listings"}>
            <ArrowLeftIcon className="w-7 h-7" />
          </Link>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-1">{job?.roles}</div>
          <div>
            {job?.CategoryJob?.name} . {job?.jobType} . {job?.applicants}
            <span className="text-gray-500">/{job?.needs} Hired</span>
          </div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants applicants={job?.Applicant} />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetail detail={job}/>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default JobDetailPage;
