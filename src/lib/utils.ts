import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import bcrypt from "bcryptjs";
import moment from "moment";
import { categoryJobType, JobType, OptionType } from "@/types";
import { supabaseGetPublicUrl } from "./supabase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json() as Promise<JSON>;
}

export const dateFormat = (date: any, format: string = "DD MMM yyyy") => {
  return moment(date).format(format);
};

export const parsingCategories = (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    return data.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        totalJobs: item._count.Job,
      };
    }) as categoryJobType[];
  }
  return [];
};

export const parsingJobs = async (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    return await Promise.all(
      data.map(async (item: any) => {
        let imageName = item.Company?.CompanyOverview[0]?.image;
        let imageUrl;

        if (imageName) {
          // imageUrl = await supabaseGetPublicUrl(imageName, "company");
          const { publicUrl } = await supabaseGetPublicUrl(
            imageName,
            "company"
          );
          imageUrl = publicUrl;
        } else {
          imageUrl = "/images/company2.png";
        }

        const job: JobType = {
          id: item.id,
          name: item.roles,
          applicants: item.applicants,
          category: item.CategoryJob,
          desc: item.description,
          image: imageUrl,
          jobType: item.jobType,
          location: item.Company?.CompanyOverview[0]?.location,
          needs: item.needs,
          type: item.CategoryJob.name,
          skills: item.requiredSkills,
        };
        return job;
      })
    );
  }
  return [];
};

export const parsingCategoriesToOptions = (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    return data.map((item: any) => {
      return {
        id: item.id,
        label: item.name,
      } as OptionType;
    }) as OptionType[];
  }
  return [];
};
