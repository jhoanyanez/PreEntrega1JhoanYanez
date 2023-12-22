import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ title, price, id, quantity }) => {

  const { removeItem } = useContext(CartContext)


  return (
    <div className="box">
      <h1 className="title has-text-grey-dark" >{title}</h1>
      <p className="subtitle has-text-grey-dark">Cantidad:{quantity}</p>
      <p className="subtitle has-text-grey-dark">Subtotal:${price * quantity}</p>
      <button className="button has-background-grey-lighter" onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  )
}

export default CartItem;