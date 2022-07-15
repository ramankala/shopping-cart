import { Link } from 'react-router-dom';

import '../styles/Header.css';

const Header = () => {

    return (
        <div className = 'header-ui'>
            <div>
                General Store
            </div>
            <div className = 'header-links'>
                <ul>

                    <Link to='/' >
                        <li>
                            Home
                        </li>
                    </Link>

                    <Link to='/shop' >
                        <li>
                            Shop
                        </li>
                    </Link>
                    
                    <li>
                        <img src = 'https://cdn2.iconfinder.com/data/icons/shopping-139/100/shopping_bag-512.png' /> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;