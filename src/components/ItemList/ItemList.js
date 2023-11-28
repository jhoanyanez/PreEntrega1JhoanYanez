
import Item from '../Item/Item';


const ItemList = ({products}) => {
    return(
        <div className='columns'> 
            <div className="column is-4">
                {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </div>
        </div>
    )
}

export default ItemList;