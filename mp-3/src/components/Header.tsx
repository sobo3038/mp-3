import styled from "styled-components";

import { StyledHeader, HeaderContainer, StyledH1, StyledSubtitle  } from "../StyledComponents";


export function Header(){
    return (
        <StyledHeader>
            <HeaderContainer>
                <StyledH1>Sofia Boada</StyledH1>
                <StyledSubtitle>My Online Resume</StyledSubtitle>
            </HeaderContainer>
        </StyledHeader>
    );
};