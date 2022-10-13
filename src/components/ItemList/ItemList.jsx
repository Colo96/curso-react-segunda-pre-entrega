import './ItemList.css';
import {Item} from '../Item/Item';

export const ItemList = (props) => {
    return(
        <div className="containerListaProductos">
          {
            props.productos.map(element => {
                return(
                    <Item key={element.id} title={element.title} price={element.price} url={element.url}/>
                )
            })
          }
        </div>
    )
}