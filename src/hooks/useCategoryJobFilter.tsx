import { fetcher, parsingCategoriesToOptions } from "@/lib/utils";
import { filterFormType } from "@/types";
import { useMemo } from "react";
import useSWR from "swr";

const useCategoryJobFilter = () => {
  const { data, isLoading, error } = useSWR("/api/job/categories", fetcher);

  const categories = useMemo(
    () => parsingCategoriesToOptions(data, isLoading, error),
    [data, isLoading, error]
  );

  const filters = useMemo(() => {
    return [
      {
        name: "categories",
        label: "Categories",
        items: categories,
      },
    ] as filterFormType[];
  }, [categories]);

  console.log(filters);

  return {
    filters,
  };
};

export default useCategoryJobFilter;
