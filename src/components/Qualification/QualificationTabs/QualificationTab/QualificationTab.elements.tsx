import styled from "styled-components";

export const QualificationContent = styled.div``;

export const QualificationData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
`;

export const QualificationTitle = styled.h3`
  font-size: 0.938rem;
  font-weight: 500;

  @media screen and (min-width: 968px) {
    font-size: 1rem;
  }
`;

export const QualificationSubtitle = styled.span`
  display: inline-block;
  font-size: 0.813rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 968px) {
    font-size: 0.875rem;
  }
`;

export const QualificationCalendar = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.textColorLight};

  @media screen and (min-width: 968px) {
    font-size: 0.813rem;
  }

  svg {
    margin-right: 1rem;
  }
`;

export const QualificationRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${({ theme }) => theme.palette.primaryColor};
  border-radius: 50%;
`;

export const QualificationLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primaryColor};
  transform: translate(6px, -7px);
`;