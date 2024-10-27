"use client";

import { TProject } from "@/types/Project";
import { useGetFeaturedProjectsQuery } from "@/redux/api/projectApi";
import ProjectCard from "../../Card/ProjectCard/ProjectCard";
import Link from "next/link";

const Projects = () => {
  const { data: projects, isLoading } = useGetFeaturedProjectsQuery({});

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
        {projects?.data?.data.slice(0, 4).map((project: TProject) => (
          <ProjectCard project={project} key={project?.id} />
        ))}
      </div>
      <div className="mt-14 flex items-center justify-center">
        <Link href="/projects">
          <button className="btn btn-ghost font-regular">
            <p className="badge bg-black bg-opacity-90 rounded-md p-5 text-lg chillax font-extralight text-white ">
              Explore More
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
