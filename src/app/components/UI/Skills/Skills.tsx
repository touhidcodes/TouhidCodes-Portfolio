"use client";

import { Icon } from "@iconify/react";
import SkillCard from "../../Card/SkillCard/SkillCard";
import { useGetGroupedSkillsQuery } from "@/redux/api/skillApi";
import { TSkill } from "@/types/Skill";

const Skills = () => {
  const { data: groupedSkills, isLoading } = useGetGroupedSkillsQuery({});
  console.log(groupedSkills);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading...
      </div>
    );
  }
  return (
    <div className="bg-[#151d2e]">
      <div className="mx-auto max-w-screen-xl py-10 lg:py-20">
        <h1 className="text-5xl font-bold text-center text-white">My Skills</h1>

        {Object.entries(groupedSkills?.data).map(([category, skills]) => (
          <div key={category} className="px-10 mt-10">
            <h4 className="text-white mb-3 chillax text-xl">
              {category.toUpperCase()}
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 ">
              {(skills as TSkill[]).map((skill: TSkill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
