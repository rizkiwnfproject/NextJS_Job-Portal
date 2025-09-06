export type JobType = {
  image: string;
  jobType: string;
  name: string;
  type: string;
  location: string;
  desc: string;
  categories: string[];
  needs: number;
  applicants: number;
};

export type OptionType = {
  id: string;
  label: string;
};

export type filterFormType = {
  label: string;
  name: string;
  items: OptionType[];
};

export type CompanyType = {
  image: string;
  totalJobs: number;
  name: string;
  description: string;
  categories: string;
};
