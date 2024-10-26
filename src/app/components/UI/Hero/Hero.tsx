import "./Hero.css";
import image from "../../../../../public/assets/me/touhid.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#1d1e1f] md:h-screen pt-20">
      <div className="mx-auto max-w-screen-xl md:min-h-screen text-white ">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-5  px-5 lg:px-10 py-5 items-center lg:ml-10">
          <div className="col-span-3">
            <h1 className=" text-xl lg:text-5xl text-center lg:text-start mb-5">
              Hi, I am{" "}
              <span className="gradient-text font-semibold">
                Touhidur Zaman
              </span>
            </h1>
            <h1 className=" text-6xl lg:text-8xl font-light text-center lg:text-start">
              Full Stack <br />
              <span className="text-5xl lg:text-7xl">Web Developer</span>
            </h1>
            <p className="text-xl text-zinc-400 lg:pr-40 mt-5 text-center lg:text-start">
              Full Stack Web Development & Web Design, <br /> Both front-end &
              back-end services to build your imagination.
            </p>
            <div className="flex items-center mt-7 text-xl">
              <div className="hidden lg:block">
                <Link href="#projects">
                  <button className="btn btn-ghost font-regular">
                    <p className=" badge  text-white bg-opacity-10 rounded-md p-5 text-lg chillax font-extralight">
                      PROJECTS
                    </p>
                  </button>
                </Link>
                <Link href="#skills">
                  <button className="btn btn-ghost font-regular">
                    <p className=" badge text-white bg-opacity-10 rounded-md p-5 text-lg chillax font-extralight">
                      SKILLS
                    </p>
                  </button>
                </Link>
                <Link
                  href={`${process.env.NEXT_PUBLIC_TOUHIDCODES_RESUME_LINK}`}
                  target="_blank"
                >
                  <button className="btn btn-ghost font-regular">
                    <p className=" badge text-white bg-opacity-10 rounded-md p-5 text-lg chillax font-extralight">
                      RESUME
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto col-span-2 z-0">
            <div className="box w-full">
              <div className="content">
                <Image
                  src={image}
                  alt="TouhidCodes"
                  className="rounded-full border-4 border-gray-800 border-opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
