import AboutMe from "../AboutMe/AboutMe";
import EducationAndExperience from "../EducationAndExperience/EducationAndExperience";
import Hero from "../Hero/Hero";
import Projects from "../Projects/projects";

const Homepage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <EducationAndExperience />
    </>
  );
};

export default Homepage;
