import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { StyledMain,StyledParagraph, StyledContainer, SecContainer, StyledTitle } from "../StyledComponents";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeImage = styled.img`
  width: 40%;
  margin-bottom: 5%;
`;



export function Home() {
  return (
      <>
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
            <StyledTitle><strong>Home</strong></StyledTitle>
                <HomeContainer>
                <HomeImage src="picture.jpeg" alt="Profile Picture" />
                <SecContainer>
                      <StyledParagraph>
                          My name is Sofia Boada, and I am a senior studying Computer Science at Boston University. 
                      </StyledParagraph>
                      <StyledParagraph>
                          After graduation, I plan to work at Accenture as a tech architect, specializing in AI and ML.
                      </StyledParagraph>
                </SecContainer>
                    
                </HomeContainer>
        </StyledMain>
        </StyledContainer>
        <Footer />
      </>
  );
}
