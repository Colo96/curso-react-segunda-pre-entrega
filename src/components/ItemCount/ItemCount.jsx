import './ItemCount.css';

export const ItemCount = (props) => {

    return(
        <div className="containerItemCount">
            <div className="containerCount">
              <button disabled={props.initial <= 1} onClick={props.menos}>-</button>
              <p>{props.initial}</p>
              <button disabled={props.initial >= props.stock} onClick={props.mas}>+</button>
            </div>
            <button disabled={props.stock <= 0} onClick={() => props.onAdd(props.initial)}>Agregar al carrito</button>
        </div>
    )
}