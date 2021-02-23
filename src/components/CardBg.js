import React from 'react';

const CardBg=({shoeImg})=>{
    return (
        <div className="cardBg">
            <img src={shoeImg} alt="shoe"></img>
        </div>
    )
}

export default CardBg