import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {
    const cardArray = robots.map((user,i)=>{
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
    });
    
    return(
        <>
        {cardArray}
        </>
    );
}

export default CardList;

//cardlist is parent of card component
