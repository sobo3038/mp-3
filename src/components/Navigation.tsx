import { StyledNavigation, StyledNavigationList, StyledNavigationItem, StyledNavigationLink } from "../StyledComponents";

export function Nav() {
    return (
        <StyledNavigation>
            <StyledNavigationList>
            <StyledNavigationItem><StyledNavigationLink to="/">Home</StyledNavigationLink></StyledNavigationItem>
                <StyledNavigationItem><StyledNavigationLink to="/education">Education</StyledNavigationLink></StyledNavigationItem>
                <StyledNavigationItem><StyledNavigationLink to="/experiences">Experiences</StyledNavigationLink></StyledNavigationItem>
                <StyledNavigationItem><StyledNavigationLink to="/skills">Skills</StyledNavigationLink></StyledNavigationItem>
                <StyledNavigationItem><StyledNavigationLink to="/projects">Projects</StyledNavigationLink></StyledNavigationItem>
                <StyledNavigationItem><StyledNavigationLink to="/contact">Contact</StyledNavigationLink></StyledNavigationItem>
            </StyledNavigationList>
        </StyledNavigation>
    )   
}