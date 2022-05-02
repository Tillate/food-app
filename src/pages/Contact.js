import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
    const [compteur, setCompteur] = useState(0);

    const [time, setTime] = useState(new Date().toLocaleDateString());
    const [hours, setHours] = useState(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());

  

    return (
      <div>
        <Navigation />
        <h1>Page contact</h1>
        <div className="compteur">
          <h2>Test compteur</h2>
          <button
            onClick={() => {
              setCompteur(compteur - 1);
              setHours(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
            }}
          >
            -
          </button>
          <span>{compteur}</span>
          <button onClick={() => {
              setCompteur(compteur + 1);
              setHours(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
              }}>+</button>
          {compteur < 10 ? <p>Moins de 10</p> : <p>Plus de 10</p>}
        </div>

        <hr />

        <div>
          <p>Nous somme le : {time}</p>
          <p>Il est : {hours}</p>
        </div>
      </div>
    );
};

export default Contact;