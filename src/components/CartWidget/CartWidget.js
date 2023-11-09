import cart from "./assets/cart.svg";

const CartWidget = () => {
    return(
        <div className="buttons">
            <a className="button has-background-grey-lighter">
                <img src={cart} alt="cart-widget"/>
                <spam className="has-text-grey-dark"><strong>0</strong></spam>
            </a>
        </div>
    )
}

export default CartWidget



