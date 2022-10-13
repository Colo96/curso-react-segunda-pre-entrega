import './ItemListContainer.css';
import {listaProductos} from '../Datos/data';
import { useState, useEffect } from 'react';
import {ItemList} from '../ItemList/ItemList';

export const ItemListContainer = (props) => {

    const [productos, setProductos] = useState(listaProductos);

    const obtenerProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve(productos);
            }, 2000);
        });
    }

    useEffect(() => {
       obtenerProductos().then((result) => {
         setProductos(result);
       });
    }, []);

    return(
        <main className="containerItemList">
            <ItemList productos={productos}/>
        </main>
    )
}