import {
    HeaderWrapper,
    HeaderItem,
} from '../styles/header'

export function Header() {
    return(
        <>
        <HeaderWrapper>
            <HeaderItem href='/' target='_self'>
                Simulation Room
            </HeaderItem>
        </HeaderWrapper>
        </>
    )
}

export default Header