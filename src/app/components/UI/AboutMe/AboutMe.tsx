import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const resumeUrl = "/assets/resume/Resume_of_Touhidur_Zaman.pdf";

const AboutMe = () => {
  return (
    <div className="mx-auto max-w-screen-xl pt-10 lg:pt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">About Me</h1>
        <Image
          src={"/assets/me/touhid-2.jpg"}
          width={200}
          height={200}
          alt="my image"
          className="rounded-full border-4 border-gray-700 mt-14"
        />
        <h1 className="text-center text-5xl chillax mt-10 mb-3">
          Hello I`&apos;`m Touhidur Zaman
        </h1>
        <a href="https://git.io/typing-svg">
          <img
            src="https://readme-typing-svg.demolab.com?font=Montserrat&weight=500&size=25&pause=1000&color=1d1e1f&center=true&vCenter=true&width=500&lines=Passionate+Full+Stack+Web+Developer;Love+to+MERN+Stack+Technologies;JavaScript+Enthusiast;Interested+in+Bioinformatics"
            alt="Typing SVG"
          />
        </a>
        <div className="mt-5">
          <p className="text-xl text-gray-800 leading-relaxed max-w-4xl text-center">
            I am a passionate programmer currently studying biochemistry and
            molecular biology. Embracing the challenges of learning programming
            alongside my studies, my passion for coding intersects with
            biochemistry and molecular biology. Eager to learn and adapt, I
            engage in team leadership and approach every challenge positively.
          </p>
        </div>
        <div className="mt-10 flex flex-col lg:block">
          <button className="btn btn-ghost font-regular">
            <a
              href={resumeUrl}
              download="Resume_of_Touhidur_Zaman.pdf"
              className="badge bg-black bg-opacity-90 rounded-md p-5 text-lg text-white flex items-center chillax font-extralight"
            >
              RESUME
              <Icon
                icon="iconoir:download"
                className="text-white h-7 w-7 ml-1"
              />
            </a>
          </button>
          <button className="btn btn-ghost font-regular">
            <p className="badge bg-black bg-opacity-90 rounded-md p-5 text-lg chillax font-extralight text-white ">
              LET`&apos;`S TALK
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
