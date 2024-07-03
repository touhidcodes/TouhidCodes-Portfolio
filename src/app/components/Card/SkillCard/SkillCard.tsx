import { Icon } from "@iconify/react";

type TSkillCardProps = {
  icon: string;
  skill: string;
  level: string;
};

const SkillCard = ({ icon, skill, level }: TSkillCardProps) => {
  return (
    <div className="flex justify-center lg:justify-start items-center bg-[rgb(40,50,75)] text-white chillax py-2 rounded-md lg:pl-3">
      <Icon icon={icon} className="w-6 h-6" />
      <h1 className="mx-1 pl-2">{skill} </h1>
      <p className=" text-zinc-300">( {level} )</p>
    </div>
  );
};

export default SkillCard;
