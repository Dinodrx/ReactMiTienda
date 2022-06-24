import {Link} from "react-router-dom";
import ItemCounts from "./ItemCounts";

const Item = ({item}) => {

    const onAdd = (cantidadSeleccionada) =>{
        console.log("desde Item Detail: " + cantidadSeleccionada)
        
    }
    return (
   
        // <article classNameName="item">
        //     <h2>{item.title}</h2>
        //     <a href="#1">
        //         <img src = {item.image}></img>
        //     </a>
        // </article>
        <article>
            <div className="card">
            <p className="card-header">{item.title}</p>

            <Link to = {`./item/${item.id}`}><img src={item.image} className="card-img-top " alt="..."></img></Link>
            <ItemCounts stock = {5} initial = {1} onAdd ={onAdd}/>
            <div className="card-body">
            
            </div>
            </div>
        </article>
    )   
}


 
export default Item