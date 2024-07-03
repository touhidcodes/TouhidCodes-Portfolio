import Link from "next/link";
import Image from "next/image";
import { TProject } from "@/types/Project";
import { projects } from "./data";
import TechnologiesCard from "../../Card/Technologiescard/TechnologiesCard";
import LinksCard from "../../Card/LinksCard/LinksCard";

const Projects = () => {
  return (
    <div className="container mx-auto max-w-screen-xl py-10 lg:py-20">
      <h2 className="text-5xl font-bold text-center">My Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-28 mt-20">
        {projects.map((project: TProject) => (
          <div
            className="card glass w-[500px] relative overflow-hidden"
            key={project?.id}
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body absolute inset-0 bg-white bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 glass">
              <h2 className="card-title text-3xl">Toy Sparkle</h2>
              <p>
                Toys Sparkle is a toy store website where you can buy and add
                toys.
              </p>
              <TechnologiesCard
                technology={[
                  "React.JS",
                  "Node.Js",
                  "Express.Js",
                  "Firebase",
                  "MongoDB",
                  "Tailwind CSS",
                ]}
              />
              <div className="card-actions justify-end">
                <LinksCard
                  id="1"
                  frontEndLive="https://a11-toy-sprinkle.web.app/"
                  clientSide="https://github.com/touhidcodes/PH-7-Toy-Sparkle-Client"
                  serverSide="https://github.com/touhidcodes/PH-7-Toy-Sparkle-Server"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
