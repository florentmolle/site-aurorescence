import React from 'react';
import styled, {keyframes} from 'styled-components';
import Footer from '../../components/Footer';

import QuestionBox from '../../components/QuestionBox'



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


const FaqContainer = styled.section`
    width: 90%;
    margin: auto;
    padding-top: 25vh;
    animation: ${appear} .6s .5s ease-out both;
    @media(max-width: 1024px){
        width: 80%;
    }
    @media(max-width: 768px){
        width: 100%;
    }
`
const FaqBox = styled.div`
    // border-radius: 5rem;
    margin-bottom: 30vh;
    padding: 3rem;
    // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media(max-width: 768px){
        box-shadow: none;
        padding: 0;
        margin-bottom: 10vh;
    }
    @media(max-width: 350px){
        border-radius: 0;
    }
`

const FaqTitle = styled.h1`
    font-size: clamp(2.5rem, 5vw, 7rem);
    font-family: 'Lora', serif;
    font-weight: 200;
    font-style: italic;
    color: var(--dark-color);
    text-align: center;
    padding: 7rem 0;
    margin-bottom: 10rem;
`


const Faq = () => {
    return (
        <FaqContainer>
            <FaqBox>
                <FaqTitle>Foire aux questions</FaqTitle>
                <QuestionBox/>
            </FaqBox>
            <Footer/>
        </FaqContainer>
    )
}

export default Faq