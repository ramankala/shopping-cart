import { Link } from 'react-router-dom';

import '../styles/Header.css';
import logo from '../imgs/2713455.png';

const Header = (props) => {

    const { list } = props;

    return (
        <div className = 'header-ui'>
            <div>
                Breath of Wild Store
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
                    
                    <Link className = 'cartPg' to='/cart'>
                        <li className = 'cartPg'>
                            <img src = {logo} /> 
                        </li>
                    </Link>
                    <div className = 'amountInCart'>{list.reduce((prev, curr) => prev + curr.quantity, 0)}</div>
                </ul>
            </div>
        </div>
    )
}

export default Header;