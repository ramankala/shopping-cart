import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Home from './Home';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import Header from './components/Header';
import Cart from './Cart';


const RouteSwitch = () => {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const handleCart = (item) => {
        setList((prevItem) => [...prevItem, item]);
        setCount((prevCount) => prevCount + (item.id * 2.5 * item.quantity));
    };

    return (
        <BrowserRouter basename="">
            <Header
            list={list}
             />
            <Routes>
                <Route path = "/" element = { <Home /> } />
                <Route path = "/shop" element = { <Shop /> } />
                <Route path = "/shop/:id" element = { <ItemDetail handleCart = {handleCart}/> } />
                <Route
                     path = "/cart" element = { 
                        <Cart
                         list={list}
                         count={count}   
                            />
                    } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;

