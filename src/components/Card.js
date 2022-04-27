import React, { useState } from "react";

const Card = ({ gif }) => {
    const [isActive, setIsActive] = useState(false);
    const ClassSwitch = () => {
        isActive ? setIsActive(false) : setIsActive(true);
        console.log(isActive);
    }
    
  return (
    <li className="card">
      <img src={gif.images.original.url} alt="Gif" />
      <div className="infos">
        <h3>{gif.title}</h3>
        <div className="placement">
            {gif.id ? (
                <div className={isActive ? "heart is-active" : "heart"} onClick= {ClassSwitch}></div>
                ) : (
                <div className="heart" >Supprimer de la liste</div>
                )
            }
        </div>
        
      </div>
    </li>
  );
};

export default Card;