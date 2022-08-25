import styled from "styled-components";

interface ButtonContainerProps {
    bgVariant: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: aliceblue;

    ${props => props.theme.color}
`