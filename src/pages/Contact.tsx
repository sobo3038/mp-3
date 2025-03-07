import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Nav } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { StyledMain, StyledContainer, StyledParagraph,StyledHeaderTwo, StyledSectionContainer } from "../StyledComponents";

const ContactLink = styled.a`
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export function Contact() {
  return (
      <>
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
            <StyledHeaderTwo><strong>Contact</strong></StyledHeaderTwo>
                <StyledSectionContainer>
                <StyledParagraph><strong>Email:</strong> <ContactLink href="mailto:sofiboada1@gmail.com">sofiboada1@gmail.com</ContactLink></StyledParagraph>
                    <StyledParagraph><strong>Phone:</strong> <ContactLink href="tel:9258567994">(925)-856-7994</ContactLink></StyledParagraph>
                    <StyledParagraph><strong>LinkedIn:</strong> <ContactLink href="https://www.linkedin.com/in/sofia-boada" target="_blank">https://www.linkedin.com/in/sofia-boada</ContactLink></StyledParagraph>
                </StyledSectionContainer>
        </StyledMain>
        </StyledContainer>
        <Footer />
      </>
  );
}
