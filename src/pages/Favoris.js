import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';

const Favoris = () => {
    const [listFavoris, setListFavoris] = useState([]);

    useEffect(() => {
        let gifsId = window.localStorage.gifs
            ? window.localStorage.gifs.split(",")
            : [];

            console.log(gifsId);
        for (let i = 0; i < gifsId.length; i++) {
            axios
            .get(`https://api.giphy.com/v1/gifs/${gifsId[i]}?api_key=ufkzL96rHd8HrvtN3l7Qew95ZEzCEfKI`)
            .then((res) => setListFavoris((listFavoris) =>[...listFavoris, res.data.data]));
        }
    }, []);



    return (
        <div>
            <Navigation />
            <h1>Favoris</h1>
            <ul className="result card-list">
                {listFavoris.length > 0 ? (
                    listFavoris.map((gif) => <Card gif={gif} key={gif.id} />)
                ) : (
                    <h2>Aucun coup de coeur pour le moment</h2>
                )}
            </ul>

        </div>
    );
};

export default Favoris;