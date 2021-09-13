import styled from "styled-components";

import { container, grid, Section } from "styles";

export const AboutSectionContainer = styled(Section)`
  background: ${({ theme }) => theme.palette.sectionBackgroundColor};
`;

export const AboutContainer = styled.div`
  ${container};
  ${grid};

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AboutImage = styled.img`
  width: 200px;
  justify-self: center;
  align-self: center;
`;

export const AboutData = styled.div``;

export const AboutDescription = styled.p`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2.5rem;
`;

export const AboutInfoTitle = styled.span`
  display: block;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #f2f2f2; // TODO change color

  @media screen and (min-width: 968px) {
    font-size: 1.5rem;
  }
`;

export const AboutInfoName = styled.span`
  display: block;
  text-align: center;
  font-size: 0.75rem;

  @media screen and (min-width: 968px) {
    font-size: 0.813rem;
  }
`;

export const AboutButtons = styled.div`
  display: flex;
  justify-content: center;
`;
