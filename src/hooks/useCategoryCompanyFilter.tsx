import { fetcher, parsingCategoriesToOptions } from "@/lib/utils";
import { filterFormType } from "@/types";
import { useMemo } from "react";
import useSWR from "swr";

const useCategoryCompanyFilter = () => {
  const { data, isLoading, error } = useSWR("/api/company/industry", fetcher);

  const categories = useMemo(
    () => parsingCategoriesToOptions(data, isLoading, error, true),
    [data, isLoading, error]
  );

  const filters = useMemo(() => {
    return [
      {
        name: "industry",
        label: "Industry",
        items: categories,
      },
    ] as filterFormType[];
  }, [categories]);

  console.log(filters);
  

  return {
    filters,
  };
};

export default useCategoryCompanyFilter;
