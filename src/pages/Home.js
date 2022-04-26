import React from 'react';
import Navigation from '../components/Navigation';
import Products from '../components/Products';


const home = () => {
    return (
        <header>
            <Navigation />
            <h1>Hello world ! </h1>
            <Products />
        </header>
    );
};

export default home;