import Item from "./Item"

const ItemLits = ({items}) => {

    return(
        <section className="products-container">
                {items.map(item =>(
                    <Item key = {item.id} item = {item}/>
                  ))}
        </section>
    )
    
}


export default ItemLits