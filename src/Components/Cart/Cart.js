import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import icon from './cartIcon.png'
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)

    return (
        <div>
            <img className="cartIcon" src={icon} alt="cart"/>
            <h3>TOTAL: ${totalPrice}</h3>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
            
        </div>
    )
}

export default Cart;