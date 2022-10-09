import './CartWidget.css';
import image from '../../assets/carrito-de-compras.png';

export const CartWidget = () => {
    return(
        <div className="containerCarrito">
           <img src={image} alt="Carrito de compras"/>
           <span className="contadorItems">0</span>
        </div>
    )
}