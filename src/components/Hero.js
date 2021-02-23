import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';
import CardContainer from './CardContainer';
import Nav from './Nav';
import ShoppingCartContainer from './ShoppingCartContainer';

const Hero =()=>{
    const[totalPrice,setTotalPrice]=useState(0);
    const[itemCount,setItemCount]=useState(0);
    const[cartItems,setCartItems]=useState([]);
    const[hiddenMenu,setHiddenMenu]=useState(false);

    const updateCard=(shoeImg,shoePrice)=>{
        setItemCount((prevCount)=>prevCount+1);
        setTotalPrice((prevPrice)=>prevPrice+shoePrice);

        if (cartItems.find(item=>item.img===shoeImg)){
            const result=cartItems.find((item)=> item.img===shoeImg);
            result.cartCount++;
            return; 
        }

        
            setCartItems([
                ...cartItems,
                {
                    img: shoeImg, price:shoePrice, id:uuidv4(),cartCount:1
                },
            ]);
        };
    

    const removeItems=(id)=>{
        const newItems =cartItems.filter(cartItem => cartItem.id !==id);
        setCartItems(newItems);

        const itemCountResult = newItems.reduce(
            (acc,val)=>(acc += val.cartCount),
        );
        setItemCount(itemCountResult);

        const priceResult =newItems.reduce(
            (acc,val)=> (acc += val.price * val.cartCount),
            0
        );
        setTotalPrice(priceResult)
    }

    return(
        <section className="hero">
            <Nav
                itemCount={itemCount}
                hiddenMenu={hiddenMenu}
                setHiddenMenu={setHiddenMenu}
            />
            <Container>
                <CardContainer updateCard={updateCard}/>
                <ShoppingCartContainer
                    hiddenMenu={hiddenMenu}
                    cartItems={cartItems}
                    itemCount={itemCount}
                    totalPrice={totalPrice}
                    removeItems={removeItems}
                />
            </Container>
        </section>
    )
}

export default Hero