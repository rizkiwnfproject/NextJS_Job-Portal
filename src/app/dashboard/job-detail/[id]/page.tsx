import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";

interface JobDetailProps {}
const JobDetailPage: FC<JobDetailProps> = ({}) => {
  return (
    <>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href={"/dashboard/job-listings"}>
            <ArrowLeftIcon className="w-7 h-7" />
          </Link>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-1">Brand Designer</div>
          <div>
            Design . Full-Time . 1
            <span className="text-gray-500">/10 Hired</span>
          </div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetail />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default JobDetailPage;
