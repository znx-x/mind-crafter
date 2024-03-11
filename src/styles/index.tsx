import styled from 'styled-components'

/* defaults */

export const BorderRadius = `16px`;
export const BorderColor = `rgba(255, 255, 255, 0.1)`;
export const DefaultTextFontSize = `0.9rem`;

/* wrappers */

export const AppWrapper = styled.div`
    width: calc(100vw - 2rem);
    min-height: calc(100vh - 2rem);
    margin: 0 auto;
    padding: 1rem;
    background: rgba(22, 22, 22, 1);
    overflow-x: hidden;
`

export const PageWrapper = styled.div`
    width: 1320px;
    margin: 0;
`