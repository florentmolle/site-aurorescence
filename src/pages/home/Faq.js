import React from 'react';
import styled from 'styled-components';

import QuestionBox from '../../components/QuestionBox'



import LeafServicesSrc from '../../img/leafColor03.svg';


const FaqContainer = styled.section`
    // min-width: 32rem;
    width: 70%;
    padding-top: 25vh;
    @media(max-width: 1024px){
        width: 80%;
    }
    @media(max-width: 768px){
        width: 90%;
    }
    @media(max-width: 425px){
        width: 100%;
    }
`
const FaqBox = styled.div`
    border-radius: 5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media(max-width: 350px){
        border-radius: 0;
    }
`

const FaqTitle = styled.h1`
    font-size: clamp(2rem, 5vw, 3.5rem);    
    font-weight: 400;
    color: var(--dark-color);
    text-align: center;
    opacity: .8;
`
const LeafServices = styled.img`
    width: 4rem;
    margin: 3rem;
`


const Faq = () => {
    return (
        <FaqContainer>
            <FaqBox>
                <LeafServices src={LeafServicesSrc}/>
                <FaqTitle>Foire aux questions</FaqTitle>
                <QuestionBox/>
            </FaqBox>
        </FaqContainer>
    )
}

export default Faq