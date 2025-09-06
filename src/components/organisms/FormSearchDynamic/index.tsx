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
import { OptionType } from "@/types";

interface FormSearchDynamicProps {}
const FormSearchDynamic: FC<FormSearchDynamicProps> = () => {
  const form = useForm<z.infer<typeof heroSearch>>({
    resolver: zodResolver(heroSearch),
  });
  const onSubmit = (val: z.infer<typeof heroSearch>) => {
    console.log(val);
  };
  return (
    <>
      <div className="mx-auto w-max">
        <div className="bg-white p-4 shadow-md inline-flex items-center gap-4 relative w-max z-10 rounded-lg text-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <div className="inline-flex gap-3 items-center">
                <Search className="w-5 h-5" />
                <Input
                  className="py-5 w-[300px] border-slate-100 shadow-xs"
                  placeholder="Job Title or Keyword"
                />
                <MapPin className="w-5 h-5" />
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
                          <SelectTrigger className="py-5 w-[350px] border-slate-100 shadow-xs">
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {LOCATION_OPTIONS.map(
                            (item: OptionType, i: number) => (
                              <SelectItem key={i} value={item.label}>
                                {item.label}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="">
                  <Button>Search</Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className="text-muted-foreground mt-3">
          Popular : UI Designer, UX Researcher, Android, Admin
        </div>
      </div>
    </>
  );
};

export default FormSearchDynamic;
