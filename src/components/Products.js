import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('')
            .then((res) => setData(res.data));
    },  []);




    return (
        <div>
            <h1>My products</h1>
        </div>
    );
};

export default Products;