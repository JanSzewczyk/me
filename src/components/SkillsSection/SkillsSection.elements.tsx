import styled from "styled-components";

import { container, grid, Section } from "styles";

export const SkillsSectionContainer = styled(Section)`
  background-color: ${({ theme }) => theme.palette.light.sectionBackgroundColor};
`;

export const SkillsContainer = styled.div`
  ${container};
  ${grid};

  row-gap: 0;
`;
