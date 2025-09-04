"use client";

import FieldInput from "@/components/organisms/FieldInput";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon } from "lucide-react";

import { jobFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { JOBTYPES } from "@/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputSkills from "@/components/organisms/InputSkills";
import CKeditor from "@/components/organisms/CKeditor";
import InputBenefits from "@/components/organisms/InputBenefits";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { CategoryJob } from "@prisma/client";

interface PostAJobProps {}

const PostAJobPage: FC<PostAJobProps> = ({}) => {
  const { data, error, isLoading } = useSWR<CategoryJob>(
    `/api/job/categories`,
    fetcher
  );

  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });

  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <>
      <div>
        <div className="inline-flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <ArrowLeftIcon className="w-7 h-7" />
          <span className="text-2xl font-semibold">Post a Job</span>
        </div>
        <div className="my-5">
          <div className="text-lg font-semibold">Basic Information</div>
          <div className="text-gray-400">
            List out your top perks and benefits.
          </div>
        </div>
        <Separator />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-5 space-y-6 pt-6"
          >
            <FieldInput
              subtitle="Job titles must be describe
													one position"
              title="Job Title"
            >
              <FormField
                control={form.control}
                name="roles"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-[450px]"
                        placeholder="e.g. Software Engineer"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-500 text-sm">
                      At least 80 characters
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FieldInput>
            <FieldInput
              title="Type of Employment"
              subtitle="You can select multiple type of employment"
            >
              <FormField
                control={form.control}
                name="jobType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col"
                      >
                        {JOBTYPES.map((item: string, i: number) => (
                          <FormItem
                            key={item + i}
                            className="flex items-center gap-3"
                          >
                            <FormControl>
                              <RadioGroupItem value={item} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FieldInput>
            <FieldInput
              title="Salary"
              subtitle="Please specify the estimated salary range for the role."
            >
              <div className="w-[450px] flex flex-row items-center justify-between">
                <FormField
                  control={form.control}
                  name="salaryFrom"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          className="w-full"
                          placeholder="$100"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <span className="text-center">To</span>
                <FormField
                  control={form.control}
                  name="salaryTo"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          className="w-full"
                          placeholder="$500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </FieldInput>
            <FieldInput
              title="Categories"
              subtitle="You can select job categories"
            >
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Job Categories</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[450px]">
                          <SelectValue placeholder="Select Job Categories" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {data?.map((item: any) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FieldInput>
            <FieldInput
              title="Required Skills"
              subtitle="Add required skills for the job"
            >
              <InputSkills
                label="Add Skills"
                name="requiredSkills"
                form={form}
              />
            </FieldInput>
            <FieldInput
              title="Job Descriptions"
              subtitle="Job titles must be describe one position"
            >
              <CKeditor
                form={form}
                name="jobDescription"
                editorLoaded={editorLoaded}
              />
            </FieldInput>
            <FieldInput
              title="Responsibilities"
              subtitle="Outline the core responsibilities of the position"
            >
              <CKeditor
                form={form}
                name="responsibility"
                editorLoaded={editorLoaded}
              />
            </FieldInput>
            <FieldInput
              title="Who You Are"
              subtitle="Add your preferred candidates qualifications"
            >
              <CKeditor
                form={form}
                name="whoYouAre"
                editorLoaded={editorLoaded}
              />
            </FieldInput>
            <FieldInput
              title="Nice-To-Haves"
              subtitle="Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply"
            >
              <CKeditor
                form={form}
                name="niceToHave"
                editorLoaded={editorLoaded}
              />
            </FieldInput>

            <FieldInput
              title="Perks and Benefits"
              subtitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees"
            >
              <InputBenefits form={form} />
            </FieldInput>
            <div className="flex justify-end">
              <Button size={"lg"}>Do a Review</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default PostAJobPage;
