import { Link } from 'react-router-dom';

import '../styles/ShopUI.css';

const ShopUI = (props) => {
    const { items } = props;

    return (
        <div className='shopContainer'>
            {items.map((item, index) => {
                return (
                <Link to={`/shop/${item.id}`} >
                    <div
                        className = 'weaponCard'
                        key = {index}
                    > 
    
                        <img 
                        src = {item.image}
                        alt = {item.name}
                        />

                        <div>
                            <div>{item.id * 2.5} Rupees</div>
                            <div>{item.name}</div>
                        </div>
                    </div>
                </Link>
                    )
            })}
        </div>
    )
}

export default ShopUI;