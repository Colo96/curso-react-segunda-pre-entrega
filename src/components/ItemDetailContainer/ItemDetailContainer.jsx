import './ItemDetailContainer.css';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { listaProductos } from '../Datos/data';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const {detalleId} = useParams();

    /*const getItem = (id) => {
        return new Promise((resolve, reject) => {
            const item = listaProductos.find(item => item.id === parseInt(detalleId));
            resolve(item);
        });
    }*/

    /*useEffect(() => {
       const getProducto = async() => {
          const producto = await getItem(1);
          setItem(producto);
       }
       getProducto();
    }, []);*/

    useEffect(() => {
        const getProducto = new Promise(resolve => {
            setTimeout(() => {
               resolve(listaProductos);
            }, 3000);
        });
        getProducto.then(res => setItem(res.find(producto => producto.id === parseInt(detalleId))));
    }, []);

    return(
        <div className="itemDetailContainer">
            <ItemDetail item={item}/>
        </div>
    )
}