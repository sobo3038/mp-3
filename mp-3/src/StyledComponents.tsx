import styled from "styled-components";
import { Link } from "react-router-dom";

/* Entire page */
export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh 0;
  background-color: #DBEAFE;
  width: 70%;
  min-height: 100vh;
  font-family: 'Arial, sans-serif';
  margin: 0 auto; 

  @media screen and (max-width: 750px) {
    width: 100%; 
  }
`;

/* Wrap all sections */
export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #DBEAFE;
  justify-content: center; 

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

/* Page Title */
export const SectionTitle = styled.h2`
  text-align: center;
  font-size: calc(24px + 1vw);
  font-weight: 500;
  color: #1E3A8A;
  margin-bottom: 2vh;
`;

/* Container Sections */
export const SectionContainer = styled.div`
  width: 80%;
  max-width: 800px; 
  margin: 0 auto 2vh; 
  padding: 1vh 2vw;
`;

/* Section Heading */
export const SectionHeading = styled.h3`
  color: #1D4ED8;
  font-size: calc(20px + 0.5vw);
  font-weight: bold;
  margin-bottom: 1vh;
`;

/* List Container */
export const StyledList = styled.ul`
  list-style-type: disc;
  padding-left: 2vw;
`;

/* List Item */
export const StyledListItem = styled.li`
font-size: calc(12px + 0.5vw);
color: black;
margin-bottom: 1vh;
max-width: 500px; 
word-wrap: break-word;
text-align: left; 
`;


/* Paragraph */
export const StyledParagraph = styled.p`
  font-size: calc(12px + 0.5vw);
  color: black;
  margin-bottom: 1vh;
  max-width: 500px; 
  word-wrap: break-word;
  text-align: left; 
`;


/* Images */
export const ContactImage = styled.img`
  width: 100%;
  max-width: 19vw;
  border-radius: 50%;
  margin-bottom: 2vh;
`;

/* Navigation */
export const StyledNav = styled.nav`
  display: flex;
  width: 30%;
  background-color: #3b82f6;
  padding: 1% 1%;
  justify-content: center;
  
  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 0; /*fixed excess nav error!*/
  }
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  justify-content: space-evenly;
  font-size: calc(8px + 0.3vw);
  text-align: center;
  list-style: none;
  padding-left: 0;
  height: 70%;

  @media screen and (max-width: 750px) {
    flex-direction: row;
    padding: 2%;
    width: 90%;
    gap: 1%;
    justify-content: center;
    height: auto;
  }
`;
export const NavItem = styled.li`
  background-color: #1e3a8a;
  border-radius: 1vw;
  padding: 0.3vw 0.7vw;

  @media screen and (max-width: 750px) {
    display: flex;
    width: 100%;
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: calc(10px + 0.75vw);
  font-weight: bold;
  width: 90%;
  padding: 5%;
  color: white;
  background-color: #1e3a8a;
  text-decoration: none;
  border-radius: 1vw;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 750px) {
    display: flex;
    width: 100%;
    font-size: calc(9px + 0.75vw);
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

/* Footer */
export const StyledFooter = styled.footer`
  background-color: #1e40af;
  color: white;
  padding: 1vh 1vw;
  text-align: center;
  width: 100%;
  margin-top: auto;
`;
export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

/* Header*/
export const StyledHeader = styled.header`
  display: flex;
  background-color: #1e3a8a;
  color: white;
  padding: 1% 2%;

  @media screen and (max-width: 750px) {
    justify-content: center;
    align-items: center;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const StyledH1 = styled.h1`
  margin: 0;
  font-size: calc(28px + 2vw); 
  text-align: left;

  @media screen and (max-width: 750px) {
    text-align: center;
    font-size: calc(24px + 1.5vw); 
  }
`;
export const StyledSubtitle = styled.p`
  font-size: calc(12px + 0.8vw);
  text-align: left;
  margin-top: 1px; 

  @media screen and (max-width: 750px) {
    text-align: center;
    font-size: calc(10px + 0.8vw);
  }
`;
export const StyledLink = styled.a`
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

/*Calculator*/
export const CalculatorContainer = styled.div`
    width: 400px;
    margin: 20px auto;
    text-align: center;
    border: 10px solid #1e3a8a;
    border-radius: 30px;
    background-color: white;
    padding: 10px;
`;

export const Input = styled.input`
    width: 95%;
    margin: 10px auto;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    padding: 10px;

`;

export const ButtonContainer = styled.div`
    margin: 10px;
`;

export const CalcButton = styled.button`
    padding: 8px;
    margin: 5px;
    font-size: 15px;
    background-color: #1e3a8a;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: blue;
    }
`;

export const Output = styled.h3`
    color: ${(props) => (props.color ? props.color : "black")};
`;