import './ItemDetailContainer.css';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { listaProductos } from '../Datos/data';
import {useState, useEffect} from 'react';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const getItem = (id) => {
        return new Promise((resolve, reject) => {
            const item = listaProductos.find(item => item.id === parseInt(id));
            resolve(item);
        });
    }

    useEffect(() => {
       const getProducto = async() => {
          const producto = await getItem(1);
          setItem(producto);
       }
       getProducto();
    }, []);

    return(
        <div className="itemDetailContainer">
            <ItemDetail item={item}/>
        </div>
    )
}