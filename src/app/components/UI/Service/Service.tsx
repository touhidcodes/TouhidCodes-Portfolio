import React from "react";
import Image from "next/image";

const MyServices = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description:
        "End-to-end development services for web applications, covering both frontend and backend technologies. Expertise in React.js, Next.js, Express.js, Node.js, MongoDB, PostgreSQL and more.",
      icon: "/assets/icons/fullstack.png",
    },
    {
      title: "Frontend Development",
      description:
        "Crafting beautiful and responsive UIs with modern frontend technologies like React.js, Next.js, TypeScript, Redux, Tailwind CSS, and Material UI.",
      icon: "/assets/icons/frontend.png",
    },
    {
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications with Node.js, Express.js, TypeScript, Prisma, PostgreSQL, Mongoose, and MongoDB.",
      icon: "/assets/icons/backend.png",
    },
  ];

  return (
    <div className="bg-[#151d2e] pb-20 px-5 md:px-20">
      <div className="mx-auto max-w-screen-xl text-white">
        <h1 className="text-5xl font-bold text-center mb-10">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[rgb(40,50,75)] p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-5">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
