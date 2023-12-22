import './ItemDetail.css';
import {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, title, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item ={
            id, title, price
        }

        addItem(item, quantity)
    }
    
    return (
        <article className='card'>
            <header className="card-header-title">
                <h2 className="title is-4">
                    {title}
                </h2>
            </header>
            <picture className='card-image'>
                <img src={img} alt={title}/>
            </picture>
            <section className='card-content'>
                <p className="title is-5">
                    Precio: ${price}
                </p>
                <p className="subtitle is-6">
                    Categoría: {category}
                </p>
                <p className="subtitle is-6">
                    Descripción: {description}
                </p>
            </section>
            <footer className="card-footer">
                {
                    quantityAdded > 0 ? (
                        <a className="button has-background-grey-lighter">
                            <Link to='/cart' className='Option'>Terminar compra</Link>
                        </a>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }                       
            </footer>
        </article>
    )
}

export default ItemDetail;



