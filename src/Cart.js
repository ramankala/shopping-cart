import React, { useEffect } from 'react';

import './styles/Cart.css';

const Cart = (props) => {

    const { count, list } = props; 
    return(
        <div className = 'checkoutTable'>
            <div>
                <div>Item</div><div>Price</div>
            </div>
            {list.map((item) => {
                return (
                    <div className = 'subtotalTable'>
                        <div className = 'itemEntry'>
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div>{item.name}</div>
                            <div>x{item.quantity}</div>
                        </div>
                        <div>{item.id * 2.5 * item.quantity} Rupees</div>
                    </div>
                )
            })}
            <div className = 'totalCount'> 
                <div>Total:</div><div>{count} Rupees</div>
            </div>
            <div className = 'checkOutBtn'>CHECKOUT</div>
        </div>
    )
}

export default Cart;
