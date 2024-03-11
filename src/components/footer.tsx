import {
    FooterWrapper,
    FooterSection,
    FooterSectionTitle,
    FooterItem,
} from '../styles/footer'

export function Footer() {
    return(
        <>
        <FooterWrapper>
            <FooterSection>
                <FooterSectionTitle>Title 1</FooterSectionTitle>
                <FooterItem href='#' target='_self'>Link 1</FooterItem>
            </FooterSection>
            <FooterSection>
                <FooterSectionTitle>Title 2</FooterSectionTitle>
                <FooterItem href='#' target='_self'>Link 1</FooterItem>
            </FooterSection>
        </FooterWrapper>
        </>
    )
}

export default Footer