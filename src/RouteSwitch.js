import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';


const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = { <Home /> } />
                <Route path = "/shop" element = { <Shop /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;

//Route paths to the Home page and Shop page, not App.js
