import styled from "styled-components";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { StyledMain, StyledHeaderThree, StyledParagraph, StyledContainer, StyledHeaderTwo, StyledSectionContainer } from "../StyledComponents";

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
            <StyledSectionContainer>
              <StyledHeaderThree>Boston University, College of Arts and Sciences</StyledHeaderThree>
              <StyledParagraph><strong>BA in Computer Science</strong>: Class of 2025</StyledParagraph>
              <StyledParagraph><strong>Coursework:</strong> Distributed Systems, Object-Oriented Programming, Machine Learning, Data Structures, Software Engineering, and Full Stack Development.</StyledParagraph>
            </StyledSectionContainer>

            <EducationImage 
                src="https://www.north49decals.com/cdn/shop/products/bostonuniversity.jpg?v=1588882484" 
                alt="BU Picture" 
            />
          </StyledMain>
        </StyledContainer>
        <Footer />
      </>
  );
}