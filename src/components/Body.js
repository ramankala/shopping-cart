import { Link } from 'react-router-dom';

import '../styles/Body.css';

const Body = () => {

    return (
        <div className = 'bodyContainer'>
            <div className = 'bodyText'>
                <div>
                    All-purpose goods delivered straight to your doorstep
                </div>
                <div>
                    Get yourself a <span className = 'redPotion'>red potion</span> without leaving your home
                </div>
                <Link className='shopBtn' to='/shop' >
                    <div>
                        Shop Now
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Body;