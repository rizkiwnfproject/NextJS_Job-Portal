import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface LatestJobsProps {}
const LatestJobs: FC<LatestJobsProps> = () => {
  return (
    <>
      <div className="py-16 mt-32 mb-10 relative">
        <TitleSection word1="Latest" word2="jobs" />
        <div className="mt-12 grid grid-cols-3 gap-8">
          {[0, 1, 2].map((item: number) => (
            <JobItem
              categories={["Marketing", "Design"]}
              desc=""
              image="/images/company2.png"
              jobType="Full-Time"
              location="Paris, France"
              name="Social Media Assistant"
              type="Agency"
              key={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
