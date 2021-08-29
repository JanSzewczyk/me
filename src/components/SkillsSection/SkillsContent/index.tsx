import {
  SkillsArrow,
  SkillsBar,
  SkillsContentContainer,
  SkillsData,
  SkillsDataName,
  SkillsDataNumber,
  SkillsDataTitles,
  SkillsHeader,
  SkillsIcon,
  SkillsList,
  SkillsPercentage,
  SkillsSubtitle,
  SkillsTitle
} from "./SkillsContent";
import { FC, useState } from "react";
import { FaAngleDown } from "react-icons/all";

const SkillsContent: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SkillsContentContainer>
      <SkillsHeader onClick={() => setIsOpen((prevState) => !prevState)}>
        <SkillsIcon />
        <div>
          <SkillsTitle>Frontend Developer</SkillsTitle>
          <SkillsSubtitle>asdasd fasdf asdasd</SkillsSubtitle>
        </div>
        <SkillsArrow isopened={isOpen}>
          <FaAngleDown />
        </SkillsArrow>
      </SkillsHeader>

      <SkillsList isOpen={isOpen}>
        <SkillsData>
          <SkillsDataTitles>
            <SkillsDataName>HTML</SkillsDataName>
            <SkillsDataNumber>60%</SkillsDataNumber>
          </SkillsDataTitles>

          <SkillsBar>
            <SkillsPercentage percentage={60} />
          </SkillsBar>
        </SkillsData>

        <SkillsData>
          <SkillsDataTitles>
            <SkillsDataName>HTML</SkillsDataName>
            <SkillsDataNumber>60%</SkillsDataNumber>
          </SkillsDataTitles>

          <SkillsBar>
            <SkillsPercentage percentage={60} />
          </SkillsBar>
        </SkillsData>

        <SkillsData>
          <SkillsDataTitles>
            <SkillsDataName>HTML</SkillsDataName>
            <SkillsDataNumber>60%</SkillsDataNumber>
          </SkillsDataTitles>

          <SkillsBar>
            <SkillsPercentage percentage={60} />
          </SkillsBar>
        </SkillsData>
      </SkillsList>
    </SkillsContentContainer>
  );
};

export default SkillsContent;
