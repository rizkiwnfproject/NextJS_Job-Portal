"use client";

import ExploreDataContainer from "@/cointainers/ExploreDataContainer";
import useCategoryJobFilter from "@/hooks/useCategoryJobFilter";
import useJobs from "@/hooks/useJobs";
import { formFilterSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";


interface FindJobsProps {}

const FindJobsPage: FC<FindJobsProps> = () => {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const { filters } = useCategoryJobFilter();

  const [categories, setCategories] = useState<string[]>([]);

  const { jobs, isLoading, mutate } = useJobs(categories);

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    setCategories(val.categories);
  };

  useEffect(() => {
    mutate();
  }, [categories]);

  return (
    <>
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmitFormFilter}
        filterForms={filters}
        loading={isLoading}
        subtitle="Find your next career at companies like HubSpot, Nike, and Dropbox"
        title="dream job"
        type="job"
        data={jobs}
      />
    </>
  );
};

export default FindJobsPage;
