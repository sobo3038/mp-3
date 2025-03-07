import styled from "styled-components";

import { StyledNav, NavList, NavItem, NavLink } from "../StyledComponents";

export function Nav() {
    return (
        <StyledNav>
            <NavList>
            <NavItem><NavLink to="/">Home</NavLink></NavItem>
                <NavItem><NavLink to="/education">Education</NavLink></NavItem>
                <NavItem><NavLink to="/experiences">Experiences</NavLink></NavItem>
                <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
                <NavItem><NavLink to="/skills">Skills</NavLink></NavItem>
                <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
            </NavList>
        </StyledNav>
    )   
}