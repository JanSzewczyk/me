import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import Qualification from "../components/Qualification";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} onToggle={handleToggle} />
      <NavBar onToggle={handleToggle} />
      {/* <HeroSection />*/}
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <Qualification />

      <InfoSection />
    </>
  );
};

export default Home;
