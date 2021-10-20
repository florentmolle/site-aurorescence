import React from 'react';
import styled from 'styled-components';

import OngletsServices from './OngletsServices';

import LeafServicesSrc from '../../img/leafColor03.svg'


const ServicesContainer = styled.section`
    width: 80%;
    margin-top: 17rem;
    @media(max-width: 500px){
        width: 95%;
    }
    
`
const TitleServices = styled.p`
    font-size: clamp(2rem, 5vw, 3.5rem);    
    font-weight: 400;
    color: var(--dark-color);
    text-transform: uppercase;
`
const LeafServices = styled.img`
    width: 5rem;
    margin-right: 1rem;
    @media(max-width: 425px){
        width: 3.5rem;
    }
` 
const TextServicesSmall = styled.p`
    font-size: clamp(1.8rem, 2vw, 2rem);
    font-weight: 300;
    margin: 2rem 0 10rem 5rem;
    @media(max-width: 350px){
        margin: 2rem 0 10rem 2rem
    }
`
const OngletsServicesBox = styled.div`
    width: 100%;
`


const Services = () => {


    return (
        <>
        <ServicesContainer>
            <TitleServices><LeafServices src={LeafServicesSrc}/>les services proposés</TitleServices>
            <TextServicesSmall>Formation - Expertise et conseils - 
                                Démonstrations et balades autours du patrimoine végétal, 
                                agricole et paysager.
            </TextServicesSmall>
            <OngletsServicesBox>
                <OngletsServices/>
            </OngletsServicesBox>
        </ServicesContainer>
        </>
    )
}

export default Services
