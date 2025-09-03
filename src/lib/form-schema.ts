import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ message: "Job Tittle Is Reuired" })
    .min(3, { message: "Job Title must be at least 3 characters" }),
  jobType: z.enum(JOBTYPES, { message: "You Need to Select a Job Type" }),
  salaryFrom: z.string({ message: "Salary From is Required" }).nonempty({ message: "Salary From is Required" }),
  salaryTo: z.string({ message: "Salary To is Required" }).nonempty({ message: "Salary To is Required" }),
  categoryId: z.string({ message: "Job Category is Required" }).nonempty({ message: "You Need to Select a Category" }),
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
