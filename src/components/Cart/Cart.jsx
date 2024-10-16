import { useContext } from 'react';
import { ShopContect } from '../../context';

import {} from './cart.css'


function Cart(props) {
    const { handleBascketShow, order } = useContext(ShopContect);

    const quantity = order.length;
    const cartImg = require('../../img/cart.png');

    return <div className="cart cursor-pointer" onClick = {handleBascketShow}>
        <img src={cartImg} alt="" /> 
        {quantity !== 0 ? <span className="cart-quantity text-white ms-2">{quantity}</span> : null}
    </div>
}
export {Cart}