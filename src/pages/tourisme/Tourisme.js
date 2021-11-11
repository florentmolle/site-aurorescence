import React, {useRef} from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import styled, {keyframes} from 'styled-components';
import Footer from '../../components/Footer';



const appearText = keyframes`
    from{
        transform: translateY(8rem);
        opacity: 0;
    };
    to{
        transform: translateY(0);
        opacity: 1;
    };
`

const TourismeContainer = styled.main`
    width: 100%;
`
const TourismecontentBox = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15rem 0;
`
const ContentWrapper = styled.div`
    width: 80%;
`
const TourismeTitle = styled.h1`
    width: 80%;
    font-size: clamp(2.5rem, 5vw, 7rem);
    font-style: italic;
    font-family: 'Lora', serif;
    font-weight: 200;
    text-transform: uppercase;
    color: var(--dark-color);
    text-align: center;
    margin: 10rem auto 7rem auto;
    animation: ${appearText} .8s .5s ease-out both;
    @media(max-width: 425px){
        width: 100%;
    };
`
const TourismeSubtitle = styled.h2`
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: 300;
    color: var(--dark-color);
    text-align: center;
    animation: ${appearText} .8s .7s ease-out both;
`
const TextleafBox = styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 5rem;
    column-gap: 2rem;
    margin-top: 15rem;
    @media(max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
    }
`
const TextleafInnerBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${appearText} .8s 1s ease-out both;
`
const ImgCategoryBox = styled.div`
    width: 80%;
    position: relative;
    overflow: hidden;
`
const ImgTourismeCategory = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const HoverImgBgLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(21,21,21);
    background: linear-gradient(0deg, rgba(21,21,21,1) 0%, rgba(255,255,255,0) 100%);
    opacity: 0;
    transition: .5s;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
    &:hover+p{
        transition: .5s ease-out;
        transform: translateY(3rem);
        opacity: 1;
    }
`
const HoverImgTextLayer = styled.p`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--light-color);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2rem;
    transition: .3s ease-in;
    transform: translateY(5rem);
    opacity: 0;
    pointer-events: none;
`
const TextLeaf = styled.p`
    position: relative;
    width: 80%;
    font-size: clamp(1.3rem, 3vw, 2.2rem);
    margin: 2rem 4rem;
    @media(max-width: 425px){
        width: 100%;
    };
`


const Tourisme = ({
    imgCategoryOne,
    imgCategoryTwo,
    imgCategoryThree,
    imgCategoryFour,
    subtitle,
    textOneStrong,
    textOne,
    textTwoStrong,
    textTwo,
    textThreeStrong,
    textThree,
    textFourStrong,
    textFour
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
        <TourismeContainer>
            <TourismecontentBox>
                <ContentWrapper>
                    <TourismeTitle>Tourisme autour du <br></br> patrimoine végétal</TourismeTitle>
                    <TourismeSubtitle>{subtitle}</TourismeSubtitle>
                    <TextleafBox>
                        <TextleafInnerBox>
                            <ImgCategoryBox>
                                <ImgTourismeCategory src={imgCategoryOne}/>
                                <HoverImgBgLayer/>
                                <HoverImgTextLayer>en savoir plus</HoverImgTextLayer>
                            </ImgCategoryBox>
                            <TextLeaf><strong>{textOneStrong}</strong>{textOne}</TextLeaf>
                        </TextleafInnerBox>
                        <TextleafInnerBox>
                            <ImgCategoryBox>
                                <ImgTourismeCategory src={imgCategoryTwo}/>
                                <HoverImgBgLayer/>
                                <HoverImgTextLayer>en savoir plus</HoverImgTextLayer>
                            </ImgCategoryBox>
                            <TextLeaf><strong>{textTwoStrong}</strong>{textTwo}</TextLeaf>
                        </TextleafInnerBox>
                        <TextleafInnerBox>
                            <ImgCategoryBox>
                                <ImgTourismeCategory src={imgCategoryThree}/>
                                <HoverImgBgLayer/>
                                <HoverImgTextLayer>en savoir plus</HoverImgTextLayer>
                            </ImgCategoryBox>
                            <TextLeaf><strong>{textThreeStrong}</strong>{textThree}</TextLeaf>
                        </TextleafInnerBox>
                        <TextleafInnerBox>
                            <ImgCategoryBox>
                                <ImgTourismeCategory src={imgCategoryFour}/>
                                <HoverImgBgLayer/>
                                <HoverImgTextLayer>en savoir plus</HoverImgTextLayer>
                            </ImgCategoryBox>
                            <TextLeaf><strong>{textFourStrong}</strong>{textFour}</TextLeaf>
                        </TextleafInnerBox>
                    </TextleafBox>
                </ContentWrapper>
            </TourismecontentBox>
        </TourismeContainer>
        <Footer scrollTop={handleScrollTop}/>
        </Scrollbar>
        </>
    )
}

export default Tourisme
