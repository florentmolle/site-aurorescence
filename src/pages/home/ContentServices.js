import React from 'react';
import styled from 'styled-components';


const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    margin-bottom: 1rem;
`
const ContentImg = styled.img`
    display: block;
    width: 40%;
    object-fit: contain;
    @media(max-width: 768px){
        display: none;
    }
`
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    @media(max-width: 768px){
        width: 90%;
    }
`
const ContentTitle = styled.h3`
    font-size: 3rem;
`
const ContentSubtitle = styled.p`
    font-size: clamp(1.8rem, 2vw, 2.5rem);
    margin: 4rem 0;
    font-weight: 400;
`
const ContentText = styled.p`
    margin: 4rem 0;
    font-size: clamp(1.8rem, 2vw, 2.5rem);
    font-weight: 400;
`


const ContentServices = ({
    contentTitle,
    contentSubtitle,
    contentText,
    image
    }) => {
    return (
        <>
        <ContentContainer>
            <ContentImg src={image}/>
            <ContentBox>
                <ContentTitle>{contentTitle}</ContentTitle>
                <ContentSubtitle>{contentSubtitle}</ContentSubtitle>
                <ContentText>{contentText}</ContentText>
            </ContentBox>
        </ContentContainer> 
        </>
    )
}

export default ContentServices
