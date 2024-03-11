import styled from "styled-components";
import {
    BorderColor,
    BorderRadius,
    DefaultTextFontSize,
    PrimaryColor,
    PrimaryFontColor,
} from ".";

export const ParametersWrapper = styled.div`
    margin: auto;
    text-align: left;
    width: 100%;
`

export const TextInput = styled.input`
    width: 100%;
    margin: 0.5rem auto;
    padding: 10px;
    border: 1px solid ${BorderColor};
    border-radius: ${BorderRadius};
    resize: none;
    background: transparent;
    color: #fff;
`

export const TextInputTitle = styled.div`
    color: #666;
    margin: 0.3rem 0
`