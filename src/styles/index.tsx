import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Encode Sans Expanded", sans-serif;
   
    
    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
      background: transparent;
    }
    
    &::-webkit-scrollbar-corner {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.palette.scrollbarThumbColor};
    }
  }

  html,
  body,
  #root {
    background: #181818;
    color: #f2f2f2;
  }

  h1,h2,p{
    margin: 0;
  }
  
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  img{
    max-width: 100%;
    height: auto;
    display: block; 
  }
`;

// Section
export const Section = styled.section`
  padding: 2rem 0 6rem;
`;

interface SectionTitleProps {
  light?: boolean;
}
export const SectionTitle = styled.h1<SectionTitleProps>`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ light, theme }) => (light ? theme.palette.light.textColor : theme.palette.textColor)};

  @media screen and (min-width: 968px) {
    font-size: 2.25rem;
  }
`;

interface SectionSubtitleProps {
  light?: boolean;
}
export const SectionSubtitle = styled.span<SectionSubtitleProps>`
  display: block;
  font-size: 0.813rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ light, theme }) => (light ? theme.palette.light.textColor : theme.palette.textColor)};

  @media screen and (min-width: 968px) {
    font-size: 0.875rem;
  }
`;

export const container = css`
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const grid = css`
  display: grid;
  gap: 1.5rem;
`;

export const buttonFlex = css`
  display: inline-flex;
  align-items: center;
`;

// TODO Try this
// #64cb55
