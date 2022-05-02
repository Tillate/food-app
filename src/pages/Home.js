import React from 'react';
import Navigation from '../components/Navigation';
import Products from '../components/Products';
import Test from '../components/Test';


const home = () => {

    return (
        <header>
            <Navigation />
            <Test name="Allan"/>
            <h1>Accueil</h1>
            <Products />
        </header>
    );
};

export default home;