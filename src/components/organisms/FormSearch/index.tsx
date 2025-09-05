"use client";

import React, { FC } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import { LOCATION_OPTIONS } from "@/constants";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import { heroSearch } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

interface FormSearchProps {}
const FormSearch: FC<FormSearchProps> = () => {
  const form = useForm<z.infer<typeof heroSearch>>({
    resolver: zodResolver(heroSearch),
  });
  const onSubmit = (val: z.infer<typeof heroSearch>) => {
    console.log(val);
  };
  return (
    <>
      <div className="mt-6 bg-white p-4 shadow-md inline-flex items-center gap-4 relative w-max z-10 rounded-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <div className="inline-flex gap-3 items-center">
              <Search className="w-6 h-6" />
              <Input
                className="py-8 w-[300px] border-slate-100 shadow-xs"
                placeholder="Job Title or Keyword"
              />
              <MapPin className="w-6 h-6" />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      //   defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-8 w-[300px] border-slate-100 shadow-xs">
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LOCATION_OPTIONS.map((item: any, i: number) => (
                          <SelectItem value={item.label}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="">
                <Button className="py-8 px-10 text-lg">Search my job</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Researcher, Android, Admin
      </div>
    </>
  );
};

export default FormSearch;
