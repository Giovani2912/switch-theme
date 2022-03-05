import styled from "styled-components";

export const Btn = styled.button`
    background-color: ${props => props.theme.colors.primary};
    margin-left: 30vw;
    margin-top: 10vh;
    border-radius: 8px;
    width: 10vw;
    height: 3vh;
    cursor: pointer;
    color: ${props => props.theme.colors.buttonfont};
`

