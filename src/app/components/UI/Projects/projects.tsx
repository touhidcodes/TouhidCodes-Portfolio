"use client";

import { TProject } from "@/types/Project";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";
import ProjectCard from "../../Card/ProjectCard/ProjectCard";

const Projects = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="container mx-auto max-w-screen-xl py-10 lg:py-20"
      id="projects"
    >
      <h2 className="text-5xl font-bold text-center">My Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-28 mt-20">
        {projects?.data?.data.map((project: TProject) => (
          <ProjectCard project={project} key={project?.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
