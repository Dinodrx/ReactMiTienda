import Item from "./Item";
import ItemCounts from "./ItemCounts";

const ItemLits = ({items}) => {

    return(
        <section className="products-container">
                {items.map(item =>(
                    <Item key = {item.id} item = {item}/>
                  ))}
            <div><ItemCounts stock = {5} initial = {1} onAdd ={()=>{}}/></div>
        </section>
    )
    
}


export default ItemLits