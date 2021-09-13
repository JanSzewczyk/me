import styled from "styled-components";
import { grid } from "../../../styles";
import { FaCode } from "react-icons/all";

export const SkillsContentContainer = styled.div``;

export const SkillsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  cursor: pointer;
`;

export const SkillsIcon = styled(FaCode)`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.primaryColor};
  margin-right: 0.75rem;
`;

export const SkillsTitle = styled.h1`
  color: ${({ theme }) => theme.palette.light.textColor};
  font-size: 1.125rem;

  @media screen and (min-width: 968px) {
    font-size: 1.25rem;
  }
`;

export const SkillsSubtitle = styled.span`
  font-size: 0.813rem;
  color: ${({ theme }) => theme.palette.light.textColorLight};

  @media screen and (min-width: 968px) {
    font-size: 0.875rem;
  }
`;

interface SkillsArrowProps {
  isOpen: boolean;
}
export const SkillsArrow = styled.div<SkillsArrowProps>`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.primaryColor};
  margin-left: auto;
  transition: 0.4s;
  transform: rotate(${({ isOpen }) => (isOpen ? "-180deg" : "0deg")});
`;

interface SkillsListProps {
  isOpen?: boolean;
}
export const SkillsList = styled.div<SkillsListProps>`
  ${grid};
  row-gap: 1.5rem;
  padding-left: 2.7rem;
  ${({ isOpen }) =>
    isOpen
      ? {
          height: "max-content",
          marginBottom: "2.5rem"
        }
      : {
          height: 0,
          overflow: "hidden"
        }}
`;

export const SkillsData = styled.div``;

export const SkillsDataTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const SkillsDataName = styled.h3`
  font-size: 0.938rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.light.textColor};

  @media screen and (min-width: 968px) {
    font-size: 1rem;
  }
`;

export const SkillsDataNumber = styled.span`
  font-size: 0.938rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.light.textColorLight};

  @media screen and (min-width: 968px) {
    font-size: 1rem;
  }
`;

export const SkillsBar = styled.div`
  background-color: ${({ theme }) => theme.palette.primaryColorLight};
  height: 5px;
  border-radius: 0.25rem;
`;

interface SkillsPercentageProps {
  percentage: number;
}
export const SkillsPercentage = styled.span<SkillsPercentageProps>`
  display: block;
  background-color: ${({ theme }) => theme.palette.primaryColor};
  height: 5px;
  border-radius: 0.25rem;
  width: ${({ percentage }) => `${percentage}%`};
`;
