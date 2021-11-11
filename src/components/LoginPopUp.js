import React, {useState} from 'react'
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
const SendLoginDataBtn = styled.button`
    width: 15rem;
    font-size: 2rem;
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    padding: 1rem 2rem;
    margin: 2rem 0;
    border: none;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    cursor: pointer;
    transition: .5s ease-out;
    &:hover{
        color: white;
        background: var(--hover-color);
        transition: .2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 2px;
    }
`
const CancelLoginDataBtn = styled.button`
    width: 15rem;
    font-size: 2rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    padding: 1rem 2rem;
    text-align: center;
    margin: 2rem 4rem;
    border: none;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    cursor: pointer;
    transition: .5s ease-out;
    &:hover{
        color: white;
        background: tomato;
        transition: .2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 2px;
    }
`





const LoginPopUp = ({title, openLoginPopUp, setOpenLoginPopUp}) => {

    const [loginMail, setLoginMail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');



    const isLoginEmail = ()=>{
        let mailLogin = document.getElementById('email-login-label');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(loginMail.match(regex)){
            mailLogin.style.display = 'none';
            return true;
        }else {
            mailLogin.style.display = 'block';
            mailLogin.style.animation = 'animeemailfail .3s ease-in-out';
            setTimeout(() => {
                mailLogin.style.animation = 'none';
            }, 1000);
            return false
        }
    }

    function failLoginMessage(){
        let failMsgLogin = document.getElementById('fail-login-msgbox');
        let failMsgLoginText = document.querySelector('#fail-login-msgbox p');
        failMsgLogin.style.display = 'flex';
        failMsgLogin.style.opacity = '1';
        failMsgLogin.style.background = 'rgba(255,99,71, .5)';
        failMsgLogin.style.animation = 'failmsgpopup .2s ease-out';
        failMsgLoginText.innerHTML = 'Merci de remplir correctement les champs requis.';
    }
    function errorLoginMessage(){
        let failMsgLogin = document.getElementById('fail-login-msgbox');
        let failMsgLoginText = document.querySelector('#fail-login-msgbox p');
        failMsgLogin.style.display = 'flex';
        failMsgLogin.style.opacity = '1';
        failMsgLogin.style.background = 'rgba(255,99,71, .5)';
        failMsgLogin.style.animation = 'failmsgpopup .2s ease-out';
        failMsgLoginText.innerHTML = 'Address mail ou mot de pass non valide !';
    }



    function sendLoginData(e){
        e.preventDefault()

        if(isLoginEmail()&&loginPassword){
            firebase.auth().signInWithEmailAndPassword(loginMail, loginPassword).then(cred =>{

                // reset input and close popup
                setLoginMail('');
                setLoginPassword('');
                setOpenLoginPopUp(false);
                let failMsgLogin = document.getElementById('fail-login-msgbox');
                failMsgLogin.style.display = 'none';
                let inputColorLogin = document.querySelectorAll('.input-login-form');
                inputColorLogin.forEach((input)=>{
                    input.classList.remove('placeholder-login-fail');
                });
            }).catch(err => {
                errorLoginMessage()
            })
        }else{
            let inputColorLogin = document.querySelectorAll('.input-login-form');
            inputColorLogin.forEach((input)=>{
                input.classList.add('placeholder-login-fail');
            });
            failLoginMessage()
        }


        
    }
    function handleCancelLogin(){
        setOpenLoginPopUp(false)
    }


    return (
        <FormBox 
            pointer={openLoginPopUp ? 'all' : 'none'}
            opacity={openLoginPopUp ? '1' : '0'}
            >
                <FormTitle>{title}</FormTitle>
                <form action="" id="login-form">
                    <label htmlFor="email" id="email-login-label">Email non valide</label>
                    <input 
                    type="text" 
                    name="email"
                    placeholder="email"
                    value={loginMail}
                    className="input-login-form"
                    onChange={(e)=>setLoginMail(e.target.value)}
                     />
                    <input 
                    type="text" 
                    placeholder="mot de passe"
                    value={loginPassword}
                    className="input-login-form"
                    onChange={(e)=>setLoginPassword(e.target.value)}
                     />
                     <div>
                        <SendLoginDataBtn type="button" onClick={sendLoginData}>{title}</SendLoginDataBtn>
                        <CancelLoginDataBtn onClick={handleCancelLogin}>Annuler</CancelLoginDataBtn>
                     </div>
                     <div id="fail-login-msgbox">
                            <p></p>
                    </div>
                </form>
        </FormBox>
    )
}

export default LoginPopUp
