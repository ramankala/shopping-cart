import { Link } from 'react-router-dom';

import '../styles/ShopUI.css';

const ShopUI = (props) => {
    const { items } = props;

    return (
        <div className='shopContainer'>
            {items.map((item, index) => {
                return (
                    <div
                        className = 'weaponCard'
                        key = {index}
                    > 
    
                        <img 
                        src = {item.image}
                        alt = {item.name}
                        />
    
                        <h4>{item.id * 2.5} Rupees</h4>
                        <Link to={`/shop/${item.id}`} >
                            <h1>{item.name}</h1>
                        </Link>
                    </div>
                    )
            })}
        </div>
    )
}

export default ShopUI;