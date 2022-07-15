import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import Header from './components/Header';



const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path = "/" element = { <Home /> } />
                <Route path = "/shop" element = { <Shop /> } />
                <Route path = "/shop/:id" element = { <ItemDetail /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;

//Route paths to the Home page and Shop page, not App.js
