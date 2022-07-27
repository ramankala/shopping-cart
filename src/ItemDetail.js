import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './styles/ItemDetail.css';

const ItemDetail = (props) => {

    const { handleCart } = props;

    const [items, setItems] =  useState([]);

    let { id } = useParams();

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`, { mode: 'cors' });
        const data = await fetchItem.json();
        data.data.quantity = 1;
        setItems(data.data);
    }  

    const handleIncrement = () => {
        setItems(prevState => {
            return {
                ...prevState,
                quantity: prevState.quantity + 1,
            }
        });
    }

    const handleDecrement = () => {
        setItems(prevState => {
            return {
                ...prevState,
                quantity: prevState.quantity - 1 || 1
            }
        });
    }

    return (
        <div className = 'itemDetailContainer'>
            <h1>{items.name}</h1>
            <div className = 'itemDetailCard'>
                <div>
                    <img
                        src={items.image}
                        alt={items.name}
                    />
                    <ul>
                        {items.defense === 0
                        ?
                        <li>Attack: {items.attack}</li>
                        :
                        <li>Defense: {items.defense}</li>
                        }
                    </ul>
                </div>
                <div>
                    <div>{items.description}</div>
                    <div>{id * 2.5 * items.quantity} Rupees</div>
                    <div className = 'itemQuantity'>
                        <div onClick={handleDecrement} className = 'decrement'>-</div>
                        <div>{items.quantity}</div>
                        <div onClick={handleIncrement} className = 'increment'>+</div>
                    </div>

                    <div onClick={() => handleCart(items)} className = 'buyBtn'>Add to Cart</div>
                </div>
                
            </div>   
        </div>
    )
}

export default ItemDetail;