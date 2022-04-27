import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from "./Card";


const Products = () => {
    const [dataGif, setDataGif] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.giphy.com/v1/gifs/trending?api_key=ufkzL96rHd8HrvtN3l7Qew95ZEzCEfKI&limit=25&rating=g')
            .then((res) => setDataGif(res.data.data));
    }, []);

    console.log(dataGif);


    return (
        <div>
            <h1>My Gifs</h1>
            <ul>
                {dataGif.map((gif) => (
                    <Card key={gif.id} gif={gif} />
                ))}
            </ul>
        </div>
    );
};

export default Products;