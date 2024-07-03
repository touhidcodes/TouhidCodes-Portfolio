import { TProject } from "@/types/Project";
import LinksCard from "../LinksCard/LinksCard";
import TechnologiesCard from "../Technologiescard/TechnologiesCard";

type TProjectCardProps = {
  project: TProject;
};

const ProjectCard = ({ project }: TProjectCardProps) => {
  return (
    <div>
      <div className="card glass w-full lg:w-[500px] relative overflow-hidden">
        <figure>
          <img
            src={
              project?.thumbnail
                ? project?.thumbnail
                : "/asset/project/project.jpg"
            }
            alt="project"
          />
        </figure>
        <div className="card-body absolute inset-0 bg-white bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 glass">
          <h2 className="card-title lg:text-3xl">{project?.title}</h2>
          <p className="lg:text-xl">{project?.description}</p>
          <div>
            <TechnologiesCard technology={project?.technologies} />
          </div>

          <div className="card-actions justify-end">
            <LinksCard
              id={project?.id}
              liveSite={
                project?.frontEndLiveLink
                  ? project?.frontEndLiveLink
                  : project?.backEndLiveLink
              }
              clientSide={project?.frontEndGithubLink}
              serverSide={project?.backEndGithubLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
