import styled from "styled-components";
import { StyledHeader, StyledHeaderContainer, StyledHeaderOne, StyledP  } from "../StyledComponents";

export function Header(){
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <StyledHeaderOne>Sofia Boada</StyledHeaderOne>
                <StyledP>My Online Resume</StyledP>
            </StyledHeaderContainer>
        </StyledHeader>
    );
};