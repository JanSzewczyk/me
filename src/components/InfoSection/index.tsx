import {
  BtnWrapper,
  Column1,
  Column2,
  Heading,
  Image,
  ImageWrapper,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine
} from "./InfoElements";

import img from "../../images/undraw_off_road_9oae.svg";
import { Button } from "react-scroll";

const InfoSection = () => {
  return (
    <InfoContainer lightBackground id={"about"}>
      <InfoWrapper>
        <InfoRow imgStart={false}>
          <Column1>
            <TextWrapper>
              <TopLine>Lorem ipsum</TopLine>
              <Heading lightText={false}>Lorem ipsum dolor sit amet</Heading>
              <Subtitle darkText={true}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.
              </Subtitle>
              <BtnWrapper>
                <Button
                  to={"home"}
                  smooth={true}
                  duration={500}
                  spy={true}
                  // exact={true}
                  offset={-80}
                />
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImageWrapper>
              <Image src={img} />
            </ImageWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
