"use client";

import LinksCard from "@/app/components/Card/LinksCard/LinksCard";
import TechnologiesCard from "@/app/components/Card/Technologiescard/TechnologiesCard";
import { useGetProjectByIdQuery } from "@/redux/api/projectApi";

type PropTypes = {
  params: {
    id: string;
  };
};

const ProjectDetails = ({ params }: PropTypes) => {
  const { data: project, isLoading } = useGetProjectByIdQuery(params?.id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-xl py-10 lg:py-20">
      <h1 className="text-6xl text-center font-bold">{project?.data?.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  mt-10 lg:mt-20">
        <div>
          <img
            src={project?.data?.thumbnail}
            alt={project?.data?.title}
            className="rounded-lg shadow-lg"
          />
          <p className=" mt-4 text-xl p-5 border-2 border-gray-500 rounded-md">
            {project?.data?.description}
          </p>
        </div>
        <div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Technologies Used:</h2>
            <TechnologiesCard technology={project?.data?.technologies} />
          </div>
          <h2 className="text-2xl font-bold mb-2 mt-5">Project Details:</h2>
          <p className="text-xl">{project?.data?.details}</p>
          <div className="mt-5 flex flex-row items-center">
            <h2 className="text-2xl font-bold">Category:</h2>
            <p className="text-xl ml-5">{project?.data?.category?.name}</p>
          </div>
          <div className="mb-2 mt-5  flex flex-row items-center">
            <h2 className="text-2xl font-bold mr-5">Links:</h2>
            <LinksCard
              liveSite={
                project?.data?.frontEndLiveLink
                  ? project?.data?.frontEndLiveLink
                  : project?.data?.backEndLiveLink
              }
              clientSide={project?.data?.frontEndGithubLink}
              serverSide={project?.data?.backEndGithubLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
