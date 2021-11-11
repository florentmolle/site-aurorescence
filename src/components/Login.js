import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from '../firebase';
import LoginPopUp from './LoginPopUp';
import SignInPopUp from './SignInPopUp';
import DomOffice from './DomOffice';


const LoginContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 10rem;
`
const EntryBox = styled.div`
    width: 35%;
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    opacity: ${props => props.opacity};
    padding: 7rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`
const LoginTitle = styled.h1`
    font-size: clamp(2.5rem, 5vw, 5rem);
    font-weight: 400;
    text-align: center;
    color: var(--dar-color);
`
const LoginBtn = styled.button`
    width: 15rem;
    font-size: 2rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    padding: 1rem 2rem;
    margin: 2rem;
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
// const SignUpBtn = styled.button`
//     font-size: clamp(1.8rem, 2vw, 2.2rem);
//     font-weight: 500;
//     padding: 1rem 1.8rem;
//     margin: 2rem 0;
//     cursor: pointer;
//     border: none;
//     border-radius: .5rem;
//     box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
//     cursor: pointer;
//     transition: .5s ease-out;
//     &:hover{
//         color: white;
//         background: var(--hover-color);
//         transition: .2s ease-out;
//         box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 2px;
//     }
// `
const LogOutBtn = styled.button`
    display: ${props => props.display};
    position: fixed;
    top: 5%;
    left: 2%;
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1rem 1.5rem;
    z-index: 20;
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


const Login = ({setAdminBoard}) => {

    const [openPopUp, setOpenPopUp] = useState(false)
    const [openLoginPopUp, setOpenLoginPopUp] = useState(false)

    const [isSignedIn, setIsSignedIn] = useState(false);


    // function handleClick(){
    //     setOpenPopUp(!openPopUp)
    // }
    function handleClickLogin(){
        setOpenLoginPopUp(!openLoginPopUp)
    }

    function logOut(e){
        e.preventDefault();
        firebase.auth().signOut();
    }

    useEffect(()=>{

        firebase.auth().onAuthStateChanged(user => {
            if(user){
                console.log('user signed in');
                setIsSignedIn(true);
                setAdminBoard(true);
            }else{
                console.log('user signed out');
                setIsSignedIn(false);
                setAdminBoard(false);
            }
        })

    }, [setAdminBoard])

    return (
        <LoginContainer>
            <EntryBox 
            display={isSignedIn ? 'none' : 'flex'}
            opacity={openLoginPopUp ? '0' : '1'}
            >
                <LoginTitle>Est-ce toi Dom ?</LoginTitle>
                <LoginBtn onClick={handleClickLogin}>connexion</LoginBtn>
                {/* <SignUpBtn onClick={handleClick}>sign up</SignUpBtn> */}
            </EntryBox>
            {/* <LoginPopUp onClick={handleClick} title={'connection'} openPopUp={openPopUp}/> */}
            <SignInPopUp 
            title={'sign up'} 
            openPopUp={openPopUp} 
            setOpenPopUp={setOpenPopUp}
            />
            <LoginPopUp
            title={'connection'}
            openLoginPopUp={openLoginPopUp}
            setOpenLoginPopUp={setOpenLoginPopUp}
            />
            {isSignedIn ? 
                <DomOffice isSignedIn={isSignedIn}/>
                :
                <div></div>
            }
            <LogOutBtn 
            display={isSignedIn ? 'block' : 'none'}
            onClick={logOut}
            >déconnexion</LogOutBtn>
        </LoginContainer>
    )
}

export default Login
