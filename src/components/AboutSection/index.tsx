import {
  AboutButtons,
  AboutContainer,
  AboutData,
  AboutDescription,
  AboutImage,
  AboutInfo,
  AboutInfoName,
  AboutInfoTitle,
  AboutSectionContainer
} from "./AboutSection.elements";
import { SectionSubtitle, SectionTitle } from "styles";

import Image from "../../images/about.svg";

const AboutSection = () => {
  return (
    <AboutSectionContainer id={"about"}>
      <SectionTitle>About Me</SectionTitle>
      <SectionSubtitle>My introduction</SectionSubtitle>

      <AboutContainer>
        <AboutImage src={Image} />
        <AboutData>
          <AboutDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </AboutDescription>

          <AboutInfo>
            <div>
              <AboutInfoTitle>08+</AboutInfoTitle>
              <AboutInfoName>
                Years <br /> experience
              </AboutInfoName>
            </div>

            <div>
              <AboutInfoTitle>08+</AboutInfoTitle>
              <AboutInfoName>
                Completed <br /> project
              </AboutInfoName>
            </div>

            <div>
              <AboutInfoTitle>02+</AboutInfoTitle>
              <AboutInfoName>
                Companies <br /> worked
              </AboutInfoName>
            </div>
          </AboutInfo>

          <AboutButtons>
            {/*  TODO fix downloading CV */}
            <a download={""} href={"assets/pdf/CV_Jan_Szewczyk.pdf"}>
              download CV
            </a>
          </AboutButtons>
        </AboutData>
      </AboutContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;
