export type categoryJobType = {
  id: string;
  name: string;
  totalJobs: number;
};

export type JobType = {
  id: string;
  image: string;
  jobType: string;
  name: string;
  type: string;
  location: string;
  desc: string;
  category: categoryJobType;
  needs: number;
  applicants: number;
  skills: string[];
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

export type CompanyTeamType = {
  id: string;
  name: string;
  position: string;
  instagram: string;
  likedin: string;
};

export type CompanySocialMediaType = {
  id: string;
  instagram: string;
  likedin: string;
  twitter: string;
  facebook: string;
  youtube: string;
};

export type CompanyType = {
  id: string;
  image: string;
  name: string;
  totalJobs: number;
  description: string;
  // categories: string;
  website: string;
  location: string;
  industry: string;
  employee: string;
  dateFounded: string;
  techStack: string[];
  sosmed: CompanySocialMediaType;
  teams: CompanyTeamType[];
};
