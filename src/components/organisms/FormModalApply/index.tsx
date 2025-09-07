"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { formApplySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import UploadField from "../UploadField";

interface FormModalApplyProps {}

const FormModalApply: FC<FormModalApplyProps> = () => {
  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
  });

  const onSubmit = (val: z.infer<typeof formApplySchema>) => {
    console.log(val);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"lg"} className="text-lg px-12 py-6">
            Apply
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <div>
            <div className="inline-flex items-center gap-4">
              <div>
                <Image
                  src={"/images/company2.png"}
                  alt="/images/company2.png"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <div className="text-lg font-semibold">
                  Social Media Assistant
                </div>
                <div className="text-gray-500">
                  Agency . Paris, France . Full-Time
                </div>
              </div>
            </div>
            <Separator className="my-5" />
            <div className="mb-5">
              <div className="font-semibold text-lg">
                Submit your application
              </div>
              <div className="text-gray-500 text-sm mt-2">
                The following is required and will onl be shared with Nomad
              </div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="previousJobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current of previous job title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your previous job title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Separator className="my-5" />
                <div className="mb-5">
                  <div className="font-semibold text-lg">Links</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Link to your LinkedIn URL"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="portofolio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portofolio URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Link to your Portofolio URL"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional information</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Add a cover letter or anything else you want to share"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <UploadField form={form} />
                <Button className="w-full">Apply</Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormModalApply;
