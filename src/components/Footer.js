import React from 'react';
import styled from 'styled-components';

import FooterLogoSrc from '../img/logoAI02.svg'



const FooterContainer = styled.footer`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 3rem 0 2rem 0;
    margin: 10rem auto 0 ;
    border-top: 1px solid;
`
const FooterBoxLeft = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media(max-width: 425px){
        display: none;
    }
`
const FooterBoxMiddle = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 425px){
        width: 90%;
    }
`
const FooterBoxRight = styled.div`
    width: 33%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 3rem;
    @media(max-width: 425px){
        display: none;
    }
`

const SocialMediaFooterBox = styled.div`
    padding: 1rem 0;
`

const SocialMediaFooter = styled.a`
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin-right: .8rem;
    color: #212121;
    transition: .3s;
    &:hover{
       color: var(--hover-color);
    }
`
const FooterMail = styled.a`
    text-decoration: none;
    font-size: clamp(1rem, 2vw, 1.5rem);
    margin-right: .8rem;
    color: var(--dark-color);
    transition: .3s;
    &:hover{
       color: var(--hover-color);
    }
`
const FooterLogo = styled.img`
    width: 60%;
`
const FooterTdr = styled.p`
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 100;
    padding-top: 1.5rem;
`
const FooterArrowUp = styled.a`
    font-size: clamp(2rem, 4vw, 3.5rem);
    color: var(--dark-color);
    transform: translateY(-.5rem);
    margin: 1rem;
    transition: .3s;
    &:hover{
        color: var(--hover-color);
     }
`








const Footer = ({scrollTop}) => {



    return (
        <>
            <FooterContainer>
                <FooterBoxLeft>
                    <SocialMediaFooterBox>
                        <SocialMediaFooter href="#"><i className="fab fa-facebook-f"></i></SocialMediaFooter>
                        <SocialMediaFooter href="#"><i className="fab fa-instagram"></i></SocialMediaFooter>
                        <SocialMediaFooter href="#"><i className="fab fa-linkedin-in"></i></SocialMediaFooter>
                        <SocialMediaFooter href="#"><i className="fab fa-twitter"></i></SocialMediaFooter>
                    </SocialMediaFooterBox>
                    <FooterMail href="mailto:contact@aurorescence.fr">contact@aurorescence.fr</FooterMail>
                </FooterBoxLeft>
                <FooterBoxMiddle>
                    <FooterLogo src={FooterLogoSrc}/>
                    <FooterTdr>Tous droits réservés ©</FooterTdr>
                </FooterBoxMiddle>
                <FooterBoxRight>
                    <FooterArrowUp onClick={scrollTop} href="#"><i className="fas fa-arrow-up"></i></FooterArrowUp>
                </FooterBoxRight>
            </FooterContainer>
        </>
    )
}

export default Footer
