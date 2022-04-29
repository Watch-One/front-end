import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">WatchOne</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contactanos</Link>
                        <Link to="/">Terminos de servicio</Link>
                        <Link to="/">Sobre nosotros</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">En vivo</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Política de Privacidad</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Deberias ver</Link>
                        <Link to="/">Publicación reciente</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
