import cart from "./assets/cart.svg";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
const { totalQuantity } = useContext(CartContext)

    return (
        <a className="button has-background-grey-lighter">
            <Link to='/cart' className="CartWidget">
                <img className="CartImg" src={cart} alt="cart-widget"/>
                <spam className="has-text-grey-dark"><strong>{totalQuantity}</strong></spam>
            </Link>
        </a>
    )
}

export default CartWidget;



