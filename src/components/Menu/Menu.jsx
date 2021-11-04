import React from 'react';
import { Link } from 'react-router-dom';

import { SiYoutubegaming } from 'react-icons/si'

import './Menu.scss';

export const Menu = () => {
    return (
        <nav className="menu__container">
            <Link to="/" className="menu__logo-box">
                <SiYoutubegaming className="menu__logo" />
                <h1 className="menu__title">Fake Gaming Store</h1>
            </Link>
            <ul className="menu__item-list">
                <Link className="menu__item" to="/"><li>Inicio</li></Link>
                <Link className="menu__item" to="/cart"><li>Carrito</li></Link>
            </ul>
        </nav>
    )
}
