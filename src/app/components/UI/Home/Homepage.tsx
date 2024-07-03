import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import EducationAndExperience from "../EducationAndExperience/EducationAndExperience";
import Footer from "../Footers/Footer";
import Hero from "../Hero/Hero";
import Projects from "../Projects/projects";
import Skills from "../Skills/Skills";

const Homepage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <EducationAndExperience />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Homepage;
