import { ArrowRight, LayoutPanelLeft } from "lucide-react";
import React, { FC } from "react";
interface CategoryItemProps {
  name: string;
  totalJobs: number;
}

const CategoryItem: FC<CategoryItemProps> = ({ name, totalJobs }) => {
  return (
    <>
      <div className="border border-border p-8 cursor-pointer transition-colors group hover:border-primary hover:bg-primary hover:text-white">
        <LayoutPanelLeft className="w-12 h-12 text-primary group-hover:text-white" />
        <div className="mt-7">
          <div className="text-2xl font-semibold">{name}</div>
          <div className="text-muted-foreground inline-flex w-full justify-between items-center gap-1 mt-1 group-hover:text-white">
            <span className="text-sm">{totalJobs} Jobs available</span>
            <ArrowRight className="hover:text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
