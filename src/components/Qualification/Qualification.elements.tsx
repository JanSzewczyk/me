import styled, { css } from "styled-components";

import { Section } from "styles";
import { FaBriefcase, FaGraduationCap } from "react-icons/all";

export const QualificationSection = styled(Section)`
  background-color: ${({ theme }) => theme.palette.sectionBackgroundColor};
`;



const QualificationIcon = css`
  font-size: 1.8rem;
  margin-right: 0.25rem;
`;

export const QualificationGraduationCapIcon = styled(FaGraduationCap)`
  ${QualificationIcon};
`;

export const QualificationBriefcaseIcon = styled(FaBriefcase)`
  ${QualificationIcon};
`;

