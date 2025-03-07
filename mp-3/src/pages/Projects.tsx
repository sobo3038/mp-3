import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import { Calculator } from "../components/Calculator";
import { StyledContainer, StyledParagraph, SectionHeading, SectionTitle,StyledLink, StyledMain, StyledList } from "../StyledComponents";

// Styled components for improved alignment and styling
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 800px;
`;

const ListItem = styled.li`
    margin-bottom: 5px;
`;

const CalculatorWrapper = styled.div`
    margin-top: 5px; 
`;

export function Projects() {
  return (
      <>  
          <Header />
          <StyledContainer>
          <Nav />
          <StyledMain>
              <SectionTitle><strong>Projects</strong></SectionTitle>
              <ContentWrapper>
                  <SectionHeading>College Work</SectionHeading>
                  <StyledParagraph>Here are some of my projects:</StyledParagraph>
                  <StyledList>
                    <ListItem>
                      <StyledLink href="https://github.com/Jzhang011127/cs411-group-23" target="_blank">
                        CS411 Group Project: Weather App
                      </StyledLink>
                    </ListItem>
                    <ListItem>
                      <StyledLink href="https://github.com/sobo3038/sobo3038.github.io" target="_blank">
                        CS506 Personal Webpage with Assignments
                      </StyledLink>
                    </ListItem>
                    <ListItem>
                      <StyledLink href="https://github.com/sobo3038/CS506-final-project" target="_blank">
                        CS506 Final Project: Box Office Revenue Predictor
                      </StyledLink>
                    </ListItem>
                    <ListItem>
                      <StyledLink href="https://github.com/sobo3038/cs320-fall-2024-private" target="_blank">
                        CS320 Assignments and Projects
                      </StyledLink>
                    </ListItem>
                  </StyledList>

                  <SectionHeading>Calculator</SectionHeading>
                  <CalculatorWrapper>
                      <Calculator />
                  </CalculatorWrapper>
              </ContentWrapper>
          </StyledMain>
          </StyledContainer>
          
          <Footer />
      </>
  );
}