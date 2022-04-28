import React, { useState } from "react";

const Card = ({ gif }) => {
  const [isActive, setIsActive] = useState(false);
  
  const classSwitch = () => {
      isActive ? setIsActive(false) : setIsActive(true);
      // console.log(isActive);
  }

  const addStorage = () => {
    let storedData = window.localStorage.gifs 
      ? window.localStorage.gifs.split(",") 
      : [];
    //Check si l'id est deja dans le tableau
    if (!storedData.includes(gif.id)) {
      storedData.push(gif.id);
      window.localStorage.gifs = storedData;

    } else {
      console.log("Deja ajouté aux favoris");
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.gifs.split(",");
    let newData = storedData.filter((id) => id !== gif.id);
    
    window.localStorage.gifs = newData;
    window.location.reload();
    
  };
    
  return (
    <li className="card">
      <img src={ gif.images.original.url } alt="Gif" />
      <div className="infos">
        <h3>{ gif.title }</h3>
        <div className="placement">
            {gif.id ? (
                <div className={isActive ? "heart is-active" : "heart"} onClick= { () => {
                  classSwitch(); 
                  addStorage();
                }}> 
                </div>
                ) : (
                <div className="cross" onClick={() => deleteStorage()} >Supprimer des favoris</div>
                )
            }
        </div>
        <div className="cross" onClick={() => deleteStorage()} >Supprimer des favoris</div>
      </div>
    </li>
  );
};

export default Card;