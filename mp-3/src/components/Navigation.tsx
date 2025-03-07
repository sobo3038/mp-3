import styled from "styled-components";
import { StyledNav, StyledNavList, StyledNavItem, StyledNavLink } from "../StyledComponents";

export function Nav() {
    return (
        <StyledNav>
            <StyledNavList>
            <StyledNavItem><StyledNavLink to="/">Home</StyledNavLink></StyledNavItem>
                <StyledNavItem><StyledNavLink to="/education">Education</StyledNavLink></StyledNavItem>
                <StyledNavItem><StyledNavLink to="/experiences">Experiences</StyledNavLink></StyledNavItem>
                <StyledNavItem><StyledNavLink to="/projects">Projects</StyledNavLink></StyledNavItem>
                <StyledNavItem><StyledNavLink to="/skills">Skills</StyledNavLink></StyledNavItem>
                <StyledNavItem><StyledNavLink to="/contact">Contact</StyledNavLink></StyledNavItem>
            </StyledNavList>
        </StyledNav>
    )   
}