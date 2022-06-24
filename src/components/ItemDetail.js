import { Link } from "react-router-dom";
import ItemCounts from "./ItemCounts";
const ItemDetail = ({item}) => {

    const onAdd = (cantidadSeleccionada) =>{
        console.log("desde Item Detail: " + cantidadSeleccionada)
        
        
    }
    return(
        <div className="item">
            <h2>{item.category}</h2>
            <h5 id="1">{item.title}</h5>
            <img src = {item.image}></img>
            <p>{item.description}</p>
            <ItemCounts stock = {5} initial = {1} onAdd ={onAdd}/>
            <p>precio : ${item.price}</p>
            <Link to={"/carrito"}><button>Terminar mi compra</button></Link>
            
        </div>
    )
}

 
export default ItemDetail