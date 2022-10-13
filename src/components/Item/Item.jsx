import './Item.css';
import {ItemCount} from '../ItemCount/ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export const Item = (props) => {

    const [contador, setContador] = useState(1);

    const incrementar = () => {
        setContador(contador + 1);
    }
    
    const decrementar = () => {
        setContador(contador - 1);
    }
    
    const onAdd = (cantidad) => {
       console.log(`Compraste ${cantidad} de productos`);
    }

    return(
       <div className="containerItem">
          <h1>
            {props.title}
          </h1>
          <div className="containerItemImage">
            <img src={props.url} alt={props.title}/>
          </div>
          <p>
            $ {props.price}
          </p>
          <ItemCount stock="5" initial={contador} mas={incrementar} menos={decrementar} onAdd={onAdd}/>
          <Link to={`/detalle/${props.key}`} className="detailButton">Ver detalle</Link>
       </div>
    )
}