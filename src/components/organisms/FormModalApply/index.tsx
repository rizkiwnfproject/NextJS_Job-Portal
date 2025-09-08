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
import { useSession } from "next-auth/react";
import { Dot } from "lucide-react";
import { supabaseUploadFile } from "@/lib/supabase";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface FormModalApplyProps {
  image: string;
  roles: string;
  location: string;
  jobType: string;
  company: string;
  id: string;
  isApply: boolean;
}

const FormModalApply: FC<FormModalApplyProps> = ({
  image,
  jobType,
  location,
  roles,
  company,
  id,
  isApply,
}) => {
  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
  });
  const router = useRouter();
  const { data: session } = useSession();

  const onSubmit = async (val: z.infer<typeof formApplySchema>) => {
    try {
      const { fileName, error } = await supabaseUploadFile(
        val.resume,
        "applicant"
      );

      const reqData = {
        userId: session?.user.id,
        jobId: id,
        resume: fileName,
        coverLetter: val.coverLetter,
        linkedin: val.linkedin,
        portofolio: val.portofolio,
        previousJobTitle: val.previousJobTitle,
        phone: val.phone,
      };

      if (error) {
        throw "error";
      }

      await fetch("/api/job/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqData),
      });

      toast("Success", {
        description: "Success Apply Job",
      });

      router.replace("/");
    } catch (error) {
      console.log(error);
      toast("Failed", {
        description: "Failed Apply Job",
      });
    }
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
                <Image src={image} alt={image} width={60} height={60} />
              </div>
              <div>
                <div className="text-lg font-semibold">{roles}</div>
                <div className="text-gray-500 inline-flex gap-1">
                  {company} <Dot /> {location} <Dot /> {jobType}
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
                <Button type="submit" className="w-full">
                  Apply
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormModalApply;
