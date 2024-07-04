import AboutMe from "../AboutMe/AboutMe";
import Blogs from "../Blogs/Blogs";
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
      <Blogs />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Homepage;
