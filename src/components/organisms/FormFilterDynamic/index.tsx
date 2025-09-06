import { Form } from "@/components/ui/form";
import React, { FC } from "react";
import CheckboxForms from "./CheckboxForms";
import { filterFormType } from "@/types";
import { Button } from "@/components/ui/button";

interface FormFilterDynamicProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void>;
  filterForms: filterFormType[];
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
  filterForms,
  formFilter,
  onSubmitFilter,
}) => {
  return (
    <>
      <Form {...formFilter}>
        <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
          {filterForms.map((item: filterFormType, i: number) => (
            <CheckboxForms
              key={i}
              formFilter={formFilter}
              items={item.items}
              label={item.label}
              name={item.name}
            />
          ))}

          <Button className="w-full mt-5">Apply Filter</Button>
          <Button variant={"outline"} className="w-full mt-3">
            Reset Filter
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormFilterDynamic;
