import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Calculator } from "../components/Calculator";
import { StyledContainer, StyledParagraph, StyledHeaderThree, StyledSectionContainer, StyledHeaderTwo, StyledLink, StyledMain } from "../StyledComponents";
import { ListItem, CalculatorWrapper } from "../StyledComponents";

export function Projects() {
  return (
      <>  <Header />
          <StyledContainer>
              <Nav />
              <StyledMain>
                  <StyledHeaderTwo><strong>Projects</strong></StyledHeaderTwo>
                  {/*Github Links*/}
                  <StyledSectionContainer>
                      <StyledHeaderThree>College Work</StyledHeaderThree>
                      <StyledParagraph>Here are some of my projects:</StyledParagraph>
                      <ListItem><StyledLink href="https://github.com/Jzhang011127/cs411-group-23" target="_blank"> CS411 Group Project: Weather App</StyledLink></ListItem>
                      <ListItem><StyledLink href="https://github.com/sobo3038/sobo3038.github.io" target="_blank">CS506 Personal Webpage with Assignments</StyledLink></ListItem>
                      <ListItem><StyledLink href="https://github.com/sobo3038/CS506-final-project" target="_blank">CS506 Final Project: Box Office Revenue Predictor</StyledLink></ListItem>
                      <ListItem><StyledLink href="https://github.com/sobo3038/cs320-fall-2024-private" target="_blank">CS320 Assignments and Projects</StyledLink></ListItem>
                  </StyledSectionContainer>
                  {/*Calc*/}
                  <StyledSectionContainer>
                      <StyledHeaderThree>Calculator</StyledHeaderThree>
                      <CalculatorWrapper>
                          <Calculator />
                      </CalculatorWrapper>
                  </StyledSectionContainer>

              </StyledMain>
          </StyledContainer>
          <Footer /> </>
  );
}
