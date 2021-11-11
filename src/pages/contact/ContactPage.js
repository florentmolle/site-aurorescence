import React, {useRef, useState} from 'react'
import { Scrollbar } from 'smooth-scrollbar-react'
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import {init} from 'emailjs-com';
import Footer from '../../components/Footer'

import './ContactPage.css'

init("user_dSe42z4NHlbDzCVTOBnpW");



const ContactWrapper = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25rem;
    @media(max-width: 425px){
        padding-top: 15rem;
    };
`
const ContactFormTitle = styled.h1`
    font-size: clamp(2.5rem, 5vw, 7rem);
    font-family: 'Lora', serif;
    font-weight: 200;
    font-style: italic;
    text-align: center;
    padding: 7rem 0;
    margin-bottom: 10rem;
`

const ContactFormContainer = styled.section`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media(max-width: 768px){
        width: 100%;
        flex-direction: column;
        align-items: center;
    };
`
const ContactForm = styled.article`
    width: 50%;
    min-width: 350px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-bottom: 5rem;
    @media(max-width: 1000px){
        width: 90%;
        align-items: center;
        margin-top: 2rem;
        min-width: 150px;
    };
`
const ContactInfo = styled.article`
    width: 50%;
    min-width: 350px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
    @media(max-width: 768px){
        width: 100%;
        align-items: center;
        min-width: 150px;
    };
`
const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 768px){
        width: 90%;
    };
`
const ContactText = styled.div`
    font-size: clamp(2.5rem, 4vw, 2.5rem);
    font-weight: 300;
    text-decoration: none;
    color: var(--dark-color);
    margin: 5rem 0;
    @media(max-width: 768px){
        width: 90%;
        margin: 4rem;
    };
`
const ContactLinkTitle = styled.p`
    font-size: clamp(2.5rem, 4vw, 2.5rem);
    text-transform: uppercase;
    margin-bottom: 2rem;
`

const ContactLink = styled.a`
    display: block;
    width: 29rem;
    position: relative;
    font-size: clamp(2rem, 4vw, 2.5rem);
    text-decoration: none;
    font-weight: 300;
    color: var(--dark-color);
    margin-top: .5rem;
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
const ContactTextAdresseTitle = styled.p`
    font-size: clamp(2.5rem, 4vw, 2.5rem);
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 2rem;
`

const ContactTextAdresse = styled.p`
    max-width: 500px;
    font-size: clamp(2rem, 3vw, 2.2rem);
    text-decoration: none;
    color: var(--dark-color);
    margin: .5rem 2rem;
    @media(max-width: 768px){
        width: 95%;
        margin: .5rem 1rem;
    };
`




const ContactPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    
    const templateParams = {
        name: name,
        email: email,
        message: message,
    }

    const isEmail = ()=>{
        let mail = document.getElementById('email-label');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(email.match(regex)){
            mail.style.display = 'none';
            return true;
        }else {
            mail.style.display = 'block';
            mail.style.animation = 'animeemailfail .3s ease-in-out';
            setTimeout(() => {
                mail.style.animation = 'none';
            }, 1000);
            return false
        }
    }

    function failMessage(){
        let failMsg = document.getElementById('fail-msgbox');
        let failMsgText = document.querySelector('#fail-msgbox p');
        failMsg.style.display = 'flex';
        failMsg.style.opacity = '1';
        failMsg.style.background = 'rgba(255,99,71, .5)';
        failMsg.style.animation = 'failmsgpopup .2s ease-out';
        failMsgText.innerHTML = 'Merci de remplir correctement les champs requis.';
    }
    
    function successMessage(){
        let failMsg = document.getElementById('fail-msgbox');
        let failMsgText = document.querySelector('#fail-msgbox p');
        failMsg.style.display = 'flex';
        failMsg.style.opacity = '1';
        failMsg.style.background = 'var(--hover-color)';
        failMsg.style.animation = 'failmsgpopup .2s ease-out';
        failMsgText.innerHTML = 'Votre message a été envoyé avec succès ! <br> Nous vous contacterons dès que possible';
        setTimeout(() => {
            failMsg.style.opacity = '0';
        }, 3500);
        setTimeout(() => {
            failMsg.style.display = 'none';
        }, 4200);
    }

    function errorMessage(){
        let failMsg = document.getElementById('fail-msgbox');
        let failMsgText = document.querySelector('#fail-msgbox p');
        failMsg.style.display = 'flex';
        failMsg.style.opacity = '1';
        failMsg.style.background = 'rgba(255,99,71, .5)';
        failMsg.style.animation = 'failmsgpopup .2s ease-out';
        failMsgText.innerHTML = "Nous somme désolé, une erreur c'est produite. <br> Veuillez réessayer.";
    }

    function handleSubmit(e){
        e.preventDefault();

        if(name && isEmail() && message){
            emailjs.send('service_8373vv9', 'template_644u0l5', templateParams, 'user_dSe42z4NHlbDzCVTOBnpW')
            .then((response)=>{
                setName('');
                setEmail('');
                setMessage('');
                let failMsg = document.getElementById('fail-msgbox');
                failMsg.style.display = 'none';
                let inputColor = document.querySelectorAll('.input-form');
                inputColor.forEach((input)=>{
                    input.classList.remove('placeholder-fail');
                });
                let textMessageColor = document.querySelector('#message');
                textMessageColor.classList.remove('placeholder-fail');

                successMessage();

            }, (err)=>{
                errorMessage();
            });
        }else{
            failMessage()
            let inputColor = document.querySelectorAll('.input-form');
                inputColor.forEach((input)=>{
                    input.classList.add('placeholder-fail');
                });
            let textMessageColor = document.querySelector('#message');
            textMessageColor.classList.add('placeholder-fail');
        };

    };



    // back to top of the page
    const scroll = useRef(null)
     
    function handleScrollTop(){
        scroll.current.offset.y = 0 ;
        document.querySelector('.scroll-content').style.transform = "translate3d(0, 0, 0)"
    }

    return (
        <>
        <Scrollbar
        ref={scroll}
        damping={0.08}
        style={{height: "100vh"}}
        renderByPixels={true}>
        <ContactWrapper>
            <ContactFormTitle>Contactez-nous</ContactFormTitle>
            <ContactFormContainer>
                <ContactInfo>
                    <ContactBox>
                        <ContactLinkTitle>contact : </ContactLinkTitle>
                        <ContactLink href="+33600000000">06 00 00 00 00</ContactLink>
                        <ContactLink href="mailto:contact@aurorescence.fr">contact@aurorescence.fr</ContactLink>
                    </ContactBox>
                    <ContactText>
                        <ContactTextAdresseTitle>Adresse :</ContactTextAdresseTitle>
                        <ContactTextAdresse>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Nulla sodales volutpat rhoncus.
                        </ContactTextAdresse>
                    </ContactText>
                </ContactInfo>
                <ContactForm>
                    <form>
                        <div>
                            <label htmlFor="name"></label>
                            <input className="input-form" 
                            type="text" id="name-input" 
                            name="name" placeholder="Nom" 
                            value={name}
                            required
                            onChange={(e)=> setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" id="email-label">Email non valide</label>
                            <input className="input-form" 
                            type="email" id="email-input" 
                            name="email" placeholder="Email" 
                            value={email}
                            required
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="messsage"></label>
                            <textarea name="text-message" 
                            id="message" rows="10" 
                            placeholder="Votre message"
                            value={message}
                            required
                            onChange={(e)=> setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="button" 
                        id="form-contact-btn"
                        onClick={handleSubmit}
                        >envoyer</button>
                        <div id="fail-msgbox">
                            <p></p>
                        </div>
                    </form>
                </ContactForm>
            </ContactFormContainer>
        </ContactWrapper>
        <Footer scrollTop={handleScrollTop}/>
        </Scrollbar>
        </>
    )
}

export default ContactPage
