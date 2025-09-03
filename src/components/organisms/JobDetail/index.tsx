import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { PartyPopper } from "lucide-react";
import React, { FC } from "react";

interface JobDetailProps {}
const JobDetail: FC<JobDetailProps> = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-3 w-full gap-5">
          <div className="col-span-2 space-y-10">
            <div className="">
              <div className="text-3xl font-semibold">Description</div>
              <div className="text-gray-500 mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem error esse eius deleniti ea officiis, illo quasi
                  cumque aliquam, distinctio, quis rem nesciunt consectetur
                  ipsum aliquid at explicabo obcaecati facilis.
                </p>
              </div>
            </div>
            <div className="">
              <div className="text-3xl font-semibold">Responsibilities</div>
              <div className="text-gray-500 mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem error esse eius deleniti ea officiis, illo quasi
                  cumque aliquam, distinctio, quis rem nesciunt consectetur
                  ipsum aliquid at explicabo obcaecati facilis.
                </p>
              </div>
            </div>
            <div className="">
              <div className="text-3xl font-semibold">Who You Are</div>
              <div className="text-gray-500 mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem error esse eius deleniti ea officiis, illo quasi
                  cumque aliquam, distinctio, quis rem nesciunt consectetur
                  ipsum aliquid at explicabo obcaecati facilis.
                </p>
              </div>
            </div>
            <div className="">
              <div className="text-3xl font-semibold">Nice-To-Haves</div>
              <div className="text-gray-500 mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem error esse eius deleniti ea officiis, illo quasi
                  cumque aliquam, distinctio, quis rem nesciunt consectetur
                  ipsum aliquid at explicabo obcaecati facilis.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-3xl font-semibold">About this role</div>
            <div className="bg-gray-100 p-3 text-center my-6">
              1 <span className="text-gray-500">of 10 capacity</span>
              <Progress className="mt-3" value={10} />
            </div>
            <div className="mb-10 space-y-5">
              <div className="flex justify-between">
                <div className="text-gray-500">Apply Before</div>
                <div className="font-semibold">12 Aug 2025</div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-500">Job Posted On</div>
                <div className="font-semibold">12 Sep 2025</div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-500">Job Type</div>
                <div className="font-semibold">Full-Time</div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-500">Salary</div>
                <div className="font-semibold">$100-1k USD</div>
              </div>
            </div>
            <Separator />
            <div className="my-10">
              <div className="text-3xl font-semibold mb-4">Category</div>
              <div className="">
                <Badge className="pt-2 px-3 rounded-md">Design</Badge>
              </div>
            </div>
            <Separator />
            <div className="my-10">
              <div className="text-3xl font-semibold mb-4">Required Skills</div>
              <div className="space-x-2">
                {["HTML", "Javascript"].map((item: string, i: number) => (
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
            {[0, 1, 2, 3].map((item: number) => (
              <div key={item} className="">
                <PartyPopper className="w-10 h-10 text-violet-600 mb-6" />
                <div className="text-lg font-semibold mb-3">
                  Full Healthcare
                </div>
                <div className="text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea assumenda, rem inventore atque ipsa eum optio, ad unde asperiores minus temporibus labore
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
