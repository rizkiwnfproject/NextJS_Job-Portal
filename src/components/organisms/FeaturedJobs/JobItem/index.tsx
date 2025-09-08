import TitleSection from "@/components/atoms/TitleSection";
import { Badge } from "@/components/ui/badge";
import { categoryJobType, JobType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface JobItemProps extends JobType {}
const JobItem: FC<JobItemProps> = ({
  category,
  desc,
  image,
  jobType,
  location,
  name,
  type,
  skills,
  id,
}) => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(`/detail/job/${id}`)}
        className="border border-border p-6 cursor-pointer"
      >
        <div className="flex flex-row justify-between items-start">
          <Image src={image} alt={image} width={48} height={48} />
          <span className="px-4 pt-2 pb-1 border border-primary text-xs font-semibold text-primary ">
            {jobType}
          </span>
        </div>
        <div className="my-4">
          <div className="font-semibold text-lg">{name}</div>
          <div className="text-muted-foreground mb-3">
            {type} . {location}
          </div>
          <div
            className="text-muted-foreground h-12 line-clamp-2 text-ellipsis"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
        <div className="space-x-2">
          {skills.map((item: string, i: number) => (
            <Badge
              key={i}
              variant={"outline"}
              className="rounded border-primary bg-primary/10 text-primary pt-1"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobItem;
