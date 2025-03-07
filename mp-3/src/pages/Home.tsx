import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { StyledMain,StyledParagraph, StyledContainer, HomePageContainer,ProfileImage, StyledSectionContainer, StyledHeaderTwo } from "../StyledComponents";

export function Home() {
  return (
      <>
        <Header />
        <StyledContainer>
          <Nav />
            <StyledMain>
                <StyledHeaderTwo><strong>Home</strong></StyledHeaderTwo>
                    <HomePageContainer>
                      <ProfileImage src="picture.jpeg" alt="Profile Picture" />
                      <StyledSectionContainer><StyledParagraph> My name is Sofia Boada, and I am a senior studying Computer Science at Boston University. After graduation, I plan to work at Accenture as a tech architect, specializing in AI and ML.</StyledParagraph></StyledSectionContainer>
                    </HomePageContainer>
            </StyledMain>
        </StyledContainer>
        <Footer />
      </>
  );
}
