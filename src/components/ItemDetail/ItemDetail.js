
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, title, img, category, description, price, stock}) => {
    return (
        <article className='card'>
            <header className="card-header-title">
                <h2 className="title is-4">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={img} alt={title}/>
            </picture>
            <section>
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
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) =>console.log('Cantidad agregada', quantity)}/>          
            </footer>
        </article>
    )
}

export default ItemDetail;



