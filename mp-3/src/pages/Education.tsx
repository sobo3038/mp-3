import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { StyledMain, StyledHeaderThree, StyledParagraph, StyledContainer, StyledHeaderTwo, StyledSectionContainer } from "../StyledComponents";

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 700px; 
  text-align: left;
`;

const EducationImage = styled.img`
  width: 30%;
  margin-top: 5%;
`;

export function Education() {
  return (
      <>
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
            <StyledHeaderTwo><strong>Education</strong></StyledHeaderTwo>
                <EducationContainer>
                    <ContentWrapper>
                      <StyledSectionContainer>
                      <StyledHeaderThree>Boston University, College of Arts and Sciences</StyledHeaderThree>
                        <StyledParagraph><strong>BA in Computer Science</strong>: Class of 2025</StyledParagraph>
                        <StyledParagraph><strong>Coursework:</strong> Distributed Systems, Object-Oriented Programming, Machine Learning, Data Structures, Software Engineering, and Full Stack Development.</StyledParagraph>
                      </StyledSectionContainer>
                        
                    </ContentWrapper>
                    <EducationImage 
                        src="https://www.north49decals.com/cdn/shop/products/bostonuniversity.jpg?v=1588882484" 
                        alt="BU Picture" 
                    />
                </EducationContainer>
        </StyledMain>
        </StyledContainer>
        <Footer />
      </>
  );
}
