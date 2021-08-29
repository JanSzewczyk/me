import styled from "styled-components";
import {buttonFlex, container} from "styles";

export const QualificationContainer = styled.div`
  ${container};
`;

export const QualificationSections = styled.div``;

export const QualificationButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

interface QualificationButtonProps {
  active: boolean;
}
export const QualificationButton = styled.div<QualificationButtonProps>`
  ${buttonFlex};
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.primaryColor};
  }
  color: ${({ active, theme }) => (active ? theme.palette.primaryColor : theme.palette.textColor)};

  @media screen and (min-width: 968px) {
    font-size: 1.25rem;
  }
`;