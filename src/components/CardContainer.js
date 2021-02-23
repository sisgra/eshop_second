import React from 'react';
import Card from './Card';

const CardContainer=({updateCard})=>{
    return(
        <div className="cardContainer">
            <Card updateCard={updateCard}/>
        </div>
    );
};

export default CardContainer