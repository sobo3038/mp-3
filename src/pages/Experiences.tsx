import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { StyledContainer, StyledMain, StyledHeaderTwo, StyledSectionContainer, StyledHeaderThree, StyledParagraph } from "../StyledComponents";

export function Experiences() {
  return (
      <>  
          <Header />
          <StyledContainer>
            <Nav />
                <StyledMain>
                    <StyledHeaderTwo><strong>Experiences</strong></StyledHeaderTwo>
                    {/*Job 1*/}
                    <StyledSectionContainer>
                        <StyledHeaderThree>Accenture - Denver, CO</StyledHeaderThree>
                        <StyledParagraph><strong>Enterprise Tech Arch Analyst | Incoming September 2025</strong></StyledParagraph>
                    </StyledSectionContainer>
                    {/*Job 2*/}
                    <StyledSectionContainer>
                        <StyledHeaderThree>Accenture - Denver, CO</StyledHeaderThree>
                        <StyledParagraph><strong>Enterprise Tech Arch Intern | June - August 2024</strong></StyledParagraph>
                        <StyledParagraph>Worked on AI solutions for a leading networking hardware company. Developed high-level architecture diagrams for AI-powered transaction log analysis.</StyledParagraph>
                    </StyledSectionContainer>
                    {/*Job 3*/}
                    <StyledSectionContainer>
                        <StyledHeaderThree>Agtools Inc. - Orange, CA</StyledHeaderThree>
                        <StyledParagraph><strong>IT & Environmental Intern | Summer 2022 & Summer 2023</strong></StyledParagraph>
                        <StyledParagraph>Developed sustainability proposals to optimize freight costs using analytics. Integrated API services for real-time news aggregation.</StyledParagraph>
                    </StyledSectionContainer>
                </StyledMain>
          </StyledContainer>
          <Footer />
      </>
  );
}
