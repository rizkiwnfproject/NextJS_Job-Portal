"use client";

import ExploreDataContainer from "@/cointainers/ExploreDataContainer";
import { CATEGORIES_OPTIONS } from "@/constants";
import { formFilterCompanySchema, formFilterSchema } from "@/lib/form-schema";
import { CompanyType, filterFormType, JobType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const FILTER_FORMS: filterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

const dummyData: CompanyType[] = [
  {
    image: "/images/company2.png",
    categories: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla asperiores ab sit nobis esse mollitia. Illo eos deserunt, dolorem architecto magni iusto repudiandae,",
    name: "PT. Telkom",
    totalJobs: 20,
  },
  {
    image: "/images/company2.png",
    categories: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla asperiores ab sit nobis esse mollitia. Illo eos deserunt, dolorem architecto magni iusto repudiandae,",
    name: "PT. Telkom",
    totalJobs: 20,
  },
  {
    image: "/images/company2.png",
    categories: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla asperiores ab sit nobis esse mollitia. Illo eos deserunt, dolorem architecto magni iusto repudiandae,",
    name: "PT. Telkom",
    totalJobs: 20,
  },
];

interface FindCompaniesProps {}

const FindCompaniesPage: FC<FindCompaniesProps> = () => {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterCompanySchema>
  ) => {
    console.log(val);
  };
  return (
    <>
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmitFormFilter}
        filterForms={FILTER_FORMS}
        loading={false}
        subtitle="Find the dream companies you dream work for"
        title="dream companies"
        type="company"
        data={dummyData}
      />
    </>
  );
};

export default FindCompaniesPage;
