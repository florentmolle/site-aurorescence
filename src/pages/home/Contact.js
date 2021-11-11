import React from 'react';
import styled from 'styled-components';


import LogoSrc from '../../img/logoAI02.svg';
import ContactImgSrc from '../../images/img03.jpg';
import LeafContactSrc from '../../img/leafColor03.svg'



const ContactContainer = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 20rem;
    @media(max-width: 425px){
        width: 95%;
    }
`
const ContactTitle = styled.h3`
    font-size: clamp(2rem, 5vw, 5.5rem);    
    font-weight: 400;
    color: var(--dark-color);
    text-transform: uppercase;
`
const LeafContact = styled.img`
    width: 5rem;
    margin-right: 1rem;
    @media(max-width: 425px){
        width: 3.5rem;
    }
` 
const ContactContentBox = styled.article`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10rem 0;
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
    width: 30%;
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
    position: relative;
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 300;
    text-decoration: none;
    color: #212121;
    margin: .5rem 0;
    &::before{
        content: " ";
        position: absolute;
        bottom: 20%;
        left: 0;
        width: 3px;
        height: 0%;
        background: rgba(1,168,98,.7);
        transition: .2s ease-out;
        transform: translate(-300%, 0%);
    };
    &::after{
        content: " ";
        position: absolute;
        bottom: 20%;
        left: 0;
        width: 3px;
        height: 0%;
        background: rgba(21,21,21, .7);
        transition: .3s .1s ease-in;
        transform: translate(-300%, 0%);
    };
    &:hover::before{
        height: 60%;
    };
    &:hover::after{
        background: rgba(21,21,21, 1);
        height: 60%;
    };
`
const ContactPhone = styled.p`
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 300;
    text-decoration: none;
    color: #212121;
    margin: .5rem 0;
`
const ContactNumber = styled.a`
    position: relative;
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 300;
    text-decoration: none;
    color: #212121;
    &::before{
        content: " ";
        position: absolute;
        bottom: 20%;
        left: 0;
        width: 3px;
        height: 0%;
        background: rgba(1,168,98,.7);
        transition: .2s ease-out;
        transform: translate(-300%, 0%);
    };
    &::after{
        content: " ";
        position: absolute;
        bottom: 20%;
        left: 0;
        width: 3px;
        height: 0%;
        background: rgba(21,21,21, .7);
        transition: .3s .1s ease-in;
        transform: translate(-300%, 0%);
    };
    &:hover::before{
        height: 60%;
    };
    &:hover::after{
        background: rgba(21,21,21, 1);
        height: 60%;
    };
`
const ContactSocialMediaIcon = styled.div`
    margin: .5rem 0;
`
const SocialMediaIcon = styled.a`
    font-size: clamp(3rem, 4vw, 4rem);
    margin-right: 2rem;
    color: #212121;
    transition: .3s;
    &:hover{
        color: var(--hover-color);
    }
`
const ContactAdressBox = styled.div`
    margin-top: 8vw;
    @media(max-width: 1024px){
        min-width: 200px;
        width: 70%;
        margin-top: 2.5rem;
    }
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
            <ContactTitle><LeafContact src={LeafContactSrc}/>contact</ContactTitle>
            <ContactContentBox>
                <ContactDetails>
                    <CDboxone>
                        <Logo src={LogoSrc}/>
                        <ContactMail href="mailto:contact@aurorescence.fr">contact@aurorescence.fr</ContactMail>
                        <ContactPhone> 
                            <ContactNumber href="+33613571696"> 06 13 57 16 96</ContactNumber>
                        </ContactPhone>
                        <ContactSocialMediaIcon>
                            <SocialMediaIcon href="#"><i className="fab fa-facebook-f"></i></SocialMediaIcon>
                            <SocialMediaIcon href="#"><i className="fab fa-instagram"></i></SocialMediaIcon>
                            <SocialMediaIcon href="#"><i className="fab fa-linkedin-in"></i></SocialMediaIcon>
                            <SocialMediaIcon href="#"><i className="fab fa-twitter"></i></SocialMediaIcon>
                        </ContactSocialMediaIcon>
                    </CDboxone>
                    <ContactAdressBox>
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
