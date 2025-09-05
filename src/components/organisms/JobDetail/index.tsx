import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { dateFormat } from "@/lib/utils";
import { Applicant, CategoryJob, Job, User } from "@prisma/client";
import { PartyPopper } from "lucide-react";
import React, { FC } from "react";

// type JobDetailType = {
//   CategoryJob: CategoryJob;
// } & Job;
type JobDetailType = Job & {
  CategoryJob: CategoryJob | null;
  Applicant: (Applicant & {
    User: User | null;
  })[];
};

interface JobDetailProps {
  detail: JobDetailType | null;
}

const JobDetail: FC<JobDetailProps> = ({ detail }) => {
  const benefits: any = detail?.benefits;
  return (
    <>
      <div>
        <div className="grid grid-cols-3 w-full gap-5">
          <div className="col-span-2 space-y-10">
            <div className="">
              <div className="text-3xl font-semibold">Description</div>
              <div
                className="text-gray-500 mt-3"
                dangerouslySetInnerHTML={{ __html: detail?.description!! }}
              />
            </div>
            <div className="">
              <div className="text-3xl font-semibold">Responsibilities</div>
              <div
                className="text-gray-500 mt-3"
                dangerouslySetInnerHTML={{ __html: detail?.responsibility!! }}
              />
            </div>
            <div className="">
              <div className="text-3xl font-semibold">Who You Are</div>
              <div
                className="text-gray-500 mt-3"
                dangerouslySetInnerHTML={{ __html: detail?.whoYouAre!! }}
              />
            </div>
            <div className="">
              <div className="text-3xl font-semibold">Nice-To-Haves</div>
              <div
                className="text-gray-500 mt-3"
                dangerouslySetInnerHTML={{ __html: detail?.niceToHaves!! }}
              />
            </div>
          </div>
          <div className="">
            <div className="text-3xl font-semibold">About this role</div>
            <div className="bg-gray-100 p-3 text-center my-6">
              {detail?.applicants}{" "}
              <span className="text-gray-500">of {detail?.needs} capacity</span>
              <Progress
                className="mt-3"
                value={(detail?.applicants || 0) / (detail?.needs || 0) / 100}
              />
            </div>
            <div className="mb-10 space-y-5">
              <div className="flex justify-between">
                <div className="text-gray-500">Apply Before</div>
                <div className="font-semibold">
                  {dateFormat(detail?.dueDate)}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-500">Job Posted On</div>
                <div className="font-semibold">
                  {dateFormat(detail?.datePosted)}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-500">Job Type</div>
                <div className="font-semibold">{detail?.jobType}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-500">Salary</div>
                <div className="font-semibold">
                  ${detail?.salaryFrom}-${detail?.salaryTo} USD
                </div>
              </div>
            </div>
            <Separator />
            <div className="my-10">
              <div className="text-3xl font-semibold mb-4">Category</div>
              <div className="">
                <Badge className="pt-2 px-3 rounded-md">
                  {detail?.CategoryJob?.name}
                </Badge>
              </div>
            </div>
            <Separator />
            <div className="my-10">
              <div className="text-3xl font-semibold mb-4">Required Skills</div>
              <div className="space-x-2">
                {detail?.requiredSkills.map((item: string, i: number) => (
                  <Badge
                    variant={"outline"}
                    key={i}
                    className="pt-2 pb-1 px-3 rounded-md"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="">
          <div className="">
            <div className="text-3xl font-semibold">Perks & Benefits</div>
            <div className="text-gray-500 mt-1">
              This job comes with several perks and benefits
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-9">
            {benefits?.map((item: any) => (
              <div key={item} className="">
                <PartyPopper className="w-10 h-10 text-violet-600 mb-6" />
                <div className="text-lg font-semibold mb-3">{item.benefit}</div>
                <div className="text-gray-500">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
