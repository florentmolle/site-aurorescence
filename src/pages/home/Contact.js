import React from 'react';
import styled from 'styled-components';


import LogoSrc from '../../img/logoAI02.svg';
import ContactImgSrc from '../../images/img03.jpg';


const ContactContainer = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15rem;
    @media(max-width: 425px){
        width: 95%;
    }
`
const ContactTitle = styled.h3`
    text-align: center;
    font-size: 6rem;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--dark-color);
`
const ContactContentBox = styled.article`
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 7rem;
`
const ContactDetails = styled.div`
    width: 42%;
    display: flex;
    flex-direction: column;
    @media(max-width: 1024px){
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
`
const CDboxone = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 1024px){
        min-width: 270px;
        width: 50%;
        margin-bottom: 5rem;
    }
`
const ContactImg = styled.img`
    display: block;
    min-width: 350px;
    width: 40%;
    margin-top: 3rem;
    object-fit: contain;
    @media(max-width: 1024px){
        display: none;
    }
`
const Logo = styled.img`
    width: 25rem;
    margin-bottom: 2rem;
`
const ContactMail = styled.a`
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 300;
    text-decoration: none;
    color: #212121;
    margin: .5rem 0;
`
const ContactPhone = styled.p`
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 300;
    text-decoration: none;
    color: #212121;
    margin: .5rem 0;
`
const ContactNumber = styled.a`
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 300;
    text-decoration: none;
    color: #212121;
`
const ContactSocialMedia = styled.p`
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    margin: .5rem 0;
    font-weight: 300;
    color: #212121;
`
const ContactSocialMediaIcon = styled.div`
    margin: .5rem 0;
`
const SocialMediaIcon = styled.a`
    font-size: clamp(3rem, 4vw, 4rem);
    margin-right: 2rem;
    color: #212121;
`
const ContactAdressBox = styled.div`
    margin-top: 8vw;
    @media(max-width: 1024px){
        min-width: 270px;
        width: 40%;
        margin-top: 2.5rem;
    }
`
const ContactAdress = styled.p`
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 300;
    color: #212121;
    padding: 1rem 0;
`
const Adress = styled.p`
    padding: 1rem;
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 300;
    color: #212121;
`


const Contact = () => {



    return (
        <>
        <ContactContainer>
            <ContactTitle>contact</ContactTitle>
            <ContactContentBox>
                <ContactDetails>
                    <CDboxone>
                        <Logo src={LogoSrc}/>
                        <ContactMail href="mailto:contact@aurorescence.fr">contact@aurorescence.fr</ContactMail>
                        <ContactPhone>TEL: 
                            <ContactNumber href="+33613571696"> 06 13 57 16 96</ContactNumber>
                        </ContactPhone>
                        <ContactSocialMedia>Réseaux sociaux: </ContactSocialMedia>
                        <ContactSocialMediaIcon>
                            <SocialMediaIcon href="#"><i className="fab fa-facebook-f"></i></SocialMediaIcon>
                            <SocialMediaIcon href="#"><i className="fab fa-instagram"></i></SocialMediaIcon>
                            <SocialMediaIcon href="#"><i className="fab fa-linkedin-in"></i></SocialMediaIcon>
                            <SocialMediaIcon href="#"><i className="fab fa-twitter"></i></SocialMediaIcon>
                        </ContactSocialMediaIcon>
                    </CDboxone>
                    <ContactAdressBox>
                       <ContactAdress>Adresse : </ContactAdress>
                       <Adress>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> 
                           Vero inventore, quas excepturi totam magni hic unde eligendi, <br />
                        </Adress>
                    </ContactAdressBox>
                </ContactDetails>
                <ContactImg src={ContactImgSrc}/>
            </ContactContentBox>
        </ContactContainer>
        </>
    )
}

export default Contact
