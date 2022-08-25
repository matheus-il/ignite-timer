import styled from "styled-components";

interface ButtonContainerProps {
    bgVariant: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: aliceblue;
    border-radius: 8px;
    margin: 1rem;
    height: 40px;
    width: 100px;
    border: none;

    ${props => props.theme.color}
`