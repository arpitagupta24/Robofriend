import React from "react";
import './Card.css';

const Card = ({id, name, email}) =>{
    return(
        <div className=" tc bg-light-yellow dib br3 pd3 ma2 grow bw2 shadow-5 xyz">
        <img alt='Robots' src={`https://robohash.org/${id}`}/>
        <div>
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
        </div>
    );
}

export default Card;

