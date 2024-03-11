import styled from "styled-components";
import {
    BorderColor,
    BorderRadius,
    DefaultTextFontSize,
    PrimaryColor,
    PrimaryFontColor,
} from ".";

export const TextInput = styled.input`
    width: calc(100% - 2rem);
    margin: 0.5rem auto;
    padding: 10px;
    border: 1px solid ${BorderColor};
    border-radius: ${BorderRadius};
    resize: none;
    background: transparent;
    color: #fff;
`