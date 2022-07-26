import React, { useState, useEffect } from 'react';

import './styles/Cart.css';

const Cart = (props) => {

    const { count } = props; 

    useEffect(() => {
        props.list.map((item) => {
            console.log(item.name);
        })
        // console.log(props.list);
    },[]);
    return(
        <div className = 'checkoutTable'>
            <div>
                <div>Item</div><div>Price</div>
            </div>
            {props.list.map((item) => {
                return (
                    <div className = 'subtotalTable'>
                        <div className = 'itemEntry'>
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div>{item.name}</div>
                            
                        </div>
                        <div>{item.id * 2.5} Rupees</div>
                    </div>
                )
            })}
            <div className = 'totalCount'> 
                <div>Total:</div><div>{count} Rupees</div>
            </div>
        </div>
    )
}

export default Cart;


//figure out logic so that you're not rendering more than one of the same item
//create a temp array and store it in there
//create a total variable which accumulates the total
//put stuff in temp array only if it's not already in there
//this way you have one copy of every item while having correct total
//map from the temp array in the div and render the temp array contents