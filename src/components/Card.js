import React from "react";

const Card = ({ gif }) => {

  return (
    <li className="card">
      <img src={gif.images.original.url} alt="" />
      <div className="infos">
        <h2>{gif.title}</h2>
      </div>
    </li>
  );
};

export default Card;