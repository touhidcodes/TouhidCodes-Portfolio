import { Icon } from "@iconify/react";

const EducationAndExperience = () => {
  const experience = [
    {
      id: 1,
      title: "MERN Developer",
      company: "Employee Pro",
      duration: "Aug 2023 - Nov 2023",
    },
    {
      id: 2,
      title: "Internship Trainee of Bioinformatics ",
      company: "BioPc- Lab of Research and Training",
      duration: "Nov 2022 - Dec 2022",
    },
    {
      id: 3,
      title: "Data Analysis and Visualization with R",
      company: "Research Tech Hub",
      duration: "Apr 2024",
    },
    {
      id: 4,
      title: "Serving as Full Stack Web Developer",
      company: "1 years of experience",
      duration: "2023 - Present",
    },
  ];

  const education = [
    {
      id: 1,
      course: "Biochemistry and Molecular Biology",
      institution: "BSMRSTU, Gopalganj",
      duration: "2020 - Present",
    },
    {
      id: 2,
      course: "Higher Secondary School",
      institution: "Sarsha, Upazila College, Sarsha, Jashore",
      duration: "2018",
    },
    {
      id: 3,
      course: "Complete Web Development",
      institution: "Programming Hero",
      duration: "Jan 2023 - Aug 2023",
    },
    {
      id: 4,
      course: "Apollo Next Level Web Development",
      institution: "Programming Hero",
      duration: "Nov 2013 - Present",
    },
  ];

  return (
    <div className="py-10 lg:py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-5 lg:px-20">
          {/* Education Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-10">
              <Icon icon="fluent-mdl2:education" className="h-16 w-16 mr-5" />
              <h1 className="text-5xl font-bold text-center">My Education</h1>
            </div>
            {education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-lg p-6 shadow-md glass bg-gray-300"
              >
                <h2 className="text-2xl font-bold">{edu.course}</h2>
                <p className="text-xl">{edu.institution}</p>
                <p className="text-xl">{edu.duration}</p>
              </div>
            ))}
          </div>
          {/* Experience Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-10">
              <Icon icon="ph:certificate" className="h-16 w-16 mr-5" />
              <h1 className="text-5xl font-bold text-center">My Experience</h1>
            </div>
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="rounded-lg p-6 shadow-md glass bg-gray-300"
              >
                <h2 className="text-2xl font-bold">{exp.title}</h2>
                <p className="text-lg">{exp.company}</p>
                <p className="text-lg">{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
