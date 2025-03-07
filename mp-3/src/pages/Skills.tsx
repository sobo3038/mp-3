import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { StyledContainer, StyledParagraph, StyledMain, StyledTitle, SecContainer, SecHeading, StyledList, StyledListItem } from "../StyledComponents";

export function Skills() {
  return (
      <>  
          <Header />
          <StyledContainer>
          <Nav />
          <StyledMain>
              <StyledTitle><strong>Skills</strong></StyledTitle>

              <SecContainer>
                  <SecHeading>Programming Languages</SecHeading>
                  <StyledList>
                      <StyledParagraph>Python, Java, GO, JavaScript, C++, Swift</StyledParagraph>
                  </StyledList>

                  <SecHeading>Web Development</SecHeading>
                  <StyledList>
                      <StyledListItem>React, Node.js, HTML, CSS</StyledListItem>
                  </StyledList>

                  <SecHeading>Tools & Technologies</SecHeading>
                  <StyledList>
                      <StyledListItem>Git, VSCode, AWS, Neo4j</StyledListItem>
                  </StyledList>

                  <SecHeading>Languages</SecHeading>
                  <StyledList>
                      <StyledListItem>English (Fluent), Spanish (Native), Mandarin (Elementary)</StyledListItem>
                  </StyledList>
              </SecContainer>
          </StyledMain>
          </StyledContainer>
          <Footer />
      </>
  );
}
