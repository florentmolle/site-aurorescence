import React, {useRef} from 'react'
import styled, { keyframes } from 'styled-components'
import Footer from '../../components/Footer'

import { Scrollbar } from 'smooth-scrollbar-react'

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
    margin: auto ;
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
    font-size: clamp(1.7rem, 5vw, 15rem);
    text-transform: uppercase;
    font-family: 'Lora', serif;
    color: rgba(33,33,33, .03);
`
const FormationTitle = styled.h1`
    font-size: clamp(2.5rem, 5vw, 7rem);
    font-family: 'Lora', serif;
    font-weight: 200;
    font-style: italic;
    text-align: center;
    padding: 7rem 0;
    margin-bottom: 10rem;
    opacity:0;
    animation: ${appear} .6s .7s ease-out both;
    @media(max-width: 425px){
        margin-bottom: 0;
    };
`
const ContentProBox = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    opacity: 0;
    animation: ${appear} .6s .9s ease-out both;
    @media(max-width: 1000px){
        grid-template-columns: repeat(1, 1fr);
        row-gap: 10rem;
    };
`
const ContentProInnerBox = styled.div``
const TextTop = styled.p`
    font-size: clamp(1.8rem, 3vw, 3.3rem);
    font-weight: 400;
    animation: ${appear} .6s 1s ease-out both;
`
const ImgContentPro = styled.img`
    width: 70%;
    object-fit: contain;
    justify-self: end;
    @media(max-width: 1000px){
        justify-self: center;
        width: 50%;
    };
`
const TextContentOne = styled.p`
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 300;
    padding: 2rem 0;
    margin: 5rem;
`
const TextDescBox = styled.div`
    min-width: 450px;
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
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 400;
    margin: 1rem 0;
`
const LeafLogo = styled.img`
    width: 3.5rem;
    margin-right: 1rem;
    transform: translateY(.5rem);
`



const Pro = ({
    textTop, 
    textTwo, 
    imgOne,
    textLeafOne,
    textLeafTwo,
    textLeafThree,
    textLeafFour,
    textLeafFive
    }) => {


        const scroll = useRef(null)
     

        function handleScrollTop(){
            scroll.current.offset.y = 0 ;
            document.querySelector('.scroll-content').style.transform = "translate3d(0, 0, 0)"
        }



    return (
        <>
        <Scrollbar ref={scroll}
            damping={0.08}
            style={{height: "100vh"}}
            renderByPixels={true}>
        <FormationContainer>
            <TitleOpacityBox>
                <TitleOpacity>professionnels</TitleOpacity>
                <TitleOpacity>collectivites</TitleOpacity>
            </TitleOpacityBox>
            <FormationTitle>Conduites professionnelles <br></br>du verger</FormationTitle>
            <ContentProBox>
                <ContentProInnerBox>
                    <TextTop>{textTop}</TextTop>
                    <TextContentOne>{textTwo}</TextContentOne>
                    <TextDescBox>
                        <TextLeaf><LeafLogo src={LeafLogoSrc}/>{textLeafOne}</TextLeaf>
                        <TextLeaf><LeafLogo src={LeafLogoSrc}/>{textLeafTwo}</TextLeaf>
                        <TextLeaf><LeafLogo src={LeafLogoSrc}/>{textLeafThree}</TextLeaf>
                        <TextLeaf><LeafLogo src={LeafLogoSrc}/>{textLeafFour}</TextLeaf>
                        <TextLeaf><LeafLogo src={LeafLogoSrc}/>{textLeafFive}</TextLeaf>
                    </TextDescBox>
                </ContentProInnerBox>
                <ImgContentPro src={imgOne}/>
            </ContentProBox>
        </FormationContainer>
        <Footer scrollTop={handleScrollTop}/>
        </Scrollbar>
        </>
    )
}

export default Pro