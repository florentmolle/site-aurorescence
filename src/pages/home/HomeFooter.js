import React from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'


const FooterContainer = styled.footer`
    width: 100%;
    z-index: 20;
`
const ScrollFooterText = styled.p`
    position: absolute;
    top: 95vh;
    left: 5%;
    pointer-events: none;
    color: var(--dark-color);
    font-size: 20px;
    text-transform: uppercase;
`
const AproposLink = styled(Link)`
    position: absolute;
    top: 95vh;
    right: 5%;
    text-decoration: none;
    color: var(--dark-color);
    font-size: 20px;
    text-transform: uppercase;
`


const Footer = () => {
    return (
        <>
            <FooterContainer>
                <ScrollFooterText>scroll</ScrollFooterText>
                <AproposLink to="/apropos">À propos</AproposLink>
            </FooterContainer>
            
        </>
    )
}

export default Footer
