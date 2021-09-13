import {
  HomeBackground,
  HomeContainer,
  HomeContent,
  HomeData, HomeDescription,
  HomeSectionContainer,
  HomeSocial,
  HomeSocialIcon,
  HomeSubtitle,
  HomeTitle,
  VideoBackground
} from "./HomeSection.elements";
// @ts-ignore
import Video from "../../videos/video2.mp4";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomeSection = () => {
  return (
    <HomeSectionContainer id={"home"}>
      <HomeBackground>
        <VideoBackground autoPlay loop muted src={Video} />
      </HomeBackground>
      <HomeContainer>
        <HomeContent>
          <HomeSocial>
            <HomeSocialIcon target="_blank" href={"https://github.com/JanSzewczyk"}>
              <FaGithub />
            </HomeSocialIcon>
            <HomeSocialIcon target="_blank" href={"https://www.linkedin.com/in/janszewczyk/"}>
              <FaLinkedin />
            </HomeSocialIcon>
          </HomeSocial>

          <HomeData>
            <HomeTitle>Hi, I'm Jan</HomeTitle>
            <HomeSubtitle>Web Developer</HomeSubtitle>
            <HomeDescription>afkksdfnaasdasdasd

              osd sdf ondfk asdf asdf. asdf asdf asd fsad fasdf asdf asdf asdf as dfas as dfas dfa sdfasdfasdf asdfasdfasdfasdf asdfasdfasdfasdfa sfd
              sdafsdfasdfasdfasdf asdf asdfasdfasdf asdf
              asdfnasdn as nfdoksn fo asd</HomeDescription>
          </HomeData>
        </HomeContent>
      </HomeContainer>
    </HomeSectionContainer>
  );
};

export default HomeSection;
