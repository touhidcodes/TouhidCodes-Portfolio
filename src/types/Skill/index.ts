export type TSkill = {
  id: string;
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Expert";
  skillCategoryId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TSkillCategory = {
  id: string;
  name: string;
};

interface SkillWithCategory extends TSkill {
  skillCategory: TSkillCategory;
}

export type TGroupedSkills = {
  [categoryName: string]: SkillWithCategory[];
};
