import styled from "styled-components";
import { 
    BorderColor,
    BorderRadius,
} from ".";

export const TriggerInput = styled.input`
    border-radius: ${BorderRadius};
    border: 1px solid ${BorderColor};
    background: rgba(255, 255, 255, 0.15);
    color: #FFF;
    width: calc(100% - 3rem);
    margin: 1rem auto;
    padding: 1rem;
`

export const TextBox = styled.div`
    border-radius: ${BorderRadius};
    border: 1px solid ${BorderColor};
    background: rgba(255, 255, 255, 0.1);
    width: calc(100% - 3rem);
    min-height: 3rem;
    margin: auto;
    padding: 1rem;
`