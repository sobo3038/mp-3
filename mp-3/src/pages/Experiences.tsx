import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";

import { StyledContainer, StyledMain, SectionTitle, SectionContainer, SectionHeading, StyledParagraph } from "../StyledComponents";

export function Experiences() {
  return (
      <>  
          <Header />
          <StyledContainer>
          <Nav />
          <StyledMain>
              <SectionTitle><strong>Experiences</strong></SectionTitle>
              <SectionContainer>
                  <SectionHeading>Accenture - Denver, CO</SectionHeading>
                  <StyledParagraph><strong>Enterprise Tech Arch - Intern</strong></StyledParagraph>
                  <StyledParagraph><strong>Summer 2024</strong></StyledParagraph>
                  <StyledParagraph>Worked on AI solutions for a leading networking hardware company.</StyledParagraph>
                  <StyledParagraph>Developed high-level architecture diagrams for AI-powered transaction log analysis.</StyledParagraph>
              </SectionContainer>

              <SectionContainer>
                  <SectionHeading>Agtools Inc. - Orange, CA</SectionHeading>
                  <StyledParagraph><strong>IT & Environmental Intern</strong></StyledParagraph>
                  <StyledParagraph><strong>Summer 2022 & 2023</strong></StyledParagraph>
                  <StyledParagraph>Developed sustainability proposals to optimize freight costs using analytics.</StyledParagraph>
                  <StyledParagraph>Integrated API services for real-time news aggregation.</StyledParagraph>
              </SectionContainer>
          </StyledMain>
          </StyledContainer>
          <Footer />
      </>
  );
}
