import React, { useEffect, useState } from 'react';

import ShopUI from './components/ShopUI';

import './styles/ShopUI.css';

const Shop = () => { 

    const weapons = [
        'savage lynel sword',
        "ancient bow",
        'frostblade',
        "radiant shield",
        'ancient shield',
        "royal guard's sword",
        "great eagle bow",
        'lightscale trident',
        'edge of duality',
        'master sword',
        'ancient battle axe++',
        'royal claymore'
    ]

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchEquipment();

    }, []);

    const fetchEquipment = async () => {
        const data = await fetch(
            'https://botw-compendium.herokuapp.com/api/v2/category/equipment',
            {mode: 'cors'}
        );

        const equipment = await data.json();
        const goods = equipment.data;
        goods.sort((a, b) => a.name > b.name ? 1 : -1);
        goods.map((item) => {
            if (weapons.includes(item.name)){
                setItems((prevItem) => {
                    return ([...prevItem, item])
                });
            }
        })
    }

    return (
        <div className = 'container'>
            <ShopUI
                items = {items}
             />
        </div>
    )
}

export default Shop;