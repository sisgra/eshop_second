import React from 'react';
import ShopingCart from './ShopingCart';
import TotalPrice from './TotalPrice';

const ShoppingCartContainer =(props)=>{
const{hiddenMenu,cartItems,totalPrice,itemCount, removeItems}=props;

    return(
        <div className={`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}>
            <ShopingCart cartItems={cartItems}  removeItems={removeItems}/>
            <TotalPrice totalPrice={totalPrice} itemCount={itemCount}/>
        </div>
    );
};

export default ShoppingCartContainer;