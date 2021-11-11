import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

import ContentServices from './ContentServices';
import {
    OngletsContentOne, 
    OngletsContentTwo, 
    OngletsContentThree
} from './HomeData';


import ArrowRightSrc from '../../img/arrow-right.svg';


const OngletsBox = styled.div`
    width: 100%;
    height: ${props => props.toggle};
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    overflow: hidden;
    transition: all .4s ease-out;
    border-top: 1px solid var(--dark-color);
`

const OngletsTitleBox = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    font-size: 4rem;
    font-weight: 300;
    margin: 0 0 5rem 5rem;
    @media(max-width: 350px){
        width: 95%;
        margin: 0 1rem;
    }
`
const OngletsContentBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 3rem;
    font-weight: 100;
    opacity: ${props => props.opacity};
    transition: ${props => props.transition};
    transform: translateY(${props => props.goDown});
`
const OngletsTitle = styled.p`
    font-size: clamp(2.8rem, 4vw, 3.5rem);
    font-weight: 100;
    margin-top: 1rem;
`
const OngletsCross =styled.p`
    font-size: clamp(5rem, 7vw, 8rem);
    font-weight: lighter;
    cursor: pointer;
    color: var(--dark-color);
    transform: rotate(${props => props.rotate}) translateY(-1rem);
    will-change: transform;
    transition: all .3s ease;
    z-index: 50;
    &:hover{
        transform: rotate(${props => props.hoverRotate}) translateY(-1rem);
    };
    @media(max-width: 1024px){
        &:hover{
            transform: rotate(${props => props.hoverRotateSd}) translateY(-1rem);
        }
    }
`
const ESPbox = styled.div`
    width: 30rem;
    display: flex;
    justify-content: flex-end;
    margin: 0 2rem 5rem 0;
    &:hover img{
        transform: translate(2rem);
    }
`

const EnSavoirPlus = styled(Link)`
    font-size: clamp(1.8rem, 2vw, 2.5rem);
    color: var(--dark-color);
    text-decoration: none;
`
const LineBreak = styled.hr`
    border-top: 0.5px solid #212121;
`
const ArrowRight = styled.img`
    width: 5rem;
    margin-left: 1rem;
    transition: .3s;
`



const OngletsServices = () => {

    // TOGGLE Onglets
    const [toggle, setToggle] = useState(false);

    const ongletsToggle = ()=>{
            setToggle(!toggle);
    }

    const [toggle2, setToggle2] = useState(false);

    const ongletsToggle2 = ()=>{
            setToggle2(!toggle2)
    }

    const [toggle3, setToggle3] = useState(false);

    const ongletsToggle3 = ()=>{
            setToggle3(!toggle3)
    }


    

    return (
        <>
            <OngletsBox toggle={toggle ? '100%' : '10rem'}>
                <OngletsTitleBox>
                    <OngletsTitle>Formation</OngletsTitle>
                    <OngletsCross 
                        onClick={() => ongletsToggle(1)} 
                        rotate={toggle ? '45deg' : '0deg'}
                        hoverRotate={toggle ? '45deg' : '10deg'}
                        hoverRotateSd={toggle ? '45deg' : '0deg'}
                    >+</OngletsCross>
                </OngletsTitleBox>
                <OngletsContentBox 
                    opacity={toggle ? '1' : '0'} 
                    goDown={toggle ? '0' : '-5rem'}
                    transition={toggle ? '.7s .1s ease' : '.7s ease'}
                    >
                    <ContentServices {...OngletsContentOne}/>
                    <ESPbox>
                        <EnSavoirPlus to="/site-aurorescence/formation">en savoir plus</EnSavoirPlus>
                        <ArrowRight src={ArrowRightSrc}/>
                    </ESPbox>
                </OngletsContentBox>
            </OngletsBox>

            <OngletsBox toggle={toggle2 ? '100%' : '10rem'}>
                <OngletsTitleBox>
                    <OngletsTitle>Tourisme</OngletsTitle>
                    <OngletsCross 
                        onClick={() => ongletsToggle2(2)} 
                        rotate={toggle2 ? '45deg' : '0deg'}
                        hoverRotate={toggle2 ? '45deg' : '10deg'}
                        hoverRotateSd={toggle2 ? '45deg' : '0deg'}
                    >+</OngletsCross>
                </OngletsTitleBox>
                <OngletsContentBox
                    opacity={toggle2 ? '1' : '0'} 
                    goDown={toggle2 ? '0' : '-5rem'}
                    transition={toggle2 ? '.7s .1s ease' : '.7s ease'}
                >
                    <ContentServices {...OngletsContentTwo}/>
                    <ESPbox>
                        <EnSavoirPlus to="/site-aurorescence/tourisme">en savoir plus</EnSavoirPlus>
                        <ArrowRight src={ArrowRightSrc}/>
                    </ESPbox>
                </OngletsContentBox>
            </OngletsBox>

            <OngletsBox toggle={toggle3 ? '100%' : '10rem'}>
                <OngletsTitleBox>
                    <OngletsTitle>Professionnel</OngletsTitle>
                    <OngletsCross 
                        onClick={() => ongletsToggle3(3)} 
                        rotate={toggle3 ? '45deg' : '0deg'}
                        hoverRotate={toggle3 ? '45deg' : '10deg'}
                        hoverRotateSd={toggle3 ? '45deg' : '0deg'}
                    >+</OngletsCross>
                </OngletsTitleBox>
                <OngletsContentBox
                    opacity={toggle3 ? '1' : '0'} 
                    goDown={toggle3 ? '0' : '-5rem'}
                    transition={toggle3 ? '.7s .1s ease' : '.7s ease'}
                >
                    <ContentServices {...OngletsContentThree}/>
                    <ESPbox>
                        <EnSavoirPlus to="/site-aurorescence/pro">en savoir plus</EnSavoirPlus>
                        <ArrowRight src={ArrowRightSrc}/>
                    </ESPbox>
                </OngletsContentBox>
            </OngletsBox>
            <LineBreak/>
        </>
    )
}

export default OngletsServices