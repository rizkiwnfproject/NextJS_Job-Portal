import FormFilterDynamic from "@/components/organisms/FormFilterDynamic";
import FormSearchDynamic from "@/components/organisms/FormSearchDynamic";
import JobCard from "@/components/organisms/JobCard";
import { filterFormType, JobType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface ExploreDataContainerProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void>;
  filterForms: filterFormType[];
  loading: boolean;
  title: string;
  subtitle: string;
  data: any[];
  type: "job" | "company";
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
  filterForms,
  formFilter,
  onSubmitFilter,
  loading,
  subtitle,
  title,
  data,
  type,
}) => {
  return (
    <>
      <div className="bg-gray-200 px-32 pt-16 pb-14">
        <div className="mb-10">
          <div className="mx-auto mb-11 text-center flex flex-row justify-center gap-2">
            <span className="text-5xl font-semibold">Find your</span>
            <div className="relative">
              <span className="text-5xl font-semibold text-primary">
                {title}
              </span>
              <div className="absolute top-10 w-[220px] h-10">
                <Image
                  src={"/images/pattern2.png"}
                  alt="/images/pattern2.png"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500">{subtitle}</div>
        </div>
        <div>
          <FormSearchDynamic />
        </div>
      </div>

      <div className="mt-20 mb-16 px-32 flex flex-row items-start gap-10">
        <div className="w-1/5">
          <FormFilterDynamic
            filterForms={filterForms}
            formFilter={formFilter}
            onSubmitFilter={onSubmitFilter}
          />
        </div>
        <div className="w-4/5">
          <div className="mb-8">
            <div className="text-3xl font-semibold">All Jobs</div>
            <div className="text-muted-foreground">Showing 73 Result</div>
            <div className="grid grid-cols-1 gap-7 mt-10">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {type === "job" ? (
                    <>
                      {data.map((item: any, i: number) => (
                        <JobCard key={i} {...item} />
                        //       {data.map((item: any, i: number) => (
                        //   <JobCard
                        //     applicants={5}
                        //     categories={["Marketing", "Design"]}
                        //     desc=""
                        //     image="/images/company2.png"
                        //     jobType="Full-Time"
                        //     location="Surabaya, Indonesia"
                        //     name="Social Media Assistant"
                        //     needs={20}
                        //     type="Agency"
                        //   />
                        // ))}
                      ))}
                    </>
                  ) : (
                    <>
                      {data?.map((item: any, i: number) => (
                        <div key={i}>Company Card</div>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDataContainer;
