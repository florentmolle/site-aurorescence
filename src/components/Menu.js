import React, { useEffect } from 'react';

import {Link} from 'react-router-dom';

import './Menu.css'




const Menu = ({menuOpen, toggleMenu}) => {


 useEffect(()=>{
        const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach((link)=>{

        let word = link.children[0].children[0].innerText.split('');
        link.children[0].innerHTML = '';
        word.forEach((letter, idx)=>{
            link.children[0].innerHTML += letter === ' ' ? `<span style="--index: ${idx};">\xa0</span>` : `<span style="--index: ${idx};">${letter}</span>`
        })
        let cloneDiv = link.children[0].cloneNode(true);
        cloneDiv.style.position = 'absolute';
        cloneDiv.style.left = '0';
        cloneDiv.style.top = '0';
        link.appendChild(cloneDiv)

    })
 }, [])
 

    


    return (
        <>
            <div className={menuOpen ? "menu-bg" : "menu-bg menu-bgopen"} onClick={toggleMenu}></div>
            <section className={menuOpen ? "menu-container" : "menu-container menu-open"}>
                <div className="menulink-container">
                    <Link className="menu-link" to="/site-aurorescence"
                    onClick={toggleMenu}>
                        <div>
                            <span className="menu-link-text">Accueil</span>
                        </div>
                    </Link>
                    <Link className="menu-link" to="/site-aurorescence/formation" 
                    onClick={toggleMenu}>
                        <div>
                            <span className="menu-link-text">Formation</span>
                        </div>
                    </Link>
                    <Link className="menu-link" to="/site-aurorescence/tourisme" 
                    onClick={toggleMenu}>
                        <div>
                            <span className="menu-link-text">Tourisme</span>
                        </div>
                    </Link>
                    <Link className="menu-link" to="/site-aurorescence/pro" 
                    onClick={toggleMenu}>
                        <div>
                            <span className="menu-link-text">Professionnel</span>
                        </div>
                    </Link>
                    <Link className="menu-link" to="/site-aurorescence/faq" 
                    onClick={toggleMenu}>
                        <div>
                            <span className="menu-link-text">Faq</span>
                        </div>
                    </Link>
                    <Link className="menu-link" to="/site-aurorescence/apropos" 
                    onClick={toggleMenu}>
                        <div>
                            <span className="menu-link-text">À propos</span>
                        </div>
                    </Link>
                    <Link className="menu-link" to="/site-aurorescence/contact" 
                    onClick={toggleMenu}>
                        <div>
                            <span className="menu-link-text">Contact</span>
                        </div>
                    </Link>
                </div>
                <div className="menu-close" onClick={toggleMenu}><div id="closebar-one"></div><div id="closebar-two"></div></div>
            </section>
        </>
    )
}

export default Menu