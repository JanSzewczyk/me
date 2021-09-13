import { SkillsContainer, SkillsSectionContainer } from "./SkillsSection.elements";
import { SectionSubtitle, SectionTitle } from "styles";
import SkillContainer from "./SkillsContent";

const SkillsSection = () => {
  return (
    <SkillsSectionContainer id={"skills"}>
      <SectionTitle light>Skills</SectionTitle>
      <SectionSubtitle light>My technical level</SectionSubtitle>

      <SkillsContainer>
        <div>
          <SkillContainer />
        </div>

        <div>
          <SkillContainer />
        </div>

        <div>
          <SkillContainer />
        </div>

        <div>
          <SkillContainer />
        </div>
      </SkillsContainer>
    </SkillsSectionContainer>
  );
};

export default SkillsSection;
