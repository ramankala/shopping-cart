import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            <h1>{items.name}</h1>
            <img
                src={items.image}
                alt={items.name}
            />
            <ul>
                <li>Attack: {items.attack}</li>
                <li>Defense: {items.defense}</li>
            </ul>
            <p>{items.description}</p>
        </div>
    )
}

export default ItemDetail;