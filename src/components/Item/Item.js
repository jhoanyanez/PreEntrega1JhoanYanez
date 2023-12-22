import './Item.css';
import {Link} from "react-router-dom";


const Item = ({id, title, img, price, stock}) => {
    return (
        <article className='card'>
            <picture className='card-image'>
                <img src={img} alt={title}/>
            </picture>
            <section>
                <p className="title is-4">{title}</p>
                <p className="title is-5 is-centered">Precio: ${price}</p>
                <p className="subtitle is-6">Disponibles: {stock}</p>
            </section>
            <footer className="card-footer">
                <button className="button has-background-grey-lighter">
                    <Link to={`/item/${id}`}>Ver Detalle</Link>
                </button>
            </footer>
        </article>
    )
}

export default Item;










