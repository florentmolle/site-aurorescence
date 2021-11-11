import React, { useState } from 'react'
import styled from 'styled-components'

import firebase from '../firebase'
import './Login.css';




const FormBox = styled.div`
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    pointer-events: ${props => props.pointer};
    opacity: ${props => props.opacity};
    z-index: 10;
    background: var(--light-color);
`
const FormTitle = styled.h1`
    font-size: clamp(2.5rem, 2vw, 5rem);
    font-weight: 500;
    margin: 1rem 2rem;
`



const SignInPopUp = ({title, openPopUp, setOpenPopUp}) => {


    const [signInMail, setSignInMail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    function sendData(e){
        e.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(signInMail, signInPassword).then(cred => {

            // reset input and close popup
            setSignInMail('');
            setSignInPassword('');
            setOpenPopUp(false);
        })

        
    }



    return (

            <FormBox 
            pointer={openPopUp ? 'all' : 'none'}
            opacity={openPopUp ? '1' : '0'}
            >
                <FormTitle>{title}</FormTitle>
                <form action="" id="login-form">
                    <input 
                    type="text" 
                    placeholder="email"
                    value={signInMail}
                    onChange={(e)=>setSignInMail(e.target.value)}
                     />
                    <input 
                    type="text" 
                    placeholder="mot de passe"
                    value={signInPassword}
                    onChange={(e)=>setSignInPassword(e.target.value)}
                     />
                    <button type="button" onClick={sendData}>{title}</button>
                </form>
            </FormBox>
    )
}

export default SignInPopUp
