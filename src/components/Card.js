import React from 'react';
import CardBg from './CardBg';
import CardInfo from './Cardinfo';
import ShopData from './ShopData'

const Card =({updateCard})=>{
    return(
       <>
        {ShopData.map((shoe,index)=>(
            <div key={index} className="card">
                <CardBg shoeImg={shoe.cardImg}/>
                <CardInfo 
                    shoePrice={shoe.cardPrice}
                    updateCard={()=> updateCard(shoe.cardImg,shoe.cardPrice)}
                    />
            </div>
        ))}
       </>
    )
}

export default Card