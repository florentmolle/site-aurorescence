import React, {useRef} from 'react';
import styled, {keyframes} from 'styled-components';

import { Scrollbar } from 'smooth-scrollbar-react';


import Footer from '../../components/Footer'
import QuiSuisJe from './QuiSuisJe';
import Services from './Services';
import Contact from './Contact';
import {QsjTxt} from './HomeData'

import ImgOneSrc from '../../images/img01.jpg';



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
const appearTwo = keyframes`
    from{
        transform: translateY(-4rem);
        opacity: 0;
    };
    to{
        transform: translateY(-8rem);
        opacity: 1;
    };
`
const appearTwoSd = keyframes`
    from{
        transform: translateY(-4rem);
        opacity: 0;
    };
    to{
        transform: translateY(-6.5rem);
        opacity: 1;
    };
`
const appearThreeSd = keyframes`
    from{
        transform: translateY(-4rem);
        opacity: 0;
    };
    to{
        transform: translateY(-5.5rem);
        opacity: 1;
    };
`
const appearImg = keyframes`
    from{
        transform: translateY(-20px);
        opacity: 0;
    };
    to{
        transform: translateY(-40px);
        opacity: 1;
    };
`

const HomeWrapper = styled.main`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`
const Title = styled.h1`
    color: var(--dark-color);
    font-size: clamp(3.5rem, 7vw, 10rem);
    font-weight: 300;
    text-align: center;
    margin-top: 25vh;
    font-family: var(--title-font);
    z-index: 2;
    animation: ${appear} .6s .5s ease-out both;
`
const ImgOne = styled.img`
    min-width: 300px;
    width: 80%;
    max-width: 600px;
    object-fit: contain;
    z-index: 1;
    animation: ${appearImg} .6s .7s ease-out both;
`
const TitleUnder = styled.h2`
    color: var(--dark-color);
    font-size: clamp(3.5rem, 7vw, 10rem);
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    font-family: var(--title-font);
    z-index: 2;
    transform: translateY(-8rem);
    border-bottom: 2px solid rgba(33, 33, 33, .1);
    padding-bottom: 20rem;
    animation: ${appearTwo} .6s .7s ease-out both;
    @media(max-width: 768px){
        animation: ${appearTwoSd} .6s .7s ease-out both;
    }
    @media(max-width: 350px){
        animation: ${appearThreeSd} .6s .7s ease-out both;
        padding-bottom: 10rem;
    }
`


const Home = () => {

    const scroll = useRef(null)
    const img = useRef(null)
     

    function handleScrollTop(){
        scroll.current.offset.y = 0 ;
        document.querySelector('.scroll-content').style.transform = "translate3d(0, 0, 0)";
    }




    return (
        <>
            <Scrollbar ref={scroll}
            damping={0.08}
            style={{height: "100vh"}}
            >
            <HomeWrapper>
                    <Title>Expériences autour<br></br> 
                    du patrimoine végétal</Title>
                    <ImgOne src={ImgOneSrc} ref={img} />
                    <TitleUnder>Aurorescence</TitleUnder>
                    <QuiSuisJe {...QsjTxt} />
                    <Services/>
                    <Contact/>
            </HomeWrapper>
            <Footer scrollTop={handleScrollTop}/>
            </Scrollbar>
        </>
    )
}

export default Home
