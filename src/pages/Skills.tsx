import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { StyledContainer, StyledMain, StyledHeaderTwo, StyledSectionContainer, StyledHeaderThree, StyledList } from "../StyledComponents";

export function Skills() {
  return (
      <>  <Header />
          <StyledContainer>
          <Nav />
          <StyledMain>
              <StyledHeaderTwo><strong>Skills</strong></StyledHeaderTwo>
              <StyledSectionContainer>
                  {/*Skill 1*/}
                  <StyledHeaderThree>Programming Languages</StyledHeaderThree>
                      <StyledList>Python, Java, GO, JavaScript, C++, Swift</StyledList>
                  {/*Skill 2*/}
                  <StyledHeaderThree>Web Development</StyledHeaderThree>
                      <StyledList>React, Node.js, HTML, CSS</StyledList>
                  {/*Skill 3*/}
                  <StyledHeaderThree>Tools & Technologies</StyledHeaderThree>
                      <StyledList>Git, VSCode, AWS, Neo4j</StyledList>
                  {/*Skill 4*/}
                  <StyledHeaderThree>Languages</StyledHeaderThree>
                      <StyledList>English (Fluent), Spanish (Native), Mandarin (Elementary)</StyledList>
              </StyledSectionContainer>
          </StyledMain>
          </StyledContainer>
          <Footer /> </>
  );
}
