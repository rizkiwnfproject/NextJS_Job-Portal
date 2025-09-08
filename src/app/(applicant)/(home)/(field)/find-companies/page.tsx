"use client";

import ExploreDataContainer from "@/cointainers/ExploreDataContainer";
import useCategoryCompanyFilter from "@/hooks/useCategoryCompanyFilter";
import useCompanies from "@/hooks/useCompanies";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface FindCompaniesProps {}

const FindCompaniesPage: FC<FindCompaniesProps> = () => {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const { filters } = useCategoryCompanyFilter();

  const [categories, setCategories] = useState<string[]>([]);

  const { companies, isLoading, mutate } = useCompanies(categories);

  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterCompanySchema>
  ) => {
    setCategories(val.industry);
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
        subtitle="Find the dream companies you dream work for"
        title="dream companies"
        type="company"
        data={companies}
      />
    </>
  );
};

export default FindCompaniesPage;
