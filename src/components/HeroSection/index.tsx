import { FC } from "react";
import { HeroBackground, HeroContainer, HeroContent, HeroH1, HeroP, VideoBackground } from "./HeroSectionElements";
// @ts-ignore
import Video from "../../videos/video2.mp4";

const HeroSection: FC = () => {
  return (
    <HeroContainer id={"home"}>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} />
      </HeroBackground>
      <HeroContent>
        <HeroH1>Lorem ipsum dolor sit amet, consectetur</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
