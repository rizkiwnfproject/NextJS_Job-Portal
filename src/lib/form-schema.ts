import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ message: "Job Tittle Is Reuired" })
    .min(3, { message: "Job Title must be at least 3 characters" }),
  jobType: z.enum(JOBTYPES, { message: "You Need to Select a Job Type" }),
  salaryFrom: z
    .string({ message: "Salary From is Required" })
    .nonempty({ message: "Salary From is Required" }),
  salaryTo: z
    .string({ message: "Salary To is Required" })
    .nonempty({ message: "Salary To is Required" }),
  categoryId: z
    .string({ message: "Job Category is Required" })
    .nonempty({ message: "You Need to Select a Category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required Skill Must be at least 1 skills" }),
  jobDescription: z
    .string({ message: "Job Description is Required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
  responsibility: z
    .string({ message: "Responsibility is Required" })
    .min(10, { message: "Responsibilities must be at least 10 characters" }),
  whoYouAre: z
    .string({ message: "Who You Are is Required" })
    .min(10, { message: "Who You Are must be at least 10 characters" }),
  niceToHave: z
    .string({ message: "Nice-To-Have is Required" })
    .min(10, { message: "Nice To Have must be at least 10 characters" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }),
});

export const overviewFormSchema = z.object({
  image: z.any(),
  // .refine((item: any) => item?.name, { message: "Image is required" }),
  name: z.string({ message: "Name is required" }),
  website: z.string({ message: "Website is required" }),
  location: z.string({ message: "Location is required" }),
  employee: z.string({ message: "Employee is required" }),
  industry: z.string({ message: "Industry is required" }),
  dateFounded: z.date({ message: "Date Founded is required" }),
  techStack: z
    .string({ message: "techStack is required" })
    .array()
    .nonempty({ message: "Tech Stack must be at least 1" }),
  description: z.string({ message: "Description is required" }),
});

export const socialMediaFormSchema = z.object({
  facebook: z.string({ message: "Facebook is required" }),
  instagram: z.string({ message: "Instagram is required" }),
  linkedin: z.string({ message: "Linkedin is required" }),
  twitter: z.string({ message: "Twitter is required" }),
  youtube: z.string({ message: "Youtube is required" }),
});

export const teamFormSchema = z.object({
  name: z.string({ message: "Name is required" }),
  position: z.string({ message: "Position is required" }),
  instagram: z.string({ message: "Instagram is required" }),
  linkedin: z.string({ message: "Linkedin is required" }),
});

export const signInFormSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Input must be email format" }),
  password: z.string({ message: "Password is required" }),
});

export const signUpFormSchema = z.object({
  name: z.string({ message: "Name is required" }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Input must be email format" }),
  password: z.string({ message: "Password is required" }),
});

export const heroSearch = z.object({
  title: z.string().nullable(),
  location: z.string().nullable(),
});
