import { Link } from 'react-router-dom';

import '../styles/Header.css';
import logo from '../imgs/2713455.png';

const Header = () => {

    return (
        <div className = 'header-ui'>
            <div>
                General Store
            </div>
            <div className = 'header-links'>
                <ul className = 'links'>

                    <Link className = 'homePg' to='/' >
                        <li>
                            Home
                        </li>
                    </Link>

                    <Link className = 'shopPg' to='/shop' >
                        <li>
                            Shop
                        </li>
                    </Link>
                    
                    <li className = 'cartPg'>
                        <img src = {logo} /> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;