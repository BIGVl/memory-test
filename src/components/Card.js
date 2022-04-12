import React from 'react';

const Card = (props) => {
  return (
    <div key={props.champion} className="card" id={props.champion} onClick={props.handleCardClick}>
      <img className="champion-img" src={props.championImg} alt={`League of Legends champion  ${props.champion}`}></img>
      <div className="champion-name">{props.champion}</div>
    </div>
  );
};

export default Card;
