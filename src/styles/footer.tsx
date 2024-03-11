import styled from "styled-components";
import {
    BorderColor,
    DefaultTextFontSize,
} from './'

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
    min-height: 2rem;
    background: transparent;
    border-top: 1px solid ${BorderColor};
`

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: start;
    padding: 1rem;
    align-items: start;
`

export const FooterSectionTitle = styled.h4`
    font-size: 1rem;
    font-weight: 500;
    color: #FFF;
`

export const FooterItem = styled.a`
    font-size: ${DefaultTextFontSize};
    color: rgba(150, 150, 150, 1);
    text-decoration: none;
    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`