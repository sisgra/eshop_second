import React from 'react';
import Button from "./reusableComponents/Button"

const CardInfo =({shoePrice,updateCard})=>{
    return(
        <div className="cardInfo">
            <p>{shoePrice}€</p>
            <Button addItem={updateCard}/>
        </div>
    );
};

export default CardInfo