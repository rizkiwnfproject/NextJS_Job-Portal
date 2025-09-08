"use client";

import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";

interface LatestJobsProps {}
const LatestJobs: FC<LatestJobsProps> = () => {
  const { jobs, isLoading, error } = useFeaturedJobs();
  return (
    <>
      {/* py-16 */}
      <div className="mt-32 mb-10 relative">
        <TitleSection word1="Latest" word2="jobs" />
        <div className="mt-12 grid grid-cols-3 gap-8">
          {jobs.slice(0, 3).map((item: JobType) => (
            <JobItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
