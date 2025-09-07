"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

interface SignUpProps {}

const SignUpPage: FC<SignUpProps> = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = async (val: z.infer<typeof signUpFormSchema>) => {
    try {
      await fetch("/api/user/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(val),
      });
      toast("Success", {
        description: "Create account success",
      });
      router.push("/sign-in");
    } catch (error) {
      console.log(error);
      toast("Error", {
        description: "Email or password is wrong",
      });
    }
  };

  return (
    <>
      <div>
        <div className="text-3xl text-center font-semibold mb-7">
          Get more opportunities
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <div className="text-gray-500 text-sm">
              Already have an account?{" "}
              <Link href={"/sign-in"} className="text-primary font-medium">
                Sign In
              </Link>
            </div>
            <div className="text-sm text-gray-500">
              By clicking `Continue`, you acknowledge that you have read and
              accept the{" "}
              <span className="text-primary font-medium">Terms of Service</span>{" "}
              and{" "}
              <span className="text-primary font-medium">Privacy Policy.</span>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default SignUpPage;
