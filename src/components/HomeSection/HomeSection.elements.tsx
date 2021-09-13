import styled from "styled-components";

export const HomeSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  height: 100vh;
  position: relative;
  z-index: 1;
  margin-top: -80px;
`;

export const HomeBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HomeContainer = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 64px);
  margin-left: 1rem;
  margin-right: 1rem;
  row-gap: 1rem;
`;

export const HomeContent = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: auto 1fr;
  padding: 3.5rem 0;
  align-items: center;
`;

export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
`;

export const HomeSocialIcon = styled.a`
  font-size: 2rem;
  color: white;
  margin-bottom: 0.5rem;

  &:hover {
    color: green;
  }
`;

export const HomeData = styled.div`
  display: grid;
  max-width: 600px;
`;

export const HomeTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const HomeSubtitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #01bf71;
`;

export const HomeDescription = styled.p`
  margin-bottom: 2rem;
`;
