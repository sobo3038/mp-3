import styled from "styled-components";
import { StyledHeader, StyledHeaderContainer, StyledHeaderOne, StyledSubtitle  } from "../StyledComponents";


export function Header(){
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <StyledHeaderOne>Sofia Boada</StyledHeaderOne>
                <StyledSubtitle>My Online Resume</StyledSubtitle>
            </StyledHeaderContainer>
        </StyledHeader>
    );
};