import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";

import { StyledContainer, StyledMain, SectionTitle, SectionContainer, SectionHeading, StyledList, StyledListItem } from "../StyledComponents";

export function Skills() {
  return (
      <>  
          <Header />
          <StyledContainer>
          <Nav />
          <StyledMain>
              <SectionTitle><strong>Skills</strong></SectionTitle>

              <SectionContainer>
                  <SectionHeading>Programming Languages</SectionHeading>
                  <StyledList>
                      <StyledListItem>Python, Java, GO, JavaScript, C++, Swift</StyledListItem>
                  </StyledList>
              </SectionContainer>

              <SectionContainer>
                  <SectionHeading>Web Development</SectionHeading>
                  <StyledList>
                      <StyledListItem>React, Node.js, HTML, CSS</StyledListItem>
                  </StyledList>
              </SectionContainer>

              <SectionContainer>
                  <SectionHeading>Tools & Technologies</SectionHeading>
                  <StyledList>
                      <StyledListItem>Git, VSCode, AWS, Neo4j</StyledListItem>
                  </StyledList>
              </SectionContainer>

              <SectionContainer>
                  <SectionHeading>Languages</SectionHeading>
                  <StyledList>
                      <StyledListItem>English (Fluent), Spanish (Native), Mandarin (Elementary)</StyledListItem>

                  </StyledList>
              </SectionContainer>
          </StyledMain>
          </StyledContainer>
          <Footer />
      </>
  );
}
