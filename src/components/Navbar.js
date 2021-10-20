import React from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'

import LogoSrc from '../img/logoAI02.svg'
import LeafLogoSrc from '../img/leafColor02.svg'



const NavContainer = styled.nav`
    width: 100%;
    height: 8rem;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 20;
    background: rgba(247,243,240, .8);
    padding-bottom: 1rem;
    // border: 1px solid;
`
const NavUl = styled.ul`
    width: 90%;
    position: relative;
    display: flex;
    justify-content: space-between;
    @media(max-width: 425px){
        justify-content: flex-end;
    }
`
const ContactLink = styled(Link)`
    display: flex;
    align-items: flex-end;
    list-style: none;
    font-size: 2rem;
    color: var(--dark-color);
    text-decoration: none;
    margin-bottom: .5rem;
    text-transform: uppercase;
    transition: .3s;
    &:hover{
        color: var(--hover-color);
    }
    @media(max-width: 425px){
        display: none;
    }
`
const MenuLink = styled.p`
    display: flex;
    align-items: flex-end;
    position: relative;
    list-style: none;
    font-size: 2rem;
    color: var(--dark-color);
    text-decoration: none;
    margin-bottom: .5rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s;
    &:hover{
        color: var(--hover-color);
    }
`
const Logo = styled.img``
const LeafLogo = styled.img`
    width: 4rem;
    margin-left: .1rem;
    // border: 1px solid;
`
const LogoLink = styled(Link)`
    position: absolute;
    top: 1vh;
    width: 40%;
    max-width: 20rem;
    object-fit: contain;
    @media(max-width: 425px){
        left: 5%;
    }
`


const Navbar = ({toggleMenu}) => {


    return (
        <>
            <NavContainer>
                <NavUl>
                    <ContactLink to="/site-aurorescence">Accueil</ContactLink>
                    <MenuLink onClick={toggleMenu}>Menu <LeafLogo src={LeafLogoSrc}/></MenuLink>
                </NavUl>
                <LogoLink to='/site-aurorescence'><Logo src={LogoSrc}/></LogoLink>
            </NavContainer>
        </>
    )
}

export default Navbar
