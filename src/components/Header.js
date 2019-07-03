import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../assets/logo.svg';
import plus from '../assets/plus.svg';

export default function Header() {
    return(
        <header id="main-header">
            <div className="header-content">
                <Link to='/'>
                    <img src={logo} alt="Appedidos" />
                </Link>
                <Link to='/New'>
                    <img src={plus} alt="Criar publicação" />
                </Link>
            </div>
        </header>
    );
}