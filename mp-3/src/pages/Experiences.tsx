import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { StyledContainer, StyledMain, StyledTitle, SecContainer, SecHeading, StyledParagraph } from "../StyledComponents";

export function Experiences() {
  return (
      <>  
          <Header />
          <StyledContainer>
          <Nav />
          <StyledMain>
              <StyledTitle><strong>Experiences</strong></StyledTitle>
              <SecContainer>
                  <SecHeading>Accenture - Denver, CO</SecHeading>
                  <StyledParagraph><strong>Enterprise Tech Arch - Intern</strong></StyledParagraph>
                  <StyledParagraph><strong>Summer 2024</strong></StyledParagraph>
                  <StyledParagraph>Worked on AI solutions for a leading networking hardware company.</StyledParagraph>
                  <StyledParagraph>Developed high-level architecture diagrams for AI-powered transaction log analysis.</StyledParagraph>
              </SecContainer>

              <SecContainer>
                  <SecHeading>Agtools Inc. - Orange, CA</SecHeading>
                  <StyledParagraph><strong>IT & Environmental Intern</strong></StyledParagraph>
                  <StyledParagraph><strong>Summer 2022 & 2023</strong></StyledParagraph>
                  <StyledParagraph>Developed sustainability proposals to optimize freight costs using analytics.</StyledParagraph>
                  <StyledParagraph>Integrated API services for real-time news aggregation.</StyledParagraph>
              </SecContainer>
          </StyledMain>
          </StyledContainer>
          <Footer />
      </>
  );
}
