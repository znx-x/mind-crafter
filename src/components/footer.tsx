import {
    FooterWrapper,
    FooterSection,
    FooterSectionTitle,
    FooterItem,
    ComponentWrapper,
    CopyrightWrapper,
} from '../styles/footer'

export function Footer() {
    return(
        <>
        <ComponentWrapper>
        <FooterWrapper>
            <FooterSection>
                <FooterSectionTitle>Footer Section 1</FooterSectionTitle>
                <FooterItem href='#' target='_self'>Footer Link 1</FooterItem>
            </FooterSection>
            <FooterSection>
                <FooterSectionTitle>Footer Section 2</FooterSectionTitle>
                <FooterItem href='#' target='_self'>Footer Link 2</FooterItem>
            </FooterSection>
        </FooterWrapper>
        <CopyrightWrapper>
            Copyright © 2024 Paulo Baronceli & Luis Baronceli. Distributed under the MIT lincense.
        </CopyrightWrapper>
        </ComponentWrapper>
        </>
    )
}

export default Footer