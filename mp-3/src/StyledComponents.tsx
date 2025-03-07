import styled from "styled-components";
import { Link } from "react-router-dom";

/* Entire page / General styling*/
export const StyledMain = styled.main`
    display: flex;
    background-color: #DBEAFE;
    flex-direction: column;
    align-items: center;
    width: 70%;
    padding: 5vh 0;
    min-height: 100vh;
    font-family: 'Arial, sans-serif';
    margin: 0 auto; 

    @media screen and (max-width: 750px) {
        width: 100%; 
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #DBEAFE;
    justify-content: center; 

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

export const StyledSectionContainer = styled.div`
  width: 90%;
  max-width: 900px; 
  margin: 0 auto 2vh; 
  padding: 1vh 2vw;
`;

export const StyledList = styled.li`
font-size: calc(12px + 0.5vw);
color: black;
margin-bottom: 1vh;
max-width: 500px; 
word-wrap: break-word;
text-align: left; 
`;

export const StyledParagraph = styled.p`
  font-size: calc(12px + 0.5vw);
  color: black;
  margin-bottom: 1vh;
  max-width: 1000px; 
  word-wrap: break-word;
  text-align: left; 
  margin: 10px;
`;

/*Headers/Titles*/
export const StyledHeaderOne = styled.h1`
    margin: 0;
    font-size: calc(28px + 2vw); 
    text-align: left;
    @media screen and (max-width: 750px) {
        text-align: center;
        font-size: calc(24px + 1.5vw); 
    }
`;
export const StyledHeaderTwo = styled.h2`
  text-align: center;
  font-size: calc(24px + 1vw);
  font-weight: 500;
  color: #1E3A8A;
  margin-bottom: 2vh;
`;

export const StyledHeaderThree = styled.h3`
  color: #1D4ED8;
  font-size: calc(20px + 0.5vw);
  font-weight: bold;
  margin-bottom: 1vh;
`;

/* Navigation */
export const StyledNavigation = styled.nav`
  display: flex;
  background-color: #3b82f6;
  padding: 1% 1%;
  justify-content: center;
  width: 30%;
  
  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 0; /*fixed excess nav error!*/
  }
`;
export const StyledNavigationList = styled.ul`
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
export const StyledNavigationItem = styled.li`
  background-color: #1D4ED8;
  border-radius: 5px;
  padding: 0.3vw 0.7vw;

  @media screen and (max-width: 750px) {
    display: flex;
    width: 100%;
  }
`;
export const StyledNavigationLink = styled(Link)`
    font-size: calc(16px + 0.5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4%;
    color: white;
    background-color: #1D4ED8;
    text-decoration: none;
    border-radius: 1vw;
    &:hover {
        text-decoration: underline;
    }
    @media screen and (max-width: 750px) {
        align-items: center;
        justify-content: center;
        text-align: center;
        display: flex;
        width: 100%;    
        font-size: calc(9px + 0.75vw);
    }
`;

/* Footer */
export const StyledFooter = styled.footer`
    background-color: #1e40af;
    color: white;
    text-align: center;
    width: 100%;
    margin-top: auto;
    padding: 0.1% 0;
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
    padding: 1% 4%;
    background-color: #1e3a8a;
    color: white;
    @media screen and (max-width: 750px) {
        justify-content: center;
        align-items: center;
    }
`;
export const StyledHeaderContainer = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
`;

export const StyledP = styled.p`
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

/*Calc*/
export const CalculatorContainer = styled.div`
    width: 400px;
    margin: 20px auto;
    text-align: center;
    border: 10px solid #1e3a8a;
    border-radius: 30px;
    background-color: white;
    padding: 10px;
`;

export const StyledInput = styled.input`
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

export const CalculatorButton = styled.button`
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

export const CalculatorOutput = styled.h3`
    color: ${(props) => (props.color ? props.color : "black")};
`;

/*Home Page*/
export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileImage = styled.img`
    width: 40%;
    margin-bottom: 5%;
`;

/*Projjects Page*/
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 800px;
`;

export const ListItem = styled.li`
    margin-bottom: 5px;
`;

export const CalculatorWrapper = styled.div`
    margin-top: 5px; 
`;