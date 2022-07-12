import React, { useEffect, useState } from 'react';

import ShopUI from './components/ShopUI';

import './styles/ShopUI.css';

const Shop = () => { 

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchFruits();
    //     setItems([
    //         {
    //         fruit: 'Banana',
    //         price: '3.99',
    //         imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg'
    //         },
    //         {
    //             fruit: 'Mango',
    //             price: '4.99',
    //             imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg'
    //         },
    //         {
    //             fruit: 'Oranges',
    //             price: '3.50',
    //             imgUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F01%2F03%2FGettyImages-1205638014-2000.jpg&q=60'
    //         }
    // ]);
    }, []);

    const fetchFruits = async () => {
        const data = await fetch(
            'https://botw-compendium.herokuapp.com/api/v2/entry/moblin',
            {mode: 'cors'}
        );

        const fruits = await data.json();
        console.log(fruits);
        setItems([fruits.data]);
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