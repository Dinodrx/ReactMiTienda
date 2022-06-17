const ItemDetail = ({item}) => {

    return(
        <div className="item">
            <h2>{item.category}</h2>
            <h5 id="1">{item.title}</h5>
            <img src = {item.image}></img>
            <p>{item.description}</p>
            <p>precio : ${item.price}</p>
            
        </div>
    )
}

 
export default ItemDetail