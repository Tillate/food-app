import React from 'react';
import Logo from '../components/Logo';
import { NavLink } from 'react-router-dom';

function Navigation () {
    return (
        <nav className='nav-container'>
            <Logo/>
            <ul>
                <li>
                   <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                   <NavLink to="/favoris">Favoris</NavLink>
                </li>
                <li>
                   <NavLink to="/contact">Contact</NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default Navigation;