import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface FeaturedJobsProps {}
const FeaturedJobs: FC<FeaturedJobsProps> = () => {
  return (
    <>
      <div className="mt-32 mb-10">
        <TitleSection word1="Featured" word2="jobs" />
        <div className="grid grid-cols-4 gap-8 mt-12">
          {[0, 1, 2, 3].map((item: number) => (
            <JobItem
              categories={["Marketing", "Design"]}
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis qui consequatur quis sequi doloribus laborum esse velit."
              image="/images/company.png"
              jobType="Full-Time"
              location="Paris, France"
              name="Email Marketing"
              type="Agency"
              key={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
