import React, {useRef} from 'react';
import styled, {keyframes} from 'styled-components';


import LeafQsjSrc from '../../img/leafColor03.svg'
import ProfilePicSrc from '../../images/profile-img.jpg'
import ProfilePic02Src from '../../images/img02.jpg'
import Footer from '../../components/Footer';

import { Scrollbar } from 'smooth-scrollbar-react';


const appear = keyframes`
    from{
        transform: translateY(2rem);
        opacity: 0;
    };
    to{
        transform: translateY(0);
        opacity: 1;
    };
`
const QsjContainer = styled.section`
    width: 80%;
    margin: auto;
    padding-top: 20rem;
    @media(max-width: 768px){
        width: 90%;
    };
`
const TitleQsj = styled.p`
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 300;
    color: var(--dark-color);
    text-transform: uppercase;
    animation: ${appear} .6s .5s ease-out both;
`
const LeafQsj = styled.img`
    width: 5rem;
    margin-right: 1rem;
`
const NameQsj = styled.h2`
    font-size: clamp(3rem, 7vw, 7rem);
    text-align: right;
    font-weight: lighter;
    font-family: 'Lora', serif;
    animation: ${appear} .6s .7s ease-out both;
`
const ProfileBox = styled.article`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5rem;
    @media(max-width: 1024px){
        flex-direction: column;
        align-items: center;
    };
`
const ProfileTextBox = styled.div`
    width: 45%;
    animation: ${appear} .6s 1.3s ease-out both;
    @media(max-width: 1024px){
        width: 80%;
    };
    @media(max-width: 768px){
        width: 90%;
        margin-top: 3rem;
    };
    @media(max-width: 425px){
        width: 100%;
    };
`

const ProfilePic = styled.img`
    width: 50%;
    height: 100%;
    object-fit: contain;
    animation: ${appear} .6s 1s ease-out both;
    @media(max-width: 1024px){
        width: 80%;
    };
    @media(max-width: 768px){
        width: 90%;
    };
    @media(max-width: 425px){
        width: 100%;
    };
`
const ProfileText = styled.p`
    font-size: clamp(1.8rem, 3vw, 2rem);
    font-weight: 300;
    margin: 1.5rem ;
`
const ProfilePic02 = styled.img`
    width: 100%;
    object-fit: contain;
    margin-top: 8rem;
    animation: ${appear} .6s 1.5s ease-out both;
`



const QuiSuisJe = ({
    descriptionOne, 
    descriptionTwo, 
    descriptionThree, 
    descriptionFour, 
    descriptionfive
    }) => {

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
            <QsjContainer>
                <TitleQsj><LeafQsj src={LeafQsjSrc}/>Qui suis-je</TitleQsj>
                <NameQsj>Molle Dominique</NameQsj>
                <ProfileBox>
                    <ProfilePic src={ProfilePicSrc} />
                    <ProfileTextBox>
                        <ProfileText>{descriptionOne}</ProfileText>
                        <ProfileText>{descriptionTwo}</ProfileText>
                        <ProfileText>{descriptionThree}</ProfileText>
                        <ProfileText>{descriptionFour}</ProfileText>
                        <ProfileText>{descriptionfive}</ProfileText>
                        <ProfilePic02 src={ProfilePic02Src}/>
                    </ProfileTextBox>
                </ProfileBox>
            </QsjContainer>
            <Footer scrollTop={handleScrollTop}/>
            </Scrollbar>
        </>
    )
}

export default QuiSuisJe