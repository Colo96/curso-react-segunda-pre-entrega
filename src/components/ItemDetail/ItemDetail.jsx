import './ItemDetail.css';

export const ItemDetail = (props)=>{
    return(
        <div className='detailContainer'>
            <div className='imgContainer'>
                <img src={props.item.url} alt={props.item.title}/>
            </div>
            <div className='imgContainer'>
                <h4>{props.item.title}</h4>
                <h5>$ {props.item.price}</h5>
            </div>
        </div>
    )
}