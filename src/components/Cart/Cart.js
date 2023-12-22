
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <hi>No hay items en el carrito</hi>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='box'>
                { cart.map(p => <CartItem key={p.id} {...p}/>) }
                <h3 className='subtitle has-text-grey-dark'>Total: ${total}</h3>
                <button onClick={() => clearCart()} className='button has-background-grey-lighter'>Limpiar Carrito</button>
                <Link to='/checkout' className='button has-background-grey-lighter'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart;


