import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './styles/ItemDetail.css';

const ItemDetail = () => {

    const [items, setItems] =  useState([]);

    let { id } = useParams();

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`, { mode: 'cors' });
        const data = await fetchItem.json();

        console.log(data.data);
        setItems(data.data);
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
                    <div>{id * 2.5} Rupees</div>
                    <div className = 'buyBtn'>Add to Cart</div>
                </div>
                
            </div>   
        </div>
    )
}

export default ItemDetail;