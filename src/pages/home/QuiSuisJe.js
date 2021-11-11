import React from 'react';
import styled, {keyframes} from 'styled-components';


import LeafQsjSrc from '../../img/leafColor03.svg'
import ProfilePicSrc from '../../images/profile-img.jpg'
import ProfilePic02Src from '../../images/img02.jpg'


const appearQsj = keyframes`
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
    width: 90%;
    position: relative;
    margin-top: 8rem;
    animation: ${appearQsj} .6s .5s ease-out both;
    @media(max-width: 425px){
        width: 90%;
    };
    @media(max-width: 350px){
        margin-top: 5rem;
    };
`
const TitleQsj = styled.p`
    margin-bottom: 10rem;
    font-size: clamp(2.5rem, 5vw, 5.5rem);
    font-weight: 400;
    color: var(--dark-color);
    text-transform: uppercase;
`
const LeafQsj = styled.img`
    width: 5rem;
    margin-right: 1rem;
    @media(max-width: 425px){
        width: 3.5rem;
    }
`
const NameQsj = styled.h2`
    width:80%;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(3.2rem, 7vw, 7.5rem);
    font-weight: lighter;
    font-family: 'Lora', serif;
    text-align: center;
    color: var(--dark-color);
    @media(max-width: 1024px){
        left: 50%;
    }
    @media(max-width: 425px){
        margin-top: 2rem;
        text-align: center;
    }
`
const ProfileBox = styled.article`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 15rem;
    @media(max-width: 1024px){
        justify-content: center;
    }
`
const ProfileTextBox = styled.div`
    min-width: 300px;
    width: 50%;
    @media(max-width: 1024px){
        width: 80%;
    }
    @media(max-width: 425px){
        width: 100%;
    }
    margin-top: 4rem;
    @media(max-width: 1024px){
        margin-top: 0;
    }
`

const ProfilePic = styled.img`
    width: 45%;
    height: 50%;
    object-fit: contain;
    margin: 2rem 4rem 4rem 0;
    @media(max-width: 1024px){
        width: 80%;
        height: auto;
        margin: 2rem auto;
    }
    @media(max-width: 425px){
        width: 100%;
    }
    
`
const ProfileText = styled.p`
    width: 90%;
    font-size: clamp(1.7rem, 5vw, 2.3rem);
    font-weight: 300;
    margin: 1.5rem ;
`
const ProfilePic02 = styled.img`
    display: block;
    width: 100%;
    height: 70%;
    object-fit: contain;
    margin-top: 5rem;
    @media(max-width: 1024px){
        display: none;
    }
`



const QuiSuisJe = ({
    descriptionOne, 
    descriptionTwo, 
    descriptionThree, 
    descriptionFour, 
    descriptionfive
    }) => {


    return (
        <>
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
        </>
    )
}

export default QuiSuisJe
