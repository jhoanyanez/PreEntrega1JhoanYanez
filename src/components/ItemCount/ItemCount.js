
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        } 
    }

    return(
        <div>
            <div className="card-footer-item">
                <button className="button is-danger is-small" onClick={decrement}>-</button>
                <h4 className="has-text-grey-dark">{quantity}</h4>
                <button className="button is-danger is-small" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button has-background-grey-lighter" onClick={()=> onAdd(quantity)} disable={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;