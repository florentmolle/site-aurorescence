import React, {useRef} from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../../components/Footer';

import {Scrollbar} from 'smooth-scrollbar-react'

import LeafLogoSrc from '../../img/leafColor03.svg'


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

const FormationContainer = styled.main`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding-top: 15rem;
    @media(max-width: 350px){
        padding-top: 10rem;
    };
`
const TitleOpacityBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    animation: ${appear} .6s .5s ease-out both;
`
const TitleOpacity = styled.p`
    font-size: clamp(2rem, 6vw, 17rem);
    text-transform: uppercase;
    font-family: 'Lora', serif;
    color: rgba(33,33,33, .03);
`
const FormationTitle = styled.h1`
    font-size: clamp(2.5rem, 5vw, 7rem);
    font-family: 'Lora', serif;
    font-weight: 200;
    font-style: italic;
    color: var(--dark-color);
    text-align: center;
    padding: 7rem 0;
    margin-bottom: 10rem;
    opacity:0;
    animation: ${appear} .6s .7s ease-out both;
    @media(max-width: 350px){
        margin-bottom: 0;
    };
`
const ImgContentBox = styled.div`
    width: 100%;
    height: 45vw;
    position: relative;
    animation: ${appear} .6s 1s ease-out both;
`
const ImgContentOne = styled.img`
    width: 40vw;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 30%;
    transform: translate(-50%);
    margin: 0 7rem 5rem 0;
    z-index: 1;
    @media(max-width: 768px){
        width: 50vw;
    };
`
const ImgContentOnebis = styled.img`
    width: 40vw;
    object-fit: contain;
    position: absolute;
    top: 35%;
    left: 70%;
    transform: translate(-50%);
    margin: 0 7rem 5rem 0;
    @media(max-width: 768px){
        width: 50vw;
    };
`
const ContentOneBox = styled.article`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    animation: ${appear} .6s 1s ease-out both;
    @media(max-width: 1000px){
        justify-content: center;
    };
    @media(max-width: 425px){
        margin-bottom: 7rem;
    };
`
const TextTopBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 5%;
    @media(max-width: 1000px){
        width: 100%;
        padding-left: 0%;
        justify-content: center;
        align-items: center;
        text-align: center;
    };
`
const TextTop = styled.p`
    width: 100%;
    font-size: clamp(1.8rem, 3vw, 3.3rem);
    font-weight: 400;
    margin: 5rem 0;
    @media(max-width: 768px){
        width: 80%;
        margin: 5rem 0;
    };
    @media(max-width: 350px){
        width: 100%;
    };
`
const TextContentOne = styled.p`
    width: 100%;
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 300;
    padding: 2rem 0;
    margin-bottom: 5rem;
    @media(max-width: 1000px){
        width: 80%;
    };
    @media(max-width: 425px){
        width: 90%;
    };
    @media(max-width: 350px){
        width: 100%;
    };
`
const TextDescBox = styled.div`
    width: 40%;
    min-width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 1000px){
        width: 80%;
        min-width: 250px;
    };
    @media(max-width: 425px){
        width: 90%;
    };
    @media(max-width: 350px){
        width: 100%;
    };
`

const TextLeaf = styled.p`
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    font-weight: 400;
    margin: 1rem 0;
`
const LeafLogo = styled.img`
    width: 3.5rem;
    margin-right: 1rem;
    transform: translateY(.5rem);
`
const FormationTitleTwo = styled.h2`
    font-size: clamp(2rem, 5vw, 7rem);
    font-family: 'Lora', serif;
    font-weight: lighter;
    font-style: italic;
    text-align: center;
    margin: 10rem 0 20rem 0;
    opacity: .85;
    @media(max-width: 425px){
        margin-bottom: 7rem;
    };
`
const ContentTwoBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    margin-bottom: 10rem;
    @media(max-width: 768px){
        justify-content: center;
        margin-bottom: 3rem;
    };
    @media(max-width: 425px){
        margin-bottom: 1rem;
    };
`
const TextLeafBox = styled.div`
    max-width: 800px;
    width: 50%;
    min-width: 350px;
    @media(max-width: 768px){
        width: 80%;
        margin-top: 5rem;
        min-width: 250px;
    };
    @media(max-width: 350px){
        width: 100%;
    };
`
const ImgContentTwo = styled.img`
    max-width: 800px;
    width: 40%;
    min-width: 350px;
    @media(max-width: 768px){
        width: 100%;
        min-width: 250px;
    };
`
const Separator = styled.div`
    width: 50%;
    height: .2rem;
    background: var(--dark-color);
    opacity: .15;
    margin: 10rem 0;
`


const Formation= ({
    textTop, 
    textTwo, 
    imgOne,
    imgOnebis,
    textLeafOne,
    textLeafTwo,
    textLeafThree,
    textLeafFour,
    textLeafFive,
    imgTwo
    }) => {


        const scroll = useRef(null);
     

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
                <FormationContainer>
                    <TitleOpacityBox>
                        <TitleOpacity>particuliers</TitleOpacity>
                        <TitleOpacity>residentiels</TitleOpacity>
                    </TitleOpacityBox>
                    <FormationTitle>Conseil et formation <br></br>Créations et entretiens de vergers</FormationTitle>
                    <ImgContentBox>
                        <ImgContentOne src={imgOne}/>
                        <ImgContentOnebis src={imgOnebis}/>
                    </ImgContentBox>
                    <Separator/>
                    <ContentOneBox>
                        <TextTopBox>
                            <TextTop>{textTop}</TextTop>
                            <TextContentOne>{textTwo}</TextContentOne>
                        </TextTopBox>
                        <TextDescBox>
                            <TextLeaf><LeafLogo src={LeafLogoSrc}/>{textLeafOne}</TextLeaf>
                            <TextLeaf><LeafLogo src={LeafLogoSrc}/>{textLeafTwo}</TextLeaf>
                            <TextLeaf><LeafLogo src={LeafLogoSrc}/>{textLeafThree}</TextLeaf>
                        </TextDescBox>
                    </ContentOneBox>
                    <Separator/>
                    <FormationTitleTwo>" Devenez spécialiste de la taille<br></br>adaptée à chaque espèce fruitière "</FormationTitleTwo>
                    <ContentTwoBox>
                        <TextLeafBox>
                            <TextLeaf><LeafLogo src={LeafLogoSrc}/>{textLeafFour}</TextLeaf>
                            <TextLeaf><LeafLogo src={LeafLogoSrc}/>{textLeafFive}</TextLeaf>
                        </TextLeafBox>
                        <ImgContentTwo src={imgTwo}/>
                    </ContentTwoBox>
                </FormationContainer>
                <Footer scrollTop={handleScrollTop}/>
                </Scrollbar>
        </>
    )
}

export default Formation