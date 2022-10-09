import './ItemListContainer.css';

export const ItemListContainer = (props) => {
    return(
        <main className="containerItemList">
            {props.greeting}
        </main>
    )
}