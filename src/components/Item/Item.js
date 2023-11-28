
import {Link} from "react-router-dom";


const Item = ({id, title, img, price, stock}) => {

return (
    <div class="card">
        <div class="card-image">
            <figure className="card-image is-1by1">
                <img src={img} alt={title}/>
            </figure>
        </div>
        <div class="card-content">
            <p className="title is-4">{title}</p>
            <p className="title is-5">Precio: ${price}</p>
            <p className="subtitle is-6">Disponibles: {stock}</p>
            <button className="button has-background-grey-lighter">
                <Link to={`/item/${id}`}>Ver Detalle</Link>
            </button>
        </div>
    </div>
)
}

export default Item;



