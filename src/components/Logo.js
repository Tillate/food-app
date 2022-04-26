import React from 'react';
import logo from '../assets/img/logo1.png'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img src={ logo } alt="logo de food-app" />
        </div>
    );
};

export default Logo;