"use client";

import ExploreDataContainer from "@/cointainers/ExploreDataContainer";
import { CATEGORIES_OPTIONS } from "@/constants";
import { formFilterSchema } from "@/lib/form-schema";
import { filterFormType, JobType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const FILTER_FORMS: filterFormType[] = [
  {
    name: "categories",
    label: "categories",
    items: CATEGORIES_OPTIONS,
  },
];

interface FindJobsProps {}

const dummyData: JobType[] = [
  {
    applicants: 5,
    categories: ["Marketing", "Design"],
    desc: "",
    image: "/images/company2.png",
    jobType: "Full-Time",
    location: "Surabaya, Indonesia",
    name: "Social Media Assistant",
    needs: 20,
    type: "Agency",
  },
];

const FindJobsPage: FC<FindJobsProps> = () => {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };
  return (
    <>
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmitFormFilter}
        filterForms={FILTER_FORMS}
        loading={false}
        subtitle="Find your next career at companies like HubSpot, Nike, and Dropbox"
        title="dream job"
        type="job"
        data={dummyData}
      />
    </>
  );
};

export default FindJobsPage;
