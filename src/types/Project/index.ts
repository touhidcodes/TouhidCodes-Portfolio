export type TProject = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  frontEndGithubLink?: string | null;
  backEndGithubLink?: string | null;
  frontEndLiveLink?: string | null;
  backEndLiveLink?: string | null;
  details: string;
  thumbnail?: string | null;
  featured: boolean;
  categoryId: string;
};
